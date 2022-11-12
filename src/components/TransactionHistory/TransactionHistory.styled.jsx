import styled from 'styled-components';

const Section = styled.section`
  background-color: ${p => p.theme.colors.background};
  width: 100%;
  padding: 30px 0;
  text-align: center;
`;

const Table = styled.table`
  margin: 0 auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Thead = styled.thead`
  & > tr {
    background-color: ${p => p.theme.colors.tableHead};
  }
`;

const Th = styled.th`
  font-size: ${p => p.theme.fontSizes.m};
  width: 200px;
`;

const Tr = styled.tr`
  height: ${p => p.theme.space[5]}px;
  background-color: ${p =>
    (p.index + 1) % 2
      ? p.theme.colors.tableRowOdd
      : p.theme.colors.tableRowEven};
`;

const Td = styled.td`
  height: ${p => p.theme.space[5]}px;
  &.type {
    text-align: left;
    padding-left: 80px;
  }
`;

const css = {
  Section,
  Table,
  Thead,
  Th,
  Tr,
  Td,
};

export default css;
