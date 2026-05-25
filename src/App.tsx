import { useState } from 'react';
import Header from './components/Layout/Header';
import BottomNav from './components/Layout/BottomNav';
import InspectionTab from './components/Tabs/InspectionTab';
import ForMeTab from './components/Tabs/ForMeTab';
import FarmTab from './components/Tabs/FarmTab';
import ShopTab from './components/Tabs/ShopTab';
import QRTab from './components/Tabs/QRTab';
import { TabType, UserProfile } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('inspection');
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const renderTab = () => {
    switch (activeTab) {
      case 'inspection':
        return <InspectionTab userProfile={userProfile} />;
      case 'for_me':
        return <ForMeTab userProfile={userProfile} setUserProfile={setUserProfile} />;
      case 'farm':
        return <FarmTab />;
      case 'shop':
        return <ShopTab userProfile={userProfile} />;
      case 'qr':
        return <QRTab />;
      default:
        return <InspectionTab userProfile={userProfile} />;
    }
  };

  return (
    <div className="h-[100dvh] bg-[#EAE8E4] font-sans text-gray-900 overflow-hidden">
      <div className="max-w-md mx-auto bg-[#F5F4F0] h-[100dvh] relative shadow-[0_0_40px_rgba(0,0,0,0.1)] flex flex-col">
        <Header userProfile={userProfile} />
        <main className="flex-1 p-4 overflow-y-auto hide-scrollbar pb-24 relative">
          {renderTab()}
        </main>
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
