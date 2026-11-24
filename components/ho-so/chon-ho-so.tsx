'use client'

import { useRouter } from 'next/navigation'
import { DI_SAN } from '@/src/data/disan'

export function ChonHoSo({ hienTai }: { hienTai: string }) {
  const router = useRouter()
  return (
    <div>
      <label htmlFor="chon-ho-so" className="mb-1 block text-sm font-medium">
        Chọn hồ sơ di tích
      </label>
      <select
        id="chon-ho-so"
        value={hienTai}
        onChange={(e) => router.push(`/di-tich/${e.target.value}`)}
        className="h-11 w-full rounded-md border border-input bg-card px-3 text-sm focus-visible:outline-2 focus-visible:outline-ring"
      >
        {DI_SAN.map((d) => (
          <option key={d.id} value={d.id}>
            {d.maTuLieu} - {d.tenChinhThuc}
          </option>
        ))}
      </select>
    </div>
  )
}
