import styled from "@emotion/styled";



export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;    
    border-bottom: 1px solid #dae1e6;
`



export const Tabs = styled.div`
    gap: 10px;
    display: flex;
    height: 40px;
    border-top: 1px solid #000;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    padding: 0px 20px;
    background-color: #fff;
`

export const Row = styled.div`
    cursor: pointer;
    gap: 10px;
    display: flex;
    height: 40px;
    border-top: 1px solid #dae1e6;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    padding: 0px 20px;    
    background-color: #fff;
        &:hover{
            span{
                text-decoration: underline;
            }
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
        width: 100px;
	}
	&:nth-of-type(4) {		
		display: flex;
        width: 100px;
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
        font-weight: 800;
	}
	&:nth-of-type(2) {        
		display: flex;
        width: 150px;        
        justify-content: flex-start;        
        font-weight: 800;
	}
	&:nth-of-type(3) {		
		display: flex;
        width: 100px;        
        font-weight: 800;
	}
	&:nth-of-type(4) {		
		display: flex;
        width: 100px;        
        font-weight: 800;
	}
`