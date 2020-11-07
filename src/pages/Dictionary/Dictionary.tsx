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
import PillButton from "../../components/PillButton";
import { dbFunctions } from "../../database";
import dictionaryWords from "../../data/words.json";
import styled from "styled-components";
import { defaultStyles } from "../../config/defaultStyles";

const StyledWordBold = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1;
  margin: 0;
`;

interface StyledWordCapturedProps {
  green: boolean;
}

const StyledWordColored = styled.p<StyledWordCapturedProps>`
  font-size: 1rem;
  line-height: 1;
  margin: 0;
  color: ${(props) => (props.green ? `${defaultStyles.green}` : `${defaultStyles.red}`)};
`;

const StyledTextGreen = styled.p`
  text-align: left;
  font-weight: bold;
  color: ${defaultStyles.green};
  margin-top: 6px;
`;

const StyledTextRed = styled.p`
  text-align: left;
  font-weight: bold;
  color: ${defaultStyles.red};
  margin-top: 6px;
`;

const StyledTitle = styled.p`
  font-size: 1.5rem;
  line-height: 1;
  font-weight: bold;
  margin: 0;
`;

const Dictionary: React.FC = () => {
  const [dbDictionary, setDbDictionary]: any = useState(undefined);
  const [dictionary, setDictionary] = useState([]);
  const [dictionaryLength, setDictionaryLength]: any = useState(0);
  const [dictionaryCapturedLength, setDictionaryCapturedLength]: any = useState(0);
  useEffect(() => {
    dbFunctions
      .keys()
      .then((res: string[]) =>
        res.includes("dictionary")
          ? dbFunctions.getItem("dictionary").then((r) => setDbDictionary(r))
          : dbFunctions.setItem("dictionary", {}).then((r) => setDbDictionary(r))
      );
  }, []);

  useEffect(() => {
    if (dbDictionary) {
      let _dictionary = [];
      let _dictionaryCaptured = 0;
      Object.entries(dbDictionary).forEach((id) => {
        _dictionary.push({
          id: id,
          word: dictionaryWords[id[0]],
          captured: id[1],
        });
        if (id[1] === true) _dictionaryCaptured++;
      });
      setDictionary(_dictionary);
      setDictionaryLength(_dictionary.length);
      setDictionaryCapturedLength(_dictionaryCaptured);
    }
  }, [dbDictionary]);

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="ion-padding-horizontal ion-padding-top ">
          <StyledTitle>Dictionary</StyledTitle>

          <StyledTextRed>Seen: {dictionaryLength}/17754</StyledTextRed>
          <StyledTextGreen>Collected: {dictionaryCapturedLength}/17754</StyledTextGreen>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonList>
          {dictionaryLength > 0 ? (
            <p className="ion-padding">Select a verb to read more</p>
          ) : (
            <p className="ion-padding">Play the game to start collecting verbs</p>
          )}

          {dictionary &&
            dictionary.map((entry: { id: number; word: string; captured: boolean }) => (
              <IonRouterLink
                key={entry.id}
                routerLink={`/dictionary/${entry.id[0]}`}
                routerDirection="forward">
                <IonItem lines="none">
                  <slot slot="start">
                    <StyledWordBold>{entry.word}</StyledWordBold>
                  </slot>
                  <slot slot="end">
                    <StyledWordColored green={entry.captured}>{entry.id[0]}</StyledWordColored>
                  </slot>
                </IonItem>
              </IonRouterLink>
            ))}
        </IonList>
      </IonContent>
      <IonFooter className="ion-no-border">
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

export default Dictionary;
