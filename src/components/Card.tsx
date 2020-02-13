import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonItem, IonLabel } from '@ionic/react';
import './Card.css';

export const Card: React.FC = () => (
  <IonContent>
    <IonCard>
      <img src="https://images.unsplash.com/photo-1513045064227-dd99581b740c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=40" />
      <IonCardHeader>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        <IonCardTitle>Card Title</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a mountain or spend a week in the woods. Wash your spirit clean. <hr/>
        <IonButton color="success">Calculate Now</IonButton>
      </IonCardContent>
    </IonCard>

  </IonContent>
);

export default Card;