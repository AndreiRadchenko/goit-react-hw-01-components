import css from './Statistic.styled';

const Statistics = ({ title = false, stats }) => {
  return (
    <css.Section>
      <css.Card>
        {title && <css.Title>{title}</css.Title>}

        <css.Stats>
          {stats.map(e => (
            <li key={e.id} class="item">
              <span class="label">{e.label}</span>
              <span class="percentage">{e.percentage}%</span>
            </li>
          ))}
        </css.Stats>
      </css.Card>
    </css.Section>
  );
};

export default Statistics;
