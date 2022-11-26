import styled from "styled-components";

export const FriendsList = styled.ul`
    padding: 0;
`;

export const FriendItem = styled.li`
    display: flex;
    width: 320px;
    margin: 0 auto;
    justify-contentent: center;
    align-items: center;
    padding: 20px 0;
    padding-left: 20px;
    text-align: center;
    margin: 0px auto;
    margin-bottom: 10px;
    border-radius: 8px;
    background-color: #FFFFAA;
    gap: 10px;
`;

export const FriendStatus = styled.span`
    width: 15px;
    height: 15px;
    background-color: ${ props => (props.isOnline ? 'green' : 'red') };
    border-radius: 50%;
`;

export const FriendAvatar = styled.img`
    height: 40px;
    width: 40px;
`;

export const FriendUserName = styled.p`
    line-height: 1.25;
    font-size: 24px;
    font-style: sans-serif;
    color: black;
`