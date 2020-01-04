import styled, { css, createGlobalStyle } from 'styled-components';

import { hideText, normalizeButton, normalizeInput } from './utils/styles';
import { whatsappGreenColor, whatsappGreenDarkColor } from './utils/colors';
import { zIndex } from './utils/z-index';

import mediaNotFound from './img/error.svg';
import pageBG from './img/random-shapes.svg';

const buttonSize = '44px';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-family: sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    color: #333;
  }

  a {
    text-decoration: none;
    color: ${whatsappGreenColor};

    &:visited {
      color: ${whatsappGreenDarkColor};
    }
  }

  button {
    cursor: pointer;
  }

  html,
  body {
    height: 100%;
  }

  #root {
    height: auto;
    background-image: linear-gradient(159deg, #1D1E1F 0%, #151617 77%);
    background: #5855d6;
    position: relative;
    display: block;
  }

  .rootContainer {
    background-image: url(${pageBG});
    background-repeat: repeat;
    background-size: cover;
    background-attachment: fixed;
    opacity: 1;
    display: block;
    position: relative;
  }

  media {
    display: block;
    min-height: 48px;
    min-width: 64px;
    margin: 16px 0;
    background-image: url(${mediaNotFound});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.24;

  }

  .relative {
    position: relative;
  }
  .absolute {
    position: absolute;
  }

  .box-shadow {
    box-shadow: 0 3px 6px 0 rgba(0,0,0,.3);
  }

  .header {
    background: #2D384A;
    background: transparent;
  }
  .header .top-header {
    background: #1F2733;
    background: transparent;
    height: 64px;
    width: 100%;
    font-size: 24px;
    line-height: 64px;
  }
  .container {
    z-index: 10;
  }
  .container .card {
    max-width: 992px;
    margin: 0 auto;
    -webkit-border-radius: 3px !important;
    -moz-border-radius: 3px !important;
    border-radius: 3px !important;
    border: none !important;
        background: #ffffff;
  }
  .header .card {
    background: none;
  }
  .header .card > div {
    font-size: 3.25rem;
    line-height: 3.5rem;
    margin: 2rem 0 1.4rem;
    font-weight: 800;
    color: #fff;
    display: inline-block;
    width: 100%;
    text-align: center;
  }

  .header .card span.whatsapp {
    font-size: 1.6rem;
    display: block;
    line-height: 2rem;
  }

  .header .card span.quiz {
    font-weight: bolder;
  }

  .footer {
    padding: 48px 0;
    background: none !important;
    color: rgba(255,255,255,0.84);
    text-align: center;
    font-size: 1rem;
  }

  .footer a {
    color: #ffffff !important;
    text-decoration: underline;
  }

`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const MenuOpenButton = styled.button`
  ${normalizeButton}
  ${hideText}

  position: fixed;
  width: ${buttonSize};
  height: ${buttonSize};
  left: 1rem;
  bottom: 1rem;
  border-radius: 50%;
  background-color: ${whatsappGreenColor};

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 16px;
    height: 2px;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    background-color: white;
    box-shadow: 0 -5px 0 white, 0 5px 0 white;
  }

  @media (min-width: 700px) {
    left: 2rem;
    bottom: 2rem;
  }
`;

const MenuCloseButton = styled.button`
  ${normalizeButton}
  ${hideText}

  position: absolute;
  width: ${buttonSize};
  height: ${buttonSize};
  top: 0;
  right: 0;
  background-color: transparent;
  opacity: 0.5;
  transition: opacity 0.3s ease;

  &:hover,
  &:focus {
    opacity: 1;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 20px;
    height: 2px;
    top: 50%;
    left: 50%;
    transform-origin: 50% 50%;
    background-color: black;
  }

  &::before {
    transform: translate3d(-50%, -50%, 0) rotate(45deg);
  }

  &::after {
    transform: translate3d(-50%, -50%, 0) rotate(135deg);
  }
`;

const Overlay = styled.button`
  ${normalizeButton}

  display: block;
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: black;
  opacity: ${props => (props.isActive ? 0.4 : 0)};
  transition: opacity 0.3s ease;
  z-index: ${zIndex.overlay};
  ${props =>
    !props.isActive &&
    css`
      pointer-events: none;
    `}
`;

const Sidebar = styled.aside`
  position: fixed;
  width: 280px;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: white;
  transform: translate3d(${props => (props.isOpen ? 0 : '-100%')}, 0, 0);
  transition: transform 0.3s ease;
  z-index: ${zIndex.sidebar};
`;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: ${buttonSize};
  left: 0;
  bottom: 0;
  right: 0;
  padding: 1rem;
  border-top: 1px solid #eee;
`;

const Field = styled.div`
  * + * {
    margin-top: 0.375rem;
  }
`;

const Label = styled.label`
  display: block;
  opacity: 0.8;
`;

const Input = styled.input`
  ${normalizeInput}

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 100%;
  height: 1.8rem;
  padding: 0 0.3rem;
  background-color: #fafafa;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.07);
`;

const InputDescription = styled.div`
  font-size: 80%;
  opacity: 0.6;
`;

const Header = styled.header`
  padding: 10px;
  display: flex;
  align-items: center;

  > *:first-child {
    flex: 1 1 auto;
  }

  @media (max-width: 699px) {
    flex-direction: column;

    > * + * {
      margin-top: 0.5rem;
    }
  }

  @media (min-width: 700px) {
    > * + * {
      margin-left: 1rem;
    }
  }
`;

export {
  GlobalStyles,
  Container,
  MenuOpenButton,
  MenuCloseButton,
  Overlay,
  Sidebar,
  SidebarContainer,
  Field,
  Label,
  Input,
  InputDescription,
  Header,
};
