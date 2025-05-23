import { IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import AidWiseIntroduction from '../components/AidWise-Introduction';
import AidWiseTeam from '../components/AidWise-Team'
import AidWiseFooter from '../components/AidWise-Footer'
import PKHForm from '../components/AidWise-PKH-Form';

const Tab2: React.FC = () => {
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
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <PKHForm name=''/>
        <AidWiseIntroduction name="AidWise" />
        <IonImg src='landscape.png' />
        <AidWiseFooter name=''/>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
