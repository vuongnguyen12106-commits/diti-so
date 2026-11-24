import type { Metadata } from 'next'
import { ExternalLink } from 'lucide-react'
import { NGUON_TU_LIEU } from '@/src/data/disan'
import { PhieuNguon } from '@/components/nguon/phieu-nguon'

export const metadata: Metadata = {
  title: 'Nguồn tư liệu & Phiếu nguồn',
  description: '8 nguồn tư liệu chính thống và bảng Phiếu nguồn tư liệu theo chuẩn Phụ lục 03.',
}

export default function TrangNguon() {
  return (
    <div className="flex flex-col gap-6">
      <header className="rounded-lg border border-border bg-card p-5 md:p-6">
        <h1 className="font-serif text-2xl font-bold text-primary md:text-3xl">Nguồn tư liệu &amp; Phiếu nguồn</h1>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          Toàn bộ dữ liệu trong ứng dụng được trích dẫn từ {NGUON_TU_LIEU.length} nguồn tư liệu chính thống dưới đây.
          Các đường dẫn sẽ mở trong tab mới.
        </p>
      </header>

      <section aria-labelledby="danh-sach-nguon">
        <h2 id="danh-sach-nguon" className="mb-3 font-serif text-xl font-semibold text-primary">
          Danh sách 8 nguồn tư liệu chính
        </h2>
        <ol className="grid gap-3 md:grid-cols-2">
          {NGUON_TU_LIEU.map((n, i) => (
            <li key={n.id} className="flex flex-col gap-2 rounded-lg border border-border bg-card p-4">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-sm font-semibold text-primary">Nguồn {i + 1}</span>
                <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                  {n.mucDoTinCay}
                </span>
              </div>
              <h3 className="font-semibold leading-snug">{n.ten}</h3>
              <p className="text-sm text-muted-foreground">
                {n.coQuanBanHanh} - {n.ngayBanHanh}
              </p>
              <p className="text-sm leading-relaxed">{n.moTa}</p>
              <div className="mt-auto flex flex-col gap-1">
                {n.duongDan.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 break-all text-sm font-medium text-primary underline underline-offset-2"
                  >
                    {l.url.replace(/^https?:\/\//, '')}
                    <ExternalLink className="size-3.5 shrink-0" aria-hidden="true" />
                    <span className="sr-only">(mở trong tab mới)</span>
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <PhieuNguon />
    </div>
  )
}
