import PropTypes from 'prop-types';
import { FiUsers, FiEye, FiHeart } from "react-icons/fi";
import { UserProfile, Avatar, UserName, UserStats, UserStatsItem } from './Profile.styled'

export const Profile = ({ username,
  tag,
  location,
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats: { followers, views, likes } }) => {
  return (
  <UserProfile>
  <div>
    
    <div>
        <Avatar src={avatar}
        alt="User avatar">
        </Avatar>
    <UserName >{username}</UserName>
          <p >@{tag}</p>
          <p >{location}</p>
    
    </div>
<UserStats>
    <UserStatsItem>
      <span ><FiUsers /></span>
          <span >{ followers }</span>
    </UserStatsItem>
    <UserStatsItem>
      <span ><FiEye /></span>
          <span >{ views }</span>
    </UserStatsItem>
    <UserStatsItem>
      <span ><FiHeart /></span>
      <span >{ likes}</span>
    </UserStatsItem>
          </UserStats>
      </div>
      </UserProfile>);
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  })
}