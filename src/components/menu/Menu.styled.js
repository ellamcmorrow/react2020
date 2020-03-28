// Menu.styled.js
import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  width: 100%;
  justify-content: left;
  background: #a89191;
  height: 100vh;
  text-align: center;
  padding: 2rem;
  padding-top: 200px;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.5s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0%)")};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: light;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
