import { Button } from "@material-ui/core";
// import AgoraRTM from 'agora-rtm-sdk';
import { useEffect, useState } from 'react';


function RTMButton(props) {
    const {
        apiMethod,
        ...other
    } = props;
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        import("agora-rtm-sdk").then(mod => {
            return mod.default
        }).then(AgoraRTM => {
            console.log(AgoraRTM)
            const client = AgoraRTM.createInstance('app-id');
            const channel = client.createChannel('test');
            channel.join().then(() => {
                /* Your code for handling the event of a join-channel success. */
                console.log('AgoraRTM client login success');
                setLoggedIn(true);

            }).catch(error => {
                /* Your code for handling the event of a join-channel failure. */
                console.log('AgoraRTM client login failure', error);
                setLoggedIn(false);
            });
        })
    })

    function handleClick() {
        useEffect(() => {
            channel.sendMessage({ text: apiMethod }).then(() => {
                /* Your code for handling events, such as a channel message-send success. */
                console.log('Sent: ', apiMethod);
            }).catch(error => {
                /* Your code for handling events, such as a channel message-send failure. */
                console.log('Send Message Failure', error)
            });
        }, [loggedIn])
    }

    return (<button onClick={handleClick}></button>);
}

export default RTMButton;