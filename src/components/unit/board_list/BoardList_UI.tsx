import { useQuery } from '@apollo/client';
import { Button, Card } from 'antd';
import { useRouter } from 'next/router'
import React from 'react'
import { FETCH_BOARDS } from './BoardList_queries';
import * as S from "./BoardList_style"
import { ButtonWrapper, Contents, ContentsHeader, Title } from '@/components/common/style';
import { dateFormat } from '@/common/utils';

type Props = {}

const BoardList_UI = (props: Props) => {

    const router = useRouter();

    const { data, refetch } = useQuery(FETCH_BOARDS);

    return (
        <Contents>
            <ContentsHeader>
                <Title>자유토론</Title>
                <ButtonWrapper>
                    <Button onClick={() => { router.push(`boards/new`) }}>작성</Button>
                </ButtonWrapper>
            </ContentsHeader>

            <S.ListContainer>
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
                        <S.Column>{dateFormat(list.createdAt)}</S.Column>
                        <S.Column>{list.likeCount ? list.likeCount : 0}</S.Column>
                    </S.Row>
                )}
            </S.ListContainer>
        </Contents>
    )
}

export default BoardList_UI