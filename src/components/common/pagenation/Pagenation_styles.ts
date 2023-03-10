import styled from '@emotion/styled';
import { Button } from 'antd';


export const PageSection = styled.section`
	align-items: center;
	display: flex;
	padding: 40px 0px;
	flex-direction: column;
	gap: 15px;
	background-color: #f7f9fa;
	padding: 20px;
`;

export const PageButtons = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 0px;
	width: 100%;
	border-bottom: 1px solid #dae1e6 ;
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
	color: ${(props) => (props.active ?? false ? '#4285F4' : 'default')};
	border-radius: 5px;
	&:hover{
		background-color: #E8F0FE;
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
    border: 1px solid #dae1e6;
	&::placeholder {
		color: #ddd;
		font-weight: 400;
	}
`
