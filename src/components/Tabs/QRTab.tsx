import { motion } from 'framer-motion';
import { Camera, QrCode } from 'lucide-react';

export default function QRTab() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center items-center h-full px-5 pb-8">
      <div className="bg-white rounded-[28px] p-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 w-full max-w-[340px]">
         <div className="w-[88px] h-[88px] bg-[#E6F6ED] rounded-full flex items-center justify-center mx-auto mb-6 text-[#18A049]">
            <ScanIcon />
         </div>
         <h3 className="font-extrabold text-[22px] text-gray-900 mb-3 tracking-tight">QR 코드를 스캔하세요</h3>
         <p className="text-[15px] text-gray-500 font-medium mb-8 leading-relaxed tracking-tight break-keep">
           패키지에 부착된 <span className="font-extrabold text-gray-800">QR코드</span>를 촬영하시면<br/>
           이력정보와 검사결과를 즉시 확인하실 수 있어요.
         </p>
         <button className="w-full bg-[#18A049] hover:bg-[#158f41] text-white font-extrabold py-4.5 rounded-[16px] shadow-[0_4px_15px_rgba(24,160,73,0.25)] flex items-center justify-center gap-2 text-[16px] transition-colors">
            <Camera className="w-[20px] h-[20px]" /> 카메라 열기
         </button>
      </div>
    </motion.div>
  );
}

function ScanIcon() {
  return (
    <div className="relative">
      <QrCode className="w-10 h-10" strokeWidth={2} />
      <div className="absolute inset-0 border-2 border-seul-primary rounded-[12px] opacity-20 scale-125"></div>
      <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-seul-primary/60 -translate-y-1/2 shadow-[0_0_8px_var(--color-seul-primary)] animate-pulse"></div>
    </div>
  )
}
