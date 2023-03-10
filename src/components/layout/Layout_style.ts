import styled from "@emotion/styled";
import { CaretDownOutlined, MehFilled, ReadFilled, SettingFilled, ShoppingFilled } from "@ant-design/icons";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    height: 100%;
`
export const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    border-right:1px solid #dae1e6;
    max-width: 240px;
    min-width: 240px;
    padding: 20px;
    padding-top: 30px;
    gap: 20px;
    z-index: 1;
`

export const Article = styled.article`
    width: 100%;
    max-width: 200px;
`

export const Nav = styled.nav`
    display: flex;
    gap: 5px;
    flex-direction: column;

`


export const SettingFilledStyled = styled(SettingFilled)`
    background-color: #808080;
    font-size: 15px;    
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color: #fff; 
`

export const ReadFilledStyled = styled(ReadFilled)`
    background-color: #808080;
    font-size: 15px;    
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color: #fff; 
`

export const ShoppingFilledStyled = styled(ShoppingFilled)`
    background-color: #808080;
    width: 30px;
    height: 30px;
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
    gap: 17px;
    font-weight: 500;
    font-size: 15px;
    height: 40px;
    padding: 0px 10px;
    display: flex;
    align-items: center;
    color: gray;
    &:hover{
        background-color: #E8F0FE;
    }
`

export const Mid = styled.div`
    display: flex;
    height: 100%;
`

export const Contents = styled.section`
    width: 100%;
    padding: 60px; 
    min-height: 50vh;    
    max-width: 1000px;
`

export const Header = styled.header`
    width: inherit;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #dae1e6;
    padding: 0px 20px;    
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%);
    overflow: hidden;
    z-index: 2;
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
    &:hover{
        background-color: #E8F0FE;
    }
`

export const UserAvatar = styled(MehFilled)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    font-size: 20px;
    color: #fff;
    background-color: gray;
    border-radius: 20px;
`


export const UserName = styled.p`
    font-size: 13px;
    font-weight: 500;
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