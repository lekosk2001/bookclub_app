import styled from "@emotion/styled";
import { CaretDownOutlined, ReadFilled, SettingFilled, ShoppingFilled } from "@ant-design/icons";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
`
export const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    border-right:1px solid #dae1e6;
    width: 100%;
    max-width: 240px;
    padding: 20px 10px;
    gap: 20px;
`

export const Nav = styled.nav`
    display: flex;
    gap: 10px;
    flex-direction: column;

`


export const SettingFilledStyled = styled(SettingFilled)`
    background-color: gray;
    font-size: 15px;    
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color: #fff; 
`

export const ReadFilledStyled = styled(ReadFilled)`
    background-color: gray;
    font-size: 15px;    
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color: #fff; 
`

export const ShoppingFilledStyled = styled(ShoppingFilled)`
    background-color: gray;
    width: 24px;
    height: 24px;
    font-size: 15px;
    color: #fff; 
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`

export const NavItem = styled.h5`
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 400;
    font-size: 15px;
    height: 40px;
    padding: 0px 10px;
    display: flex;
    align-items: center;
    &:hover{
        background-color: #f4f6fa;
    }
`

export const Mid = styled.div`
    display: flex;
`

export const Contents = styled.div`
    width: 100%;
    padding:20px;
    margin: 0px auto;
    max-width: 860px;
    min-height: 50vh;
`

export const Header = styled.header`
    width: inherit;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #dae1e6;
    padding: 0px 20px;
`


export const Logo = styled.h2`
    cursor: pointer;

`


export const User = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    gap: 10px;
    padding: 10px 10px;
    
`

export const UserAvatar = styled.div`
    width: 30px;
    height: 30px;
    background-color: gray;
    border-radius: 20px;
`


export const UserName = styled.p`
    font-size: 15px;
`


export const UserCaretDown = styled(CaretDownOutlined)`
    display: flex;
    width: 20px;
    height: 20px;
    align-items: center;
    justify-content: center;
    font-size: 12px;
`




export const Footer = styled.footer`
    border-top: 1px solid #dae1e6;
    display: flex;
    height: 160px;
    justify-content: center;
    align-items: center;
`