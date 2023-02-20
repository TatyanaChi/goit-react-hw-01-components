import styled from "@emotion/styled";

export const Container = styled.div`
width: 50%;
margin: 0 auto 16px;
border: 1px solid var(--grey);

`;

export const UserBox = styled.div`
/* width: 50%;
margin: 0 auto 16px;
border-radius: 1px solid var(--grey); */
    text-align: center;
    /* padding-top: 16px;
    padding-bottom: 16px; */
`;

export const Avatar = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 1px solid var(--grey);
    margin: 24px auto;
`;

export const UserName = styled.p`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 8px;
`;

export const UserTag = styled.p`
    font-size: 24px;
    color: var(--grey);
    margin-bottom: 8px;
`;

export const Location = styled.p`
    font-size: 24px;
    color: var(--grey);
    margin-bottom: 8px;
`;

export const List = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    background-color: var(--background-grey);
`;

export const Item = styled.li`
    width: 100%;
    height: auto;
    padding: 20px 0;
    border-top: 1px solid var(--grey);

    &:not(:last-child) {
        border-right: 1px solid var(--grey);
    }
`;

export const Label = styled.span`
    display: block;
    margin-bottom: 8px;
    color: var(--grey);
`;

export const Value = styled.span`
    display: block;
    font-size: 24px;
    font-weight: bold;
`