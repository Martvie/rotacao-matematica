import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
            quaternary: string;
            text: {
                light: string;
                dark: string;
            };
        };
    }
}
