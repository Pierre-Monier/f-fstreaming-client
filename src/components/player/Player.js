import React from 'react';
import ReactPlayer from 'react-player';

const Player = ({subtitles, src}) => {

    return (
    <div className='video'>
        <ReactPlayer
            url={[{src: src, type: src.includes('.mp4') ? 'video/mp4' : 'video/webm'}]}
            className='react-player'
            controls
            width='100%'
            height='100%'
            config={{ file: {
            attributes: {
                crossOrigin: 'true',
                id: 'player'
            },
            tracks: subtitles.map(el => {
                return {kind: 'subtitles', src: el.subtitle_name, label: el.langue, srcLang: el.code} 
            })
            }}}
        />
    </div>
    )
}

export default Player;