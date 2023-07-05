import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    background: #e3e8eb;
    width: 100%;

`;
export const Content = styled.div`
    width: 100%;
    @media(min-width: 1920px){
        width: 100%;

    }
`;
export const DivBottom = styled.div`
   height: 100%;
   position: relative;
   overflow: auto;

`;
export const DivNav = styled.div`
    position: fixed;
    width: 100%;
    z-index: 1000;
`;
export const TitleH1 = styled.h1`
     font-size: 4rem;
        text-transform: uppercase;
        letter-spacing: 3px;
        text-align: center;
        color: #111;
        font-weight: 700;
        font-family: 'Inter', sans-serif;
`;
export const TitleH3 = styled.h3`
     font-size: 2.5rem;
        text-transform: uppercase;
        letter-spacing: 3px;
        text-align: center;
        color: #111;
        font-weight: 700;
        font-family: 'Inter', sans-serif;
`;
export const TextP1 = styled.p`
      color: #333;
        font-size: 1.3rem;
        text-align: center;
        width: 100%;
        line-height: 1.6;
        font-family: 'Inter', sans-serif;
`;
export const TextP2 = styled.p`
      color: #333;
        font-size: 1rem;
        text-align: center;
        width: 100%;
        line-height: 1.6;
        font-family: 'Roboto', sans-serif;
`;
export const ApresentationDiv = styled.div`
     display: flex;
     flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    position: relative;
    padding: 12% 20%;
    z-index: 1;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.2; /* Opacidade da imagem */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
