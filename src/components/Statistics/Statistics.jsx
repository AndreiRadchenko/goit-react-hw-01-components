import css from './Statistic.styled';
import randomColor from '../../utils/rundomColor';
import PropTypes from 'prop-types';
import Box from 'components/Box';

const Statistics = ({ title = false, stats }) => {
  return (
    <Box bg="background" py={5} textAlign="center" width="100%" as="section">
      <css.Card size={stats.length}>
        {title && (
          <Box fontSize="l" color="black" as="h2">
            {title}
          </Box>
        )}

        <css.Stats>
          {stats.map(({ id, label, percentage }) => (
            <css.Item key={id} bgColor={randomColor()}>
              <css.Label>{label}</css.Label>
              <css.Percentage>{percentage}%</css.Percentage>
            </css.Item>
          ))}
        </css.Stats>
      </css.Card>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,

  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
