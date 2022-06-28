import '~/assets/css/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="zing-app dflex">
                    <div className="sidebar">
                        <Sidebar />
                    </div>
                    <div className="content">
                        <Header />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
