import { motion } from 'motion/react';
import { 
  MapPin, 
  Camera, 
  Star, 
  TrendingUp, 
  Navigation, 
  Heart,
  Share2,
  Users
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const checkinSpots = [
  {
    id: 1,
    name: 'Phố Đi Bộ Hồ Gươm',
    category: 'Văn hóa & Giải trí',
    image: 'https://picsum.photos/seed/hoguom/600/400',
    rating: 4.9,
    checkins: '12.5k',
    trending: true,
    description: 'Địa điểm không thể bỏ qua mỗi cuối tuần với các hoạt động nghệ thuật đường phố sôi động.',
    tags: ['#HanoiVibe', '#Weekend', '#WalkingStreet']
  },
  {
    id: 2,
    name: 'Nhà Thờ Lớn Hà Nội',
    category: 'Kiến trúc',
    image: 'https://picsum.photos/seed/nhatholon/600/400',
    rating: 4.8,
    checkins: '8.2k',
    trending: false,
    description: 'Vẻ đẹp cổ kính giữa lòng thủ đô, nơi lý tưởng để thưởng thức trà chanh và ngắm nhìn nhịp sống.',
    tags: ['#Classic', '#Architecture', '#TeaTime']
  },
  {
    id: 3,
    name: 'Cầu Long Biên',
    category: 'Lịch sử',
    image: 'https://picsum.photos/seed/longbien/600/400',
    rating: 4.7,
    checkins: '6.8k',
    trending: true,
    description: 'Chứng nhân lịch sử với góc nhìn hoàng hôn tuyệt đẹp, thu hút nhiều bạn trẻ đến chụp ảnh.',
    tags: ['#Sunset', '#Vintage', '#History']
  },
  {
    id: 4,
    name: 'Phố Đường Tàu',
    category: 'Độc đáo',
    image: 'https://picsum.photos/seed/trainstreet/600/400',
    rating: 4.6,
    checkins: '15.1k',
    trending: true,
    description: 'Trải nghiệm cà phê sát đường ray tàu hỏa cực kỳ độc đáo và thu hút khách du lịch quốc tế.',
    tags: ['#Unique', '#Coffee', '#Adventure']
  }
];

export default function CheckinCoords() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary">Bản đồ xu hướng</span>
          </div>
          <h1 className="text-4xl font-black font-headline tracking-tighter text-white uppercase">Tọa Độ Check-in</h1>
          <p className="text-gray-400 mt-2 max-w-xl">Khám phá những địa điểm đang "làm mưa làm gió" tại Hà Nội. Cập nhật thời gian thực dựa trên dữ liệu mạng xã hội.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-full text-xs font-bold transition-all border border-white/10">Gần tôi</button>
          <button className="px-6 py-2 bg-primary text-on-primary rounded-full text-xs font-bold transition-all shadow-lg shadow-primary/20">Mới nhất</button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {checkinSpots.map((spot) => (
          <motion.div 
            key={spot.id}
            whileHover={{ y: -5 }}
            className="glass-panel rounded-2xl overflow-hidden border border-white/5 group"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={spot.image} 
                alt={spot.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              {spot.trending && (
                <div className="absolute top-4 left-4 bg-tertiary text-black text-[10px] font-black px-2 py-1 rounded flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> XU HƯỚNG
                </div>
              )}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <span className="text-[10px] font-bold text-white/80 bg-black/40 backdrop-blur-md px-2 py-1 rounded border border-white/10">
                  {spot.category}
                </span>
                <div className="flex items-center gap-1 text-white">
                  <Star className="w-3 h-3 fill-tertiary text-tertiary" />
                  <span className="text-xs font-bold">{spot.rating}</span>
                </div>
              </div>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{spot.name}</h3>
                <p className="text-xs text-gray-400 line-clamp-2 mt-1 leading-relaxed">{spot.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {spot.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-mono text-primary/70 bg-primary/5 px-2 py-0.5 rounded border border-primary/10">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-500">
                  <Users className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">{spot.checkins} Check-ins</span>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-400 hover:text-white">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-400 hover:text-white">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors text-primary">
                    <Navigation className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Map Preview Section */}
      <section className="glass-panel rounded-2xl p-8 border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-black font-headline tracking-tight text-white uppercase">Săn lùng tọa độ mới?</h2>
            <p className="text-gray-400">Hệ thống AI của chúng tôi liên tục quét các nền tảng mạng xã hội để tìm ra những quán cà phê, góc phố mới nổi. Đừng bỏ lỡ những "hidden gems" của Hà Nội.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <Camera className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Góc chụp ảnh đẹp</h4>
                  <p className="text-xs text-gray-500">Được gợi ý bởi 500+ nhiếp ảnh gia</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Đang tăng nhiệt</h4>
                  <p className="text-xs text-gray-500">+200% lượt nhắc đến trong 24h qua</p>
                </div>
              </div>
            </div>
            <button className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-black uppercase tracking-widest rounded-xl hover:scale-[1.02] transition-all shadow-xl shadow-primary/20">
              Mở bản đồ khám phá
            </button>
          </div>
          <div className="relative aspect-square lg:aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://picsum.photos/seed/hanoimap/800/600" 
              alt="Interactive Map"
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-8 h-8 bg-primary rounded-full shadow-[0_0_20px_rgba(174,198,255,0.8)]"></div>
              </div>
            </div>
            {/* Floating UI elements */}
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md p-3 rounded-lg border border-white/10">
              <p className="text-[10px] font-mono text-primary uppercase mb-1">Active Nodes</p>
              <p className="text-xs font-bold text-white">1,242 Spots Tracked</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
