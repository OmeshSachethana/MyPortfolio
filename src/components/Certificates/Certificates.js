import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './CertificatesStyles';

/*const data = [
  { number: 10, text: 'Open Source Projects'},
  { number: 2021, text: 'Dean list', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];*/


const Certificates = () => (
  <Section>
    <SectionTitle>Certificates</SectionTitle>
    <Boxes>
      {/*data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))*/}

      <Box>
        <BoxNum>HP LIFE</BoxNum>
        <BoxText>Agile Project Management</BoxText>
      </Box>
      <Box>
      <BoxNum>HP LIFE</BoxNum>
        <BoxText>Data Science & Analytics</BoxText>
      </Box>
      <Box>
      <BoxNum>HP LIFE</BoxNum>
        <BoxText>CyberSecurity Awareness</BoxText>
      </Box>
      <Box>
      <BoxNum>HP LIFE</BoxNum>
        <BoxText>Digital Business Skills</BoxText>
      </Box>
      <Box>
      <BoxNum>HP LIFE</BoxNum>
        <BoxText>AI for Beginners</BoxText>
      </Box>
      <Box>
      <BoxNum>Google Digital Garage</BoxNum>
        <BoxText>Digital Marketing</BoxText>
      </Box>
      <Box>
      <BoxNum>CyberShield</BoxNum>
        <BoxText>Cyber Security Principles</BoxText>
      </Box>
      <Box>
      <BoxNum>HP LIFE</BoxNum>
        <BoxText>AI for Beginners</BoxText>
      </Box>
      <Box>
      <BoxNum>Microsoft Learn</BoxNum>
        <BoxText>DevOps for Web Development</BoxText>
      </Box>
      <Box>
      <BoxNum>Google</BoxNum>
        <BoxText>DevOps for Web Development</BoxText>
      </Box>
      <Box>
      <BoxNum>Microsoft Learn</BoxNum>
        <BoxText>Introduction to Azure Cognitive Services</BoxText>
      </Box>
      <Box>
      <BoxNum>IOTLOGY</BoxNum>
        <BoxText>Introduction to Internet Of Things</BoxText>
      </Box>
      
      
      

    </Boxes>
  </Section>
);

export default Certificates;
