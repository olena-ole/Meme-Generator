import './meme.css';

export default function Meme() {
    return (
        <main>
            <form className="form">
                <div className="input--container">
                    <input className="form--input" type="text" value="" placeholder="Top text" name="top"/>
                    <input className="form--input"type="text" value="" placeholder="Bottom text" name="bottom"/>
                </div>
                <button className="form--submit">Get a new meme image</button>
            </form>
        </main>
    )
}