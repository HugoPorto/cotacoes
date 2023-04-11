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

const Bitcoin: React.FC = () => {
    const [data, setData] = useState([]);

    const API_URL = `https://api-v1.publica-e.com/api/bitcoin`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error(error);
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
                    <IonTitle>Bitcoin</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonCard>
                    <IonCardHeader>

                        {Object.entries(data).map(([key, value]) => (
                            <IonCardTitle key={key}>Cotação: R${value}</IonCardTitle>
                        ))}
                        <IonCardSubtitle>Bitcoin</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>
                        O Bitcoin é uma criptomoeda descentralizada criada em 2009 por
                        uma pessoa ou grupo de pessoas sob o pseudônimo Satoshi Nakamoto.
                        Sua tecnologia permite transações peer-to-peer seguras e transparentes,
                        sem a necessidade de intermediários como bancos. Além disso,
                        o Bitcoin é limitado em quantidade, com um número máximo de
                        21 milhões de unidades, o que o torna deflacionário.
                        Por causa de sua natureza descentralizada, o valor do
                        Bitcoin é determinado pela oferta e demanda do mercado,
                        e é conhecido por ser altamente volátil. Nos últimos
                        anos, o Bitcoin tem sido objeto de interesse e especulação,
                        tanto como investimento quanto como forma de pagamento.
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Bitcoin;
