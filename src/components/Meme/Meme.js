import { useState } from 'react';

import './meme.css';
import memesData from '../../memesData';

export default function Meme() {

    const [memeImage, setMemeImage] = useState('');

    function getNewImage(e) {
        e.preventDefault();
        const memesArr = memesData.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArr.length);
        setMemeImage(memesArr[randomIndex].url);
    }

    return (
        <main>
            <form className="form">
                <div className="input--container">
                    <input className="form--input" type="text" placeholder="Top text" name="top"/>
                    <input className="form--input"type="text" placeholder="Bottom text" name="bottom"/>
                </div>
                <button className="form--submit" onClick={getNewImage}>Get a new meme image</button>
            </form>
            {memeImage && <img src={memeImage} className="meme--img" alt="random meme" />}
        </main>
    )
}