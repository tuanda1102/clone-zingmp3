import React from 'react';

export default function Header() {
    return (
        <div className="header dflex-center">
            <div className="header-left dflex-center">
                <button className="header-left-btn btn-back al-center">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </button>
                <button className="header-left-btn btn-forward al-center">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </button>
                <div className="search al-center">
                    <span className="search-icon">
                        <ion-icon name="search-outline"></ion-icon>
                    </span>
                    <input type="text" placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..." />
                </div>
            </div>

            <div className="header-right dflex-center">
                <div className="header-right-item">
                    <ion-icon name="diamond-outline"></ion-icon>
                </div>
                <div className="header-right-item">
                    <ion-icon name="download-outline"></ion-icon>
                </div>
                <div className="header-right-item">
                    <ion-icon name="settings-outline"></ion-icon>
                </div>
                <div className="header-right-item avatar">
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>
        </div>
    );
}
