import React, { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';

export default function Header() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            style={offset > 0 ? { background: '#1d375a', boxShadow: '0 3px 5px rgba(0, 0, 0, 0.1)' } : {}}
            className="header"
        >
            <div className="header-left">
                <button className="header-left-btn btn-back">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </button>
                <button className="header-left-btn btn-forward">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </button>
                <Tippy
                    render={(attrs) => (
                        <div className="box" tabIndex="-1" {...attrs}>
                            My tippy box
                        </div>
                    )}
                >
                    <div className="search">
                        <span className="search-icon">
                            <ion-icon name="search-outline"></ion-icon>
                        </span>
                        <input type="text" placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..." />
                    </div>
                </Tippy>
            </div>

            <div className="header-right">
                <div className="header-right-item">
                    <i>
                        <ion-icon className="header-right-item-icon" name="diamond-outline"></ion-icon>
                    </i>
                </div>
                <div className="header-right-item">
                    <i>
                        <ion-icon className="header-right-item-icon" name="download-outline"></ion-icon>
                    </i>
                </div>
                <div className="header-right-item">
                    <i>
                        <ion-icon className="header-right-item-icon" name="settings-outline"></ion-icon>
                    </i>
                </div>
                <div className="header-right-item avatar">
                    <i>
                        <ion-icon className="header-right-item-icon" name="person-outline"></ion-icon>
                    </i>
                </div>
            </div>
        </header>
    );
}
