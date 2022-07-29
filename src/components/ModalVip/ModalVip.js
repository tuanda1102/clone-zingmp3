import React from 'react';

export default function ModalVip() {
    return (
        <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-vip modal-dialog  modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-vip-header">
                        <div className="modal-vip-title">Dành Cho Tài Khoản VIP</div>
                    </div>
                    <button className="modal-vip-close" data-bs-dismiss="modal" aria-label="Close">
                        <ion-icon name="close-outline" />
                    </button>
                    <div className="modal-vip-body">
                        Theo yêu cầu của đơn vị sở hữu bản quyền, bạn cần tài khoản VIP để nghe bài hát này.
                    </div>
                    <a href="/" className="modal-vip-btn">
                        NÂNG CẤP VIP
                    </a>
                </div>
            </div>
        </div>
    );
}
