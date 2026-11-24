import type { Metadata } from 'next'
import { HandHeart, ListChecks, ListX, ScrollText, UserRound } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Giới thiệu & Ghi nhận chủ thể',
  description: 'Thông tin thực tập sinh, phạm vi di sản và nguyên tắc tôn trọng cộng đồng chủ thể di sản.',
}

function The({
  icon: Icon,
  tieuDe,
  children,
  canhBao,
}: {
  icon: typeof ScrollText
  tieuDe: string
  children: React.ReactNode
  canhBao?: boolean
}) {
  return (
    <section
      className={
        canhBao
          ? 'rounded-lg border border-warning-foreground/30 bg-warning p-5 text-warning-foreground md:p-6'
          : 'rounded-lg border border-border bg-card p-5 md:p-6'
      }
    >
      <h2 className="flex items-center gap-2 font-serif text-xl font-semibold">
        <Icon className="size-5 shrink-0" aria-hidden="true" />
        {tieuDe}
      </h2>
      <div className="mt-3 leading-relaxed">{children}</div>
    </section>
  )
}

export default function TrangGioiThieu() {
  return (
    <div className="flex flex-col gap-5">
      <header className="rounded-lg border border-border bg-primary p-5 text-primary-foreground md:p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Mã đề tài: G01</p>
        <h1 className="mt-1 text-balance font-serif text-2xl font-bold md:text-3xl">
          Hồ sơ số di tích quốc gia đặc biệt
        </h1>
      </header>

      <The icon={UserRound} tieuDe="Thông tin thực hiện">
        <dl className="grid gap-2 sm:grid-cols-[10rem_1fr]">
          <dt className="font-semibold text-muted-foreground">Tên ứng dụng</dt>
          <dd>Hồ sơ số di tích quốc gia đặc biệt (Mã đề tài: G01)</dd>
          <dt className="font-semibold text-muted-foreground">Thực tập sinh</dt>
          <dd>Vương Bá Nguyên</dd>
          <dt className="font-semibold text-muted-foreground">Mã sinh viên</dt>
          <dd>PH59253</dd>
          <dt className="font-semibold text-muted-foreground">Nhóm</dt>
          <dd>Nhóm 1</dd>
          <dt className="font-semibold text-muted-foreground">Chương trình</dt>
          <dd>
            Chương trình Thực tập sinh 15 - Hợp tác giữa FPT Polytechnic và IMTA TECH (Dự án xã hội phi lợi nhuận).
          </dd>
        </dl>
      </The>

      <The icon={ScrollText} tieuDe="Phạm vi di sản đã chọn">
        <p>
          Tập trung chuẩn hóa hồ sơ tư liệu cho 15 Di tích quốc gia đặc biệt tiêu biểu thuộc nhóm được xếp hạng đầu
          tiên (Đợt 1 đến Đợt 4) của Thủ tướng Chính phủ, theo các Quyết định số 1272/QĐ-TTg, 548/QĐ-TTg, 1419/QĐ-TTg
          và 2383/QĐ-TTg.
        </p>
      </The>

      <The icon={HandHeart} tieuDe="Ghi nhận quyền cộng đồng và chủ thể di sản">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Mọi thông tin di tích đều trích dẫn từ quyết định xếp hạng của Nhà nước và cơ quan quản lý di sản.
          </li>
          <li>Tôn trọng tuyệt đối giá trị lịch sử, tín ngưỡng và cộng đồng địa phương nơi có di tích.</li>
          <li>
            Không sử dụng AI để sinh ảnh hiện vật hay ảnh di tích. Các khung đồ họa trong ứng dụng là giao diện minh họa
            hình vẽ, không phải là hình ảnh tư liệu.
          </li>
          <li>
            Trợ lý Gemini chỉ trả lời trong phạm vi dữ liệu đã kiểm chứng; khóa API được giữ bí mật ở máy chủ và không
            hiển thị trong trình duyệt.
          </li>
        </ul>
      </The>

      <The icon={ListChecks} tieuDe="Những nội dung đã thực hiện">
        <ul className="list-disc space-y-1 pl-5">
          <li>Cơ sở dữ liệu 15 bản ghi (G01-01 đến G01-15), mỗi bản ghi có tối thiểu 3 nguồn tư liệu.</li>
          <li>Tra cứu, lọc theo tỉnh/thành, loại hình, đợt xếp hạng; xuất dữ liệu mở JSON/CSV.</li>
          <li>Hỏi đáp có căn cứ dữ liệu, đọc thuyết minh tiếng Việt, phiếu nguồn tư liệu Phụ lục 03.</li>
        </ul>
      </The>

      <The icon={ListX} tieuDe="Những nội dung chưa thực hiện được trong phạm vi tuần thực tập" canhBao>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Do thời gian thực tập trong 1 tuần, ứng dụng mới dừng ở 15 hồ sơ di tích quốc gia đặc biệt tiêu biểu, chưa
            tải toàn bộ hơn 130 di tích quốc gia đặc biệt trên cả nước.
          </li>
          <li>
            Chưa có điều kiện đi thực địa chụp ảnh trực tiếp tại tất cả 15 tỉnh/thành phố, nên ứng dụng sử dụng dữ liệu
            văn bản chính thống và sơ đồ khung thông tin thay vì ảnh tự chụp.
          </li>
          <li>
            Địa danh hành chính được ghi theo thời điểm ban hành quyết định xếp hạng; chưa cập nhật đầy đủ theo việc sắp
            xếp đơn vị hành chính mới.
          </li>
        </ul>
      </The>
    </div>
  )
}
