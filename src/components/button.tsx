import styled from "styled-components";

const ButtonContainer = styled.button`
    appearance: button;
    background-color: #1899d6;
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 4px;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-family: din-round, sans-serif;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.8px;
    line-height: 0.8rem;
    margin: 0;
    outline: none;
    overflow: visible;
    padding: 13px 16px;
    text-align: center;
    text-transform: uppercase;
    touch-action: manipulation;
    transform: translateZ(0);
    transition: filter 0.2s;
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    width: 10%;

    &:after {
        background-clip: padding-box;
        background-color: ${(props) => props.theme.colors.primary};
        border: solid transparent;
        border-radius: 16px;
        border-width: 0 0 4px;
        bottom: -4px;
        content: "";
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        z-index: -1;
    }

    &:focus {
        user-select: auto;
    }

    &:hover:not(:disabled) {
        filter: brightness(1.1);
        -webkit-filter: brightness(1.1);
    }

    &:disabled {
        cursor: auto;
    }

    &:active {
        border-width: 4px 0 0;
        background: none;
    }
`;

interface IButton {
    name: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ name, onClick }: IButton) => {
    return <ButtonContainer onClick={onClick}>{name}</ButtonContainer>;
};
