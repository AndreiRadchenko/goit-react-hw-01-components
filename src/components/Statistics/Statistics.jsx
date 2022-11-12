import css from './Statistic.styled';
import randomColor from '../../utils/rundomColor';
import PropTypes from 'prop-types';

const Statistics = ({ title = false, stats }) => {
  return (
    <css.Section>
      <css.Card size={stats.length}>
        {title && <css.Title>{title}</css.Title>}

        <css.Stats>
          {stats.map(e => (
            <css.Item key={e.id} bgColor={randomColor()}>
              <css.Label>{e.label}</css.Label>
              <css.Persentage>{e.percentage}%</css.Persentage>
            </css.Item>
          ))}
        </css.Stats>
      </css.Card>
    </css.Section>
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
