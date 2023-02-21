import PropTypes from 'prop-types';
import {Container, Title, List, Item, Label, Percentage} from './Statistics.styled';

export const Statistics = ({title, stats}) =>{
   return (
    <Container>
  {title && <Title>{title}</Title>}

  <List>
    {stats.map(stat => (
 <Item key={stat.id}>
 <Label >{stat.label}</Label>
 <Percentage >{stat.percentage}%</Percentage>
</Item>
    ))}
   
  </List>
</Container>
   );
};

Statistics.propTypes = {
    title: PropTypes.string,
   stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
   })),
};
