import { ExternalLink, ShieldCheck, TriangleAlert } from 'lucide-react'
import { taoTrichDan, timNguon, type DiSan } from '@/src/data/disan'
import { NutSaoChep } from '@/components/nut-sao-chep'

export function KhoiNguonTuLieu({ diSan: d }: { diSan: DiSan }) {
  const thieuNguon = d.nguonTuLieu.length === 0 || d.duongDanNguon.length === 0
  return (
    <section
      aria-labelledby="nguon-tu-lieu"
      className="rounded-lg border-2 border-primary bg-card p-5 md:p-6"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 id="nguon-tu-lieu" className="flex items-center gap-2 font-serif text-xl font-semibold text-primary">
          <ShieldCheck className="size-5" aria-hidden="true" />
          Nguồn tư liệu
        </h2>
        <NutSaoChep noiDung={taoTrichDan(d)} nhan="Sao chép nguồn trích dẫn" />
      </div>

      {thieuNguon ? (
        <p
          role="alert"
          className="mt-4 flex items-start gap-2 rounded-md border border-warning-foreground/30 bg-warning p-3 text-sm font-medium text-warning-foreground"
        >
          <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          Cảnh báo: Bản ghi này chưa có đủ nguồn tư liệu chính thống. Thông tin cần được kiểm chứng trước khi sử dụng.
        </p>
      ) : (
        <ol className="mt-4 flex flex-col gap-3">
          {d.nguonTuLieu.map((t, i) => {
            const n = timNguon(t.nguonId)
            return (
              <li key={t.nguonId} className="flex gap-3 rounded-md bg-muted p-3 text-sm">
                <span className="font-mono font-semibold text-primary">[{i + 1}]</span>
                <div className="flex min-w-0 flex-col gap-1">
                  <p className="font-semibold">{n?.ten ?? t.nguonId}</p>
                  {n && <p className="text-muted-foreground">{n.coQuanBanHanh}</p>}
                  <p>{t.noiDungTrich}</p>
                  {n?.duongDan.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 break-all font-medium text-primary underline underline-offset-2"
                    >
                      {l.nhan}
                      <ExternalLink className="size-3.5 shrink-0" aria-hidden="true" />
                      <span className="sr-only">(mở trong tab mới)</span>
                    </a>
                  ))}
                </div>
              </li>
            )
          })}
        </ol>
      )}
      <p className="mt-4 text-xs text-muted-foreground">
        Mã tư liệu {d.maTuLieu}. Khối nguồn tư liệu luôn được hiển thị cố định ở cuối mỗi hồ sơ theo nguyên tắc minh
        bạch nguồn.
      </p>
    </section>
  )
}
