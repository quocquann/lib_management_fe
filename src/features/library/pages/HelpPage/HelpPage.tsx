import { Box, Container } from '@mui/material'
import React from 'react'

const HelpPage:React.FC = () => {
  return (
    <Box marginTop={20}>
        <Container>
            <p style={{ textAlign: "left" }}>
                <strong>
                <span style={{ fontSize: "13.0000pt" }}>
                    <span style={{ fontFamily: '"Times New Roman"' }}>
                    <span style={{ color: "#1976d2" }}>
                        <strong>HƯỚNG DẪN CÁCH MƯỢN TÀI LIỆU TRỰC TUYẾN</strong>
                    </span>
                    </span>
                </span>
                </strong>
            </p>
            <p>
                <span style={{ fontSize: "13.0000pt" }}>
                <span style={{ fontFamily: '"Times New Roman"' }}>
                    Bước 1: Bạn đọc tra cứu tài liệu theo nhu cầu
                </span>
                </span>
            </p>
            <p>
                <span style={{ fontSize: "13.0000pt" }}>
                <span style={{ fontFamily: '"Times New Roman"' }}>
                    Bước 2: Chọn các tài liệu bạn muốn mượn bằng cách nhấn vào biểu tượng dấu cộng <img width={30} height={30} src='plus.png' alt='plus'/> hoặc vào trang chi tiết tài liệu rồi nhấn nút mượn <img width={200} height={30} src='muon.png' alt='muon'/>
                </span>
                </span>
            </p>
            <p>
                <span style={{ fontSize: "13.0000pt" }}>
                <span style={{ fontFamily: '"Times New Roman"' }}>
                    Bước 3: Khi đã chọn xong các tài liệu muốn mượn, bạn đọc vào giỏ sách chọn ngày mượn, ngày trả và nhấn nút mượn để tạo yêu cầu mượn sách
                </span>
                </span>
            </p>
            <p>
                <span style={{ fontSize: "13.0000pt" }}>
                <span style={{ fontFamily: '"Times New Roman"' }}>
                    Bước 4: Đợi khi yêu cầu được chấp nhận, bạn đọc đến thư viện để nhận sách
                </span>
                </span>
            </p>
        </Container> 
    </Box>   
  )
}

export default HelpPage