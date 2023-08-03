import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

/*const data = [
  { number: 10, text: 'Open Source Projects'},
  { number: 2021, text: 'Dean list', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];*/


const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {/*data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))*/}

      <Box>
        <BoxNum>SLIIT</BoxNum>
        <BoxText>Dean List</BoxText>
      </Box>
      <Box>
      <BoxNum>10+</BoxNum>
        <BoxText>Open Source Projects</BoxText>
      </Box>
      <Box>
      <BoxNum>DevTown</BoxNum>
        <BoxText>Campus Ambassador</BoxText>
      </Box>
      

    </Boxes>
  </Section>
);

export default Acomplishments;
