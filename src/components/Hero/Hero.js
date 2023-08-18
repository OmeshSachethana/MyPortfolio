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
      <img src="../images/profile.png" alt="Profile" style={{ borderRadius: '12px',}}/> <br /><br />
      <SectionText>My name is Omesh Sachethana. I am currently a 3rd-year 2nd-semester student pursuing a degree in Information Technology specialization in Software Engineering at Sri Lanka Institute of Information Technology (SLIIT). As a student in this field, I am likely to be skilled in programming languages, software development methodologies, and other technical skills necessary for designing, developing, and testing software applications. 
        I also possess critical thinking skills, problem-solving abilities, and creativity required to excel in my field.</SectionText>
      <Button onClick={() => window.location = 'https://drive.google.com/file/d/1RyK1RbqTKXLZ1A7Yqk2vvnFyN3n4enij/view?usp=sharing'} >Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;