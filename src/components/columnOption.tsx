import styled from "styled-components";

const OptionDiv = styled.div`
    width: 100%;
    height: 3rem;
    background-color: ${(props) => props.theme.colors.quaternary};
    color: ${(props) => props.theme.colors.text.dark};
    font-size: 0.8rem;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
    padding: 0.5rem;

    &:hover {
        transform: scale(1.1);
    }

    &.selected {
        background-color: #2196f3;
    }

    &.select {
        background-color: ${(props) => props.theme.colors.tertiary};
    }
`;

interface OptionProps {
    content: string;
}

export const ColumnOption = ({ content }: OptionProps) => {
    return <OptionDiv>{content}</OptionDiv>;
};
