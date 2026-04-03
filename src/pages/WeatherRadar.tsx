import { motion } from 'motion/react';
import { 
  CloudSun, 
  CloudLightning, 
  Wind, 
  Droplets, 
  Thermometer, 
  Sun, 
  CloudRain, 
  Moon, 
  Layers, 
  Plus, 
  Minus, 
  Play,
  AlertTriangle,
  Tornado
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const hourlyForecast = [
  { time: '14:00', icon: CloudLightning, temp: '24°', color: 'text-tertiary', active: false },
  { time: '15:00', icon: CloudRain, temp: '23°', color: 'text-primary', active: true },
  { time: '16:00', icon: CloudRain, temp: '23°', color: 'text-primary', active: false },
  { time: '17:00', icon: CloudSun, temp: '22°', color: 'text-gray-400', active: false },
  { time: '18:00', icon: CloudSun, temp: '22°', color: 'text-gray-400', active: false },
  { time: '19:00', icon: Moon, temp: '21°', color: 'text-gray-400', active: false },
  { time: '20:00', icon: Moon, temp: '21°', color: 'text-gray-400', active: false },
  { time: '21:00', icon: Moon, temp: '20°', color: 'text-gray-400', active: false },
];

const weeklyForecast = [
  { day: 'Hôm nay', icon: CloudLightning, high: '24°', low: '21°', color: 'text-tertiary', progress: [25, 50] },
  { day: 'T7', icon: CloudRain, high: '22°', low: '20°', color: 'text-primary', progress: [33, 50] },
  { day: 'CN', icon: CloudSun, high: '26°', low: '19°', color: 'text-gray-400', progress: [50, 75] },
  { day: 'T2', icon: Sun, high: '31°', low: '22°', color: 'text-secondary', progress: [60, 100] },
];

export default function WeatherRadar() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-8"
    >
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Display */}
        <div className="lg:col-span-8 relative overflow-hidden rounded-xl h-[400px] group border border-outline-variant/10 shadow-2xl">
          <img 
            alt="Hanoi city skyline" 
            className="absolute inset-0 w-full h-full object-cover brightness-50 transition-transform duration-700 group-hover:scale-105" 
            src="https://picsum.photos/seed/hanoiskyline/1200/600" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          <div className="absolute inset-0 p-10 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-tertiary/20 text-tertiary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-1 border border-tertiary/30">
                    <AlertTriangle className="w-3 h-3" /> Cảnh báo bão lớn
                  </span>
                </div>
                <h1 className="text-6xl font-black tracking-tighter text-white">Hà Nội</h1>
                <p className="text-on-surface-variant font-medium">Dự báo có dông • Thứ Sáu, 14 Th10</p>
              </div>
              <div className="text-right">
                <span className="text-[120px] font-black leading-none text-white tracking-tighter block">24°</span>
                <span className="text-on-surface-variant font-mono text-lg uppercase tracking-widest">Cảm giác như 26°</span>
              </div>
            </div>
            <div className="flex gap-12 overflow-x-auto pb-4 hide-scrollbar">
              {[
                { label: 'Độ ẩm', value: '88%' },
                { label: 'Tốc độ gió', value: '14 km/h' },
                { label: 'Tầm nhìn', value: '4.2 km' },
                { label: 'Chỉ số UV', value: '2 Thấp', color: 'text-tertiary' }
              ].map((stat, i) => (
                <div key={i} className="flex-shrink-0 text-center">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-2">{stat.label}</p>
                  <p className={cn("text-xl font-bold text-white", stat.color)}>{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AQI & Quick Stats */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="glass-panel rounded-xl p-6 border border-white/5 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-gray-400">Chỉ số chất lượng không khí (AQI)</h3>
              <Wind className="w-4 h-4 text-primary" />
            </div>
            <div className="flex items-end gap-4 mb-4">
              <span className="text-5xl font-black text-tertiary">142</span>
              <span className="text-tertiary font-bold mb-1 uppercase text-xs tracking-widest">Kém</span>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-6">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '72%' }}
                className="h-full bg-tertiary" 
              />
            </div>
            <div className="space-y-3">
              {[
                { label: 'PM2.5', value: '54.2 µg/m³' },
                { label: 'PM10', value: '92.0 µg/m³' },
                { label: 'NO2', value: '18.5 µg/m³' }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center text-xs">
                  <span className="text-gray-500 font-medium">{item.label}</span>
                  <span className="text-on-surface">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel rounded-xl p-6 border border-white/5 flex-1 shadow-xl">
            <h3 className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-6">Theo dõi bão</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary">
                  <Tornado className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Bão nhiệt đới 'SONCA'</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">Di chuyển TB với 15kt</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Droplets className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Cảnh báo mưa lớn</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">Dự kiến tích tụ 150mm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hourly Forecast */}
      <section className="glass-panel rounded-xl p-6 border border-white/5 shadow-xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-headline font-bold text-xl tracking-tight">Dự báo theo giờ</h2>
          <div className="flex gap-2">
            <button className="px-4 py-1.5 rounded-full bg-white/5 text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all">Hôm nay</button>
            <button className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-all">Ngày mai</button>
          </div>
        </div>
        <div className="flex justify-between gap-4 overflow-x-auto pb-4 hide-scrollbar">
          {hourlyForecast.map((item, i) => (
            <div 
              key={i} 
              className={cn(
                "flex-shrink-0 w-24 flex flex-col items-center py-4 rounded-xl border transition-all",
                item.active ? "bg-primary-container/10 border-primary-container/20" : "bg-white/5 border-white/5"
              )}
            >
              <span className={cn("text-[10px] font-mono mb-4", item.active ? "text-primary" : "text-gray-500")}>{item.time}</span>
              <item.icon className={cn("w-6 h-6 mb-4", item.color)} />
              <span className="text-lg font-bold text-white">{item.temp}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* 7-Day Forecast */}
        <div className="lg:col-span-5 glass-panel rounded-xl p-6 border border-white/5 shadow-xl">
          <h2 className="font-headline font-bold text-xl tracking-tight mb-8">Dự báo 7 ngày</h2>
          <div className="space-y-6">
            {weeklyForecast.map((day, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="w-16 font-mono text-xs text-gray-400 uppercase tracking-widest">{day.day}</span>
                <day.icon className={cn("w-5 h-5", day.color)} />
                <div className="flex-1 px-8">
                  <div className="h-1 bg-white/10 rounded-full relative">
                    <motion.div 
                      initial={{ left: 0, right: '100%' }}
                      animate={{ left: `${day.progress[0]}%`, right: `${100 - day.progress[1]}%` }}
                      className={cn("absolute h-full rounded-full", day.color.replace('text-', 'bg-'))} 
                    />
                  </div>
                </div>
                <div className="flex gap-4 font-bold">
                  <span className="text-white">{day.high}</span>
                  <span className="text-gray-500">{day.low}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Radar Map */}
        <div className="lg:col-span-7 relative rounded-xl overflow-hidden glass-panel border border-white/5 shadow-xl group">
          <div className="absolute top-6 left-6 z-10">
            <h3 className="font-headline font-bold text-xl tracking-tight mb-1">Radar Thời Tiết</h3>
            <p className="font-mono text-[10px] uppercase tracking-widest text-secondary flex items-center gap-1">
              <motion.span 
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-secondary rounded-full" 
              /> 
              Luồng Doppler Trực Tiếp
            </p>
          </div>
          <div className="absolute top-6 right-6 z-10 flex flex-col gap-2">
            {[Layers, Plus, Minus].map((Icon, i) => (
              <button key={i} className="w-10 h-10 bg-surface-container-high rounded-lg flex items-center justify-center border border-white/5 hover:bg-surface-bright transition-colors text-white">
                <Icon className="w-5 h-5" />
              </button>
            ))}
          </div>
          <div className="w-full h-full min-h-[400px] bg-[#131313] relative overflow-hidden">
            <img 
              alt="Radar map" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
              src="https://picsum.photos/seed/radar/800/600" 
              referrerPolicy="no-referrer"
            />
            {/* Radar Pulse Effect */}
            <div className="absolute top-1/2 left-1/3 w-32 h-32 border-2 border-primary/20 rounded-full animate-ping"></div>
            <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-tertiary rounded-full shadow-[0_0_12px_#ffb95f]"></div>
            <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary rounded-full shadow-[0_0_12px_#aec6ff]"></div>
          </div>
          <div className="absolute bottom-6 left-6 right-6 bg-surface-container/80 backdrop-blur-md p-4 rounded-lg flex items-center justify-between border border-white/5">
            <div className="flex items-center gap-4">
              <Play className="w-4 h-4 text-gray-500 fill-current" />
              <div className="h-1 w-48 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '66%' }}
                  className="h-full bg-primary" 
                />
              </div>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">14:00 (Cập nhật cuối)</span>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span className="text-[10px] font-mono text-gray-400 uppercase">Nhẹ</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-tertiary rounded-full"></span>
                <span className="text-[10px] font-mono text-gray-400 uppercase">Nặng</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
