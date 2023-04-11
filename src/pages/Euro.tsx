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

const Euro: React.FC = () => {
    const [data, setData] = useState([]);

    const API_URL = `https://api-v1.publica-e.com/api/euro`;

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
                    <IonTitle>Euro</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonCard>
                    <IonCardHeader>

                        {Object.entries(data).map(([key, value]) => (
                            <IonCardTitle key={key}>Cotação: R${value}</IonCardTitle>
                        ))}
                        <IonCardSubtitle>Euro</IonCardSubtitle>
                    </IonCardHeader>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Euro;
