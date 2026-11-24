'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { Database, Loader2, Send, ShieldAlert, Sparkles, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NHAN_TRUONG, type KetQuaHoiDap } from '@/lib/hoi-dap'
import { cn } from '@/lib/utils'

const CAU_HOI_MAU = [
  'Hoàng thành Thăng Long được xếp hạng theo quyết định nào?',
  'Những di tích nào thuộc đợt xếp hạng thứ 2?',
  'Giá trị khoa học của Chùa Keo là gì?',
  'Các di tích ở Quảng Nam là những di tích nào?',
  'Văn Miếu - Quốc Tử Giám được xây dựng năm nào?',
  'Chùa Một Cột có phải di tích quốc gia đặc biệt không?',
]

type TinNhan =
  | { vaiTro: 'nguoiDung'; noiDung: string }
  | { vaiTro: 'troLy'; ketQua: KetQuaHoiDap }
  | { vaiTro: 'loi'; noiDung: string }

export function HoiDapGemini() {
  const [tinNhan, setTinNhan] = useState<TinNhan[]>([])
  const [cauHoi, setCauHoi] = useState('')
  const [dangTai, setDangTai] = useState(false)
  const cuoiRef = useRef<HTMLDivElement>(null)

  const gui = async (noiDung: string) => {
    const q = noiDung.trim()
    if (!q || dangTai) return
    setCauHoi('')
    setDangTai(true)
    setTinNhan((prev) => [...prev, { vaiTro: 'nguoiDung', noiDung: q }])
    try {
      const res = await fetch('/api/hoi-dap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cauHoi: q }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.loi ?? 'Đã có lỗi xảy ra.')
      setTinNhan((prev) => [...prev, { vaiTro: 'troLy', ketQua: data as KetQuaHoiDap }])
    } catch (e) {
      setTinNhan((prev) => [...prev, { vaiTro: 'loi', noiDung: e instanceof Error ? e.message : 'Đã có lỗi xảy ra.' }])
    } finally {
      setDangTai(false)
      requestAnimationFrame(() => cuoiRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }))
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <section aria-labelledby="cau-hoi-mau">
        <h2 id="cau-hoi-mau" className="mb-2 text-sm font-semibold text-muted-foreground">
          Câu hỏi mẫu - ấn để thử nhanh
        </h2>
        <ul className="flex flex-wrap gap-2">
          {CAU_HOI_MAU.map((c) => (
            <li key={c}>
              <button
                type="button"
                disabled={dangTai}
                onClick={() => gui(c)}
                className="rounded-full border border-accent bg-secondary px-3 py-2 text-left text-sm text-secondary-foreground transition-colors hover:bg-accent/40 disabled:opacity-50"
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-label="Hội thoại"
        aria-live="polite"
        className="flex min-h-64 flex-col gap-4 rounded-lg border border-border bg-card p-4"
      >
        {tinNhan.length === 0 && !dangTai && (
          <p className="m-auto max-w-sm text-center text-sm text-muted-foreground">
            Hãy đặt câu hỏi về tên, loại hình, địa phương, quyết định xếp hạng, giá trị tiêu biểu hoặc nguồn tư liệu của
            15 di tích quốc gia đặc biệt.
          </p>
        )}
        {tinNhan.map((t, i) => (
          <BongTinNhan key={i} tin={t} />
        ))}
        {dangTai && (
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Gemini đang tra cứu cơ sở dữ liệu...
          </p>
        )}
        <div ref={cuoiRef} />
      </section>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          gui(cauHoi)
        }}
        className="sticky bottom-20 flex items-end gap-2 rounded-lg border border-border bg-card p-2 shadow-sm md:bottom-4"
      >
        <label htmlFor="o-cau-hoi" className="sr-only">
          Nhập câu hỏi
        </label>
        <textarea
          id="o-cau-hoi"
          rows={2}
          maxLength={500}
          value={cauHoi}
          onChange={(e) => setCauHoi(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              if (e.nativeEvent.isComposing || e.keyCode === 229) return
              e.preventDefault()
              gui(cauHoi)
            }
          }}
          placeholder="Nhập câu hỏi của bạn về di tích quốc gia đặc biệt..."
          className="min-h-12 flex-1 resize-none rounded-md bg-transparent px-2 py-2 text-base outline-none placeholder:text-muted-foreground md:text-sm"
        />
        <Button type="submit" size="lg" className="h-12 px-4" disabled={dangTai || !cauHoi.trim()}>
          <Send aria-hidden="true" />
          <span className="sr-only md:not-sr-only">Gửi</span>
        </Button>
      </form>
    </div>
  )
}

function BongTinNhan({ tin }: { tin: TinNhan }) {
  if (tin.vaiTro === 'nguoiDung') {
    return (
      <div className="flex justify-end gap-2">
        <p className="max-w-[85%] rounded-lg rounded-tr-none bg-primary px-3 py-2 text-sm text-primary-foreground">
          {tin.noiDung}
        </p>
        <User className="mt-1 size-5 shrink-0 text-muted-foreground" aria-label="Bạn" />
      </div>
    )
  }
  if (tin.vaiTro === 'loi') {
    return (
      <p role="alert" className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">
        {tin.noiDung}
      </p>
    )
  }
  const { ketQua } = tin
  return (
    <div className="flex gap-2">
      <Sparkles className="mt-1 size-5 shrink-0 text-ring" aria-label="Gemini" />
      <div
        className={cn(
          'flex max-w-[90%] flex-col gap-3 rounded-lg rounded-tl-none border px-3 py-3 text-sm',
          ketQua.coDuLieu ? 'border-border bg-muted' : 'border-warning-foreground/30 bg-warning text-warning-foreground',
        )}
      >
        {!ketQua.coDuLieu && (
          <p className="flex items-center gap-1 font-semibold">
            <ShieldAlert className="size-4" aria-hidden="true" />
            Ngoài phạm vi dữ liệu
          </p>
        )}
        <p className="whitespace-pre-line leading-relaxed">{ketQua.traLoi}</p>
        {ketQua.canCu.length > 0 && (
          <div className="flex flex-col gap-2 border-t border-border pt-2">
            <p className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              <Database className="size-3.5" aria-hidden="true" />
              Căn cứ dữ liệu
            </p>
            <ul className="flex flex-col gap-2">
              {ketQua.canCu.map((c) => (
                <li key={c.maTuLieu} className="rounded-md border border-border bg-card p-2">
                  <dl className="grid gap-1 text-xs">
                    <div>
                      <dt className="inline font-semibold">Bản ghi: </dt>
                      <dd className="inline">
                        <Link href={`/di-tich/${c.id}`} className="text-primary underline underline-offset-2">
                          {c.maTuLieu} - {c.tenBanGhi}
                        </Link>
                      </dd>
                    </div>
                    <div>
                      <dt className="inline font-semibold">Quyết định xếp hạng: </dt>
                      <dd className="inline">{c.quyetDinh}</dd>
                    </div>
                    <div>
                      <dt className="inline font-semibold">Trường dữ liệu: </dt>
                      <dd className="inline">{c.truongDuLieu.map((t) => NHAN_TRUONG[t]).join(', ') || '—'}</dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
