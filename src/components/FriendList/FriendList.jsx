import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import {List} from './FriendList.styled';

// export const FriendList = ({friends}) => {
//     return (
//     <List>
//    {friends.map(friend => (
//     <Item key={friend.id}>
//     <FriendListItem friend={friend}/>
//   </Item>
//    ))}
//   </List>);
// };
export const FriendList = ({friends}) => {
    return (
    <List>
   {friends.map(friend => { 
    return <FriendListItem key={friend.id} friend={friend}/>
   })}
  </List>);
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    }))
}