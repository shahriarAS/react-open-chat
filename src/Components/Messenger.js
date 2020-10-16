import React, { useEffect, useState } from "react";
import Interface from "./Interface";
import firebase from "./FireBaseConfig";

function Messenger(props) {
    // State Declared
    const [current, setCurrent] = useState("")
    const [message, setMessage] = useState({})
    const { user } = props;

    function playAudio() {
        new Audio("https://d6cp9b00-a.akamaihd.net/downloads/ringtones/files/mp3/facebook-messenger-tone-wapking-fm-mp3-17015-19072-43455.mp3").play();
      }


    useEffect(() => {
        firebase.database().ref().child("messages").on("value", snapshot => {
            if (snapshot.val() != null) {
                var temp = Object.keys(snapshot.val())
                setMessage(snapshot.val())
                // console.log("Message Sound")
                temp.map(item => {
                    if (temp[temp.length - 1] == item && snapshot.val()[item].name !== user.displayName) {
                        playAudio();                        
                    }
                })
            }
        })
    }, [])

    //Save Message from Current When Send Click
    function onSubmit(event) {
        event.preventDefault();
        firebase.database().ref().child("messages").push(
            { name: user.displayName, text: current, time: Date.now() }
        )
        setCurrent("")
    }

    return (
        <div>
            <Interface message={message} current={current} setcurrent={setCurrent} onsubmit={onSubmit} user={user} />
        </div>
    )
}

export default Messenger;