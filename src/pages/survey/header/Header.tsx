import React from 'react';

function Header() {
  return (
    <div style={{ padding: '10px' }}>
      <h1 style={{ padding: '20px 0', fontSize: '1.5rem' }}>
        {process.env.BASE_URL}
        Đăng ký thông tin sức khỏe
      </h1>
      <div>
        Đây là khảo sát sức khỏe của Trung tâm nghiên cứu và phát triển điện thoại di động SVMC.
      </div>
      <div>
        BLĐ SVMC đề nghị tất cả nhân viên thực hiện khai báo bắt buộc 2 lần/tuần, cụ thể:
      </div>
      <div>
        - Thời gian làm khảo sát
      </div>
      <div>
        o Lần 1
      </div>
      <div>
        <ul style={{ listStyle: 'inside', padding: '0 20px' }}>
          <li>
            Thứ 4 hàng tuần 13:00 ~ 18:00 (Chốt dữ liệu lúc 18:00)
          </li>
          <li>
            Mở thời gian làm khảo sát bổ sung từ 18:00 thứ 4 đến 06:00 sáng hôm sau thứ 5
          </li>
        </ul>
      </div>
      <div>
        o Lần 2
      </div>
      <div>
        <ul style={{ listStyle: 'inside', padding: '0 20px' }}>
          <li>
            Chủ nhật hàng tuần 09:00 ~ 16:00 (Chốt dữ liệu lúc 16:00
          </li>
          <li>
            Mở thời gian làm khảo sát bổ sung từ 16:00 chủ nhật đến 06:00 sáng hôm sau thứ 2
          </li>
        </ul>
      </div>
      <div>
        - Mọi thắc mắc vui lòng liên hệ Hotline của SVMC 0886.550.990 hoặc 0888.990.082 để được hỗ trợ (thời gian tiếp nhận điện thoại 9:00 ~ 19:00)
      </div>
    </div>
  )
}

export default Header;