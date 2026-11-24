import { CalendarDays, FileText, Layers, MapPin } from 'lucide-react'
import type { DiSan } from '@/src/data/disan'

export function KhungMinhHoa({ diSan: d }: { diSan: DiSan }) {
  const o = [
    { icon: Layers, nhan: 'Loại hình', giaTri: d.loaiHinh },
    { icon: MapPin, nhan: 'Tỉnh/Thành phố', giaTri: d.diaPhuong.tinhThanh },
    { icon: FileText, nhan: 'Quyết định', giaTri: d.quyetDinhXepHang.soHieu },
    { icon: CalendarDays, nhan: 'Đợt / Năm', giaTri: `Đợt ${d.quyetDinhXepHang.dotXepHang} - ${d.namXepHang}` },
  ]
  return (
    <figure className="rounded-lg border-2 border-double border-accent bg-secondary/50 p-4">
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {o.map(({ icon: Icon, nhan, giaTri }) => (
          <li key={nhan} className="flex flex-col gap-1 rounded-md border border-border bg-card p-3">
            <Icon className="size-5 text-ring" aria-hidden="true" />
            <span className="text-xs text-muted-foreground">{nhan}</span>
            <span className="text-sm font-semibold leading-snug">{giaTri}</span>
          </li>
        ))}
      </ul>
      <figcaption className="mt-3 text-xs italic text-muted-foreground">
        Sơ đồ khung thông tin - Giao diện minh họa hình vẽ, không phải là hình ảnh tư liệu.
      </figcaption>
    </figure>
  )
}
