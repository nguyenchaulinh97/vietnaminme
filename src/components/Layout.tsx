import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-sans selection:bg-primary/30">
      <Navbar />
      <Sidebar />
      <main className="lg:ml-64 pt-20 px-6 pb-12 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
