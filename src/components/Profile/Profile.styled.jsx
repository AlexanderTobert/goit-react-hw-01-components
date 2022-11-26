import styled from 'styled-components';

export const UserProfile = styled.div`
    width: 320px;
    margin: 0 auto;
    background-color: snow;
    padding-top: 32px;
    text-align: center;
    font-family: Roboto;
    font-size: 16px;
    color: darkgray;
    padding-top: 32px;
`;

export const Avatar = styled.img`
    height: 75px;
    width: 75px;
    border-radius: 50%;
    margin: 0 auto;
`;

export const UserName = styled.p`
    line-height: 1.25;
    font-size: 24px;
    font-style: sans-serif;
    color: black;
`

export const UserStats = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;

`

export const UserStatsItem = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80px;
    color: black;

`