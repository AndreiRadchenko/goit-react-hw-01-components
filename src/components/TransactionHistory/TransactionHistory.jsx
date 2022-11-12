import css from './TransactionHistory.styled';

const TransactionHistory = ({ transactions }) => {
  return (
    <css.Section>
      <css.Table>
        <css.Thead>
          <css.Tr>
            <css.Th>Type</css.Th>
            <css.Th>Amount</css.Th>
            <css.Th>Currency</css.Th>
          </css.Tr>
        </css.Thead>

        <tbody>
          {transactions.map((row, index) => (
            <css.Tr key={row.id} index={index}>
              <css.Td className="type">{row.type}</css.Td>
              <css.Td>{row.amount}</css.Td>
              <css.Td>{row.currency}</css.Td>
            </css.Tr>
          ))}
        </tbody>
      </css.Table>
    </css.Section>
  );
};

export default TransactionHistory;
