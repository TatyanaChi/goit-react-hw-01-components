import styled from "@emotion/styled";

export const Container = styled.section`
   width: 50%;
   margin: 0 auto 16px;
   border: 1px solid var(--grey);
`;

export const Title = styled.h2`
    font-size: 32px;
    text-align: center;
    color: var(--grey);
    padding: 16px 0;
`;

export const List = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const Item = styled.li`
    width: 100%;
    height: auto;
    text-align: center;
    padding: 20px 0;
    background-color: ${getRandomColor};
`;

function getRandomColor(){
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const Label = styled.span`
    display: block;
    margin-bottom: 8px;
    /* color: var(--white); */
`;

export const Percentage = styled.span`
    display: block;
    font-size: 24px;
    font-weight: bold;
`;