import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import  Carousel  from 'react-bootstrap/Carousel';
import { Container, Content } from "./styled";



export const CarouselContainer = () => {
  return (
    <Container>
      <div style={{ display: 'block', maxWidth: 900, Maxheigth:200, padding: 30, marginBottom:"2rem"}}>
        <Content>
          <Carousel fade variant="ligth" >
            <Carousel.Item interval={1300}>
              <img className="d-block w-100" 
                src={require('../../images/carousel/BannerBlack.png')}
                alt="Image One"
              />
            </Carousel.Item>
            <Carousel.Item interval={1300}>
              <a
                href="/computing"
                target=""
              >
              <img className="d-block w-100"
                src={require('../../images/carousel/BannerInfor.png')}
              />
              </a>
            </Carousel.Item>
            <Carousel.Item interval={1300}>
              <a
                href="/bookstore"
                target=""
              >
              <img className="d-block w-100" 
                src={require('../../images/carousel/BannerLivro.png')}
                alt="Image Three"
              />
              </a>
            </Carousel.Item>
            <Carousel.Item interval={1300}>
              <a
                href="/office"
                target=""
              >
              <img className="d-block w-100" 
                src={require('../../images/carousel/BannerEsct.png')}
                alt="Image four"
              />
              </a>
            </Carousel.Item>
            <Carousel.Item interval={1300}>
              <img className="d-block w-100" 
                src={require('../../images/carousel/BannerSuper.png')}
                alt="Image five"
              />
            </Carousel.Item>
            <Carousel.Item interval={1300}>
              <a
                href="/registration"
                target=""
              >
              <img className="d-block w-100" 
                src={require('../../images/carousel/BannerCad.png')}
                alt="Image six"
              />
              </a>
            </Carousel.Item>
          </Carousel>
        </Content>
      </div>
    </Container>
  );
};