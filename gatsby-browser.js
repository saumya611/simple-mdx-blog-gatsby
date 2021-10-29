import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Theme from './src/themes/theme';

// In below line we are going to set some
// CSS property for global means at root browser

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body, html {
        font-family: ${props => props.theme.fonts.main};
        height: 100%;
        background-color: ${props => props.theme.colors.light1};
    }
`

export const wrapRootElement  = ({ element }) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyles />
        {element}
    </ThemeProvider>
)