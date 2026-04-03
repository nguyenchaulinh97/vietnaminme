import { motion } from 'motion/react';
import { 
  ShoppingBag, 
  Tag, 
  Search, 
  Filter, 
  Heart, 
  MessageCircle,
  ArrowUpRight,
  Sparkles,
  Recycle
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const thriftItems = [
  {
    id: 1,
    title: 'Áo khoác Vintage 90s',
    price: '250.000đ',
    seller: 'Linh Vintage',
    image: 'https://picsum.photos/seed/vintagejacket/400/500',
    likes: 124,
    condition: '95%',
    category: 'Thời trang'
  },
  {
    id: 2,
    title: 'Máy ảnh Film Olympus',
    price: '1.200.000đ',
    seller: 'Film Lover',
    image: 'https://picsum.photos/seed/olympus/400/500',
    likes: 89,
    condition: 'Hoạt động tốt',
    category: 'Đồ điện tử'
  },
  {
    id: 3,
    title: 'Đĩa than Jazz Classic',
    price: '450.000đ',
    seller: 'Vinyl Store',
    image: 'https://picsum.photos/seed/vinyl/400/500',
    likes: 56,
    condition: 'Mới 99%',
    category: 'Âm nhạc'
  },
  {
    id: 4,
    title: 'Túi xách Handmade',
    price: '300.000đ',
    seller: 'Crafty Girl',
    image: 'https://picsum.photos/seed/handbag/400/500',
    likes: 210,
    condition: 'Mới',
    category: 'Phụ kiện'
  }
];

export default function ThriftMarket() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-8"
    >
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Recycle className="w-5 h-5 text-secondary" />
            <span className="font-mono text-xs uppercase tracking-widest text-secondary">Kinh tế tuần hoàn</span>
          </div>
          <h1 className="text-4xl font-black font-headline tracking-tighter text-white uppercase">Chợ Đồ Cũ & Ký Gửi</h1>
          <p className="text-gray-400 max-w-lg">Săn đồ độc bản, bảo vệ môi trường. Nơi kết nối cộng đồng yêu đồ cũ tại Hà Nội.</p>
        </div>
        
        <div className="flex items-center gap-4 bg-white/5 p-2 rounded-2xl border border-white/10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Tìm kiếm đồ cũ..." 
              className="bg-transparent border-none focus:ring-0 text-sm text-white pl-10 w-48 md:w-64"
            />
          </div>
          <button className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all">
            <Filter className="w-4 h-4 text-white" />
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {thriftItems.map((item) => (
          <motion.div 
            key={item.id}
            whileHover={{ y: -8 }}
            className="glass-panel rounded-2xl overflow-hidden border border-white/5 group relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-full border border-white/10 text-white hover:text-primary transition-colors">
                <Heart className="w-4 h-4" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform">
                <button className="bg-primary text-on-primary px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl">
                  Mua ngay
                </button>
                <div className="flex gap-2">
                  <button className="p-2 bg-white/20 backdrop-blur-md rounded-xl text-white hover:bg-white/30">
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-5 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[9px] font-mono text-primary uppercase tracking-widest">{item.category}</span>
                  <h3 className="text-sm font-bold text-white mt-1 group-hover:text-primary transition-colors">{item.title}</h3>
                </div>
                <span className="text-sm font-black text-secondary">{item.price}</span>
              </div>
              
              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                    {item.seller[0]}
                  </div>
                  <span className="text-[10px] text-gray-400">{item.seller}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Tag className="w-3 h-3 text-gray-500" />
                  <span className="text-[10px] text-gray-500">{item.condition}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Consignment Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 glass-panel rounded-3xl p-10 border border-white/5 relative overflow-hidden flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[100px] -z-10"></div>
          <div className="max-w-xl space-y-6">
            <h2 className="text-3xl font-black font-headline text-white uppercase tracking-tighter">Bạn có đồ cũ muốn ký gửi?</h2>
            <p className="text-gray-400">Hãy để chúng tôi giúp bạn tìm chủ nhân mới cho những món đồ của mình. Quy trình đơn giản, minh bạch và thân thiện với môi trường.</p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-xl hover:bg-primary hover:text-white transition-all">
                Bắt đầu ký gửi
              </button>
              <button className="px-8 py-3 bg-white/5 text-white font-black uppercase tracking-widest text-[10px] rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                Tìm hiểu thêm
              </button>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-4 glass-panel rounded-3xl p-8 border border-white/5 flex flex-col items-center text-center space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
            <Sparkles className="w-10 h-10" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white uppercase">Săn đồ hiệu giá hời</h4>
            <p className="text-xs text-gray-500 mt-2">Hệ thống AI của chúng tôi tự động kiểm định và gợi ý những món đồ hiệu có giá tốt nhất thị trường.</p>
          </div>
          <div className="w-full pt-4">
            <div className="flex justify-between text-[10px] font-mono text-gray-500 uppercase mb-2">
              <span>Đang kiểm định</span>
              <span>85%</span>
            </div>
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '85%' }}
                className="h-full bg-secondary" 
              />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
