import { Capacitor, Plugins } from "@capacitor/core";
import { IonPage, IonContent, IonRouterLink, IonFooter } from "@ionic/react";
import React, { useEffect } from "react";
import styled from "styled-components";
import { dbFunctions } from "../../database";

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
  color: black;
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

// if there's no dictionary item in the db, go ahead and create it
(async () => {
  let keys = await dbFunctions.keys().then((res) => res);
  if (!keys.includes("dictionary")) {
    dbFunctions.setItem("dictionary", {});
  }
})();

const Home: React.FC = () => {
  useEffect(() => {
    if (Capacitor.isNative) {
      Plugins.App.addListener("backButton", () => {
        if (window.location.pathname === "/" || window.location.pathname === "/home") {
          Plugins.App.exitApp();
        }
      });
    }
  }, []);
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
            <StyledButton white>Your Dictionary</StyledButton>
          </IonRouterLink>
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default Home;
