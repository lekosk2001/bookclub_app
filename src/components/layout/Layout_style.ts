import styled from "@emotion/styled";
import { CaretDownOutlined, MehFilled, ReadFilled, SettingFilled, ShoppingFilled } from "@ant-design/icons";

export const Main = styled.main`
    display: flex;
    height: inherit;
    flex-direction: column;

`

export const Aside = styled.aside`
    border-right:1px solid var(--border-color);
    display: flex;
    flex-direction: column;
    max-width: 240px;
    min-width: 240px;    
    min-height: 100%;
    padding: 30px 20px;
    gap: 20px;
    z-index: 1;
`



export const Contents = styled.section`
    width: 100%;
    padding: 60px 60px 40px 60px;
    height: 100%;
    max-width: 1000px;    
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


export const ReadFilledStyled = styled(ReadFilled)<{active:string}>`
    background-color:${(props)=>props.active==="true"? "var(--text-color-active)":"var(--text-color-sub)"};
    font-size: 15px;    
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color: var(--bg-color-white); 
`

export const SettingFilledStyled = styled(SettingFilled)<{active:string}>`
    background-color:${(props)=>props.active==="true"? "var(--text-color-active)":"var(--text-color-sub)"};
    font-size: 15px;    
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color: var(--bg-color-white); 
`

export const ShoppingFilledStyled = styled(ShoppingFilled)<{active:string}>`
    color: var(--bg-color-white);
    width: 30px;
    height: 30px;
    font-size: 15px;
    background-color:${(props)=>props.active==="true"? "var(--text-color-active)":"var(--text-color-sub)"};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`

export const NavItem = styled.h5<{active:boolean}>`
    display: flex;
    align-items: center;
    gap: 20px;
    font-weight: 500;
    font-size: 15px;
    padding: 10px;
    display: flex;
    align-items: center;
    color: ${(props)=>props.active? "var(--text-color-active)":"var(--text-color-sub)"};
    background-color: ${(props)=>props.active? "var(--hover-bg-color)":"default"};
    &:hover{
        background-color: var(--hover-bg-color);
    }
`

export const Mid = styled.div`
    display: flex;
    height: 100%;
`
export const Header = styled.header`
    width: inherit;
    height: 50px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--border-color);
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
        background-color: var(--hover-bg-color);
    }
`

export const UserAvatar = styled(MehFilled)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    font-size: 20px;
    color: var(--bg-color-white);
    background-color: var(--text-color-sub);
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
    border-top: 1px solid var(--border-color);
    display: flex;
    height: 100px;
    justify-content: center;
    align-items: center;
`
export const FooterText = styled.p`
    font-size: 11px;
    color: var(--text-color-gray);
`