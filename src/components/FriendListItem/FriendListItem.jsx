import PropTypes from 'prop-types';
import {FriendItem, Status, FrienAvatar, FriendName} from './FriendListItem.styled';

export const FriendListItem =({friend: {avatar, name, isOnline}}) => {
    return (
    <FriendItem>  
  <Status status={isOnline}></Status>
  <FrienAvatar src={avatar} alt={name} width="48" />
  <FriendName>{name}</FriendName>
    </FriendItem>)
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }).isRequired
}