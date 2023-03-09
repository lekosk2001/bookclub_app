import { dateFormat } from '@/common/utils';
import { ButtonWrapper, Contents, ContentsHeader, Title } from '@/components/common/style';
import { EnvironmentOutlined, LinkOutlined } from '@ant-design/icons';
import { useQuery } from '@apollo/client';
import { Button, Popover } from 'antd';
import { useRouter } from 'next/router';
import React from 'react'
import { FETCH_BOARD } from './BoardDetail_queries';
import * as S from "./BoardDetail_style"

type Props = {}

const BoardDetail_UI = (props: Props) => {
    const router = useRouter();
    const boardId = router.query.boardId;

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            boardId,
        },
    }
    );

    const content = <p>{data?.fetchBoard.boardAddress?.address}</p>;


    return (
        <Contents>
            <ContentsHeader>
                <Title>{data?.fetchBoard.title ? data?.fetchBoard.title : "제목없음"}</Title>
                <ButtonWrapper>
                    <Button danger onClick={() => { router.push(`/boards`) }}>삭제</Button>
                    <Button onClick={() => { router.push(`/boards`) }}>목록으로</Button>
                </ButtonWrapper>
            </ContentsHeader>

            <ContentsHeader>
                <S.User>
                    <S.UserAvatar />
                    <S.UserTextBox>
                        <S.UserName>{data?.fetchBoard.writer}</S.UserName>
                        <S.CreatedAtText>{data?.fetchBoard.createdAt ? dateFormat(data?.fetchBoard.createdAt) : ""}</S.CreatedAtText>
                    </S.UserTextBox>
                </S.User>
                <S.ContentHeadButtons>
                    <S.LinkOutlinedStyled
                        onClick={() => {
                            console.log('http://localhost:3000/' + router.asPath);
                        }}
                    />
                    {data?.fetchBoard.boardAddress?.address &&
                        <Popover content={content} placement="topRight">
                            <S.EnvironmentOutlinedStyled />
                        </Popover>
                    }
                </S.ContentHeadButtons>
            </ContentsHeader>



            <S.ContentsBody>
                <S.ContentsText>{data?.fetchBoard.contents}</S.ContentsText>
            </S.ContentsBody>

        </Contents>
    )
}

export default BoardDetail_UI