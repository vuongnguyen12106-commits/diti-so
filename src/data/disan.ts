/**
 * Cơ sở dữ liệu G01 - Hồ sơ số di tích quốc gia đặc biệt.
 * Số hiệu và ngày ban hành quyết định xếp hạng được đối chiếu theo văn bản gốc:
 *  - Đợt 1: Quyết định số 1272/QĐ-TTg ngày 12/8/2009
 *  - Đợt 2: Quyết định số 548/QĐ-TTg ngày 10/5/2012
 *  - Đợt 3: Quyết định số 1419/QĐ-TTg ngày 27/9/2012
 *  - Đợt 4: Quyết định số 2383/QĐ-TTg ngày 09/12/2013
 */

export type PhanLoai =
  | 'Di tích lịch sử'
  | 'Di tích kiến trúc nghệ thuật'
  | 'Di tích khảo cổ'
  | 'Danh lam thắng cảnh'

export const DANH_SACH_PHAN_LOAI: PhanLoai[] = [
  'Di tích lịch sử',
  'Di tích kiến trúc nghệ thuật',
  'Di tích khảo cổ',
  'Danh lam thắng cảnh',
]

export type NguonTuLieu = {
  id: string
  ten: string
  loaiNguon: 'Văn bản quy phạm pháp luật' | 'Văn bản cá biệt' | 'Cổng thông tin cơ quan quản lý'
  coQuanBanHanh: string
  soKyHieu: string
  ngayBanHanh: string
  moTa: string
  duongDan: { nhan: string; url: string }[]
  mucDoTinCay: 'Chính thống'
}

export const NGUON_TU_LIEU: NguonTuLieu[] = [
  {
    id: 'N1',
    ten: 'Luật Di sản văn hóa số 45/2024/QH15',
    loaiNguon: 'Văn bản quy phạm pháp luật',
    coQuanBanHanh: 'Quốc hội nước Cộng hòa xã hội chủ nghĩa Việt Nam',
    soKyHieu: '45/2024/QH15',
    ngayBanHanh: '23/11/2024',
    moTa: 'Luật quy định về di sản văn hóa, trong đó có tiêu chí, thẩm quyền xếp hạng di tích quốc gia đặc biệt và hoạt động số hóa di sản.',
    duongDan: [{ nhan: 'Cổng Thông tin điện tử Chính phủ - Hệ thống văn bản', url: 'https://vanban.chinhphu.vn' }],
    mucDoTinCay: 'Chính thống',
  },
  {
    id: 'N2',
    ten: 'Quyết định số 2026/QĐ-TTg phê duyệt Chương trình số hóa Di sản văn hóa Việt Nam giai đoạn 2021 - 2030',
    loaiNguon: 'Văn bản cá biệt',
    coQuanBanHanh: 'Thủ tướng Chính phủ',
    soKyHieu: '2026/QĐ-TTg',
    ngayBanHanh: '02/12/2021',
    moTa: 'Định hướng xây dựng cơ sở dữ liệu số về di sản văn hóa, làm căn cứ cho việc chuẩn hóa hồ sơ số di tích.',
    duongDan: [{ nhan: 'Cổng Thông tin điện tử Chính phủ - Hệ thống văn bản', url: 'https://vanban.chinhphu.vn' }],
    mucDoTinCay: 'Chính thống',
  },
  {
    id: 'N3',
    ten: 'Cục Di sản văn hóa - Bộ Văn hóa, Thể thao và Du lịch: Danh mục Di tích quốc gia đặc biệt',
    loaiNguon: 'Cổng thông tin cơ quan quản lý',
    coQuanBanHanh: 'Cục Di sản văn hóa, Bộ Văn hóa, Thể thao và Du lịch',
    soKyHieu: 'Không áp dụng',
    ngayBanHanh: 'Cập nhật thường xuyên',
    moTa: 'Danh mục chính thức các di tích quốc gia đặc biệt do cơ quan quản lý nhà nước chuyên ngành công bố.',
    duongDan: [{ nhan: 'Cổng thông tin Cục Di sản văn hóa', url: 'http://dsvh.gov.vn' }],
    mucDoTinCay: 'Chính thống',
  },
  {
    id: 'N4',
    ten: 'Quyết định số 1272/QĐ-TTg về việc xếp hạng di tích quốc gia đặc biệt (Đợt 1)',
    loaiNguon: 'Văn bản cá biệt',
    coQuanBanHanh: 'Thủ tướng Chính phủ',
    soKyHieu: '1272/QĐ-TTg',
    ngayBanHanh: '12/08/2009',
    moTa: 'Xếp hạng 10 di tích quốc gia đặc biệt đợt đầu tiên.',
    duongDan: [{ nhan: 'Cổng Thông tin điện tử Chính phủ - Hệ thống văn bản', url: 'https://vanban.chinhphu.vn' }],
    mucDoTinCay: 'Chính thống',
  },
  {
    id: 'N5',
    ten: 'Quyết định số 548/QĐ-TTg về việc xếp hạng di tích quốc gia đặc biệt (Đợt 2)',
    loaiNguon: 'Văn bản cá biệt',
    coQuanBanHanh: 'Thủ tướng Chính phủ',
    soKyHieu: '548/QĐ-TTg',
    ngayBanHanh: '10/05/2012',
    moTa: 'Xếp hạng các di tích quốc gia đặc biệt đợt 2.',
    duongDan: [{ nhan: 'Cổng Thông tin điện tử Chính phủ - Hệ thống văn bản', url: 'https://vanban.chinhphu.vn' }],
    mucDoTinCay: 'Chính thống',
  },
  {
    id: 'N6',
    ten: 'Quyết định số 1419/QĐ-TTg (Đợt 3) và Quyết định số 2383/QĐ-TTg (Đợt 4) về việc xếp hạng di tích quốc gia đặc biệt',
    loaiNguon: 'Văn bản cá biệt',
    coQuanBanHanh: 'Thủ tướng Chính phủ',
    soKyHieu: '1419/QĐ-TTg; 2383/QĐ-TTg',
    ngayBanHanh: '27/09/2012; 09/12/2013',
    moTa: 'Xếp hạng các di tích quốc gia đặc biệt đợt 3 (năm 2012) và đợt 4 (năm 2013).',
    duongDan: [{ nhan: 'Cổng Thông tin điện tử Chính phủ - Hệ thống văn bản', url: 'https://vanban.chinhphu.vn' }],
    mucDoTinCay: 'Chính thống',
  },
  {
    id: 'N7',
    ten: 'Cổng thông tin điện tử Bộ Văn hóa, Thể thao và Du lịch',
    loaiNguon: 'Cổng thông tin cơ quan quản lý',
    coQuanBanHanh: 'Bộ Văn hóa, Thể thao và Du lịch',
    soKyHieu: 'Không áp dụng',
    ngayBanHanh: 'Cập nhật thường xuyên',
    moTa: 'Thông tin chính thức về chính sách, quản lý và phát huy giá trị di sản văn hóa.',
    duongDan: [{ nhan: 'Cổng thông tin Bộ VHTTDL', url: 'https://bvhttdl.gov.vn' }],
    mucDoTinCay: 'Chính thống',
  },
  {
    id: 'N8',
    ten: 'Trung tâm Bảo tồn Di sản Thăng Long - Hà Nội & Trung tâm Bảo tồn Di tích Cố đô Huế',
    loaiNguon: 'Cổng thông tin cơ quan quản lý',
    coQuanBanHanh: 'Đơn vị trực tiếp quản lý di tích',
    soKyHieu: 'Không áp dụng',
    ngayBanHanh: 'Cập nhật thường xuyên',
    moTa: 'Thông tin từ đơn vị trực tiếp quản lý, bảo tồn Hoàng thành Thăng Long và Quần thể di tích Cố đô Huế.',
    duongDan: [
      { nhan: 'Trung tâm Bảo tồn Di sản Thăng Long - Hà Nội', url: 'https://hoangthanhthanglong.vn' },
      { nhan: 'Trung tâm Bảo tồn Di tích Cố đô Huế', url: 'https://hueworldheritage.org.vn' },
    ],
    mucDoTinCay: 'Chính thống',
  },
]

