import styled from "@emotion/styled";

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;    
    border-bottom: 1px solid var(--border-color);
`

export const Tabs = styled.div`
    gap: 15px;
    display: flex;
    height: 40px;
    border-top: 1px solid var(--border-color-black);
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    padding: 0px 20px;
    background-color: var(--bg-color-white);
`

export const Row = styled.div`
    cursor: pointer;
    gap: 15px;
    display: flex;
    height: 50px;
    border-top: 1px solid var(--border-color);
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    padding: 0px 20px;    
    background-color: var(--bg-color-white);
        &:hover{
            background-color:var(--hover-bg-color);
    }
`

export const Column = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
    white-space: nowrap;
	overflow: hidden;

    &:nth-of-type(1) {
		display: flex;
        width: 100%;
        justify-content: flex-start;
	}
	&:nth-of-type(2) {        
		display: flex;
        width: 150px;
        justify-content: flex-start;
	}
	&:nth-of-type(3) {		
		display: flex;
        width: 120px;
	}
	&:nth-of-type(4) {		
		display: flex;
        width: 50px;
	}
`


export const Tab = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
    white-space: nowrap;
	overflow: hidden;

    &:nth-of-type(1) {
		display: flex;
        width: 100%;
        font-weight: 500;
	}
	&:nth-of-type(2) {
		display: flex;
        width: 150px;
        justify-content: flex-start;
        font-weight: 500;
	}
	&:nth-of-type(3) {		
		display: flex;
        width: 120px;        
        font-weight: 500;
	}
	&:nth-of-type(4) {		
		display: flex;
        width: 50px;        
        font-weight: 500;
	}
`