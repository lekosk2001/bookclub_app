import { useQuery } from '@apollo/client';
import { Button } from 'antd';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from './BoardList_queries';
import * as S from "./BoardList_style"
import { ButtonWrapper, Contents, ContentsHeader, Title } from '@/components/common/style';
import Pagenation_container from '@/components/common/pagenation/Pagenation_container';
import dayjs from 'dayjs';

type Props = {}

const BoardList_UI = (props: Props) => {

    const router = useRouter();
    const { data, refetch } = useQuery(FETCH_BOARDS);

    const [search, setSearch] = useState('');

    const { data: totalBoards } = useQuery(FETCH_BOARDS_COUNT, {
        variables: { search },
    });

    useEffect(() => {
        refetch()
    }, [refetch])



    return (
        <Contents>
            <ContentsHeader>
                <Title>자유게시판</Title>
                <ButtonWrapper>
                    <Button onClick={() => { router.push(`boards/new`) }}>작성</Button>
                </ButtonWrapper>
            </ContentsHeader>

            {data && <S.ListContainer>
                <S.Tabs>
                    <S.Tab>제목</S.Tab>
                    <S.Tab>작성자</S.Tab>
                    <S.Tab>작성일</S.Tab>
                    <S.Tab>추천</S.Tab>
                </S.Tabs>
                {data?.fetchBoards.map((list: any) =>
                    <S.Row onClick={() => { router.push(`/boards/${list._id}`) }} key={list._id}>
                        <S.Column>{list.title ? list.title : "제목없음"}</S.Column>
                        <S.Column>{list.writer ? list.writer : "작성자없음"}</S.Column>
                        <S.Column>{dayjs(list.createdAt).isSame(dayjs(), "date") ? dayjs(list.createdAt).format("HH:mm") : dayjs(list.createdAt).format("YYYY.MM.DD")}</S.Column>
                        <S.Column>{list.likeCount}</S.Column>
                    </S.Row>
                )}
            </S.ListContainer>}
            <Pagenation_container refetch={refetch} count={totalBoards?.fetchBoardsCount} setSearch={setSearch}></Pagenation_container>
        </Contents>
    )
}

export default BoardList_UI