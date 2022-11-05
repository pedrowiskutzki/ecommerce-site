import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import  Carousel  from 'react-bootstrap/Carousel';
import { Container, Content } from "./styled";


export const CarouselContainer = () => {
  return (
    <Container>
      <div style={{ display: 'block', width: "900px", height: "300px", padding: "20px", marginBottom: "2rem"}}>
        <Content>
          <Carousel fade>
            <Carousel.Item interval={1300}>
              <img className="d-block w-100" 
                src={require('../../images/carousel/BannerBlack.png')}
                alt="Image One"
              />
            <Carousel.Caption>
                <h4></h4>
            </Carousel.Caption>
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
              <Carousel.Caption><h4></h4></Carousel.Caption>
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
              <Carousel.Caption><h4></h4></Carousel.Caption>
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
              <Carousel.Caption><h4></h4></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1300}>
              <img className="d-block w-100" 
                src={require('../../images/carousel/BannerSuper.png')}
                alt="Image five"
              />
              <Carousel.Caption><h4></h4></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1300}>
              <a
                href="/registration"
                target="_blank"
              >
              <img className="d-block w-100" 
                src={require('../../images/carousel/BannerCad.png')}
                alt="Image six"
              />
              </a>
              <Carousel.Caption><h4></h4></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Content>
      </div>
    </Container>
  );
};