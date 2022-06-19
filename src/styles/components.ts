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

export const CardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    margin-bottom: 1rem;
`

export const PageContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`