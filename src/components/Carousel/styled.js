import styled from "styled-components"

export const ContainerCarousel = styled.div`

    display: inline-block;
    text-align: center;
    max-width: 100%;
    margin:10px;
    max-height: 350px;
    line-height: 1.4;
    font-size: 1.6rem;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 5rem;
    margin-left :0 ;
    margin-right: 0; 
    

    
 .embla{ 
  display: inline-block; 
  background-color: #292929;
  max-width: 100%;
  align-items: center;
  width: 100%;
  max-height: 100%;
  padding-top:1rem;
  margin-bottom: 1rem;
 }  


  .embla__viewport {
  overflow: hidden;
  width: 100%;
  }

  .embla__viewport.is-draggable {
  cursor: move;
  cursor: grab;
  }

  .embla__viewport.is-dragging {
  cursor: grabbing;
  }

  .embla__container {
  display: flex;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -webkit-tap-highlight-color: transparent;
  width: 100%;
  }

  .embla__slide {
 
  min-width: 100%;
  width: 100%;
  }

  .embla__slide__inner {
  display: inline-block;
  align-items: center;
  width: 100%;
  overflow: hidden;
  max-height: 350px;
  max-width: 100%; 
  
  }

  .embla__slide__img { 
  display: inline-block;
  align-items: center; 
  max-height: 350px;
  width: 1400px;
  max-width: 100%;
  cursor: pointer; 
  }

  .embla .embla__button {
  outline: 0;
  cursor: pointer;
  background-color: transparent;
  touch-action: manipulation;
  position: absolute;
  z-index: 1;
  transform: translateY(-50%);
  border: 0;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items:center;
  fill: #1bcacd;
  padding: 0;
  }

  .embla__button:disabled {
  
  cursor: default;
  opacity: 0.3;
  }

  .embla__button__svg {
  width: 100%;
  height: 100%;
  }

  .embla__button--prev {
  position: relative;
  align-items: center;
  left: 27px;
  }

  .embla__button--next {
  position: relative;
  align-items: center;
  right: 27px;
  }

  .embla__dots {
  display: flex;
  list-style: none;
  justify-content: center;
  
  }

  .embla__dot {
  background-color: transparent;
  cursor: pointer;
  position: relative;
  padding: 0;
  outline: 0;
  border: 0;
  width: 30px;
  height: 30px; 
  margin-right: 7.5px;
  margin-left: 7.5px;
  display: flex;
  align-items: center;
  }

  .embla__dot:after {
  background-color: #efefef;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  content: "";
  }

  .embla__dot.is-selected:after {
  background-color: #1bcacd;
  opacity: 1;
  }

`