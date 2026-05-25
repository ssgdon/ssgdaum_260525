import { Bell, Settings } from 'lucide-react';
import { UserProfile } from '../../types';

export default function Header({ userProfile }: { userProfile: UserProfile | null }) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="px-5 h-16 flex items-center justify-between">
        <h1 className="text-[26px] font-extrabold text-seul-primary tracking-tight">슭다움</h1>
        <div className="flex items-center gap-4">
           <button className="text-gray-600 hover:text-gray-900 relative">
             <Bell className="w-6 h-6" />
             {userProfile && <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-seul-warning rounded-full border-[2.5px] border-white"></span>}
           </button>
           <button className="text-gray-600 hover:text-gray-900">
             <Settings className="w-6 h-6" />
           </button>
        </div>
      </div>
      {userProfile && (
        <div className="px-5 py-2.5 bg-seul-primary/5 border-b border-seul-primary/10 flex justify-between items-center text-[13px]">
           <span className="font-extrabold text-seul-primary tracking-tight">내 상태: {userProfile.status === 'pregnant' ? `임산부 ${userProfile.months}개월차` : '일반'}</span>
           <span className="text-gray-500 font-medium">▼ 변경</span>
        </div>
      )}
    </header>
  )
}
