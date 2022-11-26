import PropTypes from 'prop-types';
import { FriendsList, FriendItem } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <>
            <FriendsList>
                {friends.map(friend => (
                <FriendItem key={friend.id}>
                    <FriendListItem friend={friend} />
                </FriendItem>
                ))}
            </FriendsList>
        </>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
    })
    ).isRequired,
};