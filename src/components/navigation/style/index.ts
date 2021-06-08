import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.nav`
  width: 10rem;
  height: 100%;
  background: #181818;
`;

export const NavHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 200px;
  background: black;
  margin: 0 0 100px 0;
`;

export const HeaderImg = styled.img`
  width: 60%;
`;

export const HeaderText = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
`;

export const HeaderSubText = styled.p`
  color: #a5a5a5;
  font-size: 12px;
  margin: 30px 0 20px 0;
`;

export const LinkText = styled(Link)`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
  color: #909096;
  text-decoration: none;
  border-bottom: 1px solid #282828;

  transition: color 0.3s;

  &:hover {
    color: #08fdd8;
  }
`;

export const ButtonText = styled.a`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
  color: #909096;
  text-decoration: none;
  border-bottom: 1px solid #282828;

  transition: color 0.3s;

  &:hover {
    color: #08fdd8;
  }
`;
