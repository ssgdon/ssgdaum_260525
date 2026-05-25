import { UserProfile } from '../../types';
import { CheckCircle, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';

export default function ForMeTab({ userProfile }: { userProfile: UserProfile }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-7 pb-24 tracking-tight">
       <div className="bg-white p-7 rounded-[28px] shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <h2 className="text-[18px] text-gray-500 mb-2 font-medium">안녕하세요, <span className="font-extrabold text-gray-900 text-[22px]">{userProfile.name.slice(1)}</span>님 👋</h2>
            <p className="text-[15px] font-extrabold text-seul-primary bg-seul-primary/10 inline-block px-3.5 py-2 rounded-xl mt-1">
              현재 상태 : {userProfile.status === 'pregnant' ? `임산부 (${userProfile.months}개월차)` : '일반'}
            </p>
          </div>
          <div className="w-16 h-16 bg-seul-bg rounded-full overflow-hidden border-[3px] border-white shadow-md shrink-0">
             <img src="/images/user-avatar.png" alt={userProfile.name} className="w-full h-full object-cover" />
          </div>
       </div>

       <div className="bg-white rounded-[28px] shadow-sm border border-gray-100 p-7">
         <h3 className="font-extrabold text-gray-900 flex items-center gap-2.5 mb-7 text-[20px]">
           <span className="text-[22px]">📊</span> 나의 영양 가이드
         </h3>
         <ul className="space-y-5 text-[16px] text-gray-700">
            <li className="flex justify-between items-center border-b border-gray-50 pb-4">
              <span className="text-gray-500 font-medium">권장 단백질</span>
              <span className="font-extrabold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg">75g <span className="text-gray-400 font-medium">/ 일</span></span>
            </li>
            <li className="flex justify-between items-center border-b border-gray-50 pb-4">
              <span className="text-gray-500 font-medium">권장 한우 섭취량</span>
              <span className="font-extrabold text-seul-primary bg-seul-primary/5 px-3 py-1.5 rounded-lg">주 2~3회 <span className="font-medium opacity-80">(100g)</span></span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-500 font-medium">각별한 주의사항</span>
              <span className="font-extrabold text-seul-warning text-right">생식, 고용량 비타민A<br/>피하기</span>
            </li>
         </ul>
       </div>

       <div className="bg-seul-bg rounded-[28px] p-7 border border-seul-accent/10">
         <h3 className="font-extrabold text-gray-900 flex items-center gap-2.5 mb-6 text-[22px]">
           <span className="text-[24px]">💡</span> 나에게 맞춘 스마트 추천
         </h3>

         <div className="bg-white rounded-[26px] p-6 flex gap-4 shadow-sm border border-gray-100 mb-7 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-[#E6F6ED] rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
           <div className="w-14 h-14 rounded-full bg-gray-200 shrink-0 overflow-hidden border-[3px] border-white shadow-sm relative z-10">
             <img src="/images/nutritionist.png" alt="영양사" className="w-full h-full object-cover" />
           </div>
           <div className="pt-0.5 flex-1 relative z-10">
             <p className="font-extrabold text-[15px] text-seul-primary mb-3 flex items-center gap-1">🧑‍⚕️ 김지연 전담 영양사</p>
             <p className="text-[16px] font-medium text-gray-800 leading-relaxed tracking-tight">
               "임신 중기에는 <span className="font-extrabold text-[#18A049] bg-[#E6F6ED] px-1.5 py-0.5 rounded-md">태아의 골격이 형성</span>되고 <span className="font-extrabold text-[#18A049] bg-[#E6F6ED] px-1.5 py-0.5 rounded-md">혈액량이 급증</span>하는 시기예요.<br/><br/>
               그래서 <span className="font-extrabold text-gray-900">철분과 단백질 보충</span>이 무엇보다 중요하답니다. 기운을 돋우고 영양을 가득 채울 수 있도록, 뼈 건강과 철분 보충에 특히 좋은 <span className="font-extrabold text-seul-primary">한우 안심곰탕</span>을 추천해 드릴게요!"
             </p>
           </div>
         </div>

         <div className="grid grid-cols-2 gap-4 mb-3">
            <div className="bg-white rounded-[22px] shadow-[0_4px_15px_rgba(0,0,0,0.04)] overflow-hidden border border-gray-100 hover:border-seul-primary/40 transition-all cursor-pointer">
               <div className="h-32 bg-gray-100 flex items-center justify-center p-2 relative">
                 <img src="/images/product-soup-bone.png" alt="Soup" className="w-full h-full object-cover rounded-xl" />
                 <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-md text-[11px] font-extrabold px-2 py-0.5 rounded text-seul-primary shadow-sm">영양만점</div>
               </div>
               <div className="p-4">
                 <p className="text-[12px] font-extrabold text-gray-400 mb-2">철분·단백질 듬뿍</p>
                 <p className="text-[16px] font-extrabold text-gray-900 leading-tight mb-2.5 min-h-[44px]">100% 한우<br/>안심 곰탕</p>
                 <p className="text-[17px] font-extrabold text-seul-primary">32,000원</p>
               </div>
            </div>
            <div className="bg-white rounded-[22px] shadow-[0_4px_15px_rgba(0,0,0,0.04)] overflow-hidden border border-gray-100 hover:border-seul-primary/40 transition-all cursor-pointer">
               <div className="h-32 bg-gray-100 flex items-center justify-center p-2 relative">
                 <img src="/images/product-tenderloin.png" alt="Meat" className="w-full h-full object-cover rounded-xl" />
                 <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-md text-[11px] font-extrabold px-2 py-0.5 rounded text-seul-primary shadow-sm">철분흡수</div>
               </div>
               <div className="p-4">
                 <p className="text-[12px] font-extrabold text-gray-400 mb-2">입덧 완화·기력 회복</p>
                 <p className="text-[16px] font-extrabold text-gray-900 leading-tight mb-2.5 min-h-[44px]">구이용 무항생제<br/>한우 안심 300g</p>
                 <p className="text-[17px] font-extrabold text-seul-primary">45,000원</p>
               </div>
            </div>
         </div>
       </div>

       <div>
         <h3 className="font-extrabold text-gray-900 flex items-center gap-2 mb-6 text-[22px] px-1 leading-tight">
           <AlertTriangle className="w-6 h-6 text-seul-primary shrink-0" strokeWidth={2.5}/>
           특히 {userProfile.status === 'pregnant' ? `임신 ${userProfile.months}개월차,` : ''}<br className={userProfile.status === 'pregnant' ? '' : 'hidden'}/>이 잔류물질은 조심하세요!
         </h3>

         <div className="space-y-5">
            {/* 메틸수은 카드 */}
            <div className="bg-white rounded-[28px] p-7 shadow-[0_2px_16px_rgba(45,95,63,0.04)] border border-seul-primary/10 transition-all">
                <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                    <span className="px-3 py-1.5 rounded-[10px] text-[13px] font-extrabold bg-[#F0F5F2] text-seul-primary border border-seul-primary/5">
                        중금속
                    </span>
                    <h4 className="text-[21px] font-extrabold text-gray-900">메틸수은</h4>
                </div>

                <div className="relative pt-8 pb-3 mt-4">
                    <div className="h-2.5 w-full bg-gray-100 rounded-full relative">
                        <div className="absolute top-0 left-0 h-full bg-seul-primary rounded-full transition-all duration-1000" style={{ width: '10%' }}></div>
                        
                        {/* 기준치 표시 */}
                        <div className="absolute top-[-4px] bottom-[-4px] w-[2px] bg-red-400 z-10" style={{ left: '80%' }}></div>
                        <div className="absolute top-[-26px] text-[11px] font-bold text-red-500 -translate-x-1/2 whitespace-nowrap" style={{ left: '80%' }}>
                            기준치 0.02 mg/kg
                        </div>
                        
                        {/* 검출 도트 및 텍스트 */}
                        <div className="absolute top-1/2 w-4.5 h-4.5 bg-seul-primary rounded-full -translate-y-1/2 -translate-x-1/2 border-[2.5px] border-white shadow-sm z-20" style={{ left: '10%' }}></div>
                        <div className="absolute top-5 text-[13px] font-bold text-gray-600 -translate-x-1/2 mt-1 whitespace-nowrap" style={{ left: '10%' }}>
                            검출 <span className="font-extrabold text-seul-primary">0.002</span> mg/kg
                        </div>
                    </div>
                </div>

                <div className="mt-7 pt-5 border-t border-gray-50 flex items-start gap-2.5 text-[15.5px] text-gray-700 leading-relaxed font-medium">
                    <span className="text-seul-accent text-[20px] leading-none shrink-0 translate-y-[1px]">💡</span>
                    <p><span className="font-extrabold text-seul-primary">태아의 신경계에 영향</span>을 줄 수 있는 대표적인 <span className="font-extrabold text-gray-900">1급 중금속</span>입니다.</p>
                </div>
            </div>

            {/* 테트라사이클린 카드 */}
            <div className="bg-white rounded-[28px] p-7 shadow-[0_2px_16px_rgba(45,95,63,0.04)] border border-seul-primary/10 transition-all">
                <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                    <span className="px-3 py-1.5 rounded-[10px] text-[13px] font-extrabold bg-[#F0F5F2] text-seul-primary border border-seul-primary/5">
                        항생제
                    </span>
                    <h4 className="text-[21px] font-extrabold text-gray-900">테트라사이클린</h4>
                    <span className="px-3 py-1.5 rounded-[10px] text-[13px] font-extrabold bg-[#E6F6ED] text-[#1D7B43] flex items-center leading-none tracking-tight">
                        불검출
                    </span>
                </div>

                <div className="relative pt-8 pb-3 mt-4">
                    <div className="h-2.5 w-full bg-gray-100 rounded-full relative">
                        <div className="absolute top-0 left-0 h-full bg-seul-primary rounded-full transition-all duration-1000" style={{ width: '0%' }}></div>
                        
                        {/* 기준치 표시 */}
                        <div className="absolute top-[-4px] bottom-[-4px] w-[2px] bg-red-400 z-10" style={{ left: '60%' }}></div>
                        <div className="absolute top-[-26px] text-[11px] font-bold text-red-500 -translate-x-1/2 whitespace-nowrap" style={{ left: '60%' }}>
                            기준치 0.1 mg/kg
                        </div>
                        
                        {/* 검출 도트 및 텍스트 */}
                        <div className="absolute top-1/2 w-4.5 h-4.5 bg-seul-primary rounded-full -translate-y-1/2 -translate-x-1/2 border-[2.5px] border-white shadow-sm z-20" style={{ left: '0%' }}></div>
                        <div className="absolute top-5 text-[13px] font-bold text-gray-600 mt-1 whitespace-nowrap left-0" style={{ left: '0%' }}>
                            검출 <span className="font-extrabold text-seul-primary">0</span> mg/kg
                        </div>
                    </div>
                </div>

                <div className="mt-7 pt-5 border-t border-gray-50 flex items-start gap-2.5 text-[15.5px] text-gray-700 leading-relaxed font-medium">
                    <span className="text-seul-accent text-[20px] leading-none shrink-0 translate-y-[1px]">💡</span>
                    <p>태아의 <span className="font-extrabold text-seul-primary">치아·골격 발달을 방해</span>할 수 있어 <span className="font-extrabold text-gray-900">무항생제 확인</span>이 필수입니다.</p>
                </div>
            </div>
         </div>

         <div className="mt-7 pt-5 flex items-center justify-center gap-2.5 text-[#18A049] font-extrabold text-[16px] bg-[#E6F6ED] p-5 rounded-[20px] shadow-sm">
           <CheckCircle className="w-6 h-6 shrink-0" strokeWidth={2.5}/> 안심하고 드세요! 슭다움은 94종 모두 미검출
         </div>
       </div>

    </motion.div>
  )
}
