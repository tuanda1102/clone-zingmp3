import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import ZingMp3 from 'zingmp3-api';

export default function MyMusic() {
    // console.log(ZingMp3);
    const [music, setMusic] = useState('');
    const getTopZing = async () => {
        let datas = await axios.get(
            'https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST?fbclid=IwAR1V33vXZ_hPHCxbGcr26R4MAB2sSLaK8oBcaPDT0_VTqlfjTphN_6xMUAc',
        );

        console.log(datas.data);

        // setMusic(datas.data.data.items[0].link);

        // return datas.data.songs.top100_VN[0].songs[0].music;
    };

    useEffect(() => {
        getTopZing();
    }, []);
    return (
        <div className="mymusic">
            <h2>my music</h2>
            <audio
                controls
                src={
                    'https://mp3-s1-zmp3.zmdcdn.me/a8cb7f7a993b7065292a/6349799785833644892?authen=exp=1656823078~acl=/a8cb7f7a993b7065292a/*~hmac=981aecedf75b5c028b0dbf8952d00af6&fs=MTY1NjY1MDI3ODkxNHx3ZWJWNnwwfDIyMy4yNy4xMTEdUngMTM1'
                }
            ></audio>
        </div>
    );
}
