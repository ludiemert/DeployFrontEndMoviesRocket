import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
 // grid-template-columns: 105px auto;
  grid-template-areas: 
  "header"
  "content";  
  

    //Main ocupa a tela toda
  > main {
      grid-area: content;
      overflow-y: auto;
      //padding: 123px 240px;
      padding: 64px 0;
  }

  /*
  > button {
      width: 207px;
      height: 48px;
      left: 1053px;
      top: 164px;
    
  } */

`;

export const Links = styled.ul`
  list-style: none;

  /*
  > li {
    margin-top: 12px;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }*/
`;

//ocupa so o meio
export const Content = styled.div`
  max-width: 550px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;


  > img {
    //position: absolute;
    width: 84px;
    height: 16px;
    //left: 32px;
    //top: 72px;
    margin-top: 10px;
    margin-bottom: 8px;
  }

  
  > button {
    align-self: end;
  }  

  > h1 {
    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
    font-weight: 700;
    padding-top: 52px;    
  }

  > h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
    font-weight: 700;
    padding-top: 52px;    
  }

  > h1, h2 {
    padding-top: 20px;
   }

  > p {
    font-size: 18px;
    font-weight: 400;
    //line-height: 19px;
    margin-top: 16px;
    text-align: justify;
    
    color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

  }
`;