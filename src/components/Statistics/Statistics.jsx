import css from './Statistic.styled';
import randomColor from '../../utils/rundomColor';

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

export default Statistics;
