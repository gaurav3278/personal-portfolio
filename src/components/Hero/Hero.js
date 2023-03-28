import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <div>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        I am Gaurav Rai, an engineering student at VIT bhopal pursuing my B.Tech in Computer Science and Engineering. I am a Front-end developer and learning Backend Development.
        </SectionText>
        <Button>
          <a style={{color:'white'}} href='https://github.com/gaurav3278' target='_blank'>Learn More</a>
        </Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;