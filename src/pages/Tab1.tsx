import { IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import AppTitle from '../components/AppTitle';
import './Tab1.css';
import AidWiseIntroduction from '../components/AidWise-Introduction';
import AidWiseTeam from '../components/AidWise-Team'
import AidWiseFooter from '../components/AidWise-Footer'

const Tab1: React.FC = () => {
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
            <IonTitle size="large">Homepage</IonTitle>
          </IonToolbar>
        </IonHeader>
        <AppTitle name="Aid Wise Testing" />
        <AidWiseIntroduction name="AidWise" />
        <IonImg src='landscape.png' />
        <AidWiseTeam name="Meet: Our Team"/>
        <AidWiseFooter name="AidWise"/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
