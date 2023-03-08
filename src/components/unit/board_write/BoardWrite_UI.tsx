import React from 'react'
import { useForm } from 'react-hook-form';
import * as S from "./BoardWrite_style"
import { Button, Input } from 'antd';
const { TextArea } = Input;

type Props = {}

const BoardWrite_UI = (props: Props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (
        <S.Form onSubmit={handleSubmit(onSubmit)}>
            <S.FormHeader>
                <S.Title>독서모임 생성</S.Title>
                <S.ButtonWrapper>
                    <Button danger>취소</Button>
                    <Button>작성</Button>
                </S.ButtonWrapper>
            </S.FormHeader>

            <S.InputContainer>
                <S.InputTwo>
                    <S.InputWrapper>
                        <S.InputLabel htmlFor='writer'>작성자</S.InputLabel>
                        <S.InputStyled id='writer' placeholder="작성자를 입력해주세요." {...register("writer")} />
                    </S.InputWrapper>
                    <S.InputWrapper>
                        <S.InputLabel htmlFor='password'>비밀번호</S.InputLabel>
                        <S.InputStyled id='password' placeholder="비밀번호를 입력해주세요." {...register("password")} />
                    </S.InputWrapper>
                </S.InputTwo>
                <S.InputWrapper>
                    <S.InputTitle id='title' placeholder="제목" {...register("title", { required: true })} />
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.InputLabel htmlFor='contents'>내용</S.InputLabel>
                    <TextArea style={{ "resize": "none", "height": "200px" }} id='contents' placeholder="내용을 입력해주세요." {...register("contents", { required: true })} />
                </S.InputWrapper>



            </S.InputContainer>
        </S.Form>
    )
}

export default BoardWrite_UI