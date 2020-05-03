import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../Orpheus512.png';
import './Commands.css';

function Commands(){
    return(
        <div>
            <div className="header">
                <h1>COMMAND LIST</h1>
                <p>Prefix : !</p>
            </div>
            <div className="content">
                <h3 id="general">General</h3>
                <table className="commands">
                    <tr>
                        <th>Command</th>
                        <th>Description</th>
                        <th>Example</th>
                    </tr>
                    <tr>
                        <td>help</td>
                        <td>Show list of commands that you can use</td>
                        <td>!help</td>
                    </tr>
                </table>

                <h3 id="music">Music Player</h3>
                <table className="commands">
                    <tr>
                        <th>Command</th>
                        <th>Description</th>
                        <th>Example</th>
                    </tr>
                    <tr>
                        <td>play</td>
                        <td>Input song title and Orpheus will play his lyre to you</td>
                        <td>!play &lt;Song-Title&gt; <br></br> !play Never Gonna Give You Up</td>
                    </tr>
                    <tr>
                        <td>nowplaying</td>
                        <td>Show the title of currently played song.</td>
                        <td>!nowplaying</td>
                    </tr>
                    <tr>
                        <td>queue</td>
                        <td>Show the queue of the songs right now</td>
                        <td>!queue</td>
                    </tr>
                    <tr>
                        <td>skip</td>
                        <td>Skip the currently played song</td>
                        <td>!skip</td>
                    </tr>
                    <tr>
                        <td>stop</td>
                        <td>Stop the currently played song and remove all songs from the queue.</td>
                        <td>!stop</td>
                    </tr>
                    <tr>
                        <td>remove</td>
                        <td>Remove the song in queue by index that you input.</td>
                        <td>!remove &lt;Index in Queue&gt; <br></br> !remove 1</td>
                    </tr>
                    <tr>
                        <td>movesong</td>
                        <td>Move the song in queue from some index to the index that you input.</td>
                        <td>!movesong &lt;Index in Queue&gt; &lt;Desired Index&gt;<br></br> !movesong 3 1</td>
                    </tr>
                    <tr>
                        <td>setloop</td>
                        <td>Make your song playlist looping</td>
                        <td>!setloop &lt;on/off&gt; !setloop on</td>
                    </tr>
                    <tr>
                        <td>setshuffle</td>
                        <td>Make your song playlist shuffling</td>
                        <td>!setshuffle &lt;on/off&gt; !setshuffle on</td>
                    </tr>
                    <tr>
                        <td>lyric</td>
                        <td>Didn't know the lyric of your song? Just use this command. You don't have to use any parameter if you want to know the lyrics from the currently played song</td>
                        <td>!lyric [Song-Title]<br></br> !lyric <br></br> !lyric What is Love</td>
                    </tr>
                </table>

                <h3 id="memes">Memes</h3>
                <table className="commands">
                    <tr>
                        <th>Command</th>
                        <th>Description</th>
                        <th>Example</th>
                    </tr>
                    <tr>
                        <td>meme</td>
                        <td>Get your meme with using meme ID from meme list, modify by yourself. The amount of texts that you must input is listed on !memelist</td>
                        <td>!play &lt;Meme-ID&gt; | &lt;Text1&gt; | &lt;Text2&gt; <br></br> !meme 1 | text1 | text2 | text3 </td>
                    </tr>
                    <tr>
                        <td>memelist</td>
                        <td>Show the list of meme and the amount of texts that needed. Each page contain 20 memes.</td>
                        <td>!memelist [Page] <br></br> !memelist 2</td>
                    </tr>
                </table>

                <h3 id="r6s">Rainbow 6 : Siege</h3>
                <table className="commands">
                    <tr>
                        <th>Command</th>
                        <th>Description</th>
                        <th>Example</th>
                    </tr>
                    <tr>
                        <td>strat</td>
                        <td>Get your Get a random strat for your <s>dumber</s> better experience.</td>
                        <td>!strat [Attacker/Defender] <br></br> !strat Attacker </td>
                    </tr>
                    <tr>
                        <td>stats</td>
                        <td>Show your statistics in general. (PC)</td>
                        <td>!stats &lt;Username&gt; <br></br> !stats miner46er</td>
                    </tr>
                    <tr>
                        <td>opstats</td>
                        <td>Get your statistics based on your favourite operator. (PC)</td>
                        <td>!opstats &lt;Username&gt; &lt;Operator&gt;<br></br> !opstats hawntozero Montagne</td>
                    </tr>
                    <tr>
                        <td>opdetail</td>
                        <td>Give the detail of operator.</td>
                        <td>!opdetail &lt;Operator&gt;<br></br> !opdetail Thermite</td>
                    </tr>
                </table>

                <h3 id="misc">Miscellaneous</h3>
                <table className="commands">
                    <tr>
                        <th>Command</th>
                        <th>Description</th>
                        <th>Example</th>
                    </tr>
                    <tr>
                        <td>flip</td>
                        <td>Flip a coin!</td>
                        <td>!flip</td>
                    </tr>
                    <tr>
                        <td>roll</td>
                        <td>Roll a N-side dice</td>
                        <td>!roll &lt;Sides&gt; <br></br> !roll 20</td>
                    </tr>
                    <tr>
                        <td>trivia</td>
                        <td>Get random trivia</td>
                        <td>!trivia</td>
                    </tr>
                    <tr>
                        <td>cat</td>
                        <td>Get random picture of the cutest (and the most annoying) animal in the world</td>
                        <td>!cat</td>
                    </tr>
                </table>
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

export default Commands;