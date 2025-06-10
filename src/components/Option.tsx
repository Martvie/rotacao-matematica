import styled from "styled-components";

const OptionDiv = styled.div`
    width: 8rem;
    height: 5rem;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
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
    className?: string;
    onClick: () => void;
}

export const Option = ({ content, className, onClick }: OptionProps) => {
    return (
        <OptionDiv className={className} onClick={onClick}>
            {content}
        </OptionDiv>
    );
};
