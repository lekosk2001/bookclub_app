import React from 'react'
import { useForm } from 'react-hook-form';
import * as S from "./BoardWrite_style"
import { Button, Input } from 'antd';
import { useMutation } from '@apollo/client';
import { CREATE_BOARD } from './BoardWrite_queries';
import { useRouter } from 'next/router';
import { ButtonWrapper, ContentsHeader, Title } from '@/components/common/style';
const { TextArea } = Input;

type Props = {}

const BoardWrite_UI = (props: Props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [createBoard] = useMutation(CREATE_BOARD);
    const router = useRouter();

    const onSubmit = async (data: any) => {
        console.log(data)
        try {
            const result = await createBoard({
                variables: {
                    createBoardInput: {
                        writer: data.writer,
                        contents: data.contents,
                        password: data.password,
                        title: data.title
                    },
                },
            })
            void router.push(`/boards/${result.data.createBoard._id}`);

        } catch (error) {
            if (error instanceof Error) alert(error.message);
        }
    };

    return (
        <S.Form onSubmit={handleSubmit(onSubmit)}>
            <ContentsHeader>
                <Title>자유토론 글쓰기</Title>
                <ButtonWrapper>
                    <Button danger onClick={() => { router.push(`/boards`) }}>취소</Button>
                    <Button onClick={handleSubmit(onSubmit)}>작성</Button>
                </ButtonWrapper>
            </ContentsHeader>

            <S.InputContainer>
                <S.InputTwo>
                    <S.InputWrapper>
                        <S.InputLabel>작성자</S.InputLabel>
                        <S.InputStyled placeholder="작성자를 입력해주세요." {...register("writer")} />
                    </S.InputWrapper>
                    <S.InputWrapper>
                        <S.InputLabel>비밀번호</S.InputLabel>
                        <S.InputStyled placeholder="비밀번호를 입력해주세요." {...register("password")} />
                    </S.InputWrapper>
                </S.InputTwo>
                <S.InputWrapper>
                    <S.InputTitle placeholder="제목" {...register("title")} />
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.TextAreaStyled style={{ "resize": "none" }} placeholder="내용을 입력해주세요." {...register("contents")} />
                </S.InputWrapper>
            </S.InputContainer>
        </S.Form>
    )
}

export default BoardWrite_UI