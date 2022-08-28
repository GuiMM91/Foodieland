import styled from "styled-components" 

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

export const LinksContent = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    a{
        text-decoration: none;
        font-size: 1rem;
    }
`

export const SocialContent = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;

`