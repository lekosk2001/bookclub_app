import { IBoardComment, IMutation, IMutationDeleteBoardCommentArgs, IQuery, IQueryFetchBoardCommentsArgs } from '@/common/types/generated/types';
import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React from 'react'
import BoardCommentList_item from './BoardCommentList_item';
import { DELETE_BOARDS_COMMNET, FETCH_BOARD_COMMENT } from './BoardCommentList_queries';
import * as S from './BoardCommentList_styles';

const BoardCommentList_UI = () => {
    const rourer = useRouter();
    const boardId = String(rourer.query.boardId);

    const { data: CommentsData, fetchMore } = useQuery<
        Pick<IQuery, 'fetchBoardComments'>,
        IQueryFetchBoardCommentsArgs
    >(FETCH_BOARD_COMMENT, {
        variables: {
            boardId,
            page: 1,
        },
    });

    const [deleteBoardComment] = useMutation<
        Pick<IMutation, 'deleteBoardComment'>,
        IMutationDeleteBoardCommentArgs
    >(DELETE_BOARDS_COMMNET);

    const onClickDeleteBoardComment = async (boardCommentId: string) => {
        const myPassword = prompt('비밀번호를 입력하세요.');
        try {
            await deleteBoardComment({
                variables: {
                    boardCommentId,
                    password: myPassword,
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENT,
                        variables: {
                            boardId,
                            page: 1,
                        },
                    },
                ],
            });
        } catch (error) {
            if (error instanceof Error) alert(error.message);
        }
    };
    return (
        <S.CommentsList>
            <S.CommetLabel>댓글</S.CommetLabel>
            {CommentsData?.fetchBoardComments.map(
                (comment: IBoardComment) =>
                    <BoardCommentList_item
                        key={comment._id}
                        comment={comment}
                        onClickDeleteBoardComment={
                            onClickDeleteBoardComment
                        }
                    />

            )}
        </S.CommentsList>
    )
}

export default BoardCommentList_UI