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
      <SectionText>My name is Omesh Sachethana. I am currently a 4th-year 1st-semester student pursuing a degree in Information Technology specialization in Software Engineering at Sri Lanka Institute of Information Technology (SLIIT). As a student in this field, I am likely to be skilled in programming languages, software development methodologies, and other technical skills necessary for designing, developing, and testing software applications. 
        I also possess critical thinking skills, problem-solving abilities, and creativity required to excel in my field.</SectionText>
      <Button onClick={() => window.location = 'https://drive.google.com/file/d/1jWavKV7GnENdiHnLdCttT7OVDU0q4z4u/view?usp=sharing'} >Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
