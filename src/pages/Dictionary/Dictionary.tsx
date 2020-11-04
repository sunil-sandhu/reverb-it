import {
  IonContent,
  IonFooter,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import PillButton from "../../components/PillButton";

const userDictionary = [
  {
    id: 1,
    word: "Ballare",
  },
  {
    id: 19,
    word: "Dovere",
  },
  {
    id: 238,
    word: "Farfare",
  },
];

const Dictionary: React.FC = () => {
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonTitle>Dictionary</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonList>
          {userDictionary.map((entry) => (
            <IonRouterLink
              key={entry.id}
              routerLink={`/dictionary/${entry.word}`}
              routerDirection="forward">
              <IonItem lines="none">
                <slot slot="start">{entry.word}</slot>
                <slot slot="end">{entry.id}</slot>
              </IonItem>
            </IonRouterLink>
          ))}
        </IonList>
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

export default Dictionary;
