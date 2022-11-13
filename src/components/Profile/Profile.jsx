import css from './Profile.styled';
import PropTypes from 'prop-types';
import { FaUsers, FaEye, FaThumbsUp } from 'react-icons/fa';
import Box from 'components/Box';

const Profile = ({
  username,
  tag,
  location,
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats: { followers, views, likes },
}) => {
  return (
    <Box bg="muted" width="100%" py={5} as="section">
      <css.Card>
        <div>
          <css.Avatar src={avatar} alt="User avatar" />
          <Box fontSize="l" lineHeight="heading" color="black" as="p" my={4}>
            {username}
          </Box>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>

        <css.Stats>
          <css.Item>
            <FaUsers />
            <span>{followers}</span>
          </css.Item>
          <css.Item>
            <FaEye />
            <span>{views}</span>
          </css.Item>
          <css.Item>
            <FaThumbsUp />
            <span>{likes}</span>
          </css.Item>
        </css.Stats>
      </css.Card>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
