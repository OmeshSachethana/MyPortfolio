import React from 'react';
import { DiFirebase, DiReact, DiZend, DiAngularSimple } from 'react-icons/di';
import { SiNextdotjs } from 'react-icons/si'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I worked with a range of technologies in the web development world
    </SectionText>
    <List>
      <ListItem>
        <DiReact size={'3rem'} />
        <DiAngularSimple size={'3rem'}/>
        
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>Experience with <br/>
                         React.js, Angular and Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size={'3rem'} /> 
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>Experience with <br/>
                         Node.js, Express.js and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size={'3rem'} />
        
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>Experience with <br/>
                         Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
