import styled from 'styled-components';

import { DebugMode, debugMode } from '@/styles/shared.styles';

export const StyledLayout = styled.main<DebugMode>`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    ${debugMode}
`;

export const StyledContainerLayout = styled.section<DebugMode>`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 1424px;
    min-height: 100vh;
    ${debugMode}
`;
