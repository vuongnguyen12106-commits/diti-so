import Link from 'next/link'
import { ChevronRight, FileText, MapPin, TriangleAlert } from 'lucide-react'
import type { DiSan } from '@/src/data/disan'
import { LoaiHinhBadge } from '@/components/loai-hinh-badge'

export function DiTichCard({ diSan: d }: { diSan: DiSan }) {
  const thieuNguon = d.nguonTuLieu.length === 0
  return (
    <Link
      href={`/di-tich/${d.id}`}
      className="group flex h-full flex-col gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-accent hover:bg-secondary/40 focus-visible:outline-2 focus-visible:outline-ring"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="rounded border border-accent/70 px-1.5 py-0.5 font-mono text-xs text-primary">
          {d.maTuLieu}
        </span>
        <span className="text-xs font-medium text-muted-foreground">Đợt {d.quyetDinhXepHang.dotXepHang}</span>
      </div>
      <h3 className="text-pretty font-serif text-lg font-semibold leading-snug text-primary">{d.tenChinhThuc}</h3>
      <div className="flex flex-wrap gap-1.5">
        {d.phanLoai.map((l) => (
          <LoaiHinhBadge key={l} loai={l} />
        ))}
      </div>
      <dl className="flex flex-col gap-1.5 text-sm">
        <div className="flex items-start gap-2">
          <dt>
            <MapPin className="mt-0.5 size-4 text-ring" aria-hidden="true" />
            <span className="sr-only">Địa phương</span>
          </dt>
          <dd>{d.diaPhuong.tinhThanh}</dd>
        </div>
        <div className="flex items-start gap-2">
          <dt>
            <FileText className="mt-0.5 size-4 text-ring" aria-hidden="true" />
            <span className="sr-only">Quyết định xếp hạng</span>
          </dt>
          <dd>
            QĐ số {d.quyetDinhXepHang.soHieu} ngày {d.quyetDinhXepHang.ngayBanHanh}
          </dd>
        </div>
      </dl>
      {thieuNguon && (
        <p className="flex items-center gap-2 rounded-md bg-warning px-2 py-1 text-xs font-medium text-warning-foreground">
          <TriangleAlert className="size-4" aria-hidden="true" />
          Bản ghi thiếu nguồn tư liệu
        </p>
      )}
      <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:underline">
        Xem hồ sơ chi tiết
        <ChevronRight className="size-4" aria-hidden="true" />
      </span>
    </Link>
  )
}
