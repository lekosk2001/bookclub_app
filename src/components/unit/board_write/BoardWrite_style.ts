import styled from "@emotion/styled";
import { Input } from 'antd';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Title = styled.h1`
    font-size: 30px;
`

export const FormHeader = styled.div`
    align-items: center;
    justify-content: space-between;
    display: flex;
    gap: 10px;
`

export const ButtonWrapper = styled.div`
    display: flex;
    gap: 10px;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const InputTwo = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
`


export const InputWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
`



export const InputLabel = styled.label`
    font-size: 15px;
    font-weight: 800;
    color: gray;
`


export const InputStyled = styled(Input)`
height: 40px;
`

export const InputTitle = styled(Input)`
    font-size: 36px;
    font-weight: 800;
    padding: 0px;
    border: 0px;
    border-bottom: 1px solid #dae1e6;
    border-radius: 0px;
    &:focus{
        border: 0px;
    }
`



