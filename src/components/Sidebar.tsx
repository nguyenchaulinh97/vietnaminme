import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  TrafficCone, 
  CloudSun, 
  Newspaper, 
  BarChart3, 
  Settings, 
  HelpCircle,
  Plus,
  MapPin,
  Sparkles,
  ShoppingBag
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

const navItems = [
  { icon: LayoutDashboard, label: 'Tổng Quan', path: '/' },
  { icon: TrafficCone, label: 'Giao Thông iHanoi', path: '/traffic' },
  { icon: CloudSun, label: 'Thời Tiết & AQI', path: '/weather' },
  { icon: Newspaper, label: 'Tin Tức Gen Z', path: '/news' },
  { icon: MapPin, label: 'Tọa Độ Check-in', path: '/checkin' },
  { icon: Sparkles, label: 'Sự Kiện Hot', path: '/events' },
  { icon: ShoppingBag, label: 'Chợ Đồ Cũ', path: '/thrift' },
  { icon: BarChart3, label: 'Phân Tích Dữ Liệu', path: '/analytics' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 z-40 bg-background border-r border-outline-variant/10 flex flex-col py-8 gap-4 hidden lg:flex">
      <div className="px-6 mb-8 mt-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary-container/20 flex items-center justify-center border border-primary/10">
            <MapPin className="w-5 h-5 text-primary fill-primary/20" />
          </div>
          <div>
            <h3 className="text-white font-bold font-headline text-sm">Nút Hà Nội</h3>
            <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500">21.0285° B, 105.8542° Đ</p>
          </div>
        </div>
        <button className="w-full py-3 bg-primary-container/10 border border-primary-container/20 rounded-xl text-primary font-mono text-[10px] font-bold tracking-widest uppercase hover:bg-primary-container/20 transition-all flex items-center justify-center gap-2">
          <Plus className="w-3 h-3" />
          Báo Cáo Mới
        </button>
      </div>

      <nav className="flex-1 flex flex-col gap-1 overflow-y-auto hide-scrollbar">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "px-6 py-3 flex items-center gap-4 transition-all cursor-pointer relative group",
                isActive 
                  ? "text-primary font-bold border-r-2 border-primary-container bg-primary-container/10" 
                  : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
              )}
            >
              <item.icon className={cn("w-5 h-5", isActive && "fill-primary/20")} />
              <span className="font-mono text-[11px] uppercase tracking-widest">{item.label}</span>
              {isActive && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute inset-0 bg-primary-container/5 -z-10"
                />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="px-6 py-8 border-t border-white/5 flex flex-col gap-2">
        <Link to="/settings" className="flex items-center gap-4 text-gray-500 hover:text-gray-300 transition-all cursor-pointer text-xs font-mono uppercase tracking-widest">
          <Settings className="w-4 h-4" />
          Cài Đặt
        </Link>
        <Link to="/support" className="flex items-center gap-4 text-gray-500 hover:text-gray-300 transition-all cursor-pointer text-xs font-mono uppercase tracking-widest">
          <HelpCircle className="w-4 h-4" />
          Hỗ Trợ
        </Link>
      </div>
    </aside>
  );
}
