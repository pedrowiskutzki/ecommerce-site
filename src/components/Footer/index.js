import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./styles";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

  
const Footer = () => {
  return (
    <Box>
      
      <Container>
        <Row>
          <Column> 
          <Heading>Sobre Nós</Heading>
            <FooterLink href="/ourHistory">Nossa História</FooterLink>
            <FooterLink href="/tendencias">Tendências</FooterLink>
            <FooterLink href="/sustentabilidade">Sustentabilidade</FooterLink>
          </Column>
          <Column>
            <Heading>Serviços</Heading>
            <FooterLink href="#">Comprar</FooterLink>
            <FooterLink href="#">Carrinho</FooterLink>
            <FooterLink href="#">Seus Pedidos</FooterLink>
            <FooterLink href="#">Solução de problemas</FooterLink>
          </Column> 
          <Column>
            
            <FooterLink href="#">
                <i className="FaFacebook">
                    <span style={{ marginLeft: "10px" }}>
                    <FaFacebook/>
                    </span>
                </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="FaInstagram">
                <span style={{ marginLeft: "10px" }}>
                  <FaInstagram/>
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="FaTwitter">
                <span style={{ marginLeft: "10px" }}>
                  <FaTwitter/>
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="FaYoutube">
                <span style={{ marginLeft: "10px" }}>
                  <FaYoutube/>
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};

export default Footer