export type TrichDanNguon = {
  nguonId: string
  noiDungTrich: string
}

export type DiSan = {
  id: string
  maTuLieu: string
  tenChinhThuc: string
  tenGoiKhac: string[]
  loaiHinh: string
  phanLoai: PhanLoai[]
  diaPhuong: {
    quanHuyen: string
    tinhThanh: string
    ghiChuHanhChinh: string
  }
  quyetDinhXepHang: {
    soHieu: string
    ngayBanHanh: string
    coQuanBanHanh: string
    dotXepHang: number
  }
  namXepHang: number
  giaTriTieuBieu: {
    lichSu: string
    vanHoa: string
    khoaHoc: string
  }
  tinhTrangBaoTon: string
  nguonTuLieu: TrichDanNguon[]
  duongDanNguon: string[]
}

const VANBAN = 'https://vanban.chinhphu.vn'
const DSVH = 'http://dsvh.gov.vn'
const BVHTTDL = 'https://bvhttdl.gov.vn'

const QD_DOT_1 = {
  soHieu: '1272/QĐ-TTg',
  ngayBanHanh: '12/08/2009',
  coQuanBanHanh: 'Thủ tướng Chính phủ',
  dotXepHang: 1,
}
const QD_DOT_2 = {
  soHieu: '548/QĐ-TTg',
  ngayBanHanh: '10/05/2012',
  coQuanBanHanh: 'Thủ tướng Chính phủ',
  dotXepHang: 2,
}
const QD_DOT_3 = {
  soHieu: '1419/QĐ-TTg',
  ngayBanHanh: '27/09/2012',
  coQuanBanHanh: 'Thủ tướng Chính phủ',
  dotXepHang: 3,
}
const QD_DOT_4 = {
  soHieu: '2383/QĐ-TTg',
  ngayBanHanh: '09/12/2013',
  coQuanBanHanh: 'Thủ tướng Chính phủ',
  dotXepHang: 4,
}

const nguonChung = (qdId: 'N4' | 'N5' | 'N6', qd: string): TrichDanNguon[] => [
  { nguonId: qdId, noiDungTrich: `Căn cứ xếp hạng di tích quốc gia đặc biệt: ${qd}.` },
  { nguonId: 'N3', noiDungTrich: 'Danh mục Di tích quốc gia đặc biệt do Cục Di sản văn hóa công bố.' },
  { nguonId: 'N1', noiDungTrich: 'Căn cứ pháp lý về di tích quốc gia đặc biệt theo Luật Di sản văn hóa số 45/2024/QH15.' },
]

