import ProfileCard from './Profile.styled';

const Profile = ({
  username,
  tag,
  location,
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileCard.Card>
      <div class="description">
        <ProfileCard.Avatar src={avatar} alt="User avatar" />
        <ProfileCard.Name>{username}</ProfileCard.Name>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ProfileCard.Stats>
        <li>
          <span id="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span id="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span id="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ProfileCard.Stats>
    </ProfileCard.Card>
  );
};

export default Profile;
