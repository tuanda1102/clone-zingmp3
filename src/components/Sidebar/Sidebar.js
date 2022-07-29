import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar({ controlsHide }) {
    return (
        <Fragment>
            <div style={controlsHide ? { height: '100%' } : { height: 'calc(100vh - 90px)' }} className="sidebar">
                <Link to="/" className="sidebar_header">
                    <img
                        className="logo"
                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
                        alt="logo"
                    />
                </Link>

                <div className="navbar-container">
                    {/* MENU */}
                    <div className="nav-menu">
                        <div className="sidebar-item">
                            <Link className="sidebar-item-link" to="/mymusic">
                                <i className="sidebar-icon">
                                    <ion-icon className="sidebar-icon-item" name="albums-outline"></ion-icon>
                                </i>
                                <span className="nav-title">Cá Nhân</span>
                            </Link>
                        </div>
                        <div className="sidebar-item active">
                            <Link className="sidebar-item-link" to="/">
                                <i className="sidebar-icon">
                                    <ion-icon className="sidebar-icon-item" name="radio-button-off-outline"></ion-icon>
                                </i>

                                <span className="nav-title">Khám Phá</span>
                            </Link>
                        </div>
                        <div className="sidebar-item">
                            <Link className="sidebar-item-link" to="/zingchart">
                                <i className="sidebar-icon">
                                    <ion-icon className="sidebar-icon-item" name="analytics-outline"></ion-icon>
                                </i>

                                <span className="nav-title">#zingchart</span>
                            </Link>
                        </div>
                        <div className="sidebar-item">
                            <a className="sidebar-item-link" href="/">
                                <i className="sidebar-icon">
                                    <ion-icon className="sidebar-icon-item" name="radio-outline"></ion-icon>
                                </i>

                                <span className="nav-title">Radio</span>
                            </a>
                        </div>
                        <div className="sidebar-item">
                            <a className="sidebar-item-link" href="/">
                                <i className="sidebar-icon">
                                    <ion-icon className="sidebar-icon-item" name="newspaper-outline"></ion-icon>
                                </i>

                                <span className="nav-title">Theo Dõi</span>
                            </a>
                        </div>
                    </div>

                    {/* DIVIDE */}
                    <div className="nav-divide">
                        <div className="sidebar-item">
                            <a className="sidebar-item-link" href="/">
                                <i className="sidebar-icon">
                                    <ion-icon className="sidebar-icon-item" name="musical-notes-outline"></ion-icon>
                                </i>

                                <span className="nav-title">Nhạc Mới</span>
                            </a>
                        </div>
                        <div className="sidebar-item">
                            <a className="sidebar-item-link" href="/">
                                <i className="sidebar-icon">
                                    <ion-icon className="sidebar-icon-item" name="dice-outline"></ion-icon>
                                </i>

                                <span className="nav-title">Thể Loại</span>
                            </a>
                        </div>
                        <div className="sidebar-item">
                            <a className="sidebar-item-link" href="/">
                                <i className="sidebar-icon">
                                    <ion-icon className="sidebar-icon-item" name="star-outline"></ion-icon>
                                </i>

                                <span className="nav-title">Top 100</span>
                            </a>
                        </div>
                        <div className="sidebar-item">
                            <a className="sidebar-item-link" href="/">
                                <i className="sidebar-icon">
                                    <ion-icon className="sidebar-icon-item" name="desktop-outline"></ion-icon>
                                </i>

                                <span className="nav-title">MV</span>
                            </a>
                        </div>

                        {/* THƯ VIỆN */}
                        <div className="sidebar-library-personal">
                            <h4>THƯ VIỆN</h4>
                            <div className="library-personal-list">
                                <div className="sidebar-item">
                                    <a className="sidebar-item-link" href="/">
                                        <i className="sidebar-icon">
                                            <img
                                                className="library-icon-image"
                                                src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.0.13/static/media/my-song.cf0cb0b4.svg"
                                                alt="library-icon"
                                            />
                                        </i>

                                        <span className="nav-title">Bài hát</span>
                                    </a>
                                </div>
                                <div className="sidebar-item">
                                    <a className="sidebar-item-link" href="/">
                                        <i className="sidebar-icon">
                                            <img
                                                className="library-icon-image"
                                                src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.0.13/static/media/my-playlist.7e92a5f0.svg"
                                                alt="library-icon"
                                            />
                                        </i>

                                        <span className="nav-title">Playlist</span>
                                    </a>
                                </div>
                                <div className="sidebar-item">
                                    <a className="sidebar-item-link" href="/">
                                        <i className="sidebar-icon">
                                            <img
                                                className="library-icon-image"
                                                src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.0.13/static/media/my-history.374cb625.svg"
                                                alt="library-icon"
                                            />
                                        </i>

                                        <span className="nav-title">Gần đây</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div style={controlsHide ? { bottom: '0' } : {}} className="sidebar-footer">
                    <div className="sidebar-item">
                        <a className="sidebar-item-link" href="/">
                            <i className="sidebar-icon">
                                <ion-icon name="add-outline"></ion-icon>
                            </i>

                            <span className="nav-title">Tạo Playlist Mới</span>
                        </a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
