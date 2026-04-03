import { motion } from 'motion/react';
import { 
  Calendar, 
  Ticket, 
  MapPin, 
  Clock, 
  TrendingUp, 
  Users,
  Music,
  Camera,
  Coffee,
  Zap
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const hotEvents = [
  {
    id: 1,
    title: 'Hanoi Midnight Run 2026',
    date: '15 Th04, 2026',
    time: '22:00 - 04:00',
    location: 'Hồ Hoàn Kiếm',
    category: 'Thể thao',
    image: 'https://picsum.photos/seed/midnightrun/800/400',
    attendees: '5.2k',
    trending: true,
    price: 'Miễn phí',
    description: 'Trải nghiệm chạy bộ đêm quanh hồ Gươm với hệ thống ánh sáng neon rực rỡ và âm nhạc sôi động.',
    icon: Zap
  },
  {
    id: 2,
    title: 'Triển lãm Nghệ thuật Kỹ thuật số',
    date: '20-25 Th04, 2026',
    time: '09:00 - 21:00',
    location: 'VCCA Vincom Royal City',
    category: 'Nghệ thuật',
    image: 'https://picsum.photos/seed/digitalart/800/400',
    attendees: '3.8k',
    trending: true,
    price: '50.000đ',
    description: 'Sự kết hợp giữa công nghệ AI và hội họa truyền thống, mang đến trải nghiệm thị giác chưa từng có.',
    icon: Camera
  },
  {
    id: 3,
    title: 'Lễ hội Cà phê Hà Nội',
    date: '01-03 Th05, 2026',
    time: '08:00 - 22:00',
    location: 'Công viên Thống Nhất',
    category: 'Ẩm thực',
    image: 'https://picsum.photos/seed/coffeefest/800/400',
    attendees: '12k',
    trending: false,
    price: 'Miễn phí',
    description: 'Nơi quy tụ hơn 100 thương hiệu cà phê nổi tiếng, từ truyền thống đến hiện đại.',
    icon: Coffee
  }
];

export default function HotEvents() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-12 pb-12"
    >
      <header className="relative py-12 overflow-hidden rounded-3xl glass-panel border border-white/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 blur-[100px] -z-10"></div>
        
        <div className="px-10 space-y-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-secondary" />
            <span className="font-mono text-xs uppercase tracking-widest text-secondary">Lịch trình sự kiện</span>
          </div>
          <h1 className="text-5xl font-black font-headline tracking-tighter text-white uppercase leading-none">Sự Kiện Hot</h1>
          <p className="text-gray-400 max-w-2xl text-lg">Đừng bỏ lỡ những sự kiện văn hóa, giải trí và công nghệ hấp dẫn nhất sắp diễn ra tại Hà Nội. Được tổng hợp từ các nguồn tin cậy.</p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            {['Âm nhạc', 'Thể thao', 'Nghệ thuật', 'Công nghệ', 'Ẩm thực'].map(cat => (
              <button key={cat} className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-full text-xs font-bold transition-all border border-white/10 hover:border-primary/30">
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-8">
        {hotEvents.map((event, i) => (
          <motion.div 
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 glass-panel rounded-3xl p-6 border border-white/5 hover:border-primary/20 transition-all shadow-xl"
          >
            {/* Image Section */}
            <div className="lg:col-span-5 relative h-64 lg:h-auto rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full border border-white/10">
                  {event.category}
                </span>
                {event.trending && (
                  <span className="bg-tertiary text-black text-[10px] font-black px-3 py-1.5 rounded-full flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> HOT
                  </span>
                )}
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-7 flex flex-col justify-between py-2">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-black font-headline text-white group-hover:text-primary transition-colors uppercase tracking-tight">
                    {event.title}
                  </h3>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                    <event.icon className="w-6 h-6" />
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-gray-500">
                    <Calendar className="w-4 h-4 text-secondary" />
                    <span className="text-xs font-bold">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <Clock className="w-4 h-4 text-secondary" />
                    <span className="text-xs font-bold">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold">{event.attendees} Quan tâm</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Giá vé</span>
                  <span className="text-lg font-black text-white">{event.price}</span>
                </div>
                <button className="px-10 py-3 bg-primary text-on-primary font-black uppercase tracking-widest text-xs rounded-xl hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
                  <Ticket className="w-4 h-4" /> Đặt chỗ ngay
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Newsletter / CTA */}
      <section className="relative rounded-3xl overflow-hidden p-12 text-center space-y-6 border border-primary/20 bg-primary/5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-primary/10 -z-10"></div>
        <h2 className="text-3xl font-black font-headline text-white uppercase tracking-tighter">Bạn có sự kiện muốn chia sẻ?</h2>
        <p className="text-gray-400 max-w-xl mx-auto">Gửi thông tin sự kiện của bạn để được hệ thống AI phân tích và hiển thị tới hàng ngàn người dùng trẻ tại Hà Nội.</p>
        <button className="px-12 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-full hover:bg-primary hover:text-white transition-all shadow-2xl">
          Gửi sự kiện ngay
        </button>
      </section>
    </motion.div>
  );
}
