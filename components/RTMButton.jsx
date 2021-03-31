import { Button } from "@material-ui/core";
// import AgoraRTM from 'agora-rtm-sdk';
import { useEffect, useRef, useState } from 'react';


function RTMButton(props) {
    const {
        apiMethod,
        ...other
    } = props;
    const [loggedIn, setLoggedIn] = useState(false);
    const channelRef = useRef(null);

    useEffect(() => {
        async function rtm(){
            const mod =  await import("agora-rtm-sdk")
            const AgoraRTM = mod.default;
            console.log(AgoraRTM)
            const client = AgoraRTM.createInstance('029250729b864e369e870703ac3fd265');
            const details = await client.login({
                uid: 'new users',
                token: null
            });
            console.log('details', details);
            const channel = client.createChannel('test');
            channelRef.current = channel;
            channel.join().then(() => {
                /* Your code for handling the event of a join-channel success. */
                console.log('AgoraRTM client login success');
                setLoggedIn(true);

            }).catch(error => {
                /* Your code for handling the event of a join-channel failure. */
                console.log('AgoraRTM client login failure', error);
                setLoggedIn(false);
            });
            
        }
        rtm();
    },[])

    function handleClick() {
        const channel = channelRef.current;
        channel.sendMessage({ text: apiMethod }).then(() => {
            /* Your code for handling events, such as a channel message-send success. */
            console.log('Sent: ', apiMethod);
        }).catch(error => {
            /* Your code for handling events, such as a channel message-send failure. */
            console.log('Send Message Failure', error)
        });
    }

    return (<button disabled={!loggedIn} onClick={handleClick}>Open in android app</button>);
}

export default RTMButton;