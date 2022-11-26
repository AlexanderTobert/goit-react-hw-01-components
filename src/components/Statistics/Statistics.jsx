import PropTypes from 'prop-types';
import { StatsSection, TitleName, StatsList, StatsItem, StatsLabel, StatsPercentage } from './Statistics.styled'

export const Statistics = ({
    title, stats
}) => {
    return (
        <>
            <StatsSection>
                <TitleName >{title}</TitleName>
                <StatsList>
                {stats.map(({ id, label, percentage }) => (
                    <StatsItem key={id} bgColor={getRandomHexColor()}>
                    <StatsLabel>{label}</StatsLabel>
                    <StatsPercentage>{ percentage }</StatsPercentage>
                    </StatsItem>)) }      
                </StatsList>
            </StatsSection>
        </>
    );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    )
}