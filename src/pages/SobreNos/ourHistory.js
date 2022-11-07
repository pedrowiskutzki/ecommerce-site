import React from "react";
import { BodyText, Box, Column, Container, Row, Text } from "./stylesOurHistory";



export const AboutUs = () => {
    return (
          
          <Container>
            
              <Column>
                <Text>Nossa História</Text>
                  <BodyText> Criada a partir da reunião de um grupo de Residentes do programa de ensino
                  voltado a Programação ( Residência TIC/Software 2022.2 - Serratec ), a empresa O WALL LINE
                  tem como principal objetivo ser uma plataforma de acesso intuitivo e prático para levar a seus 
                  clientes a facilidade e praticidade de escolher excelentes produtos, contando com nossos 
                  serviços personalizados.
                  Com mais de 20.000 vendas mensais, aos poucos vamos consolidando a empresa como uma referência
                  no comércio eletrônico, e também uma referência nos serviços prestados aos nossos clientes,
                  parceiros e colaboradores.</BodyText>
              </Column>             
          
              <Column>
                <Text>Missão</Text>
                 <BodyText>Nossa missão é proporcionar aos nossos Colaboradores, Clientes e Parceiros uma experiência
                 única na forma fazermos negócios on-Line, com confiança, credibilidade, agilidade e trazendo muitas oportunidades
                 de negócios para todos os envolvidos.</BodyText>
              </Column>
            
              <Column>
                <Text>Valores</Text>
                  <BodyText>Nossos Valores são: Honestidade, Credibilidade, Trabalho incessante e foco total nos serviços
                  prestados aos nossos Clientes, Parceiros e Colaboradores.</BodyText>
              </Column>
            
          </Container>
        
     
      );
    };

  