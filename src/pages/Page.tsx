import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle
} from '@ionic/react';

import { IonItem, IonLabel, IonList } from '@ionic/react';
import { useParams } from 'react-router';
import './Page.css';
import React, { useState, useEffect } from 'react';

const Page: React.FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = `https://api-v1.publica-e.com/api/moedas`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>BEM-VINDO!</IonCardTitle>
            <IonCardSubtitle>My Coins</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            O nosso aplicativo de cotações oferece uma maneira rápida e
            fácil de acompanhar o preço das suas criptomoedas e moedas
            fiduciárias favoritas em tempo real. Com uma
            interface intuitiva e atualizações de preços em tempo real,
            você pode ficar por dentro das últimas tendências de mercado,
            monitorar suas carteiras e tomar decisões informadas de
            investimento. Esteja você procurando por Bitcoin, Ethereum,
            Litecoin, ou qualquer outra moeda, o nosso aplicativo de
            cotações é a escolha perfeita para os entusiastas de
            criptomoedas e investidores de todos os níveis de
            experiência. Baixe agora e comece a acompanhar
            suas cotações favoritas!.
          </IonCardContent>
        </IonCard>

        <IonList>
          {Object.entries(data).map(([key, value]) => (

            <IonItem key={key}>
              <IonLabel>{key}: {value}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>

    </IonPage>
  );
};

export default Page;
