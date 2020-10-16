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