import { Castle, Columns3, Mountain, Shovel } from 'lucide-react'
import type { PhanLoai } from '@/src/data/disan'
import { cn } from '@/lib/utils'

const CAU_HINH: Record<PhanLoai, { icon: typeof Castle; className: string }> = {
  'Di tích lịch sử': { icon: Castle, className: 'bg-primary text-primary-foreground border-primary' },
  'Di tích kiến trúc nghệ thuật': { icon: Columns3, className: 'bg-secondary text-secondary-foreground border-accent' },
  'Di tích khảo cổ': { icon: Shovel, className: 'bg-card text-foreground border-foreground/30' },
  'Danh lam thắng cảnh': { icon: Mountain, className: 'bg-accent/30 text-foreground border-accent' },
}

export function LoaiHinhBadge({ loai, className }: { loai: PhanLoai; className?: string }) {
  const { icon: Icon, className: tone } = CAU_HINH[loai]
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium',
        tone,
        className,
      )}
    >
      <Icon className="size-3.5" aria-hidden="true" />
      {loai}
    </span>
  )
}
