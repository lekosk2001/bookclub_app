import styled from "@emotion/styled";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const InputGroupBox = styled.div`
    width: 100%;
    display: flex;
    gap:15px;
`
export const AddressInputGroupBox = styled.div`
    padding: 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap:10px;
    background-color: var(--bg-color-gray);
`

export const InputStyled = styled.input`
    height: 40px;    
    padding: 0px 10px;
    border: 1px solid var(--border-color);
    width: 100%;
`

export const TextAreaStyled = styled.textarea`
    color: var(--text-color-main);
    height: 300px;
    border: 0px;
    font-size: 15px;
    padding: 20px;
    border-radius :0px;    
    border: 1px solid var(--border-color);
	&::placeholder {
		font-size: 15px;
	}
`


export const InputTitle = styled.input`
    font-size: 36px;
    font-weight: 800;
    padding: 0px;
    border: 0px;
    border-bottom: 1px solid var(--border-color);
    border-radius: 0px;        
    &::placeholder{
        font-weight: 800;
        font-size: 36px;
    }
`





