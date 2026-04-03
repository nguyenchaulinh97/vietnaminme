import { motion } from 'motion/react';
import { 
  Zap, 
  Activity, 
  Newspaper, 
  ArrowRight, 
  CheckCircle2, 
  Maximize2,
  CloudLightning,
  Sparkles
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const newsItems = [
  {
    category: "Kinh tế số",
    time: "12 phút trước",
    title: "Hành lang công nghệ Việt Nam dự kiến thúc đẩy GDP khu vực tăng 4.2%",
    summary: "Phân tích AI: Các cơ sở bán dẫn mới tại Đà Nẵng đang thúc đẩy nhu cầu cơ sở hạ tầng và xu hướng di cư của lực lượng lao động trẻ...",
    color: "text-tertiary",
    bgColor: "bg-tertiary/10",
    trending: true
  },
  {
    category: "Hạ tầng",
    time: "45 phút trước",
    title: "Bản sao số (Digital Twin) của trung tâm logistics đi vào hoạt động tại Hải Phòng",
    summary: "Mô phỏng luồng hàng hóa theo thời gian thực hiện đang tối ưu hóa lịch trình cập bến, giảm 18% thời gian chờ trong chu kỳ đầu tiên...",
    color: "text-primary",
    bgColor: "bg-primary/10",
    trending: false
  },
  {
    category: "Bền vững",
    time: "2 giờ trước",
    title: "Tối ưu hóa lưới điện bằng AI giúp giảm lãng phí năng lượng tại các KCN TP.HCM",
    summary: "Quản lý tải đỉnh dự báo đã cân bằng thành công việc phân phối năng lượng trong những giờ cao điểm nắng nóng tại Quận 9...",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    trending: true
  }
];

export default function RegionalIntelligence() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <p className="font-mono text-xs text-primary uppercase tracking-[0.3em] mb-2">Tổng quan hệ thống</p>
          <h2 className="text-4xl font-black tracking-tighter text-on-surface">Trí Tuệ Khu Vực</h2>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-surface-container-low rounded-xl border border-outline-variant/10">
            <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">Thời gian hoạt động</p>
            <p className="font-bold text-secondary text-sm">99.98%</p>
          </div>
          <div className="px-4 py-2 bg-surface-container-low rounded-xl border border-outline-variant/10">
            <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">Độ trễ</p>
            <p className="font-bold text-primary text-sm">14ms</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Traffic Map Module */}
        <div className="md:col-span-8 h-[500px] relative rounded-xl overflow-hidden bg-surface-container-low group border border-outline-variant/10 shadow-xl">
          <img 
            className="w-full h-full object-cover opacity-60 grayscale group-hover:scale-105 transition-transform duration-700" 
            src="https://picsum.photos/seed/hanoimap2/1200/800" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          <div className="absolute top-6 left-6 flex flex-col gap-3">
            <div className="glass-panel px-4 py-2 rounded-lg border border-outline-variant/20 inline-flex items-center gap-2">
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-secondary" 
              />
              <span className="font-mono text-xs uppercase tracking-widest font-bold">Giao thông trực tiếp: Hà Nội</span>
            </div>
          </div>

          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
            <div className="glass-panel p-4 rounded-xl border border-outline-variant/20 flex flex-col gap-1 w-64">
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">Phố Phan Đình Phùng</span>
                <span className="text-tertiary font-bold text-xs uppercase">Ùn tắc</span>
              </div>
              <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-tertiary w-3/4 shadow-[0_0_8px_#ffb95f]"></div>
              </div>
              <div className="flex justify-between items-center mt-3">
                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">Cao tốc Kim Mã</span>
                <span className="text-secondary font-bold text-xs uppercase">Thông thoáng</span>
              </div>
              <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-1/4 shadow-[0_0_8px_#4edea3]"></div>
              </div>
            </div>
            <button className="bg-primary/10 hover:bg-primary/20 backdrop-blur-md border border-primary/30 p-4 rounded-full transition-all">
              <Maximize2 className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>

        {/* Weather & AI Status */}
        <div className="md:col-span-4 h-[500px] flex flex-col gap-6">
          <div className="flex-1 glass-panel rounded-xl p-6 border border-outline-variant/10 relative overflow-hidden group shadow-xl">
            <div className="relative z-10">
              <p className="font-mono text-[10px] text-primary uppercase tracking-[0.2em] mb-4">Radar Thời Tiết</p>
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-5xl font-black text-on-surface">32°</h3>
                <div>
                  <p className="text-lg font-bold text-on-surface">Dông bão</p>
                  <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">Nút khu vực TP.HCM</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-gray-400">Độ ẩm</span>
                  <span className="text-on-surface font-bold">88%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-gray-400">Tầm nhìn</span>
                  <span className="text-on-surface font-bold">4.2 km</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-gray-400">Gió</span>
                  <span className="text-secondary font-bold">12 km/h Đông Bắc</span>
                </div>
              </div>
              <div className="mt-8">
                <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-2">Dự báo lượng mưa</p>
                <div className="flex items-end gap-1 h-12">
                  {[4, 6, 10, 12, 8, 3, 5].map((h, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "flex-1 rounded-t-sm transition-all duration-500",
                        i === 3 ? "bg-primary/60 h-12 glow-path-blue" : "bg-primary/20",
                        `h-${h}`
                      )} 
                      style={{ height: `${h * 4}px` }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 blur-[100px] group-hover:bg-primary/10 transition-colors"></div>
          </div>

          <div className="h-40 glass-panel rounded-xl p-6 border border-outline-variant/10 flex flex-col justify-between group cursor-pointer shadow-xl">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-1">Mô hình hoạt động</p>
                <h4 className="font-bold text-on-surface uppercase">Tích hợp Gemini 3.1</h4>
              </div>
              <Sparkles className="w-5 h-5 text-primary group-hover:rotate-45 transition-transform" />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-surface-container-highest border border-outline-variant/20 flex items-center justify-center text-[8px] font-bold">L1</div>
                <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-[8px] font-bold text-primary">V2</div>
              </div>
              <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Luồng phân tích: 1.2M tokens/s</p>
            </div>
          </div>
        </div>
      </div>

      {/* Intelligence Stream - Youthful Gen Z Style */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Newspaper className="w-5 h-5 text-tertiary" />
            <h3 className="text-xl font-black tracking-tight text-on-surface uppercase">Tin Tức Gen Z & Xu Hướng</h3>
          </div>
          <button className="text-xs font-mono uppercase tracking-widest text-primary hover:underline">Xem tất cả</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item, i) => (
            <div key={i} className="glass-panel rounded-2xl border border-outline-variant/10 overflow-hidden flex flex-col hover:border-primary/50 transition-all group shadow-xl relative">
              {item.trending && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-secondary text-on-secondary text-[8px] font-black px-2 py-1 rounded-full flex items-center gap-1 animate-pulse">
                    <Zap className="w-2 h-2 fill-current" /> TRENDING
                  </span>
                </div>
              )}
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/news${i}/600/400`} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-60"></div>
              </div>
              <div className="p-6 flex flex-col flex-1 gap-3">
                <div className="flex justify-between items-center">
                  <span className={cn("px-2 py-0.5 text-[9px] font-black font-mono uppercase tracking-widest rounded-md", item.bgColor, item.color)}>
                    {item.category}
                  </span>
                  <span className="text-[10px] text-gray-500 font-mono">{item.time}</span>
                </div>
                <h5 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">{item.title}</h5>
                <p className="text-xs text-gray-400 line-clamp-2 font-body leading-relaxed">{item.summary}</p>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">AI Tổng hợp</span>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Predictive Tray */}
      <div className="glass-panel rounded-xl border border-outline-variant/20 p-8 overflow-hidden relative shadow-2xl">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 400 200">
            <path className="glow-path-blue" d="M0 100 Q100 50 200 100 T400 100" fill="none" stroke="#aec6ff" strokeWidth="2" />
          </svg>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="flex-1">
            <h4 className="text-2xl font-black text-on-surface mb-2 uppercase">Trạng thái dự báo cốt lõi</h4>
            <p className="text-gray-400 text-sm max-w-xl">Phân tích học sâu về mối tương quan giữa giao thông và thời tiết dự báo mức độ ùn tắc sẽ tăng 15% trên cao tốc Pháp Vân - Cầu Giẽ trong 45 phút tới do các tế bào mưa đang tiến gần.</p>
          </div>
          <div className="flex items-center gap-12">
            <div className="text-center">
              <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-1">Độ tin cậy</p>
              <p className="text-3xl font-bold text-secondary">94%</p>
            </div>
            <div className="text-center">
              <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-1">Tính toán</p>
              <p className="text-3xl font-bold text-primary">Cao</p>
            </div>
            <button className="bg-primary text-on-primary px-6 py-3 rounded-lg font-bold font-mono uppercase tracking-widest text-xs hover:bg-primary-fixed-dim transition-colors shadow-lg">
              Triển khai đối phó
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
