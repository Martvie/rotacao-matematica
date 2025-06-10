import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    body{
        font-size: 62.5%;

        height: 100vh;

        background-color: ${(props) => props.theme.colors.primary};
    }
`;
