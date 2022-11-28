import styled from 'styled-components';

export const StatsSection = styled.section`
    width: 320px;
    margin: 0 auto;
    background-color: #f0f0f0;
    margin-top: 20px;
`;

export const TitleName = styled.h2`
    margin: 0;
    line-height: 1.25;
    font-size: 24px;
    color: black;
    text-align: center;
`

export const StatsList = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    margin-top: 5px;
    color: black;
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border: 1px solid black;
    width: 50px;
    height: 50px;
    background-color: ${props => props.bgColor}
`;

export const StatsLabel = styled.span`
    font-size: 14px;
`;

export const StatsPercentage = styled.span`
    font-size: 16px;
`