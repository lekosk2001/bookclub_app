import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import * as S from "./BoardWrite_style"
import { Button, Input, Modal } from 'antd';
import { useMutation } from '@apollo/client';
import { CREATE_BOARD } from './BoardWrite_queries';
import { useRouter } from 'next/router';
import { ButtonWrapper, ContentsHeader, Title } from '@/components/common/style';
import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';

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
                        password: data.password,
                        title: data.title,
                        contents: data.contents,
                        boardAddress: {
                            zipcode: addressInput.zipcode,
                            address: addressInput.address,
                            addressDetail: data.addressDetail,
                        },
                    },
                },
            })
            void router.push(`/boards/${result.data.createBoard._id}`);

        } catch (error) {
            if (error instanceof Error) alert(error.message);
        }
    };

    const [isOpen, setIsOpen] = useState(false);

    const onToggleModal = () => {
        setIsOpen((prev) => !prev);
    };

    const [addressInput, setAddressInput] = useState({ address: "", zipcode: "" });

    const handleComplete = (data: Address) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress +=
                    extraAddress !== ''
                        ? `, ${data.buildingName}`
                        : data.buildingName;
            }
            fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }
        console.log({ address: fullAddress, zipcode: data.zonecode })
        setAddressInput({ address: fullAddress, zipcode: data.zonecode });
        onToggleModal();
    };

    return (
        <S.Form onSubmit={handleSubmit(onSubmit)}>
            <ContentsHeader>
                <Title>?????????</Title>
                <ButtonWrapper>
                    <Button danger onClick={() => { router.push(`/boards`) }}>??????</Button>
                    <Button onClick={handleSubmit(onSubmit)}>??????</Button>
                </ButtonWrapper>
            </ContentsHeader>

            <S.InputContainer>
                <S.InputGroupBox>
                    <S.InputStyled placeholder="???????????? ??????????????????." {...register("writer")} />
                    <S.InputStyled type="password" autoComplete="false" placeholder="??????????????? ??????????????????." {...register("password")} />
                </S.InputGroupBox>
                <S.InputTitle placeholder="??????" {...register("title")} />
                <S.TextAreaStyled style={{ "resize": "none" }} placeholder="????????? ??????????????????." {...register("contents")} />

                <S.AddressInputGroupBox>
                    <div style={{ "display": 'flex', "gap": "10px", "width": "160px" }}>
                        <S.InputStyled readOnly value={addressInput.zipcode} placeholder="????????????" {...register("zipcode")} />
                        <Button
                            style={{ 'height': "40px" }}
                            onClick={(e) => {
                                e.preventDefault();
                                onToggleModal();
                            }}>??????</Button>
                        {isOpen && (
                            <Modal
                                title={'???????????? ??????'}
                                open={isOpen}
                                onOk={onToggleModal}
                                onCancel={onToggleModal}
                            >
                                <DaumPostcodeEmbed
                                    onComplete={handleComplete}
                                ></DaumPostcodeEmbed>
                            </Modal>
                        )}
                    </div>
                    <S.InputStyled value={addressInput.address} readOnly placeholder="??????" {...register("address")} />
                    <S.InputStyled placeholder="????????????" {...register("addressDetail")} />
                </S.AddressInputGroupBox>


            </S.InputContainer>
        </S.Form>
    )
}

export default BoardWrite_UI