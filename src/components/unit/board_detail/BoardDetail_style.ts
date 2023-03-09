import { EnvironmentOutlined, LinkOutlined, MehFilled } from "@ant-design/icons";
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
    line-height: 24px;
`

export const User = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    gap: 10px;
    
`
export const ContentHeadButtons = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
	svg {
		cursor: pointer;
	}
`;


export const LinkOutlinedStyled = styled(LinkOutlined)`
    font-size: '15px';
    color: 'gray' ;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const EnvironmentOutlinedStyled = styled(EnvironmentOutlined)`
    font-size: '15px';
    color: 'gray' ;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const UserTextBox = styled.div`
`

export const CreatedAtText = styled.p`
color: gray;
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
    background-color: gray;
    border-radius: 20px;
`


export const UserName = styled.p`
    font-size: 13px;
`
