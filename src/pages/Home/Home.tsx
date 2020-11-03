import { IonPage, IonContent, IonRouterLink } from "@ionic/react";
import React from "react";
import styled from "styled-components";

const StyledSection = styled.div`
  width: 100%;
  height: 60%;
  padding: 30px 20px;
  display: block;
  text-align: center;
  margin: 0 auto;
`;

const StyledTitle = styled.h1`
  font-family: "Tiempos Fine Test";
  font-size: 3em;
  font-weight: bold;
  letter-spacing: -2.5px;
`;

const StyledButton = styled.button`
  margin: 6px auto;
  width: 100%;
  padding: 18px 20px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 1.5rem;
  backdrop-filter: blur(6px);
  font-family: Helvetica;
  font-weight: 600;
  border: 1px solid white;
  letter-spacing: -1px;
`;

const StyledFooter = styled.div`
  padding: 16px;
`;

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="home">
        <StyledSection>
          <StyledTitle>Reverb</StyledTitle>
        </StyledSection>

        <StyledFooter>
          <IonRouterLink routerLink="game" routerDirection="forward">
            <StyledButton>Play</StyledButton>
          </IonRouterLink>
          <IonRouterLink routerLink="dictionary" routerDirection="forward">
            <StyledButton>Progress</StyledButton>
          </IonRouterLink>
        </StyledFooter>
      </IonContent>
    </IonPage>
  );
};

export default Home;
