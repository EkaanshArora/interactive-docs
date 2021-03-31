import dynamic from "next/dynamic";
// const RTMButton = dynamic(
//     () => {
//         return await import('./RTMButton').then((mod) => mod.default)
//     },
//     { ssr: false }
// );

import RTMButton from "./RTMButton"

function RTMWrapper(props) {
    const {
        apiMethod,
        ...other
    } = props;

    return (<RTMButton {...props} />);
}

export default RTMWrapper;