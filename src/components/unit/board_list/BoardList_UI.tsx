import { useQuery } from '@apollo/client';
import { Button, Card } from 'antd';
import { useRouter } from 'next/router'
import React from 'react'
import { FETCH_BOARDS } from './BoardList_queries';
import * as S from "./BoardList_style"
import { ButtonWrapper, ContentsHeader, Title } from '@/components/common/style';

type Props = {}

const BoardList_UI = (props: Props) => {

    const router = useRouter();

    const { data, refetch } = useQuery(FETCH_BOARDS);


    return (
        <S.Contents>
            <ContentsHeader>
                <Title>독서모임</Title>
                <ButtonWrapper>
                    <Button onClick={() => { router.push(`boards/new`) }}>작성</Button>
                </ButtonWrapper>
            </ContentsHeader>

            <S.CardContainer>
                {data?.fetchBoards.map((list: any) =>
                    <Card title={list.title} hoverable onClick={() => { router.push(`/boards/${list._id}`) }} key={list._id}>{list.title}</Card>
                )}
            </S.CardContainer>
        </S.Contents>
    )
}

export default BoardList_UI