import { activeNav } from "@/common/store/atoms";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import * as S from "./Layout_style";

type Props = {
    children: JSX.Element;
};

const Layout = (props: Props) => {
    const router = useRouter();
    const [currentNav, setCurrentNav] = useRecoilState(activeNav);

    useEffect(() => {
        if (router.route.includes("boards")) { setCurrentNav("boards") }
        else if (router.route.includes("market")) { setCurrentNav("market") }
        else if (router.route.includes("mypage")) { setCurrentNav("mypage") }
        else { setCurrentNav("") }
    }, [router.route, setCurrentNav])

    console.log(router)

    return (<>
        <S.Main>
            <S.Header>
                <S.Logo onClick={() => { router.push(`/`) }}>
                    <span style={{ color: "var(--text-color-active)" }}>BOOK</span>CLUB
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
                        <Link href={"/boards"}><S.NavItem active={currentNav === "boards"}>
                            <S.ReadFilledStyled active={currentNav === "boards" ? "true" : "false"} /> 자유게시판
                        </S.NavItem></Link>
                        <Link href={"/market"}><S.NavItem active={currentNav === "market"}>
                            <S.ShoppingFilledStyled active={currentNav === "market" ? "true" : "false"} />중고장터
                        </S.NavItem></Link>
                        <Link href={"/mypage"}><S.NavItem active={currentNav === "mypage"}>
                            <S.SettingFilledStyled active={currentNav === "mypage" ? "true" : "false"} />내 정보
                        </S.NavItem></Link>
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
