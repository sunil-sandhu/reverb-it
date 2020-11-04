import {
  IonContent,
  IonFooter,
  IonHeader,
  IonList,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { useParams } from "react-router";
import PillButton from "../../components/PillButton";

const Definition: React.FC = () => {
  const params: any = useParams();
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonTitle>{params.word}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonList>
          <p>
            word definition word definition word definition word definition word definition word
            definition word definition word definition word definition word definition word
            definition word definition word definition word definition word definition word
            definition word definition word definition word definition word definition word
            definition word definition word definition word definition word definition word
            definition word definition word definition word definition word definition word
            definition word definition word definition word definition word definition word
            definition word definition word definition word definition word definition word
            definition word definition word definition word definition word definition word
            definition word definition word definition word definition word definition word
            definition word definition word definition word definition word definition word
            definition word definition word definition word definition word definition word
            definition word definition word definition word definition word definition word
            definition word definition word definition word definition word definition word
            definition word definition word definition word definition word definition word
            definition word definition word definition word definition word definition word
            definition word definition word definition word definition word definition word
            definition word definition word definition word definition word definition{" "}
          </p>
        </IonList>
      </IonContent>
      <IonFooter className="ion-no-border ion-padding">
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
