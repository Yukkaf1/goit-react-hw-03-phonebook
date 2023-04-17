import PropTypes from 'prop-types';
import {
  FriendListCard,
  FriendListItemCard,
  FriendStatus,
  FriendAvatar,
  Friendname,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListCard>
      {friends.map(friend => (
        <FriendListItemCard key={friend.id}>
          <FriendStatus isOnline={friend.isOnline}></FriendStatus>
          <FriendAvatar src={friend.avatar} alt="User photo avatar" />
          <Friendname>{friend.name}</Friendname>
        </FriendListItemCard>
      ))}
    </FriendListCard>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
