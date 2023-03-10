import styled from '@emotion/styled';
import { Button } from 'antd';


export const PageSection = styled.section`
	align-items: center;
	display: flex;
	padding: 40px 0px;
	flex-direction: column;
	background-color: var(--bg-color-gray);
	padding: 10px 20px;
	gap: 5px;
`;

export const PageButtons = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 10px;
	border-bottom: 1px solid var(--border-color) ;
`;

export const PageButton = styled.button<{ active?: boolean }>`
	display: flex;
	border: 0px;
	justify-content: center;
	background-color: inherit;
	align-items: center;
	height: 40px;
	width: 40px;
	cursor: pointer;
	font-weight:  ${(props) => (props.active ?? false ? '800' : 'default')};
	color: ${(props) => (props.active ?? false ? 'var(--text-color-active)' : 'default')};
	border-radius: 5px;
	&:hover{
		background-color: var(--hover-bg-color);
	}
`;


export const SearchBar = styled.form`
	display: flex;
	gap: 10px;
	padding: 10px;
`

export const ButtonStyled = styled(Button)`
	height: 40px;
`

export const InputStyled = styled.input`
	width: 300px;
    height: 40px;    
    padding: 0px 10px;
    border: 1px solid var(--border-color);
	&::placeholder {
		color: var(--text-sub-color);
		font-weight: 400;
	}
`
