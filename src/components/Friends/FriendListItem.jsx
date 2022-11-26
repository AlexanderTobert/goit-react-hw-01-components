import PropTypes from 'prop-types';
import { FriendStatus, FriendAvatar, FriendUserName } from './FriendList.styled';

export const FriendListItem = ({ friend: {id, name, isOnline, avatar} }) => {
    return (
        <>
            <FriendStatus isOnline={ isOnline }></FriendStatus>
            <FriendAvatar src={ avatar }></FriendAvatar>
            <FriendUserName>{name}</FriendUserName>
        </>
    );
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired
    })
}