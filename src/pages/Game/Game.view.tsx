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

interface StyledWordProps {
  length?: number;
}

const StyledWord = styled.p<StyledWordProps>`
  min-height: ${(props) => (props.length > 20 ? `auto` : "40px")};
  font-size: ${(props) => (props.length > 15 ? `1.8rem` : props.length > 12 ? "2rem" : "2.5rem")};
  text-align: center;
  font-weight: bold;
`;

const StyledSmallWord = styled.p`
  font-size: 1rem;
  text-align: center;
  line-height: 1;
  margin: 8px 0;
`;

const StyledSmallWordItalic = styled.em`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  line-height: 1;
  margin: 20px 0 0;
`;

const StyledSmallWordBold = styled.p`
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
  line-height: 1;
  margin: 8px 0 0;
  min-height: 19px;
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-flow: column;
  display: flex;
  justify-content: center;
`;

type Color = "red" | "green" | undefined;

interface QuestionObject {
  question: string;
  answer: string;
  options: string[];
  person: string;
  tense: string;
  infinitive: string;
}

interface GameViewProps {
  question: QuestionObject;
  guessMade: boolean;
  score: number[];
  handleButtonColor: (arg0: string) => Color;
  handleGuessResponse: (arg0: string) => void;
}

const GameView: React.FC<GameViewProps> = ({
  question,
  guessMade,
  score,
  handleButtonColor,
  handleGuessResponse,
}) => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border ion-padding-top">
        <IonToolbar>
          <div className="justify-center">
            <IonTitle>
              <StyledSmallWordBold>
                {score[0]}/{score[1]}
              </StyledSmallWordBold>
            </IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {question.question && (
          <StyledContainer>
            <StyledSmallWord>({question.infinitive})</StyledSmallWord>
            <StyledSmallWordBold>{question.person}</StyledSmallWordBold>
            <StyledWord length={question.question.length}>{question.question}</StyledWord>
            <StyledSmallWordItalic>{question.tense}</StyledSmallWordItalic>
            <StyledSquareContainer>
              {question.options &&
                question.options.map((guess: string) => (
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
        )}
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonToolbar>
          <div className="justify-center">
            <IonRouterLink routerLink="/home" routerDirection="back" style={{ padding: "0 5px" }}>
              <PillButton title="Home" disabled={guessMade} />
            </IonRouterLink>
          </div>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default GameView;
