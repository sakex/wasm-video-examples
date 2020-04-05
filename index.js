/*
 *  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

'use strict';

(async () => {
    const videoStream = await import("../asm-video-chat/pkg/video_chat");
    videoStream.init_panic_hook();


    async function start() {
        const x = new videoStream.Streaming(document.querySelector("#firstVideo"));
        const stream = await x.load_video();
        const p = x.call(stream);
        const ttt = await p.get_promise();
        console.log(ttt);
        console.log("out")
    }

    document.querySelector("#start").addEventListener("click", start);

})();