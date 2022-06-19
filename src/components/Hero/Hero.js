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
        I am Gaurav Rai, an engineering student at VIT bhopal pursuing my B.Tech in Computer Science and Engineering. I am a Front-end developer and learning Backend Development and a web 3.0 enthusiast.
        </SectionText>
        <Button onClick={()=> window.location = 'https://www.hackerrank.com/_gaurav_rai'}>Learn More</Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;