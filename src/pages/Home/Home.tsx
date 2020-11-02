import { IonContent, IonRouterLink } from "@ionic/react";
import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  background: url("assets/img/home-bg.png");
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
`;

const StyledContent = styled.div`
  display: flex;
  height: 100%;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StyledSection = styled.div`
  width: 100%;
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

const Home: React.FC = () => {
  return (
    <IonContent>
      <StyledContainer>
        <StyledContent>
          <StyledSection>
            <StyledTitle>Reverb</StyledTitle>
          </StyledSection>
          <StyledSection>
            <IonRouterLink routerLink="game" routerDirection="forward">
              <StyledButton>Play</StyledButton>
            </IonRouterLink>
            <IonRouterLink routerLink="dictionary" routerDirection="forward">
              <StyledButton>Dictionary</StyledButton>
            </IonRouterLink>
          </StyledSection>
        </StyledContent>
      </StyledContainer>
    </IonContent>
  );
};

export default Home;
