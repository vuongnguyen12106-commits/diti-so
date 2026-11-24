'use client'

import { useMemo, useState } from 'react'
import { Download, RotateCcw, Search } from 'lucide-react'
import { DANH_SACH_DOT, DANH_SACH_PHAN_LOAI, DANH_SACH_TINH, DI_SAN, type DiSan } from '@/src/data/disan'
import { DiTichCard } from '@/components/di-tich-card'
import { Button } from '@/components/ui/button'

const boDau = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()

const taiTep = (noiDung: string, tenTep: string, kieu: string) => {
  const blob = new Blob([noiDung], { type: kieu })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = tenTep
  a.click()
  URL.revokeObjectURL(url)
}

const oCsv = (v: string | number) => `"${String(v).replace(/"/g, '""')}"`

const xuatCsv = (ds: DiSan[]) => {
  const tieuDe = [
    'id',
    'maTuLieu',
    'tenChinhThuc',
    'tenGoiKhac',
    'loaiHinh',
    'quanHuyen',
    'tinhThanh',
    'soQuyetDinh',
    'ngayBanHanh',
    'dotXepHang',
    'namXepHang',
    'giaTriLichSu',
    'giaTriVanHoa',
    'giaTriKhoaHoc',
    'tinhTrangBaoTon',
    'nguonTuLieu',
    'duongDanNguon',
  ]
  const dong = ds.map((d) =>
    [
      d.id,
      d.maTuLieu,
      d.tenChinhThuc,
      d.tenGoiKhac.join('; '),
      d.loaiHinh,
      d.diaPhuong.quanHuyen,
      d.diaPhuong.tinhThanh,
      d.quyetDinhXepHang.soHieu,
      d.quyetDinhXepHang.ngayBanHanh,
      d.quyetDinhXepHang.dotXepHang,
      d.namXepHang,
      d.giaTriTieuBieu.lichSu,
      d.giaTriTieuBieu.vanHoa,
      d.giaTriTieuBieu.khoaHoc,
      d.tinhTrangBaoTon,
      d.nguonTuLieu.map((n) => `${n.nguonId}: ${n.noiDungTrich}`).join(' | '),
      d.duongDanNguon.join(' ; '),
    ]
      .map(oCsv)
      .join(','),
  )
  return '\uFEFF' + [tieuDe.join(','), ...dong].join('\r\n')
}

const selectClass =
  'h-11 w-full rounded-md border border-input bg-card px-3 text-sm text-foreground focus-visible:outline-2 focus-visible:outline-ring'

export function TraCuuDanhMuc() {
  const [tuKhoa, setTuKhoa] = useState('')
  const [tinh, setTinh] = useState('')
  const [loai, setLoai] = useState('')
  const [dot, setDot] = useState('')

  const ketQua = useMemo(() => {
    const q = boDau(tuKhoa.trim())
    return DI_SAN.filter((d) => {
      if (q) {
        const haystack = boDau([d.tenChinhThuc, ...d.tenGoiKhac, d.maTuLieu].join(' '))
        if (!haystack.includes(q)) return false
      }
      if (tinh && d.diaPhuong.tinhThanh !== tinh) return false
      if (loai && !d.phanLoai.includes(loai as DiSan['phanLoai'][number])) return false
      if (dot && d.quyetDinhXepHang.dotXepHang !== Number(dot)) return false
      return true
    })
  }, [tuKhoa, tinh, loai, dot])

  const coLoc = tuKhoa || tinh || loai || dot

  return (
    <section aria-labelledby="tieu-de-danh-muc" className="flex flex-col gap-4">
      <h2 id="tieu-de-danh-muc" className="sr-only">
        Bộ lọc và danh sách di tích
      </h2>
      <form
        role="search"
        onSubmit={(e) => e.preventDefault()}
        className="grid gap-3 rounded-lg border border-border bg-secondary/50 p-4 md:grid-cols-4"
      >
        <div className="md:col-span-4">
          <label htmlFor="tu-khoa" className="mb-1 block text-sm font-medium">
            Tìm theo tên di tích
          </label>
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              id="tu-khoa"
              type="search"
              value={tuKhoa}
              onChange={(e) => setTuKhoa(e.target.value)}
              placeholder="Ví dụ: Hoàng thành, Văn Miếu, Hội An..."
              className="h-11 w-full rounded-md border border-input bg-card pl-9 pr-3 text-base placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring md:text-sm"
            />
          </div>
        </div>
        <div>
          <label htmlFor="loc-tinh" className="mb-1 block text-sm font-medium">
            Tỉnh/Thành phố
          </label>
          <select id="loc-tinh" value={tinh} onChange={(e) => setTinh(e.target.value)} className={selectClass}>
            <option value="">Tất cả</option>
            {DANH_SACH_TINH.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="loc-loai" className="mb-1 block text-sm font-medium">
            Loại hình di tích
          </label>
          <select id="loc-loai" value={loai} onChange={(e) => setLoai(e.target.value)} className={selectClass}>
            <option value="">Tất cả</option>
            {DANH_SACH_PHAN_LOAI.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="loc-dot" className="mb-1 block text-sm font-medium">
            Đợt xếp hạng
          </label>
          <select id="loc-dot" value={dot} onChange={(e) => setDot(e.target.value)} className={selectClass}>
            <option value="">Tất cả các đợt</option>
            {DANH_SACH_DOT.map((d) => (
              <option key={d} value={d}>
                Đợt {d}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-end">
          <Button
            type="button"
            variant="outline"
            className="h-11 w-full bg-card"
            disabled={!coLoc}
            onClick={() => {
              setTuKhoa('')
              setTinh('')
              setLoai('')
              setDot('')
            }}
          >
            <RotateCcw aria-hidden="true" />
            Xóa bộ lọc
          </Button>
        </div>
      </form>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground" aria-live="polite">
          Tìm thấy <strong className="text-foreground">{ketQua.length}</strong> / {DI_SAN.length} di tích
        </p>
        <div className="flex gap-2">
          <Button
            type="button"
            className="h-10 flex-1 sm:flex-none"
            disabled={ketQua.length === 0}
            onClick={() =>
              taiTep(
                JSON.stringify({ nguon: 'Hồ sơ số di tích quốc gia đặc biệt (G01)', duLieu: ketQua }, null, 2),
                'g01-di-tich-quoc-gia-dac-biet.json',
                'application/json;charset=utf-8',
              )
            }
          >
            <Download aria-hidden="true" />
            Xuất dữ liệu JSON
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-10 flex-1 bg-card sm:flex-none"
            disabled={ketQua.length === 0}
            onClick={() => taiTep(xuatCsv(ketQua), 'g01-di-tich-quoc-gia-dac-biet.csv', 'text/csv;charset=utf-8')}
          >
            <Download aria-hidden="true" />
            Xuất dữ liệu CSV
          </Button>
        </div>
      </div>

      {ketQua.length === 0 ? (
        <p className="rounded-lg border border-dashed border-border bg-card p-8 text-center text-muted-foreground">
          Không có di tích nào phù hợp với bộ lọc hiện tại.
        </p>
      ) : (
        <ul className="grid gap-4 md:grid-cols-2">
          {ketQua.map((d) => (
            <li key={d.id}>
              <DiTichCard diSan={d} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
