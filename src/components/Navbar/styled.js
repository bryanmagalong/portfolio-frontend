import { NavHashLink } from "react-router-hash-link";
import styled from "styled-components";

//=============== Styled-components
export const HeaderContainer = styled.header`
  top: 0;
  position: sticky;
  background-color: #fff;
  transition: all ease-in-out 0.4s;
  z-index: 9999;

  &.toggle {
    background-color: ${(props) => props.theme.colors.main};
  }
`;

export const NavBar = styled.nav`
  min-width: 100%;
  min-height: 3.875rem;
  padding: 0.75em 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarBrand = styled.a`
  color: ${(props) => props.theme.colors.main};
  max-width: 6.563em;
  letter-spacing: 0.1rem;
  transition: all ease-in-out 0.4s;

  &.toggle {
    color: #fff;
  }
`;

export const MenuButton = styled.button`
  background-color: #fff;
  transition: all ease-in-out 0.4s;

  &.toggle {
    background-color: ${(props) => props.theme.colors.main};
    color: #fff;
  }

  @media (min-width: ${(props) => props.theme.media.lg}) {
    display: none;
  }
`;

export const MenuDrop = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  left: -1500px;
  height: calc(100vh - 3.875rem);
  min-width: 100%;
  padding: 1.375rem 0;
  background-color: ${(props) => props.theme.colors.main};
  transition: all ease-in-out 0.4s;
  color: #fff;

  &.toggle {
    left: 0px;
  }

  @media (min-width: ${(props) => props.theme.media.lg}) {
    display: none;
  }
`;

export const LinkList = styled.ul`
  ${MenuDrop} > & {
    display: flex;
  }

  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.3rem;
  height: 100%;

  @media (min-width: ${(props) => props.theme.media.xs}) {
    display: none;
  }

  @media (min-width: ${(props) => props.theme.media.lg}) {
    display: flex;
    flex-direction: row;
  }
`;

export const Link = styled(NavHashLink)`
  color: #fff;
  padding: 0.5rem;
  border-bottom: 4px ${(props) => props.theme.colors.main} solid;

  &:hover,
  &.selected {
    border-bottom: 4px ${(props) => props.theme.colors.orange} solid;
  }

  @media (min-width: ${(props) => props.theme.media.lg}) {
    color: #000;
    border-bottom: 4px #fff solid;
  }
`;

export const Button = styled.a`
  padding: 0.5rem;
  color: #fff;
  border: 4px #fff solid;

  @media (min-width: ${(props) => props.theme.media.lg}) {
    color: #000;
    border: 4px ${(props) => props.theme.colors.main} solid;
    transition: color ease-in-out 0.2s;

    &:hover {
      background-color: ${(props) => props.theme.colors.main};
      color: #fff;
    }
  }
`;
