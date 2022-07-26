import React from 'react';

export default function NewReleaseAlbum({ album }) {
    const RenderAlbum = () => {
        return album.slice(0, 6).map((item) => {
            return (
                <div key={item.encodeId} className="col-4">
                    <div className="album">
                        <div className="album-thumb">
                            <div className="album-thumb-action">
                                <figure className="album-thumb-image thumb-img-block">
                                    <img src={item.thumbnailM} alt="thumb-action" />
                                </figure>
                            </div>
                            <figure className="album-thumb-disk thumb-img-block">
                                <img
                                    src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/album-disk.png"
                                    alt="thumb-action"
                                />
                            </figure>
                        </div>
                        <div className="album-thumb-info">
                            <h4 className="info-title">{item.title}</h4>
                            <h4 className="info-desc">
                                {item.artists.map((artist, index) => {
                                    return (
                                        <a key={index} className="is-ghost" href="/">
                                            {artist.name}
                                            {index < item.artists.length - 1 ? ',' : ''}
                                        </a>
                                    );
                                })}
                            </h4>
                        </div>
                    </div>
                </div>
            );
        });
    };

    return <div className="new-release-album row">{<RenderAlbum />}</div>;
}
