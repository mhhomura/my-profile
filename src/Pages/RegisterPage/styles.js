import { Button } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
    background:   linear-gradient(45deg, #0294FF 50%, #0aFFF7  90%);
    height: 100%;
    padding: 25px;
    display: flex;

    align-items: center;

    @media(min-width: 1920px){
        justify-content: flex-end;
    }
`;

export const ColumnA = styled.div`
    width: 20%;
    justify-content: center;
    align-content: center;
    @media(min-width: 1920px){
        width: 40%;
    }
    @media(max-width: 800px){
        width: 0;
        display: none;
        }
`;

export const ColumnB = styled.div`
    width: 80%;
    background: #FFFFFF;
    height: 100%;
    border-radius: 20px;
    padding: 2%;
    display: flex;
    justify-content: center;
    box-shadow: 0px 1px 2px #00000029;

    @media(min-width: 1920px){
        width: 60%;
        height: 80%;
    }
    @media(max-width: 800px){
        width: 100%;
        }
`;

export const LoginWith = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 0;

    >div{
        border: 1px solid #00000029;
        width: 40%;
        padding: 10px 15px;
        border-radius: 25px;
        display: flex;
        justify-content: space-between;

        @media(max-width: 800px){
            flex-direction: column;
            align-items: center;
        }
    }
`;

export const ButtonCreate = styled.button`
    background: linear-gradient(45deg, #0294FF 50%, #7E1AFD 90% );
    width: 230px;
    height: 50px;
    border-radius: 50px;
`;

export const DiVButton = styled.div`
    padding-top: 15px;
`;

export const Title = styled.h1`
    font-weight: 800;
    font-size: 3rem;
`;