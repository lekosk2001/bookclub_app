import { CloseCircleOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Button } from 'antd';

export const WriteComment = styled.form`
	display: flex;
	flex-direction: column;
	gap: 0px;
	margin-bottom: 10px;
`;

export const CommetLabel = styled.div`
	display: flex;
	gap: 10px;
	justify-items: center;
	margin-bottom: 44px;
	align-items: center;
	h4 {
		font-weight: 500;
	}
`;
export const CommnetWriteHead = styled.div`
	display: flex;
	gap: 10px;
	margin-bottom: 10px;
	align-items: center;
	flex-wrap: wrap;
`;

export const Input = styled.input`
	border: 1px solid var(--border-color);
	height: 40px;
	padding-left: 10px;
	font-size: 13px;
	font-weight: 500;
	&::placeholder {
		color: var(--text-sub-color);
	}
`;

export const RateStars = styled.div`
	display: flex;
	gap: 4px;
`;

export const CommetWriteBox = styled.textarea`
	border: 1px solid var(--border-color);
	width: 100%;
	padding: 15px;
	font-weight: 400;
	line-height: 20px;
	font-size: 13px;
	text-align: start;
	resize: none;
	&::placeholder {
		color:  var(--text-sub-color);
	}
	border-bottom: 0px;
`;

export const CommentSubmitBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid var(--border-color);
	border-top: 1px solid var(--border-color);
	padding-left: 20px;
`;

export const CommentLength = styled.h4`
	font-weight: 400;
	font-size: 13px;
	color:  var(--text-sub-color);
`;

export const CommentSubmitButton = styled.button<{ valid: boolean }>`
	height: 40px;
	cursor: ${(props) => (props.valid ? 'pointer' : 'default')};
	background-color: ${(props) => (props.valid ? 'var(--text-color-active)' : 'var(--text-sub-color)')};
	border: 0px;
	font-size: 13px;
	padding: 0px 15px;
	border-radius: 0px;
	color: var(--text-color-white);
`;

export const CloseCircleOutlinedStyled= styled(CloseCircleOutlined)`
	font-size: 18px;
	color: var(--text-sub-color);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CommentSubmitBoxRightside = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
`;

