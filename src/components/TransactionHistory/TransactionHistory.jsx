import PropTypes from 'prop-types';
import { Table, THead, TBody, TH, TR, TD } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <THead>
        <TR>
          <TH>Type</TH>
          <TH>Amount</TH>
          <TH>Currency</TH>
        </TR>
      </THead>
      <TBody>
        {items.map(item => (
          <TR key={item.id}>
            <TD>{item.type}</TD>
            <TD>{item.amount}</TD>
            <TD>{item.currency}</TD>
          </TR>
        ))}
      </TBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
