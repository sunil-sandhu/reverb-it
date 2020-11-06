import {
  IonContent,
  IonFooter,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonRouterLink,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import PillButton from "../../components/PillButton";
import definitions from "../../data/definitions.json";
import words from "../../data/words.json";
import translationEN from "../../data/translations.json";

const StyledTitle = styled.p`
  font-size: 1.5rem;
  line-height: 1;
  font-weight: bold;
  margin: 0;
`;

const StyledButton = styled.button`
  width: 100%;
  max-width: 100px;
  padding: 7px;
  border-radius: 10px;
  background: white;
  color: black;
  font-size: 0.9rem;
  font-family: Helvetica;
  font-weight: bold;
  border: 1px solid black;
  letter-spacing: -1px;
  margin: 0 auto;
`;

const Definition: React.FC = () => {
  const params: any = useParams();
  const [definition, setDefinition]: any = useState("");
  const [word, setWord]: any = useState("");
  const [activeLanguage, setActiveLanguage] = useState("IT");

  useEffect(() => {
    setDefinition(definitions[params.wordId]);
    setWord(words[params.wordId]);
  }, [params.wordId]);

  const handleTranslation = () => {
    if (activeLanguage === "IT") {
      setDefinition(translationEN[params.wordId]);
      setWord(translationEN[params.wordId]);
      setActiveLanguage("EN");
    } else {
      setDefinition(definitions[params.wordId]);
      setWord(words[params.wordId]);
      setActiveLanguage("IT");
    }
  };

  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonItem lines="none">
            <slot slot="start">
              {" "}
              <StyledTitle>{word ? word : ""}</StyledTitle>
            </slot>
            <slot slot="end">
              <StyledButton onClick={handleTranslation}>
                {activeLanguage === "IT" ? "EN" : "IT"}
              </StyledButton>
            </slot>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonList>
          <p>{definition ? definition : ""}</p>
        </IonList>
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonToolbar>
          <div className="justify-center">
            <IonRouterLink
              routerLink="/dictionary"
              routerDirection="back"
              style={{ padding: "0 5px" }}>
              <PillButton title="Back" />
            </IonRouterLink>
          </div>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Definition;
