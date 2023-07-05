import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;

    grid-template-areas: 'CT CT';
    height: 100vh;
    width: 100vw;

    overflow: auto;
    

    @media(min-width: 1921px){
        height: 100vh;
        width: 1920px;
        grid-template-columns: auto;
       
    }
`;