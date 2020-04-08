var inp = "test_text!§$%&/()=?``*'_:;,.<>";

var out = btoa(btoa(inp.toString().split("").map((_m)=>{return _m.charCodeAt(0)}).join("")).match(/.{1,2}/g).map((_m)=>{return _m.charCodeAt(0)}).join("").split("").map((_m)=>{return String.fromCharCode(_m+1)}).join(""));
out;
