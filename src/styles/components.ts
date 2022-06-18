import styled from "styled-components";

import bgDesktop from '../assets/bg-header-desktop.svg'
import bgMobile from '../assets/bg-header-mobile.svg'

export const Header = styled.header`
    width: 100%;
    height: 160px;
    background-image: url(${bgDesktop}); 
    background-color: var(--green);
    background-size: cover;

    @media (max-width: 500px) {
        background-image: url(${bgMobile});
    }
`