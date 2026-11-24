import type { Metadata } from 'next'
import { HoiDapGemini } from '@/components/hoi-dap/hoi-dap-gemini'

export const metadata: Metadata = {
  title: 'Hỏi đáp tư liệu cùng Gemini',
  description: 'Đặt câu hỏi về 15 di tích quốc gia đặc biệt; câu trả lời chỉ dựa trên cơ sở dữ liệu đã kiểm chứng.',
}

export default function TrangHoiDap() {
  return (
    <div className="flex flex-col gap-5">
      <header className="rounded-lg border border-border bg-card p-5 md:p-6">
        <h1 className="font-serif text-2xl font-bold text-primary md:text-3xl">Hỏi đáp tư liệu cùng Gemini</h1>
        <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
          Mô hình Gemini chỉ tra cứu trong 15 bản ghi di tích của ứng dụng. Mỗi câu trả lời đều ghi rõ bản ghi được
          dùng, quyết định xếp hạng và trường dữ liệu tương ứng. Nội dung ngoài cơ sở dữ liệu sẽ không được suy đoán.
        </p>
      </header>
      <HoiDapGemini />
    </div>
  )
}
