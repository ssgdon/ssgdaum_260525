import { PlayCircle, MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FarmTab() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-7 pb-24 tracking-tight">
       {/* Farm Info */}
       <div className="bg-white rounded-[28px] shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden">
         <div className="h-48 bg-gray-900 relative">
           <img src="/images/farm-hero.png" alt="농장" className="w-full h-full object-cover opacity-80" />
           <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
           <div className="absolute bottom-6 left-7 text-white z-10">
             <span className="bg-[#18A049] text-white text-[12.5px] px-3 py-1.5 rounded-[10px] mb-3 inline-block font-extrabold shadow-sm">국내 상위 1% 전용 목장</span>
             <h2 className="text-[30px] font-extrabold leading-tight tracking-tight">해남 현우농장</h2>
           </div>
         </div>
         <div className="p-7">
            <div className="flex gap-4 items-start mb-7">
              <div className="w-[72px] h-[72px] rounded-full bg-gray-100 overflow-hidden shrink-0 shadow-md border-[3px] border-white -mt-12 relative z-10">
                <img src="/images/farmer.png" alt="농장주" className="w-full h-full object-cover" />
              </div>
              <div className="pt-1">
                <h3 className="font-extrabold text-gray-900 text-[20px]">김현우 농장주</h3>
                <p className="text-[13.5px] text-[#18A049] font-bold mt-1.5 bg-[#E6F6ED] px-2.5 py-1 rounded-[8px] inline-block">유기축산 인증 12년 · 동물복지</p>
              </div>
            </div>

            <div className="bg-[#F9FCFA] rounded-[22px] p-6 relative mb-6 border border-[#18A049]/10">
               <div className="text-[44px] text-[#18A049] font-serif absolute top-3 left-3 leading-none opacity-20">"</div>
               <p className="text-[16px] text-gray-700 font-medium italic relative z-10 pl-6 pr-2 leading-relaxed tracking-tight">
                 오늘도 새벽 4시에 일어나 소들의 눈빛부터 살핍니다.<br/><br/><span className="font-extrabold text-[#18A049] not-italic xl:bg-transparent">"우리 가족이 먹을 거니까, 허투루 키운 적이 단 하루도 없습니다."</span>
               </p>
            </div>

            <button className="w-full py-4.5 bg-white border border-gray-200 hover:border-[#18A049] hover:bg-[#F9FCFA] hover:text-[#18A049] text-[16px] font-extrabold rounded-[18px] text-gray-700 transition-all shadow-sm">
              농장주의 편지 전체보기
            </button>
         </div>
       </div>

       {/* Special Diet : 화식 */}
       <div className="bg-[#FAF8F5] rounded-[28px] shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-[#8C7A6B]/20 p-7 overflow-hidden">
         <div className="mb-7 text-center pt-2">
           <span className="text-[13px] font-extrabold text-[#8C7A6B] bg-[#8C7A6B]/15 px-3.5 py-1.5 rounded-[10px] mb-4 inline-block tracking-tight delay-100 transition-all">먹는 것부터 다르니까</span>
           <h3 className="font-extrabold text-gray-900 text-[24px] leading-tight mb-3">소화를 돕는 따뜻한 식사,<br/><span className="text-[#8C7A6B]">화식(火食) 사료</span> 급여</h3>
           <p className="text-[15px] text-gray-500 font-medium leading-relaxed tracking-tight">사료와 조사료를 푹 익혀 발효시켜,<br/>소가 소화하기 가장 쉬운 형태로 제공합니다.</p>
         </div>

         <div className="grid grid-cols-1 gap-3">
           <div className="bg-white border text-left border-[#8C7A6B]/10 rounded-[22px] p-5 flex gap-4 items-center shadow-sm transition-all hover:shadow-md">
               <div className="w-[60px] h-[60px] rounded-[18px] bg-[#8C7A6B]/10 flex items-center justify-center text-[28px] shrink-0">🥩</div>
               <div>
                  <p className="font-extrabold text-[17px] text-gray-900 mb-1">상위 1% 마블링</p>
                  <p className="text-[14px] font-medium text-gray-500 leading-snug tracking-tight">소화와 영양 흡수를 효과적으로 높여 <br/><span className="font-extrabold text-[#8C7A6B]">1++ 등급 출현율 75%</span> <span className="text-gray-400 text-[13px]">(일반 대비 2.5배)</span></p>
               </div>
           </div>
           <div className="bg-white border text-left border-[#8C7A6B]/10 rounded-[22px] p-5 flex gap-4 items-center shadow-sm transition-all hover:shadow-md">
               <div className="w-[60px] h-[60px] rounded-[18px] bg-[#8C7A6B]/10 flex items-center justify-center text-[28px] shrink-0">🛡️</div>
               <div>
                  <p className="font-extrabold text-[17px] text-gray-900 mb-1">질병 발생 최소화</p>
                  <p className="text-[14px] font-medium text-gray-500 leading-snug tracking-tight">섭씨 100도 이상 익히는 과정에서 <br/>병원균이 감소하여 <span className="font-extrabold text-[#8C7A6B]">건강한 면역 체계 유지</span></p>
               </div>
           </div>
           <div className="bg-white border text-left border-[#8C7A6B]/10 rounded-[22px] p-5 flex gap-4 items-center shadow-sm transition-all hover:shadow-md">
               <div className="w-[60px] h-[60px] rounded-[18px] bg-[#8C7A6B]/10 flex items-center justify-center text-[28px] shrink-0">📈</div>
               <div>
                  <p className="font-extrabold text-[17px] text-gray-900 mb-1">안정적인 성장</p>
                  <p className="text-[14px] font-medium text-gray-500 leading-snug tracking-tight">소화 흡수율이 비약적으로 증가해 <br/><span className="font-extrabold text-[#8C7A6B]">지육률 평균 60% 이상</span> 흔들림 없는 품질</p>
               </div>
           </div>
         </div>
       </div>

       {/* Certifications & Core Rules */}
       <div className="bg-white rounded-[28px] shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-[#18A049]/10 p-7 overflow-hidden relative">
         <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#18A049]/5 rounded-full blur-3xl"></div>
         <div className="flex justify-between items-center mb-7 relative z-10">
           <h3 className="font-extrabold text-gray-900 text-[22px]">농장 인증 현황</h3>
           <span className="text-[13px] font-bold text-gray-500 flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-lg">
             실시간 연동 <div className="w-1.5 h-1.5 rounded-full bg-seul-success animate-pulse"></div>
           </span>
         </div>

         <div className="grid grid-cols-2 gap-4 mb-7 relative z-10">
           {/* 동물복지 뱃지 */}
           <div className="bg-white border-[1.5px] border-[#18A049]/15 rounded-[22px] p-5 flex flex-col items-center justify-center text-center shadow-sm relative overflow-hidden group hover:border-[#18A049] transition-colors cursor-pointer">
              <img src="/images/badge-animal-welfare.png" alt="동물복지 인증" className="w-[76px] h-[76px] object-contain mb-3" />
              <span className="text-gray-900 font-extrabold text-[16px] mb-2">동물복지 인증</span>
              <div className="bg-[#E6F6ED] text-[#18A049] text-[12px] font-extrabold px-3 py-1.5 rounded-lg">
                상태 : 정상 유지
              </div>
           </div>

           {/* 유기축산물 뱃지 */}
           <div className="bg-white border-[1.5px] border-[#18A049]/15 rounded-[22px] p-5 flex flex-col items-center justify-center text-center shadow-sm relative overflow-hidden group hover:border-[#18A049] transition-colors cursor-pointer">
              <img src="/images/badge-organic.jpg" alt="유기축산물 인증" className="w-[76px] h-[76px] object-contain mb-3" />
              <span className="text-gray-900 font-extrabold text-[16px] mb-2">유기축산물 인증</span>
              <div className="bg-[#E6F6ED] text-[#18A049] text-[12px] font-extrabold px-3 py-1.5 rounded-lg">
                상태 : 정상 유지
              </div>
           </div>
         </div>

         {/* 인증을 위한 관리 지침 */}
         <div className="relative z-10 mt-6 pt-6 border-t border-gray-100">
            <h4 className="font-extrabold text-gray-900 text-[17px] mb-4 flex items-center gap-1.5 px-1">
              <CheckCircle className="w-[18px] h-[18px] text-[#18A049]" strokeWidth={3} /> 인증 유지를 위한 <span className="text-[#18A049]">3대 원칙</span>
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-center gap-4 bg-[#F9FCFA] p-5 rounded-[22px] shadow-sm border border-[#18A049]/10 hover:border-[#18A049]/30 transition-colors">
                <div className="w-[52px] h-[52px] rounded-[16px] bg-white flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(24,160,73,0.1)] text-[26px]">💊</div>
                <div>
                  <p className="font-extrabold text-[18px] text-[#18A049] mb-1 leading-tight">항생제 원천 차단</p>
                  <p className="text-[14.5px] text-gray-600 font-bold leading-snug tracking-tight">예방 목적의 항생제 투여 <span className="text-gray-900 font-extrabold">100% 금지</span></p>
                </div>
              </li>
              <li className="flex items-center gap-4 bg-[#F9FCFA] p-5 rounded-[22px] shadow-sm border border-[#18A049]/10 hover:border-[#18A049]/30 transition-colors">
                <div className="w-[52px] h-[52px] rounded-[16px] bg-white flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(24,160,73,0.1)] text-[26px]">🚚</div>
                <div>
                  <p className="font-extrabold text-[18px] text-[#18A049] mb-1 leading-tight">스트레스 ZERO 이송</p>
                  <p className="text-[14.5px] text-gray-600 font-bold leading-snug tracking-tight">전용 <span className="text-gray-900 font-extrabold">무진동 차량</span>으로 육질 저하 방지</p>
                </div>
              </li>
              <li className="flex items-center gap-4 bg-[#F9FCFA] p-5 rounded-[22px] shadow-sm border border-[#18A049]/10 hover:border-[#18A049]/30 transition-colors">
                <div className="w-[52px] h-[52px] rounded-[16px] bg-white flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(24,160,73,0.1)] text-[26px]">🌿</div>
                <div>
                  <p className="font-extrabold text-[18px] text-[#18A049] mb-1 leading-tight">100% 유기농 식단</p>
                  <p className="text-[14.5px] text-gray-600 font-bold leading-snug tracking-tight">화학비료 없이 자란 깨끗한 사료만 엄선</p>
                </div>
              </li>
            </ul>
         </div>
       </div>

       {/* Video */}
       <div>
         <h3 className="font-extrabold text-gray-900 flex items-center gap-2 mb-5 text-[22px] px-1">
           <PlayCircle className="w-[24px] h-[24px] text-seul-secondary" /> 이번 주 농장 이야기
         </h3>
         <div className="relative rounded-[28px] overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-gray-100 aspect-[16/9] bg-gray-900 group cursor-pointer">
           <img src="/images/farm-video-thumb.png" alt="영상" className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-500" />
           <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-[60px] h-[60px] rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform duration-300">
               <PlayCircle className="w-[34px] h-[34px] text-white ml-0.5" />
             </div>
           </div>
           <div className="absolute bottom-6 left-7 right-7 text-white z-10">
             <span className="text-[11px] font-extrabold bg-seul-secondary px-2.5 py-1 rounded-[6px] text-white mb-2 inline-block shadow-sm">LIVE 5/28</span>
             <h4 className="font-extrabold text-[21px] leading-tight text-white tracking-tight">봄철 방목 준비, 사료 직접 봐요</h4>
           </div>
         </div>
       </div>

       {/* Tracking */}
       <div className="bg-white rounded-[28px] shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-gray-100 p-7">
         <h3 className="font-extrabold text-gray-900 flex items-center gap-2 mb-8 text-[22px] flex-wrap">
           <MapPin className="w-[24px] h-[24px] text-seul-primary" /> 이력 추적
           <span className="text-[12.5px] font-bold text-gray-500 bg-gray-50 border border-gray-100 px-2.5 py-1.5 rounded-lg ml-1 tracking-normal">
             Lot SD-2026-Q2-001
           </span>
         </h3>

         <div className="relative ml-2">
           {/* Line */}
           <div className="absolute left-[13px] top-4 bottom-6 w-[2px] bg-gray-100"></div>

           <div className="space-y-9">
             {[
               { title: '사육 (12개월)', desc: '현우농장 (전남 해남)', labels: ['HACCP', '동물복지'] },
               { title: '배송 (전용차량)', desc: '동물복지 전용 무진동 운송차', labels: ['GPS 기록'] },
               { title: '도축·가공', desc: '○○ 최신 자동화 도축장', labels: ['HACCP'] },
               { title: '검사 (슭다움)', desc: 'KOTITI 분기 lot 단위 정밀검사', labels: ['최종 통과'] },
             ].map((step, i) => (
               <div key={i} className="relative pl-11">
                 <div className="absolute left-[-1px] top-[2px] w-[30px] h-[30px] rounded-full bg-white border-[4px] border-seul-primary flex items-center justify-center z-10 shadow-sm">
                   <div className="w-[8px] h-[8px] bg-seul-primary rounded-full"></div>
                 </div>
                 <h4 className="font-extrabold text-[17.5px] text-gray-900 mb-1">{step.title}</h4>
                 <p className="text-[14.5px] font-medium text-gray-500 mb-3">{step.desc}</p>
                 <div className="flex gap-2 flex-wrap">
                   {step.labels.map(l => (
                     <span key={l} className="text-[12.5px] font-extrabold text-seul-primary bg-[#E6F6ED] border border-[#18A049]/10 px-2.5 py-1.5 rounded-lg flex items-center gap-1">
                       <CheckCircle className="w-[14px] h-[14px]" strokeWidth={2.5} /> {l}
                     </span>
                   ))}
                 </div>
               </div>
             ))}
           </div>
         </div>
       </div>

    </motion.div>
  )
}
