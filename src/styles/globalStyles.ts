import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.font.family};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text.primary};
  }

  a {
    color: ${(props) => props.theme.colors.text.secondary};
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.colors.button.hover};
    }
  }

  button {
    font-family: ${(props) => props.theme.font.family};
    background-color: ${(props) => props.theme.colors.button.background};
    color: ${(props) => props.theme.colors.button.text};
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${(props) => props.theme.colors.button.hover};
    }

    &:disabled {
      background-color: ${(props) => props.theme.colors.button.disabled};
      color: ${(props) => props.theme.colors.text.disabled};
      cursor: not-allowed;
    }
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 6px;
    border: 3px solid ${(props) => props.theme.colors.background};
  }

  * {
    scrollbar-color: ${(props) => props.theme.colors.primary} ${(props) => props.theme.colors.background};
    scrollbar-width: thin;
  }

  ${props => props.theme.media.mobile} {
    body {
      font-size: ${(props) => props.theme.font.sizes.small};
    }

    h1, h2, h3, h4, h5, h6 {
      font-size: ${(props) => props.theme.font.sizes.medium};
    }
  }

  input, textarea {
    font-family: ${(props) => props.theme.font.family};
    color: ${(props) => props.theme.colors.text.primary};
    background-color: ${(props) => props.theme.colors.secondary};
    border: 1px solid ${(props) => props.theme.colors.border};
    padding: 8px;
    border-radius: 4px;

    &:focus {
      border-color: ${(props) => props.theme.colors.primary};
      outline: none;
    }

    &:disabled {
      background-color: ${(props) => props.theme.colors.button.disabled};
      color: ${(props) => props.theme.colors.text.disabled};
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.colors.text.inverse};
  }

  span, strong, p{
    color: ${(props) => props.theme.colors.text.secondary};
  }

  .error {
    color: ${(props) => props.theme.colors.error};
  }

  .success {
    color: ${(props) => props.theme.colors.success};
  }

  .warning {
    color: ${(props) => props.theme.colors.warning};
  }

  .info {
    color: ${(props) => props.theme.colors.info};
  }
`;
