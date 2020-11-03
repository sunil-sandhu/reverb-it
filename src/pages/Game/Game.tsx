import {
  IonContent,
  IonFooter,
  IonHeader,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import styled from "styled-components";
import PillButton from "../../components/PillButton";
import SquareButton from "../../components/SquareButton";

const StyledSquareContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-flow: row wrap;
`;

const StyledWord = styled.p`
  font-size: 2.5rem;
  text-align: center;
  font-weight: bold;
`;

const StyledSmallWord = styled.p`
  font-size: 1rem;
  text-align: center;
  line-height: 2;
`;

const StyledBoldSmallWord = styled.p`
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
`;

const Game: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border ion-padding">
        <IonToolbar>
          <IonTitle>score / total</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <StyledBoldSmallWord>voi</StyledBoldSmallWord>
        <StyledWord>bulareste</StyledWord>
        <StyledSmallWord>(bulare)</StyledSmallWord>
        <StyledSquareContainer>
          <SquareButton title="something" />
          <SquareButton title="something" />
          <SquareButton title="something" />
          <SquareButton title="something" />
        </StyledSquareContainer>
      </IonContent>
      <IonFooter className="ion-no-border ion-padding">
        <IonToolbar>
          <div className="justify-center">
            <IonRouterLink routerLink="/home" routerDirection="back" style={{ padding: "0 5px" }}>
              <PillButton title="Home" />
            </IonRouterLink>
          </div>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Game;
