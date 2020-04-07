exports.ids = [0];
exports.modules = {

/***/ "../asm-video-chat/pkg/video_chat.js":
/*!*******************************************!*\
  !*** ../asm-video-chat/pkg/video_chat.js ***!
  \*******************************************/
/*! exports provided: init_panic_hook, ConnectionOffer, Streaming, __wbindgen_object_drop_ref, __wbindgen_object_clone_ref, __wbindgen_string_new, __wbindgen_is_function, __wbindgen_cb_drop, __wbindgen_json_parse, __wbg_instanceof_Window_a633dbe0900c728a, __wbg_document_07444f1bbea314bb, __wbg_navigator_849182c6ea6e2f9a, __wbg_createElement_5a267cb074dc073b, __wbg_width_2fcac41581e9c8b8, __wbg_height_ea955a599358849b, __wbg_getUserMedia_8baa33fb0626c558, __wbg_instanceof_RtcIceCandidate_2d0eddf366a8f629, __wbg_mediaDevices_eb0ae72eca099c17, __wbg_appendChild_c1802f48577b21f6, __wbg_getTracks_e251a1abdd5ca5dd, __wbg_log_c180b836187d3c94, __wbg_onicecandidate_6984c09711939c96, __wbg_ontrack_2c61053781f54f08, __wbg_newwithconfiguration_9d68c3ece2b922a0, __wbg_addIceCandidate_c2026df139714c66, __wbg_addTrack_0a3814fe228148c3, __wbg_createAnswer_649105dd54c33569, __wbg_createOffer_1c8b8954fdeac7c7, __wbg_setLocalDescription_9c325a8398b42d82, __wbg_setRemoteDescription_c4d6cf6e6778af17, __wbg_srcObject_4ad75e5ae2e998f2, __wbg_srcObject_912f785e056a12ea, __wbg_autoplay_1f04bfad6ad4e631, __wbg_muted_6dae64a55db68c00, __wbg_get_82c22aeeb618210d, __wbg_length_1f2b77c3caba45bb, __wbg_get_8fd175832d82a656, __wbg_call_804d3ad7e8acd4d5, __wbg_new_ec28d6ba821801cb, __wbg_push_ffaa2df7422d3b4c, __wbg_newnoargs_ebdc90c3d1e4e55d, __wbg_call_1ad0eb4a7ab279eb, __wbg_new_937729a89a522fb5, __wbg_new_1bf1b0dbcaa9ee96, __wbg_resolve_3e5970e9c931a3c2, __wbg_then_d797310661d9e275, __wbg_then_e37e0b9ef0995585, __wbg_globalThis_48a5e9494e623f26, __wbg_self_25067cb019cade42, __wbg_window_9e80200b35aa30f8, __wbg_global_7583a634265a91fc, __wbindgen_is_undefined, __wbg_set_5cbed684ac2b1ce9, __wbg_new_59cb74e423758ede, __wbg_stack_558ba5917b466edd, __wbg_error_4bb6c2a97407129a, __wbindgen_string_get, __wbindgen_debug_string, __wbindgen_throw, __wbindgen_closure_wrapper130, __wbindgen_closure_wrapper151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init_panic_hook", function() { return init_panic_hook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionOffer", function() { return ConnectionOffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Streaming", function() { return Streaming; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_drop_ref", function() { return __wbindgen_object_drop_ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_clone_ref", function() { return __wbindgen_object_clone_ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_string_new", function() { return __wbindgen_string_new; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_is_function", function() { return __wbindgen_is_function; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_cb_drop", function() { return __wbindgen_cb_drop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_json_parse", function() { return __wbindgen_json_parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_instanceof_Window_a633dbe0900c728a", function() { return __wbg_instanceof_Window_a633dbe0900c728a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_document_07444f1bbea314bb", function() { return __wbg_document_07444f1bbea314bb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_navigator_849182c6ea6e2f9a", function() { return __wbg_navigator_849182c6ea6e2f9a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createElement_5a267cb074dc073b", function() { return __wbg_createElement_5a267cb074dc073b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_width_2fcac41581e9c8b8", function() { return __wbg_width_2fcac41581e9c8b8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_height_ea955a599358849b", function() { return __wbg_height_ea955a599358849b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getUserMedia_8baa33fb0626c558", function() { return __wbg_getUserMedia_8baa33fb0626c558; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_instanceof_RtcIceCandidate_2d0eddf366a8f629", function() { return __wbg_instanceof_RtcIceCandidate_2d0eddf366a8f629; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_mediaDevices_eb0ae72eca099c17", function() { return __wbg_mediaDevices_eb0ae72eca099c17; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_appendChild_c1802f48577b21f6", function() { return __wbg_appendChild_c1802f48577b21f6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getTracks_e251a1abdd5ca5dd", function() { return __wbg_getTracks_e251a1abdd5ca5dd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_log_c180b836187d3c94", function() { return __wbg_log_c180b836187d3c94; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_onicecandidate_6984c09711939c96", function() { return __wbg_onicecandidate_6984c09711939c96; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_ontrack_2c61053781f54f08", function() { return __wbg_ontrack_2c61053781f54f08; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithconfiguration_9d68c3ece2b922a0", function() { return __wbg_newwithconfiguration_9d68c3ece2b922a0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_addIceCandidate_c2026df139714c66", function() { return __wbg_addIceCandidate_c2026df139714c66; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_addTrack_0a3814fe228148c3", function() { return __wbg_addTrack_0a3814fe228148c3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createAnswer_649105dd54c33569", function() { return __wbg_createAnswer_649105dd54c33569; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createOffer_1c8b8954fdeac7c7", function() { return __wbg_createOffer_1c8b8954fdeac7c7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_setLocalDescription_9c325a8398b42d82", function() { return __wbg_setLocalDescription_9c325a8398b42d82; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_setRemoteDescription_c4d6cf6e6778af17", function() { return __wbg_setRemoteDescription_c4d6cf6e6778af17; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_srcObject_4ad75e5ae2e998f2", function() { return __wbg_srcObject_4ad75e5ae2e998f2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_srcObject_912f785e056a12ea", function() { return __wbg_srcObject_912f785e056a12ea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_autoplay_1f04bfad6ad4e631", function() { return __wbg_autoplay_1f04bfad6ad4e631; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_muted_6dae64a55db68c00", function() { return __wbg_muted_6dae64a55db68c00; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_get_82c22aeeb618210d", function() { return __wbg_get_82c22aeeb618210d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_length_1f2b77c3caba45bb", function() { return __wbg_length_1f2b77c3caba45bb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_get_8fd175832d82a656", function() { return __wbg_get_8fd175832d82a656; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_call_804d3ad7e8acd4d5", function() { return __wbg_call_804d3ad7e8acd4d5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_ec28d6ba821801cb", function() { return __wbg_new_ec28d6ba821801cb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_push_ffaa2df7422d3b4c", function() { return __wbg_push_ffaa2df7422d3b4c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_newnoargs_ebdc90c3d1e4e55d", function() { return __wbg_newnoargs_ebdc90c3d1e4e55d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_call_1ad0eb4a7ab279eb", function() { return __wbg_call_1ad0eb4a7ab279eb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_937729a89a522fb5", function() { return __wbg_new_937729a89a522fb5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_1bf1b0dbcaa9ee96", function() { return __wbg_new_1bf1b0dbcaa9ee96; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_resolve_3e5970e9c931a3c2", function() { return __wbg_resolve_3e5970e9c931a3c2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_then_d797310661d9e275", function() { return __wbg_then_d797310661d9e275; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_then_e37e0b9ef0995585", function() { return __wbg_then_e37e0b9ef0995585; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_globalThis_48a5e9494e623f26", function() { return __wbg_globalThis_48a5e9494e623f26; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_self_25067cb019cade42", function() { return __wbg_self_25067cb019cade42; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_window_9e80200b35aa30f8", function() { return __wbg_window_9e80200b35aa30f8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_global_7583a634265a91fc", function() { return __wbg_global_7583a634265a91fc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_is_undefined", function() { return __wbindgen_is_undefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_set_5cbed684ac2b1ce9", function() { return __wbg_set_5cbed684ac2b1ce9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_59cb74e423758ede", function() { return __wbg_new_59cb74e423758ede; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_stack_558ba5917b466edd", function() { return __wbg_stack_558ba5917b466edd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_error_4bb6c2a97407129a", function() { return __wbg_error_4bb6c2a97407129a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_string_get", function() { return __wbindgen_string_get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_debug_string", function() { return __wbindgen_debug_string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_throw", function() { return __wbindgen_throw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper130", function() { return __wbindgen_closure_wrapper130; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper151", function() { return __wbindgen_closure_wrapper151; });
/* harmony import */ var _video_chat_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video_chat_bg.wasm */ "../asm-video-chat/pkg/video_chat_bg.wasm");


