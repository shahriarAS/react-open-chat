import React, { useEffect, useRef } from "react";
import firebase from "./FireBaseConfig";
const auth = firebase.auth();

function Interface(props) {
    const { message, current, setcurrent, onsubmit, user } = props;
    const divref = useRef(null);

    useEffect(() => {
        divref.current.scrollIntoView({behavior: "smooth"});
    })
    
    return (
        <div>
            <section className="chatbox">
                <h2 className="ChatHead">Open Chat</h2>
                <button onClick={() => auth.signOut()}>Sign Out</button>
                <section className="chat-window">
                    {message ? Object.keys(message).map(item => (
                        <div key={message[item].time}>
                            <article className={message[item].name === user.displayName ? "msg-container msg-self" : "msg-container msg-remote"} id="msg-0">
                                <div className="msg-box">
                                    <div className="flr">
                                        <div className="messages">
                                            <p className="msg" id="msg-1">
                                                {message[item].text}
                                            </p>
                                        </div>
                                        <p className="timestamp"><span className="username">{message[item].name}</span>&bull;<span className="posttime">{(new Date(message[item].time)).toLocaleDateString()}</span></p>
                                    </div>
                                    <img alt="Profile" className="user-img" id="user-0" src={user.photoURL} />
                                </div>
                            </article>
                        </div>
                    )) : ""}
                    <div ref={divref}/>
                </section>
                <form className="chat-input" onSubmit={onsubmit}>
                    <input type="text" value={current} placeholder="Type a message" onChange={(event) => { setcurrent(event.target.value) }} />
                    <button onClick={onsubmit}>
                        <svg styles={"width:24px;height:24px"} viewBox="0 0 24 24"><path fill="rgba(0,0,0,.38)" d="M17,12L12,17V14H8V10H12V7L17,12M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5,8.09V15.91L12,19.85L19,15.91V8.09L12,4.15Z" /></svg>
                    </button>
                </form>
            </section>
        </div>
    )
}

export default Interface;