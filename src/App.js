import './styles/main.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import MyMusic from './pages/MyMusic/MyMusic';
import ZingChartPage from './pages/ZingChartPage/ZingChartPage';
import Controls from './components/Controls/Controls';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Sidebar />
                <Header />
                <div className="contents">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/mymusic" element={<MyMusic />} />
                        <Route path="/zingchart" element={<ZingChartPage />} />
                    </Routes>
                </div>
                <Controls />
            </div>
        </BrowserRouter>
    );
}

export default App;
