import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import RegionalIntelligence from './pages/RegionalIntelligence';
import TrafficDashboard from './pages/TrafficDashboard';
import WeatherRadar from './pages/WeatherRadar';
import ModelConfig from './pages/ModelConfig';
import CheckinCoords from './pages/CheckinCoords';
import HotEvents from './pages/HotEvents';
import ThriftMarket from './pages/ThriftMarket';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<RegionalIntelligence />} />
          <Route path="/traffic" element={<TrafficDashboard />} />
          <Route path="/weather" element={<WeatherRadar />} />
          <Route path="/news" element={<RegionalIntelligence />} />
          <Route path="/checkin" element={<CheckinCoords />} />
          <Route path="/events" element={<HotEvents />} />
          <Route path="/thrift" element={<ThriftMarket />} />
          <Route path="/analytics" element={<ModelConfig />} />
          <Route path="/settings" element={<ModelConfig />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}
