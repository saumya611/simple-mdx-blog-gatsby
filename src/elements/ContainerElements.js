import styled from "styled-components";

// In ContainerWrapper grid-template-columns parameter
// define how many columns are there in the grid
// and 1fr show 1 fraction so if you want to 
// give 1 column 1fr and another column
// 2fr then 2fr is twice of 1fr;
// Please implement practically


export const ContainerWrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
    grid-template-rows: 7.8rem 20rem 5rem auto;
    gap: 0 2rem;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-template-columns: 2rem repeat(6, 1fr) 2rem;
        grid-gap: 0 1rem;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-template-columns: 1rem repeat(6, 1fr) 1rem;
        grid-gap: 0 1rem;
    }

`