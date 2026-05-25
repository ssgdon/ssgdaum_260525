import { ShieldCheck, Heart, Leaf, ShoppingBag, QrCode } from 'lucide-react';
import { TabType } from '../../types';

interface Props {
  activeTab: TabType;
  setActiveTab: (t: TabType) => void;
}

export default function BottomNav({ activeTab, setActiveTab }: Props) {
  const tabs = [
    { id: 'inspection', label: '안심검사', icon: <ShieldCheck className="w-[30px] h-[30px] mb-1.5" strokeWidth={2.5} /> },
    { id: 'for_me', label: '나에게', icon: <Heart className="w-[30px] h-[30px] mb-1.5" strokeWidth={2.5} /> },
    { id: 'farm', label: '농가', icon: <Leaf className="w-[30px] h-[30px] mb-1.5" strokeWidth={2.5} /> },
    { id: 'shop', label: '쇼핑', icon: <ShoppingBag className="w-[30px] h-[30px] mb-1.5" strokeWidth={2.5} /> },
    { id: 'qr', label: 'QR 촬영', icon: <QrCode className="w-[30px] h-[30px] mb-1.5" strokeWidth={2.5} /> },
  ] as const;

  return (
    <nav className="absolute bottom-0 w-full bg-white border-t border-gray-100 pb-safe z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
      <ul className="flex justify-around items-center h-[82px]">
        {tabs.map(tab => {
          const isActive = activeTab === tab.id;
          return (
            <li key={tab.id} className="flex-1 h-full">
              <button
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`w-full h-full flex flex-col items-center justify-center transition-all duration-300 ${isActive ? 'text-seul-primary scale-105' : 'text-gray-300 hover:text-gray-400'}`}
              >
                {tab.icon}
                <span className={`text-[12.5px] tracking-tight ${isActive ? 'font-extrabold' : 'font-bold'}`}>{tab.label}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
