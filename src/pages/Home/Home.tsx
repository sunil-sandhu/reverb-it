import { IonPage, IonContent, IonRouterLink, IonFooter } from "@ionic/react";
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
  font-size: 4em;
  font-weight: bold;
  letter-spacing: -2.5px;
`;

interface StyledButtonProps {
  white?: boolean;
}

// #847D85

const StyledButton = styled.button<StyledButtonProps>`
  display: block;
  margin: 10px auto;
  width: 100%;
  max-width: 420px;
  padding: 18px 20px;
  border-radius: 20px;
  background: ${(props) => (props.white ? "rgba(255, 255, 255, 0.65)" : "rgba(0, 0, 0, 0.65)")};
  color: ${(props) => (props.white ? "rgba(0, 0, 0, 1)" : "rgba(255, 255, 255, 1)")};
  backdrop-filter: ${(props) =>
    props.white ? "blur(8px) brightness(170%);" : "blur(6px) brightness(0%) opacity(0)"};
  font-size: 1.5rem;
  font-weight: 600;
  font-family: Helvetica;
  border: 1px solid white;
  letter-spacing: -1px;
`;

const Home: React.FC = () => {
  // total words 17754
  return (
    <IonPage>
      <IonContent className="home">
        <StyledSection>
          <StyledTitle>Reverb</StyledTitle>
        </StyledSection>

        <IonFooter className="ion-padding">
          <IonRouterLink routerLink="game" routerDirection="forward">
            <StyledButton white>Play</StyledButton>
          </IonRouterLink>
          <IonRouterLink routerLink="dictionary" routerDirection="forward">
            <StyledButton>Dictionary</StyledButton>
          </IonRouterLink>
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default Home;
