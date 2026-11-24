'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_ITEMS, isActive } from '@/lib/nav'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span
            aria-hidden="true"
            className="flex size-9 shrink-0 items-center justify-center rounded-md border border-accent/60 font-serif text-sm font-bold text-accent"
          >
            G01
          </span>
          <span className="min-w-0">
            <span className="block truncate font-serif text-base font-semibold leading-tight md:text-lg">
              Hồ sơ số di tích quốc gia đặc biệt
            </span>
            <span className="block truncate text-xs text-primary-foreground/75">
              Theo Luật Di sản văn hóa số 45/2024/QH15
            </span>
          </span>
        </Link>
        <nav aria-label="Điều hướng chính" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const active = isActive(pathname, item)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary-foreground/10',
                      active && 'bg-accent text-accent-foreground hover:bg-accent',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
      <div aria-hidden="true" className="h-1 bg-[repeating-linear-gradient(90deg,var(--accent)_0_12px,transparent_12px_18px)]" />
    </header>
  )
}
