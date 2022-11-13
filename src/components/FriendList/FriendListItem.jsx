import css from './FriendList.styled';
import PropTypes from 'prop-types';

const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <css.Card>
      <css.Status isOnline={isOnline} />
      <css.Avatar src={avatar} alt="User avatar" width="48" />
      <css.Name>{name}</css.Name>
    </css.Card>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default FriendListItem;
