'use client'

import { useEffect, useState, useSyncExternalStore } from 'react'
import { Square, Volume2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const subscribe = () => () => {}

export function DocThuyetMinh({ vanBan }: { vanBan: string }) {
  const hoTro = useSyncExternalStore(
    subscribe,
    () => 'speechSynthesis' in window,
    () => true,
  )
  const [dangDoc, setDangDoc] = useState(false)
  const [tocDo, setTocDo] = useState(0.9)

  useEffect(() => () => window.speechSynthesis?.cancel(), [])

  const doc = () => {
    const synth = window.speechSynthesis
    synth.cancel()
    const u = new SpeechSynthesisUtterance(vanBan)
    u.lang = 'vi-VN'
    u.rate = tocDo
    const giongViet = synth.getVoices().find((v) => v.lang.toLowerCase().startsWith('vi'))
    if (giongViet) u.voice = giongViet
    u.onend = () => setDangDoc(false)
    u.onerror = () => setDangDoc(false)
    setDangDoc(true)
    synth.speak(u)
  }

  const dung = () => {
    window.speechSynthesis.cancel()
    setDangDoc(false)
  }

  if (!hoTro) {
    return (
      <p className="text-sm text-muted-foreground">Trình duyệt của bạn chưa hỗ trợ đọc thuyết minh thành tiếng.</p>
    )
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      {dangDoc ? (
        <Button type="button" size="lg" variant="outline" onClick={dung} className="h-12 px-5 text-base">
          <Square aria-hidden="true" />
          Dừng đọc
        </Button>
      ) : (
        <Button type="button" size="lg" onClick={doc} className="h-12 px-5 text-base">
          <Volume2 aria-hidden="true" />
          Đọc thuyết minh hồ sơ
        </Button>
      )}
      <label className="flex items-center gap-2 text-sm text-muted-foreground">
        Tốc độ
        <select
          value={tocDo}
          onChange={(e) => setTocDo(Number(e.target.value))}
          className="h-10 rounded-md border border-input bg-card px-2 text-foreground"
        >
          <option value={0.7}>Chậm</option>
          <option value={0.9}>Vừa</option>
          <option value={1.1}>Nhanh</option>
        </select>
      </label>
      <span className="sr-only" aria-live="polite">
        {dangDoc ? 'Đang đọc thuyết minh' : ''}
      </span>
    </div>
  )
}
