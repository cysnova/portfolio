import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import ThemeContext from '../../context/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Feature/feature.css';
import FeaturedProject1 from '../../assets/featured-project1.jpg';
import FeaturedProject2 from '../../assets/featured-project2.jpg';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: FeaturedProject1,
    altText: 'Slide 1',
    caption: `╰┈➤ Featured project  ☄. *. ⋆`,
    link: 'https://project-threejs-ai-pi.vercel.app/',
    key: 1,
  },
  {
    src: FeaturedProject2,
    altText: 'Slide 2',
    caption: `╰┈➤ Featured project  ☄. *. ⋆`,
    link: 'https://ecommerce-store-weld-five.vercel.app/',
    key: 2,
  },
];

const AboutContainer = styled.div`
  background-color: ${(props) => (props.theme === 'light' ? '#fff' : '#333')};
  color: ${(props) => (props.theme === 'light' ? '#333' : '#fff')};
  width: 100%;
  padding: 0;
  height: 82vh;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 50vh;
    padding-top: 60px;

    border-top: 5px solid transparent;
    border-image: linear-gradient(
      to bottom right,
      #b827fc 0%,
      #2c90fc 25%,
      #b8fd33 50%,
      #fec837 75%,
      #fd1892 100%
    );
    border-image-slice: 1;
  }
`;

const StyledCarousel = styled(Carousel)`
  width:65%;
  margin:auto;
 

  .carousel-caption {
    color:black;
    font-family: 'Delicious Handrawn', cursive;
    letter-spacing:4px;
    font-size:18px;
  }
  @media (max-width: 768px) {
    width:92%;
    height:65%;
    
    
`;

const Feature = () => {
  const { theme } = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="carousel-item-2"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        {item.link ? (
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img src={item.src} alt={item.altText} />
          </a>
        ) : (
          <img src={item.src} alt={item.altText} />
        )}
        <CarouselCaption captionHeader={item.caption} />
      </CarouselItem>
    );
  });
  return (
    <AboutContainer theme={theme}>
      <StyledCarousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </StyledCarousel>
    </AboutContainer>
  );
};
export default Feature;