const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? __webpack_require__(/*! util */ "util").TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _video_chat_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetUint8Memory0 = new Uint8Array(_video_chat_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

let WASM_VECTOR_LEN = 0;

const lTextEncoder = typeof TextEncoder === 'undefined' ? __webpack_require__(/*! util */ "util").TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _video_chat_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetInt32Memory0 = new Int32Array(_video_chat_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetInt32Memory0;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1 };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) _video_chat_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_export_2"].get(dtor)(a, state.b);
            else state.a = a;
        }
    };
    real.original = state;
    return real;
}
function __wbg_adapter_22(arg0, arg1, arg2) {
    _video_chat_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["_dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h05f8ad9f78de9bdc"](arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_25(arg0, arg1, arg2) {
    _video_chat_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["_dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h3d227ff2f40905d1"](arg0, arg1, addHeapObject(arg2));
}

/**
*/
function init_panic_hook() {
    _video_chat_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["init_panic_hook"]();
}

function handleError(e) {
    _video_chat_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_exn_store"](addHeapObject(e));
}
function __wbg_adapter_102(arg0, arg1, arg2, arg3) {
    _video_chat_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["wasm_bindgen__convert__closures__invoke2_mut__h78df2494b8de99b2"](arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
}

/**
*/
class ConnectionOffer {

    static __wrap(ptr) {
        const obj = Object.create(ConnectionOffer.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        _video_chat_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_connectionoffer_free"](ptr);
    }
    /**
    * @returns {Promise<any>}
    */
    get_offer() {
        var ret = _video_chat_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["connectionoffer_get_offer"](this.ptr);
        return takeObject(ret);
    }
}
/**
*/
class Streaming {

    static __wrap(ptr) {
        const obj = Object.create(Streaming.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        _video_chat_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_streaming_free"](ptr);
    }
    /**
    * @returns {any}
    */
    get_peer() {
        var ret = _video_chat_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["streaming_get_peer"](this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {Element} dom_element
    */
    constructor(dom_element) {
        var ret = _video_chat_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["streaming_new"](addHeapObject(dom_element));
        return Streaming.__wrap(ret);
    }
    /**
    * @param {Function} closure
    */
    set_on_ice_candidate(closure) {
        _video_chat_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["streaming_set_on_ice_candidate"](this.ptr, addHeapObject(closure));
    }
    /**
    * @param {RTCIceCandidate} candidate
    */
    add_ice_candidate(candidate) {
        _video_chat_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["streaming_add_ice_candidate"](this.ptr, addHeapObject(candidate));
    }
    /**
    * @returns {Promise<any>}
    */
    load_video() {
        var ret = _video_chat_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["streaming_load_video"](this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {any} offer
    * @returns {ConnectionOffer}
    */
    accept_offer(offer) {
        var ret = _video_chat_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["streaming_accept_offer"](this.ptr, addHeapObject(offer));
        return ConnectionOffer.__wrap(ret);
    }
    /**
    * @param {any} answer
    * @returns {ConnectionOffer}
    */
    accept_answer(answer) {
        var ret = _video_chat_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["streaming_accept_answer"](this.ptr, addHeapObject(answer));
        return ConnectionOffer.__wrap(ret);
    }
    /**
    * @returns {ConnectionOffer}
    */
    create_offer() {
        var ret = _video_chat_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["streaming_create_offer"](this.ptr);
        return ConnectionOffer.__wrap(ret);
    }
}

const __wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

const __wbindgen_object_clone_ref = function(arg0) {
    var ret = getObject(arg0);
    return addHeapObject(ret);
};

const __wbindgen_string_new = function(arg0, arg1) {
    var ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

const __wbindgen_is_function = function(arg0) {
    var ret = typeof(getObject(arg0)) === 'function';
    return ret;
};

const __wbindgen_cb_drop = function(arg0) {
    const obj = takeObject(arg0).original;
    if (obj.cnt-- == 1) {
        obj.a = 0;
        return true;
    }
    var ret = false;
    return ret;
};

const __wbindgen_json_parse = function(arg0, arg1) {
    var ret = JSON.parse(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

const __wbg_instanceof_Window_a633dbe0900c728a = function(arg0) {
    var ret = getObject(arg0) instanceof Window;
    return ret;
};

const __wbg_document_07444f1bbea314bb = function(arg0) {
    var ret = getObject(arg0).document;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

const __wbg_navigator_849182c6ea6e2f9a = function(arg0) {
    var ret = getObject(arg0).navigator;
    return addHeapObject(ret);
};

const __wbg_createElement_5a267cb074dc073b = function(arg0, arg1, arg2) {
    try {
        var ret = getObject(arg0).createElement(getStringFromWasm0(arg1, arg2));
        return addHeapObject(ret);
    } catch (e) {
        handleError(e)
    }
};

const __wbg_width_2fcac41581e9c8b8 = function(arg0, arg1) {
    getObject(arg0).width = arg1 >>> 0;
};

const __wbg_height_ea955a599358849b = function(arg0, arg1) {
    getObject(arg0).height = arg1 >>> 0;
};

const __wbg_getUserMedia_8baa33fb0626c558 = function(arg0, arg1) {
    try {
        var ret = getObject(arg0).getUserMedia(getObject(arg1));
        return addHeapObject(ret);
    } catch (e) {
        handleError(e)
    }
};

const __wbg_instanceof_RtcIceCandidate_2d0eddf366a8f629 = function(arg0) {
    var ret = getObject(arg0) instanceof RTCIceCandidate;
    return ret;
};

const __wbg_mediaDevices_eb0ae72eca099c17 = function(arg0) {
    try {
        var ret = getObject(arg0).mediaDevices;
        return addHeapObject(ret);
    } catch (e) {
        handleError(e)
    }
};

const __wbg_appendChild_c1802f48577b21f6 = function(arg0, arg1) {
    try {
        var ret = getObject(arg0).appendChild(getObject(arg1));
        return addHeapObject(ret);
    } catch (e) {
        handleError(e)
    }
};

const __wbg_getTracks_e251a1abdd5ca5dd = function(arg0) {
    var ret = getObject(arg0).getTracks();
    return addHeapObject(ret);
};

const __wbg_log_c180b836187d3c94 = function(arg0) {
    console.log(getObject(arg0));
};

const __wbg_onicecandidate_6984c09711939c96 = function(arg0, arg1) {
    getObject(arg0).onicecandidate = getObject(arg1);
};

const __wbg_ontrack_2c61053781f54f08 = function(arg0, arg1) {
    getObject(arg0).ontrack = getObject(arg1);
};

const __wbg_newwithconfiguration_9d68c3ece2b922a0 = function(arg0) {
    try {
        var ret = new RTCPeerConnection(getObject(arg0));
        return addHeapObject(ret);
    } catch (e) {
        handleError(e)
    }
};

const __wbg_addIceCandidate_c2026df139714c66 = function(arg0, arg1) {
    var ret = getObject(arg0).addIceCandidate(getObject(arg1));
    return addHeapObject(ret);
};

const __wbg_addTrack_0a3814fe228148c3 = function(arg0, arg1, arg2) {
    var ret = getObject(arg0).addTrack(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
};

const __wbg_createAnswer_649105dd54c33569 = function(arg0) {
    var ret = getObject(arg0).createAnswer();
    return addHeapObject(ret);
};

const __wbg_createOffer_1c8b8954fdeac7c7 = function(arg0, arg1) {
    var ret = getObject(arg0).createOffer(getObject(arg1));
    return addHeapObject(ret);
};

const __wbg_setLocalDescription_9c325a8398b42d82 = function(arg0, arg1) {
    var ret = getObject(arg0).setLocalDescription(getObject(arg1));
    return addHeapObject(ret);
};

const __wbg_setRemoteDescription_c4d6cf6e6778af17 = function(arg0, arg1) {
    var ret = getObject(arg0).setRemoteDescription(getObject(arg1));
    return addHeapObject(ret);
};

const __wbg_srcObject_4ad75e5ae2e998f2 = function(arg0) {
    var ret = getObject(arg0).srcObject;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

const __wbg_srcObject_912f785e056a12ea = function(arg0, arg1) {
    getObject(arg0).srcObject = getObject(arg1);
};

const __wbg_autoplay_1f04bfad6ad4e631 = function(arg0, arg1) {
    getObject(arg0).autoplay = arg1 !== 0;
};

const __wbg_muted_6dae64a55db68c00 = function(arg0, arg1) {
    getObject(arg0).muted = arg1 !== 0;
};

const __wbg_get_82c22aeeb618210d = function(arg0, arg1) {
    var ret = getObject(arg0)[arg1 >>> 0];
    return addHeapObject(ret);
};

const __wbg_length_1f2b77c3caba45bb = function(arg0) {
    var ret = getObject(arg0).length;
    return ret;
};

const __wbg_get_8fd175832d82a656 = function(arg0, arg1) {
    try {
        var ret = Reflect.get(getObject(arg0), getObject(arg1));
        return addHeapObject(ret);
    } catch (e) {
        handleError(e)
    }
};

const __wbg_call_804d3ad7e8acd4d5 = function(arg0, arg1) {
    try {
        var ret = getObject(arg0).call(getObject(arg1));
        return addHeapObject(ret);
    } catch (e) {
        handleError(e)
    }
};

const __wbg_new_ec28d6ba821801cb = function() {
    var ret = new Array();
    return addHeapObject(ret);
};

const __wbg_push_ffaa2df7422d3b4c = function(arg0, arg1) {
    var ret = getObject(arg0).push(getObject(arg1));
    return ret;
};

const __wbg_newnoargs_ebdc90c3d1e4e55d = function(arg0, arg1) {
    var ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

const __wbg_call_1ad0eb4a7ab279eb = function(arg0, arg1, arg2) {
    try {
        var ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
        return addHeapObject(ret);
    } catch (e) {
        handleError(e)
    }
};

const __wbg_new_937729a89a522fb5 = function() {
    var ret = new Object();
    return addHeapObject(ret);
};

const __wbg_new_1bf1b0dbcaa9ee96 = function(arg0, arg1) {
    try {
        var state0 = {a: arg0, b: arg1};
        var cb0 = (arg0, arg1) => {
            const a = state0.a;
            state0.a = 0;
            try {
                return __wbg_adapter_102(a, state0.b, arg0, arg1);
            } finally {
                state0.a = a;
            }
        };
        var ret = new Promise(cb0);
        return addHeapObject(ret);
    } finally {
        state0.a = state0.b = 0;
    }
};

const __wbg_resolve_3e5970e9c931a3c2 = function(arg0) {
    var ret = Promise.resolve(getObject(arg0));
    return addHeapObject(ret);
};

const __wbg_then_d797310661d9e275 = function(arg0, arg1) {
    var ret = getObject(arg0).then(getObject(arg1));
    return addHeapObject(ret);
};

const __wbg_then_e37e0b9ef0995585 = function(arg0, arg1, arg2) {
    var ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
};

const __wbg_globalThis_48a5e9494e623f26 = function() {
    try {
        var ret = globalThis.globalThis;
        return addHeapObject(ret);
    } catch (e) {
        handleError(e)
    }
};

const __wbg_self_25067cb019cade42 = function() {
    try {
        var ret = self.self;
        return addHeapObject(ret);
    } catch (e) {
        handleError(e)
    }
};

const __wbg_window_9e80200b35aa30f8 = function() {
    try {
        var ret = window.window;
        return addHeapObject(ret);
    } catch (e) {
        handleError(e)
    }
};

const __wbg_global_7583a634265a91fc = function() {
    try {
        var ret = global.global;
        return addHeapObject(ret);
    } catch (e) {
        handleError(e)
    }
};

const __wbindgen_is_undefined = function(arg0) {
    var ret = getObject(arg0) === undefined;
    return ret;
};

const __wbg_set_5cbed684ac2b1ce9 = function(arg0, arg1, arg2) {
    try {
        var ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
        return ret;
    } catch (e) {
        handleError(e)
    }
};

const __wbg_new_59cb74e423758ede = function() {
    var ret = new Error();
    return addHeapObject(ret);
};

const __wbg_stack_558ba5917b466edd = function(arg0, arg1) {
    var ret = getObject(arg1).stack;
    var ptr0 = passStringToWasm0(ret, _video_chat_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"], _video_chat_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"]);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

const __wbg_error_4bb6c2a97407129a = function(arg0, arg1) {
    try {
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        _video_chat_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](arg0, arg1);
    }
};

const __wbindgen_string_get = function(arg0, arg1) {
    const obj = getObject(arg1);
    var ret = typeof(obj) === 'string' ? obj : undefined;
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, _video_chat_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"], _video_chat_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"]);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

const __wbindgen_debug_string = function(arg0, arg1) {
    var ret = debugString(getObject(arg1));
    var ptr0 = passStringToWasm0(ret, _video_chat_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"], _video_chat_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"]);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

const __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

const __wbindgen_closure_wrapper130 = function(arg0, arg1, arg2) {
    var ret = makeMutClosure(arg0, arg1, 36, __wbg_adapter_25);
    return addHeapObject(ret);
};

const __wbindgen_closure_wrapper151 = function(arg0, arg1, arg2) {
    var ret = makeMutClosure(arg0, arg1, 48, __wbg_adapter_22);
    return addHeapObject(ret);
};



/***/ }),

/***/ "../asm-video-chat/pkg/video_chat_bg.wasm":
/*!************************************************!*\
  !*** ../asm-video-chat/pkg/video_chat_bg.wasm ***!
  \************************************************/
/*! exports provided: memory, __wbg_streaming_free, streaming_get_peer, streaming_new, streaming_set_on_ice_candidate, streaming_add_ice_candidate, streaming_load_video, streaming_accept_offer, streaming_accept_answer, streaming_create_offer, __wbg_connectionoffer_free, connectionoffer_get_offer, init_panic_hook, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_export_2, _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h05f8ad9f78de9bdc, _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h3d227ff2f40905d1, __wbindgen_exn_store, wasm_bindgen__convert__closures__invoke2_mut__h78df2494b8de99b2, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Instantiate WebAssembly module
var wasmExports = __webpack_require__.w[module.i];
__webpack_require__.r(exports);
// export exports from WebAssembly module
for(var name in wasmExports) if(name != "__webpack_init__") exports[name] = wasmExports[name];
// exec imports from WebAssembly module (for esm order)
/* harmony import */ var m0 = __webpack_require__(/*! ./video_chat.js */ "../asm-video-chat/pkg/video_chat.js");


// exec wasm module
wasmExports["__webpack_init__"]()

/***/ })

};;
//# sourceMappingURL=0.js.map