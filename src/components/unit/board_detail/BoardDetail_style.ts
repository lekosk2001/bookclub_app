import { DislikeFilled, EnvironmentOutlined, LikeFilled, LinkOutlined, MehFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

export const ContentsBody = styled.div`
    border-top: 1px solid #dae1e6;
    padding: 40px 0px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ContentsText = styled.p`
    font-size: 15px;
    min-height: 200px;
    line-height: 24px;
`

export const User = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    gap: 10px;
    
`

export const LikeCountBox = styled.div`
    cursor: pointer;
	display: flex;
    align-items: center;
    padding: 0px 15px;
    height: 30px;
    gap: 5px;
    p{font-size: 15px;}
        border-radius: 15px;
    &:hover{
        background-color: #E8F0FE;
    }
`;


export const ContentHeadButtons = styled.div`
	display: flex;
	align-items: center;
	svg {
		cursor: pointer;
	}
`;

export const LikeButtonStyled = styled(LikeFilled)`
    font-size: '15px';
    color: #5f6368;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const DisLikeButtonStyled = styled(DislikeFilled)`
    font-size: '15px';
    color: #5f6368;
    display: flex;
    justify-content: center;
    align-items: center;
`;



export const LinkOutlinedStyled = styled(LinkOutlined)`
    font-size: '15px';
    color: #5f6368;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    &:hover{
        background-color: #E8F0FE;
    }
`;

export const EnvironmentOutlinedStyled = styled(EnvironmentOutlined)`
    font-size: '15px';
    color: #5f6368;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;    
    border-radius: 15px;
    &:hover{
        background-color: #E8F0FE;
    }
`;

export const UserTextBox = styled.div`
`

export const CreatedAtText = styled.p`
color: #5f6368;
    font-size: 11px;
`

export const UserAvatar = styled(MehFilled)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    font-size: 20px;
    color: #fff;
    background-color: #5f6368;
    border-radius: 20px;
`


export const UserName = styled.p`
    font-size: 13px;
`
