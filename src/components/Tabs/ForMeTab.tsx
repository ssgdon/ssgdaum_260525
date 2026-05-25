import { useState } from 'react';
import { UserProfile } from '../../types';
import { MessageCircle, ShieldCheck, CheckCircle, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';

export default function ForMeTab({ userProfile, setUserProfile }: { userProfile: UserProfile | null, setUserProfile: (p: UserProfile) => void }) {
  const [onboardingStep, setOnboardingStep] = useState(0);

  if (!userProfile) {
    if (onboardingStep === 0) {
      return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center min-h-[60vh] px-5 text-center tracking-tight">
           <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
             <ShieldCheck className="w-8 h-8 text-seul-primary" />
           </div>
           <h2 className="text-[22px] font-extrabold mb-3 text-gray-900">로그인이 필요합니다</h2>
           <p className="text-gray-500 mb-10 text-[15px] leading-relaxed">당신의 상태에 맞춘 성분 영향도 분석과<br/>가장 안전한 섭취 가이드를 받아보세요.</p>
           
           <div className="w-full space-y-3">
               <button onClick={() => setOnboardingStep(1)} className="w-full bg-[#FEE500] text-black font-extrabold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#FADC00] transition-colors shadow-sm text-[15px]">
                 <MessageCircle className="w-5 h-5" />
                 카카오톡으로 시작하기
               </button>
               <button onClick={() => setOnboardingStep(1)} className="w-full bg-[#03C75A] text-white font-extrabold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#02b350] transition-colors shadow-sm text-[15px]">
                 <span className="font-bold italic text-lg px-2 text-white">N</span>
                 네이버로 시작하기
               </button>
           </div>
        </motion.div>
      )
    }

    if (onboardingStep === 1) {
       return (
         <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="py-8 px-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">김예지님, 환영합니다 👋</h2>
            <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm border border-gray-100">
              <h3 className="text-sm font-bold text-gray-400 mb-5">간편인증으로 등록된 정보</h3>
              <ul className="space-y-4">
                 <li className="flex justify-between items-center"><span className="text-gray-500 text-sm">이름</span><span className="font-bold text-gray-900">김예지</span></li>
                 <li className="flex justify-between items-center"><span className="text-gray-500 text-sm">성별</span><span className="font-bold text-gray-900">여성</span></li>
                 <li className="flex justify-between items-center"><span className="text-gray-500 text-sm">연령</span><span className="font-bold text-gray-900">32세</span></li>
              </ul>
            </div>
            <p className="text-center font-bold text-gray-900 mb-8">이 정보를 프로필로 사용하시겠습니까?</p>
            <div className="flex gap-3">
               <button onClick={() => setOnboardingStep(2)} className="flex-1 bg-seul-primary text-white py-4 rounded-xl font-bold shadow-sm">예, 사용합니다</button>
               <button onClick={() => setOnboardingStep(0)} className="flex-1 bg-gray-100 text-gray-500 py-4 rounded-xl font-bold">아니오</button>
            </div>
         </motion.div>
       )
    }

    if (onboardingStep === 2) {
       return (
         <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="py-6 px-4">
            <div className="bg-seul-bg/50 p-4 rounded-xl mb-6 inline-block">
                <span className="text-3xl">🏥</span>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 leading-tight">산부인과 방문 이력이<br/>확인되었습니다.</h2>
            <p className="text-gray-500 mb-10 text-sm leading-relaxed">현재 임신 중이신가요? 상황에 맞게 유해물질 기준을 훨씬 더 보수적이고 안전하게 적용합니다.</p>
            <div className="space-y-3">
               <button onClick={() => setOnboardingStep(3)} className="w-full bg-white border-2 border-seul-primary/20 hover:border-seul-primary text-seul-primary py-5 rounded-2xl font-bold text-lg transition-colors shadow-sm text-left px-6">네, 임신 중입니다 👶</button>
               <button onClick={() => {
                   setUserProfile({ name: '김예지', gender: 'female', age: 32, status: 'none' });
               }} className="w-full bg-gray-50 text-gray-500 py-4 rounded-2xl font-medium transition-colors">아니요</button>
            </div>
         </motion.div>
       )
    }

    if (onboardingStep === 3) {
       return (
         <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="py-6 px-5 tracking-tight">
            <h2 className="text-[22px] font-extrabold mb-4 text-gray-900">임신 몇 개월차이신가요?</h2>
            <p className="text-gray-500 mb-8 text-[15px]">주수별 필수 영양소와 피해야 할 성분을 맞춤 분석해 드립니다.</p>
            <div className="grid grid-cols-1 gap-3">
               {[
                 { label: '임신 초기', range: '1-3개월', m: 2 },
                 { label: '임신 중기', range: '4-6개월', m: 5 },
                 { label: '임신 후기', range: '7-9개월', m: 8 },
               ].map(opt => (
                 <button key={opt.label} onClick={() => {
                   setUserProfile({ name: '김예지', gender: 'female', age: 32, status: 'pregnant', months: opt.m });
                 }} className="bg-white border-[1.5px] border-gray-100 py-5 px-6 rounded-2xl text-left flex justify-between items-center hover:border-seul-primary transition-all shadow-sm">
                    <span className="font-extrabold text-gray-900 text-lg">{opt.label}</span>
                    <span className="text-gray-400 text-[15px] font-medium">{opt.range}</span>
                 </button>
               ))}
            </div>
         </motion.div>
       )
    }

  }

  // Logged in UI
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 pb-20 tracking-tight">
       <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <h2 className="text-[17px] text-gray-500 mb-1.5 font-medium">안녕하세요, <span className="font-extrabold text-gray-900 text-[19px]">김예지</span>님 👋</h2>
            <p className="text-[14px] font-extrabold text-seul-primary bg-seul-primary/10 inline-block px-3 py-1.5 rounded-lg mt-1">
              현재 상태: {userProfile.status === 'pregnant' ? `임산부 (${userProfile.months}개월차)` : '일반'}
            </p>
          </div>
          <div className="w-14 h-14 bg-seul-bg rounded-full overflow-hidden border-2 border-white shadow-sm flex items-center justify-center">
             <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=FAF7F2" alt="avatar" className="w-10 h-10" />
          </div>
       </div>

       <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
         <h3 className="font-extrabold text-gray-900 flex items-center gap-2 mb-6 text-[17px]">
           <span className="text-xl">📊</span> 나의 영양 가이드
         </h3>
         <ul className="space-y-4 text-[15px] text-gray-700">
            <li className="flex justify-between items-center border-b border-gray-50 pb-3.5">
              <span className="text-gray-500 font-medium">권장 단백질</span>
              <span className="font-extrabold text-gray-900 bg-gray-50 px-2.5 py-1 rounded-md">75g <span className="text-gray-400 font-medium">/ 일</span></span>
            </li>
            <li className="flex justify-between items-center border-b border-gray-50 pb-3.5">
              <span className="text-gray-500 font-medium">권장 한우 섭취량</span>
              <span className="font-extrabold text-seul-primary bg-seul-primary/5 px-2.5 py-1 rounded-md">주 2~3회 <span className="font-medium opacity-80">(100g)</span></span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-500 font-medium">각별한 주의사항</span>
              <span className="font-extrabold text-seul-warning">생식, 고용량 비타민A 피하기</span>
            </li>
         </ul>
       </div>

       <div className="bg-seul-bg rounded-3xl p-6 border border-seul-accent/10">
         <h3 className="font-extrabold text-gray-900 flex items-center gap-2 mb-5 text-[19px]">
           <span className="text-xl">💡</span> 나에게 맞춘 스마트 추천
         </h3>

         <div className="bg-white rounded-[24px] p-5 flex gap-4 shadow-sm border border-gray-100 mb-6 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-[#E6F6ED] rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
           <div className="w-12 h-12 rounded-full bg-gray-200 shrink-0 overflow-hidden border-2 border-white shadow-sm relative z-10">
             <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop" alt="영양사" />
           </div>
           <div className="pt-0.5 flex-1 relative z-10">
             <p className="font-extrabold text-[14px] text-seul-primary mb-2.5 flex items-center gap-1">🧑‍⚕️ 김지연 전담 영양사</p>
             <p className="text-[15px] font-medium text-gray-800 leading-relaxed tracking-tight">
               "임신 중기에는 <span className="font-extrabold text-[#18A049] bg-[#E6F6ED] px-1.5 py-0.5 rounded-md">태아의 골격이 형성</span>되고 <span className="font-extrabold text-[#18A049] bg-[#E6F6ED] px-1.5 py-0.5 rounded-md">혈액량이 급증</span>하는 시기예요.<br/><br/>
               그래서 <span className="font-extrabold text-gray-900">철분과 단백질 보충</span>이 무엇보다 중요하답니다. 기운을 돋우고 영양을 가득 채울 수 있도록, 뼈 건강과 철분 보충에 특히 좋은 <span className="font-extrabold text-seul-primary">한우 안심곰탕</span>을 추천해 드릴게요!"
             </p>
           </div>
         </div>

         <div className="grid grid-cols-2 gap-4 mb-3">
            <div className="bg-white rounded-[20px] shadow-[0_4px_15px_rgba(0,0,0,0.03)] overflow-hidden border border-gray-100 hover:border-seul-primary/40 transition-all cursor-pointer">
               <div className="h-28 bg-gray-100 flex items-center justify-center p-2 relative">
                 <img src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=200&auto=format&fit=crop" alt="Soup" className="w-full h-full object-cover rounded-xl" />
                 <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-md text-[10px] font-extrabold px-2 py-0.5 rounded text-seul-primary shadow-sm">영양만점</div>
               </div>
               <div className="p-4">
                 <p className="text-[11px] font-extrabold text-gray-400 mb-1.5">철분·단백질 듬뿍</p>
                 <p className="text-[15px] font-extrabold text-gray-900 leading-tight mb-2 h-10">100% 한우<br/>안심 곰탕</p>
                 <p className="text-[15px] font-extrabold text-seul-primary">32,000원</p>
               </div>
            </div>
            <div className="bg-white rounded-[20px] shadow-[0_4px_15px_rgba(0,0,0,0.03)] overflow-hidden border border-gray-100 hover:border-seul-primary/40 transition-all cursor-pointer">
               <div className="h-28 bg-gray-100 flex items-center justify-center p-2 relative">
                 <img src="https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=200&auto=format&fit=crop" alt="Meat" className="w-full h-full object-cover rounded-xl" />
                 <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-md text-[10px] font-extrabold px-2 py-0.5 rounded text-seul-primary shadow-sm">철분흡수</div>
               </div>
               <div className="p-4">
                 <p className="text-[11px] font-extrabold text-gray-400 mb-1.5">입덧 완화·기력 회복</p>
                 <p className="text-[15px] font-extrabold text-gray-900 leading-tight mb-2 h-10">구이용 무항생제<br/>한우 안심 300g</p>
                 <p className="text-[15px] font-extrabold text-seul-primary">45,000원</p>
               </div>
            </div>
         </div>
       </div>

       <div>
         <h3 className="font-extrabold text-gray-900 flex items-center gap-1.5 mb-5 text-[19px] px-1">
           <AlertTriangle className="w-5 h-5 text-seul-primary" strokeWidth={2.5}/> 
           특히 {userProfile.status === 'pregnant' ? `임신 ${userProfile.months}개월차, ` : ''}이 잔류물질은 조심하세요!
         </h3>

         <div className="space-y-4">
            {/* 메틸수은 카드 */}
            <div className="bg-white rounded-[24px] p-6 shadow-[0_2px_16px_rgba(45,95,63,0.04)] border border-seul-primary/10 transition-all">
                <div className="flex items-center gap-2.5 mb-2">
                    <span className="px-2.5 py-1 rounded-[8px] text-[12px] font-extrabold bg-[#F0F5F2] text-seul-primary border border-seul-primary/5">
                        중금속
                    </span>
                    <h4 className="text-[18px] font-extrabold text-gray-900">메틸수은</h4>
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

                <div className="mt-7 pt-5 border-t border-gray-50 flex items-start gap-2.5 text-[14px] text-gray-700 leading-relaxed font-medium">
                    <span className="text-seul-accent text-[18px] leading-none shrink-0 translate-y-[1px]">💡</span>
                    <p><span className="font-extrabold text-seul-primary">태아의 신경계에 영향</span>을 줄 수 있는 대표적인 <span className="font-extrabold text-gray-900">1급 중금속</span>입니다.</p>
                </div>
            </div>

            {/* 테트라사이클린 카드 */}
            <div className="bg-white rounded-[24px] p-6 shadow-[0_2px_16px_rgba(45,95,63,0.04)] border border-seul-primary/10 transition-all">
                <div className="flex items-center gap-2.5 mb-2">
                    <span className="px-2.5 py-1 rounded-[8px] text-[12px] font-extrabold bg-[#F0F5F2] text-seul-primary border border-seul-primary/5">
                        항생제
                    </span>
                    <h4 className="text-[18px] font-extrabold text-gray-900">테트라사이클린</h4>
                    <span className="px-2.5 py-1 rounded-[8px] text-[12px] font-extrabold bg-[#E6F6ED] text-[#1D7B43] flex items-center leading-none tracking-tight">
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

                <div className="mt-7 pt-5 border-t border-gray-50 flex items-start gap-2.5 text-[14px] text-gray-700 leading-relaxed font-medium">
                    <span className="text-seul-accent text-[18px] leading-none shrink-0 translate-y-[1px]">💡</span>
                    <p>태아의 <span className="font-extrabold text-seul-primary">치아·골격 발달을 방해</span>할 수 있어 <span className="font-extrabold text-gray-900">무항생제 확인</span>이 필수입니다.</p>
                </div>
            </div>
         </div>

         <div className="mt-6 pt-5 flex items-center justify-center gap-2.5 text-[#18A049] font-extrabold text-[15px] bg-[#E6F6ED] p-4 rounded-[16px] shadow-sm">
           <CheckCircle className="w-5 h-5" strokeWidth={2.5}/> 안심하고 드세요! 슭다움은 94종 모두 미검출
         </div>
       </div>

    </motion.div>
  )
}
