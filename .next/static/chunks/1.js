(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../asm-video-chat/pkg/video_chat.js":
/*!*******************************************!*\
  !*** ../asm-video-chat/pkg/video_chat.js ***!
  \*******************************************/
/*! exports provided: init_panic_hook, ConnectionOffer, Streaming, __wbindgen_object_drop_ref, __wbindgen_object_clone_ref, __wbindgen_string_new, __wbindgen_is_function, __wbindgen_cb_drop, __wbindgen_json_parse, __wbg_instanceof_Window_a633dbe0900c728a, __wbg_document_07444f1bbea314bb, __wbg_navigator_849182c6ea6e2f9a, __wbg_createElement_5a267cb074dc073b, __wbg_width_2fcac41581e9c8b8, __wbg_height_ea955a599358849b, __wbg_getUserMedia_8baa33fb0626c558, __wbg_instanceof_RtcIceCandidate_2d0eddf366a8f629, __wbg_mediaDevices_eb0ae72eca099c17, __wbg_appendChild_c1802f48577b21f6, __wbg_getTracks_e251a1abdd5ca5dd, __wbg_log_c180b836187d3c94, __wbg_onicecandidate_6984c09711939c96, __wbg_ontrack_2c61053781f54f08, __wbg_newwithconfiguration_9d68c3ece2b922a0, __wbg_addIceCandidate_c2026df139714c66, __wbg_addTrack_0a3814fe228148c3, __wbg_createAnswer_649105dd54c33569, __wbg_createOffer_1c8b8954fdeac7c7, __wbg_setLocalDescription_9c325a8398b42d82, __wbg_setRemoteDescription_c4d6cf6e6778af17, __wbg_srcObject_4ad75e5ae2e998f2, __wbg_srcObject_912f785e056a12ea, __wbg_autoplay_1f04bfad6ad4e631, __wbg_muted_6dae64a55db68c00, __wbg_get_82c22aeeb618210d, __wbg_length_1f2b77c3caba45bb, __wbg_get_8fd175832d82a656, __wbg_call_804d3ad7e8acd4d5, __wbg_new_ec28d6ba821801cb, __wbg_push_ffaa2df7422d3b4c, __wbg_newnoargs_ebdc90c3d1e4e55d, __wbg_call_1ad0eb4a7ab279eb, __wbg_new_937729a89a522fb5, __wbg_new_1bf1b0dbcaa9ee96, __wbg_resolve_3e5970e9c931a3c2, __wbg_then_d797310661d9e275, __wbg_then_e37e0b9ef0995585, __wbg_globalThis_48a5e9494e623f26, __wbg_self_25067cb019cade42, __wbg_window_9e80200b35aa30f8, __wbg_global_7583a634265a91fc, __wbindgen_is_undefined, __wbg_set_5cbed684ac2b1ce9, __wbg_new_59cb74e423758ede, __wbg_stack_558ba5917b466edd, __wbg_error_4bb6c2a97407129a, __wbindgen_string_get, __wbindgen_debug_string, __wbindgen_throw, __wbindgen_closure_wrapper130, __wbindgen_closure_wrapper151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init_panic_hook", function() { return init_panic_hook; });
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

const lTextDecoder = typeof TextDecoder === 'undefined' ? __webpack_require__(/*! util */ "./node_modules/util/util.js").TextDecoder : TextDecoder;

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

const lTextEncoder = typeof TextEncoder === 'undefined' ? __webpack_require__(/*! util */ "./node_modules/util/util.js").TextEncoder : TextEncoder;

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


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../wasm-video-examples/node_modules/next/node_modules/webpack/buildin/global.js */ "./node_modules/next/node_modules/webpack/buildin/global.js")))

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

/***/ }),

/***/ "./node_modules/util/node_modules/inherits/inherits_browser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/util/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

}]);
//# sourceMappingURL=1.js.map