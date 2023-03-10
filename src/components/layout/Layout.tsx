import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import * as S from "./Layout_style";

type Props = {
    children: JSX.Element;
};

const Layout = (props: Props) => {
    const router = useRouter();

    return (<>
        <S.Main>
            <S.Header>
                <S.Logo onClick={() => { router.push(`/`) }}>
                    BOOKCLUB
                </S.Logo>
                <S.User>
                    <S.UserAvatar />
                    <S.UserName>이경석 님</S.UserName>
                    <S.UserCaretDown />
                </S.User>
            </S.Header>
            <S.Mid>
                <S.Aside>
                    <S.Nav>
                        <Link href={"/boards"}><S.NavItem><S.ReadFilledStyled /> 자유게시판</S.NavItem></Link>
                        <Link href={"/market"}><S.NavItem><S.ShoppingFilledStyled />중고장터</S.NavItem></Link>
                        <Link href={"/mypage"}><S.NavItem><S.SettingFilledStyled />내 정보</S.NavItem></Link>
                    </S.Nav>
                </S.Aside>
                <S.Contents>{props.children}</S.Contents>
                {/* <S.Article></S.Article> */}
            </S.Mid>

        </S.Main>
        <S.Footer>
            <S.FooterText>푸터</S.FooterText>
        </S.Footer>
    </>)

};

export default Layout;
