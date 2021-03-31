import QRCode from 'qrcode.react';



// function makeid(length) {
//     var result = '';
//     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for (var i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
// }

function LivePreview(props) {
    // const channelName = makeid(10);

    return (<div>
        <QRCode value="test" />
        <iframe src="https://appetize.io/embed/01v5xftmejwc1pfmc2mb824ej8"></iframe>
    </div>);
}

export default LivePreview;