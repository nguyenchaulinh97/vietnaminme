import { motion } from 'motion/react';
import { 
  Plus, 
  Minus, 
  Layers, 
  AlertTriangle, 
  Car, 
  Route, 
  LayoutGrid, 
  Thermometer, 
  Wind, 
  Clock, 
  Zap,
  Bell
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const incidents = [
  {
    id: 1,
    icon: AlertTriangle,
    title: "Ùn tắc tại Ngã tư Kim Mã",
    description: "Sự cố tràn vật liệu xây dựng. Đóng làn 2 & 3.",
    status: "GỢI Ý: ĐI HƯỚNG NGUYỄN THÁI HỌC",
    statusColor: "text-secondary",
    iconColor: "text-tertiary"
  },
  {
    id: 2,
    icon: Car,
    title: "Nút giao Thanh Xuân",
    description: "Va chạm nhẹ. Dự kiến thông xe sau 12 phút.",
    status: "TRẠNG THÁI: CÓ LỰC LƯỢNG CHỨC NĂNG",
    statusColor: "text-gray-500",
    iconColor: "text-gray-500"
  }
];

const cctvFeeds = [
  { id: 'C01', location: 'HOÀN KIẾM', image: 'https://picsum.photos/seed/traffic1/400/225' },
  { id: 'C02', location: 'ĐỐNG ĐA', image: 'https://picsum.photos/seed/traffic2/400/225' },
  { id: 'C03', location: 'LONG BIÊN', image: 'https://picsum.photos/seed/traffic3/400/225' },
  { id: 'C04', location: 'CẦU GIẤY', image: 'https://picsum.photos/seed/traffic4/400/225' },
];

const metrics = [
  { icon: Zap, label: 'Lưu lượng', value: '8.2k', unit: 'xe/giờ', color: 'text-secondary', progress: 75 },
  { icon: Wind, label: 'Chỉ số AQI', value: '142', unit: 'Kém', color: 'text-primary', progress: 50 },
  { icon: Thermometer, label: 'Nhiệt độ mặt đường', value: '38°C', unit: 'Cao', color: 'text-tertiary', progress: 85 },
  { icon: Clock, label: 'Độ trễ ETA', value: '+14p', unit: 'so với TB', color: 'text-primary-fixed-dim', progress: 40 },
];

export default function TrafficDashboard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-secondary/20 text-secondary px-2 py-0.5 rounded text-[10px] font-bold font-mono tracking-widest uppercase border border-secondary/20">Hệ thống ổn định</span>
            <span className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">Đồng bộ: 0.4 giây trước</span>
          </div>
          <h1 className="text-4xl font-black font-headline tracking-tighter text-on-surface uppercase">TRUNG TÂM ĐIỀU HÀNH iHANOI</h1>
        </div>
        <div className="flex gap-2">
          {['HÀ NỘI', 'TP.HCM', 'ĐÀ NẴNG'].map((city) => (
            <button 
              key={city}
              className={cn(
                "px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-widest uppercase transition-colors",
                city === 'HÀ NỘI' ? "bg-surface-container-high text-white" : "text-gray-500 hover:text-white"
              )}
            >
              {city}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Live Map */}
        <section className="lg:col-span-8 bg-surface-container-low rounded-xl overflow-hidden min-h-[500px] relative border border-outline-variant/10">
          <div className="absolute inset-0 z-0 opacity-40 grayscale contrast-125">
            <img 
              alt="Bản đồ trực quan dữ liệu" 
              className="w-full h-full object-cover" 
              src="https://picsum.photos/seed/hanoimap/1200/800" 
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Mock Traffic Path Overlays */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-60" viewBox="0 0 800 500">
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
              className="glow-path-green" 
              d="M100,100 L300,150 L450,120 L700,200" 
              fill="none" 
              stroke="#4edea3" 
              strokeWidth="4" 
            />
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
              className="glow-path-amber" 
              d="M200,400 L350,300 L500,350 L650,250" 
              fill="none" 
              stroke="#ffb95f" 
              strokeWidth="6" 
            />
          </svg>

          <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-4">
            <div className="glass-panel p-4 rounded-xl border border-white/5">
              <div className="flex items-center gap-6">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-gray-400 mb-1">Tốc độ trung bình</p>
                  <p className="text-2xl font-black font-headline text-secondary">24.5 <span className="text-xs font-normal text-gray-500 uppercase">km/h</span></p>
                </div>
                <div className="h-8 w-[1px] bg-white/10"></div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-gray-400 mb-1">Chỉ số ùn tắc</p>
                  <p className="text-2xl font-black font-headline text-tertiary">42%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-6 right-6 z-20 flex flex-col gap-2">
            {[Plus, Minus, Layers].map((Icon, i) => (
              <button key={i} className="w-10 h-10 bg-surface-container-highest/80 backdrop-blur rounded-lg flex items-center justify-center border border-white/10 text-white hover:bg-primary transition-all">
                <Icon className="w-5 h-5" />
              </button>
            ))}
          </div>
        </section>

        {/* Sidebar Modules */}
        <section className="lg:col-span-4 flex flex-col gap-6">
          {/* Incident Stream */}
          <div className="bg-surface-container rounded-xl p-6 border-l-4 border-tertiary border border-outline-variant/10">
            <div className="flex justify-between items-start mb-4">
              <h2 className="font-headline font-bold text-lg">Sự cố đang diễn ra</h2>
              <span className="bg-tertiary/20 text-tertiary px-2 py-0.5 rounded text-[10px] font-bold font-mono uppercase">3 Ưu tiên cao</span>
            </div>
            <div className="space-y-4">
              {incidents.map((incident) => (
                <div key={incident.id} className="p-4 bg-surface-container-lowest rounded-lg border border-white/5 hover:border-primary/30 transition-all cursor-pointer group">
                  <div className="flex gap-3">
                    <incident.icon className={cn("w-5 h-5", incident.iconColor)} />
                    <div>
                      <h4 className="text-xs font-bold font-headline mb-1 group-hover:text-primary transition-colors">{incident.title}</h4>
                      <p className="text-[11px] text-gray-400 leading-relaxed mb-2">{incident.description}</p>
                      <div className="flex items-center gap-2">
                        <Route className="w-3 h-3 text-secondary" />
                        <p className={cn("text-[10px] font-mono uppercase tracking-wider", incident.statusColor)}>{incident.status}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CCTV Grid */}
          <div className="bg-surface-container rounded-xl p-6 flex-1 border border-outline-variant/10">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="font-headline font-bold text-lg">Camera iHanoi Trực Tiếp</h2>
                <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest mt-1">Nguồn: Hệ thống iHanoi & Sở GTVT</p>
              </div>
              <LayoutGrid className="w-5 h-5 text-gray-500 cursor-pointer hover:text-primary transition-colors" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {cctvFeeds.map((feed) => (
                <div key={feed.id} className="group relative aspect-video rounded-lg overflow-hidden bg-black border border-white/5">
                  <img 
                    alt={feed.location} 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" 
                    src={feed.image} 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-0.5 bg-black/60 backdrop-blur rounded">
                    <span className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></span>
                    <span className="text-[8px] font-mono font-bold tracking-widest text-white uppercase">{feed.id}: {feed.location}</span>
                  </div>
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-primary text-on-primary text-[8px] px-1.5 py-0.5 rounded font-bold">LIVE iHANOI</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer Metric Layer */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {metrics.map((metric, i) => (
          <div key={i} className="bg-surface-container-low p-6 rounded-xl border-t border-white/5 border border-outline-variant/10">
            <div className={cn("flex items-center gap-3 mb-2", metric.color)}>
              <metric.icon className="w-4 h-4" />
              <span className="font-mono text-[10px] uppercase tracking-widest font-bold">{metric.label}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black font-headline">{metric.value}</span>
              <span className="text-[10px] text-gray-500 uppercase font-mono">{metric.unit}</span>
            </div>
            <div className="w-full h-1 bg-white/5 rounded-full mt-4 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${metric.progress}%` }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className={cn("h-full", metric.color.replace('text-', 'bg-'))} 
              />
            </div>
          </div>
        ))}
      </div>

      {/* Contextual FAB */}
      <button className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-primary to-primary-container rounded-xl shadow-[0px_24px_48px_rgba(0,89,197,0.3)] flex items-center justify-center text-on-primary-container hover:scale-105 transition-transform">
        <Bell className="w-6 h-6 fill-current" />
      </button>
    </motion.div>
  );
}
