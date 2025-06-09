import React from "react";
import styled from "styled-components";
import { Button } from "./button";

const Div = styled.div`
    width: 95%;
    height: 3rem;

    margin-top: 5px;

    border-radius: 8px;
    background-color: #5ba9c5;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const Input = styled.input`
    height: 2.5rem;
    width: 70%;
`;
const H3 = styled.h3`
    font-size: 1.4rem;
`;

interface Ivalidator {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    value?: string;
}

export const Validator = ({ onChange, value, onClick }: Ivalidator) => {
    return (
        <Div>
            <H3>Sua Resposta:</H3>
            <Input onChange={onChange} value={value} />
            <Button name="Validar" onClick={onClick} />
        </Div>
    );
};
