import { CloseOutlined, EditOutlined, MehFilled } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Rate } from 'antd';

export const CommentsList = styled.section`
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin-bottom: 20px;
	padding: 20px;
	border: 1px solid var(--border-color);
`;

export const CommetLabel = styled.h3`
	font-size: 17px;
	font-weight: 500;
`;

export const CommentBox = styled.div`
	width: inherit;
	display: flex;
	border-top: 1px solid var(--border-color);
	gap: 16px;
	padding-top: 20px;
`;


export const UserAvatar = styled(MehFilled)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    font-size: 20px;
    color: var(--bg-color-white);
    background-color: var(--text-sub-color);
    border-radius: 20px;
`

export const CommentHead = styled.div`
	flex-wrap: wrap;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const CommentHeadLeftside = styled.div`
	flex-wrap: wrap;
	display: flex;
	gap: 10px;
	align-items: center;
`;

export const CommentButtons = styled.div`
	display: flex;
	gap: 5px;
`;

export const CommentButton = styled.button`
	cursor: pointer;
	width: 18px;
	height: 18px;
	border: 0px;
	background-color: inherit;
`;

export const CommentBody = styled.p`
	font-weight: 400;	
	font-size: 13px;
`;

export const CommentWriter = styled.h5`
	font-size: 13px;
	font-weight: 800;
`;


export const EditOutlinedStyled = styled(EditOutlined)`
	font-size: 15px;
	width: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
	color: var(--text-sub-color);
	border-radius: 5px;
    &:hover{
        background-color: var(--hover-bg-color);
    }
`;

export const CloseOutlinedStyled = styled(CloseOutlined)`
	font-size: 15px;	
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30px;
	height: 30px;
	color: var(--text-sub-color);
	border-radius: 5px;
    &:hover{
        background-color: var(--hover-bg-color);
    }
`;

export const CommentFooter = styled.p`
	font-size: 11px;
	color: var(--text-sub-color);;
`;

export const Space = styled.div<{ hight: number }>`
	display: flex;
	width: inherit;
	height: ${(props) => props.hight}px;
`;

export const CommentContents = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 10px;
`;


export const RateStyled = styled(Rate)`
	height: 30px;
	ul{
	}
	li{
		margin-inline-end: 5px;
	}
`;

