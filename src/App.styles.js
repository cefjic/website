import styled, { css, createGlobalStyle, keyframes } from "styled-components";

export const colors = {
  background: "#263238",
  text: "#b0bec5",
  line: "#455a64"
};

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  html {
    scroll-behavior: smooth;
    height: 100%;
    min-height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${colors.background};
    height: 100%;
  }
  #root {
    height: 100%;
  }
  a {
    text-decoration: none;
  }
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

export const Name = styled.p`
  color: ${colors.text};
  font-size: 128px;
  line-height: 128px;
  margin: 0;
  letter-spacing: 6px;
  font-family: "Amatic SC", cursive;
  text-shadow: 0px 0px 10px #212121;
  text-transform: lowercase;
  text-align: center;
  position: relative;
  z-index: 1;
`;

export const BackgroundAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const width =
  window.innerWidth > window.innerHeight
    ? window.innerWidth
    : window.innerHeight;

export const BackgroundLayout = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: ${width}px;
  top: -${(window.innerWidth - window.innerHeight) / 2}px;
  animation: 240s ${BackgroundAnimation} linear infinite;
  transform-origin: center;
  z-index: 0;
`;

export const BackgroundShadow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  box-shadow: 0px 1px 500px 20px #455a6480;
  z-index: 0;
  background: ${colors.background};
  transform: translate(-50%, -50%);
`;

export const Star = styled.div`
  position: absolute;
  transition: color 0.2s;
  ${({ top, left, rotation, scale, opacity }) =>
    css`
      top: ${top}%;
      left: ${left}%;
      transform: rotate(${rotation}deg);
      font-size: ${scale}px;
      color: #394a53;
      opacity: ${opacity};
    `};

  :hover {
    color: #37474f;
    opacity: 1;
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 24px;
  background: ${colors.line};
  margin: 4px 0 8px;
`;

export const Subtitle = styled.p`
  font-size: 24px;
  margin: 0;
  font-family: "Amatic SC", cursive;
  color: ${colors.text};
  margin-bottom: 42px;
  position: relative;
`;

export const animation = keyframes`
  from {
    width: 1px;
    height: 1px;
    opacity: 0.5;
    top: 13px;
    left: 13px;
  } 
  
  to {
    width: 56px;
    height: 56px;
    opacity: 0;
    top: -15px;
    left: -18px;
  }
`;

export const Link = styled.a`
  color: ${colors.text};
  font-size: 24px;
  transition: color 0.2s;
  position: relative;
  width: 21px;
  height: 21px;
  display: inline-block;

  svg {
    box-shadow: 0px 0px 10px #212121;
    position: relative;
    z-index: 1;
  }

  :hover {
    color: white;
  }

  ${({ animate }) =>
    animate &&
    css`
      :before {
        content: "";
        background: #000a12;
        position: absolute;
        z-index: 0;
        border-radius: 50%;
        animation: 1.8s ${animation} linear infinite;
      }
    `};
`;

export const LinksContainer = styled.div`
  ${Link} + ${Link} {
    margin-left: 16px;
  }
`;

export const BrandsContainer = styled.div`
  font-size: 48px;
  margin-top: 42px;
  color: #546e7a;
  text-align: center;
  margin-left: -20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const SateliteAnimation = keyframes`
  from {
    top: 50%;
    right: -100px;
    transform: rotate(0deg);
  }
  to {
    top: 20%;
    right: 150%;
    transform: rotate(40deg);
    color: #455a64;
  }
`;

export const Satelite = styled.div`
  font-size: 65px;
  color: #37474f;
  z-index: 0;
  position: absolute;
  animation: 30s ${SateliteAnimation} linear infinite;
`;
