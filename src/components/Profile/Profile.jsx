import PropTypes from 'prop-types';
import {Container, UserBox, Avatar, UserName, UserTag, Location, List, Item, Label, Value} from './Profile.styled'

export const Profile = ({user: {username, tag, location, avatar, stats}}) => {
return (
<Container>
<UserBox>
  <Avatar
    src={avatar}
    alt={username}
    className="avatar"
  />
  <UserName>{username}</UserName>
  <UserTag>@{tag}</UserTag>
  <Location>{location}</Location>
  </UserBox>

<List>
  <Item>
    <Label>Followers</Label>
    <Value>{stats.followers}</Value>
  </Item>
  <Item>
    <Label>Views</Label>
    <Value>{stats.views}</Value>
  </Item>
  <Item>
    <Label>Likes</Label>
    <Value>{stats.likes}</Value>
  </Item>
</List>
</Container>
)
}

Profile.propTypes = {
   user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
   })
  
};
