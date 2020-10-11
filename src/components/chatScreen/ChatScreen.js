import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";

import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "IU",
      image:
        "https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.0-9/120316217_3465070713555410_8219981626973316783_o.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=3f_tNVDr5JwAX8ixXby&_nc_ht=scontent.fsgn2-6.fna&oh=44237ac049f8e88dc9ee76ec564ba732&oe=5FA625C7",
      message: "Whats up",
    },
    {
      name: "IU",
      image:
        "https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.0-9/120316217_3465070713555410_8219981626973316783_o.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=3f_tNVDr5JwAX8ixXby&_nc_ht=scontent.fsgn2-6.fna&oh=44237ac049f8e88dc9ee76ec564ba732&oe=5FA625C7",
      message: "How you like that",
    },
    {
      message: "Hi! How are you IU",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">YOU MATCH WITH IU ON 10/10/2020</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message..."
          type="text"
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
