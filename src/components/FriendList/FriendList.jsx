import css from './FriendList.styled';
import PropTypes from 'prop-types';
import Box from 'components/Box';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <Box bg="muted" width="100%" py={5} as="section">
      <css.List>
        {friends.map(({ id, isOnline, avatar, name }) => (
          <FriendListItem
            key={id}
            id={id}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
          />
        ))}
      </css.List>
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;
