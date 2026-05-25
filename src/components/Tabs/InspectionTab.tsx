import { useState } from 'react';
import { UserProfile } from '../../types';
import { Check, ChevronRight, TestTube, Hexagon, Sprout, Dna, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';

export default function InspectionTab({ userProfile }: { userProfile: UserProfile }) {
  const [meatType, setMeatType] = useState<'beef'|'pork'>('beef');
  const isPregnant = userProfile.status === 'pregnant';

  const itemsData = [
     {
        id: '메틸수은',
        category: '중금속',
        title: '메틸수은',
        tag: null,
        currentStr: '0.002',
        maxStr: '0.02',
        unit: 'mg/kg',
        percent: '10%',
        maxPercent: '80%',
        copyElement: isPregnant ? (
            <><span className="font-extrabold text-seul-primary">태아의 신경계에 영향</span>을 줄 수 있는 대표적인 <span className="font-extrabold text-gray-900">1급 중금속</span>입니다.</>
        ) : (
            <><span className="font-extrabold text-seul-primary">중추 신경계에 치명적인 영향</span>을 줄 수 있는 <span className="font-extrabold text-gray-900">1급 중금속</span>입니다.</>
        )
     },
     {
        id: '카드뮴',
        category: '중금속',
        title: '카드뮴',
        tag: null,
        currentStr: '0.005',
        maxStr: '0.05',
        unit: 'mg/kg',
        percent: '10%',
        maxPercent: '80%',
        copyElement: isPregnant ? (
            <><span className="font-extrabold text-seul-primary">태반을 통과해 기형을 유발</span>할 수 있는 치명적인 <span className="font-extrabold text-gray-900">발암물질</span>입니다.</>
        ) : (
            <><span className="font-extrabold text-seul-primary">간과 신장에 축적</span>되어 질환을 일으키는 대표적 <span className="font-extrabold text-gray-900">발암물질</span>입니다.</>
        )
     },
     {
        id: '테트라사이클린',
        category: '항생제',
        title: '테트라사이클린',
        tag: '불검출',
        currentStr: '0',
        maxStr: '0.1',
        unit: 'mg/kg',
        percent: '0%',
        maxPercent: '60%',
        copyElement: isPregnant ? (
            <>태아의 <span className="font-extrabold text-seul-primary">치아·골격 발달을 방해</span>할 수 있어 <span className="font-extrabold text-gray-900">무항생제 확인</span>이 필수입니다.</>
        ) : (
            <><span className="font-extrabold text-seul-primary">장내 유익균 파괴</span> 및 내성균을 유발할 수 있어 <span className="font-extrabold text-gray-900">무항생제 확인</span>이 필수입니다.</>
        )
     },
     {
        id: '글리포세이트',
        category: '농약',
        title: '글리포세이트',
        tag: '불검출',
        currentStr: '0',
        maxStr: '0.05',
        unit: 'mg/kg',
        percent: '0%',
        maxPercent: '60%',
        copyElement: (
            <>WHO가 지정한 <span className="font-extrabold text-seul-primary">2A군 발암 추정 물질</span>로 완벽한 <span className="font-extrabold text-gray-900">불검출 관리</span>가 중요합니다.</>
        )
     }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 pb-20 tracking-tight">
      {/* Toggle */}
      <div className="flex bg-gray-100/80 rounded-full p-1.5 border border-gray-200/50 my-2">
         <button 
           className={`flex-1 py-3 text-center rounded-full text-[15px] font-extrabold transition-all duration-300 ${meatType === 'beef' ? 'bg-white shadow-sm text-seul-primary' : 'text-gray-500 hover:text-gray-700'}`}
           onClick={() => setMeatType('beef')}
         >한우</button>
         <button 
           className={`flex-1 py-3 text-center rounded-full text-[15px] font-extrabold transition-all duration-300 ${meatType === 'pork' ? 'bg-white shadow-sm text-seul-primary' : 'text-gray-500 hover:text-gray-700'}`}
           onClick={() => setMeatType('pork')}
         >한돈</button>
      </div>

      {/* 이미지 1: 검사 항목 요약 카드 */}
      <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[18px] font-extrabold text-gray-900">검사 항목</h2>
          <span className="text-[13px] font-bold text-gray-500">총 84종</span>
        </div>
        <div className="flex items-center gap-7">
          <div className="relative w-[104px] h-[104px] shrink-0 flex flex-col items-center justify-center rounded-full border-[8px] border-seul-primary shadow-[inset_0_2px_10px_rgba(45,95,63,0.1)] bg-[#F4fbf6]">
            <span className="text-[34px] font-black text-seul-primary leading-none mt-2">84</span>
            <span className="text-[12px] font-extrabold text-seul-primary mt-1">/ 84 통과</span>
          </div>
          <div className="flex-1 space-y-3.5">
            {[
              { label: '잔류 항생제', count: '72/72' },
              { label: '중금속', count: '12/12' },
              { label: '농약·살충제', count: '18/18' },
              { label: '호르몬', count: '4/4' },
            ].map(item => (
              <div key={item.label} className="flex justify-between items-center text-[14px]">
                <span className="font-bold text-gray-700">{item.label}</span>
                <span className="font-extrabold text-gray-900 flex items-center">{item.count} <Check className="ml-1 w-[14px] h-[14px] text-seul-success" strokeWidth={4}/></span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 이미지 1: 중요한 항목 섹션 */}
      <div>
        <div className="mb-4 mt-8 flex justify-between items-end px-1">
          <div>
            <h3 className="text-[19px] font-extrabold text-gray-900 leading-tight flex items-center gap-1.5">
              <AlertTriangle className="w-[20px] h-[20px] text-seul-primary" strokeWidth={2.5}/>
              {isPregnant ? '임산부에게 중요한 항목' : '일반에게 중요한 항목'}
            </h3>
            <p className="text-[13px] text-gray-500 mt-1.5 font-medium ml-6">
              {isPregnant ? `${userProfile.months}개월차 임산부 맞춤 표시` : '일반 기준 · 로그인 시 맞춤 표시'}
            </p>
          </div>
          <button className="text-[13px] font-extrabold text-seul-primary bg-seul-primary/10 hover:bg-seul-primary/20 px-3 py-1.5 rounded-lg transition-colors">
            맞춤 설정
          </button>
        </div>

        <div className="space-y-4">
           {itemsData.map(item => (
              <div key={item.id} className="bg-white rounded-[24px] p-6 shadow-[0_2px_16px_rgba(45,95,63,0.04)] border border-seul-primary/10 transition-all">
                  <div className="flex items-center gap-2.5 mb-2">
                      <span className="px-2.5 py-1 rounded-[8px] text-[12px] font-extrabold bg-[#F0F5F2] text-seul-primary border border-seul-primary/5">
                          {item.category}
                      </span>
                      <h4 className="text-[18px] font-extrabold text-gray-900">{item.title}</h4>
                      {item.tag && (
                          <span className="px-2.5 py-1 rounded-[8px] text-[12px] font-extrabold bg-[#E6F6ED] text-[#1D7B43] flex items-center leading-none tracking-tight">
                              {item.tag}
                          </span>
                      )}
                  </div>

                  <div className="relative pt-8 pb-3 mt-4">
                      <div className="h-2.5 w-full bg-gray-100 rounded-full relative">
                          <div className="absolute top-0 left-0 h-full bg-seul-primary rounded-full transition-all duration-1000" style={{ width: item.percent }}></div>
                          
                          {/* 기준치 표시 */}
                          <div className="absolute top-[-4px] bottom-[-4px] w-[2px] bg-red-400 z-10" style={{ left: item.maxPercent }}></div>
                          <div className="absolute top-[-26px] text-[11px] font-bold text-red-500 -translate-x-1/2 whitespace-nowrap" style={{ left: item.maxPercent }}>
                              기준치 {item.maxStr} {item.unit}
                          </div>
                          
                          {/* 검출 도트 및 텍스트 */}
                          <div className="absolute top-1/2 w-4.5 h-4.5 bg-seul-primary rounded-full -translate-y-1/2 -translate-x-1/2 border-[2.5px] border-white shadow-sm z-20" style={{ left: item.percent }}></div>
                          <div className={`absolute top-5 text-[13px] font-bold text-gray-600 mt-1 whitespace-nowrap ${item.percent === '0%' ? 'left-0' : '-translate-x-1/2'}`} style={{ left: item.percent === '0%' ? '0%' : item.percent }}>
                              검출 <span className="font-extrabold text-seul-primary">{item.currentStr}</span> {item.unit}
                          </div>
                      </div>
                  </div>

                  <div className="mt-7 pt-5 border-t border-gray-50 flex items-start gap-2.5 text-[14px] text-gray-700 leading-relaxed font-medium">
                      <span className="text-seul-accent text-[18px] leading-none shrink-0 translate-y-[1px]">💡</span>
                      <p>{item.copyElement}</p>
                  </div>
              </div>
           ))}
        </div>
      </div>

      {/* 이미지 2: 카테고리별 전체 결과 그리드 */}
      <div className="mt-10 mb-4 px-1">
        <h3 className="text-[19px] font-extrabold text-gray-900">카테고리별 전체 결과</h3>
      </div>
      <div className="grid grid-cols-2 gap-3 pb-6">
        {[
          { cat: '잔류 항생제', count: 72, icon: <TestTube className="w-5 h-5"/>, color: 'text-indigo-500', bg: 'bg-indigo-50' },
          { cat: '중금속', count: 12, icon: <Hexagon className="w-5 h-5"/>, color: 'text-orange-500', bg: 'bg-orange-50' },
          { cat: '농약·살충제', count: 18, icon: <Sprout className="w-5 h-5"/>, color: 'text-seul-success', bg: 'bg-green-50' },
          { cat: '호르몬', count: 4, icon: <Dna className="w-5 h-5"/>, color: 'text-rose-500', bg: 'bg-rose-50' },
        ].map((item) => (
          <div key={item.cat} className="bg-white rounded-[24px] p-5 shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between aspect-[1.3/1] cursor-pointer hover:border-seul-primary/40 hover:shadow-md transition-all group relative overflow-hidden">
            <div className={`absolute -right-6 -top-6 w-[100px] h-[100px] rounded-full ${item.bg} opacity-50 block group-hover:scale-125 transition-transform duration-500`}></div>
            <div className="relative z-10 flex items-start justify-between mb-3">
               <div className={`p-2.5 rounded-[12px] ${item.bg} ${item.color} shadow-sm`}>
                  {item.icon}
               </div>
               <span className="text-[12px] font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">{item.count}종</span>
            </div>
            <div className="relative z-10">
              <h4 className="font-extrabold text-[15px] text-gray-900 mb-1 leading-tight">{item.cat}</h4>
              <div className="flex items-center gap-1 mt-2.5">
                <span className="text-[13.5px] font-extrabold text-seul-primary">모두 통과</span>
                <ChevronRight className="w-[16px] h-[16px] text-seul-primary group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5}/>
              </div>
            </div>
          </div>
        ))}
      </div>

    </motion.div>
  );
}
