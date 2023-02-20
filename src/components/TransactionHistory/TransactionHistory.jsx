import PropTypes from 'prop-types';
import {Table, TableTitle, TableRow, TableData, TableValue} from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
    return (
        <Table>
  <TableTitle>
    <TableRow>
      <TableData>Type</TableData>
      <TableData>Amount</TableData>
      <TableData>Currency</TableData>
    </TableRow>
  </TableTitle>

  <tbody>
    {items.map(item => (
    <TableRow key={item.id}>
      <TableValue>{item.type}</TableValue>
      <TableValue>{item.amount}</TableValue>
      <TableValue>{item.currency}</TableValue>
    </TableRow>
    ))}
  </tbody>
</Table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
id: PropTypes.string.isRequired,
type: PropTypes.string.isRequired,
amount: PropTypes.string.isRequired,
currency: PropTypes.string.isRequired,
    }))
}