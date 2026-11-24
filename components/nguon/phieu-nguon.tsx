'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { DI_SAN, timNguon } from '@/src/data/disan'

export function PhieuNguon() {
  const [loc, setLoc] = useState('')

  const dong = useMemo(
    () =>
      DI_SAN.filter((d) => !loc || d.id === loc).flatMap((d) =>
        d.nguonTuLieu.map((t, i) => ({ d, t, n: timNguon(t.nguonId), stt: i + 1 })),
      ),
    [loc],
  )

  return (
    <section aria-labelledby="phieu-nguon" className="flex flex-col gap-3">
      <div>
        <h2 id="phieu-nguon" className="font-serif text-xl font-semibold text-primary">
          Phiếu nguồn tư liệu (Phụ lục 03)
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Bảng tra cứu nguồn tư liệu gắn với từng mã tư liệu G01-01 đến G01-15.
        </p>
      </div>
      <div>
        <label htmlFor="loc-phieu" className="mb-1 block text-sm font-medium">
          Lọc theo di tích
        </label>
        <select
          id="loc-phieu"
          value={loc}
          onChange={(e) => setLoc(e.target.value)}
          className="h-11 w-full rounded-md border border-input bg-card px-3 text-sm md:w-96"
        >
          <option value="">Tất cả 15 di tích</option>
          {DI_SAN.map((d) => (
            <option key={d.id} value={d.id}>
              {d.maTuLieu} - {d.tenChinhThuc}
            </option>
          ))}
        </select>
      </div>
      <div className="overflow-x-auto rounded-lg border border-border bg-card">
        <table className="w-full min-w-[56rem] text-left text-sm">
          <caption className="sr-only">Phiếu nguồn tư liệu theo chuẩn Phụ lục 03</caption>
          <thead className="bg-primary text-primary-foreground">
            <tr>
              {['Mã tư liệu', 'Tên di tích', 'STT', 'Tên nguồn', 'Loại nguồn', 'Số, ký hiệu', 'Ngày ban hành', 'Cơ quan', 'Nội dung trích', 'Độ tin cậy', 'Đường dẫn'].map(
                (h) => (
                  <th key={h} scope="col" className="px-3 py-2 font-semibold">
                    {h}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {dong.map(({ d, t, n, stt }) => (
              <tr key={`${d.id}-${t.nguonId}`} className="border-t border-border align-top odd:bg-muted/50">
                <td className="whitespace-nowrap px-3 py-2 font-mono">{d.maTuLieu}</td>
                <td className="px-3 py-2">
                  <Link href={`/di-tich/${d.id}`} className="text-primary underline underline-offset-2">
                    {d.tenChinhThuc}
                  </Link>
                </td>
                <td className="px-3 py-2">{stt}</td>
                <td className="px-3 py-2">{n?.ten}</td>
                <td className="px-3 py-2">{n?.loaiNguon}</td>
                <td className="whitespace-nowrap px-3 py-2">{n?.soKyHieu}</td>
                <td className="whitespace-nowrap px-3 py-2">{n?.ngayBanHanh}</td>
                <td className="px-3 py-2">{n?.coQuanBanHanh}</td>
                <td className="px-3 py-2">{t.noiDungTrich}</td>
                <td className="px-3 py-2">{n?.mucDoTinCay}</td>
                <td className="px-3 py-2">
                  {n?.duongDan.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block break-all text-primary underline underline-offset-2"
                    >
                      {l.url.replace(/^https?:\/\//, '')}
                    </a>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
