(self.webpackChunkearth=self.webpackChunkearth||[]).push([[418],{33946:(r,e,n)=>{"use strict";n.r(e),n.d(e,{getED25519Key:()=>o});var t=n(50108),a=n.n(t),f=n(48764).Buffer;const s=a().lowlevel;function o(r){let e;e="string"==typeof r?f.from(r,"hex"):r;const n=new Uint8Array(64),t=[s.gf(),s.gf(),s.gf(),s.gf()],a=new Uint8Array([...new Uint8Array(e),...new Uint8Array(32)]),o=new Uint8Array(32);s.crypto_hash(n,a,32),n[0]&=248,n[31]&=127,n[31]|=64,s.scalarbase(t,n),s.pack(o,t);for(let r=0;r<32;r+=1)a[r+32]=o[r];return{sk:f.from(a),pk:f.from(o)}}},78848:()=>{}}]);