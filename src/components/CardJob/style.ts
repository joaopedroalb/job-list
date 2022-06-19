import styled from "styled-components";

export const Card = styled.div`
    width: 75%;
    padding: 2rem;
    background: var(--white);
    border-radius: 0.5rem;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title{
        font-size: 1.5rem;
        color: var(--black);
        transition: 400ms;
    }

    &:hover{
        .title{
            color: var(--green);
        }
    }
`

export const HeaderCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;

    img{
        width: 80px;
        height: 80px;
    }
`

export const TextHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.5rem;
`

export const TopTextHeader = styled.div`
    color: var(--green);
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .New{
        color: var(--white);
        background-color: var(--green);
        padding: 0.5rem;
        border-radius: 20px;
        padding: 6px 10px;
    }

    .Featured{
        color: var(--white);
        background-color: var(--black);
        padding: 0.5rem;
        border-radius: 20px;
        padding: 6px 10px;
    }
`

export const BottomTextHeader = styled.div`
    display: flex;
    color: var(--gray);
`

export const TagContainer = styled.div`
    display: flex;
    gap: 1rem;
`

export const Tag = styled.div`
    background-color: var(--white-green);
    color: var(--green);
    font-weight: 700;
    padding: .75rem 1rem;
    border-radius: 4px;
    cursor: pointer;

    transition: 400ms;

    &:hover{
        background-color: var(--green);
        color: var(--white);
    }
`