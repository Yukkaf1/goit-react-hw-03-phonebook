import styled from 'styled-components';

export const ProfileBlock = styled.div`
  width: 300px;
  margin-top: 118px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  background-color: #bbbbf3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  background-color: white;
  color: black;
`;

export const ProfileImg = styled.img`
  display: flex;
  width: 140px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  background-color: whitesmoke;
`;

export const ProfileName = styled.p`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const ProfileTag = styled.p`
  font-size: 14px;
  margin-top: 5px;
`;

export const ProfileLocation = styled.p`
  font-size: 14px;
  margin-top: 5px;
`;

export const ProfileStats = styled.ul`
  display: flex;
  background-color: rgba(243, 246, 249, 1);
`;

export const ProfileStatsInfo = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
  width: 100%;
  flex-direction: column;
  background-color: whitesmoke;
  border: 1px solid white;
`;

export const ProfileLabel = styled.span`
  margin-bottom: 5px;
  font-size: 14px;
`;

export const ProfileQuantity = styled.span`
  font-weight: 700;
  font-size: 18px;
`;
