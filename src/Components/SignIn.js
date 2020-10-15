import React from "react";
import firebase from "./FireBaseConfig";
import { useAuthState } from "react-firebase-hooks/auth"
import Messenger from "./Messenger";

const auth = firebase.auth();

function SignIn(props) {
    const [user] = useAuthState(auth)

    function signInWithGoogle() {
        var provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then(function (result) {
            var user = result.user;
        })
    }

    return (
        <div>
            <section className="chatbox">
                <h2 className="ChatHead">Open Chat</h2>
                <section className="chat-window">
                    <div className="sign-btn">{user ? <Messenger user={user} /> : (<button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>)}</div>
                </section>
            </section>
        </div>
    )
}

export default SignIn;