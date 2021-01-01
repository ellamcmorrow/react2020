// Menu.styled.js
import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  width: 100%;
  background: #a89191;
  height: 100vh;
  padding: 2rem;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  transition: transform 0.5s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0%)")};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    flex-direction: column;
    font-size: 1rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: light;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: papayawhip;
    }
  }
`;
