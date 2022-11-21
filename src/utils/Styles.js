import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const BoxLabelRedzao = styled.p`
  justify-content: center;
  background-color: RGB(255, 168, 189);
  color: black;
  border-radius: 6px;
  padding: 1px;
  margin-top: 0.75rem;
  width: 100%;
  font-weight: bold;
  font-size: ${px2vw(50)};
  text-transform: uppercase;
  text-align: center;
  
  @media (min-width: 768px) {
    font-size: ${px2vw(30)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(14)};
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