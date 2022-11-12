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
          {stats.map(e => (
            <css.Item key={e.id} bgColor={randomColor()}>
              <css.Label>{e.label}</css.Label>
              <css.Persentage>{e.percentage}%</css.Persentage>
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
