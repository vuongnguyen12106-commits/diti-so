import { generateText, Output } from 'ai'
import { z } from 'zod'
import { CAU_TRA_LOI_KHONG_CO_DU_LIEU, DI_SAN, dinhDangQuyetDinh } from '@/src/data/disan'
import { TRUONG_DU_LIEU, type KetQuaHoiDap, type TruongDuLieu } from '@/lib/hoi-dap'

export const maxDuration = 60

const MO_HINH = 'google/gemini-3.8-flash'

const duLieuNguCanh = JSON.stringify(
  DI_SAN.map((d) => ({
    maTuLieu: d.maTuLieu,
    tenChinhThuc: d.tenChinhThuc,
    tenGoiKhac: d.tenGoiKhac,
    loaiHinh: d.loaiHinh,
    diaPhuong: d.diaPhuong,
    quyetDinhXepHang: d.quyetDinhXepHang,
    namXepHang: d.namXepHang,
    giaTriTieuBieu: d.giaTriTieuBieu,
    tinhTrangBaoTon: d.tinhTrangBaoTon,
    nguonTuLieu: d.nguonTuLieu,
  })),
)

const HUONG_DAN = `Bạn là trợ lý tra cứu tư liệu của ứng dụng "Hồ sơ số di tích quốc gia đặc biệt" (G01).
Bạn CHỈ được trả lời dựa trên CƠ SỞ DỮ LIỆU gồm 15 bản ghi dưới đây. Tuyệt đối không dùng kiến thức bên ngoài, không suy đoán, không bổ sung chi tiết không có trong dữ liệu.

Quy tắc:
1. Nếu câu hỏi liên quan đến di tích hoặc thông tin CÓ trong dữ liệu: đặt coDuLieu = true, viết "traLoi" bằng tiếng Việt, trang trọng, ngắn gọn, chỉ diễn đạt lại nội dung trong dữ liệu. Trong "canCu", liệt kê mọi bản ghi đã dùng (maTuLieu) và tên các trường dữ liệu đã dùng.
2. Nếu câu hỏi hỏi về di tích KHÔNG có trong 15 bản ghi, hoặc hỏi thông tin không có trong các trường dữ liệu (ví dụ giá vé, giờ mở cửa, diện tích, số liệu không có), hoặc không liên quan đến di tích: đặt coDuLieu = false, canCu = [] và traLoi = "${CAU_TRA_LOI_KHONG_CO_DU_LIEU}".
3. Nếu chỉ một phần câu hỏi có dữ liệu, chỉ trả lời phần có dữ liệu và nói rõ phần còn lại chưa có dữ liệu được kiểm chứng.
4. Các tên trường hợp lệ: ${TRUONG_DU_LIEU.join(', ')}.

CƠ SỞ DỮ LIỆU (JSON):
${duLieuNguCanh}`

const schema = z.object({
  coDuLieu: z.boolean(),
  traLoi: z.string(),
  canCu: z.array(
    z.object({
      maTuLieu: z.string(),
      truongDuLieu: z.array(z.enum(TRUONG_DU_LIEU)),
    }),
  ),
})

const khongCoDuLieu = (): KetQuaHoiDap => ({ coDuLieu: false, traLoi: CAU_TRA_LOI_KHONG_CO_DU_LIEU, canCu: [] })

export async function POST(req: Request) {
  let cauHoi = ''
  try {
    const body = await req.json()
    cauHoi = typeof body?.cauHoi === 'string' ? body.cauHoi.trim() : ''
  } catch {
    return Response.json({ loi: 'Yêu cầu không hợp lệ.' }, { status: 400 })
  }
  if (!cauHoi || cauHoi.length > 500) {
    return Response.json({ loi: 'Câu hỏi cần có từ 1 đến 500 ký tự.' }, { status: 400 })
  }

  try {
    const { output } = await generateText({
      model: MO_HINH,
      system: HUONG_DAN,
      prompt: cauHoi,
      temperature: 0,
      output: Output.object({ schema }),
    })

    const canCu = output.canCu
      .map((c) => {
        const d = DI_SAN.find((x) => x.maTuLieu === c.maTuLieu)
        if (!d) return null
        return {
          maTuLieu: d.maTuLieu,
          id: d.id,
          tenBanGhi: d.tenChinhThuc,
          quyetDinh: dinhDangQuyetDinh(d),
          truongDuLieu: Array.from(new Set(c.truongDuLieu)) as TruongDuLieu[],
        }
      })
      .filter((c): c is NonNullable<typeof c> => c !== null)

    if (!output.coDuLieu || canCu.length === 0) return Response.json(khongCoDuLieu())

    const ketQua: KetQuaHoiDap = { coDuLieu: true, traLoi: output.traLoi, canCu }
    return Response.json(ketQua)
  } catch (error) {
    console.error('[hoi-dap] Lỗi khi gọi mô hình:', error)
    return Response.json({ loi: 'Không thể kết nối tới mô hình Gemini lúc này. Vui lòng thử lại sau.' }, { status: 502 })
  }
}
