import React from "react";

import {
    Container,
    InputF,
    IconDiv,
} from './styles';

const Input = ({ placeholder, type, icon, setValue }) => {

    return (
        <Container>
            <IconDiv>{icon}</IconDiv>
            <InputF type={type} placeholder={placeholder} onChange={(e) => setValue(e.target.value)} />
        </Container>
    )
}

export default Input;