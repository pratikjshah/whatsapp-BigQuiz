import styled from 'styled-components';

import { whatsappGreenColor, viewerBackgroundColor } from '../../utils/colors';
import { messageBaseStyle } from '../../utils/styles';

import bgImage from '../../img/bg.png';

const Container = styled.div`
  flex-grow: 1;
  padding: 0 1rem;
  min-height: 90vh;
  background-color: ${viewerBackgroundColor};
  background-image: url(${bgImage});

  @media (min-width: 700px) {
    padding: 0 2.4rem;
  }
`;

const List = styled.ul`
  padding: 0;
  list-style: none;
  max-width: 968px;
  margin-left: auto;
  margin-right: auto;
`;

const P = styled.p`
  text-align: center;
`;

const Info = styled.span`
  ${messageBaseStyle}

  text-align: center;
  background-color: ${whatsappGreenColor};
  color: white;
`;

export { Container, List, P, Info };
