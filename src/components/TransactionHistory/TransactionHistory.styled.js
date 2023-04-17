import styled from 'styled-components';

export const Table = styled.table`
  background: #f5ffff;
  border-collapse: collapse;
  text-align: left;
`;

export const THead = styled.thead``;
export const TBody = styled.tbody``;

export const TH = styled.th`
  border-top: 1px solid #777777;
  padding-top: 16px;
  padding-bottom: 16px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.22; 
  color: #fff;
  background-color: darkblue; 
  text-align: center;
  }
`;

export const TR = styled.tr`
  :nth-child(2n + 1) {
    background-color: whitesmoke;
  }
`;

export const TD = styled.td`
  border: 1px solid #e3eef7;
  padding: 10px 15px;
  font-size: 16px;
  position: relative;
  color: black;
  text-align: center;
`;
