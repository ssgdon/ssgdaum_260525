import { Search, Star, ChevronRight, Calendar } from 'lucide-react';
import { UserProfile } from '../../types';
import { motion } from 'motion/react';

export default function ShopTab({ userProfile }: { userProfile: UserProfile | null }) {
  const isPregnant = userProfile?.status === 'pregnant';

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8 pb-20 tracking-tight">
       {/* Search */}
       <div className="relative">
         <div className="bg-white border-2 border-gray-100 rounded-2xl flex items-center shadow-sm overflow-hidden focus-within:border-seul-primary transition-colors">
            <div className="pl-4 pr-2 py-3.5 text-gray-400">
                <Search className="w-5 h-5" />
            </div>
            <input type="text" placeholder="안심 한우, 부위별 검색" className="w-full py-3.5 pr-4 text-[15px] font-bold focus:outline-none placeholder:text-gray-400" />
         </div>
       </div>

       {/* Recommendation if logged in & profile exists */}
       {userProfile && (
         <div className="bg-gradient-to-br from-seul-bg via-white to-seul-bg rounded-3xl p-6 border border-seul-primary/10 shadow-sm relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-seul-accent/5 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
           
           <h3 className="font-extrabold text-gray-900 flex items-center gap-2 mb-5 relative z-10 text-[19px]">
             <span className="text-xl">💡</span> 
             {isPregnant ? `${userProfile.months}개월차 임산부 추천` : '나에게 딱 맞는 추천'}
           </h3>
           <div className="flex gap-4 overflow-x-auto pb-2 snap-x hide-scrollbar relative z-10">
             {[
               { id: 1, name: 'PURE 한우 갈비탕', desc: '화학 첨가물 Zero', price: '32,000원', img: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=300&auto=format&fit=crop', rating: 4.9 },
               { id: 2, name: '무항생제 다짐육', desc: '이유식, 영양식 필수', price: '28,000원', img: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=300&auto=format&fit=crop', rating: 5.0 },
             ].map((item) => (
                <div key={item.id} className="min-w-[160px] w-[160px] bg-white rounded-2xl shadow-sm overflow-hidden border border-white snap-start flex-shrink-0 group cursor-pointer hover:border-seul-primary/30 transition-all">
                   <div className="h-32 bg-gray-100 relative overflow-hidden">
                     <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                     <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-md text-[10px] px-1.5 py-0.5 rounded font-extrabold text-gray-800 flex items-center gap-1 shadow-sm">
                       <Star className="w-3 h-3 fill-seul-accent text-seul-accent" /> {item.rating}
                     </div>
                   </div>
                   <div className="p-3.5">
                     <p className="text-[11px] font-bold text-gray-400 mb-1.5">{item.desc}</p>
                     <p className="text-[15px] font-extrabold text-gray-900 leading-tight mb-2 line-clamp-2 min-h-[44px]">{item.name}</p>
                     <p className="text-[15px] font-extrabold text-seul-primary">{item.price}</p>
                   </div>
                </div>
             ))}
           </div>
         </div>
       )}

       {/* Categories */}
       <div>
         <div className="flex justify-between items-center mb-4">
           <h3 className="font-extrabold text-gray-900 text-[19px]">카테고리</h3>
         </div>
         <div className="flex gap-2.5 mb-6 hide-scrollbar overflow-x-auto pb-1">
           {['전체', '원육', '간편식', '선물세트', '정기구독'].map((cat, i) => (
             <button key={cat} className={`flex-shrink-0 px-5 py-2.5 rounded-xl text-[15px] font-extrabold shadow-sm transition-colors ${i === 2 && !userProfile ? 'bg-seul-primary text-white border-none' : i === 0 && userProfile ? 'bg-seul-primary text-white border-none' : 'bg-white border-2 border-gray-100 text-gray-700 hover:border-seul-primary/50'}`}>
               {cat}
             </button>
           ))}
         </div>
       </div>

       {/* Subscriptions Banner */}
       <div className="bg-[#18A049] text-white rounded-[24px] p-6 flex flex-col justify-center shadow-[0_4px_20px_rgba(24,160,73,0.2)] relative overflow-hidden h-[120px]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
          <div className="absolute right-[-10px] bottom-[-20px] w-[130px] h-[130px] border-[12px] border-white/10 rounded-full"></div>
          <div className="relative z-10 w-full flex justify-between items-center">
            <div>
              <h3 className="font-extrabold text-[19px] mb-1.5 leading-tight tracking-tight">매월 알아서 챙겨주는</h3>
              <p className="text-white/90 text-[14.5px] font-bold tracking-tight">슭다움 안심 정기구독</p>
            </div>
            <button className="bg-white text-[#18A049] text-[13.5px] font-extrabold px-4.5 py-3 rounded-[14px] flex items-center justify-center shadow-sm hover:scale-105 transition-transform active:scale-95 shrink-0 gap-1.5">
               <Calendar className="w-4 h-4" /> 자세히 보기
            </button>
          </div>
       </div>

       {/* Best Sellers */}
       <div>
         <div className="flex justify-between items-center mb-5">
           <h3 className="font-extrabold text-gray-900 text-[19px]">🌟 주간 베스트</h3>
           <button className="text-[14px] font-bold text-gray-400 flex items-center hover:text-gray-900 transition">더보기 <ChevronRight className="w-4 h-4" /></button>
         </div>
         <div className="space-y-4">
            {[1,2,3].map((i) => (
               <div key={i} className="flex gap-4 bg-white p-3.5 rounded-[20px] shadow-sm border border-gray-100 items-center cursor-pointer hover:border-seul-primary/50 hover:shadow-md transition-all group">
                 <div className="w-24 h-24 bg-gray-100 rounded-2xl overflow-hidden shrink-0">
                   <img src={`https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=200&auto=format&fit=crop&sig=${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="item" />
                 </div>
                 <div className="flex-1 pr-2">
                    <div className="flex gap-1.5 mb-2">
                       <p className="text-[11px] font-extrabold text-[#18A049] bg-[#E6F6ED] inline-block px-2 py-0.5 rounded-[6px]">유기농</p>
                       <p className="text-[11px] font-extrabold text-[#18A049] bg-[#E6F6ED] inline-block px-2 py-0.5 rounded-[6px]">동물복지</p>
                    </div>
                    <h4 className="font-extrabold text-gray-900 text-[15px] mb-1.5 leading-snug">
                      [0.001% 한우] 안심 한우 등심 200g<br/>
                      <span className="text-[13px] font-medium text-gray-500 mt-1 inline-block">구이·스테이크용 추천</span>
                    </h4>
                    <div className="flex justify-between items-end mt-2">
                       <span className="font-extrabold text-gray-900 text-[17px]">36,000원</span>
                       <span className="text-[11px] font-bold text-gray-400 flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-gray-300 text-gray-300" /> 452</span>
                    </div>
                 </div>
               </div>
            ))}
         </div>
       </div>
    </motion.div>
  )
}
