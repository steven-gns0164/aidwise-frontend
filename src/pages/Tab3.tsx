import { IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import AidWiseIntroduction from '../components/AidWise-Introduction';
import AidWiseTeam from '../components/AidWise-Team'
import AidWiseFooter from '../components/AidWise-Footer'

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="custom-toolbar">
          <div className="toolbar-left">
            <img src="Logo-horizontal.png" alt="AidWise Logo" className="logo" />
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <AidWiseIntroduction name="AidWise" />
        <IonImg src='landscape.png' />
        <AidWiseFooter name="AidWise"/>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
