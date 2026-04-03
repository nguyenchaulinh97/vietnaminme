import { Search, Network, Radio, Bell, Bolt } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl flex justify-between items-center px-6 h-16 border-b border-outline-variant/10">
      <div className="flex items-center gap-8">
        <span className="text-lg font-black tracking-tighter text-primary uppercase font-headline">HỆ THỐNG THÔNG MINH</span>
        <div className="hidden md:flex items-center gap-6">
          <a className="text-gray-400 font-headline font-medium tracking-tight hover:bg-white/5 transition-colors px-3 py-1 rounded" href="#">Tổng Quan</a>
          <a className="text-primary border-b-2 border-primary pb-1 font-headline font-medium tracking-tight" href="#">Giao Thông</a>
          <a className="text-gray-400 font-headline font-medium tracking-tight hover:bg-white/5 transition-colors px-3 py-1 rounded" href="#">Thời Tiết</a>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-lowest rounded-lg border border-outline-variant/15">
          <Search className="w-4 h-4 text-primary" />
          <input 
            className="bg-transparent border-none text-xs focus:ring-0 w-32 placeholder:text-outline text-on-surface" 
            placeholder="Tìm kiếm..." 
            type="text" 
          />
        </div>
        
        <div className="flex gap-3">
          <button className="p-1 rounded hover:bg-white/5 transition-colors text-on-surface-variant">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-1 rounded hover:bg-white/5 transition-colors text-on-surface-variant">
            <Bell className="w-5 h-5" />
          </button>
        </div>

        <div className="h-8 w-[1px] bg-outline-variant/30 mx-2"></div>

        <button className="bg-primary-container text-on-primary-container px-4 py-1.5 rounded-md font-mono text-[10px] font-bold tracking-widest hover:opacity-90 transition-all flex items-center gap-2">
          <motion.span 
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full" 
          />
          AI ĐANG CHẠY
        </button>

        <img 
          alt="Ảnh đại diện người dùng" 
          className="w-8 h-8 rounded-full border border-primary/20" 
          src="https://picsum.photos/seed/user/100/100" 
          referrerPolicy="no-referrer"
        />
      </div>
    </nav>
  );
}
