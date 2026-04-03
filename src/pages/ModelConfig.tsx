import { motion } from 'motion/react';
import { 
  Key, 
  Brain, 
  Copy, 
  Terminal, 
  Activity, 
  Zap, 
  ShieldCheck,
  Plus
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useState } from 'react';

const logs = [
  { time: '14:22:01', type: 'INIT', message: 'Bắt tay hệ thống xác nhận với Node_Hanoi_Central', color: 'text-secondary' },
  { time: '14:22:05', type: 'DATA', message: 'Đang lấy ma trận giao thông cho Quận Hoàn Kiếm...', color: 'text-primary' },
  { time: '14:22:08', type: 'WARN', message: 'Phát hiện mật độ gói cao tại Ngã tư Kim Mã', color: 'text-tertiary' },
  { time: '14:22:12', type: 'SUCCESS', message: 'Đồng bộ trọng số mô hình Computer Vision (782MB) hoàn tất', color: 'text-secondary' },
  { time: '14:22:15', type: 'DATA', message: 'Thời gian phản hồi cụm cảm biến thời tiết: 42ms', color: 'text-primary' },
  { time: '14:23:01', type: 'STREAM', message: 'Kết nối WebSocket được thiết lập tại wss://live.intel.layer', color: 'text-secondary' },
  { time: '14:23:05', type: 'DATA', message: 'Tổng hợp cảm xúc xã hội cho: #GiaoThongHanoi', color: 'text-primary' },
];

const parameters = [
  { id: 'cv', title: 'Tăng cường CV Giao thông', description: 'Bật tăng cường thị giác máy tính ánh sáng yếu để giám sát ban đêm', active: true },
  { id: 'news', title: 'Phân cụm tin tức siêu địa phương', description: 'Nhóm các sự kiện tin tức dựa trên khoảng cách GPS cấp quận', active: false },
  { id: 'weather', title: 'Dự báo trôi thời tiết', description: 'Sử dụng các mẫu trôi lịch sử để dự báo mưa trong 2 giờ', active: true },
];

