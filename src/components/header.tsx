import styled from "styled-components";
import home from "../assets/icons/home.svg";

const HeaderContainer = styled.header`
    width: 100%;
    height: 2rem;
    padding-left: 1rem;

    background-color: #5ba9c5;
`;

const Img = styled.img`
    height: 1.8rem;
    color: red;
`;

export const Header = () => {
    return (
        <HeaderContainer>
            <a href="./">
                <Img src={home} />
            </a>
        </HeaderContainer>
    );
};
