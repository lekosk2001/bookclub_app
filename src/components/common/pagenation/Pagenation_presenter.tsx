import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons';
import { Dispatch, Fragment, SetStateAction, useState } from 'react';
import * as S from './Pagenation_styles';

interface Props {
	refetch: (arg0: { page: number, search?: string }) => void;
	startPage: number;
	currentPage: number;
	pageNumber: number;
	lastPage: number;
	onClickPage: (e: React.MouseEvent<HTMLButtonElement>) => void;
	onClickNext: () => void;
	onClickPrev: () => void;
	setSearch: Dispatch<SetStateAction<string>>
}
const Pagenation_presenter = (props: Props) => {

	const [keyword, setKeyword] = useState("")

	return (
		<S.PageSection>
			<S.PageButtons>
				<LeftCircleFilled
					onClick={props.onClickPrev}
					style={{
						padding: '5px',
						color: props.startPage === 1 ? 'var(--text-color-sub-week)' : 'var(--text-color-sub)',
						fontSize: "24px",
						cursor: props.startPage === 1 ? 'auto' : 'pointer'
					}}
				/>

				{new Array(props.pageNumber).fill(1).map((_, index) => {
					if (props.startPage + index <= props.lastPage) {
						return (
							<S.PageButton
								key={String(props.startPage + index)}
								onClick={props.onClickPage}
								id={String(props.startPage + index)}
								active={
									index + props.startPage === props.currentPage
								}
							>
								{props.startPage + index}
							</S.PageButton>
						);
					} else {
						return <Fragment key={String(props.startPage + index)}></Fragment>;
					}
				})}

				<RightCircleFilled
					onClick={props.onClickNext}
					style={{
						padding: '5px',
						color:
							props.startPage + props.pageNumber > props.lastPage
								? 'var(--text-color-sub-week)'
								: 'var(--text-color-sub)',
						fontSize: "24px",
						cursor: props.startPage + props.pageNumber > props.lastPage ? 'auto' : 'pointer'
					}}
					disabled={props.startPage + props.pageNumber > props.lastPage}
				/>

			</S.PageButtons>
			<S.SearchBar onSubmit={(e) => { e.preventDefault(); props.setSearch(keyword); props.refetch({ page: 1, search: keyword }) }}>
				<S.InputStyled onChange={(e) => { setKeyword(e.currentTarget.value) }} placeholder='???????????? ??????????????????.' />
				<S.ButtonStyled onClick={(e) => { e.preventDefault(); props.setSearch(keyword); props.refetch({ page: 1, search: keyword }) }}>??????</S.ButtonStyled>
			</S.SearchBar>
		</S.PageSection>
	);
};

export default Pagenation_presenter;
