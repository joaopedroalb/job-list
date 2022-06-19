import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --white-green:#effafa;
        --green:#5ba4a4;
        --white:#fff;
        --black:#2c3a3a;
        --gray:#8c8c8c;
    }
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'League Spartan', sans-serif; 
        background: var(--white-green);
        color: var(--black);
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    * {
        box-sizing: border-box;
        list-style: none;
        padding: 0;
        margin: 0;
    }
` 

export default GlobalStyle