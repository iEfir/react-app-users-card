import { Link } from "react-router-dom";
import styled from "styled-components";

export const GoBackLink = styled(Link)`
  text-decoration: none;
  width: 90px;
  text-align: center;
  border: 2px solid darkgray;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
