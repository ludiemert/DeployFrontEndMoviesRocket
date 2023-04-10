import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.section`
  
  margin: 28px 0;

  >h2 {
    /*
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme}) => theme.COLORS.BACKGROUND_600};
    */
    
    padding: 16px;

    color: ${({ theme}) => theme.COLORS.WHITE};
    font-size: 24px;
    font-weight: 400;

  }
`;
