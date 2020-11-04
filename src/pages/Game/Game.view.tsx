import {
  IonContent,
  IonFooter,
  IonHeader,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
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

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-flow: column;
  display: flex;
  justify-content: center;
`;

type Color = "red" | "green" | undefined;

interface GameViewProps {
  guesses: [];
  guessMade: boolean;
  handleButtonColor: (arg0: string) => Color;
  handleGuessResponse: (arg0: string) => void;
}

const GameView: React.FC<GameViewProps> = ({
  guesses,
  guessMade,
  handleButtonColor,
  handleGuessResponse,
}) => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border ion-padding">
        <IonToolbar>
          <div className="justify-center">
            <IonTitle>score / total</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <StyledContainer>
          <StyledBoldSmallWord>voi</StyledBoldSmallWord>
          <StyledWord>bulareste</StyledWord>
          <StyledSmallWord>(bulare)</StyledSmallWord>
          <StyledSquareContainer>
            {guesses.map((guess: string) => (
              <SquareButton
                key={guess}
                title={guess}
                guessMade={guessMade}
                color={handleButtonColor(guess)}
                onClickFunc={() => handleGuessResponse(guess)}
              />
            ))}
          </StyledSquareContainer>
        </StyledContainer>
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

export default GameView;
