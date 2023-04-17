import styled from 'styled-components';

export const FriendListCard = styled.ul`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: black;
`;

export const FriendListItemCard = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  width: 100%;
  background-color: white;
  border: 1px solid grey;
`;

export const FriendStatus = styled.span`
  margin-right: 15px;
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const FriendAvatar = styled.img`
  width: 48px;
  margin-right: 15px;
  };
`;

export const Friendname = styled.p`
  font-weight: 700;
  };
`;
