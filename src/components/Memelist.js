import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Meme from './Meme';
import './Memelist.css';

class Memelist extends Component{
    constructor(props){
        super(props);
        this.state = {
            items : []
        }
    }

    componentDidMount(){
        this.getMeme();
    }

    getMeme = async() => {
        let memeResult = "";
        memeResult = await axios.get('https://api.imgflip.com/get_memes');

        let memeList = "";
        memeList = memeResult.data.data.memes;

        let username = "SorrowInRain";
        let password = "orpheus-discord";

        let ids=[];
        let name=[];
        let contentbox = [];
        let memes = [];

        for(var i=0; i<memeList.length; i++){
            ids.push(memeList[i].id);
            name.push(memeList[i].name);
            contentbox.push(memeList[i].box_count);
        }

        for(var i=0; i<memeList.length;i++){
            let request = "";
            request += "?template_id=" + ids[i] + "&username=" + username + "&password=" + password;
            for(var j=0; j<contentbox[i]; j++){
                request += "&boxes[" + j + "][text]=text" + (j+1);
            }

            let result = "";
            result = await axios({
                method: "POST",
                url : "https://api.imgflip.com/caption_image" + request
            });

            let success = result.data.success;
            let resulturl = "";

            if(success){
                resulturl = result.data.data.url;
                memes.push(resulturl);
            }
            else{
                resulturl = "-";
                memes.push(resulturl);
            }
        }

        let items = [];

        for(var i = 0; i<memeList.length; i++){
            items.push({
                id : i+1,
                name : name[i],
                box : contentbox[i],
                imgsrc : memes[i]
            });
        }
        this.setState({items : items})
    }

    render(){
        let {items} = this.state;
        console.log(items)
        return(
            <div>
                <div className="header">
                    <h1>MEME LIST</h1>
                    <p>Powered by : imgflip.com</p>
                    <p className="note">If the images not loaded, wait for a bit.</p>
                </div>
                <div className="content">
                    <Meme data={items} />
                </div>
            </div>
        );
    }
}

export default Memelist;