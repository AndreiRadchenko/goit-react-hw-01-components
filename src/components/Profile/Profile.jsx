import css from './Profile.styled';

const Profile = ({
  username,
  tag,
  location,
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats,
}) => {
  return (
    <css.Section>
      <css.Card>
        <div class="description">
          <css.Avatar src={avatar} alt="User avatar" />
          <css.Name>{username}</css.Name>
          <p class="tag">@{tag}</p>
          <p class="location">{location}</p>
        </div>

        <css.Stats>
          {Object.entries(stats).map(item => {
            return (
              <css.Item>
                <span id="label">{item[0]}</span>
                <span class="quantity">{item[1]}</span>
              </css.Item>
            );
          })}
        </css.Stats>
      </css.Card>
    </css.Section>
  );
};

export default Profile;
