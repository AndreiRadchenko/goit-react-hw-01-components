import styled from 'styled-components';

const Card = styled.div`
  width: 320px;
  font-size: ${p => p.theme.fontSizes.m};
  background-color: ${p => p.theme.colors.background};
  padding-top: ${p => p.theme.space[5]}px;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: ${p => p.theme.colors.textStats};
  margin: 0 auto;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
`;

const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.black};
`;

const Stats = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin-top: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.secondary};
  color: ${p => p.theme.colors.textStats};
`;

const Item = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80px;
  padding-left: ${p => p.theme.space[4]}px;
  height: ${p => p.theme.space[6]}px;
  background-color: ${p => p.bgColor};
  color: ${p => p.theme.colors.textAlt};
  & + & {
    border-left: 1px solid ${p => p.theme.colors.textStats};
  }
`;

const css = {
  Card,
  Avatar,
  Name,
  Stats,
  Item,
};

export default css;
