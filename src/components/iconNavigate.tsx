import styled from "styled-components";

const Div = styled.div`
    height: 5rem;
    width: 5rem;
    background-color: #778da9;
    border-radius: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
        background-color: #f9f871;
    }
`;

const Image = styled.img`
    height: 4rem;
`;

interface INavigate {
    link: string;
    logo: string;
}

export const IconNavigate = ({ link, logo }: INavigate) => {
    return (
        <a href={link}>
            <Div>
                <Image src={logo} />
            </Div>
        </a>
    );
};
