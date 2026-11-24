import { BookOpenText, Info, Landmark, LibraryBig, MessageCircleQuestion } from 'lucide-react'

export const NAV_ITEMS = [
  { href: '/', label: 'Tra cứu', icon: Landmark },
  { href: '/di-tich/hoang-thanh-thang-long', label: 'Hồ sơ', icon: BookOpenText, matchPrefix: '/di-tich' },
  { href: '/hoi-dap', label: 'Hỏi đáp', icon: MessageCircleQuestion },
  { href: '/nguon-tu-lieu', label: 'Nguồn', icon: LibraryBig },
  { href: '/gioi-thieu', label: 'Giới thiệu', icon: Info },
] as const

export const isActive = (pathname: string, item: (typeof NAV_ITEMS)[number]) => {
  const prefix = 'matchPrefix' in item ? item.matchPrefix : item.href
  return prefix === '/' ? pathname === '/' : pathname.startsWith(prefix)
}
