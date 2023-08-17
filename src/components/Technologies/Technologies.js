import React from 'react';
import { DiFirebase, DiReact, DiZend, DiAngularSimple, DiNodejsSmall, DiMongodb } from 'react-icons/di';
import { SiSpringboot, SiAdobeillustrator, SiAdobephotoshop, SiFigma, SiFlutter } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <DiReact size={'3rem'} style={{ marginRight: '1rem' }} />
          <DiAngularSimple size={'3rem'} /> &nbsp;&nbsp;
          <SiFlutter size={'2.2rem'} />
        </div>
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>Experience with <br/>
                         React.js, Angular, and Flutter
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SiSpringboot size={'2.5rem'} style={{ marginRight: '1rem' }} />
          <DiNodejsSmall size={'3rem'} />
          <DiFirebase size={'3.5rem'} />
          <DiMongodb size={'2.5rem'} />
        </div>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>Experience with <br/>
                         Node.js, Express.js, SpringBoot and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SiAdobephotoshop size={'2.2rem'} style={{ marginRight: '1rem' }} />
          <SiAdobeillustrator size={'2.2rem'} /> &nbsp;&nbsp;
          <SiFigma size={'2.2rem'} />
        </div>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>Experience with <br/>
                         Figma, MockFlow, Adobe Photoshop and Illustrator
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
