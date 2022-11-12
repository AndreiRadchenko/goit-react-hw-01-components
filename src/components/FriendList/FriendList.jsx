import css from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <css.Section>
      <css.List>
        {friends.map(e => (
          <css.Card key={e.id}>
            <css.Status isOnline={e.isOnline} />
            <css.Avatar src={e.avatar} alt="User avatar" width="48" />
            <css.Name>{e.name}</css.Name>
          </css.Card>
        ))}
      </css.List>
    </css.Section>
  );
};

export default FriendList;
