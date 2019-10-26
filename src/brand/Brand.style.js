import styled, { css } from "styled-components";

export const Popper = styled.div`
  display: none;
  position: absolute;
  background: white;
  padding: 16px 20px;
  border-radius: 6px;
  bottom: 56px;
  font-size: 14px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 0px 6px #000a12;
  font-family: sans-serif;
  z-index: 2;
  transition: opacity 0.2s;

  p {
    margin: 0;
    white-space: nowrap;

    + p {
      margin-top: 8px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Layout = styled.div`
  position: relative;
  margin-left: 20px;

  ${({ more }) =>
    more &&
    css`
      font-size: 24px;
      display: flex;
      align-items: center;
      margin-left: 36px;
    `}

  svg {
    transition: color 0.2s;
  }

  :hover {
    svg {
      color: #607d8b;
    }

    ${Popper} {
      display: block;

      :hover {
        display: none;
      }
    }
  }
`;
