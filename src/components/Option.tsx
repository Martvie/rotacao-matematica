import styled from "styled-components";

const OptionDiv = styled.div`
    width: 15rem;
    height: 5rem;
    background-color: #39c5ca;
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
        width: 15.5rem;
        height: 5.5rem;
    }

    &.selected {
        background-color: #2196f3;
    }

    &.select {
        background-color: #4caf50;
        width: 15.5rem;
        height: 5.5rem;
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
