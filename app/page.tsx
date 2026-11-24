import { TraCuuDanhMuc } from '@/components/tra-cuu-danh-muc'
import { DI_SAN } from '@/src/data/disan'

export default function TrangChu() {
  return (
    <div className="flex flex-col gap-6">
      <section aria-labelledby="tieu-de-trang-chu" className="rounded-lg border border-border bg-card p-5 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-ring">Cơ sở dữ liệu mở - Mã đề tài G01</p>
        <h1 id="tieu-de-trang-chu" className="mt-2 text-balance font-serif text-2xl font-bold text-primary md:text-4xl">
          Tra cứu danh mục di tích quốc gia đặc biệt
        </h1>
        <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {DI_SAN.length} hồ sơ di tích được chuẩn hóa theo quyết định xếp hạng của Thủ tướng Chính phủ, Luật Di sản văn
          hóa số 45/2024/QH15 và Chương trình số hóa Di sản văn hóa Việt Nam (Quyết định số 2026/QĐ-TTg). Mỗi hồ sơ đều
          có tối thiểu 3 nguồn tư liệu chính thống.
        </p>
      </section>
      <TraCuuDanhMuc />
    </div>
  )
}
