import styled from 'styled-components';

const Section = styled.section`
  background-color: ${p => p.theme.colors.muted};
  width: 100%;
  padding: 30px 0;
`;

const Status = styled.span`
  width: ${p => p.theme.space[4]}px;
  height: ${p => p.theme.space[4]}px;
  background-color: ${p => (p.isOnline ? 'green' : 'tomato')};
  border-radius: 50%;
`;

const Avatar = styled.img`
  border-radius: 10%;
`;

const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.black};
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  color: ${p => p.theme.colors.textStats};
  text-align: center;
`;

const Card = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
  width: 280px;
  font-size: ${p => p.theme.fontSizes.m};
  background-color: ${p => p.theme.colors.background};
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 0 auto;
  border-radius: ${p => p.theme.space[3]}px;
  & + & {
    margin-top: ${p => p.theme.space[4]}px;
  }
`;

const css = {
  Section,
  Card,
  Status,
  Avatar,
  Name,
  List,
};

export default css;
