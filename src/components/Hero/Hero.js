import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
      </SectionTitle>
      <img
        src="../images/profile_photo.jpg"
        alt="Profile"
        style={{ maxWidth: '40%', borderRadius: '12px' }}
      />
      <br /><br />
      <SectionText>
  My name is Omesh Sachethana. I have completed my degree in Information Technology with a specialization in Software Engineering at the Sri Lanka Institute of Information Technology (SLIIT). Through my academic journey, I have gained strong skills in programming languages, software development methodologies, and other essential technical areas for designing, developing, and testing software applications. I also possess critical thinking, problem-solving abilities, and creativity that empower me to excel in the field of software engineering.
</SectionText>

      <Button onClick={() => window.location = 'https://drive.google.com/file/d/1kSISXaA1Y2Rpz_mU1BAthfiZ4ulIOUEQ/view?usp=sharing'} >Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
