import '~/assets/css/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import MyMusic from './pages/MyMusic/MyMusic';
import ZingChart from './pages/ZingChart/ZingChart';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="zing-app dflex">
                    <div className="sidebar">
                        <Sidebar />
                    </div>
                    <Header />
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/mymusic" element={<MyMusic />} />
                            <Route path="/zingchart" element={<ZingChart />} />
                        </Routes>
                    </div>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
