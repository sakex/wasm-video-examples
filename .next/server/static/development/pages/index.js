module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/index.js": 0
/******/ 	};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"../asm-video-chat/pkg/video_chat_bg.wasm": function() {
/******/ 			return {
/******/ 				"./video_chat.js": {
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_is_function": function(p0i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbindgen_is_function"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_json_parse": function(p0i32,p1i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbindgen_json_parse"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_a633dbe0900c728a": function(p0i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_instanceof_Window_a633dbe0900c728a"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_07444f1bbea314bb": function(p0i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_document_07444f1bbea314bb"](p0i32);
/******/ 					},
/******/ 					"__wbg_navigator_849182c6ea6e2f9a": function(p0i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_navigator_849182c6ea6e2f9a"](p0i32);
/******/ 					},
/******/ 					"__wbg_createElement_5a267cb074dc073b": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_createElement_5a267cb074dc073b"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_width_2fcac41581e9c8b8": function(p0i32,p1i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_width_2fcac41581e9c8b8"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_height_ea955a599358849b": function(p0i32,p1i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_height_ea955a599358849b"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_getUserMedia_8baa33fb0626c558": function(p0i32,p1i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_getUserMedia_8baa33fb0626c558"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_RtcIceCandidate_2d0eddf366a8f629": function(p0i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_instanceof_RtcIceCandidate_2d0eddf366a8f629"](p0i32);
/******/ 					},
/******/ 					"__wbg_mediaDevices_eb0ae72eca099c17": function(p0i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_mediaDevices_eb0ae72eca099c17"](p0i32);
/******/ 					},
/******/ 					"__wbg_appendChild_c1802f48577b21f6": function(p0i32,p1i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_appendChild_c1802f48577b21f6"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_getTracks_e251a1abdd5ca5dd": function(p0i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_getTracks_e251a1abdd5ca5dd"](p0i32);
/******/ 					},
/******/ 					"__wbg_log_c180b836187d3c94": function(p0i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_log_c180b836187d3c94"](p0i32);
/******/ 					},
/******/ 					"__wbg_onicecandidate_6984c09711939c96": function(p0i32,p1i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_onicecandidate_6984c09711939c96"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_ontrack_2c61053781f54f08": function(p0i32,p1i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_ontrack_2c61053781f54f08"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_newwithconfiguration_9d68c3ece2b922a0": function(p0i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_newwithconfiguration_9d68c3ece2b922a0"](p0i32);
/******/ 					},
/******/ 					"__wbg_addIceCandidate_c2026df139714c66": function(p0i32,p1i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_addIceCandidate_c2026df139714c66"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_addTrack_0a3814fe228148c3": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_addTrack_0a3814fe228148c3"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_createAnswer_649105dd54c33569": function(p0i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_createAnswer_649105dd54c33569"](p0i32);
/******/ 					},
/******/ 					"__wbg_createOffer_1c8b8954fdeac7c7": function(p0i32,p1i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_createOffer_1c8b8954fdeac7c7"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setLocalDescription_9c325a8398b42d82": function(p0i32,p1i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_setLocalDescription_9c325a8398b42d82"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setRemoteDescription_c4d6cf6e6778af17": function(p0i32,p1i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_setRemoteDescription_c4d6cf6e6778af17"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_srcObject_4ad75e5ae2e998f2": function(p0i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_srcObject_4ad75e5ae2e998f2"](p0i32);
/******/ 					},
/******/ 					"__wbg_srcObject_912f785e056a12ea": function(p0i32,p1i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_srcObject_912f785e056a12ea"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_autoplay_1f04bfad6ad4e631": function(p0i32,p1i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_autoplay_1f04bfad6ad4e631"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_muted_6dae64a55db68c00": function(p0i32,p1i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_muted_6dae64a55db68c00"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_get_82c22aeeb618210d": function(p0i32,p1i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_get_82c22aeeb618210d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_length_1f2b77c3caba45bb": function(p0i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_length_1f2b77c3caba45bb"](p0i32);
/******/ 					},
/******/ 					"__wbg_get_8fd175832d82a656": function(p0i32,p1i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_get_8fd175832d82a656"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_804d3ad7e8acd4d5": function(p0i32,p1i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_call_804d3ad7e8acd4d5"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_ec28d6ba821801cb": function() {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_new_ec28d6ba821801cb"]();
/******/ 					},
/******/ 					"__wbg_push_ffaa2df7422d3b4c": function(p0i32,p1i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_push_ffaa2df7422d3b4c"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_ebdc90c3d1e4e55d": function(p0i32,p1i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_newnoargs_ebdc90c3d1e4e55d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_1ad0eb4a7ab279eb": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_call_1ad0eb4a7ab279eb"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_new_937729a89a522fb5": function() {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_new_937729a89a522fb5"]();
/******/ 					},
/******/ 					"__wbg_new_1bf1b0dbcaa9ee96": function(p0i32,p1i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_new_1bf1b0dbcaa9ee96"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_resolve_3e5970e9c931a3c2": function(p0i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_resolve_3e5970e9c931a3c2"](p0i32);
/******/ 					},
/******/ 					"__wbg_then_d797310661d9e275": function(p0i32,p1i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_then_d797310661d9e275"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_then_e37e0b9ef0995585": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_then_e37e0b9ef0995585"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_globalThis_48a5e9494e623f26": function() {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_globalThis_48a5e9494e623f26"]();
/******/ 					},
/******/ 					"__wbg_self_25067cb019cade42": function() {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_self_25067cb019cade42"]();
/******/ 					},
/******/ 					"__wbg_window_9e80200b35aa30f8": function() {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_window_9e80200b35aa30f8"]();
/******/ 					},
/******/ 					"__wbg_global_7583a634265a91fc": function() {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_global_7583a634265a91fc"]();
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbg_set_5cbed684ac2b1ce9": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_set_5cbed684ac2b1ce9"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_new_59cb74e423758ede": function() {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_new_59cb74e423758ede"]();
/******/ 					},
/******/ 					"__wbg_stack_558ba5917b466edd": function(p0i32,p1i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_stack_558ba5917b466edd"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_error_4bb6c2a97407129a": function(p0i32,p1i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbg_error_4bb6c2a97407129a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_string_get": function(p0i32,p1i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbindgen_string_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper130": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbindgen_closure_wrapper130"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper151": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../asm-video-chat/pkg/video_chat.js"].exports["__wbindgen_closure_wrapper151"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["../asm-video-chat/pkg/video_chat_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = new Promise(function (resolve, reject) {
/******/ 					var { readFile } = require('fs');
/******/ 					var { join } = require('path');
/******/
/******/ 					try {
/******/ 						readFile(join(__dirname, "../../..", "static/wasm/" + {"../asm-video-chat/pkg/video_chat_bg.wasm":"9b6990eca760b720acfa"}[wasmModuleId] + ".wasm"), function(err, buffer){
/******/ 							if (err) return reject(err);
/******/
/******/ 							// Fake fetch response
/******/ 							resolve({
/******/ 								arrayBuffer() { return Promise.resolve(buffer); }
/******/ 							});
/******/ 						});
/******/ 					} catch (err) { reject(err); }
/******/ 				});
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise) {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = Promise.all([
/******/ 						bytesPromise.then(function(bytes) { return WebAssembly.compile(bytes); }),
/******/ 						importObject
/******/ 					]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/poker.jsx":
/*!******************************!*\
  !*** ./components/poker.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _class; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class _class extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "feedSocket", () => {
      react__WEBPACK_IMPORTED_MODULE_0__["Component"].turnSeconds = this.socket.on("turnPlayer", () => {});
    });

    this.socket = props.socket;
    this.feedSocket();
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("button", {
      onClick: () => this.socket.emit("join")
    }, "join"), __jsx("button", {
      onClick: () => this.socket.emit("leave")
    }, "leave"), __jsx("button", {
      onClick: () => this.socket.emit("start")
    }, "start"), __jsx("button", {
      onClick: () => this.socket.emit("check")
    }, "Check"));
  }

}

_defineProperty(_class, "turnSeconds", 0);

/***/ }),

/***/ "./components/userList.tsx":
/*!*********************************!*\
  !*** ./components/userList.tsx ***!
  \*********************************/
/*! exports provided: UserList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserList", function() { return UserList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const UserList = ({
  conId,
  members,
  callRemote
}) => __jsx("ul", null, members.map(member => __jsx("li", {
  onClick: () => callRemote(member),
  key: member
}, member != conId ? member : "you")));

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_userList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/userList */ "./components/userList.tsx");
/* harmony import */ var _components_poker_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/poker.jsx */ "./components/poker.jsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      conId: -1,
      members: []
    });

    _defineProperty(this, "socket", void 0);

    _defineProperty(this, "streaming", void 0);

    _defineProperty(this, "candidates", []);

    _defineProperty(this, "peer", void 0);

    _defineProperty(this, "callRemote", async user => {
      this.streaming.set_on_ice_candidate(candidate => {
        this.socket.emit("candidate", {
          candidate: candidate,
          id: user
        });
      });
      const offer = await this.streaming.create_offer().get_offer();
      this.socket.emit("call", {
        id: user,
        selfId: this.state.conId,
        data: JSON.stringify(offer)
      });
    });
  }

  async componentDidMount() {
    const {
      Streaming,
      init_panic_hook
    } = await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! @video-stream */ "../asm-video-chat/pkg/video_chat.js"));
    init_panic_hook();
    Index.Streaming = Streaming;
    this.streaming = new Index.Streaming(document.querySelector("#firstVideo"));
    this.peer = this.streaming.get_peer();
    Reflect.set(window, "peer", this.peer);
    this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()();
    this.socket.on("candidate", ({
      id,
      candidate
    }) => {
      this.candidates.push(candidate);
      this.streaming.add_ice_candidate(candidate);
    });
    this.socket.on("connectionId", conId => this.setState({
      conId
    }));
    this.socket.on("members", members => this.setState({
      members
    }));
    this.socket.on("call", async ({
      id,
      selfId,
      data
    }) => {
      const offer = JSON.parse(data);
      this.streaming.set_on_ice_candidate(candidate => {
        this.socket.emit("candidate", {
          candidate: candidate,
          id: selfId
        });
      });
      const answer = await this.streaming.accept_offer(offer).get_offer();
      this.socket.emit("answer", {
        id: selfId,
        selfId: this.state.conId,
        data: JSON.stringify(answer)
      });
      this.candidates.forEach(c => this.streaming.add_ice_candidate(c));
      console.log(this.candidates);
      await this.streaming.load_video();
    });
    this.socket.on("answer", async ({
      id,
      selfId,
      data
    }) => {
      const offer = JSON.parse(data);
      await this.streaming.accept_answer(offer).get_offer();
      await this.streaming.load_video();
      this.candidates.forEach(c => this.streaming.add_ice_candidate(c));
      console.log(this.candidates);
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.conId != -1 && __jsx(_components_poker_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      socket: this.socket
    }), __jsx("div", {
      id: "firstVideo"
    }), __jsx(_components_userList__WEBPACK_IMPORTED_MODULE_2__["UserList"], _extends({
      callRemote: this.callRemote
    }, this.state)));
  }

}

_defineProperty(Index, "Streaming", void 0);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/olivier/web_conf/wasm-video-examples/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map