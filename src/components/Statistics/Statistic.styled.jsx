import styled from 'styled-components';

const Section = styled.section`
  background-color: ${p => p.theme.colors.background};
  width: 100%;
  padding: 30px 0;
  text-align: center;
`;

const Card = styled.div`
  display: inline-block;
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
  flex-direction: column;
  justify-content: center;
  width: ${p => p.theme.space[6]}px;
  height: ${p => p.theme.space[6]}px;
  background-color: ${p => p.bgColor};
  color: ${p => p.theme.colors.textAlt};
  & + & {
    border-left: 1px solid ${p => p.theme.colors.textStats};
  }
`;

const Label = styled.span`
  font-size: ${p => p.theme.fontSizes.s};
`;

const Persentage = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
`;

const css = {
  Section,
  Card,
  Title,
  Stats,
  Item,
  Label,
  Persentage,
};

export default css;
