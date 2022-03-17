import React, { useState, useEffect } from 'react';
import Chirps from './components/chirps';
import './styles/styles.css'

let myPosts = [
    <Chirps name='Dan Mann' chirp='Boy React sure is fun!' />,
    <Chirps name='Man Dann' chirp='You bet it is!' />,
    <Chirps name='Elon Musk' chirp='Doge coin to the moon!' />
]
let myElements = [];

const App = () => {

    const [username, setUsername] = useState('');
    const [chirp, setChirp] = useState('');
    const [loaded, setLoaded] = useState(false);

    const handleUsername = e => {
        setUsername(e.target.value);
    }

    const handleChirp = e => {
        setChirp(e.target.value);
    }

    const handleClick = e => {
        e.preventDefault();
        if (username != '') {
            setUsername(e.target.value);
            setChirp(e.target.value);
            myPosts.push(<Chirps name={username} chirp={chirp} />)
            myElements = myPosts.map((val, index) => {
                return <div key={index} class="col-12">{val}</div>
            })
            setLoaded(true);
        }
    }

    if (!loaded) {
        return (
            <div className='container'>
                <div>
                    <form className="form-group container row col-8 mr-auto p-1">
                        Username:<input value={username} onChange={handleUsername} className="inputs col-11"></input>
                        Chirp:<input value={chirp} onChange={handleChirp} className="inputs col-11"></input>
                        <button onClick={handleClick} className="badge bg-primary mt-3 p-2">Chirp</button>
                    </form>
                </div>
                <div className="container row col-6 mx-auto p-1">
                    <div className="col-12"><Chirps name='Dan Mann' chirp='Boy React sure is fun!' /></div>
                    <div className="col-12"><Chirps name='Man Dann' chirp='You bet it is!' /></div>
                    <div className="col-12"><Chirps name='Elon Musk' chirp='Doge coin to the moon!' /></div>

                </div>
            </div>
        );
    } else {
        return (
            <div className='container'>
                <div>
                    <form className="form-group container row col-8 mr-auto p-1">
                        Username:<input value={username} onChange={handleUsername} className="inputs col-11"></input>
                        Chirp:<input value={chirp} onChange={handleChirp} className="inputs col-11"></input>
                        <button onClick={handleClick} class="badge bg-primary mt-3">Chirp</button>
                    </form>
                </div>
                <div className="container row col-6 mx-auto p-1">
                    {myElements}
                </div>
            </div>
        )
    }
};

export default App;