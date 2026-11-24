export const TRUONG_DU_LIEU = [
  'tenChinhThuc',
  'tenGoiKhac',
  'loaiHinh',
  'diaPhuong',
  'quyetDinhXepHang',
  'namXepHang',
  'giaTriTieuBieu.lichSu',
  'giaTriTieuBieu.vanHoa',
  'giaTriTieuBieu.khoaHoc',
  'tinhTrangBaoTon',
  'nguonTuLieu',
] as const

export type TruongDuLieu = (typeof TRUONG_DU_LIEU)[number]

export const NHAN_TRUONG: Record<TruongDuLieu, string> = {
  tenChinhThuc: 'Tên chính thức',
  tenGoiKhac: 'Tên gọi khác',
  loaiHinh: 'Loại hình di tích',
  diaPhuong: 'Địa điểm',
  quyetDinhXepHang: 'Quyết định xếp hạng',
  namXepHang: 'Năm xếp hạng',
  'giaTriTieuBieu.lichSu': 'Giá trị lịch sử',
  'giaTriTieuBieu.vanHoa': 'Giá trị văn hóa',
  'giaTriTieuBieu.khoaHoc': 'Giá trị khoa học',
  tinhTrangBaoTon: 'Tình trạng bảo tồn',
  nguonTuLieu: 'Nguồn tư liệu',
}

export type CanCu = {
  maTuLieu: string
  id: string
  tenBanGhi: string
  quyetDinh: string
  truongDuLieu: TruongDuLieu[]
}

export type KetQuaHoiDap = {
  coDuLieu: boolean
  traLoi: string
  canCu: CanCu[]
}
