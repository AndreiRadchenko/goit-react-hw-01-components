import styled from 'styled-components';

const Section = styled.section`
  background-color: ${p => p.theme.colors.background};
  width: 100%;
`;

const Card = styled.div`
  font-size: ${p => p.theme.fontSizes.m};
  background-color: ${p => p.theme.colors.background};
  padding-top: ${p => p.theme.space[5]}px;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: ${p => p.theme.colors.textStats};
`;

const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.black};
`;

const Stats = styled.ul`
  @extend .list;
  /* list-style-type: none; */
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin-top: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.secondary};
  padding: ${p => p.theme.space[5]}px;
  gap: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.textStats};
  & > li {
    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.space[3]}px;
    & > #label {
      color: ${p => p.theme.colors.textAlt};
    }
  }
`;

const css = {
  Section,
  Card,
  Title,
  Stats,
};

export default css;
