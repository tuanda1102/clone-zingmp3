import React from 'react';

export default function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <button className="header-left-btn btn-back">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </button>
                <button className="header-left-btn btn-forward">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </button>
                <div className="search">
                    <span className="search-icon">
                        <ion-icon name="search-outline"></ion-icon>
                    </span>
                    <input type="text" placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..." />
                </div>
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
