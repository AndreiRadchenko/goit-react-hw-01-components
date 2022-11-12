import css from './TransactionHistory.styled';
import PropTypes from 'prop-types';
import Box from 'components/Box';

const TransactionHistory = ({ transactions }) => {
  return (
    <Box bg="background" py={5} textAlign="center" width="100%" as="section">
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
    </Box>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
