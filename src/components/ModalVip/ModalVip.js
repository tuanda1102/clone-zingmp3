import React from 'react';

export default function ModalVip() {
    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-vip modal-dialog  modal-dialog-centered">
                <div class="modal-content">
                    <div className="modal-vip-header">
                        <div className="modal-vip-title">Dành Cho Tài Khoản VIP</div>
                    </div>
                    <button className="modal-vip-close" data-bs-dismiss="modal" aria-label="Close">
                        <ion-icon name="close-outline"></ion-icon>
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
