import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../Orpheus512.png';
import './Home.css';

function Home(){
    return(
        <div>
            <div className="header">
                <h1>ORPHEUS</h1>
                <div className="logoContainer">
                    <img className="logo" src={logo} />
                </div>
                <p>Even in Death, I Will Always Be Here for You</p>
            </div>
            <div className="navigation">
                <Link to="/commands"><button className="button-primary">Command List</button></Link>
                <button className="button-primary">Add to Server</button>
                <a href="https://patreon.com/sorrowinrain"><button className="button-primary">Support Us</button></a>
                <button className="button-primary">Contact Us</button>
            </div>
            <div className="author">
                <p id="authors">Meet the Makers</p>
                <div className="authorCard">
                    <img className="card" src="https://cdn.discordapp.com/avatars/514433421142130698/68e2599934b095f6512e681a99facf29.webp" />
                    <div className="container">
                        <h4><b>hawntozero#5059</b></h4>
                    </div>
                </div>
                <div className="authorCard">
                    <img className="card" src="https://cdn.discordapp.com/avatars/218160263361200128/46d58530e383aaa012ac7f79c955d143.webp" />
                    <div className="container">
                        <h4><b>miner46er#3857</b></h4>
                    </div>
                </div>
                <div className="authorCard">
                    <img className="card" src="https://cdn.discordapp.com/avatars/307478723563749376/2d2ca86af531f599247de810a5d3ec91.webp" />
                    <div className="container">
                        <h4><b>SorrowInRain#2851</b></h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;