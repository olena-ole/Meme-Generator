import { useState, useEffect } from 'react';

import './meme.css';

export default function Meme() {

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    });

    const [allMemeImages, setAllMemeImages] = useState([]);

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function handleChange(e) {
        const {name, value} = e.target;
        setMeme(prev => ({...prev, [name]: value}))
    }

    function getNewImage(e) {
        e.preventDefault();
        const randomIndex = Math.floor(Math.random() * allMemeImages.length);
        const url = allMemeImages[randomIndex].url;
        setMeme(prev => ({...prev, randomImage: url}));
    }

    return (
        <main>
            <form className="form">
                <div className="input--container">
                    <input 
                        className="form--input" 
                        type="text" 
                        placeholder="Top text" 
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input 
                        className="form--input"
                        type="text" 
                        placeholder="Bottom text" 
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button className="form--submit" onClick={getNewImage}>Get a new meme image</button>
            </form>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="random meme"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
};