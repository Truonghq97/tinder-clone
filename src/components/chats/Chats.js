import React from 'react'

import Chat from "../chat/Chat";
import './Chats.css';

function Chats() {
    return (
        <div className="chats">
            <Chat 
                name="IU"
                message="YO whats up!"
                timestamp="40s second ago"
                profilePic="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.0-9/120316217_3465070713555410_8219981626973316783_o.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=3f_tNVDr5JwAX8ixXby&_nc_ht=scontent.fsgn2-6.fna&oh=44237ac049f8e88dc9ee76ec564ba732&oe=5FA625C7"
            />
            <Chat 
                name="Rosé"
                message="YO whats up!"
                timestamp="40s second ago"
                profilePic="https://ge.lnwfile.com/_resize_images/600/600/o5/ko/mp.jpg"
            />
            <Chat 
                name="Jisoo"
                message="YO whats up!"
                timestamp="40s second ago"
                profilePic="https://shelikes.net/wp-content/uploads/2020/04/43ef1e11611723fbfd7d2484d23e9d7f-Copy.jpg"
            />
            <Chat 
                name="Lisa"
                message="YO whats up!"
                timestamp="40s second ago"
                profilePic="https://image.plo.vn/w653/Uploaded/2020/xpckxpiu/2020_04_28/lisa-plo-3_xxxl.png"
            />
            <Chat 
                name="Jennie"
                message="YO whats up!"
                timestamp="40s second ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/9/99/Jennie_Kim_for_Marie_Claire_Korea_Magazine_on_October_9%2C_2018_%285%29.png"
            />
        </div>
    )
}

export default Chats 
