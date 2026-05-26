import { useState, useRef, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Header from './components/Layout/Header';
import BottomNav from './components/Layout/BottomNav';
import InspectionTab from './components/Tabs/InspectionTab';
import ForMeTab from './components/Tabs/ForMeTab';
import FarmTab from './components/Tabs/FarmTab';
import ShopTab from './components/Tabs/ShopTab';
import QRTab from './components/Tabs/QRTab';
import { TabType, UserProfile } from './types';

// 로그인 흐름 제거 — 기본 진입 시 항상 로그인된 상태(임신 중기 5개월차)로 시작
const DEFAULT_PROFILE: UserProfile = {
  name: '김예지',
  gender: 'female',
  age: 32,
  status: 'pregnant',
  months: 5,
};

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('inspection');
  const [userProfile] = useState<UserProfile>(DEFAULT_PROFILE);
  const mainRef = useRef<HTMLElement>(null);
  const [showTopBtn, setShowTopBtn] = useState(false);

  // 탭 전환 시 무조건 최상단으로
  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0, behavior: 'auto' });
  }, [activeTab]);

  // 스크롤 위치에 따라 "위로 가기" 버튼 노출
  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;
    const onScroll = () => setShowTopBtn(el.scrollTop > 320);
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' });

  const renderTab = () => {
    switch (activeTab) {
      case 'inspection':
        return <InspectionTab userProfile={userProfile} />;
      case 'for_me':
        return <ForMeTab userProfile={userProfile} />;
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
        <main ref={mainRef} className="flex-1 px-5 py-5 overflow-y-auto hide-scrollbar pb-28 relative">
          {renderTab()}
        </main>

        {/* 위로 가기 버튼 — 하단 네비 위에 떠 있는 FAB */}
        <button
          onClick={scrollToTop}
          aria-label="맨 위로"
          className={`absolute right-5 bottom-[100px] z-40 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-[0_4px_14px_rgba(0,0,0,0.12)] flex items-center justify-center text-seul-primary transition-all duration-300 active:scale-95 hover:scale-105 ${showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
        >
          <ArrowUp className="w-[22px] h-[22px]" strokeWidth={2.75} />
        </button>

        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
