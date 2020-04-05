import React, {useEffect} from 'react';
import dynamic from 'next/dynamic'

// const RustComponent = dynamic(() => import('@video-stream'));


export default () => {
    useEffect(() => {
        (async () => {
            const {Streaming} = await import("@video-stream");
            document.querySelector("#start").addEventListener("click", async () => {
                const test = new Streaming(document.querySelector("#firstVideo"));
                const stream = await test.load_video();
                await test.call(stream);
            });
        })();
    });

    return (
        <>
            <div id="firstVideo"></div>
            <button id="start"> Start</button>
        </>
    )
}
