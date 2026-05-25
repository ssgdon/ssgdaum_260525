import { Bell, Settings } from 'lucide-react';
import { UserProfile } from '../../types';

export default function Header({ userProfile }: { userProfile: UserProfile }) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="px-6 h-[68px] flex items-center justify-between">
        <h1 className="text-[30px] font-black text-seul-primary tracking-tight">슭다움</h1>
        <div className="flex items-center gap-5">
           <button className="text-gray-700 hover:text-gray-900 relative">
             <Bell className="w-[26px] h-[26px]" />
             <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-seul-warning rounded-full border-[2.5px] border-white"></span>
           </button>
           <button className="text-gray-700 hover:text-gray-900">
             <Settings className="w-[26px] h-[26px]" />
           </button>
        </div>
      </div>
      <div className="px-6 py-3 bg-seul-primary/5 border-b border-seul-primary/10 flex justify-between items-center text-[14.5px]">
         <span className="font-extrabold text-seul-primary tracking-tight">내 상태 : {userProfile.status === 'pregnant' ? `임산부 ${userProfile.months}개월차` : '일반'}</span>
         <span className="text-gray-500 font-bold">▼ 변경</span>
      </div>
    </header>
  )
}
