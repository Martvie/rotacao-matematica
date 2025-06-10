import styled from "styled-components";
import card from "../assets/icons/card.svg";
import input from "../assets/icons/input.svg";
import list from "../assets/icons/list.svg";
import safe from "../assets/icons/safe.svg";
import { Header } from "../components/header";
import { IconNavigate } from "../components/iconNavigate";

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    min-height: 100vh;
    width: 100%;
`;

export const Home = () => {
    return (
        <>
            <Header />
            <MainContainer>
                <IconNavigate link="/01" logo={input} />
                <IconNavigate link="/02" logo={list} />
                <IconNavigate link="/03" logo={card} />
                <IconNavigate link="./" logo={safe} />
                {/* Outros componentes */}
            </MainContainer>
        </>
    );
};