export const DI_SAN: DiSan[] = [
  {
    id: 'hoang-thanh-thang-long',
    maTuLieu: 'G01-01',
    tenChinhThuc: 'Khu di tích trung tâm Hoàng thành Thăng Long - Hà Nội',
    tenGoiKhac: ['Hoàng thành Thăng Long', 'Khu di tích Hoàng thành Thăng Long'],
    loaiHinh: 'Di tích lịch sử và khảo cổ',
    phanLoai: ['Di tích lịch sử', 'Di tích khảo cổ'],
    diaPhuong: {
      quanHuyen: 'Quận Ba Đình',
      tinhThanh: 'Hà Nội',
      ghiChuHanhChinh: 'Địa danh cấp quận ghi theo thời điểm xếp hạng; từ 01/7/2025 thực hiện chính quyền địa phương hai cấp.',
    },
    quyetDinhXepHang: QD_DOT_1,
    namXepHang: 2009,
    giaTriTieuBieu: {
      lichSu: 'Trung tâm quyền lực chính trị của quốc gia Đại Việt liên tục qua nhiều triều đại, từ thời Lý (năm 1010) đến thời Nguyễn.',
      vanHoa: 'Phản ánh sự giao thoa văn hóa và chiều sâu lịch sử của kinh thành Thăng Long; được UNESCO ghi danh là Di sản văn hóa thế giới năm 2010.',
      khoaHoc: 'Khu khảo cổ học 18 Hoàng Diệu cùng các di tích Cột cờ Hà Nội, Đoan Môn, nền điện Kính Thiên lưu giữ nhiều tầng văn hóa chồng xếp, có giá trị nghiên cứu khảo cổ học, kiến trúc và quy hoạch đô thị.',
    },
    tinhTrangBaoTon: 'Đang được Trung tâm Bảo tồn Di sản Thăng Long - Hà Nội quản lý; tiếp tục nghiên cứu, khai quật khảo cổ và bảo tồn, phát huy giá trị.',
    nguonTuLieu: [
      ...nguonChung('N4', 'Quyết định số 1272/QĐ-TTg ngày 12/8/2009'),
      { nguonId: 'N8', noiDungTrich: 'Thông tin quản lý, bảo tồn từ Trung tâm Bảo tồn Di sản Thăng Long - Hà Nội.' },
    ],
    duongDanNguon: [VANBAN, DSVH, 'https://hoangthanhthanglong.vn'],
  },
  {
    id: 'van-mieu-quoc-tu-giam',
    maTuLieu: 'G01-02',
    tenChinhThuc: 'Di tích lịch sử và kiến trúc nghệ thuật Văn Miếu - Quốc Tử Giám',
    tenGoiKhac: ['Văn Miếu Hà Nội'],
    loaiHinh: 'Di tích lịch sử và kiến trúc nghệ thuật',
    phanLoai: ['Di tích lịch sử', 'Di tích kiến trúc nghệ thuật'],
    diaPhuong: {
      quanHuyen: 'Quận Đống Đa',
      tinhThanh: 'Hà Nội',
      ghiChuHanhChinh: 'Địa danh cấp quận ghi theo thời điểm xếp hạng; từ 01/7/2025 thực hiện chính quyền địa phương hai cấp.',
    },
    quyetDinhXepHang: QD_DOT_2,
    namXepHang: 2012,
    giaTriTieuBieu: {
      lichSu: 'Văn Miếu được xây dựng năm 1070 dưới triều vua Lý Thánh Tông; năm 1076 lập Quốc Tử Giám, được coi là trường đại học đầu tiên của Việt Nam.',
      vanHoa: 'Biểu tượng của truyền thống hiếu học và tôn sư trọng đạo; nơi thờ Khổng Tử và Chu Văn An.',
      khoaHoc: '82 tấm bia tiến sĩ thời Lê - Mạc được UNESCO ghi danh là Di sản tư liệu thế giới (Chương trình Ký ức Thế giới) năm 2011, là nguồn sử liệu quý về khoa cử Nho học.',
    },
    tinhTrangBaoTon: 'Đang được Trung tâm Hoạt động văn hóa khoa học Văn Miếu - Quốc Tử Giám quản lý, bảo tồn và tổ chức hoạt động phát huy giá trị.',
    nguonTuLieu: [
      ...nguonChung('N5', 'Quyết định số 548/QĐ-TTg ngày 10/5/2012'),
      { nguonId: 'N7', noiDungTrich: 'Thông tin quản lý, phát huy giá trị di tích từ Bộ Văn hóa, Thể thao và Du lịch.' },
    ],
    duongDanNguon: [VANBAN, DSVH, BVHTTDL],
  },
  {
    id: 'ho-hoan-kiem-den-ngoc-son',
    maTuLieu: 'G01-03',
    tenChinhThuc: 'Di tích lịch sử và danh lam thắng cảnh Hồ Hoàn Kiếm và đền Ngọc Sơn',
    tenGoiKhac: ['Hồ Gươm', 'Hồ Lục Thủy'],
    loaiHinh: 'Di tích lịch sử và danh lam thắng cảnh',
    phanLoai: ['Di tích lịch sử', 'Danh lam thắng cảnh'],
    diaPhuong: {
      quanHuyen: 'Quận Hoàn Kiếm',
      tinhThanh: 'Hà Nội',
      ghiChuHanhChinh: 'Địa danh cấp quận ghi theo thời điểm xếp hạng; từ 01/7/2025 thực hiện chính quyền địa phương hai cấp.',
    },
    quyetDinhXepHang: QD_DOT_4,
    namXepHang: 2013,
    giaTriTieuBieu: {
      lichSu: 'Gắn với truyền thuyết vua Lê Lợi trả gươm báu cho Rùa Thần sau khi đánh thắng quân Minh, từ đó hồ mang tên Hoàn Kiếm.',
      vanHoa: 'Đền Ngọc Sơn thờ Văn Xương Đế Quân và Đức Thánh Trần Hưng Đạo; quần thể cầu Thê Húc, Tháp Bút, Đài Nghiên, Tháp Rùa là biểu tượng văn hóa của Thủ đô.',
      khoaHoc: 'Có giá trị về cảnh quan đô thị, kiến trúc tín ngưỡng và môi trường sinh thái giữa lòng Hà Nội.',
    },
    tinhTrangBaoTon: 'Khu vực bảo vệ được xác định trong hồ sơ xếp hạng; đang được chính quyền thành phố Hà Nội quản lý, gìn giữ cảnh quan.',
    nguonTuLieu: [
      ...nguonChung('N6', 'Quyết định số 2383/QĐ-TTg ngày 09/12/2013'),
      { nguonId: 'N7', noiDungTrich: 'Thông tin quản lý, phát huy giá trị di tích từ Bộ Văn hóa, Thể thao và Du lịch.' },
    ],
    duongDanNguon: [VANBAN, DSVH, BVHTTDL],
  },
  {
    id: 'den-hung',
    maTuLieu: 'G01-04',
    tenChinhThuc: 'Di tích lịch sử Đền Hùng',
    tenGoiKhac: ['Khu di tích lịch sử Đền Hùng'],
    loaiHinh: 'Di tích lịch sử',
    phanLoai: ['Di tích lịch sử'],
    diaPhuong: {
      quanHuyen: 'Thành phố Việt Trì',
      tinhThanh: 'Phú Thọ',
      ghiChuHanhChinh: 'Địa danh ghi theo thời điểm xếp hạng; từ 01/7/2025 tỉnh Phú Thọ mới được hợp nhất từ Phú Thọ, Vĩnh Phúc và Hòa Bình.',
    },
    quyetDinhXepHang: QD_DOT_1,
    namXepHang: 2009,
    giaTriTieuBieu: {
      lichSu: 'Nơi thờ các Vua Hùng - những người có công dựng nước; gắn với cội nguồn dân tộc Việt Nam.',
      vanHoa: 'Quần thể đền, chùa trên núi Nghĩa Lĩnh (đền Hạ, đền Trung, đền Thượng, đền Giếng, lăng Hùng Vương). Tín ngưỡng thờ cúng Hùng Vương ở Phú Thọ được UNESCO ghi danh là Di sản văn hóa phi vật thể đại diện của nhân loại năm 2012.',
      khoaHoc: 'Có giá trị nghiên cứu về lịch sử, tín ngưỡng và lễ hội truyền thống (Giỗ Tổ Hùng Vương ngày 10 tháng 3 âm lịch).',
    },
    tinhTrangBaoTon: 'Đang được Khu Di tích lịch sử Đền Hùng quản lý; định kỳ tu bổ, tôn tạo và tổ chức lễ hội Giỗ Tổ Hùng Vương.',
    nguonTuLieu: [
      ...nguonChung('N4', 'Quyết định số 1272/QĐ-TTg ngày 12/8/2009'),
      { nguonId: 'N7', noiDungTrich: 'Thông tin về Tín ngưỡng thờ cúng Hùng Vương từ Bộ Văn hóa, Thể thao và Du lịch.' },
    ],
    duongDanNguon: [VANBAN, DSVH, BVHTTDL],
  },
  {
    id: 'phu-chu-tich',
    maTuLieu: 'G01-05',
    tenChinhThuc: 'Khu di tích Chủ tịch Hồ Chí Minh tại Phủ Chủ tịch',
    tenGoiKhac: ['Nhà sàn Bác Hồ'],
    loaiHinh: 'Di tích lịch sử',
    phanLoai: ['Di tích lịch sử'],
    diaPhuong: {
      quanHuyen: 'Quận Ba Đình',
      tinhThanh: 'Hà Nội',
      ghiChuHanhChinh: 'Địa danh cấp quận ghi theo thời điểm xếp hạng; từ 01/7/2025 thực hiện chính quyền địa phương hai cấp.',
    },
    quyetDinhXepHang: QD_DOT_1,
    namXepHang: 2009,
    giaTriTieuBieu: {
      lichSu: 'Nơi Chủ tịch Hồ Chí Minh sống và làm việc từ cuối năm 1954 đến năm 1969.',
      vanHoa: 'Các hạng mục Nhà 54, Nhà sàn, ao cá, đường xoài thể hiện lối sống giản dị, thanh bạch của Chủ tịch Hồ Chí Minh.',
      khoaHoc: 'Lưu giữ hiện vật, tư liệu gốc có giá trị nghiên cứu về cuộc đời, sự nghiệp của Chủ tịch Hồ Chí Minh.',
    },
    tinhTrangBaoTon: 'Đang được Khu di tích Chủ tịch Hồ Chí Minh tại Phủ Chủ tịch quản lý, bảo quản nguyên trạng hiện vật.',
    nguonTuLieu: [
      ...nguonChung('N4', 'Quyết định số 1272/QĐ-TTg ngày 12/8/2009'),
      { nguonId: 'N7', noiDungTrich: 'Thông tin quản lý, phát huy giá trị di tích từ Bộ Văn hóa, Thể thao và Du lịch.' },
    ],
    duongDanNguon: [VANBAN, DSVH, BVHTTDL],
  },
  {
    id: 'kim-lien',
    maTuLieu: 'G01-06',
    tenChinhThuc: 'Khu lưu niệm Chủ tịch Hồ Chí Minh tại Kim Liên',
    tenGoiKhac: ['Làng Sen - Hoàng Trù', 'Khu di tích Kim Liên'],
    loaiHinh: 'Di tích lịch sử',
    phanLoai: ['Di tích lịch sử'],
    diaPhuong: {
      quanHuyen: 'Huyện Nam Đàn',
      tinhThanh: 'Nghệ An',
      ghiChuHanhChinh: 'Địa danh cấp huyện ghi theo thời điểm xếp hạng; từ 01/7/2025 thực hiện chính quyền địa phương hai cấp.',
    },
    quyetDinhXepHang: QD_DOT_2,
    namXepHang: 2012,
    giaTriTieuBieu: {
      lichSu: 'Quê hương của Chủ tịch Hồ Chí Minh, gồm cụm di tích Hoàng Trù (quê ngoại, nơi Người sinh ngày 19/5/1890) và Làng Sen (quê nội).',
      vanHoa: 'Lưu giữ không gian làng quê xứ Nghệ cuối thế kỷ XIX - đầu thế kỷ XX gắn với thời niên thiếu của Chủ tịch Hồ Chí Minh.',
      khoaHoc: 'Có giá trị nghiên cứu về gia đình, quê hương và quá trình hình thành nhân cách của Chủ tịch Hồ Chí Minh.',
    },
    tinhTrangBaoTon: 'Đang được Khu di tích Kim Liên quản lý; các ngôi nhà được bảo tồn, phục dựng theo nguyên trạng.',
    nguonTuLieu: [
      ...nguonChung('N5', 'Quyết định số 548/QĐ-TTg ngày 10/5/2012'),
      { nguonId: 'N7', noiDungTrich: 'Thông tin quản lý, phát huy giá trị di tích từ Bộ Văn hóa, Thể thao và Du lịch.' },
    ],
    duongDanNguon: [VANBAN, DSVH, BVHTTDL],
  },
  {
    id: 'dien-bien-phu',
    maTuLieu: 'G01-07',
    tenChinhThuc: 'Di tích lịch sử Chiến trường Điện Biên Phủ',
    tenGoiKhac: ['Di tích Điện Biên Phủ'],
    loaiHinh: 'Di tích lịch sử',
    phanLoai: ['Di tích lịch sử'],
    diaPhuong: {
      quanHuyen: 'Thành phố Điện Biên Phủ và huyện Điện Biên',
      tinhThanh: 'Điện Biên',
      ghiChuHanhChinh: 'Địa danh ghi theo thời điểm xếp hạng; từ 01/7/2025 thực hiện chính quyền địa phương hai cấp.',
    },
    quyetDinhXepHang: QD_DOT_1,
    namXepHang: 2009,
    giaTriTieuBieu: {
      lichSu: 'Nơi diễn ra Chiến dịch Điện Biên Phủ (13/3 - 7/5/1954), chiến thắng quyết định dẫn tới Hiệp định Giơ-ne-vơ năm 1954.',
      vanHoa: 'Biểu tượng của ý chí độc lập dân tộc; hệ thống điểm di tích gồm đồi A1, Him Lam, Độc Lập, hầm Sở chỉ huy tập đoàn cứ điểm, Sở chỉ huy chiến dịch Mường Phăng.',
      khoaHoc: 'Có giá trị nghiên cứu về lịch sử quân sự và nghệ thuật chiến dịch.',
    },
    tinhTrangBaoTon: 'Đang được Ban Quản lý di tích tỉnh Điện Biên quản lý; nhiều điểm di tích đã được tu bổ, tôn tạo.',
    nguonTuLieu: [
      ...nguonChung('N4', 'Quyết định số 1272/QĐ-TTg ngày 12/8/2009'),
      { nguonId: 'N7', noiDungTrich: 'Thông tin quản lý, phát huy giá trị di tích từ Bộ Văn hóa, Thể thao và Du lịch.' },
    ],
    duongDanNguon: [VANBAN, DSVH, BVHTTDL],
  },
  {
    id: 'dinh-doc-lap',
    maTuLieu: 'G01-08',
    tenChinhThuc: 'Di tích lịch sử Dinh Độc Lập',
    tenGoiKhac: ['Hội trường Thống Nhất', 'Dinh Thống Nhất'],
    loaiHinh: 'Di tích lịch sử',
    phanLoai: ['Di tích lịch sử'],
    diaPhuong: {
      quanHuyen: 'Quận 1',
      tinhThanh: 'TP. Hồ Chí Minh',
      ghiChuHanhChinh: 'Địa danh cấp quận ghi theo thời điểm xếp hạng; từ 01/7/2025 thực hiện chính quyền địa phương hai cấp.',
    },
    quyetDinhXepHang: QD_DOT_1,
    namXepHang: 2009,
    giaTriTieuBieu: {
      lichSu: 'Ngày 30/4/1975, xe tăng Quân giải phóng tiến vào Dinh Độc Lập, đánh dấu thời khắc thống nhất đất nước.',
      vanHoa: 'Biểu tượng của chiến thắng và thống nhất đất nước.',
      khoaHoc: 'Công trình do kiến trúc sư Ngô Viết Thụ thiết kế, xây dựng giai đoạn 1962 - 1966, có giá trị nghiên cứu kiến trúc hiện đại kết hợp yếu tố truyền thống.',
    },
    tinhTrangBaoTon: 'Đang được Hội trường Thống Nhất quản lý; công trình được giữ gìn và mở cửa đón khách tham quan.',
    nguonTuLieu: [
      ...nguonChung('N4', 'Quyết định số 1272/QĐ-TTg ngày 12/8/2009'),
      { nguonId: 'N7', noiDungTrich: 'Thông tin quản lý, phát huy giá trị di tích từ Bộ Văn hóa, Thể thao và Du lịch.' },
    ],
    duongDanNguon: [VANBAN, DSVH, BVHTTDL],
  },
  {
    id: 'co-do-hue',
    maTuLieu: 'G01-09',
    tenChinhThuc: 'Quần thể di tích Cố đô Huế',
    tenGoiKhac: ['Kinh thành Huế', 'Đại Nội Huế'],
    loaiHinh: 'Di tích lịch sử và kiến trúc nghệ thuật',
    phanLoai: ['Di tích lịch sử', 'Di tích kiến trúc nghệ thuật'],
    diaPhuong: {
      quanHuyen: 'Thành phố Huế và các địa phương phụ cận',
      tinhThanh: 'Thừa Thiên Huế',
      ghiChuHanhChinh: 'Tên tỉnh ghi theo thời điểm xếp hạng; từ 01/01/2025 là thành phố Huế trực thuộc Trung ương.',
    },
    quyetDinhXepHang: QD_DOT_1,
    namXepHang: 2009,
    giaTriTieuBieu: {
      lichSu: 'Kinh đô của nước Việt Nam thống nhất dưới triều Nguyễn (1802 - 1945).',
      vanHoa: 'Quần thể Kinh thành, Hoàng thành, Tử Cấm thành, lăng tẩm, đàn Nam Giao... Được UNESCO ghi danh là Di sản văn hóa thế giới năm 1993.',
      khoaHoc: 'Có giá trị nghiên cứu về quy hoạch kinh đô, kiến trúc cung đình và mối quan hệ hài hòa với cảnh quan thiên nhiên.',
    },
    tinhTrangBaoTon: 'Đang được Trung tâm Bảo tồn Di tích Cố đô Huế quản lý; nhiều hạng mục đã và đang được trùng tu.',
    nguonTuLieu: [
      ...nguonChung('N4', 'Quyết định số 1272/QĐ-TTg ngày 12/8/2009'),
      { nguonId: 'N8', noiDungTrich: 'Thông tin quản lý, bảo tồn từ Trung tâm Bảo tồn Di tích Cố đô Huế.' },
    ],
    duongDanNguon: [VANBAN, DSVH, 'https://hueworldheritage.org.vn'],
  },
  {
    id: 'do-thi-co-hoi-an',
    maTuLieu: 'G01-10',
    tenChinhThuc: 'Di tích kiến trúc nghệ thuật Đô thị cổ Hội An',
    tenGoiKhac: ['Phố cổ Hội An', 'Faifo'],
    loaiHinh: 'Di tích kiến trúc nghệ thuật',
    phanLoai: ['Di tích kiến trúc nghệ thuật'],
    diaPhuong: {
      quanHuyen: 'Thành phố Hội An',
      tinhThanh: 'Quảng Nam',
      ghiChuHanhChinh: 'Tên tỉnh ghi theo thời điểm xếp hạng; từ 01/7/2025 tỉnh Quảng Nam hợp nhất vào thành phố Đà Nẵng.',
    },
    quyetDinhXepHang: QD_DOT_1,
    namXepHang: 2009,
    giaTriTieuBieu: {
      lichSu: 'Thương cảng quốc tế sầm uất trong khoảng thế kỷ XVI - XIX, nơi giao lưu của thương nhân nhiều nước.',
      vanHoa: 'Quần thể nhà phố, hội quán, đình chùa, Chùa Cầu thể hiện sự giao thoa văn hóa Việt - Hoa - Nhật - phương Tây. Được UNESCO ghi danh là Di sản văn hóa thế giới năm 1999.',
      khoaHoc: 'Là đô thị thương cảng được bảo tồn tương đối nguyên vẹn, có giá trị nghiên cứu về kiến trúc và quy hoạch đô thị truyền thống.',
    },
    tinhTrangBaoTon: 'Đang được Trung tâm Quản lý Bảo tồn Di sản Văn hóa Hội An quản lý; thường xuyên tu bổ các công trình kiến trúc.',
    nguonTuLieu: [
      ...nguonChung('N4', 'Quyết định số 1272/QĐ-TTg ngày 12/8/2009'),
      { nguonId: 'N7', noiDungTrich: 'Thông tin quản lý, phát huy giá trị di tích từ Bộ Văn hóa, Thể thao và Du lịch.' },
    ],
    duongDanNguon: [VANBAN, DSVH, BVHTTDL],
  },
  {
    id: 'my-son',
    maTuLieu: 'G01-11',
    tenChinhThuc: 'Di tích lịch sử và kiến trúc nghệ thuật Khu đền tháp Mỹ Sơn',
    tenGoiKhac: ['Thánh địa Mỹ Sơn'],
    loaiHinh: 'Di tích lịch sử và kiến trúc nghệ thuật',
    phanLoai: ['Di tích lịch sử', 'Di tích kiến trúc nghệ thuật'],
    diaPhuong: {
      quanHuyen: 'Huyện Duy Xuyên',
      tinhThanh: 'Quảng Nam',
      ghiChuHanhChinh: 'Tên tỉnh ghi theo thời điểm xếp hạng; từ 01/7/2025 tỉnh Quảng Nam hợp nhất vào thành phố Đà Nẵng.',
    },
    quyetDinhXepHang: QD_DOT_1,
    namXepHang: 2009,
    giaTriTieuBieu: {
      lichSu: 'Trung tâm tôn giáo của vương quốc Chămpa, các đền tháp được xây dựng trong khoảng thế kỷ IV đến thế kỷ XIII.',
      vanHoa: 'Thể hiện tín ngưỡng Hindu giáo và nghệ thuật kiến trúc, điêu khắc Chămpa. Được UNESCO ghi danh là Di sản văn hóa thế giới năm 1999.',
      khoaHoc: 'Có giá trị nghiên cứu về kỹ thuật xây gạch, điêu khắc đá và lịch sử Chămpa.',
    },
    tinhTrangBaoTon: 'Nhiều tháp bị hư hại trong chiến tranh; đang được Ban Quản lý Di sản văn hóa Mỹ Sơn quản lý và triển khai các dự án bảo tồn, gia cố.',
    nguonTuLieu: [
      ...nguonChung('N4', 'Quyết định số 1272/QĐ-TTg ngày 12/8/2009'),
      { nguonId: 'N7', noiDungTrich: 'Thông tin quản lý, phát huy giá trị di tích từ Bộ Văn hóa, Thể thao và Du lịch.' },
    ],
    duongDanNguon: [VANBAN, DSVH, BVHTTDL],
  },
  {
    id: 'vinh-ha-long',
    maTuLieu: 'G01-12',
    tenChinhThuc: 'Danh lam thắng cảnh Vịnh Hạ Long',
    tenGoiKhac: ['Hạ Long'],
    loaiHinh: 'Danh lam thắng cảnh',
    phanLoai: ['Danh lam thắng cảnh'],
    diaPhuong: {
      quanHuyen: 'Thành phố Hạ Long và thành phố Cẩm Phả',
      tinhThanh: 'Quảng Ninh',
      ghiChuHanhChinh: 'Địa danh ghi theo thời điểm xếp hạng; từ 01/7/2025 thực hiện chính quyền địa phương hai cấp.',
    },
    quyetDinhXepHang: QD_DOT_1,
    namXepHang: 2009,
    giaTriTieuBieu: {
      lichSu: 'Vùng vịnh gắn với nhiều dấu tích cư trú của người tiền sử và các sự kiện lịch sử trên vùng biển Đông Bắc.',
      vanHoa: 'Được UNESCO ghi danh Di sản thiên nhiên thế giới năm 1994 (giá trị thẩm mỹ) và năm 2000 (giá trị địa chất, địa mạo); năm 2023 mở rộng thành di sản Vịnh Hạ Long - Quần đảo Cát Bà.',
      khoaHoc: 'Hệ thống đảo đá vôi và hang động karst có giá trị nghiên cứu địa chất, địa mạo và đa dạng sinh học.',
    },
    tinhTrangBaoTon: 'Đang được Ban Quản lý Vịnh Hạ Long quản lý; triển khai các biện pháp bảo vệ môi trường và cảnh quan.',
    nguonTuLieu: [
      ...nguonChung('N4', 'Quyết định số 1272/QĐ-TTg ngày 12/8/2009'),
      { nguonId: 'N7', noiDungTrich: 'Thông tin quản lý, phát huy giá trị di sản từ Bộ Văn hóa, Thể thao và Du lịch.' },
    ],
    duongDanNguon: [VANBAN, DSVH, BVHTTDL],
  },
  {
    id: 'trang-an-tam-coc-bich-dong',
    maTuLieu: 'G01-13',
    tenChinhThuc: 'Di tích lịch sử và danh lam thắng cảnh Quần thể danh thắng Tràng An - Tam Cốc - Bích Động',
    tenGoiKhac: ['Tràng An', 'Quần thể danh thắng Tràng An'],
    loaiHinh: 'Di tích lịch sử và danh lam thắng cảnh',
    phanLoai: ['Di tích lịch sử', 'Danh lam thắng cảnh'],
    diaPhuong: {
      quanHuyen: 'Thành phố Ninh Bình, thành phố Tam Điệp, các huyện Hoa Lư, Gia Viễn, Nho Quan',
      tinhThanh: 'Ninh Bình',
      ghiChuHanhChinh: 'Địa danh ghi theo thời điểm xếp hạng; từ 01/7/2025 tỉnh Ninh Bình mới được hợp nhất từ Ninh Bình, Hà Nam và Nam Định.',
    },
    quyetDinhXepHang: QD_DOT_2,
    namXepHang: 2012,
    giaTriTieuBieu: {
      lichSu: 'Gắn với vùng đất Cố đô Hoa Lư và dấu tích cư trú của người tiền sử trong các hang động.',
      vanHoa: 'Quần thể danh thắng Tràng An được UNESCO ghi danh là Di sản văn hóa và thiên nhiên thế giới (di sản hỗn hợp) năm 2014.',
      khoaHoc: 'Cảnh quan karst ngập nước cùng các di chỉ khảo cổ trong hang động có giá trị nghiên cứu địa chất và khảo cổ học.',
    },
    tinhTrangBaoTon: 'Đang được Ban Quản lý Quần thể danh thắng Tràng An quản lý, bảo tồn cảnh quan và di chỉ.',
    nguonTuLieu: [
      ...nguonChung('N5', 'Quyết định số 548/QĐ-TTg ngày 10/5/2012'),
      { nguonId: 'N7', noiDungTrich: 'Thông tin quản lý, phát huy giá trị di sản từ Bộ Văn hóa, Thể thao và Du lịch.' },
    ],
    duongDanNguon: [VANBAN, DSVH, BVHTTDL],
  },
  {
    id: 'con-son-kiep-bac',
    maTuLieu: 'G01-14',
    tenChinhThuc: 'Di tích lịch sử và kiến trúc nghệ thuật Côn Sơn - Kiếp Bạc',
    tenGoiKhac: ['Côn Sơn', 'Đền Kiếp Bạc'],
    loaiHinh: 'Di tích lịch sử và kiến trúc nghệ thuật',
    phanLoai: ['Di tích lịch sử', 'Di tích kiến trúc nghệ thuật'],
    diaPhuong: {
      quanHuyen: 'Thị xã Chí Linh (nay là thành phố Chí Linh)',
      tinhThanh: 'Hải Dương',
      ghiChuHanhChinh: 'Tên tỉnh ghi theo thời điểm xếp hạng; từ 01/7/2025 tỉnh Hải Dương hợp nhất vào thành phố Hải Phòng.',
    },
    quyetDinhXepHang: QD_DOT_2,
    namXepHang: 2012,
    giaTriTieuBieu: {
      lichSu: 'Côn Sơn gắn với Tư đồ Trần Nguyên Đán, Anh hùng dân tộc Nguyễn Trãi và Thiền sư Huyền Quang; Kiếp Bạc là nơi thờ Hưng Đạo Đại vương Trần Quốc Tuấn.',
      vanHoa: 'Trung tâm Phật giáo Trúc Lâm và tín ngưỡng thờ Đức Thánh Trần; là một bộ phận của Quần thể di tích và danh thắng Yên Tử - Vĩnh Nghiêm - Côn Sơn, Kiếp Bạc được UNESCO ghi danh là Di sản văn hóa thế giới năm 2025.',
      khoaHoc: 'Có giá trị nghiên cứu về lịch sử thời Trần, kiến trúc tôn giáo và văn học trung đại.',
    },
    tinhTrangBaoTon: 'Đang được Ban Quản lý di tích Côn Sơn - Kiếp Bạc quản lý, tu bổ và tổ chức lễ hội truyền thống.',
    nguonTuLieu: [
      ...nguonChung('N5', 'Quyết định số 548/QĐ-TTg ngày 10/5/2012'),
      { nguonId: 'N7', noiDungTrich: 'Thông tin quản lý, phát huy giá trị di tích từ Bộ Văn hóa, Thể thao và Du lịch.' },
    ],
    duongDanNguon: [VANBAN, DSVH, BVHTTDL],
  },
  {
    id: 'chua-keo',
    maTuLieu: 'G01-15',
    tenChinhThuc: 'Di tích kiến trúc nghệ thuật Chùa Keo',
    tenGoiKhac: ['Thần Quang tự', 'Chùa Keo Thái Bình'],
    loaiHinh: 'Di tích kiến trúc nghệ thuật',
    phanLoai: ['Di tích kiến trúc nghệ thuật'],
    diaPhuong: {
      quanHuyen: 'Huyện Vũ Thư',
      tinhThanh: 'Thái Bình',
      ghiChuHanhChinh: 'Tên tỉnh ghi theo thời điểm xếp hạng; từ 01/7/2025 tỉnh Thái Bình hợp nhất vào tỉnh Hưng Yên.',
    },
    quyetDinhXepHang: QD_DOT_3,
    namXepHang: 2012,
    giaTriTieuBieu: {
      lichSu: 'Chùa có nguồn gốc từ thời Lý, gắn với Thiền sư Dương Không Lộ; quần thể kiến trúc hiện nay được xây dựng lại vào thế kỷ XVII.',
      vanHoa: 'Thờ Phật và Thiền sư Không Lộ; lễ hội chùa Keo là sinh hoạt văn hóa tín ngưỡng tiêu biểu của cộng đồng địa phương.',
      khoaHoc: 'Gác chuông chùa Keo với kết cấu gỗ nhiều tầng mái là công trình tiêu biểu của nghệ thuật kiến trúc gỗ truyền thống Việt Nam.',
    },
    tinhTrangBaoTon: 'Đang được chính quyền địa phương và cộng đồng quản lý; các hạng mục kiến trúc gỗ được tu bổ theo định kỳ.',
    nguonTuLieu: [
      ...nguonChung('N6', 'Quyết định số 1419/QĐ-TTg ngày 27/9/2012'),
      { nguonId: 'N7', noiDungTrich: 'Thông tin quản lý, phát huy giá trị di tích từ Bộ Văn hóa, Thể thao và Du lịch.' },
    ],
    duongDanNguon: [VANBAN, DSVH, BVHTTDL],
  },
]

