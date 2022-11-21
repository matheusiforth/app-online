import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const BoxPrincipalLogin = styled.p`
  background-color: #454587;
  color: white;
  border-radius: 8px;
  padding: 32px;
  width: 22.5%;
  font-size: ${px2vw(100)};
  flex-Direction: column;

  @media only screen and (min-width: 360px) and (min-height: 640px) {
    background-color: black;;
    font-size: ${px2vw(20)};
  }

  @media only screen and (min-width: 360px) and (min-height: 710px) {
    background-color: green;;
    font-size: ${px2vw(20)};
  }

  @media only screen and (min-width: 375px) and (min-height: 667px) {
    background-color: red;;
    font-size: ${px2vw(20)};
  }

  @media only screen and (min-width: 375px) and (min-height: 812px) {
    background-color: blue;;
    font-size: ${px2vw(20)};
  }

  @media only screen and (min-width: 411px) and (min-height: 731px) {
    background-color: #cccc00;;
    height: 360px;
    font-size: ${px2vw(20)};
  }

  @media only screen and (min-width: 768px) and (min-height: 1024px) {
    background-color: #e2e2ee;;
    color: black;
    height: 60%;
    font-size: ${px2vw(150)};
  }

  @media only screen and (min-width: 1366px) and (min-height: 768px) {
    background-color: gray;;
    font-size: ${px2vw(20)};
  }
  
  @media only screen and (min-width: 1920px) and (min-height: 1080px) {
    background-color: yellow;;
    font-size: ${px2vw(20)};
  }
`;

export const BoxGrafico = styled.div`
  background-color: #f1f1ff;
  border: solid 3px black;
  border-radius: 8px;
  margin-left: 5px;
  margin-bottom: 5px;

  // fabio rosa 1336 x 768 100% pequeno
  @media only screen and (min-width: 1400px) and (min-height: 657px) {
    background-color: #e2e2ee;;
    width: ${px2vw(389)};
    height: ${px2vw(428)};
  }

  @media (min-height: 750px) {
    background-color: #e2e2ee;;
    width: ${px2vw(389)};
    height: ${px2vw(452)};
  }

  //serv 1920 x 1080 100% grande
  @media only screen and (min-width: 1900px) and (min-height: 1000px) {
    background-color: #e2e2ee;
    width: ${px2vw(390)};
    height: ${px2vw(587)};
  }
`;