import { ButtonWrapper, Contents, ContentsHeader, Title } from '@/components/common/style';
import { useMutation, useQuery } from '@apollo/client';
import { Button, Popover } from 'antd';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import React from 'react'
import BoardCommentList_container from '../board_comment_list/BoardCommentList_container';
import { DELETE_BOARDS, DISLIKEBOARD, FETCH_BOARD, LIKEBOARD } from './BoardDetail_queries';
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

    console.log(data)

    const content = <p>{data?.fetchBoard.boardAddress?.address}</p>;
    const clip = () => {

        var url = '';
        var textarea = document.createElement("textarea");
        document.body.appendChild(textarea);
        url = url = window.document.location.href;
        textarea.value = url;
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        alert("URL이 복사되었습니다.")
    }

    const [deleteBoard] = useMutation(DELETE_BOARDS);
    const onClickDeleteBoard = async () => {
        try {
            if (confirm('정말 삭제하시겠습니까?')) {
                await deleteBoard({ variables: { boardId } });
                alert('삭제되었습니다.')
                router.push(`/boards`);
            } else {
                return;
            }
        } catch (error) {
            if (error instanceof Error) alert(error.message);
        }
    };

    const [likeBoard] = useMutation(LIKEBOARD);
    const onClicklikeBoard = async () => {
        try {
            await likeBoard({
                variables: { boardId },
                refetchQueries: [
                    {
                        query: FETCH_BOARD,
                        variables: {
                            boardId,
                        },
                    },
                ],
            });
        } catch (error) {
            if (error instanceof Error) alert(error.message);
        }
    };


    const [dislikeBoard] = useMutation(DISLIKEBOARD);
    const onClickDislikeBoard = async () => {
        try {
            await dislikeBoard({
                variables: { boardId },
                refetchQueries: [
                    {
                        query: FETCH_BOARD,
                        variables: {
                            boardId,
                        },
                    },
                ],
            });
        } catch (error) {
            if (error instanceof Error) alert(error.message);
        }
    };


    return (
        <Contents>
            <ContentsHeader>
                <Title>{data?.fetchBoard.title ? data?.fetchBoard.title : "제목없음"}</Title>
                <ButtonWrapper>
                    <Button danger onClick={onClickDeleteBoard}>삭제</Button>
                    <Button onClick={() => { router.push(`/boards`) }}>목록으로</Button>
                </ButtonWrapper>
            </ContentsHeader>

            <ContentsHeader>
                <S.User>
                    <S.UserAvatar />
                    <S.UserTextBox>
                        <S.UserName>{data?.fetchBoard.writer}</S.UserName>
                        <S.CreatedAtText>{data?.fetchBoard.createdAt ? dayjs(data?.fetchBoard.createdAt).format("YYYY.MM.DD HH:mm") : ""}</S.CreatedAtText>
                    </S.UserTextBox>
                </S.User>
                <S.ContentHeadButtons>
                    <S.LikeCountBox onClick={onClicklikeBoard}><S.LikeButtonStyled /><p>{data?.fetchBoard.likeCount}</p></S.LikeCountBox>
                    <S.LikeCountBox onClick={onClickDislikeBoard}><S.DisLikeButtonStyled /> <p>{data?.fetchBoard.dislikeCount}</p></S.LikeCountBox>

                    <S.LinkOutlinedStyled
                        onClick={() => { clip() }}
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