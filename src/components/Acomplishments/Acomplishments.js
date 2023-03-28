import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxImg, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { text: 'Flipkart Grid',img:'/images/certi.jpg', url: 'https://drive.google.com/file/d/1e9hRb71mthittAsRYB1NYugsT--j6xrm/view?usp=sharing', isImg:true},
  { text: 'Geek-Week-Local',img:'/images/GWL.jpg', url: 'https://drive.google.com/file/d/1j1zxm2VSTveDi09eYBiFvkZwGSkoi8RL/view?usp=sharing', isImg:true},
  { text: 'Google KickStart',img:'/images/kickstart.jpg', url: 'https://drive.google.com/file/d/1rwm0IejPNc4U1CjFYD4xktqwXPoyEiYK/view?usp=sharing', isImg:true},
  
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishement</SectionTitle>
    <Boxes>
      {data.map((card, index)=>(
        <Box key={index}>
          {card.isImg && <BoxImg src={card.img} onClick={()=>{window.open(card.url, '_blank')}} />}
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