export default function ModelConfig() {
  const [params, setParams] = useState(parameters);

  const toggleParam = (id: string) => {
    setParams(prev => prev.map(p => p.id === id ? { ...p, active: !p.active } : p));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-7xl mx-auto space-y-12"
    >
      <header className="max-w-5xl">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-2 block">Bảng điều khiển nhà phát triển</span>
        <h1 className="text-4xl md:text-5xl font-black font-headline tracking-tighter text-on-surface">CẤU HÌNH MÔ HÌNH</h1>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Left Column: Settings Form */}
        <div className="xl:col-span-7 space-y-8">
          {/* SDK & Keys Section */}
          <section className="glass-panel p-8 rounded-xl ring-1 ring-white/5 border border-outline-variant/10">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold font-headline flex items-center gap-3">
                <Key className="w-5 h-5 text-primary" />
                Quản lý API cốt lõi
              </h2>
              <span className="px-3 py-1 bg-secondary/10 text-secondary font-mono text-[10px] uppercase tracking-widest rounded-full border border-secondary/20">Mọi hệ thống ổn định</span>
            </div>
            
            <div className="space-y-6">
              <div className="group">
                <label className="block font-mono text-[11px] uppercase tracking-widest text-gray-400 mb-2">Khóa chính News Engine</label>
                <div className="relative">
                  <input 
                    className="w-full bg-surface-container-lowest border-none ring-1 ring-white/10 rounded-lg py-3 px-4 focus:ring-primary focus:ring-2 transition-all font-mono text-sm text-gray-300" 
                    readOnly 
                    type="password" 
                    value="sk_intelligence_layer_hanoi_8829" 
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary transition-colors">
                    <Copy className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block font-mono text-[11px] uppercase tracking-widest text-gray-400 mb-2">Endpoint API Thời tiết</label>
                  <input 
                    className="w-full bg-surface-container-lowest border-none ring-1 ring-white/10 rounded-lg py-3 px-4 focus:ring-primary focus:ring-2 transition-all font-mono text-sm text-gray-300" 
                    type="text" 
                    defaultValue="https://api.weather.hanoi.node/v3" 
                  />
                </div>
                <div className="group">
                  <label className="block font-mono text-[11px] uppercase tracking-widest text-gray-400 mb-2">Tốc độ làm mới dữ liệu</label>
                  <select className="w-full bg-surface-container-lowest border-none ring-1 ring-white/10 rounded-lg py-3 px-4 focus:ring-primary focus:ring-2 transition-all font-mono text-sm text-gray-300 appearance-none">
                    <option>Thời gian thực (Kinetic)</option>
                    <option>Khoảng 30 giây</option>
                    <option>Khoảng 60 giây</option>
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Intelligence Toggles Section */}
          <section className="glass-panel p-8 rounded-xl ring-1 ring-white/5 border border-outline-variant/10">
            <h2 className="text-xl font-bold font-headline flex items-center gap-3 mb-8">
              <Zap className="w-5 h-5 text-secondary" />
              Tham số mô hình
            </h2>
            <div className="grid gap-4">
              {params.map((param) => (
                <div 
                  key={param.id} 
                  className="flex items-center justify-between p-4 rounded-lg bg-surface-container-lowest ring-1 ring-white/5 hover:ring-white/10 transition-all group"
                >
                  <div>
                    <h3 className="font-bold text-sm text-on-surface">{param.title}</h3>
                    <p className="text-xs text-gray-500 font-body">{param.description}</p>
                  </div>
                  <button 
                    onClick={() => toggleParam(param.id)}
                    className={cn(
                      "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out",
                      param.active ? "bg-primary-container" : "bg-surface-container-highest"
                    )}
                  >
                    <span 
                      className={cn(
                        "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                        param.active ? "translate-x-5" : "translate-x-0"
                      )} 
                    />
                  </button>
                </div>
              ))}
            </div>
          </section>

          <div className="flex justify-end gap-4">
            <button className="px-6 py-3 font-mono text-[10px] uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Đặt lại mặc định</button>
            <button className="px-8 py-3 bg-gradient-to-br from-primary to-primary-container text-on-primary-container rounded-lg font-mono text-xs font-bold tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-lg">Cập nhật cấu hình SDK</button>
          </div>
        </div>

        {/* Right Column: Terminal Logs & Active Streams */}
        <div className="xl:col-span-5 space-y-8">
          {/* Terminal Section */}
          <section className="bg-[#0e0e0e] rounded-xl overflow-hidden ring-1 ring-white/10 flex flex-col h-[500px] border border-outline-variant/20 shadow-2xl">
            <div className="bg-surface-container-high px-4 py-3 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">Live_Stream_Logs_v4.0.2</span>
              <div className="w-12"></div>
            </div>
            <div className="p-4 flex-1 overflow-y-auto font-mono text-[11px] leading-relaxed terminal-scroll">
              {logs.map((log, i) => (
                <div key={i} className="text-gray-500 mb-1">
                  [{log.time}] <span className={cn(log.color)}>{log.type}</span> {log.message}
                </div>
              ))}
              <div className="text-gray-300 animate-pulse">|</div>
            </div>
          </section>

          {/* Stream Health Stats */}
          <section className="grid grid-cols-2 gap-4">
            <div className="glass-panel p-6 rounded-xl ring-1 ring-white/5 border border-outline-variant/10">
              <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-4">Lưu lượng giao thông</p>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-black font-headline text-secondary">88.4</span>
                <span className="font-mono text-xs text-secondary mb-1">GB/s</span>
              </div>
              <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '88%' }}
                  className="h-full bg-secondary shadow-[0_0_8px_rgba(78,222,163,0.5)]" 
                />
              </div>
            </div>
            <div className="glass-panel p-6 rounded-xl ring-1 ring-white/5 border border-outline-variant/10">
              <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-4">Độ trễ mô hình</p>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-black font-headline text-tertiary">14</span>
                <span className="font-mono text-xs text-tertiary mb-1">ms</span>
              </div>
              <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '14%' }}
                  className="h-full bg-tertiary shadow-[0_0_8px_rgba(255,185,95,0.5)]" 
                />
              </div>
            </div>
          </section>

          {/* Data Visual Overlay Preview */}
          <div className="relative h-48 rounded-xl overflow-hidden ring-1 ring-white/10 border border-outline-variant/10 group cursor-pointer">
            <img 
              className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500" 
              src="https://picsum.photos/seed/tech/800/400" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-1">Xem trước trạng thái Node</p>
              <h4 className="font-bold text-sm uppercase">Đường truyền dữ liệu bảo mật: Hoạt động</h4>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
