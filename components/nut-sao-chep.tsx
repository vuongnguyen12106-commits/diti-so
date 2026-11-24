'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function NutSaoChep({ noiDung, nhan }: { noiDung: string; nhan: string }) {
  const [daChep, setDaChep] = useState(false)
  return (
    <Button
      type="button"
      variant="outline"
      className="h-10 bg-card"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(noiDung)
        } catch {
          const t = document.createElement('textarea')
          t.value = noiDung
          document.body.appendChild(t)
          t.select()
          document.execCommand('copy')
          t.remove()
        }
        setDaChep(true)
        setTimeout(() => setDaChep(false), 2000)
      }}
    >
      {daChep ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
      <span aria-live="polite">{daChep ? 'Đã sao chép' : nhan}</span>
    </Button>
  )
}
