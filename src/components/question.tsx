import type React from "react";
import styled from "styled-components";

const Main = styled.main`
    max-width: 400rem;
    width: 95%;
    height: 30rem;

    border: 5px solid #39c5ca;
    border-top-width: 20px;
    border-radius: 8px 8px 0 0;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);

    text-align: justify;
`;

const Wrapper = styled.div`
    background-color: #39c5ca;
    padding: 0.5rem;
`;

const H2 = styled.h2`
    font-size: 2rem;
`;

const P = styled.p`
    font-size: 1.5rem;
    line-height: 1.5rem;
`;

const Section = styled.section`
    width: 100%;
    height: 20rem;
    background-color: rebeccapurple;
    padding: 0.5rem;
`;

interface Iquestion {
    title: string;
    description: string;
    children?: React.ReactNode;
}

export const Question = ({ title, description, children }: Iquestion) => {
    return (
        <Main>
            <Wrapper>
                <H2>{title}</H2>
                <P>{description}</P>
            </Wrapper>
            {children && <Section>{children}</Section>}
        </Main>
    );
};
