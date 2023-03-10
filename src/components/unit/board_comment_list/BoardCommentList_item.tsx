import * as S from './BoardCommentList_styles';
import React, { useState } from 'react';
import { IBoardComment } from '@/common/types/generated/types';
import dayjs from 'dayjs';

interface BoardCommentList_item_Props {
	onClickDeleteBoardComment: (arg0: string) => void;
	comment: IBoardComment;
}

const BoardCommentList_item = (props: BoardCommentList_item_Props) => {
	const comment = props.comment;
	const [isEditing, setIsEditing] = useState(false);

	return (
		<>
			{!isEditing && (
				<S.CommentBox id={comment._id}>
					<S.UserAvatar />
					<S.CommentContents>
						<S.CommentHead>
							<S.CommentHeadLeftside>
								<S.CommentWriter>{comment.writer}</S.CommentWriter>
								<S.RateStyled disabled value={comment.rating} />
							</S.CommentHeadLeftside>

							<S.CommentButtons>
								<S.EditOutlinedStyled
									onClick={() => { setIsEditing(true); }} />
								<S.CloseOutlinedStyled
									onClick={() => { props.onClickDeleteBoardComment(comment._id); }} />
							</S.CommentButtons>
						</S.CommentHead>

						<S.CommentBody>{comment.contents}</S.CommentBody>
						<S.CommentFooter>
							{dayjs(comment.createdAt).format("YYYY.MM.DD HH:mm")}
						</S.CommentFooter>
					</S.CommentContents>
				</S.CommentBox>
			)}
			{/* {isEditing && (
				<BoardCommentWrite_container
					comment={comment}
					isEditing={true}
					setIsEditing={setIsEditing}
				/>
			)} */}
		</>
	);
};

export default BoardCommentList_item;
