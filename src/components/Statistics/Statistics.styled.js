import styled from 'styled-components';

export const StatSection = styled.section`
  width: 300px;
  margin-bottom: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: black;
  };
`;

export const StatTitle = styled.h2`
  text-align: center;
  padding: 20px 0;
  background-color: white;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const StatItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
  width: 100%;
  max-width: 60px;
  flex-direction: column;
  color: white;
  background-color: darkblue;
  border: 1px solid white;
`;

export const StatLabel = styled.span`
  margin-bottom: 5px;
`;

export const StatPercentage = styled.span`
  font-weight: 700;
`;
