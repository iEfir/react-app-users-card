import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 30px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 10px;
  margin-bottom: 16px;
  background: #5736a3;
  box-shadow: 0px 10px 5px -4px rgba(0, 0, 0, 0.38);

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.3);
  font-weight: 500;

  &.active {
    color: #5736a3;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
