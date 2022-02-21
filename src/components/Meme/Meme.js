import { useState } from 'react';

import './meme.css';
import memesData from '../../memesData';

export default function Meme() {

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    });

    const [allMemeImages, setAllMemeImages] = useState(memesData);

    function getNewImage(e) {
        e.preventDefault();
        const memesArr = allMemeImages.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArr.length);
        const url = memesArr[randomIndex].url;
        setMeme(prev => ({...prev, randomImage: url}));
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
            {/* <img src={meme.randomImage} className="meme--image" alt="random meme" /> */}
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="random meme"/>
                <h2 className="meme--text top">One does not simply</h2>
                <h2 className="meme--text bottom">Walk into Mordor</h2>
            </div>
        </main>
    )
}