export const CAU_TRA_LOI_KHONG_CO_DU_LIEU =
  'Hiện chưa có dữ liệu được kiểm chứng về nội dung này trong cơ sở dữ liệu của ứng dụng. Ứng dụng không tự suy đoán thông tin về di sản khi chưa có nguồn chính thống.'

export const timDiSan = (id: string) => DI_SAN.find((d) => d.id === id)
export const timNguon = (id: string) => NGUON_TU_LIEU.find((n) => n.id === id)

export const DANH_SACH_TINH = Array.from(new Set(DI_SAN.map((d) => d.diaPhuong.tinhThanh))).sort((a, b) =>
  a.localeCompare(b, 'vi'),
)

export const DANH_SACH_DOT = [1, 2, 3, 4]

export const dinhDangQuyetDinh = (d: DiSan) =>
  `Quyết định số ${d.quyetDinhXepHang.soHieu} ngày ${d.quyetDinhXepHang.ngayBanHanh} của ${d.quyetDinhXepHang.coQuanBanHanh}`

export const taoTrichDan = (d: DiSan) => {
  const nguon = d.nguonTuLieu
    .map((t, i) => {
      const n = timNguon(t.nguonId)
      return `[${i + 1}] ${n?.ten ?? t.nguonId}${n ? ` (${n.coQuanBanHanh})` : ''}. ${t.noiDungTrich}`
    })
    .join('\n')
  return `${d.tenChinhThuc} - Mã tư liệu ${d.maTuLieu}. ${dinhDangQuyetDinh(d)} (Đợt ${d.quyetDinhXepHang.dotXepHang}).\nNguồn tư liệu:\n${nguon}\nĐường dẫn: ${d.duongDanNguon.join(' ; ')}\nTrích từ: Hồ sơ số di tích quốc gia đặc biệt (G01).`
}
