import { DefaultTheme, css, keyframes } from 'styled-components';

export type DebugMode = { $debug?: boolean };

type DebugStyledProps = DebugMode & { theme: DefaultTheme };

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const debugMode = ({ $debug }: DebugStyledProps) => css`
    border: ${({ theme: { colors } }) => ($debug && `0.5px solid ${colors.error}`)};
    background-color: ${({ theme: { colors } }) => ($debug && colors.border)};
    color: ${({ theme: { colors } }) => ($debug && colors.background)};
`;
