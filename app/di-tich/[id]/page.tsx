import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DI_SAN, dinhDangQuyetDinh, timDiSan } from '@/src/data/disan'
import { LoaiHinhBadge } from '@/components/loai-hinh-badge'
import { DocThuyetMinh } from '@/components/ho-so/doc-thuyet-minh'
import { ChonHoSo } from '@/components/ho-so/chon-ho-so'
import { KhoiNguonTuLieu } from '@/components/ho-so/khoi-nguon-tu-lieu'
import { KhungMinhHoa } from '@/components/ho-so/khung-minh-hoa'

export function generateStaticParams() {
  return DI_SAN.map((d) => ({ id: d.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const d = timDiSan(id)
  if (!d) return { title: 'Không tìm thấy hồ sơ' }
  return { title: d.tenChinhThuc, description: `${d.loaiHinh} - ${d.diaPhuong.tinhThanh}. ${dinhDangQuyetDinh(d)}.` }
}

function Truong({ nhan, children }: { nhan: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1 border-b border-border py-3 last:border-b-0 md:grid-cols-[14rem_1fr] md:gap-4">
      <dt className="text-sm font-semibold text-muted-foreground">{nhan}</dt>
      <dd className="leading-relaxed">{children}</dd>
    </div>
  )
}

export default async function TrangHoSo({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const d = timDiSan(id)
  if (!d) notFound()

  const viTri = DI_SAN.findIndex((x) => x.id === d.id)
  const truoc = DI_SAN[viTri - 1]
  const sau = DI_SAN[viTri + 1]

  const vanBanDoc = [
    `Hồ sơ di tích ${d.tenChinhThuc}, mã tư liệu ${d.maTuLieu.replace('-', ' ')}.`,
    d.tenGoiKhac.length ? `Tên gọi khác: ${d.tenGoiKhac.join(', ')}.` : '',
    `Loại hình: ${d.loaiHinh}.`,
    `Địa điểm: ${d.diaPhuong.quanHuyen}, ${d.diaPhuong.tinhThanh}.`,
    `Được xếp hạng di tích quốc gia đặc biệt theo ${dinhDangQuyetDinh(d)}, đợt ${d.quyetDinhXepHang.dotXepHang}.`,
    `Giá trị lịch sử: ${d.giaTriTieuBieu.lichSu}`,
    `Giá trị văn hóa: ${d.giaTriTieuBieu.vanHoa}`,
    `Giá trị khoa học: ${d.giaTriTieuBieu.khoaHoc}`,
    `Tình trạng bảo tồn: ${d.tinhTrangBaoTon}`,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <article className="flex flex-col gap-6" aria-labelledby="ten-di-tich">
      <ChonHoSo hienTai={d.id} />

      <header className="flex flex-col gap-4 rounded-lg border border-border bg-card p-5 md:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded border border-accent/70 px-1.5 py-0.5 font-mono text-xs text-primary">
            {d.maTuLieu}
          </span>
          {d.phanLoai.map((l) => (
            <LoaiHinhBadge key={l} loai={l} />
          ))}
        </div>
        <h1 id="ten-di-tich" className="text-balance font-serif text-2xl font-bold leading-tight text-primary md:text-3xl">
          {d.tenChinhThuc}
        </h1>
        <DocThuyetMinh vanBan={vanBanDoc} />
      </header>

      <KhungMinhHoa diSan={d} />

      <section aria-labelledby="thong-tin-chuan" className="rounded-lg border border-border bg-card p-5 md:p-6">
        <h2 id="thong-tin-chuan" className="font-serif text-xl font-semibold text-primary">
          Thông tin chuẩn hồ sơ xếp hạng
        </h2>
        <dl className="mt-2">
          <Truong nhan="Tên chính thức theo quyết định">{d.tenChinhThuc}</Truong>
          <Truong nhan="Tên gọi khác">
            {d.tenGoiKhac.length ? d.tenGoiKhac.join('; ') : <span className="text-muted-foreground">Không có</span>}
          </Truong>
          <Truong nhan="Loại hình di tích">{d.loaiHinh}</Truong>
          <Truong nhan="Địa điểm">
            {d.diaPhuong.quanHuyen}, {d.diaPhuong.tinhThanh}
            <span className="mt-1 block text-sm text-muted-foreground">{d.diaPhuong.ghiChuHanhChinh}</span>
          </Truong>
          <Truong nhan="Quyết định xếp hạng">
            Quyết định số <strong>{d.quyetDinhXepHang.soHieu}</strong> ngày{' '}
            <strong>{d.quyetDinhXepHang.ngayBanHanh}</strong> của {d.quyetDinhXepHang.coQuanBanHanh}
            <span className="mt-1 block text-sm text-muted-foreground">
              Đợt xếp hạng thứ {d.quyetDinhXepHang.dotXepHang} - Năm {d.namXepHang}
            </span>
          </Truong>
        </dl>
      </section>

      <section aria-labelledby="gia-tri" className="rounded-lg border border-border bg-card p-5 md:p-6">
        <h2 id="gia-tri" className="font-serif text-xl font-semibold text-primary">
          Giá trị tiêu biểu
        </h2>
        <dl className="mt-2">
          <Truong nhan="Giá trị lịch sử">{d.giaTriTieuBieu.lichSu}</Truong>
          <Truong nhan="Giá trị văn hóa">{d.giaTriTieuBieu.vanHoa}</Truong>
          <Truong nhan="Giá trị khoa học">{d.giaTriTieuBieu.khoaHoc}</Truong>
        </dl>
      </section>

      <section aria-labelledby="bao-ton" className="rounded-lg border border-border bg-card p-5 md:p-6">
        <h2 id="bao-ton" className="font-serif text-xl font-semibold text-primary">
          Tình trạng bảo tồn
        </h2>
        <p className="mt-2 leading-relaxed">{d.tinhTrangBaoTon}</p>
      </section>

      <nav aria-label="Hồ sơ trước và sau" className="grid grid-cols-2 gap-3">
        {truoc ? (
          <Link
            href={`/di-tich/${truoc.id}`}
            className="flex items-center gap-2 rounded-lg border border-border bg-card p-3 text-sm hover:border-accent"
          >
            <ChevronLeft className="size-4 shrink-0" aria-hidden="true" />
            <span className="line-clamp-2">{truoc.tenGoiKhac[0] ?? truoc.tenChinhThuc}</span>
          </Link>
        ) : (
          <span />
        )}
        {sau && (
          <Link
            href={`/di-tich/${sau.id}`}
            className="flex items-center justify-end gap-2 rounded-lg border border-border bg-card p-3 text-right text-sm hover:border-accent"
          >
            <span className="line-clamp-2">{sau.tenGoiKhac[0] ?? sau.tenChinhThuc}</span>
            <ChevronRight className="size-4 shrink-0" aria-hidden="true" />
          </Link>
        )}
      </nav>

      <KhoiNguonTuLieu diSan={d} />
    </article>
  )
}
