import { Box, Container, Link, Typography } from '@mui/material'
import React from 'react'
import {styled} from "@mui/material"
import { LocalLibrary } from '@mui/icons-material'
import {Link as RouterLink} from 'react-router-dom'

const WrapperBox = styled(Box)({
    height: 100,
    display: 'flex',
    alignItems: "center",
}) as typeof Box

const FlexBox = styled(Box)({
    display: 'flex',
    alignItems: 'center'
}) as typeof Box

const Footer: React.FC = () => {
  return (
    <WrapperBox component="div">
        <Container>
            <FlexBox>
                <FlexBox>
                    <Link component={RouterLink} to={"/home"} marginRight={2}>
                        <LocalLibrary fontSize='large'/>
                    </Link>
                    <Typography component={'span'}>
                        Thư viện trường ĐH Giao thông vận tải
                    </Typography>
                </FlexBox>

                <Box flex={1}/>

                <Box>
                    <Typography component={"p"}>
                        Địa chỉ: 3 Đ. Cầu Giấy, Ngọc Khánh, Đống Đa, Hà Nội
                    </Typography>
                    <Typography component={"p"}>
                        Hotline: 0123456789
                    </Typography>
                </Box>
            </FlexBox>
        </Container>
    </WrapperBox>
  )
}

export default Footer