import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const Header = styled.h1`
  font-size: 2rem;
  color: #333;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

export const StyledLink = styled(Link)`
  margin-top: 20px;
  font-size: 1rem;
  color: #0077FF;
  text-decoration: none;
`;
