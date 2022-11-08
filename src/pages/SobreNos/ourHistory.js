import React from "react";
import { BodyText, Column, Container, Text } from "./stylesOurHistory";



export const AboutUs = () => {
    return (
          
          <Container>
            
              <Column>
                <Text>Nossa História</Text>
                  <BodyText> Criada a partir da reunião de um grupo de Residentes do programa de ensino
                  voltado a Programação <strong>( Residência TIC/Software 2022.2 - Serratec )</strong>, a empresa <strong>O WALL LINE </strong> 
                  tem como principal objetivo ser uma plataforma de acesso intuitivo e prático para levar a seus 
                  clientes a facilidade e praticidade de escolher excelentes produtos, contando com nossos 
                  serviços personalizados.
                  Com <strong>mais de 20.000 vendas mensais</strong> , aos poucos vamos consolidando a empresa como uma referência
                  no comércio eletrônico, e também uma referência nos serviços prestados aos nossos clientes,
                  parceiros e colaboradores.</BodyText>
              </Column>             
          
              <Column>
                <Text>Missão</Text>
                 <BodyText>Nossa missão é proporcionar aos nossos <strong>colaboradores</strong>, <strong>clientes</strong> e <strong>parceiros</strong> uma experiência
                 única na forma fazermos negócios on-line, com <strong>confiança</strong>, <strong>credibilidade</strong>, <strong>agilidade</strong> e trazendo muitas <strong>oportunidades </strong>
                 de negócios para todos os envolvidos.</BodyText>
              </Column>
            
              <Column>
                <Text>Valores</Text>
                  <BodyText>Nossos valores são: <strong>honestidade</strong>, <strong>credibilidade</strong>, <strong>trabalho incessante</strong> e <strong>foco total nos serviços prestados </strong> aos nossos clientes, parceiros e colaboradores.</BodyText>
              </Column>
            
          </Container>
        
     
      );
    };

  