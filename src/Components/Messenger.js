import React, { useEffect, useState } from "react";
import Interface from "./Interface";
import firebase from "./FireBaseConfig";

function Messenger(props) {
    // State Declared
    const [current, setCurrent] = useState("")
    const [message, setMessage] = useState({})
    const { user } = props;


    useEffect(() => {
        firebase.database().ref().child("messages").on("value", snapshot => {
            if (snapshot.val() != null) {
                setMessage(snapshot.val())
            }
        })
    }, [])

    function playAudio() {
        new Audio("https://d6cp9b00-a.akamaihd.net/downloads/ringtones/files/mp3/facebook-messenger-tone-wapking-fm-mp3-17015-19072-43455.mp3").play();
    }

    //Save Message from Current When Send Click
    function onSubmit(event) {
        event.preventDefault();
        firebase.database().ref().child("messages").push(
            { name: user.displayName, text: current, time: Date.now() }
        )
        playAudio()
        setCurrent("")
    }

    return (
        <div>
            <Interface message={message} current={current} setcurrent={setCurrent} onsubmit={onSubmit} user={user} />
        </div>
    )
}

export default Messenger;