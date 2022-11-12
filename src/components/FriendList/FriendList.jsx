import css from './FriendList.styled';
import PropTypes from 'prop-types';
import Box from 'components/Box';

const FriendList = ({ friends }) => {
  return (
    <Box bg="muted" width="100%" py={5} as="section">
      <css.List>
        {friends.map(e => (
          <css.Card key={e.id}>
            <css.Status isOnline={e.isOnline} />
            <css.Avatar src={e.avatar} alt="User avatar" width="48" />
            <css.Name>{e.name}</css.Name>
          </css.Card>
        ))}
      </css.List>
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};

export default FriendList;
