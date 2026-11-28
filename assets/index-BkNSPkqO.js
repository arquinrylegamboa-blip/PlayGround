(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const tl="187",vd=0,Ol=1,_d=2,Ns=1,Md=2,Ls=3,ji=0,ci=1,Ye=2,os=0,ls=1,ri=2,kl=3,Bl=4,yd=5,rs=100,Sd=101,bd=102,wd=103,Ed=104,Td=200,Ad=201,Rd=202,Cd=203,rh=204,oh=205,Pd=206,Ld=207,Id=208,Dd=209,Nd=210,Ud=211,Fd=212,Od=213,kd=214,io=0,no=1,so=2,zs=3,ao=4,ro=5,oo=6,lo=7,lh=0,Bd=1,zd=2,Ji=0,ch=1,hh=2,dh=3,el=4,uh=5,fh=6,ph=7,mh=300,ds=301,Gs=302,mr=303,gr=304,ki=1e3,Ki=1001,co=1002,Ke=1003,Gd=1004,ta=1005,di=1006,xr=1007,xn=1008,mi=1009,gh=1010,xh=1011,Hs=1012,il=1013,Bi=1014,Ni=1015,zi=1016,nl=1017,sl=1018,us=1020,vh=35902,_h=35899,Mh=1021,yh=1022,Ui=1023,_n=1026,vn=1027,Sh=1028,al=1029,On=1030,rl=1031,ol=1033,ka=33776,Ba=33777,za=33778,Ga=33779,ho=35840,uo=35841,fo=35842,po=35843,mo=36196,go=37492,xo=37496,vo=37488,_o=37489,Ya=37490,Mo=37491,yo=37808,So=37809,bo=37810,wo=37811,Eo=37812,To=37813,Ao=37814,Ro=37815,Co=37816,Po=37817,Lo=37818,Io=37819,Do=37820,No=37821,Uo=36492,Fo=36494,Oo=36495,ko=36283,Bo=36284,$a=36285,zo=36286,Hd=3200,Go=0,Vd=1,gn="",Ee="srgb",Ka="srgb-linear",Za="linear",ve="srgb",vr=7680,Wd=519,Xd=512,qd=513,Yd=514,bh=515,$d=516,Kd=517,wh=518,Eh=519,Th=35044,zl="300 es",Ri=2e3,Vs=2001;function Zd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ja(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Jd(){const n=Ja("canvas");return n.style.display="block",n}const Gl={};function Qa(...n){const t="THREE."+n.shift();console.log(t,...n)}function Ah(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function zt(...n){n=Ah(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function he(...n){n=Ah(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Ha(...n){const t=n.join(" ");t in Gl||(Gl[t]=!0,zt(...n))}function Qd(n,t,e){return new Promise(function(i,s){function a(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}const jd={[io]:io,[so]:oo,[ao]:ao,[zs]:ro,[no]:no,[oo]:so,[lo]:lo,[ro]:zs};class Gn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}}const Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Va=Math.PI/180,Ho=180/Math.PI;function Sn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]).toLowerCase()}function te(n,t,e){return Math.max(t,Math.min(e,n))}function tu(n,t){return(n%t+t)%t}function _r(n,t,e){return(1-e)*n+e*t}function eu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function sr(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Rh(n,t){if(t.constructor===Float32Array)return n;const e=sr(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function Ch(n,t){if(t.constructor===Float32Array)return n;const e=sr(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}const Sl=class Sl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Sl.prototype.isVector2=!0;let rt=Sl;class xs{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,a,r,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=a[r+0],f=a[r+1],p=a[r+2],_=a[r+3];if(d!==_||l!==u||c!==f||h!==p){let g=l*u+c*f+h*p+d*_;g<0&&(u=-u,f=-f,p=-p,_=-_,g=-g);let m=1-o;if(g<.9995){const v=Math.acos(g),y=Math.sin(v);m=Math.sin(m*v)/y,o=Math.sin(o*v)/y,l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+_*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+_*o;const v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,a,r){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=a[r],u=a[r+1],f=a[r+2],p=a[r+3];return t[e]=o*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-o*f,t[e+2]=c*p+h*f+o*u-l*d,t[e+3]=h*p-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(a/2),u=l(i/2),f=l(s/2),p=l(a/2);switch(r){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],a=e[8],r=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(a-c)*f,this._z=(r-s)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(a+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(a-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(r-s)/f,this._x=(a+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,a=t._z,r=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-i*c,this._z=a*h+r*c+i*l-s*o,this._w=r*h-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+a*e,this._w=this._w*l+r*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+a*e,this._w=this._w*l+r*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const bl=class bl{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*s,this.y=a[1]*e+a[4]*i+a[7]*s,this.z=a[2]*e+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*e+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*e+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*e+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),h=2*(o*e-a*s),d=2*(a*i-r*e);return this.x=e+l*c+r*d-o*h,this.y=i+l*h+o*c-a*d,this.z=s+l*d+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s,this.y=a[1]*e+a[5]*i+a[9]*s,this.z=a[2]*e+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,a=t.z,r=e.x,o=e.y,l=e.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Mr.copy(this).projectOnVector(t),this.sub(Mr)}reflect(t){return this.sub(Mr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bl.prototype.isVector3=!0;let R=bl;const Mr=new R,Hl=new xs,wl=class wl{constructor(t,e,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,r,o,l,c)}set(t,e,i,s,a,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=a,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],p=i[8],_=s[0],g=s[3],m=s[6],v=s[1],y=s[4],M=s[7],E=s[2],T=s[5],x=s[8];return a[0]=r*_+o*v+l*E,a[3]=r*g+o*y+l*T,a[6]=r*m+o*M+l*x,a[1]=c*_+h*v+d*E,a[4]=c*g+h*y+d*T,a[7]=c*m+h*M+d*x,a[2]=u*_+f*v+p*E,a[5]=u*g+f*y+p*T,a[8]=u*m+f*M+p*x,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*o*c-i*a*h+i*o*l+s*a*c-s*r*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*r-o*c,u=o*l-h*a,f=c*a-r*l,p=e*d+i*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=d*_,t[1]=(s*c-h*i)*_,t[2]=(o*i-s*r)*_,t[3]=u*_,t[4]=(h*e-s*l)*_,t[5]=(s*a-o*e)*_,t[6]=f*_,t[7]=(i*l-c*e)*_,t[8]=(r*e-i*a)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return Ha("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yr.makeScale(t,e)),this}rotate(t){return Ha("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yr.makeRotation(-t)),this}translate(t,e){return Ha("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};wl.prototype.isMatrix3=!0;let Ht=wl;const yr=new Ht,Vl=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wl=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iu(){const n={enabled:!0,workingColorSpace:Ka,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===ve&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ve&&(s.r=cs(s.r),s.g=cs(s.g),s.b=cs(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gn?Za:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[r].fromXYZ).multiply(this.spaces[a].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ka]:{primaries:t,whitePoint:i,transfer:Za,toXYZ:Vl,fromXYZ:Wl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:t,whitePoint:i,transfer:ve,toXYZ:Vl,fromXYZ:Wl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}}),n}const oe=iu();function Qi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vn;class nu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Vn===void 0&&(Vn=Ja("canvas")),Vn.width=t.width,Vn.height=t.height;const s=Vn.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Vn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ja("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Qi(a[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Qi(e[i]/255)*255):e[i]=Qi(e[i]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let su=0;class ll{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=Sn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Sr(s[r].image)):a.push(Sr(s[r]))}else a=Sr(s);i.url=a}return e||(t.images[this.uuid]=i),i}}function Sr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?nu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}let au=0;const br=new R;class ei extends Gn{constructor(t=ei.DEFAULT_IMAGE,e=ei.DEFAULT_MAPPING,i=Ki,s=Ki,a=di,r=xn,o=Ui,l=mi,c=ei.DEFAULT_ANISOTROPY,h=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=Sn(),this.name="",this.source=new ll(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(br).x}get height(){return this.source.getSize(br).y}get depth(){return this.source.getSize(br).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ki:t.x=t.x-Math.floor(t.x);break;case Ki:t.x=t.x<0?0:1;break;case co:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ki:t.y=t.y-Math.floor(t.y);break;case Ki:t.y=t.y<0?0:1;break;case co:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=mh;ei.DEFAULT_ANISOTROPY=1;const El=class El{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,a;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,M=(f+1)/2,E=(m+1)/2,T=(h+u)/4,x=(d+_)/4,w=(p+g)/4;return y>M&&y>E?y<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(y),s=T/i,a=x/i):M>E?M<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(M),i=T/s,a=w/s):E<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(E),i=x/a,s=w/a),this.set(i,s,a,e),this}let v=Math.sqrt((g-p)*(g-p)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};El.prototype.isVector4=!0;let Re=El;class ru extends Gn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e),this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=new ei({width:t,height:e,depth:i.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:di,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ll(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends ru{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ph extends ei{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ou extends ei{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const nr=class nr{constructor(t,e,i,s,a,r,o,l,c,h,d,u,f,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,r,o,l,c,h,d,u,f,p,_,g)}set(t,e,i,s,a,r,o,l,c,h,d,u,f,p,_,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=a,m[5]=r,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nr().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,s=1/Wn.setFromMatrixColumn(t,0).length(),a=1/Wn.setFromMatrixColumn(t,1).length(),r=1/Wn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){const u=r*h,f=r*d,p=o*h,_=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-_*c,e[9]=-o*l,e[2]=_-u*c,e[6]=p+f*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,p=c*h,_=c*d;e[0]=u+_*o,e[4]=p*o-f,e[8]=r*c,e[1]=r*d,e[5]=r*h,e[9]=-o,e[2]=f*o-p,e[6]=_+u*o,e[10]=r*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,p=c*h,_=c*d;e[0]=u-_*o,e[4]=-r*d,e[8]=p+f*o,e[1]=f+p*o,e[5]=r*h,e[9]=_-u*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const u=r*h,f=r*d,p=o*h,_=o*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,f=r*c,p=o*l,_=o*c;e[0]=l*h,e[4]=_-u*d,e[8]=p*d+f,e[1]=d,e[5]=r*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-_*d}else if(t.order==="XZY"){const u=r*l,f=r*c,p=o*l,_=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=r*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lu,t,cu)}lookAt(t,e,i){const s=this.elements;return fi.subVectors(t,e),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),on.crossVectors(i,fi),on.lengthSq()===0&&(Math.abs(i.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),on.crossVectors(i,fi)),on.normalize(),ea.crossVectors(fi,on),s[0]=on.x,s[4]=ea.x,s[8]=fi.x,s[1]=on.y,s[5]=ea.y,s[9]=fi.y,s[2]=on.z,s[6]=ea.z,s[10]=fi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],p=i[2],_=i[6],g=i[10],m=i[14],v=i[3],y=i[7],M=i[11],E=i[15],T=s[0],x=s[4],w=s[8],L=s[12],C=s[1],I=s[5],F=s[9],W=s[13],D=s[2],H=s[6],Y=s[10],B=s[14],nt=s[3],X=s[7],j=s[11],et=s[15];return a[0]=r*T+o*C+l*D+c*nt,a[4]=r*x+o*I+l*H+c*X,a[8]=r*w+o*F+l*Y+c*j,a[12]=r*L+o*W+l*B+c*et,a[1]=h*T+d*C+u*D+f*nt,a[5]=h*x+d*I+u*H+f*X,a[9]=h*w+d*F+u*Y+f*j,a[13]=h*L+d*W+u*B+f*et,a[2]=p*T+_*C+g*D+m*nt,a[6]=p*x+_*I+g*H+m*X,a[10]=p*w+_*F+g*Y+m*j,a[14]=p*L+_*W+g*B+m*et,a[3]=v*T+y*C+M*D+E*nt,a[7]=v*x+y*I+M*H+E*X,a[11]=v*w+y*F+M*Y+E*j,a[15]=v*L+y*W+M*B+E*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],_=t[7],g=t[11],m=t[15],v=l*f-c*u,y=o*f-c*d,M=o*u-l*d,E=r*f-c*h,T=r*u-l*h,x=r*d-o*h;return e*(_*v-g*y+m*M)-i*(p*v-g*E+m*T)+s*(p*y-_*E+m*x)-a*(p*M-_*T+g*x)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(r*h-o*c)-i*(a*h-o*l)+s*(a*c-r*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],_=t[13],g=t[14],m=t[15],v=e*o-i*r,y=e*l-s*r,M=e*c-a*r,E=i*l-s*o,T=i*c-a*o,x=s*c-a*l,w=h*_-d*p,L=h*g-u*p,C=h*m-f*p,I=d*g-u*_,F=d*m-f*_,W=u*m-f*g,D=v*W-y*F+M*I+E*C-T*L+x*w;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/D;return t[0]=(o*W-l*F+c*I)*H,t[1]=(s*F-i*W-a*I)*H,t[2]=(_*x-g*T+m*E)*H,t[3]=(u*T-d*x-f*E)*H,t[4]=(l*C-r*W-c*L)*H,t[5]=(e*W-s*C+a*L)*H,t[6]=(g*M-p*x-m*y)*H,t[7]=(h*x-u*M+f*y)*H,t[8]=(r*F-o*C+c*w)*H,t[9]=(i*C-e*F-a*w)*H,t[10]=(p*T-_*M+m*v)*H,t[11]=(d*M-h*T-f*v)*H,t[12]=(o*L-r*I-l*w)*H,t[13]=(e*I-i*L+s*w)*H,t[14]=(_*y-p*E-g*v)*H,t[15]=(h*E-d*y+u*v)*H,this}scale(t){const e=this.elements,i=t.x,s=t.y,a=t.z;return e[0]*=i,e[4]*=s,e[8]*=a,e[1]*=i,e[5]*=s,e[9]*=a,e[2]*=i,e[6]*=s,e[10]*=a,e[3]*=i,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,a=e._x,r=e._y,o=e._z,l=e._w,c=a+a,h=r+r,d=o+o,u=a*c,f=a*h,p=a*d,_=r*h,g=r*d,m=o*d,v=l*c,y=l*h,M=l*d,E=i.x,T=i.y,x=i.z;return s[0]=(1-(_+m))*E,s[1]=(f+M)*E,s[2]=(p-y)*E,s[3]=0,s[4]=(f-M)*T,s[5]=(1-(u+m))*T,s[6]=(g+v)*T,s[7]=0,s[8]=(p+y)*x,s[9]=(g-v)*x,s[10]=(1-(u+_))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const a=this.determinantAffine();if(a===0)return i.set(1,1,1),e.identity(),this;let r=Wn.set(s[0],s[1],s[2]).length();const o=Wn.set(s[4],s[5],s[6]).length(),l=Wn.set(s[8],s[9],s[10]).length();a<0&&(r=-r),wi.copy(this);const c=1/r,h=1/o,d=1/l;return wi.elements[0]*=c,wi.elements[1]*=c,wi.elements[2]*=c,wi.elements[4]*=h,wi.elements[5]*=h,wi.elements[6]*=h,wi.elements[8]*=d,wi.elements[9]*=d,wi.elements[10]*=d,e.setFromRotationMatrix(wi),i.x=r,i.y=o,i.z=l,this}makePerspective(t,e,i,s,a,r,o=Ri,l=!1){const c=this.elements,h=2*a/(e-t),d=2*a/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s);let p,_;if(l)p=a/(r-a),_=r*a/(r-a);else if(o===Ri)p=-(r+a)/(r-a),_=-2*r*a/(r-a);else if(o===Vs)p=-r/(r-a),_=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,a,r,o=Ri,l=!1){const c=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s);let p,_;if(l)p=1/(r-a),_=r/(r-a);else if(o===Ri)p=-2/(r-a),_=-(r+a)/(r-a);else if(o===Vs)p=-1/(r-a),_=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};nr.prototype.isMatrix4=!0;let ye=nr;const Wn=new R,wi=new ye,lu=new R(0,0,0),cu=new R(1,1,1),on=new R,ea=new R,fi=new R,Xl=new ye,ql=new xs;class Mn{constructor(t=0,e=0,i=0,s=Mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-te(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,f),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Xl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ql.setFromEuler(this),this.setFromQuaternion(ql,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mn.DEFAULT_ORDER="XYZ";class Lh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hu=0;const Yl=new R,Xn=new xs,Vi=new ye,ia=new R,Ss=new R,du=new R,uu=new xs,$l=new R(1,0,0),Kl=new R(0,1,0),Zl=new R(0,0,1),Jl={type:"added"},fu={type:"removed"},qn={type:"childadded",child:null},wr={type:"childremoved",child:null};class Ue extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new R,e=new Mn,i=new xs,s=new R(1,1,1);function a(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new Ht}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xn.setFromAxisAngle(t,e),this.quaternion.multiply(Xn),this}rotateOnWorldAxis(t,e){return Xn.setFromAxisAngle(t,e),this.quaternion.premultiply(Xn),this}rotateX(t){return this.rotateOnAxis($l,t)}rotateY(t){return this.rotateOnAxis(Kl,t)}rotateZ(t){return this.rotateOnAxis(Zl,t)}translateOnAxis(t,e){return Yl.copy(t).applyQuaternion(this.quaternion),this.position.add(Yl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($l,t)}translateY(t){return this.translateOnAxis(Kl,t)}translateZ(t){return this.translateOnAxis(Zl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ia.copy(t):ia.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Ss,ia,this.up):Vi.lookAt(ia,Ss,this.up),this.quaternion.setFromRotationMatrix(Vi),s&&(Vi.extractRotation(s.matrixWorld),Xn.setFromRotationMatrix(Vi),this.quaternion.premultiply(Xn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(he("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jl),qn.child=t,this.dispatchEvent(qn),qn.child=null):he("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fu),wr.child=t,this.dispatchEvent(wr),wr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jl),qn.child=t,this.dispatchEvent(qn),qn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,t,du),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,uu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=e-a[0]*e-a[4]*i-a[8]*s,a[13]+=i-a[1]*e-a[5]*i-a[9]*s,a[14]+=s-a[2]*e-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(a(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),f=r(t.animations),p=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ue.DEFAULT_UP=new R(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class me extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pu={type:"move"};class Er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,i),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new me;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ln={h:0,s:0,l:0},na={h:0,s:0,l:0};function Tr(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Vt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=i,oe.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=oe.workingColorSpace){if(t=tu(t,1),e=te(e,0,1),i=te(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,r=2*i-a;this.r=Tr(r,a,t+1/3),this.g=Tr(r,a,t),this.b=Tr(r,a,t-1/3)}return oe.colorSpaceToWorking(this,s),this}setStyle(t,e=Ee){function i(a){a!==void 0&&parseFloat(a)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,e);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){const i=Ih[t.toLowerCase()];return i!==void 0?this.setHex(i,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return oe.workingToColorSpace(je.copy(this),t),Math.round(te(je.r*255,0,255))*65536+Math.round(te(je.g*255,0,255))*256+Math.round(te(je.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(je.copy(this),e);const i=je.r,s=je.g,a=je.b,r=Math.max(i,s,a),o=Math.min(i,s,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case i:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-i)/d+2;break;case a:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Ee){oe.workingToColorSpace(je.copy(this),t);const e=je.r,i=je.g,s=je.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ln),this.setHSL(ln.h+t,ln.s+e,ln.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ln),t.getHSL(na);const i=_r(ln.h,na.h,e),s=_r(ln.s,na.s,e),a=_r(ln.l,na.l,e);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*s,this.g=a[1]*e+a[4]*i+a[7]*s,this.b=a[2]*e+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new Vt;Vt.NAMES=Ih;class cl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Vt(t),this.density=e}clone(){return new cl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class mu extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ei=new R,Wi=new R,Ar=new R,Xi=new R,Yn=new R,$n=new R,Ql=new R,Rr=new R,Cr=new R,Pr=new R,Lr=new Re,Ir=new Re,Dr=new Re;class gi{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ei.subVectors(t,e),s.cross(Ei);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,i,s,a){Ei.subVectors(s,e),Wi.subVectors(i,e),Ar.subVectors(t,e);const r=Ei.dot(Ei),o=Ei.dot(Wi),l=Ei.dot(Ar),c=Wi.dot(Wi),h=Wi.dot(Ar),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,p=(r*h-o*l)*u;return a.set(1-f-p,p,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(t,e,i,s,a,r,o,l){return this.getBarycoord(t,e,i,s,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Xi.x),l.addScaledVector(r,Xi.y),l.addScaledVector(o,Xi.z),l)}static getInterpolatedAttribute(t,e,i,s,a,r){return Lr.setScalar(0),Ir.setScalar(0),Dr.setScalar(0),Lr.fromBufferAttribute(t,e),Ir.fromBufferAttribute(t,i),Dr.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Lr,a.x),r.addScaledVector(Ir,a.y),r.addScaledVector(Dr,a.z),r}static isFrontFacing(t,e,i,s){return Ei.subVectors(i,e),Wi.subVectors(t,e),Ei.cross(Wi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),Ei.cross(Wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,a){return gi.getInterpolation(t,this.a,this.b,this.c,e,i,s,a)}containsPoint(t){return gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,a=this.c;let r,o;Yn.subVectors(s,i),$n.subVectors(a,i),Rr.subVectors(t,i);const l=Yn.dot(Rr),c=$n.dot(Rr);if(l<=0&&c<=0)return e.copy(i);Cr.subVectors(t,s);const h=Yn.dot(Cr),d=$n.dot(Cr);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return r=l/(l-h),e.copy(i).addScaledVector(Yn,r);Pr.subVectors(t,a);const f=Yn.dot(Pr),p=$n.dot(Pr);if(p>=0&&f<=p)return e.copy(a);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(i).addScaledVector($n,o);const g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return Ql.subVectors(a,s),o=(d-h)/(d-h+(f-p)),e.copy(s).addScaledVector(Ql,o);const m=1/(g+_+u);return r=_*m,o=u*m,e.copy(i).addScaledVector(Yn,r).addScaledVector($n,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class vs{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Ti):Ti.fromBufferAttribute(a,r),Ti.applyMatrix4(t.matrixWorld),this.expandByPoint(Ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sa.copy(i.boundingBox)),sa.applyMatrix4(t.matrixWorld),this.union(sa)}const s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ti),Ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bs),aa.subVectors(this.max,bs),Kn.subVectors(t.a,bs),Zn.subVectors(t.b,bs),Jn.subVectors(t.c,bs),cn.subVectors(Zn,Kn),hn.subVectors(Jn,Zn),An.subVectors(Kn,Jn);let e=[0,-cn.z,cn.y,0,-hn.z,hn.y,0,-An.z,An.y,cn.z,0,-cn.x,hn.z,0,-hn.x,An.z,0,-An.x,-cn.y,cn.x,0,-hn.y,hn.x,0,-An.y,An.x,0];return!Nr(e,Kn,Zn,Jn,aa)||(e=[1,0,0,0,1,0,0,0,1],!Nr(e,Kn,Zn,Jn,aa))?!1:(ra.crossVectors(cn,hn),e=[ra.x,ra.y,ra.z],Nr(e,Kn,Zn,Jn,aa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const qi=[new R,new R,new R,new R,new R,new R,new R,new R],Ti=new R,sa=new vs,Kn=new R,Zn=new R,Jn=new R,cn=new R,hn=new R,An=new R,bs=new R,aa=new R,ra=new R,Rn=new R;function Nr(n,t,e,i,s){for(let a=0,r=n.length-3;a<=r;a+=3){Rn.fromArray(n,a);const o=s.x*Math.abs(Rn.x)+s.y*Math.abs(Rn.y)+s.z*Math.abs(Rn.z),l=t.dot(Rn),c=e.dot(Rn),h=i.dot(Rn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ne=new R,oa=new rt;let gu=0;class oi extends Gn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Th,this.updateRanges=[],this.gpuType=Ni,this.version=0,this._normalizationScale=t!==void 0?sr(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)oa.fromBufferAttribute(this,e),oa.applyMatrix3(t),this.setXY(e,oa.x,oa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),a=this._normalize(a)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Rh(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Ch(t,this.array)}}class Dh extends oi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Nh extends oi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class le extends oi{constructor(t,e,i){super(new Float32Array(t),e,i)}}const xu=new vs,ws=new R,Ur=new R;class _s{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):xu.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ws.subVectors(t,this.center);const e=ws.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ws,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ur.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ws.copy(t.center).add(Ur)),this.expandByPoint(ws.copy(t.center).sub(Ur))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let vu=0;const Mi=new ye,Fr=new Ue,Qn=new R,pi=new vs,Es=new vs,He=new R;class Te extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zd(t)?Nh:Dh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ht().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Mi.makeRotationFromQuaternion(t),this.applyMatrix4(Mi),this}rotateX(t){return Mi.makeRotationX(t),this.applyMatrix4(Mi),this}rotateY(t){return Mi.makeRotationY(t),this.applyMatrix4(Mi),this}rotateZ(t){return Mi.makeRotationZ(t),this.applyMatrix4(Mi),this}translate(t,e,i){return Mi.makeTranslation(t,e,i),this.applyMatrix4(Mi),this}scale(t,e,i){return Mi.makeScale(t,e,i),this.applyMatrix4(Mi),this}lookAt(t){return Fr.lookAt(t),Fr.updateMatrix(),this.applyMatrix4(Fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qn).negate(),this.translate(Qn.x,Qn.y,Qn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,a=t.length;s<a;s++){const r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new le(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const a=t[s];e.setXYZ(s,a.x,a.y,a.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){he("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const a=e[i];pi.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&he('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){he("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const i=this.boundingSphere.center;if(pi.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];Es.setFromBufferAttribute(o),this.morphTargetsRelative?(He.addVectors(pi.min,Es.min),pi.expandByPoint(He),He.addVectors(pi.max,Es.max),pi.expandByPoint(He)):(pi.expandByPoint(Es.min),pi.expandByPoint(Es.max))}pi.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)He.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(He));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)He.fromBufferAttribute(o,c),l&&(Qn.fromBufferAttribute(t,c),He.add(Qn)),s=Math.max(s,i.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&he('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){he("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,a=e.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new oi(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));const o=[],l=[],c=new Uint8Array(i.count);for(let L=0;L<i.count;L++)o[L]=new R,l[L]=new R;const h=new R,d=new R,u=new R,f=new rt,p=new rt,_=new rt,g=new R,m=new R;function v(L,C,I){c[L]=c[C]=c[I]=1,h.fromBufferAttribute(i,L),d.fromBufferAttribute(i,C),u.fromBufferAttribute(i,I),f.fromBufferAttribute(a,L),p.fromBufferAttribute(a,C),_.fromBufferAttribute(a,I),d.sub(h),u.sub(h),p.sub(f),_.sub(f);const F=1/(p.x*_.y-_.x*p.y);isFinite(F)&&(g.copy(d).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(F),m.copy(u).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(F),o[L].add(g),o[C].add(g),o[I].add(g),l[L].add(m),l[C].add(m),l[I].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let L=0,C=y.length;L<C;++L){const I=y[L],F=I.start,W=I.count;for(let D=F,H=F+W;D<H;D+=3)v(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const M=new R,E=new R,T=new R,x=new R;function w(L){T.fromBufferAttribute(s,L),x.copy(T);const C=o[L];M.copy(C),M.sub(T.multiplyScalar(T.dot(C))).normalize(),E.crossVectors(x,C);const F=E.dot(l[L])<0?-1:1;r.setXYZW(L,M.x,M.y,M.z,F)}for(let L=0,C=i.count;L<C;++L)c[L]&&w(L);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new oi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const s=new R,a=new R,r=new R,o=new R,l=new R,c=new R,h=new R,d=new R;if(t)for(let u=0,f=t.count;u<f;u+=3){const p=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,p),a.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),a.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,p=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new oi(u,h,d)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Te,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const a=t.morphAttributes;for(const c in a){const h=[],d=a[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _u{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Th,this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,a=this.stride;s<a;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=jl(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=jl(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function jl(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=Sn()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}const ni=new R;class ja{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s,this._normalizationScale=t!==void 0?sr(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ni.fromBufferAttribute(this,e),ni.applyMatrix4(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ni.fromBufferAttribute(this,e),ni.applyNormalMatrix(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ni.fromBufferAttribute(this,e),ni.transformDirection(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),a=this._normalize(a)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=a,this}clone(t){if(t===void 0){Qa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return new oi(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ja(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Qa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Rh(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Ch(t,this.data.array)}}const Or=new R,Mu=new R,yu=new Ht;class mn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Or.subVectors(i,e).cross(Mu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(Or),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(s,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||yu.getNormalMatrix(t),s=this.coplanarPoint(Or).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Su=0;class bn extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=ls,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rh,this.blendDst=oh,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(e){const a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Vt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new mn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new rt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class hs extends bn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let jn;const Ts=new R,ts=new R,es=new R,is=new rt,As=new rt,Uh=new ye,la=new R,Rs=new R,ca=new R,tc=new rt,kr=new rt,ec=new rt;class Us extends Ue{constructor(t=new hs){if(super(),this.isSprite=!0,this.type="Sprite",jn===void 0){jn=new Te;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new _u(e,5);jn.setIndex([0,1,2,0,2,3]),jn.setAttribute("position",new ja(i,3,0,!1)),jn.setAttribute("uv",new ja(i,2,3,!1))}this.geometry=jn,this.material=t,this.center=new rt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&he('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ts.setFromMatrixScale(this.matrixWorld),Uh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),es.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ts.multiplyScalar(-es.z);const i=this.material.rotation;let s,a;i!==0&&(a=Math.cos(i),s=Math.sin(i));const r=this.center;ha(la.set(-.5,-.5,0),es,r,ts,s,a),ha(Rs.set(.5,-.5,0),es,r,ts,s,a),ha(ca.set(.5,.5,0),es,r,ts,s,a),tc.set(0,0),kr.set(1,0),ec.set(1,1);let o=t.ray.intersectTriangle(la,Rs,ca,!1,Ts);if(o===null&&(ha(Rs.set(-.5,.5,0),es,r,ts,s,a),kr.set(0,1),o=t.ray.intersectTriangle(la,ca,Rs,!1,Ts),o===null))return;const l=t.ray.origin.distanceTo(Ts);l<t.near||l>t.far||e.push({distance:l,point:Ts.clone(),uv:gi.getInterpolation(Ts,la,Rs,ca,tc,kr,ec,new rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function ha(n,t,e,i,s,a){is.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(As.x=a*is.x-s*is.y,As.y=s*is.x+a*is.y):As.copy(is),n.copy(t),n.x+=As.x,n.y+=As.y,n.applyMatrix4(Uh)}const Yi=new R,Br=new R,da=new R,ua=new R;class Ks{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yi.copy(this.origin).addScaledVector(this.direction,e),Yi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Br.copy(t).add(e).multiplyScalar(.5),da.copy(e).sub(t).normalize(),ua.copy(this.origin).sub(Br);const a=t.distanceTo(e)*.5,r=-this.direction.dot(da),o=ua.dot(this.direction),l=-ua.dot(da),c=ua.lengthSq(),h=Math.abs(1-r*r);let d,u,f,p;if(h>0)if(d=r*l-o,u=r*o-l,p=a*h,d>=0)if(u>=-p)if(u<=p){const _=1/h;d*=_,u*=_,f=d*(d+r*u+2*o)+u*(r*d+u+2*l)+c}else u=a,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*l)+c;else u=-a,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-r*a+o)),u=d>0?-a:Math.min(Math.max(-a,-l),a),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-a,-l),a),f=u*(u+2*l)+c):(d=Math.max(0,-(r*a+o)),u=d>0?a:Math.min(Math.max(-a,-l),a),f=-d*d+u*(u+2*l)+c);else u=r>0?-a:a,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Br).addScaledVector(da,u),f}intersectSphere(t,e){if(t.radius<0)return null;Yi.subVectors(t.center,this.origin);const i=Yi.dot(this.direction),s=Yi.dot(Yi)-i*i,a=t.radius*t.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(a=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(a=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Yi)!==null}intersectTriangle(t,e,i,s,a){const r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-r.x,u=t.y-r.y,f=t.z-r.z,p=e.x-r.x,_=e.y-r.y,g=e.z-r.z,m=i.x-r.x,v=i.y-r.y,y=i.z-r.z,M=Math.abs(l),E=Math.abs(c),T=Math.abs(h);let x,w,L,C,I,F,W,D,H,Y,B,nt;if(M>=E&&M>=T?(L=l,F=d,H=p,nt=m,l>=0?(x=c,w=h,C=u,I=f,W=_,D=g,Y=v,B=y):(x=h,w=c,C=f,I=u,W=g,D=_,Y=y,B=v)):E>=T?(L=c,F=u,H=_,nt=v,c>=0?(x=h,w=l,C=f,I=d,W=g,D=p,Y=y,B=m):(x=l,w=h,C=d,I=f,W=p,D=g,Y=m,B=y)):(L=h,F=f,H=g,nt=y,h>=0?(x=l,w=c,C=d,I=u,W=p,D=_,Y=m,B=v):(x=c,w=l,C=u,I=d,W=_,D=p,Y=v,B=m)),L===0)return null;const X=x/L,j=w/L,et=1/L,Tt=C-X*F,kt=I-j*F,$=W-X*H,Mt=D-j*H,At=Y-X*nt,Ut=B-j*nt,yt=At*Mt-Ut*$,Ft=Tt*Ut-kt*At,be=$*kt-Mt*Tt;if(s){if(yt<0||Ft<0||be<0)return null}else if((yt<0||Ft<0||be<0)&&(yt>0||Ft>0||be>0))return null;const Bt=yt+Ft+be;if(Bt===0)return null;const Zt=et*(yt*F+Ft*H+be*nt);return(Bt>0?Zt<0:Zt>0)?null:this.at(Zt/Bt,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe extends bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ic=new ye,Cn=new Ks,fa=new _s,nc=new R,pa=new R,ma=new R,ga=new R,zr=new R,xa=new R,sc=new R,va=new R;class _t extends Ue{constructor(t=new Te,e=new Xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(a&&o){xa.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],d=a[l];h!==0&&(zr.fromBufferAttribute(d,t),r?xa.addScaledVector(zr,h):xa.addScaledVector(zr.sub(e),h))}e.add(xa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fa.copy(i.boundingSphere),fa.applyMatrix4(a),Cn.copy(t.ray).recast(t.near),!(fa.containsPoint(Cn.origin)===!1&&(Cn.intersectSphere(fa,nc)===null||Cn.origin.distanceToSquared(nc)>(t.far-t.near)**2))&&(ic.copy(a).invert(),Cn.copy(t.ray).applyMatrix4(ic),!(i.boundingBox!==null&&Cn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Cn)))}_computeIntersections(t,e,i){let s;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,u=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,_=u.length;p<_;p++){const g=u[p],m=r[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let M=v,E=y;M<E;M+=3){const T=o.getX(M),x=o.getX(M+1),w=o.getX(M+2);s=_a(this,m,t,i,c,h,d,T,x,w),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const v=o.getX(g),y=o.getX(g+1),M=o.getX(g+2);s=_a(this,r,t,i,c,h,d,v,y,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,_=u.length;p<_;p++){const g=u[p],m=r[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=v,E=y;M<E;M+=3){const T=M,x=M+1,w=M+2;s=_a(this,m,t,i,c,h,d,T,x,w),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const v=g,y=g+1,M=g+2;s=_a(this,r,t,i,c,h,d,v,y,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function bu(n,t,e,i,s,a,r,o){let l;if(t.side===ci?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===ji,o),l===null)return null;va.copy(o),va.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(va);return c<e.near||c>e.far?null:{distance:c,point:va.clone(),object:n}}function _a(n,t,e,i,s,a,r,o,l,c){n.getVertexPosition(o,pa),n.getVertexPosition(l,ma),n.getVertexPosition(c,ga);const h=bu(n,t,e,i,pa,ma,ga,sc);if(h){const d=new R;gi.getBarycoord(sc,pa,ma,ga,d),s&&(h.uv=gi.getInterpolatedAttribute(s,o,l,c,d,new rt)),a&&(h.uv1=gi.getInterpolatedAttribute(a,o,l,c,d,new rt)),r&&(h.normal=gi.getInterpolatedAttribute(r,o,l,c,d,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new R,materialIndex:0};gi.getNormal(pa,ma,ga,u.normal),h.face=u,h.barycoord=d}return h}class wu extends ei{constructor(t=null,e=1,i=1,s,a,r,o,l,c=Ke,h=Ke,d,u){super(null,r,o,l,c,h,s,a,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pn=new _s,Eu=new rt(.5,.5),Ma=new R;class Ws{constructor(t=new mn,e=new mn,i=new mn,s=new mn,a=new mn,r=new mn){this.planes=[t,e,i,s,a,r]}set(t,e,i,s,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ri,i=!1){const s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],d=a[5],u=a[6],f=a[7],p=a[8],_=a[9],g=a[10],m=a[11],v=a[12],y=a[13],M=a[14],E=a[15];if(s[0].setComponents(c-r,f-h,m-p,E-v).normalize(),s[1].setComponents(c+r,f+h,m+p,E+v).normalize(),s[2].setComponents(c+o,f+d,m+_,E+y).normalize(),s[3].setComponents(c-o,f-d,m-_,E-y).normalize(),i)s[4].setComponents(l,u,g,M).normalize(),s[5].setComponents(c-l,f-u,m-g,E-M).normalize();else if(s[4].setComponents(c-l,f-u,m-g,E-M).normalize(),e===Ri)s[5].setComponents(c+l,f+u,m+g,E+M).normalize();else if(e===Vs)s[5].setComponents(l,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pn)}intersectsSprite(t){Pn.center.set(0,0,0);const e=Eu.distanceTo(t.center);return Pn.radius=.7071067811865476+e,Pn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pn)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Ma.x=s.normal.x>0?t.max.x:t.min.x,Ma.y=s.normal.y>0?t.max.y:t.min.y,Ma.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const ac=new ye;class hl{constructor(){this.coordinateSystem=Ri,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){const a=e[s];ac.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),i[s]===void 0&&(i[s]=new Ws),i[s].setFromProjectionMatrix(ac,a.coordinateSystem,a.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Ws),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new hl().copy(this)}}class ar extends bn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const tr=new R,er=new R,rc=new ye,Cs=new Ks,ya=new _s,Gr=new R,oc=new R;class dl extends Ue{constructor(t=new Te,e=new ar){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,a=e.count;s<a;s++)tr.fromBufferAttribute(e,s-1),er.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=tr.distanceTo(er);t.setAttribute("lineDistance",new le(i,1))}else zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(s),ya.radius+=a,t.ray.intersectsSphere(ya)===!1)return;rc.copy(s).invert(),Cs.copy(t.ray).applyMatrix4(rc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const f=Math.max(0,r.start),p=Math.min(h.count,r.start+r.count);for(let _=f,g=p-1;_<g;_+=c){const m=h.getX(_),v=h.getX(_+1),y=Sa(this,t,Cs,l,m,v,_);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(p-1),g=h.getX(f),m=Sa(this,t,Cs,l,_,g,p-1);m&&e.push(m)}}else{const f=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let _=f,g=p-1;_<g;_+=c){const m=Sa(this,t,Cs,l,_,_+1,_);m&&e.push(m)}if(this.isLineLoop){const _=Sa(this,t,Cs,l,p-1,f,p-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Sa(n,t,e,i,s,a,r){const o=n.geometry.attributes.position;if(tr.fromBufferAttribute(o,s),er.fromBufferAttribute(o,a),e.distanceSqToSegment(tr,er,Gr,oc)>i)return;Gr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Gr);if(!(c<t.near||c>t.far))return{distance:c,point:oc.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const lc=new R,cc=new R;class Tu extends dl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,a=e.count;s<a;s+=2)lc.fromBufferAttribute(e,s),cc.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+lc.distanceTo(cc);t.setAttribute("lineDistance",new le(i,1))}else zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fh extends bn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const hc=new ye,Vo=new Ks,ba=new _s,wa=new R;class Oh extends Ue{constructor(t=new Te,e=new Fh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ba.copy(i.boundingSphere),ba.applyMatrix4(s),ba.radius+=a,t.ray.intersectsSphere(ba)===!1)return;hc.copy(s).invert(),Vo.copy(t.ray).applyMatrix4(hc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const u=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let p=u,_=f;p<_;p++){const g=c.getX(p);wa.fromBufferAttribute(d,g),dc(wa,g,l,s,t,e,this)}}else{const u=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let p=u,_=f;p<_;p++)wa.fromBufferAttribute(d,p),dc(wa,p,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function dc(n,t,e,i,s,a,r){const o=Vo.distanceSqToPoint(n);if(o<e){const l=new R;Vo.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class kh extends ei{constructor(t=[],e=ds,i,s,a,r,o,l,c,h){super(t,e,i,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vi extends ei{constructor(t,e,i,s,a,r,o,l,c){super(t,e,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fs extends ei{constructor(t,e,i=Bi,s,a,r,o=Ke,l=Ke,c,h=_n,d=1){if(h!==_n&&h!==vn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,s,a,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ll(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Bh extends fs{constructor(t,e=Bi,i=ds,s,a,r=Ke,o=Ke,l,c=_n){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,a,r,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class zh extends ei{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class re extends Te{constructor(t=1,e=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,f=0;p("z","y","x",-1,-1,i,e,t,r,a,0),p("z","y","x",1,-1,i,e,-t,r,a,1),p("x","z","y",1,1,t,i,e,s,r,2),p("x","z","y",1,-1,t,i,-e,s,r,3),p("x","y","z",1,-1,t,e,i,s,a,4),p("x","y","z",-1,-1,t,e,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(d,2));function p(_,g,m,v,y,M,E,T,x,w,L){const C=M/x,I=E/w,F=M/2,W=E/2,D=T/2,H=x+1,Y=w+1;let B=0,nt=0;const X=new R;for(let j=0;j<Y;j++){const et=j*I-W;for(let Tt=0;Tt<H;Tt++){const kt=Tt*C-F;X[_]=kt*v,X[g]=et*y,X[m]=D,c.push(X.x,X.y,X.z),X[_]=0,X[g]=0,X[m]=T>0?1:-1,h.push(X.x,X.y,X.z),d.push(Tt/x),d.push(1-j/w),B+=1}}for(let j=0;j<w;j++)for(let et=0;et<x;et++){const Tt=u+et+H*j,kt=u+et+H*(j+1),$=u+(et+1)+H*(j+1),Mt=u+(et+1)+H*j;l.push(Tt,kt,Mt),l.push(kt,$,Mt),nt+=6}o.addGroup(f,nt,L),f+=nt,u+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new re(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Fs extends Te{constructor(t=1,e=1,i=4,s=8,a=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:a},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),a=Math.max(1,Math.floor(a));const r=[],o=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,p=i*2+a,_=s+1,g=new R,m=new R;for(let v=0;v<=p;v++){let y=0,M=0,E=0,T=0;if(v<=i){const L=v/i,C=L*Math.PI/2;M=-h-t*Math.cos(C),E=t*Math.sin(C),T=-t*Math.cos(C),y=L*d}else if(v<=i+a){const L=(v-i)/a;M=-h+L*e,E=t,T=0,y=d+L*u}else{const L=(v-i-a)/i,C=L*Math.PI/2;M=h+t*Math.sin(C),E=t*Math.cos(C),T=t*Math.sin(C),y=d+u+L*d}const x=Math.max(0,Math.min(1,y/f));let w=0;v===0?w=.5/s:v===p&&(w=-.5/s);for(let L=0;L<=s;L++){const C=L/s,I=C*Math.PI*2,F=Math.sin(I),W=Math.cos(I);m.x=-E*W,m.y=M,m.z=E*F,o.push(m.x,m.y,m.z),g.set(-E*W,T,E*F),g.normalize(),l.push(g.x,g.y,g.z),c.push(C+w,x)}if(v>0){const L=(v-1)*_;for(let C=0;C<s;C++){const I=L+C,F=L+C+1,W=v*_+C,D=v*_+C+1;r.push(I,F,W),r.push(F,D,W)}}}this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fs(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class ul extends Te{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const a=[],r=[],o=[],l=[],c=new R,h=new rt;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=i+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),r.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(r[u]/t+1)/2,h.y=(r[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(o,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ul(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class li extends Te{constructor(t=1,e=1,i=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),a=Math.floor(a);const h=[],d=[],u=[],f=[];let p=0;const _=[],g=i/2;let m=0;v(),r===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new le(d,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(f,2));function v(){const M=new R,E=new R;let T=0;const x=(e-t)/i;for(let w=0;w<=a;w++){const L=[],C=w/a,I=C*(e-t)+t;for(let F=0;F<=s;F++){const W=F/s,D=W*l+o,H=Math.sin(D),Y=Math.cos(D);E.x=I*H,E.y=-C*i+g,E.z=I*Y,d.push(E.x,E.y,E.z),M.set(H,x,Y).normalize(),u.push(M.x,M.y,M.z),f.push(W,1-C),L.push(p++)}_.push(L)}for(let w=0;w<s;w++)for(let L=0;L<a;L++){const C=_[L][w],I=_[L+1][w],F=_[L+1][w+1],W=_[L][w+1];(t>0||L!==0)&&(h.push(C,I,W),T+=3),(e>0||L!==a-1)&&(h.push(I,F,W),T+=3)}c.addGroup(m,T,0),m+=T}function y(M){const E=p,T=new rt,x=new R;let w=0;const L=M===!0?t:e,C=M===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,g*C,0),u.push(0,C,0),f.push(.5,.5),p++;const I=p;for(let F=0;F<=s;F++){const D=F/s*l+o,H=Math.cos(D),Y=Math.sin(D);x.x=L*Y,x.y=g*C,x.z=L*H,d.push(x.x,x.y,x.z),u.push(0,C,0),T.x=H*.5+.5,T.y=Y*.5*C+.5,f.push(T.x,T.y),p++}for(let F=0;F<s;F++){const W=E+F,D=I+F;M===!0?h.push(D,D+1,W):h.push(D+1,D,W),w+=3}c.addGroup(m,w,M===!0?1:2),m+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new li(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zs extends li{constructor(t=1,e=1,i=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,t,e,i,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new Zs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fl extends Te{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const a=[],r=[];o(s),c(i),h(),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(a.slice(),3)),this.setAttribute("uv",new le(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const y=new R,M=new R,E=new R;for(let T=0;T<e.length;T+=3)f(e[T+0],y),f(e[T+1],M),f(e[T+2],E),l(y,M,E,v)}function l(v,y,M,E){const T=E+1,x=[];for(let w=0;w<=T;w++){x[w]=[];const L=v.clone().lerp(M,w/T),C=y.clone().lerp(M,w/T),I=T-w;for(let F=0;F<=I;F++)F===0&&w===T?x[w][F]=L:x[w][F]=L.clone().lerp(C,F/I)}for(let w=0;w<T;w++)for(let L=0;L<2*(T-w)-1;L++){const C=Math.floor(L/2);L%2===0?(u(x[w][C+1]),u(x[w+1][C]),u(x[w][C])):(u(x[w][C+1]),u(x[w+1][C+1]),u(x[w+1][C]))}}function c(v){const y=new R;for(let M=0;M<a.length;M+=3)y.x=a[M+0],y.y=a[M+1],y.z=a[M+2],y.normalize().multiplyScalar(v),a[M+0]=y.x,a[M+1]=y.y,a[M+2]=y.z}function h(){const v=new R;for(let y=0;y<a.length;y+=3){v.x=a[y+0],v.y=a[y+1],v.z=a[y+2];const M=g(v)/2/Math.PI+.5,E=m(v)/Math.PI+.5;r.push(M,1-E)}p(),d()}function d(){for(let v=0;v<r.length;v+=6){const y=r[v+0],M=r[v+2],E=r[v+4],T=Math.max(y,M,E),x=Math.min(y,M,E);T>.9&&x<.1&&(y<.2&&(r[v+0]+=1),M<.2&&(r[v+2]+=1),E<.2&&(r[v+4]+=1))}}function u(v){a.push(v.x,v.y,v.z)}function f(v,y){const M=v*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function p(){const v=new R,y=new R,M=new R,E=new R,T=new rt,x=new rt,w=new rt;for(let L=0,C=0;L<a.length;L+=9,C+=6){v.set(a[L+0],a[L+1],a[L+2]),y.set(a[L+3],a[L+4],a[L+5]),M.set(a[L+6],a[L+7],a[L+8]),T.set(r[C+0],r[C+1]),x.set(r[C+2],r[C+3]),w.set(r[C+4],r[C+5]),E.copy(v).add(y).add(M).divideScalar(3);const I=g(E);_(T,C+0,v,I),_(x,C+2,y,I),_(w,C+4,M,I)}}function _(v,y,M,E){E<0&&v.x===1&&(r[y]=v.x-1),M.x===0&&M.z===0&&(r[y]=E/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fl(t.vertices,t.indices,t.radius,t.detail)}}const Ea=new R,Ta=new R,Hr=new R,Aa=new gi;class Au extends Te{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),a=Math.cos(Va*e),r=t.getIndex(),o=t.getAttribute("position"),l=r?r.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u=new Map,f=[];for(let p=0;p<l;p+=3){r?(c[0]=r.getX(p),c[1]=r.getX(p+1),c[2]=r.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:_,b:g,c:m}=Aa;if(_.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),Aa.getNormal(Hr),d[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){const y=(v+1)%3,M=d[v],E=d[y],T=Aa[h[v]],x=Aa[h[y]],w=`${M}_${E}`,L=`${E}_${M}`,C=u.get(L);C?(Hr.dot(C.normal)<=a&&(f.push(T.x,T.y,T.z),f.push(x.x,x.y,x.z)),u.set(L,null)):u.has(w)||u.set(w,{index0:c[v],index1:c[y],normal:Hr.clone()})}}for(const p of u.values())if(p){const{index0:_,index1:g}=p;Ea.fromBufferAttribute(o,_),Ta.fromBufferAttribute(o,g),f.push(Ea.x,Ea.y,Ea.z),f.push(Ta.x,Ta.y,Ta.z)}this.setAttribute("position",new le(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Gi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),a=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),a+=i.distanceTo(s),e.push(a),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const a=i.length;let r;e?r=e:r=t*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===r)return s/(a-1);const h=i[s],u=i[s+1]-h,f=(r-h)/u;return(s+f)/(a-1)}getTangent(t,e){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);const r=this.getPoint(s),o=this.getPoint(a),l=e||(r.isVector2?new rt:new R);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new R,s=[],a=[],r=[],o=new R,l=new ye;for(let f=0;f<=t;f++){const p=f/t;s[f]=this.getTangentAt(p,new R)}a[0]=new R,r[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let f=1;f<=t;f++){if(a[f]=a[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(te(s[f-1].dot(s[f]),-1,1));a[f].applyMatrix4(l.makeRotationAxis(o,p))}r[f].crossVectors(s[f],a[f])}if(e===!0){let f=Math.acos(te(a[0].dot(a[t]),-1,1));f/=t,s[0].dot(o.crossVectors(a[0],a[t]))>0&&(f=-f);for(let p=1;p<=t;p++)a[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),r[p].crossVectors(s[p],a[p])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class pl extends Gi{constructor(t=0,e=0,i=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new rt){const i=e,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);const o=this.aStartAngle+t*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ru extends pl{constructor(t,e,i,s,a,r){super(t,e,i,i,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function ml(){let n=0,t=0,e=0,i=0;function s(a,r,o,l){n=a,t=o,e=-3*a+3*r-2*o-l,i=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){s(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,h,d){let u=(r-a)/c-(o-a)/(c+h)+(o-r)/h,f=(o-r)/h-(l-r)/(h+d)+(l-o)/d;u*=h,f*=h,s(r,o,u,f)},calc:function(a){const r=a*a,o=r*a;return n+t*a+e*r+i*o}}}const uc=new R,fc=new R,Vr=new ml,Wr=new ml,Xr=new ml;class Cu extends Gi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new R){const i=e,s=this.points,a=s.length,r=(a-(this.closed?0:1))*t;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%a]:(fc.subVectors(s[0],s[1]).add(s[0]),c=fc);const d=s[o%a],u=s[(o+1)%a];if(this.closed||o+2<a?h=s[(o+2)%a]:(uc.subVectors(s[a-1],s[a-2]).add(s[a-1]),h=uc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Vr.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,_,g),Wr.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,_,g),Xr.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(Vr.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Wr.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Xr.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Vr.calc(l),Wr.calc(l),Xr.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function pc(n,t,e,i,s){const a=(i-t)*.5,r=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+a+r)*l+(-3*e+3*i-2*a-r)*o+a*n+e}function Pu(n,t){const e=1-n;return e*e*t}function Lu(n,t){return 2*(1-n)*n*t}function Iu(n,t){return n*n*t}function Os(n,t,e,i){return Pu(n,t)+Lu(n,e)+Iu(n,i)}function Du(n,t){const e=1-n;return e*e*e*t}function Nu(n,t){const e=1-n;return 3*e*e*n*t}function Uu(n,t){return 3*(1-n)*n*n*t}function Fu(n,t){return n*n*n*t}function ks(n,t,e,i,s){return Du(n,t)+Nu(n,e)+Uu(n,i)+Fu(n,s)}class Gh extends Gi{constructor(t=new rt,e=new rt,i=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new rt){const i=e,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(ks(t,s.x,a.x,r.x,o.x),ks(t,s.y,a.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ou extends Gi{constructor(t=new R,e=new R,i=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new R){const i=e,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(ks(t,s.x,a.x,r.x,o.x),ks(t,s.y,a.y,r.y,o.y),ks(t,s.z,a.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Hh extends Gi{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ku extends Gi{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vh extends Gi{constructor(t=new rt,e=new rt,i=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new rt){const i=e,s=this.v0,a=this.v1,r=this.v2;return i.set(Os(t,s.x,a.x,r.x),Os(t,s.y,a.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bu extends Gi{constructor(t=new R,e=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new R){const i=e,s=this.v0,a=this.v1,r=this.v2;return i.set(Os(t,s.x,a.x,r.x),Os(t,s.y,a.y,r.y),Os(t,s.z,a.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wh extends Gi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){const i=e,s=this.points,a=(s.length-1)*t,r=Math.floor(a),o=a-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return i.set(pc(o,l.x,c.x,h.x,d.x),pc(o,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new rt().fromArray(s))}return this}}var Wo=Object.freeze({__proto__:null,ArcCurve:Ru,CatmullRomCurve3:Cu,CubicBezierCurve:Gh,CubicBezierCurve3:Ou,EllipseCurve:pl,LineCurve:Hh,LineCurve3:ku,QuadraticBezierCurve:Vh,QuadraticBezierCurve3:Bu,SplineCurve:Wh});class zu extends Gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wo[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=i){const r=s[a]-i,o=this.curves[a],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,e)}a++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,a=this.curves;s<a.length;s++){const r=a[s],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Wo[s.type]().fromJSON(s))}return this.cacheLengths=null,this}}class mc extends zu{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Hh(this.currentPoint.clone(),new rt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const a=new Vh(this.currentPoint.clone(),new rt(t,e),new rt(i,s));return this.curves.push(a),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,a,r){const o=new Gh(this.currentPoint.clone(),new rt(t,e),new rt(i,s),new rt(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Wh(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,a,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,a,r),this}absarc(t,e,i,s,a,r){return this.absellipse(t,e,i,i,s,a,r),this}ellipse(t,e,i,s,a,r,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,a,r,o,l),this}absellipse(t,e,i,s,a,r,o,l){const c=new pl(t,e,i,s,a,r,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class rr extends mc{constructor(t){super(t),this.uuid=Sn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new mc().fromJSON(s))}return this}}function Gu(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let a=Xh(n,0,s,e,!0);const r=[];if(!a||a.next===a.prev)return r;let o,l,c;if(i&&(a=qu(n,t,a,e)),n.length>80*e){o=n[0],l=n[1];let h=o,d=l;for(let u=e;u<s;u+=e){const f=n[u],p=n[u+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Xs(a,r,e,o,l,c,0),r}function Xh(n,t,e,i,s){let a;if(s===sf(n,t,e,i)>0)for(let r=t;r<e;r+=i)a=gc(r/i|0,n[r],n[r+1],a);else for(let r=e-i;r>=t;r-=i)a=gc(r/i|0,n[r],n[r+1],a);return a&&ps(a,a.next)&&(Ys(a),a=a.next),a}function kn(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ps(e,e.next)||Ce(e.prev,e,e.next)===0)){if(Ys(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Xs(n,t,e,i,s,a,r){if(!n)return;!r&&a&&Ju(n,i,s,a);let o=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(a?Vu(n,i,s,a):Hu(n)){t.push(l.i,n.i,c.i),Ys(n),n=c.next,o=c.next;continue}if(n=c,n===o){r?r===1?(n=Wu(kn(n),t),Xs(n,t,e,i,s,a,2)):r===2&&Xu(n,t,e,i,s,a):Xs(kn(n),t,e,i,s,a,1);break}}}function Hu(n){const t=n.prev,e=n,i=n.next;if(Ce(t,e,i)>=0)return!1;const s=t.x,a=e.x,r=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(s,a,r),d=Math.min(o,l,c),u=Math.max(s,a,r),f=Math.max(o,l,c);let p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&Is(s,o,a,l,r,c,p.x,p.y)&&Ce(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Vu(n,t,e,i){const s=n.prev,a=n,r=n.next;if(Ce(s,a,r)>=0)return!1;const o=s.x,l=a.x,c=r.x,h=s.y,d=a.y,u=r.y,f=Math.min(o,l,c),p=Math.min(h,d,u),_=Math.max(o,l,c),g=Math.max(h,d,u),m=Xo(f,p,t,e,i),v=Xo(_,g,t,e,i);let y=n.prevZ,M=n.nextZ;for(;y&&y.z>=m&&M&&M.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=g&&y!==s&&y!==r&&Is(o,h,l,d,c,u,y.x,y.y)&&Ce(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=f&&M.x<=_&&M.y>=p&&M.y<=g&&M!==s&&M!==r&&Is(o,h,l,d,c,u,M.x,M.y)&&Ce(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=g&&y!==s&&y!==r&&Is(o,h,l,d,c,u,y.x,y.y)&&Ce(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=v;){if(M.x>=f&&M.x<=_&&M.y>=p&&M.y<=g&&M!==s&&M!==r&&Is(o,h,l,d,c,u,M.x,M.y)&&Ce(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Wu(n,t){let e=n;do{const i=e.prev,s=e.next.next;!ps(i,s)&&Yh(i,e,e.next,s)&&qs(i,s)&&qs(s,i)&&(t.push(i.i,e.i,s.i),Ys(e),Ys(e.next),e=n=s),e=e.next}while(e!==n);return kn(e)}function Xu(n,t,e,i,s,a){let r=n;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&tf(r,o)){let l=$h(r,o);r=kn(r,r.next),l=kn(l,l.next),Xs(r,t,e,i,s,a,0),Xs(l,t,e,i,s,a,0);return}o=o.next}r=r.next}while(r!==n)}function qu(n,t,e,i){const s=[];for(let a=0,r=t.length;a<r;a++){const o=t[a]*i,l=a<r-1?t[a+1]*i:n.length,c=Xh(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(ju(c))}s.sort(Yu);for(let a=0;a<s.length;a++)e=$u(s[a],e);return e}function Yu(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function $u(n,t){const e=Ku(n,t);if(!e)return t;const i=$h(e,n);return kn(i,i.next),kn(e,e.next)}function Ku(n,t){let e=t;const i=n.x,s=n.y;let a=-1/0,r;if(ps(n,e))return e;do{if(ps(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>a&&(a=d,r=e.x<e.next.x?e:e.next,d===i))return r}e=e.next}while(e!==t);if(!r)return null;const o=r,l=r.x,c=r.y;let h=1/0;e=r;do{if(i>=e.x&&e.x>=l&&i!==e.x&&qh(s<c?i:a,s,l,c,s<c?a:i,s,e.x,e.y)){const d=Math.abs(s-e.y)/(i-e.x);qs(e,n)&&(d<h||d===h&&(e.x>r.x||e.x===r.x&&Zu(r,e)))&&(r=e,h=d)}e=e.next}while(e!==o);return r}function Zu(n,t){return Ce(n.prev,n,t.prev)<0&&Ce(t.next,n,n.next)<0}function Ju(n,t,e,i){let s=n;do s.z===0&&(s.z=Xo(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Qu(s)}function Qu(n){let t,e=1;do{let i=n,s;n=null;let a=null;for(t=0;i;){t++;let r=i,o=0;for(let c=0;c<e&&(o++,r=r.nextZ,!!r);c++);let l=e;for(;o>0||l>0&&r;)o!==0&&(l===0||!r||i.z<=r.z)?(s=i,i=i.nextZ,o--):(s=r,r=r.nextZ,l--),a?a.nextZ=s:n=s,s.prevZ=a,a=s;i=r}a.nextZ=null,e*=2}while(t>1);return n}function Xo(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function ju(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function qh(n,t,e,i,s,a,r,o){return(s-r)*(t-o)>=(n-r)*(a-o)&&(n-r)*(i-o)>=(e-r)*(t-o)&&(e-r)*(a-o)>=(s-r)*(i-o)}function Is(n,t,e,i,s,a,r,o){return!(n===r&&t===o)&&qh(n,t,e,i,s,a,r,o)}function tf(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!ef(n,t)&&(qs(n,t)&&qs(t,n)&&nf(n,t)&&(Ce(n.prev,n,t.prev)||Ce(n,t.prev,t))||ps(n,t)&&Ce(n.prev,n,n.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ps(n,t){return n.x===t.x&&n.y===t.y}function Yh(n,t,e,i){const s=Ca(Ce(n,t,e)),a=Ca(Ce(n,t,i)),r=Ca(Ce(e,i,n)),o=Ca(Ce(e,i,t));return!!(s!==a&&r!==o||s===0&&Ra(n,e,t)||a===0&&Ra(n,i,t)||r===0&&Ra(e,n,i)||o===0&&Ra(e,t,i))}function Ra(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ca(n){return n>0?1:n<0?-1:0}function ef(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Yh(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function qs(n,t){return Ce(n.prev,n,n.next)<0?Ce(n,t,n.next)>=0&&Ce(n,n.prev,t)>=0:Ce(n,t,n.prev)<0||Ce(n,n.next,t)<0}function nf(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,a=(n.y+t.y)/2;do e.y>a!=e.next.y>a&&e.next.y!==e.y&&s<(e.next.x-e.x)*(a-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function $h(n,t){const e=qo(n.i,n.x,n.y),i=qo(t.i,t.x,t.y),s=n.next,a=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,a.next=i,i.prev=a,i}function gc(n,t,e,i){const s=qo(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ys(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function qo(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function sf(n,t,e,i){let s=0;for(let a=t,r=e-i;a<e;a+=i)s+=(n[r]-n[a])*(n[a+1]+n[r+1]),r=a;return s}class af{static triangulate(t,e,i=2){return Gu(t,e,i)}}class Zi{static area(t){const e=t.length;let i=0;for(let s=e-1,a=0;a<e;s=a++)i+=t[s].x*t[a].y-t[a].x*t[s].y;return i*.5}static isClockWise(t){return Zi.area(t)<0}static triangulateShape(t,e){const i=[],s=[],a=[];xc(t),vc(i,t);let r=t.length;e.forEach(xc);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,vc(i,e[l]);const o=af.triangulate(i,s);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}}function xc(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function vc(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class gl extends Te{constructor(t=new rr([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],a=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];r(c)}this.setAttribute("position",new le(s,3)),this.setAttribute("uv",new le(a,2)),this.computeVertexNormals();function r(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:rf;let y,M=!1,E,T,x,w;if(m){y=m.getSpacedPoints(h),M=!0,u=!1;const tt=m.isCatmullRomCurve3?m.closed:!1;E=m.computeFrenetFrames(h,tt),T=new R,x=new R,w=new R}u||(g=0,f=0,p=0,_=0);const L=o.extractPoints(c);let C=L.shape;const I=L.holes;if(!Zi.isClockWise(C)){C=C.reverse();for(let tt=0,dt=I.length;tt<dt;tt++){const lt=I[tt];Zi.isClockWise(lt)&&(I[tt]=lt.reverse())}}function W(tt){const lt=10000000000000001e-36;let Et=tt[0];for(let vt=1;vt<=tt.length;vt++){const qt=vt%tt.length,It=tt[qt],jt=It.x-Et.x,ee=It.y-Et.y,ue=jt*jt+ee*ee,U=Math.max(Math.abs(It.x),Math.abs(It.y),Math.abs(Et.x),Math.abs(Et.y)),Ie=lt*U*U;if(ue<=Ie){tt.splice(qt,1),vt--;continue}Et=It}}W(C),I.forEach(W);const D=I.length,H=C;for(let tt=0;tt<D;tt++){const dt=I[tt];C=C.concat(dt)}function Y(tt,dt,lt){return dt||he("ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(dt,lt)}const B=C.length;function nt(tt,dt,lt){let Et,vt,qt;const It=tt.x-dt.x,jt=tt.y-dt.y,ee=lt.x-tt.x,ue=lt.y-tt.y,U=It*It+jt*jt,Ie=It*ue-jt*ee;if(Math.abs(Ie)>Number.EPSILON){const Jt=Math.sqrt(U),_e=Math.sqrt(ee*ee+ue*ue),mt=dt.x-jt/Jt,Pe=dt.y+It/Jt,Ot=lt.x-ue/_e,Gt=lt.y+ee/_e,A=((Ot-mt)*ue-(Gt-Pe)*ee)/(It*ue-jt*ee);Et=mt+It*A-tt.x,vt=Pe+jt*A-tt.y;const S=Et*Et+vt*vt;if(S<=2)return new rt(Et,vt);qt=Math.sqrt(S/2)}else{let Jt=!1;It>Number.EPSILON?ee>Number.EPSILON&&(Jt=!0):It<-Number.EPSILON?ee<-Number.EPSILON&&(Jt=!0):Math.sign(jt)===Math.sign(ue)&&(Jt=!0),Jt?(Et=-jt,vt=It,qt=Math.sqrt(U)):(Et=It,vt=jt,qt=Math.sqrt(U/2))}return new rt(Et/qt,vt/qt)}const X=[];for(let tt=0,dt=H.length,lt=dt-1,Et=tt+1;tt<dt;tt++,lt++,Et++)lt===dt&&(lt=0),Et===dt&&(Et=0),X[tt]=nt(H[tt],H[lt],H[Et]);const j=[];let et,Tt=X.concat();for(let tt=0,dt=D;tt<dt;tt++){const lt=I[tt];et=[];for(let Et=0,vt=lt.length,qt=vt-1,It=Et+1;Et<vt;Et++,qt++,It++)qt===vt&&(qt=0),It===vt&&(It=0),et[Et]=nt(lt[Et],lt[qt],lt[It]);j.push(et),Tt=Tt.concat(et)}let kt;if(g===0)kt=Zi.triangulateShape(H,I);else{const tt=[],dt=[];for(let lt=0;lt<g;lt++){const Et=lt/g,vt=f*Math.cos(Et*Math.PI/2),qt=p*Math.sin(Et*Math.PI/2)+_;for(let It=0,jt=H.length;It<jt;It++){const ee=Y(H[It],X[It],qt);Ft(ee.x,ee.y,-vt),Et===0&&tt.push(ee)}for(let It=0,jt=D;It<jt;It++){const ee=I[It];et=j[It];const ue=[];for(let U=0,Ie=ee.length;U<Ie;U++){const Jt=Y(ee[U],et[U],qt);Ft(Jt.x,Jt.y,-vt),Et===0&&ue.push(Jt)}Et===0&&dt.push(ue)}}kt=Zi.triangulateShape(tt,dt)}const $=kt.length,Mt=p+_;for(let tt=0;tt<B;tt++){const dt=u?Y(C[tt],Tt[tt],Mt):C[tt];M?(x.copy(E.normals[0]).multiplyScalar(dt.x),T.copy(E.binormals[0]).multiplyScalar(dt.y),w.copy(y[0]).add(x).add(T),Ft(w.x,w.y,w.z)):Ft(dt.x,dt.y,0)}for(let tt=1;tt<=h;tt++)for(let dt=0;dt<B;dt++){const lt=u?Y(C[dt],Tt[dt],Mt):C[dt];M?(x.copy(E.normals[tt]).multiplyScalar(lt.x),T.copy(E.binormals[tt]).multiplyScalar(lt.y),w.copy(y[tt]).add(x).add(T),Ft(w.x,w.y,w.z)):Ft(lt.x,lt.y,d/h*tt)}for(let tt=g-1;tt>=0;tt--){const dt=tt/g,lt=f*Math.cos(dt*Math.PI/2),Et=p*Math.sin(dt*Math.PI/2)+_;for(let vt=0,qt=H.length;vt<qt;vt++){const It=Y(H[vt],X[vt],Et);Ft(It.x,It.y,d+lt)}for(let vt=0,qt=I.length;vt<qt;vt++){const It=I[vt];et=j[vt];for(let jt=0,ee=It.length;jt<ee;jt++){const ue=Y(It[jt],et[jt],Et);M?Ft(ue.x,ue.y+y[h-1].y,y[h-1].x+lt):Ft(ue.x,ue.y,d+lt)}}}At(),Ut();function At(){const tt=s.length/3;if(u){let dt=0,lt=B*dt;for(let Et=0;Et<$;Et++){const vt=kt[Et];be(vt[2]+lt,vt[1]+lt,vt[0]+lt)}dt=h+g*2,lt=B*dt;for(let Et=0;Et<$;Et++){const vt=kt[Et];be(vt[0]+lt,vt[1]+lt,vt[2]+lt)}}else{for(let dt=0;dt<$;dt++){const lt=kt[dt];be(lt[2],lt[1],lt[0])}for(let dt=0;dt<$;dt++){const lt=kt[dt];be(lt[0]+B*h,lt[1]+B*h,lt[2]+B*h)}}i.addGroup(tt,s.length/3-tt,0)}function Ut(){const tt=s.length/3;let dt=0;yt(H,dt),dt+=H.length;for(let lt=0,Et=I.length;lt<Et;lt++){const vt=I[lt];yt(vt,dt),dt+=vt.length}i.addGroup(tt,s.length/3-tt,1)}function yt(tt,dt){let lt=tt.length;for(;--lt>=0;){const Et=lt;let vt=lt-1;vt<0&&(vt=tt.length-1);for(let qt=0,It=h+g*2;qt<It;qt++){const jt=B*qt,ee=B*(qt+1),ue=dt+Et+jt,U=dt+vt+jt,Ie=dt+vt+ee,Jt=dt+Et+ee;Bt(ue,U,Ie,Jt)}}}function Ft(tt,dt,lt){l.push(tt),l.push(dt),l.push(lt)}function be(tt,dt,lt){Zt(tt),Zt(dt),Zt(lt);const Et=s.length/3,vt=v.generateTopUV(i,s,Et-3,Et-2,Et-1);Qt(vt[0]),Qt(vt[1]),Qt(vt[2])}function Bt(tt,dt,lt,Et){Zt(tt),Zt(dt),Zt(Et),Zt(dt),Zt(lt),Zt(Et);const vt=s.length/3,qt=v.generateSideWallUV(i,s,vt-6,vt-3,vt-2,vt-1);Qt(qt[0]),Qt(qt[1]),Qt(qt[3]),Qt(qt[1]),Qt(qt[2]),Qt(qt[3])}function Zt(tt){s.push(l[tt*3+0]),s.push(l[tt*3+1]),s.push(l[tt*3+2])}function Qt(tt){a.push(tt.x),a.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return of(e,i,t)}static fromJSON(t,e){const i=[];for(let a=0,r=t.shapes.length;a<r;a++){const o=e[t.shapes[a]];i.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Wo[s.type]().fromJSON(s)),new gl(i,t.options)}}const rf={generateTopUV:function(n,t,e,i,s){const a=t[e*3],r=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new rt(a,r),new rt(o,l),new rt(c,h)]},generateSideWallUV:function(n,t,e,i,s,a){const r=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],d=t[i*3+2],u=t[s*3],f=t[s*3+1],p=t[s*3+2],_=t[a*3],g=t[a*3+1],m=t[a*3+2];return Math.abs(o-h)<Math.abs(r-c)?[new rt(r,1-l),new rt(c,1-d),new rt(u,1-p),new rt(_,1-m)]:[new rt(o,1-l),new rt(h,1-d),new rt(f,1-p),new rt(g,1-m)]}};function of(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const a=n[i];e.shapes.push(a.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class or extends fl{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,a,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new or(t.radius,t.detail)}}class hi extends Te{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const a=t/2,r=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],p=[],_=[],g=[];for(let m=0;m<h;m++){const v=m*u-r;for(let y=0;y<c;y++){const M=y*d-a;p.push(M,-v,0),_.push(0,0,1),g.push(y/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){const y=v+c*m,M=v+c*(m+1),E=v+1+c*(m+1),T=v+1+c*m;f.push(y,M,T),f.push(M,E,T)}this.setIndex(f),this.setAttribute("position",new le(p,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hi(t.width,t.height,t.widthSegments,t.heightSegments)}}class lr extends Te{constructor(t=.5,e=1,i=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:a,thetaLength:r},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let d=t;const u=(e-t)/s,f=new R,p=new rt;for(let _=0;_<=s;_++){for(let g=0;g<=i;g++){const m=a+g/i*r;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}d+=u}for(let _=0;_<s;_++){const g=_*(i+1);for(let m=0;m<i;m++){const v=m+g,y=v,M=v+i+1,E=v+i+2,T=v+1;o.push(y,M,T),o.push(M,E,T)}}this.setIndex(o),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class xl extends Te{constructor(t=new rr([new rt(0,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],a=[],r=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new le(s,3)),this.setAttribute("normal",new le(a,3)),this.setAttribute("uv",new le(r,2));function c(h){const d=s.length/3,u=h.extractPoints(e);let f=u.shape;const p=u.holes;Zi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const v=p[g];Zi.isClockWise(v)===!0&&(p[g]=v.reverse())}const _=Zi.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const v=p[g];f=f.concat(v)}for(let g=0,m=f.length;g<m;g++){const v=f[g];s.push(v.x,v.y,0),a.push(0,0,1),r.push(v.x,v.y)}for(let g=0,m=_.length;g<m;g++){const v=_[g],y=v[0]+d,M=v[1]+d,E=v[2]+d;i.push(y,M,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return lf(e,t)}static fromJSON(t,e){const i=[];for(let s=0,a=t.shapes.length;s<a;s++){const r=e[t.shapes[s]];i.push(r)}return new xl(i,t.curveSegments)}}function lf(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class yn extends Te{constructor(t=1,e=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const h=[],d=new R,u=new R,f=[],p=[],_=[],g=[];for(let m=0;m<=i;m++){const v=[],y=m/i,M=r+y*o,E=t*Math.cos(M),T=Math.sqrt(t*t-E*E);let x=0;m===0&&r===0?x=.5/e:m===i&&l===Math.PI&&(x=-.5/e);for(let w=0;w<=e;w++){const L=w/e,C=s+L*a;d.x=-T*Math.cos(C),d.y=E,d.z=T*Math.sin(C),p.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),g.push(L+x,1-y),v.push(c++)}h.push(v)}for(let m=0;m<i;m++)for(let v=0;v<e;v++){const y=h[m][v+1],M=h[m][v],E=h[m+1][v],T=h[m+1][v+1];(m!==0||r>0)&&f.push(y,M,T),(m!==i-1||l<Math.PI)&&f.push(M,E,T)}this.setIndex(f),this.setAttribute("position",new le(p,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function ms(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(_c(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(_c(s[0])){const a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[e][i]=a}else t[e][i]=s.slice();else t[e][i]=s}}return t}function si(n){const t={};for(let e=0;e<n.length;e++){const i=ms(n[e]);for(const s in i)t[s]=i[s]}return t}function _c(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function cf(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Kh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const hf={clone:ms,merge:si};var df=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tn extends bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=df,this.fragmentShader=uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=cf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Vt().setHex(s.value);break;case"v2":this.uniforms[i].value=new rt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new R().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Re().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ht().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ye().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class ff extends tn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class se extends bn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Go,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class pf extends bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class mf extends bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class cr extends Ue{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class gf extends cr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const qr=new ye,Mc=new R,yc=new R;class Zh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ws,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Mc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mc),yc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){qr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(qr,t.coordinateSystem,t.reversedDepth);const a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,l=s?s.x/a.x:0,c=s?s.y/a.y:0;t.coordinateSystem===Vs||t.reversedDepth?e.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(qr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Pa=new R,La=new xs,Pi=new R;class Jh extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Pa,La,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pa,La,Pi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Pa,La,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pa,La,Pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const dn=new R,Sc=new rt,bc=new rt;class yi extends Jh{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ho*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Va*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ho*2*Math.atan(Math.tan(Va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(dn.x,dn.y).multiplyScalar(-t/dn.z),dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(dn.x,dn.y).multiplyScalar(-t/dn.z)}getViewSize(t,e){return this.getViewBounds(t,Sc,bc),e.subVectors(bc,Sc)}setViewOffset(t,e,i,s,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Va*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,e-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class xf extends Zh{constructor(){super(new yi(90,1,.5,500)),this.isPointLightShadow=!0}}class wc extends cr{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new xf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Qh extends Jh{constructor(t=-1,e=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-t,r=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class vf extends Zh{constructor(){super(new Qh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wa extends cr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new vf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class _f extends cr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const ns=-90,ss=1;class Yo extends Ue{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new yi(ns,ss,t,e);s.layers=this.layers,this.add(s);const a=new yi(ns,ss,t,e);a.layers=this.layers,this.add(a);const r=new yi(ns,ss,t,e);r.layers=this.layers,this.add(r);const o=new yi(ns,ss,t,e);o.layers=this.layers,this.add(o);const l=new yi(ns,ss,t,e);l.layers=this.layers,this.add(l);const c=new yi(ns,ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,a,r,o,l]=e;for(const c of e)this.remove(c);if(t===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Vs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=_,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Mf extends yi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}function Ec(n,t,e,i){const s=yf(i);switch(e){case Mh:return n*t;case Sh:return n*t/s.components*s.byteLength;case al:return n*t/s.components*s.byteLength;case On:return n*t*2/s.components*s.byteLength;case rl:return n*t*2/s.components*s.byteLength;case yh:return n*t*3/s.components*s.byteLength;case Ui:return n*t*4/s.components*s.byteLength;case ol:return n*t*4/s.components*s.byteLength;case ka:case Ba:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case za:case Ga:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case uo:case po:return Math.max(n,16)*Math.max(t,8)/4;case ho:case fo:return Math.max(n,8)*Math.max(t,8)/2;case mo:case go:case vo:case _o:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case xo:case Ya:case Mo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case yo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case So:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case bo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case wo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case To:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ro:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Co:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Po:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Io:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Do:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case No:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Uo:case Fo:case Oo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ko:case Bo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case $a:case zo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function yf(n){switch(n){case mi:case gh:return{byteLength:1,components:1};case Hs:case xh:case zi:return{byteLength:2,components:1};case nl:case sl:return{byteLength:2,components:4};case Bi:case il:case Ni:return{byteLength:4,components:1};case vh:case _h:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tl}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tl);function jh(){let n=null,t=!1,e=null,i=null;function s(a,r){i=n.requestAnimationFrame(s),e(a,r)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){n=a}}}function Sf(n){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){const p=d[u],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){const _=d[f];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ef=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Af=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,If=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Df=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ff=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Of=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Wf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,qf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,$f=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qf="gl_FragColor = linearToOutputTexel( gl_FragColor );",jf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ep=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ip=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,np=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ap=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,pp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,mp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_p=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ep=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ap=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ip=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Np=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Up=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Op=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Xp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Qp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,e0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,a0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,r0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,o0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,l0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,h0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,u0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,p0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,m0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,g0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,x0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const S0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,C0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,P0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,L0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,U0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,O0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,G0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,V0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,W0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Y0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,J0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,em=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:bf,alphahash_pars_fragment:wf,alphamap_fragment:Ef,alphamap_pars_fragment:Tf,alphatest_fragment:Af,alphatest_pars_fragment:Rf,aomap_fragment:Cf,aomap_pars_fragment:Pf,batching_pars_vertex:Lf,batching_vertex:If,begin_vertex:Df,beginnormal_vertex:Nf,bsdfs:Uf,iridescence_fragment:Ff,bumpmap_pars_fragment:Of,clipping_planes_fragment:kf,clipping_planes_pars_fragment:Bf,clipping_planes_pars_vertex:zf,clipping_planes_vertex:Gf,color_fragment:Hf,color_pars_fragment:Vf,color_pars_vertex:Wf,color_vertex:Xf,common:qf,defaultnormal_vertex:Yf,displacementmap_pars_vertex:$f,displacementmap_vertex:Kf,emissivemap_fragment:Zf,emissivemap_pars_fragment:Jf,colorspace_fragment:Qf,colorspace_pars_fragment:jf,envmap_fragment:tp,envmap_common_pars_fragment:ep,envmap_pars_fragment:ip,envmap_pars_vertex:np,envmap_physical_pars_fragment:pp,envmap_vertex:sp,fog_vertex:ap,fog_pars_vertex:rp,fog_fragment:op,fog_pars_fragment:lp,gradientmap_pars_fragment:cp,lightmap_pars_fragment:hp,lights_lambert_fragment:dp,lights_lambert_pars_fragment:up,lights_pars_begin:fp,lights_toon_fragment:mp,lights_toon_pars_fragment:gp,lights_phong_fragment:xp,lights_phong_pars_fragment:vp,lights_physical_fragment:_p,lights_physical_pars_fragment:Mp,lights_fragment_begin:yp,lights_fragment_maps:Sp,lights_fragment_end:bp,lightprobes_pars_fragment:wp,logdepthbuf_fragment:Ep,logdepthbuf_pars_fragment:Tp,logdepthbuf_pars_vertex:Ap,logdepthbuf_vertex:Rp,map_fragment:Cp,map_pars_fragment:Pp,map_particle_fragment:Lp,map_particle_pars_fragment:Ip,metalnessmap_fragment:Dp,metalnessmap_pars_fragment:Np,morphinstance_vertex:Up,morphcolor_vertex:Fp,morphnormal_vertex:Op,morphtarget_pars_vertex:kp,morphtarget_vertex:Bp,normal_fragment_begin:zp,normal_fragment_maps:Gp,normal_pars_fragment:Hp,normal_pars_vertex:Vp,normal_vertex:Wp,normalmap_pars_fragment:Xp,clearcoat_normal_fragment_begin:qp,clearcoat_normal_fragment_maps:Yp,clearcoat_pars_fragment:$p,iridescence_pars_fragment:Kp,opaque_fragment:Zp,packing:Jp,premultiplied_alpha_fragment:Qp,project_vertex:jp,dithering_fragment:t0,dithering_pars_fragment:e0,roughnessmap_fragment:i0,roughnessmap_pars_fragment:n0,shadowmap_pars_fragment:s0,shadowmap_pars_vertex:a0,shadowmap_vertex:r0,shadowmask_pars_fragment:o0,skinbase_vertex:l0,skinning_pars_vertex:c0,skinning_vertex:h0,skinnormal_vertex:d0,specularmap_fragment:u0,specularmap_pars_fragment:f0,tonemapping_fragment:p0,tonemapping_pars_fragment:m0,transmission_fragment:g0,transmission_pars_fragment:x0,uv_pars_fragment:v0,uv_pars_vertex:_0,uv_vertex:M0,worldpos_vertex:y0,background_vert:S0,background_frag:b0,backgroundCube_vert:w0,backgroundCube_frag:E0,cube_vert:T0,cube_frag:A0,depth_vert:R0,depth_frag:C0,distance_vert:P0,distance_frag:L0,equirect_vert:I0,equirect_frag:D0,linedashed_vert:N0,linedashed_frag:U0,meshbasic_vert:F0,meshbasic_frag:O0,meshlambert_vert:k0,meshlambert_frag:B0,meshmatcap_vert:z0,meshmatcap_frag:G0,meshnormal_vert:H0,meshnormal_frag:V0,meshphong_vert:W0,meshphong_frag:X0,meshphysical_vert:q0,meshphysical_frag:Y0,meshtoon_vert:$0,meshtoon_frag:K0,points_vert:Z0,points_frag:J0,shadow_vert:Q0,shadow_frag:j0,sprite_vert:tm,sprite_frag:em},bt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Di={basic:{uniforms:si([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:si([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Vt(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:si([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:si([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:si([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:si([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:si([bt.points,bt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:si([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:si([bt.common,bt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:si([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:si([bt.sprite,bt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:si([bt.common,bt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:si([bt.lights,bt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Di.physical={uniforms:si([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const Ia={r:0,b:0,g:0},im=new ye,td=new Ht;td.set(-1,0,0,0,1,0,0,0,1);function nm(n,t,e,i,s,a){const r=new Vt(0);let o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){const M=v.backgroundBlurriness>0;y=t.get(y,M)}return y}function p(v){let y=!1;const M=f(v);M===null?g(r,o):M&&M.isColor&&(g(M,1),y=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(v,y){const M=f(y);M&&M.isCubeTexture?(c===void 0&&(c=new _t(new re(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:ms(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(im.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(td),c.material.toneMapped=oe.getTransfer(M.colorSpace)!==ve,(h!==M||d!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new _t(new hi(2,2),new tn({name:"BackgroundMaterial",uniforms:ms(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=oe.getTransfer(M.colorSpace)!==ve,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,y){v.getRGB(Ia,Kh(n)),e.buffers.color.setClear(Ia.r,Ia.g,Ia.b,y,a)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(v,y=1){r.set(v),o=y,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(r,o)},render:p,addToRenderList:_,dispose:m}}function sm(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let a=s,r=!1;function o(I,F,W,D,H){let Y=!1;const B=d(I,D,W,F);a!==B&&(a=B,c(a.object)),Y=f(I,D,W,H),Y&&p(I,D,W,H),H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(Y||r)&&(r=!1,M(I,F,W,D),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return n.createVertexArray()}function c(I){return n.bindVertexArray(I)}function h(I){return n.deleteVertexArray(I)}function d(I,F,W,D){const H=D.wireframe===!0;let Y=i[F.id];Y===void 0&&(Y={},i[F.id]=Y);const B=I.isInstancedMesh===!0?I.id:0;let nt=Y[B];nt===void 0&&(nt={},Y[B]=nt);let X=nt[W.id];X===void 0&&(X={},nt[W.id]=X);let j=X[H];return j===void 0&&(j=u(l()),X[H]=j),j}function u(I){const F=[],W=[],D=[];for(let H=0;H<e;H++)F[H]=0,W[H]=0,D[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:D,object:I,attributes:{},index:null}}function f(I,F,W,D){const H=a.attributes,Y=F.attributes;let B=0;const nt=W.getAttributes();for(const X in nt)if(nt[X].location>=0){const et=H[X];let Tt=Y[X];if(Tt===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(Tt=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(Tt=I.instanceColor)),et===void 0||et.attribute!==Tt||Tt&&et.data!==Tt.data)return!0;B++}return a.attributesNum!==B||a.index!==D}function p(I,F,W,D){const H={},Y=F.attributes;let B=0;const nt=W.getAttributes();for(const X in nt)if(nt[X].location>=0){let et=Y[X];et===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(et=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(et=I.instanceColor));const Tt={};Tt.attribute=et,et&&et.data&&(Tt.data=et.data),H[X]=Tt,B++}a.attributes=H,a.attributesNum=B,a.index=D}function _(){const I=a.newAttributes;for(let F=0,W=I.length;F<W;F++)I[F]=0}function g(I){m(I,0)}function m(I,F){const W=a.newAttributes,D=a.enabledAttributes,H=a.attributeDivisors;W[I]=1,D[I]===0&&(n.enableVertexAttribArray(I),D[I]=1),H[I]!==F&&(n.vertexAttribDivisor(I,F),H[I]=F)}function v(){const I=a.newAttributes,F=a.enabledAttributes;for(let W=0,D=F.length;W<D;W++)F[W]!==I[W]&&(n.disableVertexAttribArray(W),F[W]=0)}function y(I,F,W,D,H,Y,B){B===!0?n.vertexAttribIPointer(I,F,W,H,Y):n.vertexAttribPointer(I,F,W,D,H,Y)}function M(I,F,W,D){_();const H=D.attributes,Y=W.getAttributes(),B=F.defaultAttributeValues;for(const nt in Y){const X=Y[nt];if(X.location>=0){let j=H[nt];if(j===void 0&&(nt==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),nt==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){const et=j.normalized,Tt=j.itemSize,kt=t.get(j);if(kt===void 0)continue;const $=kt.buffer,Mt=kt.type,At=kt.bytesPerElement,Ut=Mt===n.INT||Mt===n.UNSIGNED_INT||j.gpuType===il;if(j.isInterleavedBufferAttribute){const yt=j.data,Ft=yt.isInterleavedBuffer===!0?yt.stride:yt.itemSize,be=j.offset;if(yt.isInstancedInterleavedBuffer||yt.isInstancedBufferAttribute){for(let Bt=0;Bt<X.locationSize;Bt++)m(X.location+Bt,yt.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Bt=0;Bt<X.locationSize;Bt++)g(X.location+Bt);n.bindBuffer(n.ARRAY_BUFFER,$);for(let Bt=0;Bt<X.locationSize;Bt++)y(X.location+Bt,Tt/X.locationSize,Mt,et,Ft*At,(be+Tt/X.locationSize*Bt)*At,Ut)}else{if(j.isInstancedBufferAttribute){for(let yt=0;yt<X.locationSize;yt++)m(X.location+yt,j.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let yt=0;yt<X.locationSize;yt++)g(X.location+yt);n.bindBuffer(n.ARRAY_BUFFER,$);for(let yt=0;yt<X.locationSize;yt++)y(X.location+yt,Tt/X.locationSize,Mt,et,Tt*At,Tt/X.locationSize*yt*At,Ut)}}else if(B!==void 0){const et=B[nt];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv(X.location,et);break;case 3:n.vertexAttrib3fv(X.location,et);break;case 4:n.vertexAttrib4fv(X.location,et);break;default:n.vertexAttrib1fv(X.location,et)}}}}v()}function E(){L();for(const I in i){const F=i[I];for(const W in F){const D=F[W];for(const H in D){const Y=D[H];for(const B in Y)h(Y[B].object),delete Y[B];delete D[H]}}delete i[I]}}function T(I){if(i[I.id]===void 0)return;const F=i[I.id];for(const W in F){const D=F[W];for(const H in D){const Y=D[H];for(const B in Y)h(Y[B].object),delete Y[B];delete D[H]}}delete i[I.id]}function x(I){for(const F in i){const W=i[F];for(const D in W){const H=W[D];if(H[I.id]===void 0)continue;const Y=H[I.id];for(const B in Y)h(Y[B].object),delete Y[B];delete H[I.id]}}}function w(I){for(const F in i){const W=i[F],D=I.isInstancedMesh===!0?I.id:0,H=W[D];if(H!==void 0){for(const Y in H){const B=H[Y];for(const nt in B)h(B[nt].object),delete B[nt];delete H[Y]}delete W[D],Object.keys(W).length===0&&delete i[F]}}}function L(){C(),r=!0,a!==s&&(a=s,c(a.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:w,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function am(n,t,e){let i;function s(l){i=l}function a(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function r(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function rm(n,t,e,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const x=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(x){return!(x!==Ui&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const w=x===zi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==mi&&x!==Ni&&!w&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:M,maxSamples:E,samples:T}}function om(n){const t=this;let e=null,i=0,s=!1,a=!1;const r=new mn,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const p=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,m=n.get(d);if(!s||p===null||p.length===0||a&&!g)a?h(null):c();else{const v=a?0:i,y=v*4;let M=m.clippingState||null;l.value=M,M=h(p,u,y,f);for(let E=0;E!==y;++E)M[E]=e[E];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,p){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const m=f+_*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,M=f;y!==_;++y,M+=4)r.copy(d[y]).applyMatrix4(v,o),r.normal.toArray(g,M),g[M+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}class vl extends Fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new kh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new re(5,5,5),a=new tn({name:"CubemapFromEquirect",uniforms:ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ci,blending:os});a.uniforms.tEquirect.value=e;const r=new _t(s,a),o=e.minFilter;return e.minFilter===xn&&(e.minFilter=di),new Yo(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(a)}}const Tc=256,lm=3,cm=20,ed=256,id=16,hm=3,dm=new R,um=new Vt;class ir{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Yo(1,10,null),this._boxMesh=new _t(new re(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,a={}){const{size:r=256,position:o=dm}=a,l=this._renderer;this._setSize(r);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(um));const g=new Yo(i,s,h);return g.position.copy(o),g.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Tc,eu(t))}_fromTexture(t,e){t.mapping===ds||t.mapping===Gs?this._setSize(t.image.length===0?Tc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){const t=this._cubeSize,e=Ac(t,!1,!1),i=Math.log2(t)-lm;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Ac(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){const s=this._boxMesh,a=this._cubeCamera;s.material=i,a.renderTarget=t,a.activeMipmapLevel=e;const r=t.width>>e;t.viewport.set(0,0,r,r),a.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ds||t.mapping===Gs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Rc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=fm(),this._integrationMaterial=pm());const e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(e/id);for(let r=0;r<=i;r++){const o=ir.lodToRoughness(r,i);if(r>i-hm)a.roughness.value=o,this._renderCube(t,r,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(ed*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,r,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=mm());const i=this._blurMaterial,s=i.uniforms,a=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=a.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(a,0,i)}}function Ac(n,t,e){return new vl(n,{minFilter:xn,generateMipmaps:t,type:zi,colorSpace:Ka,depthBuffer:e})}function Js(n,t,e){return new tn({name:n,uniforms:t,vertexShader:Kt.cube_vert,fragmentShader:e,side:ci,blending:os,depthTest:!1,depthWrite:!1})}function fm(){return Js("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ed}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function pm(){return Js("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:id}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function mm(){return Js("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${cm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Rc(){return Js("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Cc(){return Js("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function gm(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?r(u):a(u)}function a(u){if(u&&u.isTexture){const f=u.mapping;if(f===mr||f===gr)if(t.has(u)){const p=t.get(u).texture;return o(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const _=new vl(p.height);return _.fromEquirectangularTexture(n,u),t.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const f=u.mapping,p=f===mr||f===gr,_=f===ds||f===Gs;if(p||_){let g=e.get(u);const m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new ir(n)),g=p?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const v=u.image;return p&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new ir(n)),g=p?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===mr?u.mapping=ds:f===gr&&(u.mapping=Gs),u}function l(u){let f=0;const p=6;for(let _=0;_<p;_++)u[_]!==void 0&&f++;return f===p}function c(u){const f=u.target;f.removeEventListener("dispose",c);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function xm(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Ha("WebGLRenderer: "+i+" extension not supported."),s}}}function vm(n,t,e,i){const s={},a=new WeakMap,r=new FinalizationRegistry(p=>delete s[p]);function o(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id],r.unregister(p);const _=a.get(p);_&&(t.remove(_),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),r.register(_,_.id,_),e.memory.geometries++),_}function h(p){const _=p.attributes;for(const g in _)t.update(_[g],n.ARRAY_BUFFER)}function d(p){const _=p.index,g=p.attributes.position;let m=0;if(g===void 0)return;const v=_!==null?_.array.length:g.array.length/3-1,y=g.count>=65535?Nh:Dh,M=new y(Math.ceil(v/3)*6,1),E=M.array;if(_!==null){const x=_.array;m=_.version;for(let w=0,L=0;w<v;w+=3){const C=x[w+0],I=x[w+1],F=x[w+2];E[L++]=C,E[L++]=I,E[L++]=I,E[L++]=F,E[L++]=F,E[L++]=C}}else{m=g.version;for(let x=0,w=0;x<v;x+=3){const L=x+0,C=x+1,I=x+2;E[w++]=L,E[w++]=C,E[w++]=C,E[w++]=I,E[w++]=I,E[w++]=L}}M.version=m;const T=a.get(p);T&&t.remove(T),a.set(p,M)}function u(p){const _=a.get(p);if(_){const g=p.index;g!==null&&_.version<g.version&&d(p)}else d(p);return a.get(p)}function f(){for(const p in s){const _=s[p].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function _m(n,t,e){let i;function s(d){i=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function l(d,u){n.drawElements(i,u,a,d*r),e.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,a,d*r,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,d,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];e.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Mm(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=o*(a/3);break;case n.LINES:e.lines+=o*(a/2);break;case n.LINE_STRIP:e.lines+=o*(a-1);break;case n.LINE_LOOP:e.lines+=o*a;break;case n.POINTS:e.points+=o*a;break;default:he("WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function ym(n,t,e){const i=new WeakMap,s=new Re;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let C=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",C)};var f=C;u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;p===!0&&(M=1),_===!0&&(M=2),g===!0&&(M=3);let E=o.attributes.position.count*M,T=1;E>t.maxTextureSize&&(T=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const x=new Float32Array(E*T*4*d),w=new Ph(x,E,T,d);w.type=Ni,w.needsUpdate=!0;const L=M*4;for(let I=0;I<d;I++){const F=m[I],W=v[I],D=y[I],H=E*T*4*I;for(let Y=0;Y<F.count;Y++){const B=Y*L;p===!0&&(s.fromBufferAttribute(F,Y),x[H+B+0]=s.x,x[H+B+1]=s.y,x[H+B+2]=s.z,x[H+B+3]=0),_===!0&&(s.fromBufferAttribute(W,Y),x[H+B+4]=s.x,x[H+B+5]=s.y,x[H+B+6]=s.z,x[H+B+7]=0),g===!0&&(s.fromBufferAttribute(D,Y),x[H+B+8]=s.x,x[H+B+9]=s.y,x[H+B+10]=s.z,x[H+B+11]=D.itemSize===4?s.w:1)}}u={count:d,texture:w,size:new rt(E,T)},i.set(o,u),o.addEventListener("dispose",C)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:a}}function Sm(n,t,e,i,s){let a=new WeakMap;function r(c){const h=s.render.frame,d=c.geometry,u=t.get(c,d);if(a.get(u)!==h&&(t.update(u),a.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;a.get(f)!==h&&(f.update(),a.set(f,h))}return u}function o(){a=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}const bm={[ch]:"LINEAR_TONE_MAPPING",[hh]:"REINHARD_TONE_MAPPING",[dh]:"CINEON_TONE_MAPPING",[el]:"ACES_FILMIC_TONE_MAPPING",[fh]:"AGX_TONE_MAPPING",[ph]:"NEUTRAL_TONE_MAPPING",[uh]:"CUSTOM_TONE_MAPPING"};function wm(n,t,e,i,s,a){const r=new Fi(t,e,{type:n,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new Te;h.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new le([0,2,0,0,2,0],2));const d=new ff({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new _t(h,d),f=new Qh(-1,1,1,-1,0,1);let p=null,_=null,g=!1,m,v=null,y=[],M=!1;this.setSize=function(E,T){r.setSize(E,T),o!==null&&o.setSize(E,T),l!==null&&l.setSize(E,T);for(let x=0;x<y.length;x++){const w=y[x];w.setSize&&w.setSize(E,T)}},this.setEffects=function(E){y=E,M=y.length>0&&y[0].isRenderPass===!0;const T=r.width,x=r.height;y.length>0&&o===null&&(o=new Fi(T,x,{type:zi,depthBuffer:!1,stencilBuffer:!1}),l=new Fi(T,x,{type:zi,depthBuffer:!1,stencilBuffer:!1}));const w=s===!0&&y.some(L=>L.needsDepthTexture===!0);w!==(r.depthTexture!==null)&&(w===!0&&c===null&&(c=new fs(T,x),a===!0&&(c.format=vn,c.type=us)),r.dispose(),r.depthTexture=w?c:null,r.resolveDepthBuffer=w,r.storeMultisampledDepthBuffer=w);for(let L=0;L<y.length;L++){const C=y[L];C.setSize&&C.setSize(T,x),w&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(E,T){if(g||E.toneMapping===Ji&&y.length===0)return!1;if(v=T,T!==null){const x=T.width,w=T.height;(r.width!==x||r.height!==w)&&this.setSize(x,w)}return M===!1&&E.setRenderTarget(r),m=E.toneMapping,E.toneMapping=Ji,!0},this.hasRenderPass=function(){return M},this.end=function(E,T){E.toneMapping=m,g=!0;let x=r,w=o;for(let L=0;L<y.length;L++){const C=y[L];C.enabled!==!1&&(C.render(E,w,x,T),C.needsSwap!==!1&&(x=w,w=w===o?l:o))}if(p!==E.outputColorSpace||_!==E.toneMapping){p=E.outputColorSpace,_=E.toneMapping,d.defines={},oe.getTransfer(p)===ve&&(d.defines.SRGB_TRANSFER="");const L=bm[_];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(v),E.render(u,f),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const nd=new ei,sd=new fs(1,1),ad=new Bh(1),rd=new Ph,od=new ou,ld=new kh,Pc=[],Lc=[],Ic=new Float32Array(16),Dc=new Float32Array(9),Nc=new Float32Array(4);function Ms(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let a=Pc[s];if(a===void 0&&(a=new Float32Array(s),Pc[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,n[r].toArray(a,o)}return a}function ke(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function hr(n,t){let e=Lc[t];e===void 0&&(e=new Int32Array(t),Lc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Em(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Tm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2fv(this.addr,t),Be(e,t)}}function Am(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;n.uniform3fv(this.addr,t),Be(e,t)}}function Rm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4fv(this.addr,t),Be(e,t)}}function Cm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,i))return;Nc.set(i),n.uniformMatrix2fv(this.addr,!1,Nc),Be(e,i)}}function Pm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,i))return;Dc.set(i),n.uniformMatrix3fv(this.addr,!1,Dc),Be(e,i)}}function Lm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,i))return;Ic.set(i),n.uniformMatrix4fv(this.addr,!1,Ic),Be(e,i)}}function Im(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Dm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2iv(this.addr,t),Be(e,t)}}function Nm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;n.uniform3iv(this.addr,t),Be(e,t)}}function Um(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4iv(this.addr,t),Be(e,t)}}function Fm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Om(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2uiv(this.addr,t),Be(e,t)}}function km(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;n.uniform3uiv(this.addr,t),Be(e,t)}}function Bm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4uiv(this.addr,t),Be(e,t)}}function dr(n){return n.version===0&&(n.compareFunction=Eh,n.needsUpdate=!0),n}function zm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_2D_SHADOW?a=dr(sd):a=nd,e.setTexture2D(t||a,s)}function Gm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||od,s)}function Hm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_CUBE_SHADOW?a=dr(ad):a=ld,e.setTextureCube(t||a,s)}function Vm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||rd,s)}function Wm(n){switch(n){case 5126:return Em;case 35664:return Tm;case 35665:return Am;case 35666:return Rm;case 35674:return Cm;case 35675:return Pm;case 35676:return Lm;case 5124:case 35670:return Im;case 35667:case 35671:return Dm;case 35668:case 35672:return Nm;case 35669:case 35673:return Um;case 5125:return Fm;case 36294:return Om;case 36295:return km;case 36296:return Bm;case 35678:case 36198:case 36298:case 36306:case 35682:return zm;case 35679:case 36299:case 36307:return Gm;case 35680:case 36300:case 36308:case 36293:return Hm;case 36289:case 36303:case 36311:case 36292:return Vm}}function Xm(n,t){n.uniform1fv(this.addr,t)}function qm(n,t){const e=Ms(t,this.size,2);n.uniform2fv(this.addr,e)}function Ym(n,t){const e=Ms(t,this.size,3);n.uniform3fv(this.addr,e)}function $m(n,t){const e=Ms(t,this.size,4);n.uniform4fv(this.addr,e)}function Km(n,t){const e=Ms(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Zm(n,t){const e=Ms(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Jm(n,t){const e=Ms(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Qm(n,t){n.uniform1iv(this.addr,t)}function jm(n,t){n.uniform2iv(this.addr,t)}function tg(n,t){n.uniform3iv(this.addr,t)}function eg(n,t){n.uniform4iv(this.addr,t)}function ig(n,t){n.uniform1uiv(this.addr,t)}function ng(n,t){n.uniform2uiv(this.addr,t)}function sg(n,t){n.uniform3uiv(this.addr,t)}function ag(n,t){n.uniform4uiv(this.addr,t)}function rg(n,t,e){const i=this.cache,s=t.length,a=hr(e,s);ke(i,a)||(n.uniform1iv(this.addr,a),Be(i,a));let r;this.type===n.SAMPLER_2D_SHADOW?r=dr(sd):r=nd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||r,a[o])}function og(n,t,e){const i=this.cache,s=t.length,a=hr(e,s);ke(i,a)||(n.uniform1iv(this.addr,a),Be(i,a));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||od,a[r])}function lg(n,t,e){const i=this.cache,s=t.length,a=hr(e,s);ke(i,a)||(n.uniform1iv(this.addr,a),Be(i,a));let r;this.type===n.SAMPLER_CUBE_SHADOW?r=dr(ad):r=ld;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||r,a[o])}function cg(n,t,e){const i=this.cache,s=t.length,a=hr(e,s);ke(i,a)||(n.uniform1iv(this.addr,a),Be(i,a));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||rd,a[r])}function hg(n){switch(n){case 5126:return Xm;case 35664:return qm;case 35665:return Ym;case 35666:return $m;case 35674:return Km;case 35675:return Zm;case 35676:return Jm;case 5124:case 35670:return Qm;case 35667:case 35671:return jm;case 35668:case 35672:return tg;case 35669:case 35673:return eg;case 5125:return ig;case 36294:return ng;case 36295:return sg;case 36296:return ag;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return cg}}class dg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Wm(e.type)}}class ug{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hg(e.type)}}class fg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(t,e[o.id],i)}}}const Yr=/(\w+)(\])?(\[|\.)?/g;function Uc(n,t){n.seq.push(t),n.map[t.id]=t}function pg(n,t,e){const i=n.name,s=i.length;for(Yr.lastIndex=0;;){const a=Yr.exec(i),r=Yr.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Uc(e,c===void 0?new dg(o,n,t):new ug(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new fg(o),Uc(e,d)),e=d}}}class Xa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=t.getActiveUniform(e,r),l=t.getUniformLocation(e,o.name);pg(o,l,this)}const s=[],a=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,e,i,s){const a=this.map[e];a!==void 0&&a.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let a=0,r=e.length;a!==r;++a){const o=e[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,a=t.length;s!==a;++s){const r=t[s];r.id in e&&i.push(r)}return i}}function Fc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const mg=37297;let gg=0;function xg(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=s;r<a;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return i.join(`
`)}const Oc=new Ht;function vg(n){oe._getMatrix(Oc,oe.workingColorSpace,n);const t=`mat3( ${Oc.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(n)){case Za:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function kc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),a=(n.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+a+`

`+xg(n.getShaderSource(t),o)}else return a}function _g(n,t){const e=vg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Mg={[ch]:"Linear",[hh]:"Reinhard",[dh]:"Cineon",[el]:"ACESFilmic",[fh]:"AgX",[ph]:"Neutral",[uh]:"Custom"};function yg(n,t){const e=Mg[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Da=new R;function Sg(){oe.getLuminanceCoefficients(Da);const n=Da.x.toFixed(4),t=Da.y.toFixed(4),e=Da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ds).join(`
`)}function wg(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Eg(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=n.getActiveAttrib(t,s),r=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:n.getAttribLocation(t,r),locationSize:o}}return e}function Ds(n){return n!==""}function Bc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function zc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function $o(n){return n.replace(Tg,Ag)}function Ag(n,t){const e=Kt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return $o(e)}const Rg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gc(n){return n.replace(Rg,Cg)}function Cg(n,t,e,i){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Hc(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Pg={[Ns]:"SHADOWMAP_TYPE_PCF",[Ls]:"SHADOWMAP_TYPE_VSM"};function Lg(n){return Pg[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ig={[Gs]:"ENVMAP_MODE_REFRACTION"};function Dg(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Ig[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Ng={[lh]:"ENVMAP_BLENDING_MULTIPLY",[Bd]:"ENVMAP_BLENDING_MIX",[zd]:"ENVMAP_BLENDING_ADD"};function Ug(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Ng[n.combine]||"ENVMAP_BLENDING_NONE"}function Fg(n,t,e,i){const s=n.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=Lg(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Dg(e),d=Ug(e),u=bg(e),f=wg(a),p=s.createProgram();let _,g,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ds).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ds).join(`
`),g.length>0&&(g+=`
`)):(_=[Hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),g=[Hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ji?"#define TONE_MAPPING":"",e.toneMapping!==Ji?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Ji?yg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,_g("linearToOutputTexel",e.outputColorSpace),Sg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ds).join(`
`)),r=$o(r),r=Bc(r,e),r=zc(r,e),o=$o(o),o=Bc(o,e),o=zc(o,e),r=Gc(r),o=Gc(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",e.glslVersion===zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=m+_+r,y=m+g+o,M=Fc(s,s.VERTEX_SHADER,v),E=Fc(s,s.FRAGMENT_SHADER,y);s.attachShader(p,M),s.attachShader(p,E),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function T(C){if(n.debug.checkShaderErrors){const I=s.getProgramInfoLog(p)||"",F=s.getShaderInfoLog(M)||"",W=s.getShaderInfoLog(E)||"",D=I.trim(),H=F.trim(),Y=W.trim();let B=!0,nt=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,M,E);else{const X=kc(s,M,"vertex"),j=kc(s,E,"fragment");he("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+D+`
`+X+`
`+j)}else D!==""?zt("WebGLProgram: Program Info Log:",D):(H===""||Y==="")&&(nt=!1);nt&&(C.diagnostics={runnable:B,programLog:D,vertexShader:{log:H,prefix:_},fragmentShader:{log:Y,prefix:g}})}s.deleteShader(M),s.deleteShader(E),x=new Xa(s,p),w=Eg(s,p)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(p,mg)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gg++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=E,this}let Og=0;class kg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Bg(t),e.set(t,i)),i}}class Bg{constructor(t){this.id=Og++,this.code=t,this.usedTimes=0}}function zg(n){return n===On||n===Ya||n===$a}function Gg(n,t,e,i,s,a){const r=new Lh,o=new kg,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,w,L,C,I,F){const W=C.fog,D=I.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,B=t.get(x.envMap||H,Y),nt=u[x.type];let X=i.precision;x.precision!==null&&(X=i.getMaxPrecision(x.precision),X!==x.precision&&zt("WebGLProgram.getParameters:",x.precision,"not supported, using",X,"instead."));const j=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,et=j!==void 0?j.length:0;let Tt=0;D.morphAttributes.position!==void 0&&(Tt=1),D.morphAttributes.normal!==void 0&&(Tt=2),D.morphAttributes.color!==void 0&&(Tt=3);let kt,$,Mt,At;if(nt){const St=Di[nt];kt=St.vertexShader,$=St.fragmentShader}else{kt=x.vertexShader,$=x.fragmentShader;const St=o.getVertexShaderStage(x),xe=o.getFragmentShaderStage(x);o.update(x,St,xe),Mt=St.id,At=xe.id}const Ut=n.getRenderTarget(),yt=n.state.buffers.depth.getReversed(),Ft=I.isInstancedMesh===!0,be=I.isBatchedMesh===!0,Bt=!!x.map,Zt=!!x.matcap,Qt=!!B,tt=Qt&&B.isPMREMTexture===!0,dt=!!x.aoMap,lt=!!x.lightMap,Et=!!x.bumpMap&&x.wireframe===!1,vt=!!x.normalMap,qt=!!x.displacementMap,It=!!x.emissiveMap,jt=!!x.metalnessMap,ee=!!x.roughnessMap,ue=x.anisotropy>0,U=x.clearcoat>0,Ie=x.diffuseRoughness>0,Jt=x.dispersion>0,_e=x.retroreflectivity>0,mt=x.iridescence>0,Pe=x.sheen>0,Ot=x.transmission>0,Gt=ue&&!!x.anisotropyMap,A=U&&!!x.clearcoatMap,S=U&&!!x.clearcoatNormalMap,z=U&&!!x.clearcoatRoughnessMap,st=Ie&&!!x.diffuseRoughnessMap,Q=mt&&!!x.iridescenceMap,ct=mt&&!!x.iridescenceThicknessMap,gt=Pe&&!!x.sheenColorMap,K=Pe&&!!x.sheenRoughnessMap,Z=!!x.specularMap,ut=!!x.specularColorMap,P=!!x.specularIntensityMap,J=Ot&&!!x.transmissionMap,q=Ot&&!!x.thicknessMap,ft=!!x.gradientMap,ot=!!x.alphaMap,ht=x.alphaTest>0,Dt=!!x.alphaHash,$t=!!x.extensions;let at=Ji;x.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(at=n.toneMapping);const Nt=tt?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,Yt={shaderID:nt,shaderType:x.type,shaderName:x.name,vertexShader:kt,fragmentShader:$,defines:x.defines,customVertexShaderID:Mt,customFragmentShaderID:At,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:X,batching:be,batchingColor:be&&I._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&I.instanceColor!==null,instancingMorph:Ft&&I.morphTexture!==null,outputColorSpace:Ut===null?n.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Bt,matcap:Zt,envMap:Qt,envMapMode:Qt&&B.mapping,envMapPMREM:tt,envMapMaxLod:tt?Nt.length-1:null,envMapSize:tt?Nt[0].width:null,aoMap:dt,lightMap:lt,bumpMap:Et,normalMap:vt,displacementMap:qt,emissiveMap:It,normalMapObjectSpace:vt&&x.normalMapType===Vd,normalMapTangentSpace:vt&&x.normalMapType===Go,packedNormalMap:vt&&x.normalMapType===Go&&zg(x.normalMap.format),metalnessMap:jt,roughnessMap:ee,anisotropy:ue,anisotropyMap:Gt,clearcoat:U,clearcoatMap:A,clearcoatNormalMap:S,clearcoatRoughnessMap:z,diffuseRoughness:Ie,diffuseRoughnessMap:st,dispersion:Jt,retroreflection:_e,iridescence:mt,iridescenceMap:Q,iridescenceThicknessMap:ct,sheen:Pe,sheenColorMap:gt,sheenRoughnessMap:K,specularMap:Z,specularColorMap:ut,specularIntensityMap:P,transmission:Ot,transmissionMap:J,thicknessMap:q,gradientMap:ft,opaque:x.transparent===!1&&x.blending===ls&&x.alphaToCoverage===!1,alphaMap:ot,alphaTest:ht,alphaHash:Dt,combine:x.combine,mapUv:Bt&&f(x.map.channel),aoMapUv:dt&&f(x.aoMap.channel),lightMapUv:lt&&f(x.lightMap.channel),bumpMapUv:Et&&f(x.bumpMap.channel),normalMapUv:vt&&f(x.normalMap.channel),displacementMapUv:qt&&f(x.displacementMap.channel),emissiveMapUv:It&&f(x.emissiveMap.channel),metalnessMapUv:jt&&f(x.metalnessMap.channel),roughnessMapUv:ee&&f(x.roughnessMap.channel),anisotropyMapUv:Gt&&f(x.anisotropyMap.channel),clearcoatMapUv:A&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:st&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:K&&f(x.sheenRoughnessMap.channel),specularMapUv:Z&&f(x.specularMap.channel),specularColorMapUv:ut&&f(x.specularColorMap.channel),specularIntensityMapUv:P&&f(x.specularIntensityMap.channel),transmissionMapUv:J&&f(x.transmissionMap.channel),thicknessMapUv:q&&f(x.thicknessMap.channel),alphaMapUv:ot&&f(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(vt||ue),vertexNormals:!!D.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!D.attributes.uv&&(Bt||ot),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||D.attributes.normal===void 0&&vt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:yt,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:Tt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:F.filter(St=>St.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:at,decodeVideoTexture:Bt&&x.map.isVideoTexture===!0&&oe.getTransfer(x.map.colorSpace)===ve,decodeVideoTextureEmissive:It&&x.emissiveMap.isVideoTexture===!0&&oe.getTransfer(x.emissiveMap.colorSpace)===ve,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ye,flipSided:x.side===ci,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:$t&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&x.extensions.multiDraw===!0||be)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function _(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)w.push(L),w.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(g(w,x),m(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function g(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapPMREM),x.push(w.envMapMaxLod),x.push(w.envMapSize),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.diffuseRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.numLightProbeGrids),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function m(x,w){r.disableAll(),w.instancing&&r.enable(0),w.instancingColor&&r.enable(1),w.instancingMorph&&r.enable(2),w.matcap&&r.enable(3),w.envMap&&r.enable(4),w.normalMapObjectSpace&&r.enable(5),w.normalMapTangentSpace&&r.enable(6),w.clearcoat&&r.enable(7),w.iridescence&&r.enable(8),w.alphaTest&&r.enable(9),w.vertexColors&&r.enable(10),w.vertexAlphas&&r.enable(11),w.vertexUv1s&&r.enable(12),w.vertexUv2s&&r.enable(13),w.vertexUv3s&&r.enable(14),w.vertexTangents&&r.enable(15),w.anisotropy&&r.enable(16),w.alphaHash&&r.enable(17),w.batching&&r.enable(18),w.dispersion&&r.enable(19),w.retroreflection&&r.enable(24),w.diffuseRoughness&&r.enable(25),w.batchingColor&&r.enable(20),w.gradientMap&&r.enable(21),w.packedNormalMap&&r.enable(22),w.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),w.fog&&r.enable(0),w.useFog&&r.enable(1),w.flatShading&&r.enable(2),w.logarithmicDepthBuffer&&r.enable(3),w.reversedDepthBuffer&&r.enable(4),w.skinning&&r.enable(5),w.morphTargets&&r.enable(6),w.morphNormals&&r.enable(7),w.morphColors&&r.enable(8),w.premultipliedAlpha&&r.enable(9),w.shadowMapEnabled&&r.enable(10),w.doubleSided&&r.enable(11),w.flipSided&&r.enable(12),w.useDepthPacking&&r.enable(13),w.dithering&&r.enable(14),w.transmission&&r.enable(15),w.sheen&&r.enable(16),w.opaque&&r.enable(17),w.pointsUvs&&r.enable(18),w.decodeVideoTexture&&r.enable(19),w.decodeVideoTextureEmissive&&r.enable(20),w.alphaToCoverage&&r.enable(21),w.numLightProbeGrids>0&&r.enable(22),w.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function v(x){const w=u[x.type];let L;if(w){const C=Di[w];L=hf.clone(C.uniforms)}else L=x.uniforms;return L}function y(x,w){let L=h.get(w);return L!==void 0?++L.usedTimes:(L=new Fg(n,w,x,s),c.push(L),h.set(w,L)),L}function M(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function T(){o.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:v,acquireProgram:y,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:T}}function Hg(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function i(r){n.delete(r)}function s(r,o,l){n.get(r)[o]=l}function a(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:a}}function Vg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Vc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Wc(){const n=[];let t=0;const e=[],i=[],s=[];function a(){t=0,e.length=0,i.length=0,s.length=0}function r(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,_,g,m){let v=n[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:p,materialVariant:r(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},n[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=p,v.materialVariant=r(u),v.groupOrder=_,v.renderOrder=u.renderOrder,v.z=g,v.group=m),t++,v}function l(u,f,p,_,g,m,v){v.reversedDepth===!0&&(g=-g);const y=o(u,f,p,_,g,m);p.transmission>0?i.push(y):p.transparent===!0?s.push(y):e.push(y)}function c(u,f,p,_,g,m){const v=o(u,f,p,_,g,m);p.transmission>0?i.unshift(v):p.transparent===!0?s.unshift(v):e.unshift(v)}function h(u,f){e.length>1&&e.sort(u||Vg),i.length>1&&i.sort(f||Vc),s.length>1&&s.sort(f||Vc)}function d(){for(let u=t,f=n.length;u<f;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:d,sort:h}}function Wg(){let n=new WeakMap;function t(i,s){const a=n.get(i);let r;return a===void 0?(r=new Wc,n.set(i,[r])):s>=a.length?(r=new Wc,a.push(r)):r=a[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function Xg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new R,color:new Vt};break;case"SpotLight":e={position:new R,direction:new R,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new R,halfWidth:new R,halfHeight:new R};break}return n[t.id]=e,e}}}function qg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Yg=0;function $g(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Kg(n){const t=new Xg,e=qg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);const s=new R,a=new ye,r=new ye;function o(c){let h=0,d=0,u=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,v=0,y=0,M=0,E=0,T=0,x=0,w=0,L=0,C=0;c.sort($g);for(let F=0,W=c.length;F<W;F++){const D=c[F],H=D.color,Y=D.intensity,B=D.distance;let nt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===On?nt=D.shadow.map.texture:nt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=H.r*Y,d+=H.g*Y,u+=H.b*Y;else if(D.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],Y);C++}else if(D.isSunLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,et=e.get(D);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[p]=et,i.sunShadowMap[p]=nt;const Tt=j.getViewportCount();for(let kt=0;kt<Tt;kt++)i.sunShadowMatrix[_+kt]=j.getMatrix(kt),i.sunShadowCascade[_+kt]=j._cascadeData[kt];_+=Tt,p++}i.sun[f]=X,f++}else if(D.isDirectionalLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,et=e.get(D);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,i.directionalShadow[g]=et,i.directionalShadowMap[g]=nt,i.directionalShadowMatrix[g]=D.shadow.matrix,E++}i.directional[g]=X,g++}else if(D.isSpotLight){const X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(H).multiplyScalar(Y),X.distance=B,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[v]=X;const j=D.shadow;if(D.map&&(i.spotLightMap[w]=D.map,w++,j.updateMatrices(D),D.castShadow&&L++),i.spotLightMatrix[v]=j.matrix,D.castShadow){const et=e.get(D);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,i.spotShadow[v]=et,i.spotShadowMap[v]=nt,x++}v++}else if(D.isRectAreaLight){const X=t.get(D);X.color.copy(H).multiplyScalar(Y),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[y]=X,y++}else if(D.isPointLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const j=D.shadow,et=e.get(D);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,et.shadowCameraNear=j.camera.near,et.shadowCameraFar=j.camera.far,i.pointShadow[m]=et,i.pointShadowMap[m]=nt,i.pointShadowMatrix[m]=D.shadow.matrix,T++}i.point[m]=X,m++}else if(D.isHemisphereLight){const X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(Y),X.groundColor.copy(D.groundColor).multiplyScalar(Y),i.hemi[M]=X,M++}}y>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=bt.LTC_FLOAT_1,i.rectAreaLTC2=bt.LTC_FLOAT_2):(i.rectAreaLTC1=bt.LTC_HALF_1,i.rectAreaLTC2=bt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const I=i.hash;(I.sunLength!==f||I.directionalLength!==g||I.pointLength!==m||I.spotLength!==v||I.rectAreaLength!==y||I.hemiLength!==M||I.numSunShadows!==p||I.numDirectionalShadows!==E||I.numPointShadows!==T||I.numSpotShadows!==x||I.numSpotMaps!==w||I.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=g,i.spot.length=v,i.rectArea.length=y,i.point.length=m,i.hemi.length=M,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+w-L,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=C,I.sunLength=f,I.directionalLength=g,I.pointLength=m,I.spotLength=v,I.rectAreaLength=y,I.hemiLength=M,I.numSunShadows=p,I.numDirectionalShadows=E,I.numPointShadows=T,I.numSpotShadows=x,I.numSpotMaps=w,I.numLightProbes=C,i.version=Yg++)}function l(c,h){let d=0,u=0,f=0,p=0,_=0,g=0;const m=h.matrixWorldInverse;for(let v=0,y=c.length;v<y;v++){const M=c[v];if(M.isSunLight){const E=i.sun[d];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),d++}else if(M.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),u++}else if(M.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),r.identity(),a.copy(M.matrixWorld),a.premultiply(m),r.extractRotation(a),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),_++}else if(M.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const E=i.hemi[g];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function Xc(n){const t=new Kg(n),e=[],i=[],s=[];function a(d){h.camera=d,e.length=0,i.length=0,s.length=0}function r(d){d.isLightProbeGrid?s.push(d):e.push(d)}function o(d){i.push(d)}function l(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:h,setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function Zg(n){let t=new WeakMap;function e(s,a=0){const r=t.get(s);let o;return r===void 0?(o=new Xc(n),t.set(s,[o])):a>=r.length?(o=new Xc(n),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const Jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,jg=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],tx=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],qc=new ye,Ps=new R,$r=new R;function ex(n,t,e){let i=new Ws;const s=new rt,a=new rt,r=new Re,o=new pf,l=new mf,c={},h=e.maxTextureSize,d={[ji]:ci,[ci]:ji,[Ye]:Ye},u=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:Jg,fragmentShader:Qg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const p=new Te;p.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _t(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ns;let m=this.type;this.render=function(T,x,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Md&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ns);const L=n.getRenderTarget(),C=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),F=n.state;F.setBlending(os),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const W=m!==this.type;W&&x.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(H=>H.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,H=T.length;D<H;D++){const Y=T[D],B=Y.shadow;if(B===void 0){zt("WebGLShadowMap:",Y,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const nt=B.getFrameExtents();s.multiply(nt),a.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/nt.x),s.x=a.x*nt.x,B.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/nt.y),s.y=a.y*nt.y,B.mapSize.y=a.y));const X=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=X,B.map===null||W===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Ls){if(Y.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Fi(s.x,s.y,{format:On,type:zi,minFilter:di,magFilter:di,generateMipmaps:!1}),B.map.texture.name=Y.name+".shadowMap",B.map.depthTexture=new fs(s.x,s.y,Ni),B.map.depthTexture.name=Y.name+".shadowMapDepth",B.map.depthTexture.format=_n,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ke,B.map.depthTexture.magFilter=Ke}else Y.isPointLight?(B.map=new vl(s.x),B.map.depthTexture=new Bh(s.x,Bi)):(B.map=new Fi(s.x,s.y),B.map.depthTexture=new fs(s.x,s.y,Bi)),B.map.depthTexture.name=Y.name+".shadowMap",B.map.depthTexture.format=_n,this.type===Ns?(B.map.depthTexture.compareFunction=X?wh:bh,B.map.depthTexture.minFilter=di,B.map.depthTexture.magFilter=di):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ke,B.map.depthTexture.magFilter=Ke);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);const j=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();Y.isPointLight!==!0&&B.updateMatrices(Y,w);const et=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:w.layers;for(let Tt=0;Tt<j;Tt++){const kt=B.getCamera(Tt);if(Y.isPointLight){const $=B.camera,Mt=B.matrix,At=Y.distance||$.far;At!==$.far&&($.far=At,$.updateProjectionMatrix()),Ps.setFromMatrixPosition(Y.matrixWorld),$.position.copy(Ps),$r.copy($.position),$r.add(jg[Tt]),$.up.copy(tx[Tt]),$.lookAt($r),$.updateMatrixWorld(),Mt.makeTranslation(-Ps.x,-Ps.y,-Ps.z),qc.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),B._frustum.setFromProjectionMatrix(qc,$.coordinateSystem,$.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,Tt),n.clear();else{Tt===0&&(n.setRenderTarget(B.map),n.clear());const $=B.getViewport(Tt);r.set(a.x*$.x,a.y*$.y,a.x*$.z,a.y*$.w),F.viewport(r)}i=B.getFrustum(Tt),M(x,w,kt,Y,et,this.type)}B.isPointLightShadow!==!0&&this.type===Ls&&v(B,w),B.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(L,C,I)};function v(T,x){const w=t.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Fi(s.x,s.y,{format:On,type:zi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(x,null,w,u,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(x,null,w,f,_,null)}function y(T,x,w,L){let C=null;const I=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)C=I;else if(C=w.isPointLight===!0?l:o,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const F=C.uuid,W=x.uuid;let D=c[F];D===void 0&&(D={},c[F]=D);let H=D[W];H===void 0&&(H=C.clone(),D[W]=H,x.addEventListener("dispose",E)),C=H}if(C.visible=x.visible,C.wireframe=x.wireframe,L===Ls?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:d[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,w.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const F=n.properties.get(C);F.light=w}return C}function M(T,x,w,L,C,I){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===Ls)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);const D=t.update(T),H=T.material;if(Array.isArray(H)){const Y=D.groups;for(let B=0,nt=Y.length;B<nt;B++){const X=Y[B],j=H[X.materialIndex];if(j&&j.visible){const et=y(T,j,L,I);T.onBeforeShadow(n,T,x,w,D,et,X),n.renderBufferDirect(w,null,D,et,T,X),T.onAfterShadow(n,T,x,w,D,et,X)}}}else if(H.visible){const Y=y(T,H,L,I);T.onBeforeShadow(n,T,x,w,D,Y,null),n.renderBufferDirect(w,null,D,Y,T,null),T.onAfterShadow(n,T,x,w,D,Y,null)}}const W=T.children;for(let D=0,H=W.length;D<H;D++)M(W[D],x,w,L,C,I)}function E(T){T.target.removeEventListener("dispose",E);for(const w in c){const L=c[w],C=T.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}function ix(n,t){function e(){let P=!1;const J=new Re;let q=null;const ft=new Re(0,0,0,0);return{setMask:function(ot){q!==ot&&!P&&(n.colorMask(ot,ot,ot,ot),q=ot)},setLocked:function(ot){P=ot},setClear:function(ot,ht,Dt,$t,at){at===!0&&(ot*=$t,ht*=$t,Dt*=$t),J.set(ot,ht,Dt,$t),ft.equals(J)===!1&&(n.clearColor(ot,ht,Dt,$t),ft.copy(J))},reset:function(){P=!1,q=null,ft.set(-1,0,0,0)}}}function i(){let P=!1,J=!1,q=null,ft=null,ot=null;return{setReversed:function(ht){if(J!==ht){const Dt=t.get("EXT_clip_control");ht?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),J=ht;const $t=ot;ot=null,this.setClear($t)}},getReversed:function(){return J},setTest:function(ht){ht?yt(n.DEPTH_TEST):Ft(n.DEPTH_TEST)},setMask:function(ht){q!==ht&&!P&&(n.depthMask(ht),q=ht)},setFunc:function(ht){if(J&&(ht=jd[ht]),ft!==ht){switch(ht){case io:n.depthFunc(n.NEVER);break;case no:n.depthFunc(n.ALWAYS);break;case so:n.depthFunc(n.LESS);break;case zs:n.depthFunc(n.LEQUAL);break;case ao:n.depthFunc(n.EQUAL);break;case ro:n.depthFunc(n.GEQUAL);break;case oo:n.depthFunc(n.GREATER);break;case lo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ft=ht}},setLocked:function(ht){P=ht},setClear:function(ht){ot!==ht&&(ot=ht,J&&(ht=1-ht),n.clearDepth(ht))},reset:function(){P=!1,q=null,ft=null,ot=null,J=!1}}}function s(){let P=!1,J=null,q=null,ft=null,ot=null,ht=null,Dt=null,$t=null,at=null;return{setTest:function(Nt){P||(Nt?yt(n.STENCIL_TEST):Ft(n.STENCIL_TEST))},setMask:function(Nt){J!==Nt&&!P&&(n.stencilMask(Nt),J=Nt)},setFunc:function(Nt,Yt,St){(q!==Nt||ft!==Yt||ot!==St)&&(n.stencilFunc(Nt,Yt,St),q=Nt,ft=Yt,ot=St)},setOp:function(Nt,Yt,St){(ht!==Nt||Dt!==Yt||$t!==St)&&(n.stencilOp(Nt,Yt,St),ht=Nt,Dt=Yt,$t=St)},setLocked:function(Nt){P=Nt},setClear:function(Nt){at!==Nt&&(n.clearStencil(Nt),at=Nt)},reset:function(){P=!1,J=null,q=null,ft=null,ot=null,ht=null,Dt=null,$t=null,at=null}}}const a=new e,r=new i,o=new s;let l={};const c=new WeakMap;let h={},d={},u={},f=new WeakMap,p=[],_=null,g=!1,m=null,v=null,y=null,M=null,E=null,T=null,x=null,w=new Vt(0,0,0),L=0,C=!1,I=null,F=null,W=null,D=null,H=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,nt=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=nt>=1):X.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=nt>=2);let j=null,et={};const Tt=n.getParameter(n.SCISSOR_BOX),kt=n.getParameter(n.VIEWPORT),$=new Re().fromArray(Tt),Mt=new Re().fromArray(kt);function At(P,J,q,ft){const ot=new Uint8Array(4),ht=n.createTexture();n.bindTexture(P,ht),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Dt=0;Dt<q;Dt++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(J,0,n.RGBA,1,1,ft,0,n.RGBA,n.UNSIGNED_BYTE,ot):n.texImage2D(J+Dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ot);return ht}const Ut={};Ut[n.TEXTURE_2D]=At(n.TEXTURE_2D,n.TEXTURE_2D,1),Ut[n.TEXTURE_CUBE_MAP]=At(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ut[n.TEXTURE_2D_ARRAY]=At(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ut[n.TEXTURE_3D]=At(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),yt(n.DEPTH_TEST),r.setFunc(zs),Et(!1),vt(Ol),yt(n.CULL_FACE),dt(os);function yt(P){h[P]!==!0&&(n.enable(P),h[P]=!0)}function Ft(P){h[P]!==!1&&(n.disable(P),h[P]=!1)}function be(P,J){return u[P]!==J?(n.bindFramebuffer(P,J),u[P]=J,P===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=J),P===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=J),!0):!1}function Bt(P,J){let q=p,ft=!1;if(P){q=f.get(J),q===void 0&&(q=[],f.set(J,q));const ot=P.textures;if(q.length!==ot.length||q[0]!==n.COLOR_ATTACHMENT0){for(let ht=0,Dt=ot.length;ht<Dt;ht++)q[ht]=n.COLOR_ATTACHMENT0+ht;q.length=ot.length,ft=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,ft=!0);ft&&n.drawBuffers(q)}function Zt(P){return _!==P?(n.useProgram(P),_=P,!0):!1}const Qt={[rs]:n.FUNC_ADD,[Sd]:n.FUNC_SUBTRACT,[bd]:n.FUNC_REVERSE_SUBTRACT};Qt[wd]=n.MIN,Qt[Ed]=n.MAX;const tt={[Td]:n.ZERO,[Ad]:n.ONE,[Rd]:n.SRC_COLOR,[rh]:n.SRC_ALPHA,[Nd]:n.SRC_ALPHA_SATURATE,[Id]:n.DST_COLOR,[Pd]:n.DST_ALPHA,[Cd]:n.ONE_MINUS_SRC_COLOR,[oh]:n.ONE_MINUS_SRC_ALPHA,[Dd]:n.ONE_MINUS_DST_COLOR,[Ld]:n.ONE_MINUS_DST_ALPHA,[Ud]:n.CONSTANT_COLOR,[Fd]:n.ONE_MINUS_CONSTANT_COLOR,[Od]:n.CONSTANT_ALPHA,[kd]:n.ONE_MINUS_CONSTANT_ALPHA};function dt(P,J,q,ft,ot,ht,Dt,$t,at,Nt){if(P===os){g===!0&&(Ft(n.BLEND),g=!1);return}if(g===!1&&(yt(n.BLEND),g=!0),P!==yd){if(P!==m||Nt!==C){if((v!==rs||E!==rs)&&(n.blendEquation(n.FUNC_ADD),v=rs,E=rs),Nt)switch(P){case ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ri:n.blendFunc(n.ONE,n.ONE);break;case kl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:he("WebGLState: Invalid blending: ",P);break}else switch(P){case ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ri:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case kl:he("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bl:he("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:he("WebGLState: Invalid blending: ",P);break}y=null,M=null,T=null,x=null,w.set(0,0,0),L=0,m=P,C=Nt}return}ot=ot||J,ht=ht||q,Dt=Dt||ft,(J!==v||ot!==E)&&(n.blendEquationSeparate(Qt[J],Qt[ot]),v=J,E=ot),(q!==y||ft!==M||ht!==T||Dt!==x)&&(n.blendFuncSeparate(tt[q],tt[ft],tt[ht],tt[Dt]),y=q,M=ft,T=ht,x=Dt),($t.equals(w)===!1||at!==L)&&(n.blendColor($t.r,$t.g,$t.b,at),w.copy($t),L=at),m=P,C=!1}function lt(P,J){P.side===Ye?Ft(n.CULL_FACE):yt(n.CULL_FACE);let q=P.side===ci;J&&(q=!q),Et(q),P.blending===ls&&P.transparent===!1?dt(os):dt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),a.setMask(P.colorWrite);const ft=P.stencilWrite;o.setTest(ft),ft&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),It(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?yt(n.SAMPLE_ALPHA_TO_COVERAGE):Ft(n.SAMPLE_ALPHA_TO_COVERAGE)}function Et(P){I!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),I=P)}function vt(P){P!==vd?(yt(n.CULL_FACE),P!==F&&(P===Ol?n.cullFace(n.BACK):P===_d?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ft(n.CULL_FACE),F=P}function qt(P){P!==W&&(B&&n.lineWidth(P),W=P)}function It(P,J,q){P?(yt(n.POLYGON_OFFSET_FILL),(D!==J||H!==q)&&(D=J,H=q,r.getReversed()&&(J=-J,q=-q),n.polygonOffset(J,q))):Ft(n.POLYGON_OFFSET_FILL)}function jt(P){P?yt(n.SCISSOR_TEST):Ft(n.SCISSOR_TEST)}function ee(P){P===void 0&&(P=n.TEXTURE0+Y-1),j!==P&&(n.activeTexture(P),j=P)}function ue(P,J,q){q===void 0&&(j===null?q=n.TEXTURE0+Y-1:q=j);let ft=et[q];ft===void 0&&(ft={type:void 0,texture:void 0},et[q]=ft),(ft.type!==P||ft.texture!==J)&&(j!==q&&(n.activeTexture(q),j=q),n.bindTexture(P,J||Ut[P]),ft.type=P,ft.texture=J)}function U(){const P=et[j];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Ie(){try{n.compressedTexImage2D(...arguments)}catch(P){he("WebGLState:",P)}}function Jt(){try{n.compressedTexImage3D(...arguments)}catch(P){he("WebGLState:",P)}}function _e(){try{n.texSubImage2D(...arguments)}catch(P){he("WebGLState:",P)}}function mt(){try{n.texSubImage3D(...arguments)}catch(P){he("WebGLState:",P)}}function Pe(){try{n.compressedTexSubImage2D(...arguments)}catch(P){he("WebGLState:",P)}}function Ot(){try{n.compressedTexSubImage3D(...arguments)}catch(P){he("WebGLState:",P)}}function Gt(){try{n.texStorage2D(...arguments)}catch(P){he("WebGLState:",P)}}function A(){try{n.texStorage3D(...arguments)}catch(P){he("WebGLState:",P)}}function S(){try{n.texImage2D(...arguments)}catch(P){he("WebGLState:",P)}}function z(){try{n.texImage3D(...arguments)}catch(P){he("WebGLState:",P)}}function st(P){return d[P]!==void 0?d[P]:n.getParameter(P)}function Q(P,J){d[P]!==J&&(n.pixelStorei(P,J),d[P]=J)}function ct(P){$.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),$.copy(P))}function gt(P){Mt.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Mt.copy(P))}function K(P,J){let q=c.get(J);q===void 0&&(q=new WeakMap,c.set(J,q));let ft=q.get(P);ft===void 0&&(ft=n.getUniformBlockIndex(J,P.name),n.uniformBlockBinding(J,ft,ft),q.set(P,ft))}function Z(P,J,q){const ot=c.get(J).get(P);l[ot]!==q&&(n.bindBufferBase(n.UNIFORM_BUFFER,ot,q),l[ot]=q)}function ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,et={},u={},l={},f=new WeakMap,p=[],_=null,g=!1,m=null,v=null,y=null,M=null,E=null,T=null,x=null,w=new Vt(0,0,0),L=0,C=!1,I=null,F=null,W=null,D=null,H=null,$.set(0,0,n.canvas.width,n.canvas.height),Mt.set(0,0,n.canvas.width,n.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:yt,disable:Ft,bindFramebuffer:be,drawBuffers:Bt,useProgram:Zt,setBlending:dt,setMaterial:lt,setFlipSided:Et,setCullFace:vt,setLineWidth:qt,setPolygonOffset:It,setScissorTest:jt,activeTexture:ee,bindTexture:ue,unbindTexture:U,compressedTexImage2D:Ie,compressedTexImage3D:Jt,texImage2D:S,texImage3D:z,pixelStorei:Q,getParameter:st,updateUBOMapping:K,uniformBlockBinding:Z,texStorage2D:Gt,texStorage3D:A,texSubImage2D:_e,texSubImage3D:mt,compressedTexSubImage2D:Pe,compressedTexSubImage3D:Ot,scissor:ct,viewport:gt,reset:ut}}function nx(n,t,e,i,s,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap,d=new Set;let u;const f=new WeakMap,p=new Set,_=new FinalizationRegistry(A=>p.delete(A));let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,S){return g?new OffscreenCanvas(A,S):Ja("canvas")}function v(A,S,z){let st=1;const Q=Gt(A);if((Q.width>z||Q.height>z)&&(st=z/Math.max(Q.width,Q.height)),st<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ct=Math.floor(st*Q.width),gt=Math.floor(st*Q.height);u===void 0&&(u=m(ct,gt));const K=S?m(ct,gt):u;return K.width=ct,K.height=gt,K.getContext("2d").drawImage(A,0,0,ct,gt),zt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ct+"x"+gt+")."),K}else return"data"in A&&zt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function y(A){return A.generateMipmaps}function M(A){n.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(A,S,z,st,Q,ct=!1){if(A!==null){if(n[A]!==void 0)return n[A];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let gt;st&&(gt=t.get("EXT_texture_norm16"),gt||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=S;if(S===n.RED&&(z===n.FLOAT&&(K=n.R32F),z===n.HALF_FLOAT&&(K=n.R16F),z===n.UNSIGNED_BYTE&&(K=n.R8),z===n.UNSIGNED_SHORT&&gt&&(K=gt.R16_EXT),z===n.SHORT&&gt&&(K=gt.R16_SNORM_EXT)),S===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.R8UI),z===n.UNSIGNED_SHORT&&(K=n.R16UI),z===n.UNSIGNED_INT&&(K=n.R32UI),z===n.BYTE&&(K=n.R8I),z===n.SHORT&&(K=n.R16I),z===n.INT&&(K=n.R32I)),S===n.RG&&(z===n.FLOAT&&(K=n.RG32F),z===n.HALF_FLOAT&&(K=n.RG16F),z===n.UNSIGNED_BYTE&&(K=n.RG8),z===n.UNSIGNED_SHORT&&gt&&(K=gt.RG16_EXT),z===n.SHORT&&gt&&(K=gt.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RG8UI),z===n.UNSIGNED_SHORT&&(K=n.RG16UI),z===n.UNSIGNED_INT&&(K=n.RG32UI),z===n.BYTE&&(K=n.RG8I),z===n.SHORT&&(K=n.RG16I),z===n.INT&&(K=n.RG32I)),S===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RGB8UI),z===n.UNSIGNED_SHORT&&(K=n.RGB16UI),z===n.UNSIGNED_INT&&(K=n.RGB32UI),z===n.BYTE&&(K=n.RGB8I),z===n.SHORT&&(K=n.RGB16I),z===n.INT&&(K=n.RGB32I)),S===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),z===n.UNSIGNED_INT&&(K=n.RGBA32UI),z===n.BYTE&&(K=n.RGBA8I),z===n.SHORT&&(K=n.RGBA16I),z===n.INT&&(K=n.RGBA32I)),S===n.RGB&&(z===n.UNSIGNED_SHORT&&gt&&(K=gt.RGB16_EXT),z===n.SHORT&&gt&&(K=gt.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),S===n.RGBA){const Z=ct?Za:oe.getTransfer(Q);z===n.FLOAT&&(K=n.RGBA32F),z===n.HALF_FLOAT&&(K=n.RGBA16F),z===n.UNSIGNED_BYTE&&(K=Z===ve?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&gt&&(K=gt.RGBA16_EXT),z===n.SHORT&&gt&&(K=gt.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(A,S){let z;return A?S===null||S===Bi||S===us?z=n.DEPTH24_STENCIL8:S===Ni?z=n.DEPTH32F_STENCIL8:S===Hs&&(z=n.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Bi||S===us?z=n.DEPTH_COMPONENT24:S===Ni?z=n.DEPTH_COMPONENT32F:S===Hs&&(z=n.DEPTH_COMPONENT16),z}function w(A,S){return y(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ke&&A.minFilter!==di?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function L(A){const S=new WeakRef(A);i.get(A).__ref=S,p.add(S),_.register(A,S,S)}function C(A){const S=i.get(A).__ref;S!==void 0&&(p.delete(S),_.unregister(S))}function I(A){W(A.target)}function F(A){D(A.target)}function W(A){A.removeEventListener("dispose",I),C(A),Y(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function D(A){A.removeEventListener("dispose",F),C(A),nt(A)}function H(){for(const A of p){const S=A.deref();S!==void 0&&(S.isRenderTarget===!0?D(S):W(S))}p.clear(),d.clear()}function Y(A){const S=i.get(A);if(S.__webglInit===void 0)return;const z=A.source,st=f.get(z);if(st){const Q=st[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&B(A),Object.keys(st).length===0&&f.delete(z)}i.remove(A)}function B(A){const S=i.get(A);n.deleteTexture(S.__webglTexture);const z=A.source,st=f.get(z);delete st[S.__cacheKey],r.memory.textures--}function nt(A){const S=i.get(A);S.__depthDisposeCallback&&S.__depthDisposeCallback();const z=A.depthTexture;if(z&&z.renderTarget===A&&W(z),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let ct=0;ct<S.__webglFramebuffer[Q].length;ct++)n.deleteFramebuffer(S.__webglFramebuffer[Q][ct]);else n.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)n.deleteFramebuffer(S.__webglFramebuffer[Q]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const st=A.textures;for(let Q=0,ct=st.length;Q<ct;Q++){const gt=i.get(st[Q]);gt.__webglTexture&&(n.deleteTexture(gt.__webglTexture),r.memory.textures--),i.remove(st[Q])}i.remove(A)}let X=0;function j(){X=0}function et(){return X}function Tt(A){X=A}function kt(){const A=X;return A>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,A}function $(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.mipmapsAutoUpdate),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function Mt(A,S){const z=i.get(A);if(A.isVideoTexture&&Pe(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){const st=A.image;if(st===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{lt(z,A,S);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+S)}function At(A,S){const z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){lt(z,A,S);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+S)}function Ut(A,S){const z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){lt(z,A,S);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+S)}function yt(A,S){const z=i.get(A);if(A.version>0&&z.__version!==A.version){Et(z,A,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+S)}const Ft={[ki]:n.REPEAT,[Ki]:n.CLAMP_TO_EDGE,[co]:n.MIRRORED_REPEAT},be={[Ke]:n.NEAREST,[Gd]:n.NEAREST_MIPMAP_NEAREST,[ta]:n.NEAREST_MIPMAP_LINEAR,[di]:n.LINEAR,[xr]:n.LINEAR_MIPMAP_NEAREST,[xn]:n.LINEAR_MIPMAP_LINEAR},Bt={[Xd]:n.NEVER,[Eh]:n.ALWAYS,[qd]:n.LESS,[bh]:n.LEQUAL,[Yd]:n.EQUAL,[wh]:n.GEQUAL,[$d]:n.GREATER,[Kd]:n.NOTEQUAL};function Zt(A,S){if(S.type===Ni&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===di||S.magFilter===xr||S.magFilter===ta||S.magFilter===xn||S.minFilter===di||S.minFilter===xr||S.minFilter===ta||S.minFilter===xn)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Ft[S.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Ft[S.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Ft[S.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,be[S.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,be[S.minFilter]),S.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Bt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ke||S.minFilter!==ta&&S.minFilter!==xn||S.type===Ni&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Qt(A,S){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",I),L(S));const st=S.source;let Q=f.get(st);Q===void 0&&(Q={},f.set(st,Q));const ct=$(S);if(ct!==A.__cacheKey){Q[ct]===void 0&&(Q[ct]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,z=!0),Q[ct].usedTimes++;const gt=Q[A.__cacheKey];gt!==void 0&&(Q[A.__cacheKey].usedTimes--,gt.usedTimes===0&&B(S)),A.__cacheKey=ct,A.__webglTexture=Q[ct].texture}return z}function tt(A,S,z){return Math.floor(Math.floor(A/z)/S)}function dt(A,S,z,st){const ct=A.updateRanges;if(ct.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,z,st,S.data);else{ct.sort((P,J)=>P.start-J.start);let gt=0;for(let P=1;P<ct.length;P++){const J=ct[gt],q=ct[P],ft=J.start+J.count,ot=tt(q.start,S.width,4),ht=tt(J.start,S.width,4);q.start<=ft+1&&ot===ht&&tt(q.start+q.count-1,S.width,4)===ot?J.count=Math.max(J.count,q.start+q.count-J.start):(++gt,ct[gt]=q)}ct.length=gt+1;const K=e.getParameter(n.UNPACK_ROW_LENGTH),Z=e.getParameter(n.UNPACK_SKIP_PIXELS),ut=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let P=0,J=ct.length;P<J;P++){const q=ct[P],ft=Math.floor(q.start/4),ot=Math.ceil(q.count/4),ht=ft%S.width,Dt=Math.floor(ft/S.width),$t=ot,at=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(n.UNPACK_SKIP_ROWS,Dt),e.texSubImage2D(n.TEXTURE_2D,0,ht,Dt,$t,at,z,st,S.data)}A.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,K),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Z),e.pixelStorei(n.UNPACK_SKIP_ROWS,ut)}}function lt(A,S,z){let st=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(st=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(st=n.TEXTURE_3D);const Q=Qt(A,S),ct=S.source;e.bindTexture(st,A.__webglTexture,n.TEXTURE0+z);const gt=i.get(ct);if(ct.version!==gt.__version||Q===!0){if(e.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const at=oe.getPrimaries(oe.workingColorSpace),Nt=S.colorSpace===gn?null:oe.getPrimaries(S.colorSpace),Yt=S.colorSpace===gn||at===Nt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt)}e.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let Z=v(S.image,!1,s.maxTextureSize);Z=Ot(S,Z);const ut=a.convert(S.format,S.colorSpace),P=a.convert(S.type);let J=T(S.internalFormat,ut,P,S.normalized,S.colorSpace,S.isVideoTexture);Zt(st,S);let q;const ft=S.mipmaps,ot=S.isVideoTexture!==!0,ht=gt.__version===void 0||Q===!0,Dt=ct.dataReady,$t=w(S,Z);if(S.isDepthTexture)J=x(S.format===vn,S.type),ht&&(ot?e.texStorage2D(n.TEXTURE_2D,1,J,Z.width,Z.height):e.texImage2D(n.TEXTURE_2D,0,J,Z.width,Z.height,0,ut,P,null));else if(S.isDataTexture)if(ft.length>0){ot&&ht&&e.texStorage2D(n.TEXTURE_2D,$t,J,ft[0].width,ft[0].height);for(let at=0,Nt=ft.length;at<Nt;at++)q=ft[at],ot?Dt&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,q.width,q.height,ut,P,q.data):e.texImage2D(n.TEXTURE_2D,at,J,q.width,q.height,0,ut,P,q.data);S.generateMipmaps=!1}else ot?(ht&&e.texStorage2D(n.TEXTURE_2D,$t,J,Z.width,Z.height),Dt&&dt(S,Z,ut,P)):e.texImage2D(n.TEXTURE_2D,0,J,Z.width,Z.height,0,ut,P,Z.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ot&&ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,$t,J,ft[0].width,ft[0].height,Z.depth);for(let at=0,Nt=ft.length;at<Nt;at++)if(q=ft[at],S.format!==Ui)if(ut!==null)if(ot){if(Dt)if(S.layerUpdates.size>0){const Yt=Ec(q.width,q.height,S.format,S.type);for(const St of S.layerUpdates){const xe=q.data.subarray(St*Yt/q.data.BYTES_PER_ELEMENT,(St+1)*Yt/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,St,q.width,q.height,1,ut,xe)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,q.width,q.height,Z.depth,ut,q.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,at,J,q.width,q.height,Z.depth,0,q.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?Dt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,q.width,q.height,Z.depth,ut,P,q.data):e.texImage3D(n.TEXTURE_2D_ARRAY,at,J,q.width,q.height,Z.depth,0,ut,P,q.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{ot&&ht&&e.texStorage2D(n.TEXTURE_2D,$t,J,ft[0].width,ft[0].height);for(let at=0,Nt=ft.length;at<Nt;at++)q=ft[at],S.format!==Ui?ut!==null?ot?Dt&&e.compressedTexSubImage2D(n.TEXTURE_2D,at,0,0,q.width,q.height,ut,q.data):e.compressedTexImage2D(n.TEXTURE_2D,at,J,q.width,q.height,0,q.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?Dt&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,q.width,q.height,ut,P,q.data):e.texImage2D(n.TEXTURE_2D,at,J,q.width,q.height,0,ut,P,q.data)}else if(S.isDataArrayTexture)if(ot){if(ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,$t,J,Z.width,Z.height,Z.depth),Dt)if(S.layerUpdates.size>0){const at=Ec(Z.width,Z.height,S.format,S.type);for(const Nt of S.layerUpdates){const Yt=Z.data.subarray(Nt*at/Z.data.BYTES_PER_ELEMENT,(Nt+1)*at/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Nt,Z.width,Z.height,1,ut,P,Yt)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ut,P,Z.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,J,Z.width,Z.height,Z.depth,0,ut,P,Z.data);else if(S.isData3DTexture)ot?(ht&&e.texStorage3D(n.TEXTURE_3D,$t,J,Z.width,Z.height,Z.depth),Dt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ut,P,Z.data)):e.texImage3D(n.TEXTURE_3D,0,J,Z.width,Z.height,Z.depth,0,ut,P,Z.data);else if(S.isFramebufferTexture){if(ht)if(ot)e.texStorage2D(n.TEXTURE_2D,$t,J,Z.width,Z.height);else{let at=Z.width,Nt=Z.height;for(let Yt=0;Yt<$t;Yt++)e.texImage2D(n.TEXTURE_2D,Yt,J,at,Nt,0,ut,P,null),at>>=1,Nt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){const at=n.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),Z.parentNode!==at){at.appendChild(Z),d.add(S),at.onpaint=Nt=>{const Yt=Nt.changedElements;for(const St of d)Yt.includes(St.image)&&(St.needsUpdate=!0)},at.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Z);else{const Yt=n.RGBA,St=n.RGBA,xe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Yt,St,xe,Z)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ft.length>0){if(ot&&ht){const at=Gt(ft[0]);e.texStorage2D(n.TEXTURE_2D,$t,J,at.width,at.height)}for(let at=0,Nt=ft.length;at<Nt;at++)q=ft[at],ot?Dt&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,ut,P,q):e.texImage2D(n.TEXTURE_2D,at,J,ut,P,q);S.generateMipmaps=!1}else if(ot){if(ht){const at=Gt(Z);e.texStorage2D(n.TEXTURE_2D,$t,J,at.width,at.height)}Dt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut,P,Z)}else e.texImage2D(n.TEXTURE_2D,0,J,ut,P,Z);y(S)&&S.mipmapsAutoUpdate===!0&&M(st),gt.__version=ct.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Et(A,S,z){if(S.image.length!==6)return;const st=Qt(A,S),Q=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+z);const ct=i.get(Q);if(Q.version!==ct.__version||st===!0){e.activeTexture(n.TEXTURE0+z);const gt=oe.getPrimaries(oe.workingColorSpace),K=S.colorSpace===gn?null:oe.getPrimaries(S.colorSpace),Z=S.colorSpace===gn||gt===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const ut=S.isCompressedTexture||S.image[0].isCompressedTexture,P=S.image[0]&&S.image[0].isDataTexture,J=[];for(let St=0;St<6;St++)!ut&&!P?J[St]=v(S.image[St],!0,s.maxCubemapSize):J[St]=P?S.image[St].image:S.image[St],J[St]=Ot(S,J[St]);const q=J[0],ft=a.convert(S.format,S.colorSpace),ot=a.convert(S.type);let ht=T(S.internalFormat,ft,ot,S.normalized,S.colorSpace);const Dt=S.isVideoTexture!==!0,$t=ct.__version===void 0||st===!0,at=Q.dataReady;let Nt=w(S,q);Zt(n.TEXTURE_CUBE_MAP,S);let Yt;if(S.isDepthTexture){if(ht=x(S.format===vn,S.type),$t)if(Dt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,ht,q.width,q.height);else for(let St=0;St<6;St++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ht,q.width,q.height,0,ft,ot,null)}else if(ut){Dt&&$t&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,ht,q.width,q.height);for(let St=0;St<6;St++){Yt=J[St].mipmaps;for(let xe=0;xe<Yt.length;xe++){const ze=Yt[xe];S.format!==Ui?ft!==null?Dt?at&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,xe,0,0,ze.width,ze.height,ft,ze.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,xe,ht,ze.width,ze.height,0,ze.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,xe,0,0,ze.width,ze.height,ft,ot,ze.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,xe,ht,ze.width,ze.height,0,ft,ot,ze.data)}}}else{if(Yt=S.mipmaps,Dt&&$t){Yt.length>0&&Nt++;const St=Gt(J[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,ht,St.width,St.height)}for(let St=0;St<6;St++)if(P){Dt?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,J[St].width,J[St].height,ft,ot,J[St].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ht,J[St].width,J[St].height,0,ft,ot,J[St].data);for(let xe=0;xe<Yt.length;xe++){const an=Yt[xe].image[St].image;Dt?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,xe+1,0,0,an.width,an.height,ft,ot,an.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,xe+1,ht,an.width,an.height,0,ft,ot,an.data)}}else{Dt?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,ft,ot,J[St]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ht,ft,ot,J[St]);for(let xe=0;xe<Yt.length;xe++){const ze=Yt[xe];Dt?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,xe+1,0,0,ft,ot,ze.image[St]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,xe+1,ht,ft,ot,ze.image[St])}}}y(S)&&S.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),ct.__version=Q.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function vt(A,S,z,st,Q,ct){const gt=a.convert(z.format,z.colorSpace),K=a.convert(z.type),Z=T(z.internalFormat,gt,K,z.normalized,z.colorSpace),ut=i.get(S),P=i.get(z);if(P.__renderTarget=S,!ut.__hasExternalTextures){const J=Math.max(1,S.width>>ct),q=Math.max(1,S.height>>ct);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,ct,Z,J,q,S.depth,0,gt,K,null):e.texImage2D(Q,ct,Z,J,q,0,gt,K,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),mt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,st,Q,P.__webglTexture,0,_e(S)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,st,Q,P.__webglTexture,ct),e.bindFramebuffer(n.FRAMEBUFFER,null)}function qt(A,S,z){if(n.bindRenderbuffer(n.RENDERBUFFER,A),S.depthBuffer){const st=S.depthTexture,Q=st&&st.isDepthTexture?st.type:null,ct=x(S.stencilBuffer,Q),gt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;mt(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e(S),ct,S.width,S.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e(S),ct,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ct,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,gt,n.RENDERBUFFER,A)}else{const st=S.textures;for(let Q=0;Q<st.length;Q++){const ct=st[Q],gt=a.convert(ct.format,ct.colorSpace),K=a.convert(ct.type),Z=T(ct.internalFormat,gt,K,ct.normalized,ct.colorSpace);mt(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e(S),Z,S.width,S.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e(S),Z,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Z,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function It(A,S,z){const st=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(S.depthTexture);Q.__renderTarget=S;const ct=st?S.depthTexture.image[0]:S.depthTexture.image;(!Q.__webglTexture||ct.width!==S.width||ct.height!==S.height)&&(ct.width=S.width,ct.height=S.height,S.depthTexture.needsUpdate=!0),st?yt(S.depthTexture,0):Mt(S.depthTexture,0);const gt=Q.__webglTexture,K=_e(S),Z=st?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,ut=S.depthTexture.format===vn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===_n)mt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,Z,gt,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,ut,Z,gt,0);else if(S.depthTexture.format===vn)mt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,Z,gt,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,ut,Z,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function jt(A){const S=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const st=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),st){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,st.removeEventListener("dispose",Q)};st.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=st}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(z)for(let st=0;st<6;st++)It(S.__webglFramebuffer[st],A,st);else A.texture.mipmaps.length>0?It(S.__webglFramebuffer[0],A,0):It(S.__webglFramebuffer,A,0);else if(z){S.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[st]),S.__webglDepthbuffer[st]===void 0)S.__webglDepthbuffer[st]=n.createRenderbuffer(),qt(S.__webglDepthbuffer[st],A,!1);else{const Q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=S.__webglDepthbuffer[st];n.bindRenderbuffer(n.RENDERBUFFER,ct),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ct)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),qt(S.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ct),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ct)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(A,S,z){const st=i.get(A);S!==void 0&&vt(st.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&jt(A)}function ue(A){const S=A.texture,z=i.get(A),st=i.get(S);A.addEventListener("dispose",F),L(A);const Q=A.textures,ct=A.isWebGLCubeRenderTarget===!0,gt=Q.length>1;if(gt||(st.__webglTexture===void 0&&(st.__webglTexture=n.createTexture()),st.__version=S.version,r.memory.textures++),ct){z.__webglFramebuffer=[];for(let K=0;K<6;K++)if(S.mipmaps.length>0){z.__webglFramebuffer[K]=[];for(let Z=0;Z<S.mipmaps.length;Z++)z.__webglFramebuffer[K][Z]=n.createFramebuffer()}else z.__webglFramebuffer[K]=n.createFramebuffer()}else{if(S.mipmaps.length>0){z.__webglFramebuffer=[];for(let K=0;K<S.mipmaps.length;K++)z.__webglFramebuffer[K]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(gt)for(let K=0,Z=Q.length;K<Z;K++){const ut=i.get(Q[K]);ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture(),r.memory.textures++)}if(A.samples>0&&mt(A)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let K=0;K<Q.length;K++){const Z=Q[K];z.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[K]);const ut=a.convert(Z.format,Z.colorSpace),P=a.convert(Z.type),J=T(Z.internalFormat,ut,P,Z.normalized,Z.colorSpace,A.isXRRenderTarget===!0),q=_e(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,q,J,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,z.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),qt(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ct){e.bindTexture(n.TEXTURE_CUBE_MAP,st.__webglTexture),Zt(n.TEXTURE_CUBE_MAP,S);for(let K=0;K<6;K++)if(S.mipmaps.length>0)for(let Z=0;Z<S.mipmaps.length;Z++)vt(z.__webglFramebuffer[K][Z],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Z);else vt(z.__webglFramebuffer[K],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);y(S)?M(n.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let K=0,Z=Q.length;K<Z;K++){const ut=Q[K],P=i.get(ut);let J=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(J,P.__webglTexture),Zt(J,ut),vt(z.__webglFramebuffer,A,ut,n.COLOR_ATTACHMENT0+K,J,0),y(ut)&&M(J)}e.unbindTexture()}else{let K=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(K,st.__webglTexture),Zt(K,S),S.mipmaps.length>0)for(let Z=0;Z<S.mipmaps.length;Z++)vt(z.__webglFramebuffer[Z],A,S,n.COLOR_ATTACHMENT0,K,Z);else vt(z.__webglFramebuffer,A,S,n.COLOR_ATTACHMENT0,K,0);y(S)?M(K):S.mipmaps.length>0&&n.texParameteri(K,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&jt(A)}function U(A){const S=A.textures;for(let z=0,st=S.length;z<st;z++){const Q=S[z];if(y(Q)&&Q.mipmapsAutoUpdate===!0){const ct=E(A),gt=i.get(Q).__webglTexture;e.bindTexture(ct,gt),M(ct),e.unbindTexture()}}}const Ie=[];function Jt(A){if(A.samples>0){if(mt(A)===!1){const S=A.textures,z=A.width,st=A.height;let Q=n.COLOR_BUFFER_BIT;const ct=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=i.get(A),K=S.length>1;if(K)for(let ut=0;ut<S.length;ut++)e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let ut=0;ut<S.length;ut++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,gt.__webglColorRenderbuffer[ut]);const P=i.get(S[ut]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,P,0)}n.blitFramebuffer(0,0,z,st,0,0,z,st,Q,n.NEAREST),l===!0&&(Ie.length=0,Ie.push(n.COLOR_ATTACHMENT0+ut),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Ie.push(ct),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ie))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let ut=0;ut<S.length;ut++){e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,gt.__webglColorRenderbuffer[ut]);const P=i.get(S[ut]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,P,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const S=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function _e(A){return Math.min(s.maxSamples,A.samples)}function mt(A){const S=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Pe(A){const S=r.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Ot(A,S){const z=A.colorSpace,st=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Ka&&z!==gn&&(oe.getTransfer(z)===ve?(st!==Ui||Q!==mi)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):he("WebGLTextures: Unsupported texture color space:",z)),S}function Gt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=kt,this.resetTextureUnits=j,this.getTextureUnits=et,this.setTextureUnits=Tt,this.setTexture2D=Mt,this.setTexture2DArray=At,this.setTexture3D=Ut,this.setTextureCube=yt,this.rebindTextures=ee,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=mt,this.dispose=H}function sx(n,t){function e(i,s=gn){let a;const r=oe.getTransfer(s);if(i===mi)return n.UNSIGNED_BYTE;if(i===nl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===sl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===vh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_h)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===gh)return n.BYTE;if(i===xh)return n.SHORT;if(i===Hs)return n.UNSIGNED_SHORT;if(i===il)return n.INT;if(i===Bi)return n.UNSIGNED_INT;if(i===Ni)return n.FLOAT;if(i===zi)return n.HALF_FLOAT;if(i===Mh)return n.ALPHA;if(i===yh)return n.RGB;if(i===Ui)return n.RGBA;if(i===_n)return n.DEPTH_COMPONENT;if(i===vn)return n.DEPTH_STENCIL;if(i===Sh)return n.RED;if(i===al)return n.RED_INTEGER;if(i===On)return n.RG;if(i===rl)return n.RG_INTEGER;if(i===ol)return n.RGBA_INTEGER;if(i===ka||i===Ba||i===za||i===Ga)if(r===ve)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===ka)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ga)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===ka)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ba)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===za)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ga)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ho||i===uo||i===fo||i===po)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===ho)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===po)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===mo||i===go||i===xo||i===vo||i===_o||i===Ya||i===Mo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===mo||i===go)return r===ve?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===xo)return r===ve?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===vo)return a.COMPRESSED_R11_EAC;if(i===_o)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Ya)return a.COMPRESSED_RG11_EAC;if(i===Mo)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===yo||i===So||i===bo||i===wo||i===Eo||i===To||i===Ao||i===Ro||i===Co||i===Po||i===Lo||i===Io||i===Do||i===No)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===yo)return r===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===So)return r===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bo)return r===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wo)return r===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Eo)return r===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===To)return r===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ao)return r===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ro)return r===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Co)return r===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Po)return r===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Lo)return r===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Io)return r===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Do)return r===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===No)return r===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Uo||i===Fo||i===Oo)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Uo)return r===ve?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Oo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ko||i===Bo||i===$a||i===zo)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===ko)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Bo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$a)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===us?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const ax=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ox{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new zh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new tn({vertexShader:ax,fragmentShader:rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _t(new hi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lx extends Gn{constructor(t,e){super();const i=this;let s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null;const _=typeof XRWebGLBinding<"u",g=new ox,m={},v=e.getContextAttributes();let y=null,M=null;const E=[],T=[],x=new rt;let w=null,L=null;const C=new yi;C.viewport=new Re;const I=new yi;I.viewport=new Re;const F=[C,I],W=new Mf;let D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Mt=E[$];return Mt===void 0&&(Mt=new Er,E[$]=Mt),Mt.getTargetRaySpace()},this.getControllerGrip=function($){let Mt=E[$];return Mt===void 0&&(Mt=new Er,E[$]=Mt),Mt.getGripSpace()},this.getHand=function($){let Mt=E[$];return Mt===void 0&&(Mt=new Er,E[$]=Mt),Mt.getHandSpace()};function Y($){const Mt=T.indexOf($.inputSource);if(Mt===-1)return;const At=E[Mt];At!==void 0&&(At.update($.inputSource,$.frame,c||r),At.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",nt);for(let $=0;$<E.length;$++){const Mt=T[$];Mt!==null&&(T[$]=null,E[$].disconnect(Mt))}D=null,H=null,g.reset();for(const $ in m)delete m[$];if(t.setRenderTarget(y),f=null,u=null,d=null,s=null,M=null,kt.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(x.width,x.height,!1),L!==null){const $=L.camera;$.fov=L.fov,$.zoom=L.zoom,$.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,i.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",B),s.addEventListener("inputsourceschange",nt),v.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Ut=null,yt=null;v.depth&&(yt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=v.stencil?vn:_n,Ut=v.stencil?us:Bi);const Ft={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:a};d=this.getBinding(),u=d.createProjectionLayer(Ft),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new Fi(u.textureWidth,u.textureHeight,{format:Ui,type:mi,depthTexture:new fs(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const At={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,e,At),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Fi(f.framebufferWidth,f.framebufferHeight,{format:Ui,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),kt.setContext(s),kt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function nt($){for(let Mt=0;Mt<$.removed.length;Mt++){const At=$.removed[Mt],Ut=T.indexOf(At);Ut>=0&&(T[Ut]=null,E[Ut].disconnect(At))}for(let Mt=0;Mt<$.added.length;Mt++){const At=$.added[Mt];let Ut=T.indexOf(At);if(Ut===-1){for(let Ft=0;Ft<E.length;Ft++)if(Ft>=T.length){T.push(At),Ut=Ft;break}else if(T[Ft]===null){T[Ft]=At,Ut=Ft;break}if(Ut===-1)break}const yt=E[Ut];yt&&yt.connect(At)}}function X($,Mt){Mt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Mt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let Mt=$.near,At=$.far;g.texture!==null&&(g.depthNear>0&&(Mt=g.depthNear),g.depthFar>0&&(At=g.depthFar)),W.near=I.near=C.near=Mt,W.far=I.far=C.far=At,(D!==W.near||H!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),D=W.near,H=W.far),W.layers.mask=$.layers.mask|6,C.layers.mask=W.layers.mask&-5,I.layers.mask=W.layers.mask&-3;const Ut=$.parent,yt=W.cameras;X(W,Ut);for(let Ft=0;Ft<yt.length;Ft++)X(yt[Ft],Ut);W.projectionMatrix.copy(C.projectionMatrix),W.projectionMatrixInverse.copy(C.projectionMatrixInverse),L===null&&$.isPerspectiveCamera&&(L={camera:$,fov:$.fov,zoom:$.zoom}),j($,W,Ut)};function j($,Mt,At){At===null?$.matrix.copy(Mt.matrixWorld):($.matrix.copy(At.matrixWorld),$.matrix.invert(),$.matrix.multiply(Mt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Mt.projectionMatrix),$.projectionMatrixInverse.copy(Mt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ho*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(W)},this.getCameraTexture=function($){return m[$]};let et=null;function Tt($,Mt){if(h=Mt.getViewerPose(c||r),p=Mt,h!==null){const At=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Ut=!1;At.length!==W.cameras.length&&(W.cameras.length=0,Ut=!0);for(let Bt=0;Bt<At.length;Bt++){const Zt=At[Bt];let Qt=null;if(f!==null)Qt=f.getViewport(Zt);else{const dt=d.getViewSubImage(u,Zt);Qt=dt.viewport,Bt===0&&(t.setRenderTargetTextures(M,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(M))}let tt=F[Bt];tt===void 0&&(tt=new yi,tt.layers.enable(Bt),tt.viewport=new Re,F[Bt]=tt),tt.matrix.fromArray(Zt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Zt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Bt===0&&(W.matrix.copy(tt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Ut===!0&&W.cameras.push(tt)}const yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const Bt=d.getDepthInformation(At[0]);Bt&&Bt.isValid&&Bt.texture&&g.init(Bt,s.renderState)}if(yt&&yt.includes("camera-access")&&_){t.state.unbindTexture(),d=i.getBinding();for(let Bt=0;Bt<At.length;Bt++){const Zt=At[Bt].camera;if(Zt){let Qt=m[Zt];Qt||(Qt=new zh,m[Zt]=Qt);const tt=d.getCameraImage(Zt);Qt.sourceTexture=tt}}}}for(let At=0;At<E.length;At++){const Ut=T[At],yt=E[At];Ut!==null&&yt!==void 0&&yt.update(Ut,Mt,c||r)}et&&et($,Mt),Mt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Mt}),p=null}const kt=new jh;kt.setAnimationLoop(Tt),this.setAnimationLoop=function($){et=$},this.dispose=function(){}}}const cx=new ye,cd=new Ht;cd.set(-1,0,0,0,1,0,0,0,1);function hx(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Kh(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,y,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?a(g,m):m.isMeshLambertMaterial?(a(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(a(g,m),d(g,m)):m.isMeshPhongMaterial?(a(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(a(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,M)):m.isMeshMatcapMaterial?(a(g,m),p(g,m)):m.isMeshDepthMaterial?a(g,m):m.isMeshDistanceMaterial?(a(g,m),_(g,m)):m.isMeshNormalMaterial?a(g,m):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,v,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===ci&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===ci&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const v=t.get(m),y=v.envMap,M=v.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(cx.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(cd),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=y*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ci&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function dx(n,t,e,i){let s={},a={};function r(v,y){const M=y.program;i.uniformBlockBinding(v,M,s[v.id])}function o(v,y){let M=s[v.id];M===void 0&&(p(v),M=l(v),s[v.id]=M,v.addEventListener("dispose",g));const E=y.program;i.updateUBOMapping(v,E);const T=t.render.frame;a[v.id]!==T&&(c(v),a[v.id]=T)}function l(v){const y=n.createBuffer(),M=v.__size,E=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,M,E),n.bindBuffer(n.UNIFORM_BUFFER,null),y}function c(v){const y=s[v.id],M=v.uniforms,E=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let T=0,x=M.length;T<x;T++){const w=M[T];if(Array.isArray(w))for(let L=0,C=w.length;L<C;L++)h(w[L],T,L,E);else h(w,T,0,E)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,y,M,E){if(u(v,y,M,E)===!0){const T=v.__offset,x=v.value;if(Array.isArray(x)){let w=0;for(let L=0;L<x.length;L++){const C=x[L],I=_(C,!0);d(C,v.__data,w),w+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,v.__data)}}function d(v,y,M){typeof v=="number"||typeof v=="boolean"?y[M]=v:v.isMatrix3?(y[M]=v.elements[0],y[M+1]=v.elements[1],y[M+2]=v.elements[2],y[M+3]=0,y[M+4]=v.elements[3],y[M+5]=v.elements[4],y[M+6]=v.elements[5],y[M+7]=0,y[M+8]=v.elements[6],y[M+9]=v.elements[7],y[M+10]=v.elements[8],y[M+11]=0):ArrayBuffer.isView(v)?y.set(v.subarray(0,y.length-M),M):v.toArray(y,M)}function u(v,y,M,E){const T=v.value,x=y+"_"+M;if(Array.isArray(T)){E[x]===void 0&&(E[x]=[]);const w=E[x];let L=!1;for(let C=0;C<T.length;C++)f(T[C],w,C)===!0&&(L=!0);return L}return f(T,E,x)}function f(v,y,M){if(y[M]===void 0)return typeof v=="number"||typeof v=="boolean"?y[M]=v:ArrayBuffer.isView(v)?y[M]=v.slice():y[M]=v.clone(),!0;{const E=y[M];if(typeof v=="number"||typeof v=="boolean"){if(E!==v)return y[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(E.equals(v)===!1)return E.copy(v),!0}}return!1}function p(v){const y=v.uniforms;let M=0;const E=16;for(let x=0,w=y.length;x<w;x++){const L=Array.isArray(y[x])?y[x]:[y[x]];for(let C=0,I=L.length;C<I;C++){const F=L[C],W=Array.isArray(F.value)?F.value:[F.value],D=Array.isArray(y[x])||Array.isArray(F.value);let H=M;for(let B=0,nt=W.length;B<nt;B++){const X=W[B],j=_(X,D),et=M%E,Tt=et%j.boundary,kt=et+Tt;M+=Tt,kt!==0&&E-kt<j.storage&&(M+=E-kt),B===0&&(H=M),M+=j.storage}const Y=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new Y((M-H)/Float32Array.BYTES_PER_ELEMENT),F.__offset=H}}const T=M%E;return T>0&&(M+=E-T),v.__size=M,v.__cache={},this}function _(v,y){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",v),y===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function g(v){const y=v.target;y.removeEventListener("dispose",g),n.deleteBuffer(s[y.id]),delete s[y.id],delete a[y.id]}function m(){for(const v in s)n.deleteBuffer(s[v]);s={},a={}}return{bind:r,update:o,dispose:m}}const ux=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Li=null;function fx(){return Li===null&&(Li=new wu(ux,16,16,On,zi),Li.name="DFG_LUT",Li.minFilter=di,Li.magFilter=di,Li.wrapS=Ki,Li.wrapT=Ki,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}class px{constructor(t={}){const{canvas:e=Jd(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=mi}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;const _=f,g=new Set([ol,rl,al]),m=new Set([mi,Bi,Hs,us,nl,sl]),v=new Uint32Array(4),y=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let E=null,T=null;const x=[],w=[];let L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let I=!1,F=null,W=null,D=null,H=null;this._outputColorSpace=Ee;let Y=0,B=0,nt=null,X=-1,j=null;const et=new Re,Tt=new Re;let kt=null;const $=new Vt(0);let Mt=0,At=e.width,Ut=e.height,yt=1,Ft=null,be=null;const Bt=new Re(0,0,At,Ut),Zt=new Re(0,0,At,Ut);let Qt=!1;const tt=new Ws,dt=new hl;let lt=!1,Et=!1;const vt=new ye,qt=new R,It=new Re,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function ue(){return nt===null?yt:1}let U=i;function Ie(b,N){return e.getContext(b,N)}let Jt,_e,mt,Pe,Ot,Gt,A,S,z,st,Q,ct,gt,K,Z,ut,P,J,q,ft,ot,ht,Dt;try{const b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${tl}`),e.addEventListener("webglcontextlost",Nt,!1),e.addEventListener("webglcontextrestored",Yt,!1),e.addEventListener("webglcontextcreationerror",St,!1),U===null){const N="webgl2";if(U=Ie(N,b),U===null)throw Ie(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$t()}catch(b){throw e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),he("WebGLRenderer: "+b.message),b}function $t(){Jt=new xm(U),Jt.init(),ot=new sx(U,Jt),_e=new rm(U,Jt,t,ot),mt=new ix(U,Jt),_e.reversedDepthBuffer&&u&&mt.buffers.depth.setReversed(!0),W=U.createFramebuffer(),D=U.createFramebuffer(),H=U.createFramebuffer(),Pe=new Mm(U),Ot=new Hg,Gt=new nx(U,Jt,mt,Ot,_e,ot,Pe),A=new gm(C),S=new Sf(U),ht=new sm(U,S),z=new vm(U,S,Pe,ht),st=new Sm(U,z,S,ht,Pe),J=new ym(U,_e,Gt),Z=new om(Ot),Q=new Gg(C,A,Jt,_e,ht,Z),ct=new hx(C,Ot),gt=new Wg,K=new Zg(Jt),P=new nm(C,A,mt,st,p,l),ut=new ex(C,st,_e),Dt=new dx(U,Pe,_e,mt),q=new am(U,Jt,Pe),ft=new _m(U,Jt,Pe),Pe.programs=Q.programs,C.capabilities=_e,C.extensions=Jt,C.properties=Ot,C.renderLists=gt,C.shadowMap=ut,C.state=mt,C.info=Pe}_!==mi&&(L=new wm(_,e.width,e.height,o,s,a));const at=new lx(C,U);this.xr=at,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=Jt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Jt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(b){b!==void 0&&(yt=b,this.setSize(At,Ut,!1))},this.getSize=function(b){return b.set(At,Ut)},this.setSize=function(b,N,V=!0){if(at.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}At=b,Ut=N,e.width=Math.floor(b*yt),e.height=Math.floor(N*yt),V===!0&&(e.style.width=b+"px",e.style.height=N+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(At*yt,Ut*yt).floor()},this.setDrawingBufferSize=function(b,N,V){At=b,Ut=N,yt=V,e.width=Math.floor(b*V),e.height=Math.floor(N*V),this.setViewport(0,0,b,N)},this.setEffects=function(b){if(_===mi){he("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let N=0;N<b.length;N++)if(b[N].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(et)},this.getViewport=function(b){return b.copy(Bt)},this.setViewport=function(b,N,V,k){b.isVector4?Bt.set(b.x,b.y,b.z,b.w):Bt.set(b,N,V,k),mt.viewport(et.copy(Bt).multiplyScalar(ue()).round())},this.getScissor=function(b){return b.copy(Zt)},this.setScissor=function(b,N,V,k){b.isVector4?Zt.set(b.x,b.y,b.z,b.w):Zt.set(b,N,V,k),mt.scissor(Tt.copy(Zt).multiplyScalar(ue()).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(b){mt.setScissorTest(Qt=b)},this.setOpaqueSort=function(b){Ft=b},this.setTransparentSort=function(b){be=b},this.getClearColor=function(b){return b.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,V=!0){let k=0;if(b){let G=!1;if(nt!==null){const xt=nt.texture.format;G=g.has(xt)}if(G){const xt=nt.texture.type,Rt=m.has(xt),pt=P.getClearColor(),wt=P.getClearAlpha(),Lt=pt.r,Wt=pt.g,ie=pt.b;Rt?(v[0]=Lt,v[1]=Wt,v[2]=ie,v[3]=wt,U.clearBufferuiv(U.COLOR,0,v)):(y[0]=Lt,y[1]=Wt,y[2]=ie,y[3]=wt,U.clearBufferiv(U.COLOR,0,y))}else k|=U.COLOR_BUFFER_BIT}N&&(k|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),F=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),P.dispose(),gt.dispose(),K.dispose(),Gt.dispose(),Ot.dispose(),A.dispose(),st.dispose(),z.dispose(),ht.dispose(),Dt.dispose(),Q.dispose(),at.dispose(),at.removeEventListener("sessionstart",Al),at.removeEventListener("sessionend",Rl),wn.stop()};function Nt(b){b.preventDefault(),Qa("WebGLRenderer: Context Lost."),I=!0}function Yt(){Qa("WebGLRenderer: Context Restored."),I=!1;const b=Pe.autoReset,N=ut.enabled,V=ut.autoUpdate,k=ut.needsUpdate,G=ut.type;$t(),Pe.autoReset=b,ut.enabled=N,ut.autoUpdate=V,ut.needsUpdate=k,ut.type=G}function St(b){he("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function xe(b){const N=b.target;N.removeEventListener("dispose",xe),ze(N)}function ze(b){an(b),Ot.remove(b)}function an(b){const N=Ot.get(b).programs;N!==void 0&&(N.forEach(function(V){Q.releaseProgram(V)}),b.isShaderMaterial&&Q.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,V,k,G,xt){N===null&&(N=jt);const Rt=G.isMesh&&G.matrixWorld.determinantAffine()<0,pt=md(b,N,V,k,G);mt.setMaterial(k,Rt);let wt=V.index,Lt=1;if(k.wireframe===!0){if(wt=z.getWireframeAttribute(V),wt===void 0)return;Lt=2}const Wt=V.drawRange,ie=V.attributes.position;let Ct=Wt.start*Lt,ne=(Wt.start+Wt.count)*Lt;xt!==null&&(Ct=Math.max(Ct,xt.start*Lt),ne=Math.min(ne,(xt.start+xt.count)*Lt)),wt!==null?(Ct=Math.max(Ct,0),ne=Math.min(ne,wt.count)):ie!=null&&(Ct=Math.max(Ct,0),ne=Math.min(ne,ie.count));const De=ne-Ct;if(De<0||De===1/0)return;ht.setup(G,k,pt,V,wt);let Se,Me=q;if(wt!==null&&(Se=S.get(wt),Me=ft,Me.setIndex(Se)),G.isMesh)k.wireframe===!0?(mt.setLineWidth(k.wireframeLinewidth*ue()),Me.setMode(U.LINES)):Me.setMode(U.TRIANGLES);else if(G.isLine){let Ze=k.linewidth;Ze===void 0&&(Ze=1),mt.setLineWidth(Ze*ue()),G.isLineSegments?Me.setMode(U.LINES):G.isLineLoop?Me.setMode(U.LINE_LOOP):Me.setMode(U.LINE_STRIP)}else G.isPoints?Me.setMode(U.POINTS):G.isSprite&&Me.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(Jt.get("WEBGL_multi_draw"))Me.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ze=G._multiDrawStarts,Pt=G._multiDrawCounts,ii=G._multiDrawCount,fe=wt?S.get(wt).bytesPerElement:1,En=Ot.get(k).currentProgram.getUniforms();for(let Je=0;Je<ii;Je++)En.setValue(U,"_gl_DrawID",Je),Me.render(Ze[Je]/fe,Pt[Je])}else if(G.isInstancedMesh)Me.renderInstances(Ct,De,G.count);else if(V.isInstancedBufferGeometry){const Ze=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Pt=Math.min(V.instanceCount,Ze);Me.renderInstances(Ct,De,Pt)}else Me.render(Ct,De)};function Tl(b,N,V,k){F!==null&&b.isNodeMaterial&&F.setObject(k,b),lt===!0&&Z.setState(b,V,!1),b.transparent===!0&&b.side===Ye&&b.forceSinglePass===!1?(b.side=ci,b.needsUpdate=!0,ys(b,N,k),b.side=ji,b.needsUpdate=!0,ys(b,N,k),b.side=Ye):ys(b,N,k)}this.compile=function(b,N,V=null){V===null&&(V=b),F!==null&&F.renderStart(b,N,V),T=K.get(V),T.init(N),w.push(T),V.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),b!==V&&b.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),Et=this.localClippingEnabled,lt=Z.init(this.clippingPlanes,Et),lt===!0&&Z.setGlobalState(this.clippingPlanes,N),F!==null&&ut.render(T.state.shadowsArray,V,N);const k=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const xt=G.material;if(xt)if(Array.isArray(xt))for(let Rt=0;Rt<xt.length;Rt++){const pt=xt[Rt];Tl(pt,V,N,G),k.add(pt)}else Tl(xt,V,N,G),k.add(xt)}),T=w.pop(),F!==null&&F.renderEnd(),k},this.compileAsync=function(b,N,V=null){const k=this.compile(b,N,V);return new Promise(G=>{function xt(){if(k.forEach(function(Rt){const wt=Ot.get(Rt).currentProgram;(wt===void 0||wt.isReady())&&k.delete(Rt)}),k.size===0){G(b);return}setTimeout(xt,10)}Jt.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let fr=null;function fd(b){fr&&fr(b)}function Al(){wn.stop()}function Rl(){wn.start()}const wn=new jh;wn.setAnimationLoop(fd),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(b){fr=b,at.setAnimationLoop(b),b===null?wn.stop():wn.start()},at.addEventListener("sessionstart",Al),at.addEventListener("sessionend",Rl),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){he("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(b,N);const V=at.enabled===!0&&at.isPresenting===!0,k=L!==null&&(nt===null||V)&&L.begin(C,nt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(N),N=at.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,N,nt),T=K.get(b,w.length),T.init(N),T.state.textureUnits=Gt.getTextureUnits(),w.push(T),vt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?dt.setFromArrayCamera(N):tt.setFromProjectionMatrix(vt,Ri,N.reversedDepth),Et=this.localClippingEnabled,lt=Z.init(this.clippingPlanes,Et),E=gt.get(b,x.length),E.init(),x.push(E),this.info.render.frame++,at.enabled===!0&&at.isPresenting===!0){const Rt=C.xr.getDepthSensingMesh();Rt!==null&&pr(Rt,N,-1/0,C.sortObjects)}pr(b,N,0,C.sortObjects),E.finish(),F!==null&&F.updateLights(T.state.lightsArray),C.sortObjects===!0&&E.sort(Ft,be),ee=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,ee&&P.addToRenderList(E,b),this.info.autoReset===!0&&this.info.reset(),lt===!0&&Z.beginShadows();const G=T.state.shadowsArray;if(ut.render(G,b,N),lt===!0&&Z.endShadows(),(k&&L.hasRenderPass())===!1){const Rt=E.opaque,pt=E.transmissive;if(T.setupLights(),N.isArrayCamera){const wt=N.cameras;if(pt.length>0)for(let Lt=0,Wt=wt.length;Lt<Wt;Lt++){const ie=wt[Lt];Pl(Rt,pt,b,ie)}ee&&P.render(b);for(let Lt=0,Wt=wt.length;Lt<Wt;Lt++){const ie=wt[Lt];Cl(E,b,ie,ie.viewport)}}else pt.length>0&&Pl(Rt,pt,b,N),ee&&P.render(b),Cl(E,b,N)}nt!==null&&B===0&&(Gt.updateMultisampleRenderTarget(nt),Gt.updateRenderTargetMipmap(nt)),k&&L.end(C),b.isScene===!0&&b.onAfterRender(C,b,N),ht.resetDefaultState(),X=-1,j=null,w.pop(),w.length>0?(T=w[w.length-1],Gt.setTextureUnits(T.state.textureUnits),lt===!0&&Z.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,F!==null&&F.renderEnd()};function pr(b,N,V,k){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){const Rt=N.isArrayCamera?dt:tt;if(!b.frustumCulled||b.intersectsFrustum(Rt)){k&&It.setFromMatrixPosition(b.matrixWorld).applyMatrix4(vt);const pt=st.update(b),wt=b.material;wt.visible&&E.push(b,pt,wt,V,It.z,null,N)}}else if(b.isMesh||b.isLine||b.isPoints){const Rt=N.isArrayCamera?dt:tt;if(!b.frustumCulled||b.intersectsFrustum(Rt)){const pt=st.update(b),wt=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),It.copy(b.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),It.copy(pt.boundingSphere.center)),It.applyMatrix4(b.matrixWorld).applyMatrix4(vt)),Array.isArray(wt)){const Lt=pt.groups;for(let Wt=0,ie=Lt.length;Wt<ie;Wt++){const Ct=Lt[Wt],ne=wt[Ct.materialIndex];ne&&ne.visible&&E.push(b,pt,ne,V,It.z,Ct,N)}}else wt.visible&&E.push(b,pt,wt,V,It.z,null,N)}}}const xt=b.children;for(let Rt=0,pt=xt.length;Rt<pt;Rt++)pr(xt[Rt],N,V,k)}function Cl(b,N,V,k){const{opaque:G,transmissive:xt,transparent:Rt}=b;T.setupLightsView(V),lt===!0&&Z.setGlobalState(C.clippingPlanes,V),k&&mt.viewport(et.copy(k)),G.length>0&&Qs(G,N,V),xt.length>0&&Qs(xt,N,V),Rt.length>0&&Qs(Rt,N,V),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function Pl(b,N,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){const Ct=Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new Fi(1,1,{generateMipmaps:!0,type:Ct?zi:mi,minFilter:xn,samples:Math.max(4,_e.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}const xt=T.state.transmissionRenderTarget[k.id],Rt=k.viewport||et;xt.setSize(Rt.z*C.transmissionResolutionScale,Rt.w*C.transmissionResolutionScale);const pt=C.getRenderTarget(),wt=C.getActiveCubeFace(),Lt=C.getActiveMipmapLevel();C.setRenderTarget(xt),C.getClearColor($),Mt=C.getClearAlpha(),Mt<1&&C.setClearColor(16777215,.5),C.clear(),ee&&P.render(V);const Wt=C.toneMapping;C.toneMapping=Ji;const ie=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),lt===!0&&Z.setGlobalState(C.clippingPlanes,k),Qs(b,V,k),Gt.updateMultisampleRenderTarget(xt),Gt.updateRenderTargetMipmap(xt),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let ne=0,De=N.length;ne<De;ne++){const Se=N[ne],{object:Me,geometry:Ze,material:Pt,group:ii}=Se;if(Pt.side===Ye&&Me.layers.test(k.layers)){const fe=Pt.side;Pt.side=ci,Pt.needsUpdate=!0,Ll(Me,V,k,Ze,Pt,ii),Pt.side=fe,Pt.needsUpdate=!0,Ct=!0}}Ct===!0&&(Gt.updateMultisampleRenderTarget(xt),Gt.updateRenderTargetMipmap(xt))}C.setRenderTarget(pt,wt,Lt),C.setClearColor($,Mt),ie!==void 0&&(k.viewport=ie),C.toneMapping=Wt}function Qs(b,N,V){const k=N.isScene===!0?N.overrideMaterial:null;for(let G=0,xt=b.length;G<xt;G++){const Rt=b[G],{object:pt,geometry:wt,group:Lt}=Rt;let Wt=Rt.material;Wt.allowOverride===!0&&k!==null&&(Wt=k),pt.layers.test(V.layers)&&Ll(pt,N,V,wt,Wt,Lt)}}function Ll(b,N,V,k,G,xt){F!==null&&G.isNodeMaterial&&F.setObject(b,G),b.onBeforeRender(C,N,V,k,G,xt),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(C,N,V,k,b,xt),G.transparent===!0&&G.side===Ye&&G.forceSinglePass===!1?(G.side=ci,G.needsUpdate=!0,C.renderBufferDirect(V,N,k,G,b,xt),G.side=ji,G.needsUpdate=!0,C.renderBufferDirect(V,N,k,G,b,xt),G.side=Ye):C.renderBufferDirect(V,N,k,G,b,xt),b.onAfterRender(C,N,V,k,G,xt)}function Il(b){let N=0;for(const V of b)V.texture!==null&&N++;return N}function ys(b,N,V){N.isScene!==!0&&(N=jt);const k=Ot.get(b),G=T.state.lights,xt=T.state.shadowsArray,Rt=G.state.version,pt=Q.getParameters(b,G.state,xt,N,V,T.state.lightProbeGridArray),wt=Q.getProgramCacheKey(pt);let Lt=k.programs;k.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?N.environment:null,k.fog=N.fog;const Wt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;k.envMap=A.get(b.envMap||k.environment,Wt),k.envMapRotation=k.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Lt===void 0&&(b.addEventListener("dispose",xe),Lt=new Map,k.programs=Lt,k.programVariants=new Map);let ie=Lt.get(wt);if(ie!==void 0){if(k.currentProgram===ie&&k.lightsStateVersion===Rt)return Nl(b,pt),ie}else pt.uniforms=Q.getUniforms(b),F!==null&&b.isNodeMaterial&&F.build(b,V,pt),b.onBeforeCompile(pt,C),ie=Q.acquireProgram(pt,wt),Lt.set(wt,ie),k.uniforms=pt.uniforms;const Ct=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ct.clippingPlanes=Z.uniform),Nl(b,pt),k.needsLights=xd(b),k.lightsStateVersion=Rt,k.needsLights&&(Ct.ambientLightColor.value=G.state.ambient,Ct.lightProbe.value=G.state.probe,Ct.sunLights.value=G.state.sun,Ct.sunLightShadows.value=G.state.sunShadow,Ct.directionalLights.value=G.state.directional,Ct.directionalLightShadows.value=G.state.directionalShadow,Ct.spotLights.value=G.state.spot,Ct.spotLightShadows.value=G.state.spotShadow,Ct.rectAreaLights.value=G.state.rectArea,Ct.ltc_1.value=G.state.rectAreaLTC1,Ct.ltc_2.value=G.state.rectAreaLTC2,Ct.pointLights.value=G.state.point,Ct.pointLightShadows.value=G.state.pointShadow,Ct.hemisphereLights.value=G.state.hemi,Ct.sunShadowMatrix.value=G.state.sunShadowMatrix,Ct.sunShadowCascade.value=G.state.sunShadowCascade,Ct.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ct.spotLightMatrix.value=G.state.spotLightMatrix,Ct.spotLightMap.value=G.state.spotLightMap,Ct.pointShadowMatrix.value=G.state.pointShadowMatrix),k.numLightProbeGrids=Il(T.state.lightProbeGridArray),k.currentProgram=ie,k.uniformsList=null,ie}function pd(b,N,V,k,G){const xt=Ot.get(b),Rt=xt.currentProgram.id+","+k+","+G;let pt=xt.programVariants.get(Rt);return pt===void 0?(pt=ys(b,N,V),xt.programVariants.set(Rt,pt)):(xt.currentProgram=pt,xt.uniformsList=null,xt.outputColorSpace=k,xt.toneMapping=G),pt}function Dl(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=Xa.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Nl(b,N){const V=Ot.get(b);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function md(b,N,V,k,G){N.isScene!==!0&&(N=jt),Gt.resetTextureUnits();const xt=N.fog,Rt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?N.environment:null,pt=nt===null?C.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:oe.workingColorSpace,wt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Lt=A.get(k.envMap||Rt,wt),Wt=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ie=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ct=!!V.morphAttributes.position,ne=!!V.morphAttributes.normal,De=!!V.morphAttributes.color;let Se=Ji;k.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Se=C.toneMapping);const Me=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ze=Me!==void 0?Me.length:0,Pt=Ot.get(k),ii=T.state.lights;if(lt===!0&&(Et===!0||b!==j)){const Ae=b===j&&k.id===X;Z.setState(k,b,Ae)}let fe=!1,En=!1;k.version===Pt.__version?Pt.needsLights&&Pt.lightsStateVersion!==ii.state.version||G.isBatchedMesh&&Pt.batching===!1||!G.isBatchedMesh&&Pt.batching===!0||G.isBatchedMesh&&Pt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Pt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Pt.instancing===!1||!G.isInstancedMesh&&Pt.instancing===!0||G.isSkinnedMesh&&Pt.skinning===!1||!G.isSkinnedMesh&&Pt.skinning===!0||G.isInstancedMesh&&Pt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Pt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Pt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Pt.instancingMorph===!1&&G.morphTexture!==null||Pt.envMap!==Lt||k.fog===!0&&Pt.fog!==xt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==Z.numPlanes||Pt.numIntersection!==Z.numIntersection)||Pt.vertexAlphas!==Wt||Pt.vertexTangents!==ie||Pt.morphTargets!==Ct||Pt.morphNormals!==ne||Pt.morphColors!==De||Pt.morphTargetsCount!==Ze||Pt.numLightProbeGrids!==Il(T.state.lightProbeGridArray)?fe=!0:(Pt.outputColorSpace!==pt||Pt.toneMapping!==Se)&&(En=!0):(fe=!0,Pt.__version=k.version);let Je=Pt.currentProgram;(fe===!0||En===!0)&&(Je=En===!0?pd(k,N,G,pt,Se):ys(k,N,G),F&&k.isNodeMaterial&&F.onUpdateProgram(k,Je,Pt));let js=!1,rn=!1,Tn=!1;const ce=Je.getUniforms(),qe=Pt.uniforms;if(mt.useProgram(Je.program)&&(js=!0,rn=!0,Tn=!0),k.id!==X&&(X=k.id,rn=!0),js||j!==b){mt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ce.setValue(U,"projectionMatrix",b.projectionMatrix),ce.setValue(U,"viewMatrix",b.matrixWorldInverse);const Ge=ce.map.cameraPosition;Ge!==void 0&&Ge.setValue(U,qt.setFromMatrixPosition(b.matrixWorld)),_e.logarithmicDepthBuffer&&ce.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ce.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),j!==b&&(j=b,rn=!0,Tn=!0)}if(Pt.needsLights&&(ii.state.sunShadowMap.length>0&&ce.setValue(U,"sunShadowMap",ii.state.sunShadowMap,Gt),ii.state.directionalShadowMap.length>0&&ce.setValue(U,"directionalShadowMap",ii.state.directionalShadowMap,Gt),ii.state.spotShadowMap.length>0&&ce.setValue(U,"spotShadowMap",ii.state.spotShadowMap,Gt),ii.state.pointShadowMap.length>0&&ce.setValue(U,"pointShadowMap",ii.state.pointShadowMap,Gt)),G.isSkinnedMesh){ce.setOptional(U,G,"bindMatrix"),ce.setOptional(U,G,"bindMatrixInverse");const Ae=G.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),ce.setValue(U,"boneTexture",Ae.boneTexture,Gt))}G.isBatchedMesh&&(ce.setOptional(U,G,"batchingTexture"),ce.setValue(U,"batchingTexture",G._matricesTexture,Gt),ce.setOptional(U,G,"batchingIdTexture"),ce.setValue(U,"batchingIdTexture",G._indirectTexture,Gt),ce.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&ce.setValue(U,"batchingColorTexture",G._colorsTexture,Gt));const bi=V.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&J.update(G,V,Je),(rn||Pt.receiveShadow!==G.receiveShadow)&&(Pt.receiveShadow=G.receiveShadow,ce.setValue(U,"receiveShadow",G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&N.environment!==null&&(qe.envMapIntensity.value=N.environmentIntensity),qe.dfgLUT!==void 0&&(qe.dfgLUT.value=fx()),rn){if(ce.setValue(U,"toneMappingExposure",C.toneMappingExposure),Pt.needsLights&&gd(qe,Tn),xt&&k.fog===!0&&ct.refreshFogUniforms(qe,xt),ct.refreshMaterialUniforms(qe,k,yt,Ut,T.state.transmissionRenderTarget[b.id]),Pt.needsLights&&Pt.numLightProbeGrids>0){const Ae=M;let Ge=0;for(const Hi of T.state.lightProbeGridArray)Hi.texture!==null&&(Ae.textures[Ge]=Hi.texture,Ae.min[Ge]=Hi.boundingBox.min,Ae.max[Ge]=Hi.boundingBox.max,Ae.resolution[Ge]=Hi.resolution,Ge++);for(const Hi in Ae)Ae[Hi].length=Ge;qe.probesSH.value=Ae.textures,qe.probesMin.value=Ae.min,qe.probesMax.value=Ae.max,qe.probesResolution.value=Ae.resolution}Xa.upload(U,Dl(Pt),qe,Gt)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Xa.upload(U,Dl(Pt),qe,Gt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ce.setValue(U,"center",G.center),ce.setValue(U,"modelViewMatrix",G.modelViewMatrix),ce.setValue(U,"normalMatrix",G.normalMatrix),ce.setValue(U,"modelMatrix",G.matrixWorld),k.uniformsGroups!==void 0){const Ae=k.uniformsGroups;for(let Ge=0,Hi=Ae.length;Ge<Hi;Ge++){const Fl=Ae[Ge];Dt.update(Fl,Je),Dt.bind(Fl,Je)}}return Je}function gd(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.sunLights.needsUpdate=N,b.sunLightShadows.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function xd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(b,N,V){const k=Ot.get(b);k.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Ot.get(b.texture).__webglTexture=N,Ot.get(b.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:V,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){const V=Ot.get(b);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,V=0){nt=b,Y=N,B=V;let k=null,G=!1,xt=!1;if(b){const pt=Ot.get(b);if(pt.__useDefaultFramebuffer!==void 0){mt.bindFramebuffer(U.FRAMEBUFFER,pt.__webglFramebuffer),et.copy(b.viewport),Tt.copy(b.scissor),kt=b.scissorTest,mt.viewport(et),mt.scissor(Tt),mt.setScissorTest(kt),X=-1;return}else if(pt.__webglFramebuffer===void 0)Gt.setupRenderTarget(b);else if(pt.__hasExternalTextures)Gt.rebindTextures(b,Ot.get(b.texture).__webglTexture,Ot.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Wt=b.depthTexture;if(pt.__boundDepthTexture!==Wt){if(Wt!==null&&Ot.has(Wt)&&(b.width!==Wt.image.width||b.height!==Wt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Gt.setupDepthRenderbuffer(b)}}const wt=b.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(xt=!0);const Lt=Ot.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Lt[N])?k=Lt[N][V]:k=Lt[N],G=!0):b.samples>0&&Gt.useMultisampledRTT(b)===!1?k=Ot.get(b).__webglMultisampledFramebuffer:Array.isArray(Lt)?k=Lt[V]:k=Lt,et.copy(b.viewport),Tt.copy(b.scissor),kt=b.scissorTest}else et.copy(Bt).multiplyScalar(yt).floor(),Tt.copy(Zt).multiplyScalar(yt).floor(),kt=Qt;if(V!==0&&(k=W),mt.bindFramebuffer(U.FRAMEBUFFER,k)&&mt.drawBuffers(b,k),mt.viewport(et),mt.scissor(Tt),mt.setScissorTest(kt),G){const pt=Ot.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,pt.__webglTexture,V)}else if(xt){const pt=N;for(let wt=0;wt<b.textures.length;wt++){const Lt=Ot.get(b.textures[wt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+wt,Lt.__webglTexture,V,pt)}}else if(b!==null&&V!==0){const pt=Ot.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,pt.__webglTexture,V)}X=-1};function Ul(b){const N=Ot.get(b);return(N.__readFormat!==b.format||N.__readType!==b.type)&&(N.__readFormat=b.format,N.__readType=b.type,N.__formatReadable=_e.textureFormatReadable(b.format),N.__typeReadable=_e.textureTypeReadable(b.type)),N}this.readRenderTargetPixels=function(b,N,V,k,G,xt,Rt,pt=0){if(!(b&&b.isWebGLRenderTarget)){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Ot.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Rt!==void 0&&(wt=wt[Rt],Array.isArray(wt)&&(wt=wt[0])),wt){mt.bindFramebuffer(U.FRAMEBUFFER,wt);try{const Lt=b.textures[pt],Wt=Lt.format,ie=Lt.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+pt);const Ct=Ul(Lt);if(Ct.__formatReadable===!1){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-k&&V>=0&&V<=b.height-G&&U.readPixels(N,V,k,G,ot.convert(Wt),ot.convert(ie),xt)}finally{const Lt=nt!==null?Ot.get(nt).__webglFramebuffer:null;mt.bindFramebuffer(U.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(b,N,V,k,G,xt,Rt,pt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Ot.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Rt!==void 0&&(wt=wt[Rt],Array.isArray(wt)&&(wt=wt[0])),wt)if(N>=0&&N<=b.width-k&&V>=0&&V<=b.height-G){mt.bindFramebuffer(U.FRAMEBUFFER,wt);const Lt=b.textures[pt],Wt=Lt.format,ie=Lt.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+pt);const Ct=Ul(Lt);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ne),U.bufferData(U.PIXEL_PACK_BUFFER,xt.byteLength,U.STREAM_READ),U.readPixels(N,V,k,G,ot.convert(Wt),ot.convert(ie),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const De=nt!==null?Ot.get(nt).__webglFramebuffer:null;mt.bindFramebuffer(U.FRAMEBUFFER,De);const Se=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Qd(U,Se,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ne),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,xt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ne),U.deleteSync(Se),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,V=0){const k=Math.pow(2,-V),G=Math.floor(b.image.width*k),xt=Math.floor(b.image.height*k),Rt=N!==null?N.x:0,pt=N!==null?N.y:0;Gt.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,Rt,pt,G,xt),mt.unbindTexture()},this.copyTextureToTexture=function(b,N,V=null,k=null,G=0,xt=0){let Rt,pt,wt,Lt,Wt,ie,Ct,ne,De;const Se=b.isCompressedTexture?b.mipmaps[xt]:b.image;if(V!==null)Rt=V.max.x-V.min.x,pt=V.max.y-V.min.y,wt=V.isBox3?V.max.z-V.min.z:1,Lt=V.min.x,Wt=V.min.y,ie=V.isBox3?V.min.z:0;else{const ce=Math.pow(2,-G);Rt=Math.floor(Se.width*ce),pt=Math.floor(Se.height*ce),b.isDataArrayTexture?wt=Se.depth:b.isData3DTexture?wt=Math.floor(Se.depth*ce):wt=1,Lt=0,Wt=0,ie=0}k!==null?(Ct=k.x,ne=k.y,De=k.z):(Ct=0,ne=0,De=0);const Me=ot.convert(N.format),Ze=ot.convert(N.type);let Pt;N.isData3DTexture?(Gt.setTexture3D(N,0),Pt=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Gt.setTexture2DArray(N,0),Pt=U.TEXTURE_2D_ARRAY):(Gt.setTexture2D(N,0),Pt=U.TEXTURE_2D),mt.activeTexture(U.TEXTURE0),mt.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),mt.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),mt.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);const ii=mt.getParameter(U.UNPACK_ROW_LENGTH),fe=mt.getParameter(U.UNPACK_IMAGE_HEIGHT),En=mt.getParameter(U.UNPACK_SKIP_PIXELS),Je=mt.getParameter(U.UNPACK_SKIP_ROWS),js=mt.getParameter(U.UNPACK_SKIP_IMAGES);mt.pixelStorei(U.UNPACK_ROW_LENGTH,Se.width),mt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Se.height),mt.pixelStorei(U.UNPACK_SKIP_PIXELS,Lt),mt.pixelStorei(U.UNPACK_SKIP_ROWS,Wt),mt.pixelStorei(U.UNPACK_SKIP_IMAGES,ie);const rn=b.isDataArrayTexture||b.isData3DTexture,Tn=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){const ce=Ot.get(b),qe=Ot.get(N),bi=Ot.get(ce.__renderTarget),Ae=Ot.get(qe.__renderTarget);mt.bindFramebuffer(U.READ_FRAMEBUFFER,bi.__webglFramebuffer),mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ge=0;Ge<wt;Ge++)rn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ot.get(b).__webglTexture,G,ie+Ge),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ot.get(N).__webglTexture,xt,De+Ge)),U.blitFramebuffer(Lt,Wt,Lt+Rt,Wt+pt,Ct,ne,Ct+Rt,ne+pt,U.DEPTH_BUFFER_BIT,U.NEAREST);mt.bindFramebuffer(U.READ_FRAMEBUFFER,null),mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||Ot.has(b)){const ce=Ot.get(b),qe=Ot.get(N);mt.bindFramebuffer(U.READ_FRAMEBUFFER,D),mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,H);for(let bi=0;bi<wt;bi++)rn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ce.__webglTexture,G,ie+bi):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ce.__webglTexture,G),Tn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,qe.__webglTexture,xt,De+bi):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,qe.__webglTexture,xt),G!==0?U.blitFramebuffer(Lt,Wt,Lt+Rt,Wt+pt,Ct,ne,Ct+Rt,ne+pt,U.COLOR_BUFFER_BIT,U.NEAREST):Tn?U.copyTexSubImage3D(Pt,xt,Ct,ne,De+bi,Lt,Wt,Rt,pt):U.copyTexSubImage2D(Pt,xt,Ct,ne,Lt,Wt,Rt,pt);mt.bindFramebuffer(U.READ_FRAMEBUFFER,null),mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Tn?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Pt,xt,Ct,ne,De,Rt,pt,wt,Me,Ze,Se.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(Pt,xt,Ct,ne,De,Rt,pt,wt,Me,Se.data):U.texSubImage3D(Pt,xt,Ct,ne,De,Rt,pt,wt,Me,Ze,Se):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,xt,Ct,ne,Rt,pt,Me,Ze,Se.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,xt,Ct,ne,Se.width,Se.height,Me,Se.data):U.texSubImage2D(U.TEXTURE_2D,xt,Ct,ne,Rt,pt,Me,Ze,Se);mt.pixelStorei(U.UNPACK_ROW_LENGTH,ii),mt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,fe),mt.pixelStorei(U.UNPACK_SKIP_PIXELS,En),mt.pixelStorei(U.UNPACK_SKIP_ROWS,Je),mt.pixelStorei(U.UNPACK_SKIP_IMAGES,js),xt===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&U.generateMipmap(Pt),mt.unbindTexture()},this.initRenderTarget=function(b){Ot.get(b).__webglFramebuffer===void 0&&Gt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Gt.setTextureCube(b,0):b.isData3DTexture?Gt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Gt.setTexture2DArray(b,0):Gt.setTexture2D(b,0),mt.unbindTexture()},this.resetState=function(){Y=0,B=0,nt=null,mt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}const mx={quality:"high",shadows:!0,bloom:!0,resolution:1,particles:"high",destruction:"high",detail:"high",cameraShake:!0,sound:!0,music:!0,fpsLimit:60,hud:!0,motionBlur:!1,disableControl:!1},Kr={low:{shadows:!1,bloom:!1,resolution:.7,particles:"low",destruction:"low",detail:"low",fpsLimit:30},medium:{shadows:!0,bloom:!0,resolution:.85,particles:"medium",destruction:"medium",detail:"medium",fpsLimit:60},high:{shadows:!0,bloom:!0,resolution:1,particles:"high",destruction:"high",detail:"high",fpsLimit:60},ultra:{shadows:!0,bloom:!0,resolution:1,particles:"ultra",destruction:"high",detail:"ultra",fpsLimit:0}};class gx{constructor(){this.data={...mx,...this.load()},this.listeners=new Set,this.applyPresetDefaults()}load(){try{const t=localStorage.getItem("mvbox.settings.v1");return t?JSON.parse(t):{}}catch{return{}}}save(){try{localStorage.setItem("mvbox.settings.v1",JSON.stringify(this.data))}catch{}}applyPresetDefaults(){!this.data._presetApplied&&this.data.quality!=="high"&&(Object.assign(this.data,Kr[this.data.quality]||{}),this.data._presetApplied=!0)}get(t){return this.data[t]}set(t,e,i=!1){this.data[t]=e,t==="quality"&&Object.assign(this.data,Kr[e]||Kr.high),this.save(),i||this.emit(t)}toggle(t){return this.set(t,!this.data[t]),this.data[t]}onChange(t){return this.listeners.add(t),()=>this.listeners.delete(t)}emit(t){for(const e of this.listeners)e(t,this.data)}get pixelRatio(){return Math.min(window.devicePixelRatio||1,this.data.quality==="low"?1:2)*(this.data.resolution||1)}get particleCount(){return{low:.35,medium:.65,high:1,ultra:1.5}[this.data.particles]||1}get destructionScale(){return{low:.35,medium:.65,high:1}[this.data.destruction]||1}}class xx{constructor(t){this.settings=t,this.ctx=null,this.master=null,this.sfx=null,this.music=null,this.noiseBuffer=null,this.ambient=null,this.rain=null,this.weather="clear",this.started=!1,this.lastRoar=0}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t;const e=this.ctx.createDynamicsCompressor();e.threshold.value=-18,e.knee.value=18,e.ratio.value=5,e.attack.value=.004,e.release.value=.22,this.master=this.ctx.createGain(),this.master.gain.value=this.settings.get("sound")?.75:0,this.master.connect(e),e.connect(this.ctx.destination),this.sfx=this.ctx.createGain(),this.sfx.gain.value=.85,this.sfx.connect(this.master),this.music=this.ctx.createGain(),this.music.gain.value=this.settings.get("music")?.36:0,this.music.connect(this.master),this.noiseBuffer=this.makeNoise(3),this.started=!0,this.startAmbient()}catch(t){console.warn("audio unavailable",t)}}makeNoise(t){const e=Math.floor(this.ctx.sampleRate*t),i=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=i.getChannelData(0);let a=0;for(let r=0;r<e;r++){const o=Math.random()*2-1;a=(a+.02*o)/1.02,s[r]=a*3.2}return i}setSound(t){this.master&&this.master.gain.setTargetAtTime(t?.75:0,this.ctx.currentTime,.05)}setMusic(t){this.music&&this.music.gain.setTargetAtTime(t?.36:0,this.ctx.currentTime,.2)}tone({freq:t=440,endFreq:e=null,type:i="sine",dur:s=.3,gain:a=.2,delay:r=0,attack:o=.01,release:l=null,detune:c=0,filter:h=null,q:d=1,dest:u=null,pan:f=0}){if(!this.ctx)return;const p=this.ctx.currentTime+r,_=this.ctx.createOscillator(),g=this.ctx.createGain(),m=this.ctx.createStereoPanner?this.ctx.createStereoPanner():null;_.type=i,_.frequency.setValueAtTime(Math.max(20,t),p),e&&_.frequency.exponentialRampToValueAtTime(Math.max(20,e),p+s),_.detune.value=c,g.gain.setValueAtTime(1e-4,p),g.gain.exponentialRampToValueAtTime(Math.max(2e-4,a),p+o);const v=l??s*.5;g.gain.setValueAtTime(Math.max(2e-4,a),p+Math.max(o,s-v)),g.gain.exponentialRampToValueAtTime(1e-4,p+s);let y=_;if(h){const M=this.ctx.createBiquadFilter();M.type=h.type||"lowpass",M.frequency.setValueAtTime(h.freq||1200,p),h.endFreq&&M.frequency.exponentialRampToValueAtTime(Math.max(40,h.endFreq),p+s),M.Q.value=d,y.connect(M),y=M}y.connect(g),m?(m.pan.value=Math.max(-1,Math.min(1,f)),g.connect(m),m.connect(u||this.sfx)):g.connect(u||this.sfx),_.start(p),_.stop(p+s+.05)}noise({dur:t=.3,gain:e=.2,delay:i=0,filter:s="lowpass",freq:a=800,endFreq:r=null,q:o=.8,attack:l=.005,pan:c=0,dest:h=null,playbackRate:d=1}){if(!this.ctx||!this.noiseBuffer)return;const u=this.ctx.currentTime+i,f=this.ctx.createBufferSource();f.buffer=this.noiseBuffer,f.playbackRate.value=d;const p=this.ctx.createBiquadFilter();p.type=s,p.frequency.setValueAtTime(a,u),r&&p.frequency.exponentialRampToValueAtTime(Math.max(30,r),u+t),p.Q.value=o;const _=this.ctx.createGain();_.gain.setValueAtTime(1e-4,u),_.gain.exponentialRampToValueAtTime(Math.max(2e-4,e),u+l),_.gain.exponentialRampToValueAtTime(1e-4,u+t),f.connect(p),p.connect(_);const g=this.ctx.createStereoPanner?this.ctx.createStereoPanner():null;g?(g.pan.value=Math.max(-1,Math.min(1,c)),_.connect(g),g.connect(h||this.sfx)):_.connect(h||this.sfx),f.start(u,Math.random()*1.2),f.stop(u+t+.05)}click(){this.tone({freq:680,endFreq:420,type:"triangle",dur:.07,gain:.07})}hover(){this.tone({freq:1100,endFreq:900,type:"sine",dur:.04,gain:.025})}confirm(){this.tone({freq:160,endFreq:240,type:"sawtooth",dur:.18,gain:.08,filter:{type:"lowpass",freq:900}}),this.tone({freq:320,endFreq:480,type:"triangle",dur:.3,gain:.06,delay:.05})}roar(t){if(!this.ctx||!this.settings.get("sound"))return;const e=performance.now();if(e-this.lastRoar<900)return;this.lastRoar=e;const i=t.family,s=(Math.random()-.5)*.6;if(i==="rodan")this.tone({freq:620,endFreq:240,type:"sawtooth",dur:1.1,gain:.15,filter:{type:"bandpass",freq:1600,endFreq:500},q:2,pan:s}),this.noise({dur:1.2,gain:.2,filter:"highpass",freq:900,endFreq:300,pan:s}),this.tone({freq:920,endFreq:380,type:"square",dur:.7,gain:.05,pan:s});else if(i==="mothra")this.tone({freq:520,endFreq:880,type:"sine",dur:1.4,gain:.1,pan:s}),this.tone({freq:784,endFreq:1174,type:"triangle",dur:1.6,gain:.06,delay:.1,pan:s}),this.tone({freq:1046,endFreq:1568,type:"sine",dur:1.2,gain:.04,delay:.22,pan:s}),this.noise({dur:1.6,gain:.06,filter:"highpass",freq:2400,pan:s});else if(i==="mecha")this.tone({freq:110,endFreq:70,type:"square",dur:.9,gain:.18,filter:{type:"lowpass",freq:500},pan:s}),this.tone({freq:880,endFreq:440,type:"sawtooth",dur:.5,gain:.08,pan:s}),this.noise({dur:.8,gain:.18,filter:"bandpass",freq:1400,q:3,pan:s}),this.tone({freq:1760,endFreq:1200,type:"sine",dur:.9,gain:.03,pan:s});else if(i==="ghidorah")this.tone({freq:210,endFreq:90,type:"sawtooth",dur:1.6,gain:.18,filter:{type:"bandpass",freq:900,endFreq:320},q:1.5,pan:s}),this.tone({freq:315,endFreq:150,type:"square",dur:1.4,gain:.07,detune:12,pan:s}),this.tone({freq:460,endFreq:220,type:"sawtooth",dur:1.2,gain:.05,detune:-18,delay:.08,pan:s}),this.noise({dur:1.7,gain:.12,filter:"bandpass",freq:1200,endFreq:400,q:1.4,pan:s});else if(i==="kong"){this.tone({freq:95,endFreq:58,type:"sawtooth",dur:1.5,gain:.22,filter:{type:"lowpass",freq:700,endFreq:220},q:2,pan:s}),this.tone({freq:142,endFreq:86,type:"square",dur:1.1,gain:.09,detune:8,pan:s}),this.noise({dur:1.5,gain:.16,filter:"bandpass",freq:520,endFreq:200,q:1.2,pan:s});for(let a=0;a<3;a++)this.tone({freq:55,endFreq:35,type:"sine",dur:.22,gain:.2,delay:.5+a*.22,pan:s})}else if(i==="shimo")this.tone({freq:62,endFreq:34,type:"sawtooth",dur:2,gain:.2,filter:{type:"lowpass",freq:420,endFreq:120},pan:s}),this.noise({dur:2.1,gain:.16,filter:"lowpass",freq:900,endFreq:180,pan:s}),this.tone({freq:180,endFreq:80,type:"sine",dur:1.8,gain:.06,pan:s});else if(i==="scylla"){this.tone({freq:300,endFreq:120,type:"sawtooth",dur:1.2,gain:.12,filter:{type:"bandpass",freq:1200,q:4},pan:s}),this.noise({dur:1.3,gain:.18,filter:"highpass",freq:1800,endFreq:600,pan:s});for(let a=0;a<5;a++)this.tone({freq:420+a*90,endFreq:300+a*60,type:"square",dur:.5,gain:.025,delay:a*.07,pan:s})}else if(i==="tiamat")this.tone({freq:70,endFreq:42,type:"sawtooth",dur:1.8,gain:.2,filter:{type:"lowpass",freq:600,endFreq:180},q:1.8,pan:s}),this.noise({dur:1.8,gain:.14,filter:"bandpass",freq:700,endFreq:220,q:1.2,pan:s}),this.tone({freq:230,endFreq:120,type:"triangle",dur:1.4,gain:.05,pan:s});else{const a=i==="godzilla"?58:62;this.tone({freq:a+18,endFreq:a-10,type:"sawtooth",dur:1.9,gain:.22,filter:{type:"lowpass",freq:900,endFreq:180},q:2.4,pan:s}),this.tone({freq:a*1.5,endFreq:a*.9,type:"square",dur:1.5,gain:.08,detune:9,pan:s}),this.tone({freq:a*.5,endFreq:a*.35,type:"sine",dur:2.2,gain:.12,pan:s}),this.noise({dur:1.8,gain:.14,filter:"bandpass",freq:600,endFreq:160,q:1.4,pan:s}),i==="godzilla"&&t.build?.evolved&&this.tone({freq:240,endFreq:120,type:"sawtooth",dur:1.5,gain:.05,delay:.15,pan:s})}}impact(t=1,e=0){const i=Math.max(.3,Math.min(2,t));this.tone({freq:120*i,endFreq:34,type:"sine",dur:.25+i*.15,gain:.18*i,pan:e}),this.noise({dur:.12+i*.08,gain:.14*i,filter:"lowpass",freq:1400,endFreq:240,pan:e}),i>.8&&this.noise({dur:.5,gain:.08*i,filter:"highpass",freq:2200,endFreq:600,pan:e})}stomp(t=1){this.tone({freq:48,endFreq:22,type:"sine",dur:.7,gain:.32*t}),this.tone({freq:90,endFreq:32,type:"sawtooth",dur:.5,gain:.1*t,filter:{type:"lowpass",freq:320}}),this.noise({dur:.65,gain:.2*t,filter:"lowpass",freq:700,endFreq:100})}explosion(t=1,e=0){this.noise({dur:1.2,gain:.28*t,filter:"lowpass",freq:2400,endFreq:90,pan:e}),this.tone({freq:70,endFreq:24,type:"sine",dur:1.1,gain:.25*t,pan:e}),this.tone({freq:160,endFreq:50,type:"sawtooth",dur:.7,gain:.1*t,filter:{type:"lowpass",freq:600},pan:e});for(let i=0;i<4;i++)this.noise({dur:.1,gain:.08,filter:"highpass",freq:1800,delay:.1+Math.random()*.6,pan:e})}glass(t=0){this.noise({dur:.5,gain:.09,filter:"highpass",freq:3200,endFreq:1800,pan:t});for(let e=0;e<7;e++)this.tone({freq:1600+Math.random()*2400,endFreq:900+Math.random()*1200,type:"sine",dur:.12+Math.random()*.2,gain:.015,delay:Math.random()*.25,pan:t})}whoosh(t=0){this.noise({dur:.35,gain:.12,filter:"bandpass",freq:600,endFreq:1800,q:1.4,pan:t})}beamStart(t,e=1.4){if(!this.ctx||!this.settings.get("sound"))return()=>{};const i=t.special,s=this.ctx.currentTime,a=this.ctx.createGain();a.gain.setValueAtTime(1e-4,s),a.gain.exponentialRampToValueAtTime(.14,s+.08),a.gain.setValueAtTime(.14,s+e-.25),a.gain.exponentialRampToValueAtTime(1e-4,s+e),a.connect(this.sfx);const r=this.ctx.createOscillator();r.type="sawtooth";const o=i.type==="freezeBeam"?280:i.type==="tripleBeam"?120:i.type==="godrays"?440:90;r.frequency.setValueAtTime(o,s),r.frequency.exponentialRampToValueAtTime(o*1.8,s+.15),r.frequency.exponentialRampToValueAtTime(o*.7,s+e);const l=this.ctx.createBiquadFilter();l.type="bandpass",l.frequency.value=i.type==="freezeBeam"?1800:700,l.Q.value=2.5,r.connect(l),l.connect(a);const c=this.ctx.createBufferSource();c.buffer=this.noiseBuffer,c.loop=!0;const h=this.ctx.createBiquadFilter();h.type="highpass",h.frequency.value=600;const d=this.ctx.createGain();d.gain.value=.07,c.connect(h),h.connect(d),d.connect(a);const u=this.ctx.createOscillator(),f=this.ctx.createGain();return u.frequency.value=11,f.gain.value=30,u.connect(f),f.connect(r.frequency),r.start(s),c.start(s),u.start(s),r.stop(s+e+.05),c.stop(s+e+.05),u.stop(s+e+.05),()=>{try{a.gain.cancelScheduledValues(this.ctx.currentTime),a.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.05)}catch{}}}thunder(){this.noise({dur:2.4,gain:.18,filter:"lowpass",freq:600,endFreq:60,attack:.02}),this.tone({freq:52,endFreq:26,type:"sine",dur:1.8,gain:.12,delay:.15})}alert(){this.tone({freq:220,endFreq:220,type:"square",dur:.12,gain:.06}),this.tone({freq:330,endFreq:330,type:"square",dur:.12,gain:.05,delay:.16})}victory(){[130.8,164.8,196,261.6,329.6].forEach((e,i)=>{this.tone({freq:e,type:"triangle",dur:1.4,gain:.06,delay:i*.13,attack:.02}),this.tone({freq:e*.5,type:"sine",dur:1.6,gain:.05,delay:i*.13})}),this.noise({dur:1.8,gain:.05,filter:"highpass",freq:2e3,delay:.5})}defeat(){[110,98,82,55].forEach((t,e)=>this.tone({freq:t,endFreq:t*.8,type:"sawtooth",dur:1.1,gain:.07,delay:e*.25,filter:{type:"lowpass",freq:400}}))}startAmbient(){if(!this.ctx||this.ambient)return;const t=this.ctx.currentTime,e=this.ctx.createGain();e.gain.value=1e-4,e.gain.exponentialRampToValueAtTime(.09,t+3),e.connect(this.music);const i=this.ctx.createOscillator();i.type="sine",i.frequency.value=41.2;const s=this.ctx.createOscillator();s.type="triangle",s.frequency.value=61.7;const a=this.ctx.createOscillator();a.type="sine",a.frequency.value=82.4,a.detune.value=-7;const r=this.ctx.createOscillator();r.frequency.value=.06;const o=this.ctx.createGain();o.gain.value=.035,r.connect(o),o.connect(e.gain);const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.value=280,i.connect(l),s.connect(l),a.connect(l),l.connect(e),i.start(t),s.start(t),a.start(t),r.start(t),this.ambient={g:e,osc1:i,osc2:s,osc3:a,lfo:r}}setWeather(t){if(this.weather!==t&&(this.weather=t,!!this.ctx)){if(this.rain){try{this.rain.stop()}catch{}this.rain=null}if(t==="rain"||t==="storm"){const e=this.ctx.createBufferSource();e.buffer=this.noiseBuffer,e.loop=!0;const i=this.ctx.createBiquadFilter();i.type="highpass",i.frequency.value=1200;const s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.value=7e3;const a=this.ctx.createGain();a.gain.value=t==="storm"?.16:.1,e.connect(i),i.connect(s),s.connect(a),a.connect(this.music),e.start(),this.rain={src:e,g:a}}}}setMaster(t){this.setSound(t)}}function _l(n,t=64){const e=document.createElement("canvas");e.width=e.height=t;const i=e.getContext("2d");n(i,t);const s=new vi(e);return s.colorSpace=Ee,s}const Yc=_l((n,t)=>{const e=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.8)"),e.addColorStop(.7,"rgba(255,255,255,0.22)"),e.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=e,n.fillRect(0,0,t,t)});_l((n,t)=>{const e=n.createLinearGradient(0,0,0,t);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.5,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=e,n.fillRect(t*.35,0,t*.3,t)});const $c=_l((n,t)=>{const e=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.2,"rgba(255,255,255,0.9)"),e.addColorStop(.5,"rgba(255,255,255,0.3)"),e.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=e,n.fillRect(0,0,t,t)}),vx=`
attribute float aSize;
attribute float aAlpha;
varying vec3 vColor;
varying float vAlpha;
void main() {
  vColor = color;
  vAlpha = aAlpha;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * (340.0 / max(1.0, -mv.z));
  gl_Position = projectionMatrix * mv;
}`,_x=`
uniform sampler2D map;
varying vec3 vColor;
varying float vAlpha;
void main() {
  vec4 t = texture2D(map, gl_PointCoord);
  if (t.a < 0.02) discard;
  gl_FragColor = vec4(vColor, t.a * vAlpha);
}`;class Kc{constructor(t,e,i,s){this.max=e,this.items=[],this.positions=new Float32Array(e*3),this.colors=new Float32Array(e*3),this.sizes=new Float32Array(e),this.alphas=new Float32Array(e);const a=new Te;a.setAttribute("position",new oi(this.positions,3)),a.setAttribute("color",new oi(this.colors,3)),a.setAttribute("aSize",new oi(this.sizes,1)),a.setAttribute("aAlpha",new oi(this.alphas,1)),a.setDrawRange(0,0);const r=new tn({uniforms:{map:{value:s}},vertexShader:vx,fragmentShader:_x,transparent:!0,depthWrite:!1,vertexColors:!0,blending:i?ri:ls});this.points=new Oh(a,r),this.points.frustumCulled=!1,this.points.renderOrder=i?4:2,t.add(this.points),this.geo=a}emit(t){this.items.length>=this.max&&this.items.shift(),this.items.push(t)}update(t){const e=this.items;let i=0;for(let s=0;s<e.length;s++){const a=e[s];if(a.life-=t,a.life<=0)continue;a.vy-=(a.gravity||0)*t;const r=Math.max(0,1-(a.drag||0)*t);a.vx*=r,a.vz*=r,a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,a.y<.4&&a.vy<0&&(a.y=.4,a.vy*=-.18,a.vx*=.7,a.vz*=.7);const o=a.life/a.maxLife,l=a.fade==="in"?Math.min(1,(1-o)*4)*o:o*(a.alpha??1),c=a.size*(a.grow?1+(1-o)*a.grow:1),h=i++;this.positions[h*3]=a.x,this.positions[h*3+1]=a.y,this.positions[h*3+2]=a.z,this.colors[h*3]=a.r,this.colors[h*3+1]=a.g,this.colors[h*3+2]=a.b,this.sizes[h]=c,this.alphas[h]=Math.max(0,Math.min(1,l)),i-1!==s&&(e[i-1]=a)}e.length=i,this.geo.setDrawRange(0,i),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.attributes.aSize.needsUpdate=!0,this.geo.attributes.aAlpha.needsUpdate=!0}clear(){this.items.length=0,this.geo.setDrawRange(0,0)}}function Mx(n){return{r:(n>>16&255)/255,g:(n>>8&255)/255,b:(n&255)/255}}class yx{constructor(t,e){this.scene=t,this.settings=e;const i=e.particleCount;this.max=Math.floor(2200*i),this.additive=new Kc(t,Math.floor(1200*i),!0,Yc),this.normal=new Kc(t,Math.floor(1600*i),!1,Yc),this.debris=new Sx(t,Math.floor(150*i)),this.beams=[],this.shockwaves=[],this.flashes=[],this.shake={amount:0,time:0,duration:0},this.lightPool=[],this.rain=new bx(t,e),this.enabled=!0,this.tmp=new R}setQuality(){this.rain.setQuality(this.settings.get("particles"))}shakeCamera(t,e=.35){this.settings.get("cameraShake")&&(this.shake.amount=Math.max(this.shake.amount,t),this.shake.time=Math.max(this.shake.time,e),this.shake.duration=Math.max(this.shake.duration,e))}getShake(t){const e=this.shake;if(e.time<=0)return e.amount=0,{x:0,y:0};e.time-=t;const i=e.amount*Math.max(0,e.time/Math.max(.001,e.duration));return{x:(Math.random()-.5)*i,y:(Math.random()-.5)*i}}emit(t,e,i={}){const s=this.settings.particleCount,a=Math.max(1,Math.round((i.count??10)*s)),r=i.color??16755285,o=Mx(r),l=i.speed??8,c=i.spread??.6,h=i.size??2.2,d=i.life??1,u=i.gravity??0,f=i.drag??.4,p=i.grow??0,_=i.additive?this.additive:this.normal;for(let g=0;g<a;g++){const m=Math.random()*Math.PI*2,v=Math.acos(2*Math.random()-1),y=l*(.35+Math.random()*.8),M=Math.sin(v)*Math.cos(m),E=Math.cos(v),T=Math.sin(v)*Math.sin(m);_.emit({x:e.x+M*c,y:Math.max(.4,e.y+E*c*.6),z:e.z+T*c,vx:M*y+(i.vx||0),vy:E*y*(i.up??1)+(i.vy||0),vz:T*y+(i.vz||0),life:d*(.6+Math.random()*.8),maxLife:d,size:h*(.6+Math.random()*.9),r:o.r,g:o.g,b:o.b,gravity:u,drag:f,grow:p,alpha:i.alpha??.9,fade:i.fade})}}dust(t,e=4,i=30,s=11049606){this.emit("dust",t,{count:i,color:s,speed:e*.8,spread:e*.5,size:e*.9,life:2.6,gravity:-1.8,drag:.7,grow:1.8,alpha:.42,up:.4}),this.emit("dust",t,{count:Math.round(i*.4),color:6971992,speed:e*.4,spread:e*.8,size:e*1.2,life:3.6,gravity:-.8,drag:.5,grow:2.4,alpha:.25,up:.2})}sparks(t,e=14,i=16761963,s=18){this.emit("sparks",t,{count:e,color:i,speed:s,spread:.4,size:1.5,life:.55,gravity:32,drag:.5,additive:!0,alpha:1})}glass(t,e=24){this.emit("glass",t,{count:e,color:12577023,speed:14,spread:1.2,size:1.2,life:1.2,gravity:26,drag:.15,additive:!0,alpha:.8})}fire(t,e=22,i=16742958,s=2.8){this.emit("fire",t,{count:e,color:i,speed:12,spread:1.2,size:s,life:.8,gravity:-7,drag:1.2,additive:!0,grow:.8,alpha:.9}),this.emit("smoke",t,{count:Math.round(e*.5),color:3354412,speed:6,spread:1.6,size:s*1.6,life:2.2,gravity:-3,drag:.8,grow:2,alpha:.35})}smoke(t,e=18,i=4933444){this.emit("smoke",t,{count:e,color:i,speed:5,spread:1.4,size:3.2,life:2.8,gravity:-2.5,drag:.8,grow:2.2,alpha:.3})}ice(t,e=24,i=12578815){this.emit("ice",t,{count:e,color:i,speed:14,spread:.9,size:1.8,life:1.3,gravity:12,drag:.4,additive:!0,alpha:.9}),this.emit("mist",t,{count:Math.round(e*.5),color:14678271,speed:5,spread:1.5,size:3,life:2.2,gravity:-1,drag:1,grow:2,alpha:.22})}acid(t,e=20,i=13041485){this.emit("acid",t,{count:e,color:i,speed:10,spread:1.1,size:2,life:1.4,gravity:18,drag:.4,additive:!0,alpha:.9}),this.emit("mist",t,{count:10,color:9437013,speed:4,spread:1.4,size:2.4,life:2,gravity:-1,drag:1,grow:1.5,alpha:.2})}blood(t,e=10){this.emit("dust",t,{count:e,color:5906207,speed:8,spread:.5,size:1.4,life:.9,gravity:22,drag:.2,alpha:.55})}explosion(t,e=1,i=16747069){this.fire(t,Math.round(35*e),i,3.2*e),this.sparks(t,Math.round(30*e),16765562,26*e),this.dust(t,8*e,30*e,9075304);const s=new Us(new hs({map:$c,color:i,transparent:!0,opacity:.95,blending:ri,depthWrite:!1}));s.position.copy(t),s.scale.setScalar(8*e),this.scene.add(s);const a=new wc(i,220*e,120*e,2);a.position.copy(t),this.scene.add(a),this.flashes.push({sprite:s,light:a,life:.5,maxLife:.5,power:e}),this.shakeCamera(.7*e,.6)}shockwave(t,e,i=16761963){const s=new lr(.82,1,64,1),a=new Xe({color:i,transparent:!0,opacity:.75,side:Ye,blending:ri,depthWrite:!1}),r=new _t(s,a);r.rotation.x=-Math.PI/2,r.position.set(t.x,1.2,t.z),r.scale.setScalar(1),this.scene.add(r);const o=new _t(s,a.clone());o.material.opacity=.3,o.rotation.x=-Math.PI/2,o.position.set(t.x,.7,t.z),this.scene.add(o),this.shockwaves.push({ring:r,ring2:o,life:1.2,maxLife:1.2,radius:e,color:i}),this.dust(t,e*.28,Math.round(40*this.settings.particleCount),11838604)}beam(t){const e=new me,i=new Xe({color:t.color,transparent:!0,opacity:.95,blending:ri,depthWrite:!1}),s=new Xe({color:t.secondary??t.color,transparent:!0,opacity:.25,blending:ri,depthWrite:!1,side:Ye}),a=new _t(new li(1,1,1,10,1,!0),i),r=new _t(new li(1,1,1,12,1,!0),s);e.add(a,r);const o=new Us(new hs({map:$c,color:t.color,transparent:!0,opacity:.9,blending:ri,depthWrite:!1}));o.scale.setScalar(10);const l=new wc(t.color,300,140,2);e.add(o,l),this.scene.add(e);const c={group:e,core:a,outer:r,impact:o,light:l,coreMat:i,outerMat:s,start:t.start.clone(),end:t.end.clone(),width:t.width??2.2,life:t.duration??1.2,maxLife:t.duration??1.2,color:t.color,secondary:t.secondary,sparkTimer:0,damageTick:0,updateStart:t.updateStart||null};return this.beams.push(c),c}updateBeam(t,e,i){t.updateStart&&t.updateStart(t.start);const s=this.tmp.subVectors(t.end,t.start),a=Math.max(.1,s.length());s.normalize();const r=new R().addVectors(t.start,t.end).multiplyScalar(.5);t.group.position.copy(r),t.group.quaternion.setFromUnitVectors(new R(0,1,0),s);const o=1+Math.sin(performance.now()*.04)*.18;t.core.scale.set(t.width*.55*o,a,t.width*.55*o),t.outer.scale.set(t.width*1.5*o,a,t.width*1.5*o),t.impact.position.copy(t.end).sub(r),t.impact.scale.setScalar((t.width*4+Math.sin(performance.now()*.05)*2)*o),t.light.position.copy(t.impact.position),t.light.intensity=200+Math.random()*120;const l=t.life/t.maxLife;return t.coreMat.opacity=Math.min(1,l*3)*.95,t.outerMat.opacity=Math.min(.4,l*2)*.35,t.impact.material.opacity=Math.min(1,l*4)*.9,t.life-=e,t.sparkTimer-=e,t.sparkTimer<=0&&t.life>0&&(t.sparkTimer=.06,this.sparks(t.end,3,t.color,16)),t.life<=0?(this.scene.remove(t.group),t.core.geometry.dispose(),t.outer.geometry.dispose(),t.coreMat.dispose(),t.outerMat.dispose(),t.impact.material.dispose(),!1):!0}update(t,e){this.additive.update(t),this.normal.update(t),this.debris.update(t);for(let i=this.beams.length-1;i>=0;i--)this.updateBeam(this.beams[i],t,e)||this.beams.splice(i,1);for(let i=this.shockwaves.length-1;i>=0;i--){const s=this.shockwaves[i];s.life-=t;const a=1-s.life/s.maxLife,r=1+a*s.radius;s.ring.scale.setScalar(r),s.ring2.scale.setScalar(r*.92),s.ring.material.opacity=(1-a)*.7,s.ring2.material.opacity=(1-a)*.25,s.life<=0&&(this.scene.remove(s.ring,s.ring2),s.ring.geometry.dispose(),s.ring.material.dispose(),s.ring2.material.dispose(),this.shockwaves.splice(i,1))}for(let i=this.flashes.length-1;i>=0;i--){const s=this.flashes[i];s.life-=t;const a=s.life/s.maxLife;s.sprite.scale.setScalar(8*s.power*(1+(1-a)*1.8)),s.sprite.material.opacity=a*.95,s.light.intensity=220*s.power*a,s.life<=0&&(this.scene.remove(s.sprite,s.light),s.sprite.material.dispose(),this.flashes.splice(i,1))}this.rain.update(t,e)}clear(){this.additive.clear(),this.normal.clear(),this.debris.clear();for(const t of this.beams)this.scene.remove(t.group),t.core.geometry.dispose(),t.outer.geometry.dispose(),t.coreMat.dispose(),t.outerMat.dispose(),t.impact.material.dispose();this.beams.length=0;for(const t of this.shockwaves)this.scene.remove(t.ring,t.ring2),t.ring.geometry.dispose(),t.ring.material.dispose(),t.ring2.material.dispose();this.shockwaves.length=0;for(const t of this.flashes)this.scene.remove(t.sprite,t.light),t.sprite.material.dispose();this.flashes.length=0,this.rain.clear()}}class Sx{constructor(t,e){this.scene=t,this.max=e,this.items=[],this.geo=new re(1,1,1),this.materials=[new se({color:9078141,roughness:.9}),new se({color:6973024,roughness:.95}),new se({color:5065286,roughness:.9}),new se({color:10919052,roughness:.92}),new se({color:3815998,roughness:.7,metalness:.3}),new se({color:8149824,roughness:.9})],this.meshes=[];for(let i=0;i<e;i++){const s=new _t(this.geo,this.materials[i%this.materials.length]);s.visible=!1,s.castShadow=!0,s.receiveShadow=!0,t.add(s),this.meshes.push(s)}this.cursor=0}spawn(t,e,i,s={}){const a=this.meshes[this.cursor];this.cursor=(this.cursor+1)%this.max;const r={mesh:a,size:e,life:s.life??20,vx:i?.x||0,vy:i?.y||0,vz:i?.z||0,ax:(Math.random()-.5)*(s.spin??5),ay:(Math.random()-.5)*(s.spin??5),az:(Math.random()-.5)*(s.spin??5),settled:!1,active:!0,bounces:0};if(a.material=s.material||this.materials[Math.floor(Math.random()*this.materials.length)],a.scale.set(e.x,e.y,e.z),a.position.copy(t),a.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),a.visible=!0,this.items.push(r),this.items.length>this.max){const o=this.items.shift();o.mesh.visible=!1,o.active=!1}return r}update(t){for(let e=this.items.length-1;e>=0;e--){const i=this.items[e];if(!i.active){this.items.splice(e,1);continue}if(i.life-=t,!i.settled){i.vy-=48*t,i.mesh.position.x+=i.vx*t,i.mesh.position.y+=i.vy*t,i.mesh.position.z+=i.vz*t,i.mesh.rotation.x+=i.ax*t,i.mesh.rotation.y+=i.ay*t,i.mesh.rotation.z+=i.az*t;const s=Math.max(i.size.x,i.size.y,i.size.z)*.3;i.mesh.position.y<s&&(i.mesh.position.y=s,i.vy*=-.28,i.vx*=.68,i.vz*=.68,i.ax*=.7,i.ay*=.7,i.az*=.7,i.bounces++,(Math.abs(i.vy)<2||i.bounces>4)&&(i.vy=0,i.vx*=.4,i.vz*=.4,i.ax*=.2,i.ay*=.2,i.az*=.2,i.settled=!0)),Math.abs(i.vx)+Math.abs(i.vz)<.2&&(i.settled=!0)}i.life<=0&&(i.mesh.visible=!1,i.active=!1,this.items.splice(e,1))}}clear(){for(const t of this.items)t.mesh.visible=!1;this.items.length=0}}class bx{constructor(t,e){this.scene=t,this.settings=e,this.max=1600,this.count=0,this.positions=new Float32Array(this.max*6),this.velocities=new Float32Array(this.max);const i=new Te;i.setAttribute("position",new oi(this.positions,3));const s=new ar({color:11127016,transparent:!0,opacity:.32,depthWrite:!1});this.lines=new Tu(i,s),this.lines.frustumCulled=!1,this.lines.visible=!1,t.add(this.lines),this.geo=i,this.intensity=0,this.wind=0,this.setQuality(e.get("particles"))}setQuality(t){this.max=t==="low"?450:t==="medium"?900:t==="ultra"?2400:1500,this.positions.length<this.max*6&&(this.positions=new Float32Array(this.max*6),this.velocities=new Float32Array(this.max),this.geo.setAttribute("position",new oi(this.positions,3)));for(let e=0;e<this.max;e++)this.velocities[e]||(this.velocities[e]=80+Math.random()*90);this.count=this.max,this.geo.setDrawRange(0,0)}setIntensity(t){this.intensity=t==="storm"?1:t==="rain"?.62:0,this.lines.visible=this.intensity>0,this.lines.material.opacity=t==="storm"?.42:.3,this.wind=t==="storm"?22:8}update(t,e){if(!this.intensity)return;const i=Math.floor(this.max*this.intensity),s=420,a=e?e.position.x:0,r=e?e.position.z:0;for(let o=0;o<i;o++){const l=o*6;let c=this.positions[l],h=this.positions[l+1],d=this.positions[l+2];(h<0||h>260||Math.abs(c-a)>s||Math.abs(d-r)>s)&&(c=a+(Math.random()-.5)*s*2,d=r+(Math.random()-.5)*s*2,h=120+Math.random()*140);const u=this.velocities[o];h-=u*t,c+=this.wind*t,this.positions[l]=c,this.positions[l+1]=h,this.positions[l+2]=d,this.positions[l+3]=c-this.wind*.04,this.positions[l+4]=h+3.5,this.positions[l+5]=d}this.geo.attributes.position.needsUpdate=!0,this.geo.setDrawRange(0,i*2)}clear(){this.lines.visible=!1,this.geo.setDrawRange(0,0)}}const ti={night:{top:264212,horizon:1055536,bottom:197898,sun:11126015,fog:660258,ambient:1778488,hemiSky:2374236,hemiGround:526864,sunInt:.22,hemiInt:.45,exposure:1,night:1,fogDensity:9e-4,cloud:1778742},dawn:{top:2308446,horizon:16747096,bottom:3877420,sun:16753256,fog:7035484,ambient:4471884,hemiSky:5925512,hemiGround:2759704,sunInt:1.25,hemiInt:.7,exposure:1.06,night:.42,fogDensity:75e-5,cloud:9071204},day:{top:3042484,horizon:11455456,bottom:6714749,sun:16773848,fog:10201526,ambient:6252916,hemiSky:9417944,hemiGround:4473406,sunInt:2.15,hemiInt:.95,exposure:1.02,night:0,fogDensity:5e-4,cloud:14213866},dusk:{top:1846094,horizon:15759954,bottom:3812404,sun:16756867,fog:7299176,ambient:4997192,hemiSky:7043738,hemiGround:2892324,sunInt:1.35,hemiInt:.8,exposure:1.08,night:.55,fogDensity:75e-5,cloud:9071208}};function Ln(n,t,e){return n+(t-n)*e}function Ii(n,t,e){const i=new Vt(n),s=new Vt(t);return i.lerp(s,e),i.getHex()}function wx(){const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d"),i=()=>Math.random();for(let a=0;a<38;a++){const r=40+i()*176,o=70+i()*116,l=18+i()*55,c=e.createRadialGradient(r,o,0,r,o,l);c.addColorStop(0,"rgba(255,255,255,0.5)"),c.addColorStop(.55,"rgba(255,255,255,0.18)"),c.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=c,e.beginPath(),e.arc(r,o,l,0,Math.PI*2),e.fill()}const s=new vi(t);return s.colorSpace=Ee,s}const Ex=`
varying vec3 vDir;
void main() {
  vDir = normalize((modelMatrix * vec4(position, 1.0)).xyz);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Tx=`
uniform vec3 topColor;
uniform vec3 horizonColor;
uniform vec3 bottomColor;
uniform vec3 sunColor;
uniform vec3 sunDir;
uniform float flash;
varying vec3 vDir;
void main() {
  float h = vDir.y;
  vec3 col;
  if (h > 0.0) col = mix(horizonColor, topColor, pow(clamp(h, 0.0, 1.0), 0.55));
  else col = mix(horizonColor, bottomColor, pow(clamp(-h, 0.0, 1.0), 0.45));
  float d = max(dot(normalize(vDir), normalize(sunDir)), 0.0);
  col += sunColor * pow(d, 180.0) * 1.6;
  col += sunColor * pow(d, 12.0) * 0.12;
  col += vec3(1.0, 0.95, 0.85) * flash;
  gl_FragColor = vec4(col, 1.0);
}`;class Ax{constructor(t,e,i){this.scene=t,this.settings=e,this.effects=i,this.city=null,this.hour=19.2,this.targetHour=19.2,this.weather="clear",this.targetWeather="clear",this.timeSpeed=0,this.autoCycle=!1,this.renderer=null,this.current={...ti.dusk},this.target={...ti.dusk},this.fogDensity=.0012,this.targetFog=.0012,this.flash=0,this.lightningTimer=4,this.lightning=null,this.clouds=[],this.moonSprite=null,this.sunSprite=null,this.skyMat=new tn({uniforms:{topColor:{value:new Vt(ti.dusk.top)},horizonColor:{value:new Vt(ti.dusk.horizon)},bottomColor:{value:new Vt(ti.dusk.bottom)},sunColor:{value:new Vt(ti.dusk.sun)},sunDir:{value:new R(.4,.3,-.8)},flash:{value:0}},vertexShader:Ex,fragmentShader:Tx,side:ci,depthWrite:!1,fog:!1}),this.sky=new _t(new yn(3e3,32,20),this.skyMat),this.sky.frustumCulled=!1,t.add(this.sky),this.hemi=new gf(ti.dusk.hemiSky,ti.dusk.hemiGround,ti.dusk.hemiInt),t.add(this.hemi),this.ambient=new _f(ti.dusk.ambient,.55),t.add(this.ambient),this.sun=new Wa(ti.dusk.sun,ti.dusk.sunInt),this.sun.castShadow=e.get("shadows"),this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.camera.left=-260,this.sun.shadow.camera.right=260,this.sun.shadow.camera.top=260,this.sun.shadow.camera.bottom=-260,this.sun.shadow.camera.near=10,this.sun.shadow.camera.far=1200,this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=1.2,this.sun.position.set(300,500,200),this.sun.target.position.set(0,0,0),t.add(this.sun,this.sun.target),this.fill=new Wa(10467032,.38),this.fill.position.set(-220,320,380),this.fill.target.position.set(0,40,0),t.add(this.fill,this.fill.target),this.lightningLight=new Wa(14543615,0),this.lightningLight.position.set(-200,500,100),t.add(this.lightningLight);const s=new Te,a=new Float32Array(900*3);for(let l=0;l<900;l++){const c=Math.random()*Math.PI*2,h=Math.random()*.85+.1,d=Math.sqrt(1-h*h);a[l*3]=Math.cos(c)*d*2600,a[l*3+1]=h*2600,a[l*3+2]=Math.sin(c)*d*2600}s.setAttribute("position",new oi(a,3)),this.stars=new Oh(s,new Fh({color:13491455,size:3.2,transparent:!0,opacity:0,sizeAttenuation:!0,depthWrite:!1,fog:!1})),this.stars.frustumCulled=!1,t.add(this.stars);const r=this.makeGlowTexture();this.sunSprite=new Us(new hs({map:r,color:16770736,transparent:!0,opacity:.9,blending:ri,depthWrite:!1,fog:!1})),this.sunSprite.scale.setScalar(260),t.add(this.sunSprite),this.moonSprite=new Us(new hs({map:r,color:14214399,transparent:!0,opacity:.8,blending:ri,depthWrite:!1,fog:!1})),this.moonSprite.scale.setScalar(150),t.add(this.moonSprite);const o=wx();for(let l=0;l<16;l++){const c=new hs({map:o,color:9071204,transparent:!0,opacity:.34,depthWrite:!1,fog:!1}),h=new Us(c),d=Math.random()*Math.PI*2,u=500+Math.random()*1400;h.position.set(Math.cos(d)*u,260+Math.random()*260,Math.sin(d)*u);const f=420+Math.random()*620;h.scale.set(f,f*.42,1),h.userData.speed=2+Math.random()*5,t.add(h),this.clouds.push(h)}this.scene.fog=new cl(ti.dusk.fog,this.fogDensity),this.lightningGroup=new me,this.lightningGroup.visible=!1,t.add(this.lightningGroup),this.lightningLife=0,this.applyHour(19.2,!0),this.setWeather("clear",!0)}makeGlowTexture(){const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d"),i=e.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.15,"rgba(255,255,255,0.95)"),i.addColorStop(.4,"rgba(255,255,255,0.32)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(0,0,128,128);const s=new vi(t);return s.colorSpace=Ee,s}attachCity(t){this.city=t,this.applyCityState()}attachRenderer(t){this.renderer=t}setShadows(t){this.sun.castShadow=t,this.renderer&&(this.renderer.shadowMap.enabled=t,this.renderer.shadowMap.needsUpdate=!0)}setTimePreset(t){const e={night:.5,sunrise:6.2,dawn:6.2,day:12,noon:12,sunset:18.4,dusk:18.4};e[t]!==void 0&&this.setHour(e[t])}setHour(t){this.targetHour=(t%24+24)%24,this.hour=this.targetHour,this.applyHour(this.targetHour,!1)}samplePalette(t){const e=[[0,"night"],[5,"night"],[6.2,"dawn"],[8.5,"day"],[16.5,"day"],[18.4,"dusk"],[20,"night"],[24,"night"]];for(let i=0;i<e.length-1;i++){const[s,a]=e[i],[r,o]=e[i+1];if(t>=s&&t<=r){const l=(t-s)/Math.max(1e-4,r-s),c=ti[a],h=ti[o];return{top:Ii(c.top,h.top,l),horizon:Ii(c.horizon,h.horizon,l),bottom:Ii(c.bottom,h.bottom,l),sun:Ii(c.sun,h.sun,l),fog:Ii(c.fog,h.fog,l),ambient:Ii(c.ambient,h.ambient,l),hemiSky:Ii(c.hemiSky,h.hemiSky,l),hemiGround:Ii(c.hemiGround,h.hemiGround,l),sunInt:Ln(c.sunInt,h.sunInt,l),hemiInt:Ln(c.hemiInt,h.hemiInt,l),exposure:Ln(c.exposure,h.exposure,l),night:Ln(c.night,h.night,l),fogDensity:Ln(c.fogDensity,h.fogDensity,l),cloud:Ii(c.cloud,h.cloud,l)}}}return{...ti.night}}applyHour(t,e=!1){this.hour=t;const i=this.samplePalette(t);this.target=i,e&&(this.current={...i});const s=(t-6)/12*Math.PI;this.sunDir=new R(Math.cos(s)*.8,Math.sin(s),.35).normalize(),this.moonDir=this.sunDir.clone().multiplyScalar(-1),this.applyCityState()}applyCityState(){if(!this.city)return;const t=this.current.night??0;this.city.setNight(t),this.city.setFog(this.current.fog,this.fogDensity)}setWeather(t,e=!1){this.weather=t,this.targetWeather=t,this.effects&&this.effects.rain.setIntensity(t),t==="clear"&&(this.targetFog=this.current.fogDensity*.7),t==="rain"&&(this.targetFog=Math.max(7e-4,this.current.fogDensity*.95)),t==="storm"&&(this.targetFog=Math.max(.0011,this.current.fogDensity*1.25)),t==="fog"&&(this.targetFog=Math.max(.004,this.current.fogDensity*4.5)),e&&(this.fogDensity=this.targetFog),this.city&&this.city.setWetness(t==="rain"||t==="storm")}update(t,e){this.autoCycle&&(this.hour=(this.hour+t*.012)%24,this.applyHour(this.hour));const i=1-Math.exp(-t*1.2),s=this.current,a=this.target;for(const c of["sunInt","hemiInt","exposure","night","fogDensity"])s[c]=Ln(s[c],a[c],i);for(const c of["top","horizon","bottom","sun","fog","ambient","hemiSky","hemiGround","cloud"])s[c]=Ii(s[c],a[c],i);this.fogDensity=Ln(this.fogDensity,this.targetFog,i),this.skyMat.uniforms.topColor.value.setHex(s.top),this.skyMat.uniforms.horizonColor.value.setHex(s.horizon),this.skyMat.uniforms.bottomColor.value.setHex(s.bottom),this.skyMat.uniforms.sunColor.value.setHex(s.sun),this.skyMat.uniforms.sunDir.value.copy(this.sunDir),this.skyMat.uniforms.flash.value=this.flash;const r=Math.max(0,this.sunDir.y),o=s.night,l=this.weather==="storm"?.58:this.weather==="rain"?.78:this.weather==="fog"?.68:1;this.sun.position.copy(this.sunDir).multiplyScalar(600),this.sun.intensity=s.sunInt*l,this.sun.color.setHex(s.sun),this.hemi.intensity=s.hemiInt*(1.05+r*.25),this.hemi.color.setHex(s.hemiSky),this.hemi.groundColor.setHex(s.hemiGround),this.ambient.color.setHex(s.ambient),this.ambient.intensity=.5+o*.4,this.fill.intensity=(.42+o*.26)*l,this.fill.color.setHex(this.weather==="storm"?11125992:s.hemiSky),this.stars.material.opacity=Math.max(0,o-.15)*.9,this.stars.visible=this.stars.material.opacity>.02,this.sunSprite.position.copy(this.sunDir).multiplyScalar(2400),this.sunSprite.material.color.setHex(s.sun),this.sunSprite.material.opacity=Math.max(0,.85-o*.6)*(this.weather==="clear"?1:.3),this.moonSprite.position.copy(this.moonDir).multiplyScalar(2400),this.moonSprite.material.opacity=Math.max(0,o*.9-.05),this.scene.fog.color.setHex(s.fog),this.scene.fog.density=this.fogDensity,this.renderer&&(this.renderer.toneMappingExposure=s.exposure),this.applyCityState();for(const c of this.clouds)c.position.x+=c.userData.speed*t*(this.weather==="storm"?3:1),c.position.x>1900&&(c.position.x=-1900),c.material.color.setHex(s.cloud),c.material.opacity=(this.weather==="fog"?.2:this.weather==="storm"?.55:.32)*(.6+o*.4);if(this.weather==="storm"&&(this.lightningTimer-=t,this.lightningTimer<=0&&(this.triggerLightning(e),this.lightningTimer=2.2+Math.random()*5.5)),this.lightningLife>0){this.lightningLife-=t;const c=Math.max(0,this.lightningLife/.35);this.flash=c*.35,this.lightningLight.intensity=c*3.5,this.lightningGroup.visible=c>0,this.lightningLife<=0&&(this.lightningGroup.visible=!1,this.flash=0)}else this.lightningLight.intensity=0,this.flash=0}triggerLightning(t){const e=t?t.position.x:0,i=t?t.position.z:0,s=e+(Math.random()-.5)*500,a=i+(Math.random()-.5)*500;for(;this.lightningGroup.children.length;)this.lightningGroup.remove(this.lightningGroup.children[0]);const r=[];let o=s,l=500,c=a;for(let u=0;u<14;u++)r.push(new R(o,l,c)),o+=(Math.random()-.5)*35,l-=32+Math.random()*12,c+=(Math.random()-.5)*35;const h=new Te().setFromPoints(r),d=new dl(h,new ar({color:13625087,transparent:!0,opacity:.95,blending:ri,depthWrite:!1}));this.lightningGroup.add(d),this.lightningGroup.visible=!0,this.lightningLife=.35,this.lightningLight.position.set(s,400,a),this.onThunder&&this.onThunder()}dispose(){this.scene.remove(this.sky,this.hemi,this.ambient,this.sun,this.sun.target,this.fill,this.fill.target,this.lightningLight,this.stars,this.sunSprite,this.moonSprite,this.lightningGroup);for(const t of this.clouds)this.scene.remove(t),t.material.dispose();this.sky.geometry.dispose(),this.skyMat.dispose()}}const Bs=Math.PI*2,we=(()=>{let n=1337;return()=>(n=n*1664525+1013904223>>>0)/4294967296})();function Bn(n,t){const e=document.createElement("canvas");return e.width=n,e.height=t,e}function Rx(){const n=Bn(512,512),t=n.getContext("2d");t.fillStyle="#2b2d30",t.fillRect(0,0,512,512);for(let i=0;i<9e3;i++){const s=30+Math.random()*40;t.fillStyle=`rgba(${s},${s},${s+2},${.2+Math.random()*.4})`,t.fillRect(Math.random()*512,Math.random()*512,1+Math.random()*2,1+Math.random()*2)}for(let i=0;i<18;i++){t.strokeStyle="rgba(12,12,14,0.55)",t.lineWidth=1+Math.random()*2;let s=Math.random()*512,a=Math.random()*512;t.beginPath(),t.moveTo(s,a);for(let r=0;r<5;r++)s+=(Math.random()-.5)*50,a+=(Math.random()-.5)*50,t.lineTo(s,a);t.stroke()}const e=new vi(n);return e.colorSpace=Ee,e.wrapS=e.wrapT=ki,e.repeat.set(18,18),e}function Cx(){const n=Bn(256,256),t=n.getContext("2d");t.fillStyle="#6d6c68",t.fillRect(0,0,256,256);for(let i=0;i<4e3;i++){const s=70+Math.random()*70;t.fillStyle=`rgba(${s},${s},${s-3},0.25)`,t.fillRect(Math.random()*256,Math.random()*256,1,1)}t.strokeStyle="rgba(40,40,38,0.35)",t.lineWidth=1;for(let i=0;i<6;i++)t.beginPath(),t.moveTo(i*42,0),t.lineTo(i*42,256),t.stroke();const e=new vi(n);return e.colorSpace=Ee,e.wrapS=e.wrapT=ki,e.repeat.set(5,5),e}function Px(n){const i=Bn(128,256),s=Bn(128,256),a=i.getContext("2d"),r=s.getContext("2d"),o=(()=>{let v=n*99991;return()=>(v=v*1664525+1013904223>>>0)/4294967296})(),l=[["#2b3038","#3a414c","#6f7885"],["#4a443c","#5b5348","#8b7d68"],["#34302f","#45403d","#76675b"],["#26343c","#33454f","#6e8790"],["#3c2f35","#4c3b43","#8c6c78"],["#30383a","#3d4749","#6e807f"]],c=l[Math.floor(o()*l.length)];a.fillStyle=c[0],a.fillRect(0,0,128,256),r.fillStyle="#000",r.fillRect(0,0,128,256);const h=5+Math.floor(o()*4),d=12+Math.floor(o()*8),u=7,f=5,p=(128-u*2)/h,_=(256-f*2)/d;for(let v=0;v<d;v++)for(let y=0;y<h;y++){const M=u+y*p+p*.14,E=f+v*_+_*.16,T=p*.72,x=_*.62,w=o()>.42,L=o()>.5?c[1]:c[2];if(a.fillStyle=L,a.fillRect(M,E,T,x),a.fillStyle="rgba(255,255,255,0.06)",a.fillRect(M+1,E+1,T*.4,x*.3),w){const C=o()>.32;r.fillStyle=C?`rgba(255,${190+o()*40},${110+o()*60},${.55+o()*.4})`:`rgba(${120+o()*60},${210+o()*40},255,${.5+o()*.4})`,r.fillRect(M,E,T,x),r.fillStyle="rgba(0,0,0,0.25)",r.fillRect(M+T*.5,E,1,x)}o()>.9&&(a.fillStyle="rgba(20,20,22,0.7)",a.fillRect(M-2,E+x+1,T+4,2))}if(o()>.5){a.fillStyle="rgba(0,0,0,0.25)";for(let v=0;v<h;v++)a.fillRect(u+v*p,0,1.5,256)}const g=new vi(i);g.colorSpace=Ee,g.wrapS=g.wrapT=ki;const m=new vi(s);return m.colorSpace=Ee,m.wrapS=m.wrapT=ki,{map:g,emissive:m,palette:c}}function Lx(){const n=Bn(128,128),t=n.getContext("2d");t.clearRect(0,0,128,128),t.strokeStyle="rgba(18,16,14,0.92)",t.lineWidth=1.4;for(let i=0;i<7;i++){let s=64+(Math.random()-.5)*20,a=64+(Math.random()-.5)*20;t.beginPath(),t.moveTo(s,a);for(let r=0;r<7;r++)s+=(Math.random()-.5)*22,a+=(Math.random()-.5)*22,t.lineTo(s,a),Math.random()>.6&&t.moveTo(s,a);t.stroke()}const e=new vi(n);return e.colorSpace=Ee,e}function Ix(n,t){const e=Bn(256,64),i=e.getContext("2d");i.clearRect(0,0,256,64),i.font='bold 40px "Arial Narrow", sans-serif',i.textAlign="center",i.textBaseline="middle",i.shadowColor=t,i.shadowBlur=18,i.fillStyle=t,i.fillText(n,128,32),i.shadowBlur=0,i.strokeStyle="rgba(255,255,255,0.7)",i.lineWidth=1.5,i.strokeText(n,128,32);const s=new vi(e);return s.colorSpace=Ee,s}function Dx(){const n=Bn(256,256),t=n.getContext("2d"),e=t.createImageData(256,256);for(let s=0;s<e.data.length;s+=4){const a=120+Math.random()*60;e.data[s]=a,e.data[s+1]=a,e.data[s+2]=255,e.data[s+3]=255}t.putImageData(e,0,0);const i=new vi(n);return i.wrapS=i.wrapT=ki,i.repeat.set(24,24),i}class Na{constructor(t,e,i,s){this.city=t,this.x=e,this.z=i,this.width=s.width,this.depth=s.depth,this.height=s.height,this.halfW=s.width/2,this.halfD=s.depth/2,this.style=s.style,this.maxHp=s.hp,this.hp=s.hp,this.sectionCount=s.sections,this.sectionHeight=s.height/s.sections,this.sections=[],this.destroyed=!1,this.burning=0,this.smokeTimer=0,this.group=new me,this.group.position.set(e,0,i),t.group.add(this.group),this.box=new vs,this.updateBox(),this.build(s)}build(t){const{width:e,depth:i,height:s,style:a}=t,r=this.city,o=r.windowTextures[Math.floor(Math.random()*r.windowTextures.length)],l=o.map.clone(),c=o.emissive.clone();l.needsUpdate=!0,c.needsUpdate=!0,l.repeat.set(Math.max(1,e/7),Math.max(2,s/9)),c.repeat.copy(l.repeat);const h=new se({map:l,emissiveMap:c,emissive:16777215,emissiveIntensity:0,color:16777215,roughness:a==="glass"?.26:.72,metalness:a==="glass"?.42:.08,side:ji});this.material=h,r.windowMaterials.push(h);const d=r.concreteMat,u=new _t(new re(e+3,2,i+3),d);u.position.y=1,u.castShadow=!0,u.receiveShadow=!0,this.group.add(u);const f=this.sectionCount;let p=e,_=i;for(let M=0;M<f;M++){const E=this.sectionHeight,T=2+M*E+E/2,x=new _t(r.boxGeo,h);x.position.set(0,T,0),x.scale.set(p,E,_),x.castShadow=!0,x.receiveShadow=!0,this.group.add(x);const w=this.maxHp/f*1.18;if(this.sections.push({mesh:x,hp:w,maxHp:w,y:T,height:E,width:p,depth:_,destroyed:!1,cracks:[]}),M>0){const L=new _t(new re(p+.4,.5,_+.4),r.darkConcreteMat);L.position.y=T-E/2,L.castShadow=!1,L.receiveShadow=!0,this.group.add(L),this.sections[M].band=L}p*=.965,_*=.965}const g=2+s;this.roof=new me,this.roof.position.y=g,this.group.add(this.roof);const m=r.darkConcreteMat,v=new _t(new li(e*.13,e*.13,4,10),m);v.position.set((Math.random()-.5)*e*.35,2,(Math.random()-.5)*i*.35),v.castShadow=!0,this.roof.add(v);const y=new _t(new re(3,2,3),m);if(y.position.set((Math.random()-.5)*e*.5,1,(Math.random()-.5)*i*.5),y.castShadow=!0,this.roof.add(y),Math.random()>.35){const M=new _t(new li(.18,.25,10+Math.random()*18,5),r.metalMat);M.position.set((Math.random()-.5)*e*.4,10,(Math.random()-.5)*i*.4),M.castShadow=!0,this.roof.add(M);const E=new _t(new yn(.55,6,5),r.redGlowMat);E.position.copy(M.position),E.position.y+=M.geometry.parameters.height/2,this.roof.add(E)}if(a==="commercial"||Math.random()>.55){const M=["九龍","HONG KONG","MONSTER","NIGHT MARKET","KAIJU","九龙城","APEX","TITAN"],E=["#ff3b5c","#ffb23b","#3bffe8","#ff5cf0","#8dff5c"],T=M[Math.floor(Math.random()*M.length)],x=E[Math.floor(Math.random()*E.length)],w=Ix(T,x),L=new _t(new hi(12,3),new Xe({map:w,transparent:!0,depthWrite:!1,toneMapped:!1,side:Ye}));L.position.set((Math.random()-.5)*e*.5,6+Math.random()*Math.max(4,s*.5),i/2+.15),this.group.add(L),this.neon=L,this.neonBaseOpacity=.95}if(s>90){const M=new _t(new yn(.8,6,5),r.redGlowMat);M.position.set(0,2+s+1.5,0),this.group.add(M),this.warningLight=M}this.updateBox()}updateBox(){this.box.min.set(this.x-this.halfW,0,this.z-this.halfD),this.box.max.set(this.x+this.halfW,this.height,this.z+this.halfD)}addCrack(t){if(!t||t.destroyed||t.cracks.length>=3)return;const e=new Xe({map:this.city.crackTex,transparent:!0,opacity:.72,depthWrite:!1,color:1118481,side:Ye,polygonOffset:!0,polygonOffsetFactor:-1}),i=new hi(t.width*(.5+Math.random()*.4),t.height*(.45+Math.random()*.4)),s=new _t(i,e);Math.random()>.5?(s.position.set(t.width/2+.06,0,(Math.random()-.5)*t.depth*.5),s.rotation.y=Math.PI/2):s.position.set((Math.random()-.5)*t.width*.5,0,t.depth/2+.06),s.position.y=0,t.mesh.add(s),t.cracks.push(s)}damage(t,e,i={}){if(this.destroyed||t<=0)return 0;this.hp-=t;const s=this.sections.filter(o=>!o.destroyed);if(!s.length)return this.collapseFrom(0),t;let a=s[s.length-1];if(e){const o=e.y,l=s.find(c=>o>=c.y-c.height/2&&o<=c.y+c.height/2);l&&(a=l)}a.hp-=t,this.addCrack(a);const r=this.city;if(Math.random()<.8){const o=new R(this.x+(Math.random()-.5)*this.width*.9,a.y+(Math.random()-.5)*a.height,this.z+this.depth/2+.5);r.effects.glass(o,Math.floor(5+t*.18)),Math.random()<.4&&r.audio.glass()}if(Math.random()<.45&&r.effects.dust(new R(this.x+(Math.random()-.5)*this.width,a.y,this.z+this.depth/2),3,6,9406331),this.hp<this.maxHp*.55&&(this.burning=Math.max(this.burning,3)),a.hp<=0||this.hp<=0){const o=this.sections.indexOf(a);this.collapseFrom(o)}return t}collapseFrom(t){if(this.destroyed)return;const e=this.city,i=this.sections;t=Math.max(0,Math.min(t,i.length-1));let s=!1;for(let r=t;r<i.length;r++){const o=i[r];if(o.destroyed)continue;s=!0,o.destroyed=!0,o.mesh.visible=!1,o.band&&(o.band.visible=!1);const l=Math.max(2,Math.floor(3*e.settings.destructionScale));for(let c=0;c<l;c++){const h=new R(o.width*(.15+Math.random()*.28),Math.max(1.5,o.height*(.18+Math.random()*.3)),o.depth*(.15+Math.random()*.28)),d=new R(this.x+(Math.random()-.5)*o.width*.9,o.y+(Math.random()-.5)*o.height,this.z+(Math.random()-.5)*o.depth*.9);e.effects.debris.spawn(d,h,{x:(Math.random()-.5)*28,y:4+Math.random()*18,z:(Math.random()-.5)*28},{spin:4,life:18+Math.random()*14})}e.effects.dust(new R(this.x,Math.max(2,o.y-o.height/2),this.z),o.width*.45,24,10129280),e.effects.smoke(new R(this.x,o.y,this.z),8,5590084);for(let c=0;c<5;c++){const h=new _t(new li(.08,.08,4+Math.random()*5,4),e.metalMat);h.position.set(this.x+(Math.random()-.5)*o.width,o.y-o.height/2,this.z+(Math.random()-.5)*o.depth),h.rotation.set((Math.random()-.5)*.7,0,(Math.random()-.5)*.7),e.group.add(h)}}if(!s)return;const a=i.filter(r=>!r.destroyed);if(this.height=a.length?Math.max(2,a[a.length-1].y+a[a.length-1].height/2):0,this.updateBox(),this.height<4){this.destroyed=!0,this.burning=8;for(let r=0;r<8;r++){const o=new R(3+Math.random()*8,1+Math.random()*3,3+Math.random()*8);e.effects.debris.spawn(new R(this.x+(Math.random()-.5)*this.width,2,this.z+(Math.random()-.5)*this.depth),o,{x:0,y:2,z:0},{life:60,spin:.5})}}e.effects.shakeCamera(.4,.8),e.audio.explosion(.9),e.destructionCount++,e.onDestruction?.(this)}update(t){if(this.burning>0&&(this.burning-=t,this.smokeTimer-=t,this.smokeTimer<=0)){this.smokeTimer=.35+Math.random()*.5;const e=4+Math.random()*Math.max(4,this.height);this.city.effects.fire(new R(this.x+(Math.random()-.5)*this.width,e,this.z+(Math.random()-.5)*this.depth),3,16742958,2.2),this.city.effects.smoke(new R(this.x+(Math.random()-.5)*this.width,e+3,this.z+(Math.random()-.5)*this.depth),4,3814448)}if(this.warningLight){const e=(performance.now()*.001+this.x)%2<.25;this.warningLight.visible=e}if(this.neon){const e=Math.sin(performance.now()*.002+this.z)>.96?.2:1;this.neon.material.opacity=(.4+this.city.night*.6)*e}}}class Zc{constructor(t,e){this.city=t,this.road=e.road,this.axis=e.axis,this.lane=e.lane,this.dir=e.dir,this.speed=e.speed,this.pos=e.pos,this.type=e.type,this.group=new me,this.wreck=null,this.alive=!0,this.stopped=0,this.crushTimer=0,this.build(),t.group.add(this.group),this.place()}build(){const t=this.city,e=[11811378,3104670,15262422,2237995,14066990,4161367,9190002],i=e[Math.floor(Math.random()*e.length)],s=new se({color:i,roughness:.35,metalness:.55}),a=t.vehicleDarkMat,r=this.type==="bus"?14:this.type==="truck"?11:7.5,o=this.type==="bus"?3.4:3.2,l=this.type==="bus"?4.2:2.4,c=new _t(new re(o,l,r),s);c.position.y=1.4+l/2,c.castShadow=!0,c.receiveShadow=!0,this.group.add(c);const h=new _t(new re(o*.9,l*.7,r*.4),a);h.position.set(0,1.4+l+l*.28,-r*.08),h.castShadow=!0,this.group.add(h),this.type==="bus"&&h.scale.set(1,.8,1.7);for(const f of[-1,1])for(const p of[-1,1]){const _=new _t(t.vehicleWheelGeo,a);_.position.set(f*o*.52,1.1,p*r*.3),_.rotation.z=Math.PI/2,_.castShadow=!0,this.group.add(_)}const d=new Xe({color:16773828,toneMapped:!1}),u=new Xe({color:16722474,toneMapped:!1});for(const f of[-1,1]){const p=new _t(new re(.6,.3,.1),d);p.position.set(f*o*.3,1.8,-r/2-.05),this.group.add(p);const _=new _t(new re(.5,.25,.1),u);_.position.set(f*o*.3,1.8,r/2+.05),this.group.add(_)}this.headMat=d,this.bodyMat=s,this.len=r,this.width=o}place(){this.axis==="x"?(this.group.position.set(this.pos,0,this.road+this.lane),this.group.rotation.y=this.dir>0?Math.PI/2:-Math.PI/2):(this.group.position.set(this.road+this.lane,0,this.pos),this.group.rotation.y=this.dir>0?0:Math.PI)}crush(t=1,e=null){this.alive&&(this.alive=!1,this.wreck={vx:(e?.x||Math.random()-.5)*22*t,vy:8+Math.random()*16*t,vz:(e?.z||Math.random()-.5)*22*t,ax:(Math.random()-.5)*8,ay:(Math.random()-.5)*8,az:(Math.random()-.5)*8,life:30},this.crushTimer=30,this.city.effects.sparks(this.group.position.clone().setY(4),12,16757575,20),this.city.effects.fire(this.group.position.clone().setY(4),8,16742958,2),this.city.audio.impact(1.2),Math.random()<.4&&this.city.audio.explosion(.6))}update(t,e){if(!this.alive){if(this.wreck){const a=this.wreck;a.vy-=42*t,this.group.position.x+=a.vx*t,this.group.position.y+=a.vy*t,this.group.position.z+=a.vz*t,this.group.rotation.x+=a.ax*t,this.group.rotation.y+=a.ay*t,this.group.rotation.z+=a.az*t,this.group.position.y<.6&&(this.group.position.y=.6,a.vy*=-.25,a.vx*=.6,a.vz*=.6,a.ax*=.6,a.az*=.6),a.life-=t,a.life<0&&(this.group.visible=!1,this.wreck=null)}return}let i=!1;for(const a of e)if(this.group.position.distanceTo(a.root.position)<55){i=!0;break}i?this.stopped=Math.min(1,this.stopped+t*4):this.stopped=Math.max(0,this.stopped-t*1.5),this.stopped<.4&&(this.pos+=this.dir*this.speed*t*(1-this.stopped));const s=260;this.pos>s&&(this.pos=-s),this.pos<-s&&(this.pos=s),this.place(),this.headMat&&this.headMat.color.setHex(this.city.night>.4?16773828:16775133)}}class Jc{constructor(t,e,i){this.city=t,this.group=new me,this.group.position.set(e,0,i);const s=[14271392,9067076,4869976,3038074,9056058,4155983,14209736],a=s[Math.floor(Math.random()*s.length)],r=new se({color:a,roughness:.8});this.body=new _t(new Fs(.42,1.15,4,6),r),this.body.position.y=1.9,this.body.castShadow=!0,this.group.add(this.body);const o=new _t(new yn(.34,8,6),new se({color:13212274,roughness:.7}));o.position.y=3,o.castShadow=!0,this.group.add(o),this.legL=new _t(new Fs(.14,.9,3,5),new se({color:2435118})),this.legL.position.set(-.22,.85,0),this.group.add(this.legL),this.legR=this.legL.clone(),this.legR.position.x=.22,this.group.add(this.legR),this.armL=new _t(new Fs(.11,.75,3,5),r),this.armL.position.set(-.55,2.1,0),this.group.add(this.armL),this.armR=this.armL.clone(),this.armR.position.x=.55,this.group.add(this.armR),this.alive=!0,this.speed=2.5+Math.random()*2,this.dir=Math.random()*Bs,this.panic=0,this.walk=Math.random()*Bs,this.turn=0,t.group.add(this.group)}kill(){this.alive&&(this.alive=!1,this.panic=0,this.group.rotation.z=Math.PI/2,this.group.position.y=.4,this.city.effects.dust(this.group.position.clone().setY(1),1.2,4,9075306))}update(t,e){if(!this.alive)return;let i=null,s=1e9;for(const r of e){const o=this.group.position.distanceTo(r.root.position);o<95&&o<s&&(i=r,s=o)}if(i){this.panic=Math.min(1,this.panic+t*2);const r=this.group.position.x-i.root.position.x,o=this.group.position.z-i.root.position.z;this.dir=Math.atan2(r,o),this.speed=12}else this.panic=Math.max(0,this.panic-t*.5),this.speed=2.5,this.turn-=t,this.turn<=0&&(this.turn=2+Math.random()*5,this.dir+=(Math.random()-.5)*1.2);this.group.position.x+=Math.sin(this.dir)*this.speed*t,this.group.position.z+=Math.cos(this.dir)*this.speed*t,Math.abs(this.group.position.x)>200&&(this.dir=Math.PI-this.dir),Math.abs(this.group.position.z)>200&&(this.dir=-this.dir),this.group.rotation.y=this.dir,this.walk+=t*(this.panic>.2?16:6);const a=Math.sin(this.walk)*(this.panic>.2?.9:.45);this.legL.rotation.x=a,this.legR.rotation.x=-a,this.armL.rotation.x=-a*.8,this.armR.rotation.x=a*.8,this.panic>.3&&(this.armL.rotation.z=.8,this.armR.rotation.z=-.8),this.group.position.y=Math.abs(Math.sin(this.walk))*.08}}class as{constructor(t,e,i,s){this.city=t,this.type=e,this.group=new me,this.group.position.set(i,0,s),this.alive=!0,this.vx=0,this.vz=0,this.vy=0,this.build(),t.group.add(this.group)}build(){const t=this.city;if(this.type==="tree"){const e=new _t(new li(.3,.5,4,6),t.barkMat);e.position.y=2,e.castShadow=!0,this.group.add(e);for(let i=0;i<4;i++){const s=new _t(new or(2.4+Math.random()*1.6,1),t.leafMat);s.position.set((Math.random()-.5)*3,5+Math.random()*3,(Math.random()-.5)*3),s.castShadow=!0,this.group.add(s)}}else if(this.type==="streetlight"){const e=new _t(new li(.14,.22,12,6),t.metalMat);e.position.y=6,e.castShadow=!0,this.group.add(e);const i=new _t(new re(3.5,.2,.2),t.metalMat);i.position.set(1.5,12,0),this.group.add(i);const s=new _t(new yn(.35,8,6),t.streetGlowMat);s.position.set(3.2,11.8,0),this.group.add(s);const a=new _t(new Zs(4.5,9,16,1,!0),t.lightConeMat);a.position.set(3.2,7.5,0),this.group.add(a),this.cone=a}else if(this.type==="barrier"){const e=new _t(new re(4,1.2,.6),t.barrierMat);e.position.y=.8,e.castShadow=!0,this.group.add(e);const i=new _t(new re(4.1,.2,.62),t.yellowMat);i.position.y=1.1,this.group.add(i)}else if(this.type==="bench"){const e=new _t(new re(3,.25,1),t.barkMat);e.position.y=1,this.group.add(e);for(const i of[-1,1]){const s=new _t(new re(.2,1,.8),t.metalMat);s.position.set(i*1.1,.5,0),this.group.add(s)}}else if(this.type==="dumpster"){const e=new _t(new re(3.4,2.4,2),t.greenMat);e.position.y=1.4,e.castShadow=!0,this.group.add(e)}}knock(t,e){this.alive&&(this.alive=!1,this.vx=(e?.x||Math.random()-.5)*t*12,this.vz=(e?.z||Math.random()-.5)*t*12,this.vy=5+Math.random()*8)}update(t){if(this.alive){this.type==="streetlight"&&this.cone&&(this.cone.material.opacity=this.city.night*.12);return}this.vy-=30*t,this.group.position.x+=this.vx*t,this.group.position.y+=this.vy*t,this.group.position.z+=this.vz*t,this.group.rotation.x+=this.vx*t*.05,this.group.rotation.z+=this.vz*t*.05,this.group.position.y<.5&&(this.group.position.y=.5,this.vy*=-.2,this.vx*=.7,this.vz*=.7,Math.abs(this.vy)<.5&&(this.vx=0,this.vz=0,this.vy=0))}}class Nx{constructor(t,e,i,s){this.scene=t,this.settings=e,this.effects=i,this.audio=s,this.group=new me,t.add(this.group),this.buildings=[],this.vehicles=[],this.pedestrians=[],this.props=[],this.windowMaterials=[],this.puddles=[],this.streetLights=[],this.night=.5,this.destructionCount=0,this.onDestruction=null,this.boxGeo=new re(1,1,1),this.vehicleWheelGeo=new li(1.1,1.1,.5,10),this.crackTex=Lx(),this.windowTextures=[];for(let a=0;a<8;a++)this.windowTextures.push(Px(a+3));this.asphaltTex=Rx(),this.concreteTex=Cx(),this.materials(),this.buildGround(),this.buildRoads(),this.buildCity(),this.buildHarbor(),this.buildBridge(),this.buildMountains(),this.buildPlaza(),this.spawnTraffic(),this.spawnCrowd(),this.spawnProps(),this.setNight(.5)}materials(){this.asphaltMat=new se({map:this.asphaltTex,color:10132122,roughness:.92,metalness:.05}),this.concreteMat=new se({map:this.concreteTex,color:11053220,roughness:.9,metalness:.02}),this.darkConcreteMat=new se({map:this.concreteTex,color:6184280,roughness:.92}),this.metalMat=new se({color:5922662,roughness:.35,metalness:.85}),this.vehicleDarkMat=new se({color:1513757,roughness:.4,metalness:.5}),this.barkMat=new se({color:4863014,roughness:.95}),this.leafMat=new se({color:3034410,roughness:.9}),this.barrierMat=new se({color:13654570,roughness:.7}),this.yellowMat=new se({color:16763195,roughness:.5}),this.greenMat=new se({color:2972221,roughness:.7,metalness:.2}),this.redGlowMat=new Xe({color:16722474,toneMapped:!1}),this.streetGlowMat=new Xe({color:16767392,toneMapped:!1}),this.lightConeMat=new Xe({color:16767392,transparent:!0,opacity:.06,side:Ye,depthWrite:!1,blending:ri}),this.puddleMat=new se({color:1319982,roughness:.08,metalness:.85,transparent:!0,opacity:0}),this.lineMat=new Xe({color:14209725,transparent:!0,opacity:.55}),this.waterMat=new se({color:664882,roughness:.14,metalness:.72,bumpMap:Dx(),bumpScale:.8})}buildGround(){const t=new _t(new hi(1600,1600),this.asphaltMat);t.rotation.x=-Math.PI/2,t.receiveShadow=!0,t.position.y=-.05,this.group.add(t),this.ground=t;const e=new _t(new hi(4e3,4e3),new se({color:2106922,roughness:.95}));e.rotation.x=-Math.PI/2,e.position.y=-.12,e.receiveShadow=!0,this.group.add(e)}buildRoads(){const t=[0,-86,86,-172,172],e=420;for(const s of t)for(const a of["x","z"]){const r=new _t(new hi(24,e),this.asphaltMat);r.rotation.x=-Math.PI/2,a==="x"?(r.position.set(0,.02,s),r.rotation.z=Math.PI/2):r.position.set(s,.02,0),r.receiveShadow=!0,this.group.add(r);for(let o=-e/2;o<e/2;o+=13){if(Math.abs(o)<14)continue;const l=new _t(new hi(.35,4.5),this.lineMat);l.rotation.x=-Math.PI/2,a==="x"?(l.position.set(o,.035,s),l.rotation.z=Math.PI/2):l.position.set(s,.035,o),this.group.add(l)}}for(const s of[-86,0,86])for(const a of[-86,0,86])for(let r=-5;r<=5;r++){const o=new _t(new hi(1.3,7),this.lineMat);o.rotation.x=-Math.PI/2,o.position.set(s+r*2.1,.04,a+14),this.group.add(o);const l=o.clone();l.position.z=a-14,this.group.add(l)}const i=[-129,-43,43,129];for(const s of i)for(const a of i)for(const[r,o,l,c]of[[0,-33,68,1.2],[0,33,68,1.2],[-33,0,1.2,68],[33,0,1.2,68]]){const h=new _t(new re(l,.55,c),this.concreteMat);h.position.set(s+r,.22,a+o),h.receiveShadow=!0,this.group.add(h)}}buildCity(){const t=[-129,-43,43,129],e=(i,s)=>Math.abs(i)<66&&s>-122&&s<232;for(const i of t)for(const s of t){if(Math.abs(i)<=43&&Math.abs(s)<=43)continue;const r=new _t(new re(64,.35,64),this.concreteMat);r.position.set(i,.17,s),r.receiveShadow=!0,this.group.add(r);const o=2+Math.floor(we()*2),l=[];for(let c=0;c<o;c++){let h=18+we()*16,d=18+we()*16,u=i+(we()-.5)*(58-h),f=s+(we()-.5)*(58-d);if(e(u,f))continue;let p=0;for(;l.some(E=>Math.abs(E.x-u)<(E.w+h)/2+3&&Math.abs(E.z-f)<(E.d+d)/2+3)&&p++<20;)u=i+(we()-.5)*(58-h),f=s+(we()-.5)*(58-d);if(e(u,f)||l.some(E=>Math.abs(E.x-u)<(E.w+h)/2+2&&Math.abs(E.z-f)<(E.d+d)/2+2))continue;l.push({x:u,z:f,w:h,d});const _=Math.hypot(u,f),m=(_<130?110:_<200?80:55)+we()*120-20,v=4+Math.floor(we()*5),y=180+m*1.8,M=we()>.55?"glass":we()>.4?"commercial":"apartment";this.buildings.push(new Na(this,u,f,{width:h,depth:d,height:Math.max(35,m),sections:v,hp:y,style:M}))}}for(let i=0;i<18;i++){const s=i/18*Bs+we()*.2,a=245+we()*90,r=Math.cos(s)*a,o=Math.sin(s)*a;if(Math.abs(r)<220&&Math.abs(o)<220||Math.abs(r)<90&&o>120)continue;const l=20+we()*25,c=20+we()*25,h=30+we()*85;this.buildings.push(new Na(this,r,o,{width:l,depth:c,height:h,sections:3+Math.floor(we()*3),hp:130+h*1.4,style:"apartment"}))}for(const[i,s,a,r,o]of[[-155,155,30,30,230],[155,-155,28,28,210],[-160,-160,26,26,190]])this.buildings.push(new Na(this,i,s,{width:a,depth:r,height:o,sections:9,hp:520,style:"glass"}))}buildHarbor(){const t=new _t(new hi(1500,1800),this.waterMat);t.rotation.x=-Math.PI/2,t.position.set(980,.06,0),t.receiveShadow=!0,this.group.add(t),this.water=t;const e=new _t(new re(100,1.2,520),this.concreteMat);e.position.set(270,.6,0),e.receiveShadow=!0,this.group.add(e);for(let i=0;i<6;i++){const s=new _t(new li(.7,.7,2.2,6),this.metalMat);s.position.set(315,1.2,-200+i*80),this.group.add(s)}for(let i=0;i<2;i++){const s=new me,a=new _t(new re(55,12,220),new se({color:3813162,roughness:.8}));a.position.y=4,a.castShadow=!0,s.add(a);const r=new _t(new re(52,1,210),new se({color:5984584,roughness:.8}));r.position.y=10,s.add(r);const o=[12728874,2779842,2794074,14196778,8006282];for(let c=0;c<32;c++){const h=new _t(new re(9,6,18),new se({color:o[c%o.length],roughness:.7,metalness:.3}));h.position.set((c%4-1.5)*11,14,-85+Math.floor(c/4)*20),h.castShadow=!0,s.add(h)}const l=new _t(new re(20,18,24),new se({color:14209732,roughness:.6}));l.position.set(0,19,90),s.add(l),s.position.set(430+i*220,0,-120+i*300),s.rotation.y=Math.PI/2+(i?.06:-.04),this.group.add(s)}for(let i=0;i<3;i++){const s=new me,a=this.metalMat;for(const[l,c]of[[-6,-6],[6,-6],[-6,6],[6,6]]){const h=new _t(new re(1.4,34,1.4),a);h.position.set(l,17,c),h.castShadow=!0,s.add(h)}const r=new _t(new re(50,1.6,4),a);r.position.set(10,34,0),s.add(r);const o=new _t(new re(6,5,6),this.yellowMat);o.position.set(0,32,0),s.add(o),s.position.set(290,1,-180+i*160),this.group.add(s)}}buildBridge(){const t=new me,e=new se({color:5593696,roughness:.7,metalness:.4}),i=new _t(new re(650,3,18),e);i.position.set(600,28,-260),i.castShadow=!0,i.receiveShadow=!0,t.add(i);for(const s of[350,850]){const a=new me;for(const o of[-1,1]){const l=new _t(new re(4,120,4),e);l.position.set(0,60,o*16),l.castShadow=!0,a.add(l)}const r=new _t(new re(5,5,38),e);r.position.y=78,a.add(r),a.position.set(s,0,-260),t.add(a);for(let o=0;o<12;o++){const l=o/11,c=s+(l-.5)*300,h=78-Math.abs(l-.5)*52,d=new dl(new Te().setFromPoints([new R(s,112,-260),new R(c,h,-260)]),new ar({color:10134445,transparent:!0,opacity:.7}));t.add(d)}}for(let s=0;s<6;s++){const a=new _t(new re(8,28,8),this.concreteMat);a.position.set(320+s*100,14,-260),a.castShadow=!0,t.add(a)}this.group.add(t)}buildMountains(){const t=new Xe({color:2436661,fog:!1});for(let e=0;e<16;e++){const i=-Math.PI*.9+e/15*Math.PI*1.1,s=800+we()*450,a=180+we()*420,r=new Zs(220+we()*260,a,5+Math.floor(we()*3)),o=r.attributes.position;for(let c=0;c<o.count;c++)o.setX(c,o.getX(c)*(.75+we()*.5)),o.setZ(c,o.getZ(c)*(.75+we()*.5));r.computeVertexNormals();const l=new _t(r,t);l.position.set(Math.cos(i)*s,a/2-20,Math.sin(i)*s),l.rotation.y=we()*Bs,this.group.add(l)}}buildPlaza(){const t=new _t(new re(124,.3,124),this.concreteMat);t.position.set(0,.15,0),t.receiveShadow=!0,this.group.add(t);const e=new me,i=new _t(new li(8,10,3,8),this.darkConcreteMat);i.position.y=1.5,e.add(i);const s=new _t(new li(2,2.8,20,8),this.concreteMat);s.position.y=12,s.rotation.z=.12,e.add(s);const a=new _t(new or(3,0),this.darkConcreteMat);a.position.set(-1.5,23,0),e.add(a),e.position.set(0,0,-20),this.group.add(e);for(let r=0;r<12;r++){const o=r/12*Bs;this.props.push(new as(this,"tree",Math.cos(o)*48,Math.sin(o)*48)),r%3===0&&this.props.push(new as(this,"bench",Math.cos(o)*38,Math.sin(o)*38))}for(let r=0;r<16;r++){const o=new _t(new ul(2+Math.random()*6,12),this.puddleMat);o.rotation.x=-Math.PI/2,o.position.set((Math.random()-.5)*380,.06,(Math.random()-.5)*380),o.scale.y=.4+Math.random()*.7,this.group.add(o),this.puddles.push(o)}}spawnTraffic(){const t=[-172,-86,0,86,172],e=["car","car","car","truck","bus"];for(let i=0;i<22;i++){const s=Math.random()>.5?"x":"z",a=t[Math.floor(Math.random()*t.length)],r=Math.random()>.5?1:-1,o=r>0?-5.5:5.5,l=(Math.random()-.5)*400;this.vehicles.push(new Zc(this,{axis:s,road:a,lane:o,dir:r,pos:l,speed:14+Math.random()*12,type:e[Math.floor(Math.random()*e.length)]}))}}spawnCrowd(){for(let t=0;t<40;t++){let e=(Math.random()-.5)*360,i=(Math.random()-.5)*360;(Math.abs(e)<20||Math.abs(i)<20)&&(e+=30),this.pedestrians.push(new Jc(this,e,i))}}spawnProps(){const t=[-172,-86,0,86,172];for(const e of t)for(const i of t)Math.random()>.35&&this.props.push(new as(this,"streetlight",e+14,i+14)),Math.random()>.7&&this.props.push(new as(this,"barrier",e-12,i+8));for(let e=0;e<14;e++)this.props.push(new as(this,"dumpster",(Math.random()-.5)*300,(Math.random()-.5)*300))}setNight(t){this.night=t;for(const e of this.windowMaterials)e.emissiveIntensity=t*1.9;for(const e of this.puddles)e.material.opacity=this.wet?.65:0;this.water&&(this.water.material.emissive=new Vt(397850).multiplyScalar(t*.3));for(const e of this.vehicles)e.headMat&&e.headMat.color.setHex(t>.35?16773828:16775133);for(const e of this.props)e.cone&&(e.cone.material.opacity=t*.12)}setWetness(t){this.wet=t,this.asphaltMat.roughness=t?.32:.92,this.asphaltMat.metalness=t?.35:.05,this.asphaltMat.color.setHex(t?9079434:10132122),this.concreteMat.roughness=t?.55:.9;for(const e of this.puddles)e.material.opacity=t?.62:0;this.water&&(this.water.material.roughness=t?.08:.14)}setFog(t,e){}damageAt(t,e,i,s={}){let a=0;for(const r of this.buildings){if(r.destroyed)continue;const o=Math.max(r.box.min.x-t.x,0,t.x-r.box.max.x),l=Math.max(r.box.min.z-t.z,0,t.z-r.box.max.z),c=Math.hypot(o,l);if(c<=e){const h=1-c/Math.max(1,e);a+=r.damage(i*(.45+h*.75),t,s)}}for(const r of this.vehicles)r.alive&&r.group.position.distanceTo(t)<e+6&&(r.crush(1,new R().subVectors(r.group.position,t).normalize()),a++);for(const r of this.pedestrians)r.alive&&r.group.position.distanceTo(t)<e+3&&(Math.random()<.4?r.kill():r.panic=1,a++);for(const r of this.props)r.alive&&r.group.position.distanceTo(t)<e+4&&(r.knock(1,new R().subVectors(r.group.position,t).normalize()),a++);return a}raycastBuilding(t,e,i=300){const s=new Ks(t,e.clone().normalize());let a=null;for(const r of this.buildings){if(r.destroyed)continue;const o=s.intersectBox(r.box,new R);if(o){const l=o.distanceTo(t);l<=i&&(!a||l<a.distance)&&(a={distance:l,point:o,building:r})}}return a}collideCircle(t,e,i){let s=0,a=0,r=null;for(const o of this.buildings){if(o.destroyed)continue;const l=o.box.min.x-i,c=o.box.max.x+i,h=o.box.min.z-i,d=o.box.max.z+i;if(t>l&&t<c&&e>h&&e<d){const u=t-l,f=c-t,p=e-h,_=d-e,g=Math.min(u,f,p,_);g===u?s-=u:g===f?s+=f:g===p?a-=p:a+=_,r=o}}return{pushX:s,pushZ:a,hit:r}}update(t,e,i){for(const s of this.buildings)s.update(t);for(const s of this.vehicles)s.update(t,i);for(const s of this.pedestrians)s.update(t,i);for(const s of this.props)s.update(t);if(this.water){const s=performance.now()*5e-5;this.waterMat.bumpMap.offset.set(s*.4,s)}this.pedestrians.length<24&&this.spawnCrowd()}spawnVehicle(t="car",e=null){const i=e||new R((Math.random()-.5)*120,0,(Math.random()-.5)*120),s=new Zc(this,{axis:"z",road:i.x,lane:0,dir:1,pos:i.z,speed:10,type:t});return this.vehicles.push(s),s}spawnNPC(t){const e=t||new R((Math.random()-.5)*100,0,(Math.random()-.5)*100),i=new Jc(this,e.x,e.z);return this.pedestrians.push(i),i}spawnProp(t,e){const i=new as(this,t,e.x,e.z);return this.props.push(i),i}spawnBuilding(t,e,i=26,s=26,a=90){const r=Math.max(3,Math.min(10,Math.round(a/26))),o=Math.random()>.5?"glass":"commercial",l=new Na(this,t,e,{width:i,depth:s,height:a,sections:r,hp:180+a*1.8,style:o});return this.buildings.push(l),this.setNight(this.night),this.setWetness(this.wet),l}reset(){this.dispose(),this.buildings=[],this.vehicles=[],this.pedestrians=[],this.props=[],this.windowMaterials=[],this.puddles=[],this.destructionCount=0,this.group=new me,this.scene.add(this.group),this.buildGround(),this.buildRoads(),this.buildCity(),this.buildHarbor(),this.buildBridge(),this.buildMountains(),this.buildPlaza(),this.spawnTraffic(),this.spawnCrowd(),this.spawnProps(),this.setNight(this.night),this.setWetness(this.wet)}dispose(){this.scene.remove(this.group),this.group.traverse(t=>{t.geometry&&t.geometry!==this.boxGeo&&t.geometry!==this.vehicleWheelGeo&&t.geometry.dispose?.(),t.material&&t.material!==this.asphaltMat&&t.material!==this.concreteMat&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose?.()):t.material.dispose?.())})}}function Ux(n){return 1-Math.pow(1-n,3)}function Fx(n){return n*n*n}function Ci(n){return n*n*(3-2*n)}function xi(n){return Math.max(0,Math.min(1,n))}function Ox(n,t){return n.bases.get(t)||{x:0,y:0,z:0}}function O(n,t,e=0,i=0,s=0){if(!t)return;const a=Ox(n,t);t.rotation.set(a.x+e,a.y+i,a.z+s)}function kx(n){const t=[n.pelvis,n.torso,n.neck,n.head,n.jaw,n.armL?.root,n.armL?.upper,n.armL?.end,n.armR?.root,n.armR?.upper,n.armR?.end,n.legL?.root,n.legL?.upper,n.legL?.end,n.legR?.root,n.legR?.upper,n.legR?.end];for(const e of t)e&&O(n,e,0,0,0);for(const e of n.tail||[])O(n,e,0,0,0);for(const e of n.segments||[])O(n,e,0,0,0);for(const e of n.tentacles||[])for(const i of e)O(n,i,0,0,0);for(const e of n.necks||[]){for(const i of e.chain)O(n,i,0,0,0);O(n,e.head,0,0,0),O(n,e.jaw,0,0,0)}for(const e of[n.wingL,n.wingR])e&&O(n,e,0,0,0);for(const e of n.legs||[])O(n,e.base,0,0,0),O(n,e.limb.root,0,0,0),O(n,e.limb.upper,0,0,0);for(const e of Object.keys(n))/^leg[FLR]/.test(e)&&n[e]&&n[e].root&&(O(n,n[e].root,0,0,0),O(n,n[e].upper,0,0,0),O(n,n[e].end,0,0,0));n.axe&&O(n,n.axe,0,0,0),n.visual.position.set(0,0,0)}function Fn(n,t,e=.05,i=1.3,s=0){(n.tail||[]).forEach((a,r)=>{O(n,a,0,Math.sin(t*i-r*.45+s)*e,0)})}function Si(n,t,e=.1,i=1.2,s=0){const a=Math.sin(t*i)*e+s;n.wingL&&O(n,n.wingL,0,0,-a),n.wingR&&O(n,n.wingR,0,0,a)}function In(n,t,e,i={}){const s=t.walkPhase||0,a=i.amp??.5,r=t.speed||0,o=t.running,l=Math.abs(Math.sin(s))*(o?.14:.09);n.visual.position.y=l;const c=Math.sin(s)*a*(o?1.25:1);O(n,n.legL?.root,c,0,0),O(n,n.legR?.root,-c,0,0),O(n,n.legL?.upper,Math.max(0,-Math.sin(s))*.7,0,0),O(n,n.legR?.upper,Math.max(0,Math.sin(s))*.7,0,0),O(n,n.legL?.end,-Math.max(0,-Math.sin(s))*.3,0,0),O(n,n.legR?.end,-Math.max(0,Math.sin(s))*.3,0,0);const h=Math.sin(s)*(i.armAmp??.35);return O(n,n.armL?.root,-h,0,i.armOut??0),O(n,n.armR?.root,h,0,-(i.armOut??0)),O(n,n.torso,.02*Math.sin(s*2),0,Math.sin(s)*.035),O(n,n.pelvis,0,0,Math.sin(s)*.03),O(n,n.neck,-.03*Math.sin(s*2),0,-Math.sin(s)*.02),O(n,n.head,.02*Math.sin(s*2+1),Math.sin(e*.7)*.05,0),Fn(n,e,.07+r*.0015,1.5,s*.3),l}function Dn(n,t,e){const i=Math.sin(e*1.15)*.02;n.visual.position.y=i,O(n,n.torso,i*.8,Math.sin(e*.35)*.025,Math.sin(e*.5)*.02),O(n,n.neck,-i,Math.sin(e*.45)*.06,0),O(n,n.head,Math.sin(e*.6)*.04,Math.sin(e*.38)*.18,0),O(n,n.armL?.root,Math.sin(e*.7)*.04,0,Math.sin(e*.5)*.03),O(n,n.armR?.root,Math.sin(e*.66+1)*.04,0,-Math.sin(e*.5)*.03),Fn(n,e,.06,.8)}function Bx(n,t,e,i=!1){const s=Ci(xi(t/.32)),a=Ci(xi((t-.32)/.16)),r=Ci(xi((t-.55)/.45)),o=i?n.armR:n.armL,l=i?n.armL:n.armR;o&&(O(n,o.root,.7*s-1.9*a+1.2*r,0,.2*s),O(n,o.upper,-.4*s+.8*a-.4*r,0,0)),l&&O(n,l.root,.25*a,0,0),O(n,n.torso,-.1*s+.3*a,i?-.35*a:.35*a,0),O(n,n.neck,.08*a,0,0),e==="kong"&&(O(n,n.torso,-.15*s+.25*a,0,0),O(n,n.pelvis,0,i?-.18*a:.18*a,0))}function zx(n,t,e,i){const s=Ci(xi(t/.4)),a=Ci(xi((t-.4)/.15)),r=Ci(xi((t-.58)/.42));if(e==="godzilla"||e==="mecha")e==="godzilla"?(O(n,n.pelvis,0,-.55*s+.9*a-.35*r,0),(n.tail||[]).forEach((o,l)=>O(n,o,.05*s,-.2*s+.55*a*(1-l*.06),0)),O(n,n.torso,.1*s,.3*a,0)):(O(n,n.legR?.root,-.2*s-1.6*a+.6*r,0,0),O(n,n.legR?.upper,.3*s+1*a,0,0),O(n,n.torso,.3*s-.2*a,0,0));else if(e==="kong")O(n,n.armL?.root,1*s-2.7*a+1.4*r,0,.2),O(n,n.armR?.root,1*s-2.7*a+1.4*r,0,-.2),O(n,n.torso,-.35*s+.55*a-.2*r,0,0),O(n,n.neck,-.2*s+.3*a,0,0);else if(e==="ghidorah")(n.necks||[]).forEach((o,l)=>{o.chain.forEach((c,h)=>O(n,c,(l===1?-.4:-.2)*s+.6*a,0,(l-1)*.2*a))}),O(n,n.torso,-.2*s+.4*a,0,0),Si(n,0,.25,0,.35*a);else if(e==="rodan"||e==="mothra")Si(n,0,.6,0,.4*s-.5*a),O(n,n.torso,-.2*s+.3*a,0,0),O(n,n.neck,-.2*s+.5*a,0,0);else if(e==="shimo"){O(n,n.torso,-.2*s+.4*a,0,0),O(n,n.neck,-.25*s+.5*a,0,0);for(const o of["legFL","legFR","legBL","legBR"]){const l=n[o];l&&O(n,l.root,-.2*s+.3*a,0,0)}}else e==="scylla"?((n.tentacles||[]).forEach((o,l)=>o.forEach((c,h)=>O(n,c,.2*s+.5*a,0,Math.sin(l+h)*.3*a))),O(n,n.torso,-.2*s+.3*a,0,0)):e==="tiamat"&&((n.segments||[]).forEach((o,l)=>O(n,o,-.2*s+.5*a,.2*a*Math.sin(l),0)),O(n,n.neck,0,0,0))}function Gx(n,t,e){const i=e.special.type,s=Ci(xi(t/.35)),a=Ci(xi((t-.35)/.15)),r=Ci(xi((t-.72)/.28)),o=Math.max(s*.7,a*.9)*(1-r*.4);O(n,n.jaw,o*.75,0,0),i==="beam"||i==="tripleBeam"||i==="freezeBeam"||i==="godrays"?(O(n,n.neck,.35*s-.55*a+.2*r,0,0),O(n,n.head,.2*s-.15*a,0,0),O(n,n.torso,-.12*s+.1*a,0,0),i==="tripleBeam"&&n.necks&&n.necks.forEach((l,c)=>{l.chain.forEach((h,d)=>O(n,h,(.15+d*.03)*s-.25*a,0,(c-1)*.16*a)),O(n,l.head,.1*s-.1*a,0,0),O(n,l.jaw,o*.8,0,0)}),i==="godrays"&&(Si(n,0,.2,0,.55*s),O(n,n.neck,.4*s-.2*a,0,0))):i==="pulse"||i==="shockwave"||i==="acid"?(O(n,n.armL?.root,.4*s-1.3*a,0,-.5*s),O(n,n.armR?.root,.4*s-1.3*a,0,.5*s),O(n,n.torso,-.3*s+.5*a,0,0),O(n,n.neck,-.25*s+.45*a,0,0),n.visual.position.y=Math.max(0,Math.sin(t*Math.PI))*.16):(i==="cleave"||i==="firestorm")&&(O(n,n.armR?.root,.9*s-2.5*a+1*r,0,0),O(n,n.armL?.root,.4*s-.8*a,0,0),O(n,n.torso,-.35*s+.5*a,-.4*a,0),i==="firestorm"&&(Si(n,0,.5,0,.4*s-.6*a),O(n,n.neck,.35*s-.5*a,0,0)))}function Hx(n,t,e){const i=Ci(xi(t/.25)),s=Ci(xi((t-.7)/.3)),a=i*(1-s*.6);O(n,n.jaw,.9*a,0,0),O(n,n.neck,.4*a,0,0),O(n,n.head,.25*a,0,0),O(n,n.torso,.12*a,0,0),O(n,n.armL?.root,.35*a,0,-.5*a),O(n,n.armR?.root,.35*a,0,.5*a),e==="kong"&&(O(n,n.armL?.root,-.6*a,0,-.5*a),O(n,n.armR?.root,-.6*a,0,.5*a),O(n,n.armL?.upper,1.2*a,0,0),O(n,n.armR?.upper,1.2*a,0,0)),n.wingL&&Si(n,0,.2,0,.5*a),e==="ghidorah"&&n.necks?.forEach((r,o)=>{r.chain.forEach((l,c)=>O(n,l,.2*a,0,(o-1)*.15*a)),O(n,r.jaw,.8*a,0,0)})}function Vx(n){O(n,n.armL?.root,-1.1,0,-.35),O(n,n.armR?.root,-1.1,0,.35),O(n,n.armL?.upper,1,0,0),O(n,n.armR?.upper,1,0,0),O(n,n.torso,.15,0,0),O(n,n.neck,.18,0,0)}function Qc(n,t,e=1){const i=Math.sin(xi(t)*Math.PI)*.45;O(n,n.torso,-.25*i,.15*i*e,.2*i*e),O(n,n.neck,-.35*i,0,.1*i),O(n,n.head,-.2*i,0,0),O(n,n.armL?.root,.3*i,0,-.2*i),O(n,n.armR?.root,.3*i,0,.2*i)}function Wx(n,t,e){const i=e*1.4,s=Math.sin(i)*.4;O(n,n.armL?.root,.5+Math.sin(i*1.1)*.6,0,-.5+s*.4),O(n,n.armR?.root,.5+Math.cos(i*.9)*.6,0,.5-s*.4),O(n,n.armL?.upper,.5+Math.sin(i*1.3)*.5,0,0),O(n,n.armR?.upper,.5+Math.cos(i*1.2)*.5,0,0),O(n,n.legL?.root,.3+Math.sin(i*.8)*.4,0,-.1),O(n,n.legR?.root,.3+Math.cos(i*.85)*.4,0,.1),O(n,n.neck,-.15+Math.sin(i*.7)*.15,Math.sin(i*.5)*.2,0),O(n,n.head,Math.sin(i*.9)*.2,Math.sin(i*.6)*.2,0),O(n,n.jaw,.2+Math.sin(i*1.2)*.15,0,0),Fn(n,e,.12,1.1),n.wingL&&Si(n,e,.25,2,.1),n.necks&&n.necks.forEach((a,r)=>{a.chain.forEach((o,l)=>O(n,o,Math.sin(i+r+l)*.15,Math.sin(i*.8+r)*.15,0)),O(n,a.jaw,.3+Math.sin(i+r)*.2,0,0)}),n.legs&&n.legs.forEach((a,r)=>{O(n,a.limb.root,.3+Math.sin(i*.8+r)*.4,0,a.side*.2)}),n.segments&&n.segments.forEach((a,r)=>O(n,a,Math.sin(i*.7+r*.4)*.15,Math.sin(i*.5+r*.3)*.2,0)),n.tentacles&&n.tentacles.forEach((a,r)=>a.forEach((o,l)=>O(n,o,Math.sin(i*1.2+r+l)*.2,0,Math.sin(i+r+l)*.2)))}function Xx(n,t,e,i){switch(t){case"godzilla":Dn(n,e,i),Fn(n,i,.1,.9);break;case"kong":Dn(n,e,i),O(n,n.torso,.22,0,0),O(n,n.armL?.root,.15,0,-.12),O(n,n.armR?.root,.15,0,.12),O(n,n.neck,-.12,0,0);break;case"mecha":Dn(n,e,i),O(n,n.torso,0,Math.sin(i*.4)*.02,0),O(n,n.head,0,Math.sin(i*.9)*.25,0);break;case"ghidorah":Dn(n,e,i),Si(n,i,.08,.8,.08),n.necks?.forEach((s,a)=>{s.chain.forEach((r,o)=>O(n,r,Math.sin(i*.8+a*1.3+o*.4)*.07,0,Math.sin(i*.6+a)*.06)),O(n,s.head,Math.sin(i*.9+a)*.06,Math.sin(i*.5+a*1.7)*.2,0),O(n,s.jaw,Math.max(0,Math.sin(i*.5+a))*.06,0,0)}),Fn(n,i,.08,.7);break;case"rodan":Dn(n,e,i),Si(n,i,.16,1.1,.12),O(n,n.neck,.1,Math.sin(i*.5)*.2,0);break;case"mothra":Dn(n,e,i),Si(n,i,.22,1.6,.18),n.visual.position.y=Math.sin(i*1.4)*.08,O(n,n.neck,.1,Math.sin(i*.4)*.2,0);break;case"shimo":{const s=Math.sin(i*.8)*.02;n.visual.position.y=s,O(n,n.torso,s,0,Math.sin(i*.4)*.02),O(n,n.neck,Math.sin(i*.6)*.04,Math.sin(i*.4)*.12,0),Fn(n,i,.08,.7);break}case"scylla":{const s=Math.sin(i*1.1)*.02;n.visual.position.y=s,O(n,n.torso,s,0,0),O(n,n.neck,Math.sin(i*.7)*.05,Math.sin(i*.5)*.12,0),n.legs?.forEach((a,r)=>{O(n,a.base,0,0,Math.sin(i*.9+r)*.04),O(n,a.limb.root,0,0,Math.sin(i*.8+r*.8)*.05)}),n.tentacles?.forEach((a,r)=>a.forEach((o,l)=>O(n,o,Math.sin(i*1.3+r+l)*.1,0,Math.sin(i+r*.7+l)*.12)));break}case"tiamat":{n.visual.position.y=Math.sin(i*1.2)*.04,n.segments?.forEach((s,a)=>O(n,s,Math.sin(i*.9+a*.45)*.05,Math.sin(i*.7+a*.35)*.09,0)),O(n,n.neck,0,0,0),O(n,n.head,Math.sin(i*.8)*.08,Math.sin(i*.5)*.25,0);break}default:Dn(n,e,i)}}function qx(n,t,e,i){switch(t){case"godzilla":In(n,e,i,{amp:.48,armAmp:.3,armOut:.06});break;case"kong":In(n,e,i,{amp:.38,armAmp:.6,armOut:.15}),O(n,n.torso,.32+Math.sin(e.walkPhase*2)*.03,0,0),O(n,n.neck,-.22,0,0);break;case"mecha":In(n,e,i,{amp:.36,armAmp:.22,armOut:0}),O(n,n.torso,.04,0,0);break;case"ghidorah":In(n,e,i,{amp:.42,armAmp:.1,armOut:.1}),Si(n,i,.12,1.4,.15),n.necks?.forEach((s,a)=>s.chain.forEach((r,o)=>O(n,r,0,0,Math.sin(e.walkPhase+a+o*.4)*.05)));break;case"rodan":In(n,e,i,{amp:.55,armAmp:.1,armOut:.1}),Si(n,i,.2,2.2,.18);break;case"mothra":In(n,e,i,{amp:.4,armAmp:.05,armOut:.1}),Si(n,i,.3,3,.22);break;case"shimo":{const s=e.walkPhase||0,a=Math.abs(Math.sin(s))*.09;n.visual.position.y=a;const r=Math.sin(s)*.42;O(n,n.legFL.root,r,0,0),O(n,n.legBR.root,r,0,0),O(n,n.legFR.root,-r,0,0),O(n,n.legBL.root,-r,0,0),O(n,n.legFL.upper,Math.max(0,-r)*.7,0,0),O(n,n.legBR.upper,Math.max(0,-r)*.7,0,0),O(n,n.legFR.upper,Math.max(0,r)*.7,0,0),O(n,n.legBL.upper,Math.max(0,r)*.7,0,0),O(n,n.torso,Math.sin(s*2)*.025,0,Math.sin(s)*.02),O(n,n.neck,-Math.sin(s*2)*.03,0,0),Fn(n,i,.08,1.5,s);break}case"scylla":{const s=e.walkPhase||0;n.visual.position.y=Math.abs(Math.sin(s))*.05,n.legs?.forEach((a,r)=>{const o=s+r*.8;O(n,a.base,0,Math.sin(o)*.1,0),O(n,a.limb.root,Math.sin(o)*.18,0,Math.sin(o)*.12),O(n,a.limb.upper,Math.max(0,Math.sin(o))*.3,0,0)}),n.tentacles?.forEach((a,r)=>a.forEach((o,l)=>O(n,o,Math.sin(s+r+l)*.08,0,Math.sin(s*.7+r+l)*.08)));break}case"tiamat":{const s=e.walkPhase||0;n.visual.position.y=Math.abs(Math.sin(s*.5))*.05,n.segments?.forEach((a,r)=>O(n,a,Math.sin(s+r*.4)*.05,Math.sin(s+r*.6)*.08,0));break}default:In(n,e,i,{})}}function Yx(n,t,e,i){kx(n);const s=n.family,a=t.dead,r=t.ragdoll;if(a||r){Wx(n,t,e),t.hitPulse&&Qc(n,t.hitPulse,t.hitDir||1),n.mouthGlow&&(n.mouthGlow.visible=!1);return}(t.speed||0)>.6&&t.grounded!==!1?qx(n,s,t,e):Xx(n,s,t,e),t.block&&Vx(n),t.hitPulse>0&&Qc(n,t.hitPulse,t.hitDir||1);const c=t.attack;if(c){const h=xi(c.t/c.dur);switch(c.kind){case"light":Bx(n,h,s,c.alt);break;case"heavy":zx(n,h,s,n.def);break;case"special":Gx(n,h,n.def);break;case"roar":Hx(n,h,s);break;case"bite":O(n,n.neck,-.35*Math.sin(h*Math.PI),0,0),O(n,n.head,-.25*Math.sin(h*Math.PI),0,0),O(n,n.jaw,.8*Math.sin(h*Math.PI),0,0);break;case"stomp":{const d=h<.4?Ux(h/.4):1-Fx((h-.4)/.6);O(n,n.legR?.root,-1.2*d,0,0),O(n,n.legR?.upper,1.1*d,0,0),n.visual.position.y=-.08*(1-d);break}case"grab":O(n,n.armL?.root,-1.3*Math.sin(h*Math.PI),0,-.2),O(n,n.armR?.root,-1.3*Math.sin(h*Math.PI),0,.2),O(n,n.neck,-.2*Math.sin(h*Math.PI),0,0),O(n,n.jaw,.5*Math.sin(h*Math.PI),0,0);break;case"throw":{const d=Math.sin(h*Math.PI);O(n,n.armL?.root,-1.8*d,0,-.4*d),O(n,n.armR?.root,-1.8*d,0,.4*d),O(n,n.torso,-.4*d,0,0);break}case"dodge":n.visual.rotation.z=Math.sin(h*Math.PI)*.35,n.visual.position.y=-.1*Math.sin(h*Math.PI);break;case"axe":O(n,n.armR?.root,.9*Math.sin(h*Math.PI),0,0),O(n,n.armR?.upper,-1.8*Math.sin(h*Math.PI),0,0),O(n,n.torso,-.3*Math.sin(h*Math.PI),0,0);break}}if(n.glowParts){const h=n.def.build?.glow??.2,d=.65+Math.sin(e*2.2)*.15;for(const u of n.glowParts)u?.material?.emissiveIntensity!==void 0&&(u.material.emissiveIntensity=.4+h*d*2.2)}n.mouthGlow&&(n.mouthGlow.visible=!!(c&&(c.kind==="special"||c.kind==="roar"))),n.teamRing&&(n.teamRing.rotation.z+=i*.25)}function $x(n){return n.bases=new Map,n.visual.traverse(t=>{t&&t.isObject3D&&n.bases.set(t,{x:t.rotation.x,y:t.rotation.y,z:t.rotation.z})}),n}function Kx(n,t){n.teamRingMat&&(n.teamRingMat.color.setHex(t),n.teamRingMat.opacity=.34)}const We=Math.PI*2,Ua=(n=0,t=0,e=0)=>new R(n,t,e);function $s(n){return{r:n>>16&255,g:n>>8&255,b:n&255}}function Zx(n,t,e,i=1){return`rgba(${Math.max(0,Math.min(255,n|0))},${Math.max(0,Math.min(255,t|0))},${Math.max(0,Math.min(255,e|0))},${i})`}function pe(n,t){const e=$s(n);return Zx(e.r+t,e.g+t,e.b+t)}function jc(n,t,e){const i=$s(n),s=$s(t);return Math.round(i.r+(s.r-i.r)*e)<<16|Math.round(i.g+(s.g-i.g)*e)<<8|Math.round(i.b+(s.b-i.b)*e)}function Hn(n){let t=0;for(let e=0;e<n.length;e++)t=t*31+n.charCodeAt(e)>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function Ko(n=256){const t=document.createElement("canvas");return t.width=t.height=n,t}function Zo(n,t,e,i){const s=n.getImageData(0,0,t,t),a=s.data;for(let r=0;r<a.length;r+=4){const o=(i()-.5)*e;a[r]=Math.max(0,Math.min(255,a[r]+o)),a[r+1]=Math.max(0,Math.min(255,a[r+1]+o)),a[r+2]=Math.max(0,Math.min(255,a[r+2]+o))}n.putImageData(s,0,0)}const Zr=new Map;function Jx(n,t,e,i){const s=`${n}-${t}-${e}-${i}`;if(Zr.has(s))return Zr.get(s);const a=256,r=Ko(a),o=Ko(a),l=r.getContext("2d"),c=o.getContext("2d"),h=Hn(s),d=$s(e),u=$s(i);l.fillStyle=pe(t,0),l.fillRect(0,0,a,a);const f=l.createLinearGradient(0,0,a,a);if(f.addColorStop(0,pe(t,14)),f.addColorStop(.55,pe(t,-6)),f.addColorStop(1,pe(e,6)),l.fillStyle=f,l.fillRect(0,0,a,a),c.fillStyle="#808080",c.fillRect(0,0,a,a),n==="fur"){for(let m=0;m<3400;m++){const v=h()*a,y=h()*a,M=4+h()*13,E=-1.3+h()*2.6;l.strokeStyle=h()>.45?pe(t,18+h()*22):pe(e,4+h()*12),l.lineWidth=.7+h()*1.2,l.beginPath(),l.moveTo(v,y),l.quadraticCurveTo(v+Math.cos(E)*M*.5,y+Math.sin(E)*M*.5,v+Math.cos(E)*M,y+Math.sin(E)*M),l.stroke(),c.strokeStyle=h()>.5?"#b8b8b8":"#5a5a5a",c.lineWidth=1,c.beginPath(),c.moveTo(v,y),c.lineTo(v+Math.cos(E)*M,y+Math.sin(E)*M),c.stroke()}for(let m=0;m<55;m++)l.fillStyle=pe(t,-18-h()*16),l.globalAlpha=.35,l.beginPath(),l.ellipse(h()*a,h()*a,5+h()*12,3+h()*8,h()*We,0,We),l.fill(),l.globalAlpha=1}else if(n==="metal"){for(let m=0;m<8;m++){l.strokeStyle=pe(e,0),l.lineWidth=2+h()*2;const v=m/8*a+h()*8;l.beginPath(),l.moveTo(0,v),l.lineTo(a,v),l.stroke(),c.strokeStyle="#4a4a4a",c.lineWidth=2,c.beginPath(),c.moveTo(0,v),c.lineTo(a,v),c.stroke()}for(let m=0;m<6;m++){const v=m/6*a+h()*10;l.strokeStyle=pe(e,4),l.lineWidth=1.5,l.beginPath(),l.moveTo(v,0),l.lineTo(v,a),l.stroke()}for(let m=0;m<70;m++){const v=h()*a,y=h()*a;l.fillStyle=pe(u,0),l.beginPath(),l.arc(v,y,1.2+h()*1.4,0,We),l.fill()}for(let m=0;m<36;m++){l.strokeStyle=pe(u,10+h()*20),l.globalAlpha=.35,l.lineWidth=.8;const v=h()*a,y=h()*a;l.beginPath(),l.moveTo(v,y),l.lineTo(v+8+h()*30,y+(h()-.5)*8),l.stroke()}l.globalAlpha=1;for(let m=0;m<24;m++)c.fillStyle=h()>.5?"#e0e0e0":"#3a3a3a",c.beginPath(),c.arc(h()*a,h()*a,1+h()*2,0,We),c.fill()}else if(n==="ice"){for(let m=0;m<90;m++){const v=h()*a,y=h()*a,M=4+h()*22;l.fillStyle=h()>.5?pe(i,10):pe(t,-14),l.globalAlpha=.25+h()*.35,l.beginPath();for(let E=0;E<5;E++){const T=E/5*We+h()*.5;l.lineTo(v+Math.cos(T)*M*(.5+h()*.5),y+Math.sin(T)*M*(.5+h()*.5))}l.closePath(),l.fill()}l.globalAlpha=1;for(let m=0;m<26;m++){l.strokeStyle=pe(i,25),l.globalAlpha=.6,l.lineWidth=.8+h();const v=h()*a,y=h()*a;l.beginPath(),l.moveTo(v,y),l.lineTo(v+(h()-.5)*60,y+(h()-.5)*60),l.stroke()}l.globalAlpha=1;for(let m=0;m<40;m++)c.fillStyle=h()>.5?"#d0d0d0":"#555",c.beginPath(),c.arc(h()*a,h()*a,1+h()*5,0,We),c.fill()}else{const m=n==="gold"?12:14;let v=0;for(let y=-8;y<a+12;y+=m*.68){for(let M=v%2?-m/2:0;M<a+m;M+=m){const E=m*(.48+h()*.12);l.beginPath(),l.ellipse(M+(h()-.5)*2,y+(h()-.5)*2,E,E*.66,0,0,We),l.fillStyle=h()>.5?pe(t,5+h()*14):pe(t,-12-h()*10),l.fill(),l.strokeStyle=pe(d,6),l.lineWidth=.9,l.stroke(),h()>.82&&(l.fillStyle=pe(u,10),l.globalAlpha=.55,l.beginPath(),l.ellipse(M-E*.15,y-E*.2,E*.4,E*.22,0,0,We),l.fill(),l.globalAlpha=1)}v++}if(n==="gold"){for(let y=0;y<50;y++)l.fillStyle=pe(i,30+h()*40),l.globalAlpha=.5,l.beginPath(),l.arc(h()*a,h()*a,.8+h()*2,0,We),l.fill();l.globalAlpha=1}for(let y=0;y<22;y++){l.strokeStyle=pe(e,0),l.globalAlpha=.5,l.lineWidth=.8;const M=h()*a,E=h()*a;l.beginPath(),l.moveTo(M,E),l.lineTo(M+10+h()*35,E+(h()-.5)*16),l.stroke()}l.globalAlpha=1;for(let y=0;y<40;y++)c.fillStyle=h()>.5?"#c8c8c8":"#505050",c.beginPath(),c.arc(h()*a,h()*a,1+h()*4,0,We),c.fill()}Zo(l,a,n==="metal"?12:22,h),Zo(c,a,45,h);const p=new vi(r);p.colorSpace=Ee,p.wrapS=p.wrapT=ki,p.repeat.set(n==="fur"?2:1.4,n==="fur"?2:1.4),p.anisotropy=4;const _=new vi(o);_.wrapS=_.wrapT=ki,_.repeat.copy(p.repeat);const g={map:p,bump:_};return Zr.set(s,g),g}const Jr=new Map;function Qx(n,t,e,i){const s=`${n}-${t}-${e}-${i}`;if(Jr.has(s))return Jr.get(s);const a=512,r=Ko(a),o=r.getContext("2d"),l=Hn(s),c=o.createLinearGradient(0,0,a,a);if(c.addColorStop(0,pe(e,0)),c.addColorStop(.5,pe(t,0)),c.addColorStop(1,pe(e,12)),o.fillStyle=c,o.fillRect(0,0,a,a),n==="moth"){o.fillStyle=pe(i,20),o.globalAlpha=.18;for(let d=0;d<14;d++)o.beginPath(),o.ellipse(l()*a,l()*a,18+l()*55,10+l()*30,l()*We,0,We),o.fill();o.globalAlpha=1;for(const[d,u,f]of[[140,250,56],[370,250,56],[110,120,30],[400,120,30]])o.fillStyle=pe(e,8),o.beginPath(),o.arc(d,u,f,0,We),o.fill(),o.strokeStyle=pe(i,35),o.lineWidth=5,o.stroke(),o.fillStyle=pe(i,20),o.globalAlpha=.8,o.beginPath(),o.arc(d,u,f*.55,0,We),o.fill(),o.globalAlpha=1,o.fillStyle=pe(e,-10),o.beginPath(),o.arc(d,u,f*.24,0,We),o.fill();o.strokeStyle=pe(e,-18),o.lineWidth=2.5,o.globalAlpha=.7;for(let d=0;d<26;d++){const u=l()*a,f=l()*a;o.beginPath(),o.moveTo(u,f),o.quadraticCurveTo(u+30,f+20,u+60,f+(l()-.5)*40),o.stroke()}o.globalAlpha=1}else{o.strokeStyle=pe(e,-22),o.globalAlpha=.85;for(let d=0;d<7;d++){const u=a*(.04+d*.14),f=20+l()*30;o.lineWidth=3.5,o.beginPath(),o.moveTo(u,f),o.quadraticCurveTo(u+60,220,u+20,a-10),o.stroke(),o.lineWidth=1.2;for(let p=0;p<4;p++){const _=.2+p*.18;o.beginPath(),o.moveTo(u+_*55,f+_*300),o.lineTo(u+_*55+50+l()*40,f+_*300+30+l()*40),o.stroke()}}o.globalAlpha=1;for(let d=0;d<26;d++){o.strokeStyle=pe(i,-30),o.globalAlpha=.18,o.lineWidth=1;const u=l()*a,f=l()*a;o.beginPath(),o.moveTo(u,f),o.lineTo(u+30+l()*60,f+(l()-.5)*20),o.stroke()}o.globalAlpha=1}Zo(o,a,18,l);const h=new vi(r);return h.colorSpace=Ee,h.anisotropy=4,Jr.set(s,h),h}function Nn(n,t,e,i,s={}){const{map:a,bump:r}=Jx(n,t,e,i);return new se({map:a,bumpMap:r,bumpScale:s.bumpScale??.07,color:s.color??16777215,roughness:s.roughness??(n==="metal"?.34:n==="ice"?.42:.72),metalness:s.metalness??(n==="metal"?.86:n==="ice"?.12:.04),emissive:s.emissive??0,emissiveIntensity:s.emissiveIntensity??0,side:s.side??ji,transparent:!!s.transparent,opacity:s.opacity??1,flatShading:!!s.flatShading})}function nn(n){const{primary:t,secondary:e,accent:i,eye:s,glow:a}=n.colors,r=n.style,o=n.build||{},l=Nn(r,t,e,i),c=Nn(r,jc(t,e,.55),e,i,{roughness:r==="metal"?.3:.78}),h=Nn(r,jc(t,i,.42),e,i,{roughness:.7}),d=o.glow??.2,u=Nn(r==="metal"?"metal":r==="ice"?"ice":"scales",i,e,t,{roughness:.5,metalness:r==="metal"?.8:.1,emissive:a,emissiveIntensity:d*.55}),f=new se({color:a,emissive:a,emissiveIntensity:.6+d*2.2,roughness:.32,metalness:.2,toneMapped:!1}),p=new se({color:s,emissive:s,emissiveIntensity:3.2,roughness:.15,toneMapped:!1}),_=Nn("scales",13352872,6182731,15261128,{roughness:.45,bumpScale:.03}),g=new se({color:15261897,roughness:.4,metalness:.05}),m=new se({color:2755853,roughness:.7,emissive:2752512,emissiveIntensity:.2}),v=new se({color:1512722,roughness:.9}),y=Nn("metal",i,e,14213354,{roughness:.3,metalness:.92}),M=Nn("metal",e,t,i,{roughness:.38,metalness:.88}),E=new se({map:Qx(n.family==="mothra"?"moth":n.family==="ghidorah"?"gold":"bat",t,e,i),color:16777215,side:Ye,transparent:!0,opacity:.96,roughness:.62,metalness:.02,emissive:a,emissiveIntensity:d*.18}),T=new Xe({color:a,transparent:!0,opacity:.55,side:Ye,blending:ri,depthWrite:!1}),x=new Xe({color:a,transparent:!0,opacity:.8,blending:ri,depthWrite:!1});return{skin:l,dark:c,belly:h,plate:u,plateHot:f,eye:p,claw:_,teeth:g,mouth:m,scar:v,metal:y,metalDark:M,membrane:E,membraneGlow:T,beam:x,glow:a,glowStrength:d}}const Qr=new Map;function ur(n,t){return Qr.has(n)||Qr.set(n,t()),Qr.get(n)}const Le=(n,t=14,e=10)=>ur(`s${n}-${t}-${e}`,()=>new yn(n,t,e)),ae=(n,t,e)=>ur(`b${n}-${t}-${e}`,()=>new re(n,t,e)),Fe=(n,t,e,i=10)=>ur(`c${n}-${t}-${e}-${i}`,()=>new li(n,t,e,i,1)),ge=(n,t,e=8)=>ur(`k${n}-${t}-${e}`,()=>new Zs(n,t,e));function it(n,t,e,i=0,s=0,a=0,r=0,o=0,l=0,c=1,h=1,d=1){const u=new _t(t,e);return u.position.set(i,s,a),u.rotation.set(r,o,l),u.scale.set(c,h,d),u.castShadow=!0,u.receiveShadow=!0,n.add(u),u}function Xt(n,t=0,e=0,i=0,s=0,a=0,r=0){const o=new me;return o.position.set(t,e,i),o.rotation.set(s,a,r),n.add(o),o}function de(n,t,e,i,s,a,r,o,l=14,c=10){return it(n,Le(1,l,c),t,e,i,s,0,0,0,a,r,o)}function th(n,t,e,i,s,a,r=8){const o=new R().subVectors(i,e),l=o.length(),c=it(n,Fe(a,s,l,r),t,(e.x+i.x)/2,(e.y+i.y)/2,(e.z+i.z)/2);return c.quaternion.setFromUnitVectors(new R(0,1,0),o.normalize()),c}function Oe(n,t){const{x:e,y:i,z:s,upper:a,lower:r,r1:o=.32,r2:l=.24,r3:c=.18,mat:h,endMat:d,rot:u=[0,0,0]}=t,f=Xt(n,e,i,s,u[0],u[1],u[2]);it(f,Fe(l,o,a,10),h,0,-a/2,0),it(f,Le(o*.95,10,8),h,0,0,0);const p=Xt(f,0,-a,0);it(p,Fe(c,l,r,9),h,0,-r/2,0),it(p,Le(l,10,8),h,0,0,0);const _=Xt(p,0,-r,0);return d&&it(_,Le(c*1.05,10,8),d,0,0,0),{root:f,upper:p,end:_,upperLen:a,lowerLen:r}}function Oi(n,t,e=3,i=.16,s=.38,a=-.12,r=-.16){for(let o=0;o<e;o++){const l=(o/(e-1||1)-.5)*i*2;it(n,ge(.07,s,5),t,l,a,r,-Math.PI/2.5,0,0)}}function eh(n,t,e,i,s,a,r=.09,o=!1){for(let l=0;l<e;l++){const c=(l/(e-1)-.5)*a;it(n,ge(r,r*2.4,4),t,c,i,s,o?Math.PI:0,0,0)}}function sn(n,t){const{mat:e,dark:i,eyeMat:s,teeth:a,mouth:r,claw:o,x:l=0,y:c=0,z:h=0,scale:d=1,snout:u=1,jaw:f=.34,horns:p=0,crest:_=!1,beak:g=!1,mech:m=!1,glowMat:v}=t,y=Xt(n,l,c,h),M=de(y,e,0,0,0,.72*d,.6*d,.9*d,16,12);if(_&&(it(y,ge(.32*d,.85*d,5),i,0,.5*d,.35*d,-.25,0,0,1,1,.35),it(y,ge(.18*d,.55*d,5),e,0,.55*d,.05,-.1,0,0,1,1,.4)),p)for(const x of[-1,1])it(y,ge(.11*d,.75*d,5),o,x*.42*d,.35*d,.28*d,.7,0,x*.35);if(g){const x=Xt(y,0,-.02*d,-.75*d);it(x,ge(.28*d,1.25*d,6),o,0,0,-.35*d,-Math.PI/2,0,0),it(x,ge(.18*d,.75*d,5),i,0,-.12*d,-.28*d,-Math.PI/2,0,0)}else{de(y,e,0,-.08*d,-.55*d,.55*d*u,.36*d,.72*d*u,14,10),it(y,ae(.42*d,.12*d,.55*d),i,0,.2*d,-.52*d);for(const x of[-1,1])it(y,Le(.055*d,6,5),r,x*.18*d,.02*d,-1.14*d*u)}const E=m?.3:.34;for(const x of[-1,1])it(y,Le(.115*d,8,6),s,x*E*d,.2*d,-.6*d),it(y,Le(.06*d,6,5),r,x*E*d,.2*d,-.7*d),m&&it(y,ae(.4*d,.08*d,.3*d),v||s,x*.16*d,.2*d,-.62*d);const T=Xt(y,0,-.34*d,-.25*d);return de(T,i,0,-.02*d,-.42*d,.48*d,.16*d,.72*d,12,8),it(T,ae(.42*d,.09*d,.6*d),r,0,.06*d,-.55*d),g||(eh(T,a,5,.08*d,-.86*d,.5*d,.055*d,!0),eh(y,a,5,-.18*d,-.88*d,.5*d,.055*d,!1)),{head:y,jaw:T,skull:M}}function en(n,t){const{count:e=8,length:i=.9,r:s=.55,taper:a=.87,mat:r,plateMat:o,plateScale:l=1,x:c=0,y:h=0,z:d=0,droop:u=-.08,spikes:f=!0,side:p=0}=t,_=[];let g=Xt(n,c,h,d);for(let m=0;m<e;m++){const v=s*Math.pow(a,m),y=Xt(g);y.rotation.x=u,p&&(y.rotation.y=p);const M=it(y,Fe(v*a,v,i,9),r,0,0,i/2,Math.PI/2,0,0);M.scale.z=.92,f&&o&&it(y,ge(v*.42*l,v*1.1*l,4),o,0,v*.8,i*.5,.12,0,0,1,1,.42),_.push(y),g=Xt(y,0,0,i)}return it(g,ge(s*.12,i*.9,6),r,0,0,i*.4,Math.PI/2,0,0),{segs:_,tip:g}}function gs(n,t){const{side:e=1,span:i=6,mat:s,boneMat:a,glowMat:r,x:o=0,y:l=0,z:c=0,baseRot:h=[0,0,0],scallop:d=!0,fingers:u=4}=t,f=Xt(n,o,l,c,h[0],h[1],h[2]);f.scale.x=e;const p=new rr;p.moveTo(0,.4),p.lineTo(i*.32,1.5),p.lineTo(i*.7,1.25),p.lineTo(i,.25),d?(p.lineTo(i*.9,-.8),p.lineTo(i*.72,-.25),p.lineTo(i*.6,-1.9),p.lineTo(i*.42,-.55),p.lineTo(i*.28,-2.1),p.lineTo(i*.14,-.65),p.lineTo(0,-1.3)):(p.lineTo(i*.85,-1.2),p.lineTo(i*.55,-.5),p.lineTo(i*.35,-1.7),p.lineTo(0,-1.3)),p.closePath();const _=new xl(p,12),g=new _t(_,s);if(g.castShadow=!0,g.receiveShadow=!0,f.add(g),r){const v=new _t(new Au(_),r);v.position.z=.02,f.add(v)}const m=[[i*.7,1.25],[i,.25],[i*.6,-1.9],[i*.28,-2.1]];for(let v=0;v<Math.min(u,m.length);v++){const[y,M]=m[v];th(f,a,Ua(0,.1,0),Ua(y,M,0),.09,.035,6)}return th(f,a,Ua(0,.1,0),Ua(i*.32,1.5,0),.14,.08,6),f}function hd(n){const t=n.build||{},e=t.bulk||1,i=nn(n),s=new me,a={family:"godzilla",def:n,mats:i,root:s,baseHeight:9.8},o=Xt(s,0,4.05,0);a.pelvis=o,de(o,i.skin,0,0,0,1.22*e,.9,1.05,18,12),de(o,i.belly,0,-.1,-.55,.75*e,.55,.55,12,8);const l=Xt(o,0,.62,0);a.torso=l,de(l,i.skin,0,1,0,1.35*e,1.55,1.02,18,14),de(l,i.belly,0,.9,-.62,.86*e,1.05,.5,14,10),de(l,i.skin,0,1.9,-.18,1.52*e,.9,1.05,16,10),de(l,i.dark,-1.25*e,2,0,.52,.5,.5,10,8),de(l,i.dark,1.25*e,2,0,.52,.5,.5,10,8),t.scars&&(it(l,ae(.03,.5,.9),i.scar,-.45,1.15,-1,.2,0,-.25),it(l,ae(.03,.35,.55),i.scar,.35,1.7,-1.02,.1,0,.2));const c=Xt(l,0,2.45,-.35);a.neck=c,it(c,Fe(.55,.75,1.25,10),i.skin,0,.45,-.12,-.38,0,0);const h=sn(c,{mat:i.skin,dark:i.dark,eyeMat:i.eye,teeth:i.teeth,mouth:i.mouth,claw:i.claw,x:0,y:1.18,z:-.5,scale:1.12,snout:t.head==="evolved"?1.05:1.18,crest:t.head==="evolved",horns:0,glowMat:i.plateHot});a.head=h.head,a.jaw=h.jaw,it(h.head,ae(.4,.14,.55),i.plate,-.38,.36,-.55,.1,0,-.18),it(h.head,ae(.4,.14,.55),i.plate,.38,.36,-.55,.1,0,.18),it(h.head,ge(.13,.5,5),i.plate,0,.42,.35,-.3,0,0);const d=Oe(l,{x:-1.3*e,y:1.9,z:-.05,upper:1.45,lower:1.3,r1:.42,r2:.32,r3:.23,mat:i.skin,endMat:i.dark,rot:[.2,0,-.18]}),u=Oe(l,{x:1.3*e,y:1.9,z:-.05,upper:1.45,lower:1.3,r1:.42,r2:.32,r3:.23,mat:i.skin,endMat:i.dark,rot:[.2,0,.18]});Oi(d.end,i.claw,3,.13,.42,-.14,-.2),Oi(u.end,i.claw,3,.13,.42,-.14,-.2),a.armL=d,a.armR=u;const f=Oe(o,{x:-.68*e,y:-.15,z:0,upper:2.05,lower:1.75,r1:.62,r2:.46,r3:.36,mat:i.skin,endMat:i.dark,rot:[.02,0,-.03]}),p=Oe(o,{x:.68*e,y:-.15,z:0,upper:2.05,lower:1.75,r1:.62,r2:.46,r3:.36,mat:i.skin,endMat:i.dark,rot:[.02,0,.03]});for(const v of[f,p])it(v.end,ae(.7,.3,1.15),i.dark,0,-.16,-.28),Oi(v.end,i.claw,3,.2,.42,-.22,-.72);a.legL=f,a.legR=p;const _=en(o,{count:9,length:.82,r:.66*e,taper:.9,mat:i.skin,plateMat:i.plate,plateScale:t.plateScale||1,x:0,y:-.12,z:.95,droop:-.11});a.tail=_.segs,a.tailTip=_.tip;const g=t.plateScale||1,m=[[0,2.6,.9,.55],[0,2.1,.98,.85],[0,1.55,1.02,1],[0,.95,1.02,.9],[0,.35,.98,.72],[0,-.3,.92,.55]];for(const[v,y,M,E]of m){const T=it(l,ge(.32*E*g,1.5*E*g,4),i.plate,v,y,M,-.28,0,0,1,1,.34);t.evolved&&it(T,ae(.07,1.1*E,.5),i.plateHot,0,.2,.12,0,0,0)}return it(c,ge(.22*g,.9*g,4),i.plate,0,.7,.4,-.4,0,0,1,1,.3),it(c,ge(.17*g,.65*g,4),i.plate,0,.25,.5,-.4,0,0,1,1,.3),a.chestGlow=it(l,Le(.42,10,8),i.plateHot,0,1.15,-.94,0,0,0,1,1.4,.3),a.mouthGlow=it(h.jaw,Le(.16,8,6),i.plateHot,0,.06,-.72,0,0,0,1,.6,1.2),a.mouthGlow.visible=!1,a.glowParts=[a.chestGlow,a.mouthGlow],a.plateMats=[i.plate,i.plateHot],{group:s,rig:a,baseHeight:9.8}}function $i(n,t,e,i,s,a=1){for(let r=0;r<e;r++){const o=s()*We,l=Math.sqrt(s()),c=Math.cos(o)*l*i[0],h=i[1]+(s()-.5)*i[3],d=Math.sin(o)*l*i[2],u=(.12+s()*.26)*a;it(n,ge(.055*a,u,4),s()>.5?t.dark:t.skin,c,h,d,s()*.5-.25,s()*We,s()*.5-.25)}}function jx(n){const t=n.build||{},e=nn(n),i=new me,s={family:"kong",def:n,mats:e,root:i,baseHeight:9.1},a=Hn(n.id),o=Xt(i,0,3.55,0);s.pelvis=o,de(o,e.skin,0,0,0,1,.75,.9,16,12);const l=Xt(o,0,.55,0);if(s.torso=l,de(l,e.skin,0,1,0,1.42,1.5,1.05,18,14),de(l,e.belly,0,.9,-.6,.85,1,.45,12,8),de(l,e.dark,-1.3,1.8,0,.55,.6,.6,10,8),de(l,e.dark,1.3,1.8,0,.55,.6,.6,10,8),$i(l,e,90,[1.25,1.1,.8,1.7],a,1.25),$i(o,e,35,[.9,0,.7,.8],a,1.1),t.scars)for(let m=0;m<3;m++)it(l,ae(.025,.35+a()*.4,.55),e.scar,-.5+m*.4,1+a()*.6,-1.02,.2,0,-.3+a()*.6);const c=Xt(l,0,2.15,-.3);s.neck=c,it(c,Fe(.55,.72,.85,10),e.skin,0,.2,0,-.2,0,0);const h=sn(c,{mat:e.skin,dark:e.dark,eyeMat:e.eye,teeth:e.teeth,mouth:e.mouth,claw:e.claw,x:0,y:.85,z:-.32,scale:1.35,snout:.95,crest:!1,horns:0});s.head=h.head,s.jaw=h.jaw,it(h.head,ae(.95,.2,.55),e.dark,0,.35,-.5,.1,0,0);for(const m of[-1,1])de(h.head,e.dark,m*.75,.15,.05,.18,.3,.14,8,6),it(h.head,Le(.11,8,6),e.eye,m*.36,.18,-.62);it(h.head,ae(.5,.25,.35),e.mouth,0,-.1,-.95),$i(h.head,e,26,[.6,-.25,.4,.5],a,.9);const d=Xt(h.head,0,-.3,-.3);it(d,ge(.3,.8+(t.beard||0)*.9,6),e.dark,0,-.3,-.3,Math.PI,0,0,1,1,.7),$i(d,e,20,[.35,0,.3,.6],a,.9);const u=Oe(l,{x:-1.32,y:1.75,z:0,upper:2.3,lower:2.05,r1:.58,r2:.42,r3:.3,mat:e.skin,endMat:e.dark,rot:[.1,0,-.12]}),f=Oe(l,{x:1.32,y:1.75,z:0,upper:2.3,lower:2.05,r1:.58,r2:.42,r3:.3,mat:e.skin,endMat:e.dark,rot:[.1,0,.12]});for(const m of[u,f]){de(m.root,e.skin,0,-.75,0,.6,.9,.55,10,8),$i(m.root,e,22,[.5,-.8,.4,1.2],a,1),$i(m.upper,e,14,[.38,-.7,.3,1],a,.9),it(m.end,Le(.34,10,8),e.dark,0,-.05,0);for(let v=0;v<4;v++)it(m.end,Fe(.09,.11,.5,6),e.skin,(v-1.5)*.16,-.3,-.12,.2,0,0)}Oi(u.end,e.claw,4,.14,.35,-.55,-.2),Oi(f.end,e.claw,4,.14,.35,-.55,-.2),s.armL=u,s.armR=f;const p=Oe(o,{x:-.6,y:-.1,z:0,upper:1.8,lower:1.6,r1:.62,r2:.48,r3:.38,mat:e.skin,endMat:e.dark,rot:[0,0,-.06]}),_=Oe(o,{x:.6,y:-.1,z:0,upper:1.8,lower:1.6,r1:.62,r2:.48,r3:.38,mat:e.skin,endMat:e.dark,rot:[0,0,.06]});for(const m of[p,_])it(m.end,ae(.75,.3,1.1),e.dark,0,-.15,-.3),Oi(m.end,e.claw,4,.2,.3,-.18,-.7);s.legL=p,s.legR=_;const g=en(o,{count:4,length:.5,r:.3,taper:.8,mat:e.skin,x:0,y:.1,z:.8,droop:-.25,spikes:!1});if(s.tail=g.segs,t.axe){const m=Xt(f.end,0,-.25,-.05);it(m,Fe(.1,.13,3,8),e.metalDark,0,-.6,0);const v=new rr;v.moveTo(0,0),v.lineTo(.95,.35),v.lineTo(1.15,.85),v.lineTo(.95,1.35),v.lineTo(0,1.05),v.closePath();const y=new gl(v,{depth:.16,bevelEnabled:!0,bevelSize:.04,bevelThickness:.03,bevelSegments:1}),M=new _t(y,e.metal);M.position.set(.12,.35,-.08),M.rotation.y=Math.PI/2,M.castShadow=!0,m.add(M),it(m,ae(.18,1.1,.3),e.plateHot,.55,1,0),t.armor&&(it(f.upper,Fe(.5,.55,.65,8),e.metal,0,-.45,0),it(u.upper,Fe(.5,.55,.65,8),e.metal,0,-.45,0),it(l,ae(1.4,.25,.4),e.metalDark,0,1.7,-1)),s.axe=m}return s.headTop=9,{group:i,rig:s,baseHeight:9.1}}function tv(n){const t=nn(n),e=new me,i={family:"mecha",def:n,mats:t,root:e,baseHeight:9.6},a=Xt(e,0,4,0);i.pelvis=a,it(a,ae(1.7,.8,1.2),t.metalDark,0,0,0),it(a,ae(1.9,.16,1.35),t.plateHot,0,.25,-.1);const r=Xt(a,0,.55,0);i.torso=r,it(r,ae(2.4,2.5,1.4),t.metal,0,1.1,0),it(r,ae(2.1,.18,1.5),t.metalDark,0,2.2,0),it(r,ae(.18,1.4,.1),t.plateHot,0,1.2,-.73),it(r,Le(.34,10,8),t.plateHot,0,1.55,-.78),it(r,ae(1.3,.55,.6),t.metalDark,0,.55,-.8),it(r,ae(.9,.12,.2),t.plateHot,0,.55,-1.12);for(const p of[-1,1])it(r,ae(.7,.8,.9),t.metalDark,p*1.5,2,0),it(r,Fe(.16,.2,.7,8),t.metal,p*1.55,2.45,.1,0,0,p*.2),it(r,ge(.12,.4,6),t.plateHot,p*1.55,2.9,.1);const o=Xt(r,0,2.4,-.15);i.neck=o,it(o,Fe(.32,.4,.6,8),t.metalDark,0,.25,0);const l=sn(o,{mat:t.metal,dark:t.metalDark,eyeMat:t.eye,teeth:t.teeth,mouth:t.mouth,claw:t.metal,x:0,y:.85,z:-.25,scale:1,snout:1.1,mech:!0,glowMat:t.plateHot});i.head=l.head,i.jaw=l.jaw,it(l.head,ae(.95,.12,.55),t.plateHot,0,.22,-.6),it(l.head,ae(.2,.5,.2),t.metal,0,.5,.3),it(l.head,ge(.1,.45,5),t.plateHot,0,.8,.3);const c=Oe(r,{x:-1.35,y:1.8,z:0,upper:1.6,lower:1.45,r1:.4,r2:.32,r3:.26,mat:t.metal,endMat:t.metalDark,rot:[.1,0,-.14]}),h=Oe(r,{x:1.35,y:1.8,z:0,upper:1.6,lower:1.45,r1:.4,r2:.32,r3:.26,mat:t.metal,endMat:t.metalDark,rot:[.1,0,.14]});for(const[p,_]of[[c,-1],[h,1]])it(p.upper,ae(.5,.5,.6),t.metalDark,0,-.55,0),it(p.upper,ae(.15,.5,.1),t.plateHot,_*.28,-.55,-.2),it(p.end,ae(.5,.4,.55),t.metalDark,0,-.1,-.05),Oi(p.end,t.metal,3,.14,.35,-.3,-.3);i.armL=c,i.armR=h;const d=Oe(a,{x:-.75,y:-.2,z:0,upper:2,lower:1.8,r1:.45,r2:.36,r3:.3,mat:t.metal,endMat:t.metalDark,rot:[.03,0,-.03]}),u=Oe(a,{x:.75,y:-.2,z:0,upper:2,lower:1.8,r1:.45,r2:.36,r3:.3,mat:t.metal,endMat:t.metalDark,rot:[.03,0,.03]});for(const[p,_]of[[d,-1],[u,1]])it(p.upper,ae(.65,.7,.65),t.metalDark,0,-.65,0),it(p.upper,ae(.16,.55,.1),t.plateHot,_*.34,-.65,-.15),it(p.end,ae(.8,.35,1.25),t.metalDark,0,-.2,-.3),it(p.end,ae(.5,.1,.3),t.plateHot,0,-.4,-.75);i.legL=d,i.legR=u;const f=en(a,{count:8,length:.78,r:.42,taper:.88,mat:t.metal,plateMat:t.plateHot,plateScale:.6,x:0,y:0,z:.9,droop:-.08});i.tail=f.segs;for(let p=0;p<5;p++)it(r,ae(.12,.9-p*.1,.6),t.metalDark,0,2.2-p*.42,.75+p*.03,-.3,0,0);return i.chestGlow=r.children.find(p=>p.material===t.plateHot),i.glowParts=[i.chestGlow],{group:e,rig:i,baseHeight:9.6}}function ev(n){const t=nn(n),e=new me,i={family:"ghidorah",def:n,mats:t,root:e,baseHeight:12.4},a=Xt(e,0,3.7,0);i.pelvis=a,de(a,t.skin,0,0,0,1.15,.8,1,16,12);const r=Xt(a,0,.55,0);i.torso=r,de(r,t.skin,0,1,0,1.35,1.4,1,18,14),de(r,t.belly,0,.9,-.55,.8,.95,.45,12,8),$i(r,t,20,[1.1,.9,.7,1.2],Hn(n.id),.8);const o=gs(r,{side:-1,span:7.4,mat:t.membrane,boneMat:t.plate,glowMat:t.membraneGlow,x:-.9,y:1.9,z:.25,baseRot:[-1.15,.25,-.15]}),l=gs(r,{side:1,span:7.4,mat:t.membrane,boneMat:t.plate,glowMat:t.membraneGlow,x:.9,y:1.9,z:.25,baseRot:[-1.15,-.25,.15]});i.wingL=o,i.wingR=l;const c=Oe(a,{x:-.65,y:-.15,z:0,upper:1.9,lower:1.6,r1:.5,r2:.38,r3:.28,mat:t.skin,endMat:t.dark,rot:[.05,0,-.06]}),h=Oe(a,{x:.65,y:-.15,z:0,upper:1.9,lower:1.6,r1:.5,r2:.38,r3:.28,mat:t.skin,endMat:t.dark,rot:[.05,0,.06]});for(const p of[c,h])it(p.end,ae(.7,.3,1),t.dark,0,-.15,-.3),Oi(p.end,t.claw,3,.18,.35,-.18,-.68);i.legL=c,i.legR=h;const d=[{x:-.62,y:1.8,z:-.35,out:-.75,len:.92,curve:.22,scale:.94},{x:0,y:2.1,z:-.55,out:0,len:1,curve:.05,scale:1.05},{x:.62,y:1.8,z:-.35,out:.75,len:.92,curve:-.22,scale:.94}];i.necks=[];for(const p of d){let _=Xt(r,p.x,p.y,p.z);const g=[];for(let v=0;v<4;v++){const y=Xt(_);y.rotation.x=-.28+v*.06,y.rotation.z=p.out*.22*(v===0?1:.5),it(y,Fe(.26-v*.025,.34-v*.02,p.len,8),t.skin,0,p.len/2,0);for(const M of[-1,1])it(y,ge(.08,.3,4),t.plate,M*.24,p.len*.5,.06,.2,0,M*1);g.push(y),_=Xt(y,0,p.len,0)}const m=sn(_,{mat:t.skin,dark:t.dark,eyeMat:t.eye,teeth:t.teeth,mouth:t.mouth,claw:t.claw,x:0,y:.25,z:-.35,scale:.95*p.scale,snout:1.05,horns:2,crest:!0});i.necks.push({chain:g,head:m.head,jaw:m.jaw,scale:p.scale})}i.head=i.necks[1].head,i.jaw=i.necks[1].jaw;const u=en(a,{count:7,length:.7,r:.45,taper:.88,mat:t.skin,plateMat:t.plate,plateScale:.7,x:-.35,y:0,z:.85,droop:-.2,side:-.08}),f=en(a,{count:7,length:.7,r:.45,taper:.88,mat:t.skin,plateMat:t.plate,plateScale:.7,x:.35,y:0,z:.85,droop:-.2,side:.08});return i.tail=[...u.segs,...f.segs],i.tailA=u.segs,i.tailB=f.segs,i.chestGlow=it(r,Le(.3,8,6),t.plateHot,0,1.3,-.85),i.glowParts=[i.chestGlow],i.heads=i.necks.map(p=>p.head),{group:e,rig:i,baseHeight:12.4}}function iv(n){const t=nn(n),e=new me,i={family:"rodan",def:n,mats:t,root:e,baseHeight:8.2},a=Xt(e,0,3,0);i.pelvis=a,de(a,t.skin,0,0,0,.8,.7,1,14,10);const r=Xt(a,0,.45,0);i.torso=r,de(r,t.skin,0,.65,-.2,.85,1,1.15,16,12),de(r,t.belly,0,.6,-.7,.55,.6,.4,10,8);const o=gs(r,{side:-1,span:7.8,mat:t.membrane,boneMat:t.dark,glowMat:t.membraneGlow,x:-.65,y:1.25,z:0,baseRot:[-1,.25,-.2]}),l=gs(r,{side:1,span:7.8,mat:t.membrane,boneMat:t.dark,glowMat:t.membraneGlow,x:.65,y:1.25,z:0,baseRot:[-1,-.25,.2]});i.wingL=o,i.wingR=l;const c=Xt(r,0,1.55,-.55);i.neck=c,it(c,Fe(.3,.42,.9,8),t.skin,0,.25,-.2,-.6,0,0);const h=sn(c,{mat:t.skin,dark:t.dark,eyeMat:t.eye,teeth:t.teeth,mouth:t.mouth,claw:t.claw,x:0,y:.7,z:-.65,scale:.95,snout:.8,crest:!0,beak:!0});i.head=h.head,i.jaw=h.jaw,it(h.head,ge(.16,.9,5),t.plate,0,.55,.2,-.4,0,0,1,1,.35);const d=Oe(a,{x:-.45,y:-.1,z:0,upper:1.55,lower:1.25,r1:.3,r2:.22,r3:.15,mat:t.skin,endMat:t.dark,rot:[.1,0,-.1]}),u=Oe(a,{x:.45,y:-.1,z:0,upper:1.55,lower:1.25,r1:.3,r2:.22,r3:.15,mat:t.skin,endMat:t.dark,rot:[.1,0,.1]});for(const p of[d,u])it(p.end,ae(.45,.18,.85),t.dark,0,-.1,-.3),Oi(p.end,t.claw,3,.12,.32,-.12,-.62);i.legL=d,i.legR=u;const f=en(a,{count:5,length:.55,r:.22,taper:.82,mat:t.skin,x:0,y:0,z:.75,droop:-.15,spikes:!1});return i.tail=f.segs,i.chestGlow=it(r,Le(.3,8,6),t.plateHot,0,.55,-.9,0,0,0,1,1.4,.4),i.glowParts=[i.chestGlow],{group:e,rig:i,baseHeight:8.2}}function nv(n){const t=nn(n),e=new me,i={family:"mothra",def:n,mats:t,root:e,baseHeight:7.6},a=Xt(e,0,3.1,0);i.pelvis=a,de(a,t.skin,0,0,0,.6,.8,.8,12,10);const r=Xt(a,0,.5,0);i.torso=r,de(r,t.skin,0,.55,0,.7,.85,.75,14,10),de(r,t.belly,0,.45,-.35,.5,.6,.4,10,8),$i(r,t,45,[.6,.5,.55,.9],Hn(n.id),.8);const o=gs(r,{side:-1,span:7.6,mat:t.membrane,boneMat:t.plate,glowMat:t.membraneGlow,x:-.5,y:1,z:.1,baseRot:[-.65,.35,-.15],scallop:!1,fingers:3}),l=gs(r,{side:1,span:7.6,mat:t.membrane,boneMat:t.plate,glowMat:t.membraneGlow,x:.5,y:1,z:.1,baseRot:[-.65,-.35,.15],scallop:!1,fingers:3});i.wingL=o,i.wingR=l;const c=Xt(r,0,1.35,-.2);i.neck=c,it(c,Fe(.3,.35,.45,8),t.skin,0,.2,0);const h=sn(c,{mat:t.skin,dark:t.dark,eyeMat:t.eye,teeth:t.teeth,mouth:t.mouth,claw:t.claw,x:0,y:.55,z:-.2,scale:.75,snout:.7,crest:!0});i.head=h.head,i.jaw=h.jaw;for(const u of[-1,1]){const f=Xt(h.head,u*.3,.45,.1);it(f,Fe(.035,.05,1.1,5),t.dark,0,.55,0,.25,0,u*.45),it(f,Le(.07,6,5),t.plateHot,0,1.1,.05)}for(let u=0;u<3;u++)for(const f of[-1,1]){const p=Oe(a,{x:f*.35,y:-.1-u*.1,z:-.25+u*.3,upper:.9,lower:.8,r1:.1,r2:.08,r3:.05,mat:t.dark,endMat:t.dark,rot:[.2,f*.3,f*(.7+u*.1)]});i[`leg${f<0?"L":"R"}${u}`]=p}i.legL=i.legL0,i.legR=i.legR0;const d=en(a,{count:4,length:.45,r:.2,taper:.8,mat:t.skin,x:0,y:0,z:.6,droop:-.2,spikes:!1});return i.tail=d.segs,i.chestGlow=it(r,Le(.22,8,6),t.plateHot,0,.5,-.45),i.glowParts=[i.chestGlow],{group:e,rig:i,baseHeight:7.6}}function sv(n){const t=nn(n),e=new me,i={family:"shimo",def:n,mats:t,root:e,baseHeight:7.4},a=Xt(e,0,3.35,.8);i.pelvis=a,de(a,t.skin,0,0,0,1.6,1.35,2,16,12),de(a,t.belly,0,-.5,-.3,1.2,.6,1.4,12,8);const r=Xt(a,0,.15,-1.5);i.torso=r,de(r,t.skin,0,.1,-1,1.55,1.45,2.1,18,12),de(r,t.belly,0,-.45,-1,1.15,.7,1.5,12,8);const o=Xt(r,0,.9,-2.5);i.neck=o,it(o,Fe(.7,.95,1.5,10),t.skin,0,.55,-.35,-.75,0,0);const l=sn(o,{mat:t.skin,dark:t.dark,eyeMat:t.eye,teeth:t.teeth,mouth:t.mouth,claw:t.claw,x:0,y:1.25,z:-1.05,scale:1.05,snout:1.25,crest:!0,horns:2});i.head=l.head,i.jaw=l.jaw,it(l.head,ge(.2,1.2,5),t.plate,0,.5,.4,-.5,0,0,1,1,.35),it(l.head,ge(.14,.8,5),t.plate,-.4,.45,.2,-.3,0,-.5),it(l.head,ge(.14,.8,5),t.plate,.4,.45,.2,-.3,0,.5);const c=[[-1.15,-2.1,"FL"],[1.15,-2.1,"FR"],[-1.15,1.7,"BL"],[1.15,1.7,"BR"]];for(const[u,f,p]of c){const _=p[0]==="F",g=Oe(a,{x:u,y:-.4,z:f,upper:_?1.55:1.65,lower:_?1.35:1.4,r1:.42,r2:.32,r3:.24,mat:t.skin,endMat:t.dark,rot:[0,0,0]});it(g.end,ae(.7,.3,1),t.dark,0,-.12,-.25),Oi(g.end,t.claw,3,.18,.35,-.2,-.7),i[`leg${p}`]=g}i.legL=i.legFL,i.legR=i.legFR;const h=en(a,{count:9,length:.72,r:.55,taper:.9,mat:t.skin,plateMat:t.plate,plateScale:1,x:0,y:0,z:1.9,droop:-.05});i.tail=h.segs;const d=Hn(n.id);for(let u=0;u<16;u++){const f=-3.2+d()*4.2,p=(d()-.5)*2.2,_=.5+d()*1.6;it(r,ge(.16+d()*.2,_,5),t.plate,p,1.25,f,(d()-.5)*.4,d()*We,(d()-.5)*.4)}for(const u of[-1,1])it(a,ge(.3,1.4,5),t.plate,u*1.2,1,.3,-.2,0,u*.35);return i.chestGlow=it(r,Le(.4,8,6),t.plateHot,0,.4,-2.7,0,0,0,1,1.3,.4),i.glowParts=[i.chestGlow],{group:e,rig:i,baseHeight:7.4}}function av(n){const t=nn(n),e=new me,i={family:"scylla",def:n,mats:t,root:e,baseHeight:7.8},a=Xt(e,0,4.2,0);i.pelvis=a,de(a,t.skin,0,0,0,1.4,1,1.6,16,12),de(a,t.belly,0,-.35,-.5,1,.55,1,12,8);const r=Xt(a,0,.4,-.6);i.torso=r,de(r,t.skin,0,.2,-.6,1.15,1,1.4,14,10),$i(r,t,15,[.9,.2,1,.9],Hn(n.id),.7);const o=Xt(r,0,.8,-1.3);i.neck=o,it(o,Fe(.35,.5,.8,8),t.skin,0,.2,-.35,-.7,0,0);const l=sn(o,{mat:t.skin,dark:t.dark,eyeMat:t.eye,teeth:t.teeth,mouth:t.mouth,claw:t.claw,x:0,y:.65,z:-.85,scale:.9,snout:1,horns:2});i.head=l.head,i.jaw=l.jaw;for(let h=0;h<4;h++)it(l.head,Le(.07,6,5),t.eye,-.2+h%2*.4,.1+Math.floor(h/2)*.18,-.72);const c=[];for(let h=0;h<4;h++)for(const d of[-1,1]){const u=Xt(a,d*1,-.1,-.6+h*.45);u.rotation.y=d*(.25+h*.18);const f=Oe(u,{x:0,y:0,z:0,upper:2.3,lower:2.1,r1:.22,r2:.15,r3:.08,mat:t.skin,endMat:t.dark,rot:[.2,0,d*(.75+h*.06)]});f.root.rotation.z=d*(.7+h*.07),f.upper.rotation.x=-.25,it(f.end,ge(.1,.7,5),t.claw,0,-.25,0,Math.PI,0,0),c.push({base:u,limb:f,side:d,index:h})}i.legs=c,i.tentacles=[];for(let h=0;h<6;h++){const d=en(r,{count:5,length:.5,r:.16,taper:.8,mat:t.skin,x:(h-2.5)*.24,y:0,z:-1.35,droop:.35+h*.02,spikes:!1,side:(h-2.5)*.15});i.tentacles.push(d.segs)}for(let h=0;h<5;h++)it(a,Le(.16,6,5),t.plateHot,(h-2)*.4,.55,.4,0,0,0,1,1.3,1);return i.chestGlow=it(r,Le(.3,8,6),t.plateHot,0,.3,-1.2),i.glowParts=[i.chestGlow],{group:e,rig:i,baseHeight:7.8}}function rv(n){const t=nn(n),e=new me,i={family:"tiamat",def:n,mats:t,root:e,baseHeight:9.4},s=Xt(e,0,.45,1.8);i.pelvis=s;const a=[];let r=s;for(let l=0;l<11;l++){const c=Xt(r);c.rotation.x=l===0?-.15:l<4?.22:-.16,c.rotation.z=Math.sin(l*.7)*.07;const h=.62*Math.pow(.9,l);it(c,Fe(h*.9,h,.86,10),t.skin,0,.43,0);for(const d of[-1,1])it(c,ge(h*.55,h*1.5,4),t.plate,d*h*.7,.45,0,0,0,d*(.9+.1*Math.sin(l)));it(c,ge(h*.35,h*1.4,4),t.plate,0,.42,-h*.5,-.2,0,0,1,1,.4),a.push(c),r=Xt(c,0,.86,0)}i.segments=a,i.tail=a;const o=sn(r,{mat:t.skin,dark:t.dark,eyeMat:t.eye,teeth:t.teeth,mouth:t.mouth,claw:t.claw,x:0,y:.2,z:-.35,scale:1.15,snout:1.2,horns:2,crest:!0});i.head=o.head,i.jaw=o.jaw,it(o.head,ge(.3,1.2,5),t.plate,0,.6,.35,-.5,0,0,1,1,.3);for(const l of[-1,1])it(o.head,ge(.15,.8,5),t.plate,l*.45,.45,.25,-.3,0,l*.7);for(const l of[-1,1]){const c=Xt(a[3],l*.55,.3,0);it(c,ge(.35,1.6,4),t.membrane,0,-.5,0,0,0,l*1.1,1,1,.2)}return i.chestGlow=it(a[2],Le(.28,8,6),t.plateHot,0,.4,-.5),i.glowParts=[i.chestGlow],{group:e,rig:i,baseHeight:9.4}}const ov={godzilla:hd,kong:jx,mecha:tv,ghidorah:ev,rodan:iv,mothra:nv,shimo:sv,scylla:av,tiamat:rv};function lv(n){const e=(ov[n.family]||hd)(n),i=new me,s=e.group,a=n.height/e.baseHeight;s.scale.setScalar(a),i.add(s);const r=e.rig;r.scale=a,r.visual=s,r.outer=i,r.height=n.height,$x(r);const o=new lr(n.height*.55,n.height*.62,40),l=new Xe({color:5227519,transparent:!0,opacity:.32,side:Ye,depthWrite:!1,blending:ri}),c=new _t(o,l);return c.rotation.x=-Math.PI/2,c.position.y=.15,i.add(c),r.teamRing=c,r.teamRingMat=l,i.userData.monsterId=n.id,i.userData.rig=r,{group:i,rig:r,scale:a}}const Ai=[{id:"godzilla2014",name:"Godzilla 2014",short:"GODZILLA",era:"2014",family:"godzilla",tagline:"The King of the Monsters awakens.",bio:"A primordial apex predator, awakened by mankind's reckless tampering with nature. Broad, scarred and impossibly heavy, this Godzilla fights with raw mass and ancient instinct.",colors:{primary:4869447,secondary:2895659,accent:8226170,eye:16757854,glow:8378623},height:108,mass:9e4,speed:20,runSpeed:35,health:1250,stamina:100,attack:72,defense:82,speedStat:55,power:88,style:"scales",build:{bulk:1.12,plateScale:1,head:"broad",glow:.15,scars:!0},abilities:{light:"Claw Swipe",heavy:"Tail Slam",special:"Atomic Breath",grab:"Jaw Lock",roar:"Alpha Roar",dodge:"Weight Shift",jump:"Seismic Stomp"},special:{type:"beam",name:"Atomic Breath",damage:34,cooldown:9,range:210,color:9431039,secondary:3112191,desc:"A focused torrent of nuclear plasma."},combo:["light","light","heavy"]},{id:"godzilla2019",name:"Godzilla 2019",short:"GODZILLA",era:"2019",family:"godzilla",tagline:"The alpha titan. The balance of nature.",bio:"Risen from the deep and crowned by the titans, this Godzilla is larger, more powerful and more aggressive. His dorsal plates burn with a hotter, brighter nuclear fire.",colors:{primary:4014400,secondary:2304039,accent:7240308,eye:16762477,glow:6737151},height:118,mass:99634,speed:21,runSpeed:37,health:1380,stamina:100,attack:80,defense:86,speedStat:58,power:94,style:"scales",build:{bulk:1.16,plateScale:1.18,head:"broad",glow:.28,scars:!1},abilities:{light:"Claw Swipe",heavy:"Tail Whip",special:"Nuclear Pulse",grab:"Jaw Lock",roar:"Alpha Call",dodge:"Weight Shift",jump:"Seismic Stomp"},special:{type:"pulse",name:"Nuclear Pulse",damage:42,cooldown:11,range:46,color:9431039,secondary:3112191,desc:"A shockwave of raw nuclear energy."},combo:["light","heavy","light"]},{id:"godzilla2021",name:"Godzilla 2021",short:"GODZILLA",era:"2021",family:"godzilla",tagline:"A force of nature. An unstoppable will.",bio:"Scarred by war and driven by instinct, this Godzilla is a battle-hardened king. Every step shakes the earth; every breath cuts through steel and stone.",colors:{primary:3488572,secondary:1975333,accent:8162701,eye:16765562,glow:6279935},height:120,mass:102e3,speed:22,runSpeed:38,health:1420,stamina:105,attack:84,defense:87,speedStat:60,power:97,style:"scales",build:{bulk:1.18,plateScale:1.24,head:"broad",glow:.34,scars:!0},abilities:{light:"Claw Swipe",heavy:"Tail Slam",special:"Atomic Breath",grab:"Jaw Lock",roar:"King's Roar",dodge:"Weight Shift",jump:"Seismic Stomp"},special:{type:"beam",name:"Atomic Breath",damage:38,cooldown:9,range:230,color:10481407,secondary:3112191,desc:"Superheated atomic plasma, focused to a razor point."},combo:["light","light","heavy"]},{id:"godzillaEvolved",name:"Godzilla Evolved",short:"EVOLVED",era:"2024",family:"godzilla",tagline:"Evolution perfected by nuclear fire.",bio:"A new form forged in the fires of Hollow Earth. Leaner, faster and charged with crimson energy, the Evolved King is the most dangerous Godzilla ever recorded.",colors:{primary:2895667,secondary:1448478,accent:9060178,eye:16730723,glow:16727416},height:124,mass:105e3,speed:25,runSpeed:43,health:1460,stamina:115,attack:92,defense:84,speedStat:70,power:100,style:"scales",build:{bulk:1.08,plateScale:1.38,head:"evolved",glow:.72,scars:!1,evolved:!0},abilities:{light:"Rending Claw",heavy:"Tail Cleave",special:"Spiral Breath",grab:"Jaw Lock",roar:"Evolution Roar",dodge:"Blink Step",jump:"Seismic Stomp"},special:{type:"beam",name:"Spiral Atomic Breath",damage:46,cooldown:12,range:260,color:16743080,secondary:11869183,desc:"A spiraling beam of unstable nuclear energy."},combo:["light","light","heavy"]},{id:"kong2017",name:"King Kong 2017",short:"KONG",era:"2017",family:"kong",tagline:"The king of Skull Island.",bio:"A titanic silverback raised in a world of monsters. Kong is fast, cunning and brutally strong, fighting with fists, grapples and a protector's fury.",colors:{primary:3812130,secondary:1906193,accent:7033408,eye:14266986,glow:16757086},height:96,mass:55e3,speed:28,runSpeed:48,health:1180,stamina:120,attack:78,defense:72,speedStat:78,power:86,style:"fur",build:{bulk:1.05,beard:.3,axe:!1,armor:!1,scars:!0},abilities:{light:"Hammer Fist",heavy:"Overhead Smash",special:"Ground Slam",grab:"Grapple",roar:"Island Roar",dodge:"Knuckle Roll",jump:"Leap Slam"},special:{type:"shockwave",name:"Ground Slam",damage:36,cooldown:8,range:44,color:14133099,secondary:8015138,desc:"A thunderous two-fisted slam that buckles the earth."},combo:["light","light","heavy"]},{id:"kong2021",name:"King Kong 2021",short:"KONG",era:"2021",family:"kong",tagline:"The axe. The king. The challenger.",bio:"Older, scarred and armed with a battle-axe carved from a Godzilla dorsal plate, Kong is ready to challenge the throne of the titans.",colors:{primary:4404007,secondary:2365970,accent:8151113,eye:14728566,glow:16761446},height:112,mass:62e3,speed:29,runSpeed:50,health:1280,stamina:125,attack:86,defense:76,speedStat:80,power:92,style:"fur",build:{bulk:1.1,beard:.62,axe:!0,armor:!1,scars:!0},abilities:{light:"Axe Feint",heavy:"Axe Cleave",special:"Thunder Axe",grab:"Grapple",roar:"Kong Roar",dodge:"Knuckle Roll",jump:"Leap Slam"},special:{type:"cleave",name:"Thunder Axe",damage:44,cooldown:10,range:40,color:16761963,secondary:16742958,desc:"A charged axe strike that detonates on impact."},combo:["light","heavy","heavy"]},{id:"kong2024",name:"King Kong 2024",short:"KONG",era:"2024",family:"kong",tagline:"The protector of Hollow Earth.",bio:"Armored, wiser and stronger than ever, Kong has become the guardian of a hidden world. His thunder-charged axe and battle gauntlet make him a match for any titan.",colors:{primary:4864043,secondary:2365971,accent:9071440,eye:16765562,glow:16765803},height:118,mass:68e3,speed:30,runSpeed:52,health:1340,stamina:130,attack:90,defense:82,speedStat:83,power:95,style:"fur",build:{bulk:1.15,beard:.72,axe:!0,armor:!0,scars:!0},abilities:{light:"Gauntlet Jab",heavy:"Axe Cleave",special:"Thunder Axe",grab:"Grapple",roar:"Hollow Earth Roar",dodge:"Knuckle Roll",jump:"Leap Slam"},special:{type:"cleave",name:"Thunder Axe",damage:46,cooldown:10,range:42,color:16765803,secondary:16747054,desc:"A Hollow Earth-charged axe blow that tears through buildings."},combo:["light","heavy","heavy"]},{id:"mechagodzilla",name:"Mechagodzilla",short:"MECHAGODZILLA",era:"2021",family:"mecha",tagline:"The apex of human destruction.",bio:"A weapon built by humanity to kill gods. Faster and more precise than any living titan, Mechagodzilla is driven by a malevolent artificial intelligence.",colors:{primary:5988456,secondary:2303789,accent:10134445,eye:16723261,glow:16720435},height:116,mass:12e4,speed:26,runSpeed:46,health:1320,stamina:95,attack:89,defense:90,speedStat:72,power:93,style:"metal",build:{bulk:1,plateScale:1.1,head:"mech",glow:1,scars:!1,mech:!0},abilities:{light:"Piston Punch",heavy:"Rocket Kick",special:"Proton Scream",grab:"Tractor Grip",roar:"System Override",dodge:"Thruster Dash",jump:"Rocket Stomp"},special:{type:"beam",name:"Proton Scream",damage:40,cooldown:8,range:240,color:16730719,secondary:16715792,desc:"A red proton laser that cuts through anything in its path."},combo:["light","light","heavy"]},{id:"ghidorah",name:"King Ghidorah",short:"GHIDORAH",era:"2019",family:"ghidorah",tagline:"The golden death. The false king.",bio:"A three-headed hydra from beyond the stars. Ghidorah is a living extinction event, commanding storms and firing gravity beams from each of his three maws.",colors:{primary:10123826,secondary:4864536,accent:14203226,eye:16771466,glow:16765773},height:145,mass:141056,speed:24,runSpeed:42,health:1580,stamina:120,attack:95,defense:80,speedStat:66,power:100,style:"gold",build:{bulk:1,wingSpan:2.4,glow:.5,necks:3},abilities:{light:"Talon Rake",heavy:"Tail Lash",special:"Gravity Beams",grab:"Triple Bite",roar:"Titan Call",dodge:"Wing Gust",jump:"Wing Slam"},special:{type:"tripleBeam",name:"Gravity Beams",damage:44,cooldown:10,range:250,color:16769658,secondary:16757504,desc:"Three crackling gravity beams fired from all three heads."},combo:["light","heavy","light"]},{id:"rodan",name:"Rodan",short:"RODAN",era:"2019",family:"rodan",tagline:"The fire demon of the volcano.",bio:"A volcanic pterosaur whose wingbeats ignite the sky. Rodan is a living hurricane, dive-bombing foes in a trail of molten rock and ash.",colors:{primary:7220769,secondary:3347472,accent:12082235,eye:16757575,glow:16739118},height:76,mass:39e3,speed:36,runSpeed:62,health:980,stamina:135,attack:82,defense:62,speedStat:95,power:84,style:"scales",build:{bulk:.86,wingSpan:2.8,glow:.45,crest:!0},abilities:{light:"Beak Strike",heavy:"Wing Buffet",special:"Firestorm Dive",grab:"Talon Grab",roar:"Volcanic Screech",dodge:"Aerial Roll",jump:"Take Flight"},special:{type:"firestorm",name:"Firestorm Dive",damage:40,cooldown:9,range:80,color:16751165,secondary:16726784,desc:"A blazing dive that carpets the ground in fire."},combo:["light","light","heavy"]},{id:"mothra",name:"Mothra",short:"MOTHRA",era:"2019",family:"mothra",tagline:"The queen of the monsters.",bio:"A radiant guardian of life, Mothra fights with divine light and selfless courage. Her wings scatter healing scales and searing god rays across the battlefield.",colors:{primary:9075804,secondary:4011046,accent:16049832,eye:8388577,glow:8388577},height:62,mass:18e3,speed:34,runSpeed:58,health:900,stamina:145,attack:74,defense:60,speedStat:92,power:80,style:"fur",build:{bulk:.8,wingSpan:3.2,glow:.9,antennae:!0},abilities:{light:"Claw Flurry",heavy:"Wing Gale",special:"God Rays",grab:"Silk Bind",roar:"Queen's Song",dodge:"Scale Drift",jump:"Hover"},special:{type:"godrays",name:"God Rays",damage:30,cooldown:9,range:220,color:11075561,secondary:3790591,desc:"Piercing beams of divine light that sear titan flesh."},combo:["light","light","heavy"]},{id:"shimo",name:"Shimo",short:"SHIMO",era:"2024",family:"shimo",tagline:"The first titan. The ice age made flesh.",bio:"An ancient quadruped titan whose breath can freeze continents. Shimo is slow to anger and utterly relentless once roused, armored in glacial crystal.",colors:{primary:10467528,secondary:5400698,accent:15005695,eye:10481919,glow:7068927},height:94,mass:13e4,speed:18,runSpeed:32,health:1520,stamina:110,attack:84,defense:95,speedStat:50,power:96,style:"ice",build:{bulk:1.3,spikes:1.3,glow:.6},abilities:{light:"Crystal Ram",heavy:"Glacial Tail",special:"Absolute Zero",grab:"Frost Bite",roar:"Ancient Call",dodge:"Ice Slide",jump:"Glacier Stomp"},special:{type:"freezeBeam",name:"Absolute Zero Breath",damage:34,cooldown:9,range:220,color:12449535,secondary:5228799,desc:"A beam of absolute cold that freezes everything it touches."},combo:["light","heavy","light"]},{id:"scylla",name:"Scylla",short:"SCYLLA",era:"2019",family:"scylla",tagline:"The many-legged terror of the deep.",bio:"A colossal arachnid titan with a nest of writhing tentacles. Scylla poisons the earth and drains the life from everything in her path.",colors:{primary:4865362,secondary:2234921,accent:9202336,eye:12815359,glow:11623679},height:82,mass:72e3,speed:25,runSpeed:40,health:1080,stamina:115,attack:80,defense:74,speedStat:72,power:83,style:"scales",build:{bulk:1.1,legs:8,glow:.5},abilities:{light:"Leg Skewer",heavy:"Tentacle Slam",special:"Acid Spray",grab:"Tentacle Coil",roar:"Chitin Screech",dodge:"Skitter",jump:"Leg Launch"},special:{type:"acid",name:"Acid Spray",damage:32,cooldown:8,range:70,color:14090078,secondary:8257326,desc:"A corrosive spray that melts steel and stone."},combo:["light","light","heavy"]},{id:"tiamat",name:"Tiamat",short:"TIAMAT",era:"2021",family:"tiamat",tagline:"The serpent beneath the waves.",bio:"A colossal sea serpent that coils through sunken temples and storm-tossed waters. Tiamat strikes with blinding speed and crushing constriction.",colors:{primary:2378328,secondary:1059379,accent:5151912,eye:8388584,glow:3991762},height:86,mass:76e3,speed:31,runSpeed:48,health:1120,stamina:125,attack:83,defense:70,speedStat:84,power:86,style:"scales",build:{bulk:.95,fins:1.2,glow:.4},abilities:{light:"Fang Lunge",heavy:"Coil Slam",special:"Abyssal Torrent",grab:"Constrict",roar:"Abyss Roar",dodge:"Wave Slip",jump:"Breach"},special:{type:"beam",name:"Abyssal Torrent",damage:37,cooldown:9,range:235,color:8388592,secondary:43208,desc:"A pressurized jet of abyssal water that punches through concrete."},combo:["light","heavy","light"]}],cv=Object.fromEntries(Ai.map(n=>[n.id,n])),jr=[5227519,16731486,16765773,9109370],to=["ALPHA","OMEGA","GAMMA","DELTA"];function pn(n){return cv[n]||Ai[0]}const Jo=Math.PI*2,Ve=(n,t,e)=>Math.max(t,Math.min(e,n)),un=(n,t,e,i)=>n+(t-n)*(1-Math.exp(-e*i));function hv(n){const t=n.attack/100,e=n.height;return{light:{dur:.52,hit:.28,range:e*.44,arc:.95,damage:9+t*11,force:6+t*7,stamina:4,cd:.04},heavy:{dur:.94,hit:.5,range:e*.56,arc:.8,damage:18+t*19,force:14+t*12,stamina:12,cd:.35},tail:{dur:.82,hit:.4,range:e*.72,arc:1.85,damage:14+t*13,force:12+t*9,stamina:10,cd:.25},bite:{dur:.62,hit:.3,range:e*.36,arc:.62,damage:12+t*15,force:8+t*7,stamina:5,cd:.08},stomp:{dur:.82,hit:.56,range:e*.46,arc:Jo,damage:14+t*13,force:16+t*11,stamina:10,cd:.4,aoe:!0},grab:{dur:1.5,hit:.34,range:e*.34,arc:.7,damage:6,force:10,stamina:14,cd:3},roar:{dur:1.5,hit:.18,range:0,arc:Jo,damage:0,force:0,stamina:4,cd:4.5},axe:{dur:1,hit:.52,range:e*.55,arc:.8,damage:22+t*20,force:18+t*12,stamina:14,cd:.6}}}class eo{constructor(t){this.m=t,this.think=0,this.target=null,this.blockTimer=0,this.strafe=Math.random()>.5?1:-1,this.strafeTimer=0,this.rampage=!1,this.attackCooldown=0,this.specialWish=0}update(t){const e=this.m;if(e.dead||e.state.grabbed||(this.think-=t,this.attackCooldown-=t,this.blockTimer-=t,this.strafeTimer-=t,this.strafeTimer<=0&&(this.strafeTimer=1.5+Math.random()*2.5,this.strafe*=-1),this.think>0))return;this.think=.18+Math.random()*.18;const i=e.game.monsters.filter(p=>p!==e&&!p.dead&&p.team!==e.team);let s=null,a=1e9;for(const p of i){const _=e.root.position.distanceTo(p.root.position);_<a&&(a=_,s=p)}!s&&e.game.mode==="battle"&&e.game.player&&e.game.player.team!==e.team&&!e.game.player.dead&&(s=e.game.player,a=e.root.position.distanceTo(s.root.position)),this.target=s,e.target=s;const r=e.intent;if(r.moveX=0,r.moveZ=0,r.run=!1,r.block=!1,r.attack=null,r.special=!1,r.dodge=!1,r.jump=!1,r.grab=!1,r.roar=!1,e.state.ragdoll)return;if(!s){const p=e.game.city.buildings.filter(M=>!M.destroyed);if(!p.length)return;let _=null,g=1e9;for(const M of p){const E=Math.hypot(M.x-e.root.position.x,M.z-e.root.position.z);E<g&&(g=E,_=M)}if(!_)return;const m=_.x-e.root.position.x,v=_.z-e.root.position.z,y=Math.hypot(m,v);y>Math.max(_.width,_.depth)*.7+e.radius+8?(r.moveX=m/(y||1),r.moveZ=v/(y||1),r.run=y>90):(r.aimYaw=Math.atan2(-m,-v),this.attackCooldown<=0&&(r.attack=Math.random()>.55?"heavy":"light",this.attackCooldown=.9+Math.random()*.8));return}const o=s.root.position.x-e.root.position.x,l=s.root.position.z-e.root.position.z,c=Math.hypot(o,l),h=e.attackDefs.light.range+e.radius*.5,d=e.attackDefs.heavy.range+e.radius*.4;r.aimYaw=Math.atan2(-o,-l),r.faceTarget=s,s.state.attack&&c<h*1.7&&(s.state.attack.kind==="heavy"&&Math.random()<.3?r.dodge=!0:Math.random()<.26&&(r.block=!0,this.blockTimer=.5)),this.blockTimer>0&&(r.block=!0),e.hp<e.maxHp*.28&&Math.random()<.15&&(r.roar=!0);const u=e.def.special,f=u.type==="beam"||u.type==="tripleBeam"||u.type==="freezeBeam"||u.type==="godrays"?u.range*.7:u.range;if(e.cooldowns.special<=0&&e.stamina>28&&c<f&&Math.random()<.5&&(r.special=!0),c>h*1.05){let p=o/(c||1),_=l/(c||1);c<h*2.6&&Math.random()<.35&&(p+=-l/(c||1)*.35*this.strafe,_+=o/(c||1)*.35*this.strafe);const g=Math.hypot(p,_)||1;r.moveX=p/g,r.moveZ=_/g,r.run=c>h*2.4,e.blockedTimer>.45&&this.attackCooldown<=0&&(r.attack="heavy",this.attackCooldown=1.1),c<d&&this.attackCooldown<=0&&Math.random()<.35&&(r.attack="heavy",this.attackCooldown=1.2+Math.random()*.6)}else{if(this.attackCooldown<=0&&!e.state.attack&&!e.state.ragdoll){const p=Math.random();p<.55?r.attack="light":p<.78?r.attack="heavy":p<.88?r.attack="bite":p<.95?r.attack="tail":r.grab=!0,this.attackCooldown=.7+Math.random()*.9}c<h*.45&&Math.random()<.4&&(r.moveX=-o/(c||1)*.4,r.moveZ=-l/(c||1)*.4)}s.state.ragdoll&&c<d&&this.attackCooldown<=0&&(r.attack="heavy",this.attackCooldown=1.4),s.state.attack?.kind==="special"&&Math.random()<.2&&(r.dodge=!0),e.hp<e.maxHp*.35&&Math.random()<.25&&(r.dodge=!0)}}class dv{constructor(t,e,i={}){this.game=t,this.def=e,this.team=i.team??0,this.isPlayer=!!i.player,this.name=e.name,this.height=e.height,this.radius=e.height*.135,this.maxHp=e.health,this.hp=this.maxHp,this.maxStamina=e.stamina,this.stamina=this.maxStamina,this.mass=e.mass,this.attackDefs=hv(e),this.cooldowns={special:0,grab:0,dodge:0,roar:0,jump:0},this.state={speed:0,running:!1,walkPhase:Math.random()*Jo,grounded:!0,attack:null,block:!1,hitPulse:0,hitDir:1,ragdoll:!1,dead:!1,grabbed:!1,dodge:0,jumpY:0,jumpVel:0,burn:0,freeze:0,shock:0,specialTick:0,recovery:0,flying:!1},this.intent={moveX:0,moveZ:0,run:!1,block:!1,attack:null,special:!1,dodge:!1,jump:!1,grab:!1,roar:!1,aimYaw:null,faceTarget:null},this.velocity=new R,this.yaw=i.yaw??0,this.target=null,this.balance=100,this.maxBalance=100,this.ragdollTime=0,this.ragdollTotal=0,this.fallPitch=0,this.fallRoll=0,this.grabTarget=null,this.grabbedBy=null,this.dead=!1,this.activeBeams=[],this.beamStop=null,this.invuln=0,this.blockedTimer=0,this.stepTimer=0,this.deathTimer=0,this.statusTimer=0,this.combo=0,this.queued=null,this.spawnPoint=new R(i.x??0,0,i.z??0),this.root=new me;const{group:s,rig:a}=lv(e);this.rig=a,this.model=s,this.root.add(s),this.root.position.copy(this.spawnPoint),this.root.rotation.y=this.yaw,t.scene.add(this.root),Kx(a,jr[this.team]??16777215),a.teamRingMat.opacity=this.isPlayer?.45:.28,this.visual=a.visual,this.baseY=0,this.createHealthBar(),this.ai=i.ai===!1?null:new eo(this),this.state.hitFlash=0,this.audioStepTimer=0,this.lastDamageTime=0,this.game.hud?.onMonsterSpawn?.(this)}createHealthBar(){const t=this.height*.6,e=this.height*.028,i=new me,s=new _t(new hi(t,e),new Xe({color:592653,transparent:!0,opacity:.82,depthTest:!1,depthWrite:!1}));s.renderOrder=20,i.add(s);const a=new _t(new hi(t,e*.72),new Xe({color:jr[this.team]??5227519,depthTest:!1,depthWrite:!1,toneMapped:!1}));a.position.z=.01,a.renderOrder=21,i.add(a),i.position.y=this.height*1.12,this.game.scene.add(i),this.healthBar=i,this.healthFill=a,this.healthWidth=t}setPlayer(t){this.isPlayer=t,this.rig.teamRingMat.opacity=t?.45:.28,t?(this.ai=null,this.intent.attack=null):this.ai||(this.ai=new eo(this)),this.healthBar.visible=!t}setAI(t){t?this.ai||(this.ai=new eo(this)):(this.ai=null,this.intent.moveX=0,this.intent.moveZ=0,this.intent.attack=null,this.intent.special=!1)}get forward(){return new R(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}get forwardFlat(){return new R(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}get right(){return new R(Math.cos(this.yaw),0,-Math.sin(this.yaw))}headWorld(t=new R){return this.rig.head?this.rig.head.getWorldPosition(t):t.copy(this.root.position).add(new R(0,this.height*.8,0)),t}canAct(){return!this.dead&&!this.state.ragdoll&&!this.state.grabbed}update(t){this.invuln=Math.max(0,this.invuln-t),this.blockedTimer=Math.max(0,this.blockedTimer-t),this.state.hitPulse=Math.max(0,this.state.hitPulse-t*4),this.state.hitFlash=Math.max(0,this.state.hitFlash-t*7);for(const i of Object.keys(this.cooldowns))this.cooldowns[i]=Math.max(0,this.cooldowns[i]-t);if(this.stamina=Math.min(this.maxStamina,this.stamina+t*(this.state.block?2:14)),this.state.block&&(this.stamina=Math.max(0,this.stamina-t*9)),this.balance=Math.min(this.maxBalance,this.balance+t*(this.state.ragdoll?0:9)),this.statusUpdate(t),this.state.grabbed){this.followGrab(t),this.updateVisual(t);return}if(this.dead){this.updateRagdoll(t,!0),this.updateVisual(t);return}if(this.state.ragdoll){this.updateRagdoll(t,!1),this.updateVisual(t);return}this.ai&&this.ai.update(t);const e=this.intent;if(this.state.block=!!e.block&&this.stamina>0,this.state.block&&(this.state.attack=null),this.state.dodge>0){this.state.dodge-=t,this.root.position.addScaledVector(this.velocity,t),this.resolveCollisions(t,!0),this.updateVisual(t);return}e.dodge&&this.cooldowns.dodge<=0&&this.stamina>12&&this.canAct()&&this.startDodge(e),e.jump&&this.cooldowns.jump<=0&&this.canAct()&&this.startJump(),e.attack&&this.canAct()&&!this.state.attack&&(this.startAttack(e.attack,e.aimYaw),this.intent.attack=null),e.special&&this.canAct()&&!this.state.attack&&this.cooldowns.special<=0&&this.stamina>24&&(this.startSpecial(e.aimYaw),this.intent.special=!1),e.grab&&this.canAct()&&!this.state.attack&&this.cooldowns.grab<=0&&this.stamina>12&&(this.startAttack("grab",e.aimYaw),this.intent.grab=!1),e.roar&&this.canAct()&&!this.state.attack&&this.cooldowns.roar<=0&&(this.startAttack("roar",e.aimYaw),this.intent.roar=!1),this.state.attack?this.updateAttack(t):this.updateMovement(t,e),(this.state.jumpVel!==0||this.state.jumpY>0)&&(this.state.jumpVel-=42*t,this.state.jumpY+=this.state.jumpVel*t,this.state.jumpY<=0&&(this.state.jumpY=0,this.state.jumpVel<-4&&this.land(),this.state.jumpVel=0)),this.root.position.y=this.state.jumpY,this.updateVisual(t)}updateMovement(t,e){let i=e.moveX||0,s=e.moveZ||0;const a=Math.hypot(i,s);let r=0;if(a>.05&&!this.state.block){i/=a,s/=a,r=(e.run?this.def.runSpeed:this.def.speed)*(this.state.freeze>0?.55:1),this.state.block&&(r*=.25);const h=Math.atan2(-i,-s);this.yaw=un(this.yaw,h,8,t)}else if(e.faceTarget&&!this.state.attack){const h=e.faceTarget.root.position.x-this.root.position.x,d=e.faceTarget.root.position.z-this.root.position.z;this.yaw=un(this.yaw,Math.atan2(-h,-d),5,t)}this.state.block&&(r=0);const o=r>0?22:30,l=Math.sin(this.yaw)*-r,c=Math.cos(this.yaw)*-r;this.velocity.x=un(this.velocity.x,l,o/8,t),this.velocity.z=un(this.velocity.z,c,o/8,t),a<.05&&!this.state.attack&&(this.velocity.x=un(this.velocity.x,0,4,t),this.velocity.z=un(this.velocity.z,0,4,t)),this.root.position.x+=this.velocity.x*t,this.root.position.z+=this.velocity.z*t,this.state.speed=Math.hypot(this.velocity.x,this.velocity.z),this.state.running=e.run&&this.state.speed>this.def.speed*.7,this.state.speed>.3&&(this.state.walkPhase+=t*(this.state.running?2.1:1.15)*(.7+this.state.speed/60)),this.resolveCollisions(t,!1),this.root.rotation.y=this.yaw,this.stepTimer-=t*(.4+this.state.speed/30),this.stepTimer<=0&&this.state.speed>1&&(this.stepTimer=this.state.running?.28:.5,this.footstep()),this.root.position.x=Ve(this.root.position.x,-420,420),this.root.position.z=Ve(this.root.position.z,-420,420)}footstep(){const t=this.forward,e=this.root.position.clone().add(new R(t.z*this.radius*.5,.5,-t.x*this.radius*.5));this.game.effects.dust(e,this.radius*.4,4,11049606),(this.isPlayer||this.game.camera.position.distanceTo(e)<220)&&(this.audioStepTimer-=1,this.audioStepTimer<=0&&(this.game.audio.stomp(.55),this.audioStepTimer=2,this.game.effects.shakeCamera(.08,.2)))}resolveCollisions(t,e){const i=this.game.city.collideCircle(this.root.position.x,this.root.position.z,this.radius);if(i.pushX||i.pushZ){this.root.position.x+=i.pushX,this.root.position.z+=i.pushZ,this.blockedTimer=.5;const s=Math.hypot(this.velocity.x,this.velocity.z);if(s>8&&i.hit){const a=s*this.mass/25e4*(e?.4:1);i.hit.damage(a,this.root.position.clone().setY(this.height*.5),{source:this}),this.velocity.multiplyScalar(.55),this.game.effects.dust(this.root.position.clone().setY(this.height*.3),this.radius,8,10129280),this.game.audio.impact(.6)}}}startAttack(t,e=null){if(!this.canAct())return;if(t==="grab"&&this.grabTarget){this.throwGrabbed();return}const i=this.attackDefs[t]||this.attackDefs.light;if(this.stamina<i.stamina){this.isPlayer&&this.game.hud?.toast("NOT ENOUGH STAMINA","warn");return}t==="grab"&&this.cooldowns.grab>0||(e!=null&&(this.yaw=e),this.stamina-=i.stamina,this.state.attack={kind:t,t:0,dur:i.dur,hit:i.hit,hitDone:!1,alt:this.combo%2===1,stats:i,aimYaw:e},this.combo++,t==="roar"&&(this.cooldowns.roar=i.cd,this.game.audio.roar(this.def),this.game.roarWave?.(this)),t==="grab"&&(this.cooldowns.grab=i.cd),this.isPlayer&&this.game.hud?.onAction(t))}startSpecial(t=null){if(!this.canAct()||this.cooldowns.special>0)return;const e=this.def.special;t!=null&&(this.yaw=t),this.stamina-=24,this.cooldowns.special=e.cooldown,this.state.attack={kind:"special",t:0,dur:e.type==="beam"||e.type==="tripleBeam"||e.type==="freezeBeam"||e.type==="godrays"?1.8:1.15,hit:.42,hitDone:!1,special:e,stats:{damage:e.damage,range:e.range,force:20},aimYaw:t},this.game.audio.roar(this.def),this.game.hud?.onAction("special"),this.isPlayer&&this.game.hud?.setSpecialName(e.name)}startDodge(t){this.stamina-=12,this.cooldowns.dodge=1.4,this.invuln=.45,this.state.dodge=.38,this.state.attack=null;const e=this.forward;let i=t.moveX||0,s=t.moveZ||0;Math.hypot(i,s)<.1&&(i=-e.x,s=-e.z);const a=Math.hypot(i,s)||1;this.velocity.set(i/a*this.def.runSpeed*1.8,0,s/a*this.def.runSpeed*1.8),this.game.effects.dust(this.root.position.clone(),this.radius*.7,12,11049606),this.game.audio.whoosh()}startJump(){this.stamina-=8,this.cooldowns.jump=1.8,this.state.jumpVel=this.def.family==="rodan"||this.def.family==="mothra"?34:20,this.state.jumpY=.1,this.game.effects.dust(this.root.position.clone(),this.radius,10,11049606)}land(){const t=this.radius*2.4;this.game.effects.dust(this.root.position.clone(),t,26,11049606),this.game.effects.shakeCamera(.5,.5),this.game.audio.stomp(1.2),this.game.aoe(this,this.root.position,t,8+this.def.attack*.08,12,"impact",{shake:!0})}updateAttack(t){const e=this.state.attack;e.t+=t;const i=e.t/e.dur;if(e.kind!=="special"&&e.kind!=="roar"){const s=Math.sin(Ve(i,0,1)*Math.PI)*(e.kind==="heavy"?5:3),a=this.forward;this.root.position.x+=a.x*s*t,this.root.position.z+=a.z*s*t,this.resolveCollisions(t,!1)}!e.hitDone&&e.t>=e.hit&&(e.hitDone=!0,this.executeHit(e)),e.kind==="special"&&e.special&&this.updateSpecial(t,e),e.t>=e.dur&&(this.state.attack=null,this.state.speed=0,this.activeBeams.length&&this.endBeams()),this.state.speed=0,this.root.rotation.y=this.yaw,this.state.walkPhase+=t*.4}executeHit(t){const e=t.stats;if(t.kind==="roar"){this.game.roarWave?.(this),this.game.effects.shockwave(this.root.position,this.height*.6,this.def.colors.glow);return}if(t.kind==="grab"){const s=this.game.findGrabTarget(this);s&&(this.grabTarget=s,s.grabbedBy=this,s.state.grabbed=!0,s.state.attack=null,s.state.ragdoll=!1,s.velocity.set(0,0,0),this.game.audio.impact(1.1),this.game.hud?.toast(`${s.name} GRABBED`,"info"));return}if(t.kind==="special"){this.fireSpecial(t);return}e.damage*(1+(this.state.burn>0?.08:0));const i=this.game.melee(this,t.kind,e);t.kind==="stomp"&&(this.game.effects.shockwave(this.root.position,this.height*.7,this.def.colors.glow),this.game.effects.dust(this.root.position.clone(),this.height*.4,32,11049606),this.game.effects.shakeCamera(.55,.5),this.game.audio.stomp(1.1)),i.hit&&this.game.effects.shakeCamera(this.isPlayer?.24:.12,.28)}fireSpecial(t){const e=t.special,i=this.headWorld(new R),s=this.findBeamAim(e.range),a=s?s.root.position.clone().setY(s.root.position.y+s.height*.55):null,r=l=>a?a.clone().sub(l).normalize():this.forward,o=r(i);if(t.beamAim=s,e.type==="beam"||e.type==="freezeBeam"){const l=this.game.spawnBeam(this,i,o,e,1.25,this.isPlayer?2.6:2.2);this.activeBeams.push(l),this.beamStop=this.game.audio.beamStart(this.def,1.4),this.game.effects.explosion(i,.35,e.color),this.game.hud?.cinematic(this,1)}else if(e.type==="tripleBeam"){const l=[];if(this.rig.necks)for(const c of this.rig.necks){const h=new R;c.head.getWorldPosition(h),l.push(h)}else l.push(i);for(const c of l)this.activeBeams.push(this.game.spawnBeam(this,c,r(c),e,1.15,1.6,.4));this.beamStop=this.game.audio.beamStart(this.def,1.4),this.game.hud?.cinematic(this,1)}else if(e.type==="godrays"){const l=[i.clone().add(new R(-this.height*.18,0,0)),i,i.clone().add(new R(this.height*.18,0,0))];for(const c of l)this.activeBeams.push(this.game.spawnBeam(this,c,r(c),e,1,1.1,.35));this.beamStop=this.game.audio.beamStart(this.def,1.2),this.game.hud?.cinematic(this,1)}else if(e.type==="pulse"||e.type==="shockwave"||e.type==="cleave"||e.type==="firestorm"||e.type==="acid"){const l=this.root.position.clone().addScaledVector(o,this.height*.28),c=e.range;this.game.aoe(this,l,c,e.damage,26,e.type,{building:!0,color:e.color}),this.game.effects.shockwave(this.root.position,c,e.color),e.type==="firestorm"&&this.game.effects.fire(l,60,e.color,5),e.type==="acid"&&this.game.effects.acid(l,50,e.color),e.type==="cleave"&&this.game.effects.sparks(l,40,e.color,30),this.game.effects.explosion(l,e.type==="pulse"?1.3:.8,e.color),this.game.audio.explosion(1.2),this.game.effects.shakeCamera(.9,.8)}}findBeamAim(t){let e=null,i=t;for(const s of this.game.monsters){if(s===this||s.dead||s.team===this.team)continue;const a=s.root.position.distanceTo(this.root.position);a<i&&(i=a,e=s)}return e}updateSpecial(t,e){const i=e.special;if(!this.activeBeams.length)return;e.tick=(e.tick||0)-t;const s=this.headWorld(new R);for(const a of this.activeBeams){if(a.dead)continue;const r=a.start||s;let o=this.forward;e.beamAim&&!e.beamAim.dead&&(o=e.beamAim.root.position.clone().setY(e.beamAim.root.position.y+e.beamAim.height*.55).sub(r).normalize());const l=this.game.beamTarget(this,r,o,i.range);a.target=l,a.effect.end.copy(l.point),a.effect.start.copy(r),a.effect.updateStart=c=>{c.copy(r)},e.tick<=0&&(e.tick=.12,this.game.beamDamage(this,l,i,a))}}endBeams(){for(const t of this.activeBeams)t.effect&&(t.effect.life=Math.min(t.effect.life,.08)),t.dead=!0;this.activeBeams=[];try{this.beamStop?.()}catch{}this.beamStop=null}followGrab(t){const e=this.grabbedBy;if(!e||e.dead){this.releaseGrab();return}const i=e.forward,s=e.root.position.clone().addScaledVector(i,e.radius+this.radius*.8);s.y=Math.max(0,e.state.jumpY+this.height*.08),this.root.position.lerp(s,1-Math.exp(-t*12)),this.yaw=e.yaw+Math.PI,this.root.rotation.y=this.yaw,this.state.speed=0,this.velocity.set(0,0,0),this.balance=0,e.state.attack?.kind!=="grab"&&this.releaseGrab()}releaseGrab(){this.grabbedBy=null,this.state.grabbed=!1,this.balance=30,this.invuln=.3}throwGrabbed(){const t=this.grabTarget;if(!t)return;const e=this.forward;t.releaseGrab(),t.velocity.copy(e).multiplyScalar(42).add(new R(0,12,0)),t.knockdown(e,24),this.grabTarget=null,this.game.effects.shockwave(this.root.position,this.height*.5,this.def.colors.glow),this.game.audio.impact(1.6),this.game.effects.shakeCamera(.7,.6)}takeDamage(t,e,i,s=10,a="impact"){if(this.dead||this.invuln>0)return 0;this.state.grabbed&&(t*=.7);let r=t,o=!1;this.state.block&&e&&e.root.position.clone().sub(this.root.position).setY(0).normalize().dot(this.forward)>-.1&&(r*=.28,o=!0,this.stamina=Math.max(0,this.stamina-t*.7),this.game.effects.sparks(i||this.root.position.clone().setY(this.height*.55),10,10475775,12),this.game.audio.impact(.5),this.stamina<=0&&(this.state.block=!1,this.stagger(e))),this.hp-=r,this.state.hitPulse=1,this.state.hitFlash=1,this.state.hitDir=Math.random()>.5?1:-1,this.balance-=s*(o?.25:1.2);const l=i||this.root.position.clone().setY(this.height*.55);if(this.game.effects.sparks(l,Math.round(6+r*.3),a==="freeze"?10480383:a==="acid"?13041485:16761963,12+s),r>12&&this.game.effects.blood(l,Math.round(4+r*.12)),this.game.audio.impact(Ve(r/18,.4,1.6)),this.isPlayer&&this.game.effects.shakeCamera(Ve(r/30,.12,.5),.35),e){const c=this.root.position.clone().sub(e.root.position).setY(0).normalize();o||this.velocity.addScaledVector(c,s*(1.4-this.mass/25e4)),a==="burn"&&(this.state.burn=Math.max(this.state.burn,4)),a==="freeze"&&(this.state.freeze=Math.max(this.state.freeze,4)),a==="acid"&&(this.state.shock=Math.max(this.state.shock,4))}if(!o&&this.balance<=0&&!this.state.ragdoll){const c=e?this.root.position.clone().sub(e.root.position).setY(0).normalize():this.forward.clone().negate();this.knockdown(c,s+8)}return this.lastDamageTime=0,this.hp<=0&&this.die(e),this.game.hud?.onDamage?.(this,r,o),r}stagger(t){if(t){const e=this.root.position.clone().sub(t.root.position).setY(0).normalize();this.velocity.addScaledVector(e,8)}this.state.hitPulse=1}knockdown(t,e){if(this.dead)return;this.state.ragdoll=!0,this.state.attack=null,this.state.block=!1,this.state.dodge=0,this.ragdollTime=2.3+Math.random()*.8,this.ragdollTotal=this.ragdollTime,this.balance=0;const i=t.clone().setY(0).normalize();this.velocity.addScaledVector(i,Math.min(30,e*1.1));const s=this.forward,a=i.dot(this.right),r=i.dot(s);this.fallPitch=Ve(-r*1.35,-1.35,1.35),this.fallRoll=Ve(a*1.3,-1.3,1.3),Math.abs(this.fallPitch)<.2&&Math.abs(this.fallRoll)<.2&&(this.fallPitch=1.2),this.game.effects.dust(this.root.position.clone(),this.height*.3,20,11049606),this.game.effects.shakeCamera(.45,.5),this.game.audio.impact(1.4),this.game.hud?.toast(`${this.name} DOWN`,"warn")}updateRagdoll(t,e){this.state.ragdoll=!0,e||this.ragdollTime,this.velocity.x=un(this.velocity.x,0,2.2,t),this.velocity.z=un(this.velocity.z,0,2.2,t),this.root.position.x+=this.velocity.x*t,this.root.position.z+=this.velocity.z*t;const i=Math.hypot(this.velocity.x,this.velocity.z),s=this.game.city.collideCircle(this.root.position.x,this.root.position.z,this.radius*.85);if((s.pushX||s.pushZ)&&(this.root.position.x+=s.pushX,this.root.position.z+=s.pushZ,s.hit&&i>5&&(s.hit.damage(i*3,this.root.position.clone().setY(this.height*.25),{source:this}),this.game.effects.dust(this.root.position.clone(),this.radius,12,10129280),this.game.audio.impact(1)),this.velocity.multiplyScalar(.4)),this.root.position.x=Ve(this.root.position.x,-420,420),this.root.position.z=Ve(this.root.position.z,-420,420),i>4&&Math.random()<.15&&this.game.effects.dust(this.root.position.clone(),this.radius*.8,3,11049606),e){this.deathTimer+=t;const a=1-Math.pow(1-Ve(this.deathTimer/.8,0,1),3);this.visual.rotation.x=this.fallPitch*a,this.visual.rotation.z=this.fallRoll*a,this.healthBar.visible=!1}else if(this.ragdollTime-=t,this.ragdollTime>.55){const a=Ve(1-this.ragdollTime/.4,0,1),r=1-Math.pow(1-a,3);this.visual.rotation.x=this.fallPitch*r,this.visual.rotation.z=this.fallRoll*r}else{const a=Ve(this.ragdollTime/.55,0,1);this.visual.rotation.x=this.fallPitch*a,this.visual.rotation.z=this.fallRoll*a,this.ragdollTime<=0&&(this.state.ragdoll=!1,this.state.recovery=.4,this.balance=55,this.invuln=.55,this.visual.rotation.set(0,0,0),this.velocity.set(0,0,0),this.game.hud?.toast(`${this.name} RECOVERS`,"info"))}this.root.rotation.y=this.yaw}die(t){if(this.dead)return;this.dead=!0,this.state.dead=!0,this.state.ragdoll=!0,this.state.attack=null,this.state.block=!1,this.hp=0,this.deathTimer=0,this.healthBar.visible=!1,this.rig.teamRingMat.opacity=.05,this.endBeams(),this.grabbedBy&&(this.grabbedBy.grabTarget=null,this.grabbedBy=null,this.state.grabbed=!1),this.grabTarget&&(this.grabTarget.releaseGrab(),this.grabTarget=null);const e=t?this.root.position.clone().sub(t.root.position).setY(0).normalize():this.forward.clone().negate(),i=e.dot(this.right),s=e.dot(this.forward);this.fallPitch=Ve(-s*1.35,-1.35,1.35),this.fallRoll=Ve(i*1.3,-1.3,1.3),Math.abs(this.fallPitch)<.2&&Math.abs(this.fallRoll)<.2&&(this.fallPitch=1.2),this.velocity.addScaledVector(e,20),this.game.effects.explosion(this.root.position.clone().setY(this.height*.4),1.1,this.def.colors.glow),this.game.audio.explosion(1.2),this.game.onMonsterDeath?.(this,t),this.game.hud?.toast(`${this.name} DEFEATED`,"kill")}statusUpdate(t){this.state.burn>0&&(this.state.burn-=t,this.hp-=t*5,Math.random()<t*8&&this.game.effects.fire(this.root.position.clone().setY(this.height*(.3+Math.random()*.5)),2,16738862,1.6),this.hp<=0&&this.die(null)),this.state.freeze>0&&(this.state.freeze-=t,Math.random()<t*4&&this.game.effects.ice(this.root.position.clone().setY(this.height*.4),2)),this.state.shock>0&&(this.state.shock-=t,this.hp-=t*3,Math.random()<t*5&&this.game.effects.sparks(this.root.position.clone().setY(this.height*.5),2,13041485,10),this.hp<=0&&this.die(null))}updateVisual(t){const e=this.rig.mats?.skin;if(e){const s=this.state.hitFlash;this.state.freeze>0?(e.emissive.setHex(2780303),e.emissiveIntensity=.5):this.state.burn>0?(e.emissive.setHex(6954504),e.emissiveIntensity=.6):s>0?(e.emissive.setHex(6167058),e.emissiveIntensity=s*.45):e.emissiveIntensity=0}if(Yx(this.rig,this.state,this.game.time,t),this.state.ragdoll||this.state.dead){if(this.state.dead){const s=1-Math.pow(1-Ve(this.deathTimer/.8,0,1),3);this.visual.rotation.x=this.fallPitch*s,this.visual.rotation.z=this.fallRoll*s}else{const s=this.ragdollTime;if(s>.55){const a=Ve(1-s/.4,0,1),r=1-Math.pow(1-a,3);this.visual.rotation.x=this.fallPitch*r,this.visual.rotation.z=this.fallRoll*r}else{const a=Ve(s/.55,0,1);this.visual.rotation.x=this.fallPitch*a,this.visual.rotation.z=this.fallRoll*a}}this.visual.position.y=0}else this.visual.rotation.x=0,this.visual.rotation.z=0;const i=this.game.camera;if(this.healthBar){this.healthBar.position.copy(this.root.position),this.healthBar.position.y+=this.height*(this.state.ragdoll?.55:1.12),this.healthBar.quaternion.copy(i.quaternion);const s=i.position.distanceTo(this.root.position),a=this.game.ui?.menu&&!this.game.ui.menu.classList.contains("hidden");if(this.healthBar.visible=!this.isPlayer&&!this.dead&&!a&&s<700,this.healthBar.visible){const r=Ve(this.hp/this.maxHp,0,1);this.healthFill.scale.x=Math.max(.001,r),this.healthFill.position.x=-(this.healthWidth/2)*(1-r),this.healthFill.material.color.setHex(r>.5?jr[this.team]??5227519:r>.22?16757575:16726861)}}this.rig.teamRing&&(this.rig.teamRingMat.opacity=this.isPlayer?.3+Math.sin(this.game.time*3)*.08:.22)}dispose(){this.endBeams(),this.game.scene.remove(this.root),this.game.scene.remove(this.healthBar),this.root.traverse(t=>{t.geometry&&t.geometry.dispose?.(),t.material&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose?.()):t.material.dispose?.())}),this.healthBar.traverse(t=>{t.geometry&&t.geometry.dispose?.(),t.material&&t.material.dispose?.()})}}const uv={KeyJ:"light",KeyK:"heavy",KeyF:"tail",KeyB:"bite",KeyH:"stomp",KeyE:"special",KeyG:"grab",KeyR:"roar",KeyQ:"dodge",Space:"jump"};class fv{constructor(t,e){this.renderer=t,this.settings=e,this.keys=new Set,this.actions=[],this.dragging=!1,this.dragMoved=0,this.dragButton=0,this.lastX=0,this.lastY=0,this.yaw=0,this.pitch=.24,this.distance=195,this.zoomTarget=195,this.joystick={x:0,y:0,active:!1,pointerId:null},this.touchCamera={active:!1,id:null,x:0,y:0},this.enabled=!1,this.onAction=null,this.el=t.domElement,this.bind()}bind(){window.addEventListener("keydown",e=>{if(!this.enabled||e.target&&/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;const i=uv[e.code];i&&(e.preventDefault(),e.repeat||this.trigger(i)),(e.code==="ShiftLeft"||e.code==="ShiftRight")&&e.preventDefault(),e.code==="KeyC"&&e.preventDefault(),this.keys.add(e.code)}),window.addEventListener("keyup",e=>{this.keys.delete(e.code)}),window.addEventListener("blur",()=>{this.keys.clear(),this.joystick.active=!1,this.joystick.x=this.joystick.y=0}),this.el.addEventListener("contextmenu",e=>e.preventDefault()),this.el.addEventListener("pointerdown",e=>{if(this.enabled){if(e.pointerType==="touch"){e.clientX>window.innerWidth*.5&&(this.touchCamera.active=!0,this.touchCamera.id=e.pointerId,this.touchCamera.x=e.clientX,this.touchCamera.y=e.clientY,this.el.setPointerCapture?.(e.pointerId),e.preventDefault());return}this.dragging=!0,this.dragButton=e.button,this.dragMoved=0,this.lastX=e.clientX,this.lastY=e.clientY,this.el.setPointerCapture?.(e.pointerId),e.preventDefault()}}),this.el.addEventListener("pointermove",e=>{if(e.pointerType==="touch"&&this.touchCamera.active&&e.pointerId===this.touchCamera.id){const a=e.clientX-this.touchCamera.x,r=e.clientY-this.touchCamera.y;this.touchCamera.x=e.clientX,this.touchCamera.y=e.clientY,this.yaw-=a*.006,this.pitch=Math.max(-.25,Math.min(.95,this.pitch+r*.005));return}if(!this.dragging)return;const i=e.clientX-this.lastX,s=e.clientY-this.lastY;this.lastX=e.clientX,this.lastY=e.clientY,this.dragMoved+=Math.abs(i)+Math.abs(s),this.yaw-=i*.0045,this.pitch=Math.max(-.3,Math.min(1.05,this.pitch+s*.0038))});const t=e=>{if(e.pointerType==="touch"){e.pointerId===this.touchCamera.id&&(this.touchCamera.active=!1);return}if(!this.dragging)return;const i=this.dragMoved,s=this.dragButton;this.dragging=!1,i<6&&this.trigger(s===2?"heavy":"light")};this.el.addEventListener("pointerup",t),this.el.addEventListener("pointercancel",e=>{e.pointerType==="touch"?this.touchCamera.active=!1:this.dragging=!1}),this.el.addEventListener("wheel",e=>{this.enabled&&(this.zoomTarget=Math.max(90,Math.min(520,this.zoomTarget+e.deltaY*.35)),e.preventDefault())},{passive:!1})}attachJoystick(t,e){this.joystickEl=t,this.joystickKnob=e;const i=a=>{const r=t.getBoundingClientRect(),o=r.left+r.width/2,l=r.top+r.height/2;let c=a.clientX-o,h=a.clientY-l;const d=r.width*.38,u=Math.hypot(c,h);u>d&&(c=c/u*d,h=h/u*d),this.joystick.x=c/d,this.joystick.y=h/d,e.style.transform=`translate(${c}px, ${h}px)`};t.addEventListener("pointerdown",a=>{this.enabled&&(a.preventDefault(),a.stopPropagation(),this.joystick.active=!0,this.joystick.pointerId=a.pointerId,t.setPointerCapture?.(a.pointerId),i(a))}),t.addEventListener("pointermove",a=>{!this.joystick.active||a.pointerId!==this.joystick.pointerId||(a.preventDefault(),a.stopPropagation(),i(a))});const s=a=>{a.pointerId===this.joystick.pointerId&&(this.joystick.active=!1,this.joystick.pointerId=null,this.joystick.x=this.joystick.y=0,e.style.transform="translate(0px, 0px)")};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s)}trigger(t){this.actions.push(t),this.onAction?.(t)}get block(){return this.keys.has("KeyC")||this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.mobileBlock}get run(){return this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.mobileRun}getMove(t){let e=0,i=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(i+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(i-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(e+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(e-=1),this.joystick.active&&(e+=this.joystick.x,i+=-this.joystick.y);const s=Math.hypot(e,i);if(s>1&&(e/=s,i/=s),s<.05)return{x:0,z:0,active:!1};const a=-Math.sin(t),r=-Math.cos(t),o=Math.cos(t),l=-Math.sin(t);return{x:a*i+o*e,z:r*i+l*e,active:!0}}consumeActions(){const t=this.actions;return this.actions=[],t}reset(){this.keys.clear(),this.actions=[],this.dragging=!1,this.joystick.active=!1,this.joystick.x=this.joystick.y=0,this.mobileBlock=!1,this.mobileRun=!1}}class pv{constructor(t,e,i){this.camera=t,this.settings=e,this.effects=i,this.position=new R(0,100,260),this.look=new R(0,50,0),this.target=new R,this.currentDistance=240,this.currentYaw=0,this.currentPitch=.2,this.intro=0,this.introDuration=0,this.introFrom=new R,this.introFromLook=new R,this.cinematic=0,this.cinematicFocus=null,this.spectate=!1,this.spectateAngle=0,this.tmp=new R}snapTo(t,e){this.target.copy(t.root.position),this.currentYaw=e.yaw,this.currentPitch=e.pitch,this.currentDistance=e.zoomTarget||e.distance;const i=this.offset(this.currentYaw,this.currentPitch,this.currentDistance,t);this.position.copy(t.root.position).add(i),this.look.copy(t.root.position).add(new R(0,t.height*.55,0)),this.camera.position.copy(this.position),this.camera.lookAt(this.look)}offset(t,e,i,s){const a=s.height,r=this.camera?.aspect||1,o=r<1?Math.min(1.32,1+(1-r)*.55):1,l=i*o;return new R(Math.sin(t)*Math.cos(e)*l,Math.sin(e)*l+a*.3,Math.cos(t)*Math.cos(e)*l)}startIntro(t=2.2){this.intro=t,this.introDuration=t,this.introFrom.copy(this.camera.position),this.introFromLook.copy(this.look)}update(t,e,i,s=[]){const a=this.effects.getShake(t);if(this.cinematic=Math.max(0,this.cinematic-t),this.intro>0){this.intro-=t;const h=1-Math.max(0,this.intro)/this.introDuration,d=1-Math.pow(1-h,3),u=this.offset(i.yaw,i.pitch,i.distance,e),f=e.root.position.clone().add(u),p=e.root.position.clone().add(new R(0,e.height*.55,0)),_=this.introFrom,g=this.introFromLook;this.camera.position.lerpVectors(_,f,d),this.look.lerpVectors(g,p,d),this.camera.lookAt(this.look);return}if(this.spectate){this.spectateAngle+=t*.12;const h=new R;let d=0;for(const f of s)f.dead||(h.add(f.root.position),d++);d?h.divideScalar(d):h.set(0,0,0);const u=205;this.camera.position.set(h.x+Math.sin(this.spectateAngle)*u,126+Math.sin(this.spectateAngle*.7)*28,h.z+Math.cos(this.spectateAngle)*u),this.look.set(h.x,62,h.z),this.camera.lookAt(this.look);return}this.target.lerp(e.root.position,1-Math.exp(-t*8)),this.currentYaw=i.yaw,this.currentPitch=i.pitch,this.currentDistance+=(i.zoomTarget-this.currentDistance)*(1-Math.exp(-t*6));const r=this.offset(this.currentYaw,this.currentPitch,this.currentDistance,e),o=this.target.clone().add(new R(0,e.height*.55,0)),l=this.target.clone().add(r);if(l.y=Math.max(l.y,12),this.city){const h=l.clone().sub(o),d=h.length();if(d>1){const u=this.city.raycastBuilding(o,h.clone().normalize(),d);u&&u.distance<d-2&&(l.copy(o).addScaledVector(h.normalize(),Math.max(24,u.distance-6)),l.y=Math.max(l.y,o.y+3))}}this.position.lerp(l,1-Math.exp(-t*6));const c=this.target.clone().add(new R(0,e.height*(.5+Math.sin(this.currentPitch)*.12),0));this.look.lerp(c,1-Math.exp(-t*9)),this.camera.position.copy(this.position),this.camera.position.x+=a.x*4,this.camera.position.y+=a.y*4,this.camera.lookAt(this.look)}cinematicPush(t,e=1){this.cinematic=.8*e,this.cinematicFocus=t}}const ih=(n,t,e)=>Math.max(t,Math.min(e,n)),mv=(n,t,e,i)=>n+(t-n)*(1-Math.exp(-3*i)),nh={mode:"battle",playerId:"godzilla2019",enemies:["ghidorah"],allies:[],weather:"rain",time:"sunset",intro:!0,title:"GODZILLA VS KING GHIDORAH"};class gv{constructor({renderer:t,settings:e,audio:i,ui:s,onExit:a}){this.renderer=t,this.settings=e,this.audio=i,this.ui=s,this.onExit=a,this.scene=new mu,this.camera=new yi(56,window.innerWidth/window.innerHeight,1,4500),this.camera.position.set(220,180,380),this.time=0,this.active=!1,this.paused=!1,this.mode="battle",this.config=null,this.monsters=[],this.player=null,this.introTimer=0,this.resultPending=0,this.resultShown=!1,this.stats={damageDealt:0,damageTaken:0,kills:0,startTime:0},this.spectate=!1,this.hasStarted=!1,this.objective="",this.subObjective="",this.tmp=new R,this.effects=new yx(this.scene,e),this.environment=new Ax(this.scene,e,this.effects),this.environment.attachRenderer(t),this.environment.onThunder=()=>this.audio.thunder(),this.heroLight=new Wa(14083327,.95),this.heroLight.position.set(0,240,360),this.heroLight.target.position.set(0,60,0),this.scene.add(this.heroLight,this.heroLight.target),this.heroOffset=new R,this.city=new Nx(this.scene,e,this.effects,i),this.environment.attachCity(this.city),this.city.onDestruction=()=>{this.ui&&this.ui.toast("STRUCTURE COLLAPSED","info")},this.input=new fv(t,e),this.cameraRig=new pv(this.camera,e,this.effects),this.cameraRig.city=this.city,this.input.enabled=!1,this.input.onAction=r=>this.ui?.flashAction?.(r),this.bindUi(),this.setWeather("rain",!0),this.environment.setTimePreset("sunset"),this.city.setWetness(!0)}bindUi(){this.ui&&(this.ui.game=this,this.ui.onGameAction=(t,e)=>this.handleUiAction(t,e))}handleUiAction(t,e){switch(t){case"pause":this.pause();break;case"resume":this.resume();break;case"restart":this.restart();break;case"menu":this.exitToMenu();break;case"switch-monster":this.switchPlayer();break;case"weather":this.cycleWeather();break;case"time":this.cycleTime();break;case"set-weather":this.setWeather(e);break;case"set-time":this.setTime(e);break;case"spawn-monster":this.spawnSandboxMonster(e);break;case"spawn-vehicle":this.spawnSandboxVehicle(e);break;case"spawn-npc":this.spawnSandboxNPC();break;case"spawn-prop":this.spawnSandboxProp(e);break;case"spawn-building":this.spawnSandboxBuilding();break;case"toggle-ai":this.setAI(e);break;case"possess":this.switchPlayer(e);break;case"reset-world":this.resetWorld();break;case"spectate":this.setSpectate(e);break;case"rematch":this.restart();break;case"sandbox":this.start({...this.config,mode:"sandbox",title:"SANDBOX"});break}}start(t=nh){this.config=JSON.parse(JSON.stringify(t)),this.mode=t.mode||"battle",this.spectate=!!t.spectate,this.resultPending=0,this.resultShown=!1,this.stats={damageDealt:0,damageTaken:0,kills:0,startTime:this.time},this.ui?.hideMenu(),this.ui?.closeOverlays(),this.clearMonsters(),this.effects.clear(),this.city.reset(),this.city.setWetness(t.weather==="rain"||t.weather==="storm"),this.setWeather(t.weather||"clear",!0),this.setTime(t.time||"sunset"),this.paused=!1,this.input.reset(),this.input.enabled=!0,this.input.yaw=0,this.input.pitch=.3,this.input.zoomTarget=this.mode==="battle"?185:205,this.introTimer=t.intro?2.4:0;const e=[];if(this.spectate){e.push({id:t.playerId||"godzilla2019",team:0,ai:!0,x:0,z:80,yaw:0});let s=0;for(const a of t.allies||[])e.push({id:a,team:0,ai:!0,x:-80+s*80,z:110,yaw:0}),s++;s=0;for(const a of t.enemies||[])e.push({id:a,team:1,ai:!0,x:Math.sin(Math.PI+s*.4)*-70,z:-90,yaw:Math.PI}),s++}else{e.push({id:t.playerId||"godzilla2019",team:0,ai:!1,x:0,z:90,yaw:0});let s=0;for(const a of t.allies||[])e.push({id:a,team:0,ai:!0,x:-90+s*90,z:130,yaw:0}),s++;s=0;for(const a of t.enemies||[]){const r=Math.PI+(s-((t.enemies||[]).length-1)/2)*.35;e.push({id:a,team:1,ai:!0,x:Math.sin(r)*-70,z:-90,yaw:Math.PI}),s++}}if(this.mode==="battle")for(const s of e)s.team===0&&!s.ai&&(s.x=0,s.z=48,s.yaw=0),s.team===1&&(s.x=(Math.random()-.5)*36,s.z=-74-Math.random()*16,s.yaw=Math.PI);for(const s of e){const a=this.addMonster(s.id,{team:s.team,x:s.x,z:s.z,yaw:s.yaw,ai:s.ai});s.ai===!1&&(this.player=a)}this.spectate&&(this.player=null),!this.player&&!this.spectate&&(this.player=this.monsters[0]||null),this.player&&this.player.setPlayer(!0),this.spectate?this.cameraRig.spectate=!0:this.cameraRig.spectate=!1;const i=this.player||this.monsters[0];i&&(this.mode==="battle"&&t.intro?(this.camera.position.set(215,165,315),this.cameraRig.look.set(0,55,10),this.camera.lookAt(this.cameraRig.look),this.cameraRig.startIntro(2.4),this.ui?.showVersus?.(this.player,this.monsters.filter(s=>s.team!==(this.player?.team??0)))):this.cameraRig.snapTo(i,this.input)),this.introTimer=this.cameraRig.intro,this.active=!0,this.hasStarted=!0,this.ui?.showHUD(this),this.ui?.closeOverlays(),this.updateObjective(),this.ui?.toast(this.mode==="battle"?"BATTLE START":this.mode==="sandbox"?"SANDBOX ONLINE":"FREE ROAM","info"),this.audio.setWeather(this.mode==="battle"?t.weather||"rain":t.weather||"clear"),this.mode==="battle"&&t.title&&this.ui?.showTitle?.(t.title),setTimeout(()=>{this.active&&this.player&&!this.player.dead&&this.audio.roar(this.player.def)},1200)}addMonster(t,e){const i=pn(t),s=new dv(this,i,e);return this.monsters.push(s),s}clearMonsters(){for(const t of this.monsters)t.dispose();this.monsters=[],this.player=null}update(t){if(!this.active||this.paused)return;t=Math.min(t,.05),this.time+=t,this.environment.update(t,this.camera),this.city.update(t,this.camera,this.monsters);const e=this.player;if(e&&!e.dead&&!this.spectate){const r=this.input.getMove(this.input.yaw);e.intent.moveX=r.x,e.intent.moveZ=r.z,e.intent.run=this.input.run&&!this.input.block,e.intent.block=this.input.block,e.intent.attack=null,e.intent.special=!1,e.intent.dodge=!1,e.intent.jump=!1,e.intent.grab=!1,e.intent.roar=!1,e.intent.aimYaw=this.input.yaw;let o=null,l=1e9;const c=new R(-Math.sin(this.input.yaw),0,-Math.cos(this.input.yaw));for(const d of this.monsters){if(d===e||d.dead||d.team===e.team)continue;const u=d.root.position.clone().sub(e.root.position).setY(0),f=u.length();f<e.height*2.2&&f<l&&(u.normalize(),u.dot(c)>.1&&(o=d,l=f))}const h=this.input.consumeActions();for(const d of h)d==="light"||d==="heavy"||d==="tail"||d==="bite"||d==="stomp"?(o&&(e.intent.aimYaw=Math.atan2(-(o.root.position.x-e.root.position.x),-(o.root.position.z-e.root.position.z))),e.intent.attack=d):d==="special"?(e.intent.special=!0,o&&(e.intent.aimYaw=Math.atan2(-(o.root.position.x-e.root.position.x),-(o.root.position.z-e.root.position.z)))):d==="grab"?e.intent.grab=!0:d==="roar"?e.intent.roar=!0:d==="dodge"?e.intent.dodge=!0:d==="jump"&&(e.intent.jump=!0);e.state.grabbed&&this.input.keys.has("KeyG")&&e.throwGrabbed?.()}else e&&(e.intent.moveX=e.intent.moveZ=0,e.intent.attack=null,e.intent.special=!1,this.input.consumeActions());for(const r of this.monsters)r.update(t);this.effects.update(t,this.camera);const i=this.player&&!this.player.dead?this.player:this.monsters.find(r=>!r.dead)||null;i&&(this.spectate&&(this.cameraRig.spectate=!0),this.cameraRig.update(t,i,this.input,this.monsters),this.heroLight.position.copy(this.camera.position).add(this.heroOffset.set(0,60,0)),this.heroLight.target.position.set(i.root.position.x,i.root.position.y+i.height*.55,i.root.position.z),this.heroLight.target.updateMatrixWorld());const s=this.camera.aspect||1,a=this.cameraRig.cinematic>0?46:s<.8?66:s<1.1?60:56;this.camera.fov=mv(this.camera.fov,a,3,t),this.camera.updateProjectionMatrix(),this.introTimer>0&&(this.introTimer-=t,this.introTimer<=0&&this.ui?.hideVersus?.()),this.checkEnd(t),this.updateObjective(),this.ui?.updateHUD?.(this,t)}updateObjective(){if(this.mode==="battle"){const t=this.monsters.filter(i=>i.team!==(this.player?.team??0)&&!i.dead),e=t.map(i=>i.name.toUpperCase()).join(" + ");this.objective=t.length?`SLAY ${e}`:"HOSTILES ELIMINATED",this.subObjective=`HONG KONG // ${this.environment.weather.toUpperCase()} // ${this.environment.hour.toFixed(1).padStart(4,"0")}:00`}else this.mode==="sandbox"?(this.objective="SANDBOX",this.subObjective="SPAWN, POSSESS, DESTROY"):(this.objective="FREE ROAM",this.subObjective=`${this.city.destructionCount} STRUCTURES DESTROYED`)}checkEnd(t){if(this.mode!=="battle"||this.resultShown||this.spectate||!this.player)return;const e=this.monsters.filter(r=>r.team!==this.player.team),i=this.monsters.filter(r=>r.team===this.player.team),s=e.some(r=>!r.dead),a=i.some(r=>!r.dead);!s&&e.length?(this.resultPending+=t,this.resultPending>1.5&&this.showResult(!0)):a||(this.resultPending+=t,this.resultPending>1.5&&this.showResult(!1))}showResult(t){if(this.resultShown)return;this.resultShown=!0,this.paused=!0,t?(this.audio.victory(),this.cameraRig.cinematic=2):this.audio.defeat();const e={time:Math.max(1,Math.round(this.time-this.stats.startTime)),destroyed:this.city.destructionCount,damage:Math.round(this.stats.damageDealt),kills:this.stats.kills};this.ui?.showResult?.(t,e)}onMonsterDeath(t,e){e===this.player&&this.stats.kills++,t===this.player&&(this.stats.damageTaken=Math.round(t.maxHp)),this.mode==="battle"&&!this.spectate&&(this.resultPending=0)}melee(t,e,i){const s=t.forward;t.root.position.clone().addScaledVector(s,t.radius*.5);const a=t.root.position.y+t.height*.52,r=i.range+t.radius*.45;let o=0;for(const d of this.monsters){if(d===t||d.dead||d.team===t.team&&this.mode!=="sandbox")continue;const u=d.root.position.clone().sub(t.root.position).setY(0),f=u.length();if(f>r+d.radius||(u.normalize(),u.dot(s)<Math.cos(Math.min(Math.PI,i.arc)/2)))continue;const _=d.root.position.clone().setY(a+(Math.random()-.5)*d.height*.2),g=i.damage*(1-Math.max(0,f-t.radius)/(r*2.2)),m=d.takeDamage(g,t,_,i.force,"impact");t===this.player&&(this.stats.damageDealt+=m),this.effects.sparks(_,10,16765578,18),this.effects.blood(_,4),o++}const l=t.root.position.clone().addScaledVector(s,i.range*.55).setY(Math.max(2,a*.7)),c=Math.max(t.radius,i.range*.65),h=this.city.destructionCount;return this.city.damageAt(l,c,i.damage*.9,{source:t}),this.city.destructionCount>h&&this.effects.shakeCamera(.35,.5),this.effects.dust(l,t.radius*.5,6,10129280),{hit:o,point:l}}aoe(t,e,i,s,a,r="impact",o={}){let l=0;for(const c of this.monsters){if(c===t||c.dead||c.team===t.team)continue;const h=c.root.position.distanceTo(e);if(h>i+c.radius)continue;const d=1-h/(i+c.radius);c.root.position.clone().sub(e).setY(0).normalize();const u=r==="firestorm"?"burn":r==="acid"?"acid":r==="freezeBeam"?"freeze":"impact",f=c.takeDamage(s*(.45+d*.75),t,e.clone(),a*(.5+d),u);t===this.player&&(this.stats.damageDealt+=f),l++}return o.building!==!1&&this.city.damageAt(e,i,s*.8,{source:t}),o.color&&this.effects.shockwave(e,i,o.color),this.effects.shakeCamera(.3+i/100,.5),l}roarWave(t){const e=t.root.position;this.effects.shockwave(e,t.height*.9,t.def.colors.glow),this.effects.dust(e.clone(),t.radius*1.2,24,10129280),this.effects.shakeCamera(.3,.7),this.cameraRig.cinematic=Math.max(this.cameraRig.cinematic,.5);for(const i of this.monsters){if(i===t||i.dead)continue;if(i.root.position.distanceTo(e)<t.height*2.6)if(i.team===t.team)i.stamina=Math.min(i.maxStamina,i.stamina+18);else{i.balance-=12;const a=i.root.position.clone().sub(e).setY(0).normalize();i.velocity.addScaledVector(a,5),i.balance<=0&&i.knockdown(a,6)}}for(const i of this.city.pedestrians)i.group.position.distanceTo(e)<220&&(i.panic=1)}findGrabTarget(t){const e=t.forward;let i=null,s=1e9;for(const a of this.monsters){if(a===t||a.dead||a.team===t.team)continue;const r=a.root.position.clone().sub(t.root.position).setY(0),o=r.length();o>t.radius+a.radius+t.height*.22||(r.normalize(),!(r.dot(e)<.15)&&o<s&&(s=o,i=a))}return i}beamTarget(t,e,i,s){const a=new Ks(e,i.clone().normalize());let r={point:e.clone().addScaledVector(i,s),distance:s,monster:null,building:null};for(const l of this.monsters){if(l===t||l.dead||l.team===t.team)continue;const c=l.root.position.clone().add(new R(0,l.height*.55,0)),h=new _s(c,l.height*.32),d=a.intersectSphere(h,new R);if(d){const u=d.distanceTo(e);u<r.distance&&(r={point:d,distance:u,monster:l,building:null})}}const o=this.city.raycastBuilding(e,i,Math.min(s,r.distance));if(o&&(r={point:o.point,distance:o.distance,monster:null,building:o.building}),i.y<-.02){const l=-e.y/i.y;l>0&&l<r.distance&&(r={point:e.clone().addScaledVector(i,l).setY(.6),distance:l,monster:null,building:null})}return r}spawnBeam(t,e,i,s,a,r,o=0){const l=e.clone();o&&l.add(new R((Math.random()-.5)*o,(Math.random()-.5)*o,(Math.random()-.5)*o));const c=this.beamTarget(t,l,i,s.range),h=this.effects.beam({start:l,end:c.point,color:s.color,secondary:s.secondary,width:a,duration:r});return{start:l,effect:h,target:c,dead:!1}}beamDamage(t,e,i,s){const a=i.damage*.28,r=i.type==="freezeBeam"?"freeze":"impact";if(e.monster){e.monster.root.position.clone().sub(t.root.position).setY(0).normalize();const o=e.monster.takeDamage(a,t,e.point,6,r);t===this.player&&(this.stats.damageDealt+=o),this.effects.sparks(e.point,6,i.color,12)}else e.building?(e.building.damage(a*1.5,e.point,{source:t}),this.effects.glass(e.point,5),this.effects.dust(e.point,3,4,10129280)):(this.city.damageAt(e.point,9,a*.8,{source:t}),this.effects.dust(e.point,5,4,10129280));i.type==="freezeBeam"&&this.effects.ice(e.point,5),t===this.player&&this.effects.shakeCamera(.1,.2)}cycleWeather(){const t=["clear","rain","storm","fog"],e=t.indexOf(this.environment.weather);this.setWeather(t[(e+1)%t.length])}setWeather(t,e=!1){this.environment.setWeather(t,!0),this.audio.setWeather(t),this.city.setWetness(t==="rain"||t==="storm"),this.ui?.setWeatherLabel?.(t),e||this.ui?.toast(`WEATHER // ${t.toUpperCase()}`,"info")}cycleTime(){const t=["sunrise","day","sunset","night"],e=this.environment.hour;let i=e<8?0:e<16.5?1:e<20?2:3;this.setTime(t[(i+1)%t.length])}setTime(t){this.environment.setTimePreset(t),this.ui?.setTimeLabel?.(t),this.ui?.toast(`TIME // ${t.toUpperCase()}`,"info")}pause(){!this.active||this.resultShown||(this.paused=!0,this.ui?.openPause?.())}resume(){this.paused=!1,this.ui?.closeOverlays()}restart(){const t=JSON.parse(JSON.stringify(this.config||nh));this.resultShown=!1,this.start(t)}exitToMenu(){this.active=!1,this.paused=!1,this.input.enabled=!1,this.input.reset(),this.ui?.hideHUD?.(),this.ui?.closeOverlays(),this.ui?.showMenu?.(),this.clearMonsters(),this.effects.clear(),this.onExit?.()}switchPlayer(t=null){const e=this.monsters.filter(s=>!s.dead);if(!e.length)return;let i;if(typeof t=="number"&&this.monsters[t]&&!this.monsters[t].dead)i=this.monsters[t];else{const s=this.player?e.indexOf(this.player):-1;i=e[(s+1)%e.length]}i===this.player&&!this.spectate||(this.player&&this.player.setPlayer(!1),this.player=i,this.spectate=!1,this.settings.set("disableControl",!1,!0),i.setPlayer(!0),this.cameraRig.spectate=!1,this.cameraRig.snapTo(i,this.input),this.ui?.applySettingsView?.(),this.ui?.toast(`NOW CONTROLLING ${i.name.toUpperCase()}`,"info"),this.updateObjective())}setSpectate(t){if(this.spectate=!!t,this.cameraRig.spectate=this.spectate,this.spectate){this.player&&this.player.setPlayer(!1),this.player=null;for(const e of this.monsters)e.setAI(!0)}else if(this.player)this.player.setPlayer(!0);else{const e=this.monsters.find(i=>!i.dead);e&&(this.player=e,e.setPlayer(!0),this.cameraRig.snapTo(e,this.input))}this.ui?.toast(this.spectate?"SPECTATOR MODE":"CONTROL RESTORED","info")}setAI(t){for(const e of this.monsters)e!==this.player&&e.setAI(t);this.ui?.toast(`AI ${t?"ENABLED":"DISABLED"}`,"info")}spawnSandboxMonster(t,e={}){if(!t)return;const i=this.spawnPoint(130),s=e.team??1,a=this.spectate||e.ai!==!1,r=this.addMonster(t,{team:s,x:i.x,z:i.z,yaw:Math.atan2(-(this.player?.root.position.x-i.x||0),-(this.player?.root.position.z-i.z||-1)),ai:a});return this.effects.dust(r.root.position.clone(),r.radius,20,11049606),this.ui?.toast(`${r.name.toUpperCase()} SPAWNED`,"info"),this.ui?.refreshSandbox&&this.ui.refreshSandbox(this),r}spawnSandboxVehicle(t="car"){const e=this.spawnPoint(80),i=this.city.spawnVehicle(t,e);return this.ui?.toast("VEHICLE DEPLOYED","info"),i}spawnSandboxNPC(){const t=this.spawnPoint(70),e=this.city.spawnNPC(t);return this.ui?.toast("CIVILIAN DEPLOYED","info"),e}spawnSandboxProp(t="tree"){const e=this.spawnPoint(90),i=this.city.spawnProp(t,e);return this.ui?.toast("PROP DEPLOYED","info"),i}spawnSandboxBuilding(){const t=this.spawnPoint(150),e=this.city.spawnBuilding(t.x,t.z,24+Math.random()*18,24+Math.random()*18,60+Math.random()*120);return this.ui?.toast("STRUCTURE DEPLOYED","info"),e}spawnPoint(t=100){const e=this.player?this.player.root.position:this.camera.position,i=new R(-Math.sin(this.input.yaw),0,-Math.cos(this.input.yaw)),s=e.clone().addScaledVector(i,t);s.y=0,s.x=ih(s.x,-380,380),s.z=ih(s.z,-380,380);const a=this.city.collideCircle(s.x,s.z,20);return s.x+=a.pushX,s.z+=a.pushZ,s}resetWorld(){this.city.reset(),this.effects.clear(),this.ui?.toast("WORLD RESET","info")}setWeatherLabel(){}}const qa=(n,t,e)=>Math.max(t,Math.min(e,n)),Un=n=>"#"+n.toString(16).padStart(6,"0");function fn(n,t=""){const e=`<svg class="titan-svg ${t}" viewBox="0 0 120 120" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round">`,i="</svg>";switch(n){case"kong":return`${e}<path d="M42 34c-6-6-15-4-17 4-2 9 4 15 9 17l-3 16c-2 12 4 22 8 25l-8 14h12l6-10h8l6 10h12l-8-14c4-3 10-13 8-25l-3-16c5-2 11-8 9-17-2-8-11-10-17-4-4 4-8 6-12 6s-8-2-12-6Z" fill="currentColor" fill-opacity=".13"/><path d="M48 44h24M44 52c4 4 10 5 16 5s12-1 16-5"/><circle cx="51" cy="37" r="2.2" fill="currentColor"/><circle cx="69" cy="37" r="2.2" fill="currentColor"/><path d="M30 70c-8 3-14 10-15 20M90 70c8 3 14 10 15 20"/>${i}`;case"ghidorah":return`${e}<path d="M60 108c-8-18-6-32 0-44 6 12 8 26 0 44Z" fill="currentColor" fill-opacity=".13"/><path d="M60 66C50 54 38 45 28 34c-7-8-2-18 6-16 8 2 12 10 17 18M60 66c10-12 22-21 32-32 7-8 2-18-6-16-8 2-12 10-17 18M60 70c-4-14-4-26 0-38 4 12 4 24 0 38Z"/><path d="M20 18l-5-7 8 2 2-8 5 8M100 18l5-7-8 2-2-8-5 8"/><path d="M44 48c-4 6-4 10 0 14M76 48c4 6 4 10 0 14"/><path d="M38 84c-8-4-14-10-16-18M82 84c8-4 14-10 16-18"/>${i}`;case"mecha":return`${e}<path d="M60 12 38 22v18l8 8v16l-8 6v18l10 10h24l10-10V70l-8-6V48l8-8V22L60 12Z" fill="currentColor" fill-opacity=".13"/><path d="M46 34h28M46 42h28M44 66h32M44 76h32"/><path d="M50 26l10-6 10 6-10 6-10-6Z"/><path d="M36 54 20 70l4 10 12-14M84 54l16 16-4 10-12-14"/><path d="M48 92l-4 16M72 92l4 16"/>${i}`;case"rodan":return`${e}<path d="M60 44c-8 0-14 8-14 18 0 10 6 18 14 18s14-8 14-18c0-10-6-18-14-18Z" fill="currentColor" fill-opacity=".13"/><path d="M50 52 12 30l18 30-14 8 26 4M70 52l38-22-18 30 14 8-26 4"/><path d="M60 80l-8 24 8-8 8 8-8-24Z"/><path d="M54 38c2-8 10-8 12 0"/><path d="M52 50h16"/><path d="M56 58c3 2 5 2 8 0"/>${i}`;case"mothra":return`${e}<path d="M60 40c-10-18-30-28-44-20-10 6-8 24 2 38 8 12 22 22 34 26M60 40c10-18 30-28 44-20 10 6 8 24-2 38-8 12-22 22-34 26" fill="currentColor" fill-opacity=".13"/><path d="M60 40v56M60 52c-8-6-14-10-22-12M60 52c8-6 14-10 22-12M60 68c-6-4-12-6-18-6M60 68c6-4 12-6 18-6"/><path d="M54 30c-4-8-2-14 4-16M66 30c4-8 2-14-4-16"/><circle cx="60" cy="36" r="4"/>${i}`;case"shimo":return`${e}<path d="M20 72c4-18 20-28 40-28s36 10 40 28c2 10-4 20-14 22H34c-10-2-16-12-14-22Z" fill="currentColor" fill-opacity=".13"/><path d="M38 46l-8-18 14 12 8-20 6 18 8-20 6 20 14-12-8 18M28 96v12M44 96v12M76 96v12M92 96v12"/><path d="M26 70c-8-4-12-10-14-18M100 68c8-4 12-10 14-18"/><circle cx="44" cy="58" r="2.2" fill="currentColor"/><circle cx="76" cy="58" r="2.2" fill="currentColor"/><path d="M50 68h20"/>${i}`;case"scylla":return`${e}<path d="M60 42c-9 0-16 8-16 18s7 18 16 18 16-8 16-18-7-18-16-18Z" fill="currentColor" fill-opacity=".13"/><path d="M48 48 20 30l12 24-18 6 22 8M72 48l28-18-12 24 18 6-22 8M44 72 16 84l18 10 12-14M76 72l28 12-18 10-12-14M52 76 40 104M68 76l12 28"/><path d="M50 38c-6-10-2-18 4-22M70 38c6-10 2-18-4-22"/><circle cx="55" cy="55" r="2" fill="currentColor"/><circle cx="65" cy="55" r="2" fill="currentColor"/>${i}`;case"tiamat":return`${e}<path d="M60 14c14 8 20 22 16 36-4 14-16 22-16 36 0 8 4 14 10 18M60 14c-14 8-20 22-16 36 4 14 16 22 16 36 0 8-4 14-10 18" fill="currentColor" fill-opacity=".13"/><path d="M60 20v70M60 30c-8 4-12 10-12 16M60 30c8 4 12 10 12 16M60 60c-10 4-14 12-14 20M60 60c10 4 14 12 14 20"/><path d="M48 24 36 16l2 14M72 24l12-8-2 14M44 42 30 38l8 12M76 42l14-4-8 12"/><circle cx="60" cy="22" r="4"/>${i}`;default:return`${e}<path d="M60 20c-12 0-20 10-18 24l4 22c-10 6-16 18-14 32 1 8 6 14 12 16l-4 12h12l6-10h8l6 10h12l-4-12c6-2 11-8 12-16 2-14-4-26-14-32l4-22c2-14-6-24-18-24Z" fill="currentColor" fill-opacity=".13"/><path d="M60 20 48 2l8 16M60 20l12-18-8 16M50 34c-8-10-16-14-24-14l10 14M70 34c8-10 16-14 24-14l-10 14M44 48l16 8 16-8M52 64h16M52 74h16"/><circle cx="52" cy="38" r="2.2" fill="currentColor"/><circle cx="68" cy="38" r="2.2" fill="currentColor"/><path d="M30 96c8 4 20 6 30 6s22-2 30-6"/>${i}`}}function Fa(n,t,e=100){return`<div class="stat-row"><span>${n}</span><div class="stat-track"><i style="width:${qa(t/e*100,3,100)}%"></i></div><b>${Math.round(t)}</b></div>`}function xv(n){return n<5?"NIGHT":n<8?"SUNRISE":n<17?"DAY":n<20?"SUNSET":"NIGHT"}class vv{constructor({settings:t,audio:e}){this.settings=t,this.audio=e,this.game=null,this.selectedId="godzilla2019",this.opponentId="ghidorah",this.mode="battle",this.weather="storm",this.time="sunset",this.force="duel",this.sandboxTeam=1,this.returnToPause=!1,this.toastCount=0,this.minimapTimer=0,this.lastHud={},this.timers={},this.root=document.getElementById("ui"),this.root.innerHTML=this.template(),this.cache(),this.buildRoster(),this.buildRivals(),this.buildSandboxRoster(),this.bind(),this.selectMonster(this.selectedId,!0),this.setMode("battle",!0),this.applySettingsView(),this.applyHudVisibility()}template(){return`
    <div id="loading" class="loading">
      <div class="load-emblem">${fn("godzilla")}</div>
      <div class="load-title">TITAN<span>BOX</span></div>
      <div class="load-bar"><i></i></div>
      <div class="load-copy">CALIBRATING TITAN SIGNATURES</div>
    </div>

    <section id="menu" class="screen menu">
      <header class="topbar">
        <div class="brand">
          <div class="brand-mark">${fn("godzilla")}</div>
          <div class="brand-copy"><b>TITAN BOX</b><span>MONSTERVERSE SIMULATION</span></div>
        </div>
        <nav class="topnav">
          <button class="nav-btn" data-scroll="roster-wrap">COLLECTION</button>
          <button class="nav-btn" data-open="settings">SETTINGS</button>
          <button class="nav-btn" data-open="controls">CONTROLS</button>
          <button class="nav-btn" data-open="about">INTEL</button>
        </nav>
      </header>

      <div class="menu-scroll">
        <div class="menu-hero">
          <div class="hero-copy">
            <div class="eyebrow"><span class="live-dot"></span> LIVE TITAN SIMULATION // HONG KONG</div>
            <h1 class="hero-title">TITAN<span>BOX</span></h1>
            <p class="hero-sub">Command the alpha. Break the city. Outlast the storm.</p>

            <div class="mode-grid">
              <button class="mode-card active" data-mode="battle">
                <span class="mode-num">01</span><b>QUICK BATTLE</b><span>1v1 titan duel</span>
              </button>
              <button class="mode-card" data-mode="roam">
                <span class="mode-num">02</span><b>FREE ROAM</b><span>Explore &amp; destroy</span>
              </button>
              <button class="mode-card" data-mode="sandbox">
                <span class="mode-num">03</span><b>SANDBOX</b><span>Spawn anything</span>
              </button>
            </div>

            <div class="launch-row">
              <button id="launch" class="btn btn-primary"><span id="launch-label">DEPLOY</span><kbd>ENTER</kbd></button>
              <button class="btn btn-ghost" data-open="controls">HOW TO PLAY</button>
            </div>

            <div class="hero-stats">
              <div><b>14</b><span>TITANS</span></div>
              <div><b>01</b><span>DESTRUCTIBLE CITY</span></div>
              <div><b>&infin;</b><span>CHAOS</span></div>
            </div>
            <div class="launch-summary" id="launch-summary"></div>
          </div>

          <aside class="dossier" id="dossier">
            <div class="dossier-head"><span>SELECTED TITAN</span><span id="dossier-index">01 / 14</span></div>
            <div class="portrait-wrap">
              <div class="portrait-rings"></div>
              <div class="portrait" id="menu-portrait"></div>
              <div class="portrait-scan"></div>
            </div>
            <div class="dossier-title">
              <div><span id="menu-era">2019</span><h2 id="menu-name">Godzilla 2019</h2></div>
              <span class="family-tag" id="menu-family">GODZILLA</span>
            </div>
            <p class="tagline" id="menu-tagline"></p>
            <div class="stat-list" id="menu-stats"></div>
            <div class="ability-list" id="menu-abilities"></div>
            <div class="rival-block">
              <div class="rival-head"><span>SELECT RIVAL</span><span id="rival-name">KING GHIDORAH</span></div>
              <div class="chips rival-chips" id="opponent-chips"></div>
            </div>
          </aside>
        </div>

        <div class="config-strip">
          <div class="config-block">
            <label>ENEMY FORCE</label>
            <div class="chips" id="force-chips">
              <button class="chip active" data-force="duel">DUEL <em>1v1</em></button>
              <button class="chip" data-force="assault">ASSAULT <em>2v1</em></button>
              <button class="chip" data-force="gauntlet">GAUNTLET <em>3v1</em></button>
              <button class="chip" data-force="war">WAR <em>2v2</em></button>
            </div>
          </div>
          <div class="config-block">
            <label>WEATHER</label>
            <div class="chips" id="weather-chips">
              <button class="chip" data-weather="clear">CLEAR</button>
              <button class="chip" data-weather="rain">RAIN</button>
              <button class="chip active" data-weather="storm">STORM</button>
              <button class="chip" data-weather="fog">FOG</button>
            </div>
          </div>
          <div class="config-block">
            <label>TIME OF DAY</label>
            <div class="chips" id="time-chips">
              <button class="chip" data-time="sunrise">SUNRISE</button>
              <button class="chip" data-time="day">DAY</button>
              <button class="chip active" data-time="sunset">SUNSET</button>
              <button class="chip" data-time="night">NIGHT</button>
            </div>
          </div>
        </div>

        <div class="roster-wrap" id="roster-wrap">
          <div class="section-head"><span>MONSTER COLLECTION</span><span id="roster-count">14 SIGNATURES</span></div>
          <div class="roster" id="roster"></div>
        </div>
      </div>

      <footer class="menu-foot">
        <span>BUILD 1.0 // WEBGL</span>
        <span>DESKTOP + MOBILE</span>
        <span>HEADPHONES RECOMMENDED</span>
      </footer>
    </section>

    <section id="hud" class="hud hidden">
      <div class="hud-top">
        <div class="objective-card">
          <span class="hud-mode" id="hud-mode">QUICK BATTLE</span>
          <b id="hud-objective">SLAY KING GHIDORAH</b>
          <small id="hud-sub">HONG KONG // STORM</small>
        </div>
        <div class="hud-center">
          <div class="clock" id="hud-clock">00:00</div>
          <div class="mini-chips"><span id="hud-weather">STORM</span><span id="hud-time">SUNSET</span></div>
        </div>
        <div class="hud-tools">
          <button class="icon-btn" data-game="pause" aria-label="Pause">II</button>
          <button class="icon-btn" data-open="settings" aria-label="Settings">&#9881;</button>
        </div>
      </div>

      <div class="hud-bottom">
        <div class="player-card" id="player-card">
          <div class="player-id">
            <span class="player-team" id="player-team">ALPHA</span>
            <b id="player-name">GODZILLA</b>
            <span class="player-hp-label" id="player-hp-label">1380</span>
          </div>
          <div class="bar hp"><i id="player-hp"></i><span class="bar-ticks"></span></div>
          <div class="bar stamina"><i id="player-stamina"></i></div>
          <div class="player-sub">
            <span id="player-status">READY</span>
            <span class="special-mini"><i id="special-cooldown"></i><em id="special-name">NUCLEAR PULSE</em></span>
          </div>
        </div>

        <div class="ability-bar" id="ability-bar">
          <button class="ability" data-action="light"><kbd>LMB</kbd><b>STRIKE</b></button>
          <button class="ability" data-action="heavy"><kbd>RMB</kbd><b>HEAVY</b></button>
          <button class="ability special" data-action="special"><kbd>E</kbd><b id="ability-special">SPECIAL</b></button>
          <button class="ability" data-action="grab"><kbd>G</kbd><b>GRAB</b></button>
          <button class="ability" data-action="roar"><kbd>R</kbd><b>ROAR</b></button>
          <button class="ability" data-action="dodge"><kbd>Q</kbd><b>DODGE</b></button>
          <button class="ability" data-action="jump"><kbd>SPC</kbd><b>JUMP</b></button>
          <button class="ability" data-action="block"><kbd>C</kbd><b>BLOCK</b></button>
        </div>

        <div class="minimap-wrap">
          <canvas id="minimap" width="180" height="180"></canvas>
          <span>HONG KONG</span>
          <em id="minimap-count">2 TITANS</em>
        </div>
      </div>

      <div id="sandbox-panel" class="sandbox-panel hidden">
        <div class="sandbox-head"><span>SANDBOX CONTROL</span><button class="mini-x" data-game="toggle-sandbox">&times;</button></div>
        <div class="sandbox-tabs">
          <button class="active" data-sandbox-tab="monsters">MONSTERS</button>
          <button data-sandbox-tab="world">WORLD</button>
        </div>
        <div class="sandbox-body">
          <div class="sandbox-pane" data-sandbox-pane="monsters">
            <div class="sandbox-label">DEPLOY TEAM</div>
            <div class="chips compact" id="sandbox-team">
              <button class="chip" data-sandbox-team="0">ALPHA</button>
              <button class="chip active" data-sandbox-team="1">OMEGA</button>
              <button class="chip" data-sandbox-team="2">GAMMA</button>
            </div>
            <div class="sandbox-label">TITAN</div>
            <div class="sandbox-grid" id="sandbox-roster"></div>
            <div class="sandbox-row">
              <button class="btn btn-small" data-game="toggle-ai">TOGGLE AI</button>
              <span class="sandbox-note" id="sandbox-count">1 ACTIVE</span>
            </div>
          </div>
          <div class="sandbox-pane hidden" data-sandbox-pane="world">
            <div class="sandbox-label">VEHICLES</div>
            <div class="sandbox-grid">
              <button data-spawn-type="car">CAR</button>
              <button data-spawn-type="truck">TRUCK</button>
              <button data-spawn-type="bus">BUS</button>
            </div>
            <div class="sandbox-label">LIFE</div>
            <div class="sandbox-grid">
              <button data-spawn-type="npc">CIVILIAN</button>
              <button data-spawn-type="tree">TREE</button>
              <button data-spawn-type="barrel">BARREL</button>
            </div>
            <div class="sandbox-label">STRUCTURES</div>
            <div class="sandbox-grid">
              <button data-spawn-type="building">BUILDING</button>
              <button data-spawn-type="streetlight">STREETLIGHT</button>
            </div>
            <div class="sandbox-label">ENVIRONMENT</div>
            <div class="chips compact">
              <button class="chip" data-sandbox-weather="clear">CLEAR</button>
              <button class="chip" data-sandbox-weather="storm">STORM</button>
              <button class="chip" data-sandbox-weather="fog">FOG</button>
            </div>
            <div class="sandbox-row">
              <button class="btn btn-small danger" data-game="reset-world">RESET WORLD</button>
            </div>
          </div>
        </div>
      </div>

      <div class="mobile-controls" id="mobile-controls">
        <div class="joystick" id="joystick"><div class="joystick-knob" id="joystick-knob"></div></div>
        <div class="mobile-actions">
          <button class="mob-btn attack" data-action="light">STRIKE</button>
          <button class="mob-btn" data-action="heavy">HEAVY</button>
          <button class="mob-btn special" data-action="special">SPECIAL</button>
          <button class="mob-btn" data-action="grab">GRAB</button>
          <button class="mob-btn" data-action="dodge">DODGE</button>
          <button class="mob-btn" data-action="roar">ROAR</button>
          <button class="mob-btn" data-action="jump">JUMP</button>
          <button class="mob-btn block" data-mobile-hold="block">BLOCK</button>
          <button class="mob-btn run" data-mobile-hold="run">RUN</button>
        </div>
      </div>
    </section>

    <div id="overlay" class="overlay hidden">
      <div class="modal pause-modal" id="pause-modal">
        <div class="modal-head"><span>SIMULATION PAUSED</span><button class="mini-x" data-close>&times;</button></div>
        <div class="pause-title">HOLD THE LINE</div>
        <div class="pause-grid">
          <button class="btn btn-primary" data-game="resume">RESUME</button>
          <button class="btn btn-ghost" data-open="settings">SETTINGS</button>
          <button class="btn btn-ghost" data-game="restart">RESTART BATTLE</button>
          <button class="btn btn-ghost" data-game="switch-monster">SWITCH TITAN</button>
          <button class="btn btn-ghost" data-game="spectate">SPECTATE</button>
          <button class="btn btn-ghost danger" data-game="menu">QUIT TO MENU</button>
        </div>
        <div class="pause-hint">ESC RESUME // P PAUSE // F2 SCREENSHOT</div>
      </div>

      <div class="modal settings-modal" id="settings-modal">
        <div class="modal-head"><span>SYSTEM CONFIG</span><button class="mini-x" data-close>&times;</button></div>
        <div class="settings-scroll">
          <div class="setting-row">
            <label>QUALITY PRESET</label>
            <div class="seg" id="quality-seg">
              <button data-quality="low">LOW</button>
              <button data-quality="medium">MEDIUM</button>
              <button data-quality="high">HIGH</button>
              <button data-quality="ultra">ULTRA</button>
            </div>
          </div>
          <div class="setting-row">
            <label>RENDER RESOLUTION <output id="resolution-out">100%</output></label>
            <input type="range" id="resolution" data-setting="resolution" min="50" max="100" step="5" />
          </div>
          <div class="setting-row">
            <label>PARTICLE DENSITY</label>
            <select data-setting="particles">
              <option value="low">LOW</option><option value="medium">MEDIUM</option><option value="high">HIGH</option><option value="ultra">ULTRA</option>
            </select>
          </div>
          <div class="setting-row">
            <label>DESTRUCTION DETAIL</label>
            <select data-setting="destruction">
              <option value="low">LOW</option><option value="medium">MEDIUM</option><option value="high">HIGH</option>
            </select>
          </div>
          <div class="setting-row">
            <label>FRAME RATE CAP</label>
            <select data-setting="fpsLimit">
              <option value="30">30 FPS</option><option value="60">60 FPS</option><option value="120">120 FPS</option><option value="0">UNCAPPED</option>
            </select>
          </div>
          <div class="toggle-grid">
            <label class="switch"><input type="checkbox" data-setting="shadows" /><i></i><span>SHADOWS</span></label>
            <label class="switch"><input type="checkbox" data-setting="bloom" /><i></i><span>GLOW / BLOOM</span></label>
            <label class="switch"><input type="checkbox" data-setting="cameraShake" /><i></i><span>CAMERA SHAKE</span></label>
            <label class="switch"><input type="checkbox" data-setting="sound" /><i></i><span>SOUND FX</span></label>
            <label class="switch"><input type="checkbox" data-setting="music" /><i></i><span>MUSIC / AMBIENCE</span></label>
            <label class="switch"><input type="checkbox" data-setting="hud" /><i></i><span>HUD</span></label>
            <label class="switch"><input type="checkbox" data-setting="disableControl" /><i></i><span>DISABLE CONTROLLING KAIJUS</span></label>
          </div>
        </div>
        <div class="modal-foot"><span>CHANGES APPLY LIVE</span><button class="btn btn-primary" data-close>DONE</button></div>
      </div>

      <div class="modal controls-modal" id="controls-modal">
        <div class="modal-head"><span>FIELD MANUAL</span><button class="mini-x" data-close>&times;</button></div>
        <div class="controls-grid">
          <div>
            <h3>ON FOOT // DESKTOP</h3>
            <div class="key-row"><kbd>W A S D</kbd><span>MOVE</span></div>
            <div class="key-row"><kbd>SHIFT</kbd><span>RUN</span></div>
            <div class="key-row"><kbd>MOUSE</kbd><span>ORBIT CAMERA</span></div>
            <div class="key-row"><kbd>LMB</kbd><span>LIGHT ATTACK</span></div>
            <div class="key-row"><kbd>RMB</kbd><span>HEAVY ATTACK</span></div>
            <div class="key-row"><kbd>E</kbd><span>SPECIAL BREATH</span></div>
            <div class="key-row"><kbd>G</kbd><span>GRAB / THROW</span></div>
            <div class="key-row"><kbd>R</kbd><span>ROAR</span></div>
            <div class="key-row"><kbd>Q</kbd><span>DODGE</span></div>
            <div class="key-row"><kbd>SPACE</kbd><span>JUMP</span></div>
            <div class="key-row"><kbd>C</kbd><span>BLOCK</span></div>
            <div class="key-row"><kbd>ESC</kbd><span>PAUSE</span></div>
          </div>
          <div>
            <h3>FIELD NOTES</h3>
            <p>Every titan has a unique silhouette, special weapon and family gait. Land light attacks to build combos, then finish with a heavy or a breath weapon.</p>
            <p>Buildings collapse section by section. A collapsing tower can flatten vehicles, civilians and even a distracted titan. Use the city as a weapon.</p>
            <p>Blocking drains stamina. Dodge has invulnerability frames. Grabs pin a rival in place, then throw them through a skyline.</p>
            <h3>TOUCH // MOBILE</h3>
            <div class="key-row"><kbd>LEFT STICK</kbd><span>MOVE</span></div>
            <div class="key-row"><kbd>RIGHT SWIPE</kbd><span>CAMERA</span></div>
            <div class="key-row"><kbd>BUTTONS</kbd><span>ATTACK / SPECIAL</span></div>
          </div>
        </div>
        <div class="modal-foot"><span>ALL TITANS PLAYABLE</span><button class="btn btn-primary" data-close>UNDERSTOOD</button></div>
      </div>

      <div class="modal about-modal" id="about-modal">
        <div class="modal-head"><span>TITAN INTEL</span><button class="mini-x" data-close>&times;</button></div>
        <div class="about-body">
          <div class="about-mark">${fn("ghidorah")}</div>
          <div>
            <h2>TITAN BOX</h2>
            <p>A playable MonsterVerse sandbox built with procedural titans, a fully destructible Hong Kong, dynamic weather and synthesized audio. No downloads, no assets — every scale, plate and roar is generated in the browser.</p>
            <p>Battle as fourteen titans, free roam the city, or open the sandbox and spawn monsters, vehicles, civilians and buildings. Spectate AI wars, switch bodies mid-fight, and level the skyline.</p>
            <div class="about-meta"><span>THREE.JS</span><span>WEB AUDIO</span><span>PROCEDURAL</span><span>60 FPS TARGET</span></div>
          </div>
        </div>
        <div class="modal-foot"><span>FAN-MADE TRIBUTE // NOT AFFILIATED</span><button class="btn btn-primary" data-close>CLOSE</button></div>
      </div>

      <div class="modal result-modal" id="result-modal">
        <div class="result-kicker" id="result-kicker">VICTORY</div>
        <h2 class="result-title" id="result-title">THE KING STANDS</h2>
        <div class="result-stats" id="result-stats"></div>
        <div class="result-actions">
          <button class="btn btn-primary" data-game="rematch">REMATCH</button>
          <button class="btn btn-ghost" data-game="switch-monster">SWITCH TITAN</button>
          <button class="btn btn-ghost" data-game="menu">MAIN MENU</button>
        </div>
      </div>

      <div class="modal fatal-modal" id="fatal-modal">
        <div class="modal-head"><span>RENDERER FAULT</span></div>
        <div class="about-body">
          <div>
            <h2>SIMULATION HALTED</h2>
            <p id="fatal-message">An unexpected error occurred.</p>
            <p>Try reloading the page. If the issue persists, lower the quality preset in settings.</p>
          </div>
        </div>
        <div class="modal-foot"><button class="btn btn-primary" onclick="location.reload()">RELOAD</button></div>
      </div>
    </div>

    <div id="toasts" class="toasts"></div>

    <div id="versus" class="versus hidden">
      <div class="versus-side" id="versus-player"></div>
      <div class="vs-mark"><span>VS</span></div>
      <div class="versus-side enemy" id="versus-enemy"></div>
    </div>

    <div id="title-splash" class="title-splash hidden"></div>
    <div id="action-flash" class="action-flash"></div>
    <div id="cinematic" class="cinematic-bars"><i></i><i></i></div>
    `}cache(){const t=e=>this.root.querySelector(e);this.loading=t("#loading"),this.menu=t("#menu"),this.hud=t("#hud"),this.overlay=t("#overlay"),this.toasts=t("#toasts"),this.launch=t("#launch"),this.launchLabel=t("#launch-label"),this.launchSummary=t("#launch-summary"),this.dossier=t("#dossier"),this.menuPortrait=t("#menu-portrait"),this.menuName=t("#menu-name"),this.menuEra=t("#menu-era"),this.menuFamily=t("#menu-family"),this.menuTagline=t("#menu-tagline"),this.menuStats=t("#menu-stats"),this.menuAbilities=t("#menu-abilities"),this.dossierIndex=t("#dossier-index"),this.roster=t("#roster"),this.opponentChips=t("#opponent-chips"),this.rivalName=t("#rival-name"),this.playerCard=t("#player-card"),this.playerName=t("#player-name"),this.playerTeam=t("#player-team"),this.playerHp=t("#player-hp"),this.playerHpLabel=t("#player-hp-label"),this.playerStamina=t("#player-stamina"),this.playerStatus=t("#player-status"),this.specialName=t("#special-name"),this.specialCooldown=t("#special-cooldown"),this.abilitySpecial=t("#ability-special"),this.hudMode=t("#hud-mode"),this.hudObjective=t("#hud-objective"),this.hudSub=t("#hud-sub"),this.hudClock=t("#hud-clock"),this.hudWeather=t("#hud-weather"),this.hudTime=t("#hud-time"),this.minimap=t("#minimap"),this.minimapCount=t("#minimap-count"),this.sandboxPanel=t("#sandbox-panel"),this.sandboxRoster=t("#sandbox-roster"),this.sandboxCount=t("#sandbox-count"),this.mobileControls=t("#mobile-controls"),this.joystick=t("#joystick"),this.joystickKnob=t("#joystick-knob"),this.versus=t("#versus"),this.versusPlayer=t("#versus-player"),this.versusEnemy=t("#versus-enemy"),this.titleSplash=t("#title-splash"),this.actionFlash=t("#action-flash"),this.cinematicBars=t("#cinematic"),this.damageFlash=document.getElementById("damage-flash"),this.resultKicker=t("#result-kicker"),this.resultTitle=t("#result-title"),this.resultStats=t("#result-stats"),this.minimapCtx=this.minimap?.getContext("2d")}setGame(t){this.game=t,t.hud=this,t.input&&this.joystick&&t.input.attachJoystick(this.joystick,this.joystickKnob),this.refreshSandbox(t),this.menu&&!this.menu.classList.contains("hidden")&&this.showMenu()}buildRoster(){this.roster.innerHTML=Ai.map((t,e)=>`
      <button class="titan-card" data-titan="${t.id}" style="--titan:${Un(t.colors.glow)}">
        <span class="titan-index">${String(e+1).padStart(2,"0")}</span>
        <span class="titan-glyph">${fn(t.family)}</span>
        <span class="titan-card-copy"><b>${t.short}</b><small>${t.era} // ${t.family.toUpperCase()}</small></span>
        <span class="titan-power">${t.power}</span>
      </button>
    `).join(""),this.root.querySelector("#roster-count").textContent=`${Ai.length} SIGNATURES`}buildRivals(){pn(this.selectedId),this.opponentChips.innerHTML=Ai.filter(e=>e.id!==this.selectedId).map(e=>`
      <button class="chip rival ${e.id===this.opponentId?"active":""}" data-rival="${e.id}" style="--titan:${Un(e.colors.glow)}">${e.short} <em>${e.era}</em></button>
    `).join("");const t=pn(this.opponentId);this.rivalName.textContent=t?t.name.toUpperCase():"—"}buildSandboxRoster(){this.sandboxRoster.innerHTML=Ai.map(t=>`
      <button class="sandbox-titan" data-spawn-id="${t.id}" style="--titan:${Un(t.colors.glow)}" title="Spawn ${t.name}">
        ${fn(t.family)}<span>${t.short}</span>
      </button>
    `).join("")}selectMonster(t,e=!1){const i=pn(t);if(!i)return;if(this.selectedId=i.id,this.opponentId===i.id){const a=Ai.find(r=>r.id!==i.id);this.opponentId=a.id}this.menu.style.setProperty("--titan",Un(i.colors.glow)),this.menu.style.setProperty("--titan-soft",Un(i.colors.accent)),this.menuPortrait.innerHTML=`${fn(i.family,"portrait-svg")}<div class="portrait-glow"></div>`,this.menuName.textContent=i.name,this.menuEra.textContent=i.era,this.menuFamily.textContent=i.family.toUpperCase(),this.menuTagline.textContent=i.tagline;const s=Ai.findIndex(a=>a.id===i.id);this.dossierIndex.textContent=`${String(s+1).padStart(2,"0")} / ${Ai.length}`,this.menuStats.innerHTML=[Fa("POWER",i.power),Fa("ATTACK",i.attack),Fa("DEFENSE",i.defense),Fa("SPEED",i.speedStat)].join(""),this.menuAbilities.innerHTML=`
      <div><span>LIGHT</span><b>${i.abilities.light}</b></div>
      <div><span>HEAVY</span><b>${i.abilities.heavy}</b></div>
      <div class="special"><span>SPECIAL</span><b>${i.abilities.special}</b></div>
      <div><span>HEIGHT</span><b>${i.height} M</b></div>
    `,this.root.querySelectorAll(".titan-card").forEach(a=>a.classList.toggle("active",a.dataset.titan===i.id)),this.buildRivals(),this.updateLaunchSummary(),e||this.audio?.click?.()}setMode(t,e=!1){this.mode=t,this.root.querySelectorAll(".mode-card").forEach(a=>a.classList.toggle("active",a.dataset.mode===t));const i={battle:"DEPLOY",roam:"ENTER CITY",sandbox:"OPEN SANDBOX"};this.launchLabel.textContent=i[t]||"DEPLOY";const s=t==="battle";this.root.querySelectorAll("#force-chips, #opponent-chips").forEach(a=>{a.classList.toggle("disabled",!s)}),this.root.querySelectorAll("#force-chips .chip, #opponent-chips .chip").forEach(a=>{a.disabled=!s}),e||this.audio?.click?.(),this.updateLaunchSummary()}setChip(t,e,i,s){this.root.querySelectorAll(`${t} ${e}`).forEach(a=>a.classList.toggle("active",a.dataset[i]===s))}updateLaunchSummary(){if(!this.launchSummary)return;const t=pn(this.selectedId),e=pn(this.opponentId);if(this.mode==="battle"){const i={duel:"DUEL",assault:"ASSAULT",gauntlet:"GAUNTLET",war:"WAR"}[this.force];this.launchSummary.textContent=`${t.name.toUpperCase()} // ${i} // ${this.weather.toUpperCase()} // ${this.time.toUpperCase()}`,this.launchSummary.dataset.rival=e?.name||""}else this.mode==="roam"?this.launchSummary.textContent=`${t.name.toUpperCase()} // FREE ROAM // ${this.weather.toUpperCase()}`:this.launchSummary.textContent=`${t.name.toUpperCase()} // SANDBOX // UNLIMITED SPAWNS`}launchConfig(){const t=this.selectedId,e=pn(t),i=[],s=[];if(this.mode==="battle"){i.push(this.opponentId);const a=Ai.filter(l=>l.id!==t&&l.id!==this.opponentId),r=()=>a.splice(Math.floor(Math.random()*a.length),1)[0]?.id;(this.force==="assault"||this.force==="gauntlet"||this.force==="war")&&i.push(r()),this.force==="gauntlet"&&i.push(r()),this.force==="war"&&s.push(r());const o=pn(this.opponentId);return{mode:"battle",playerId:t,enemies:i.filter(Boolean),allies:s.filter(Boolean),weather:this.weather,time:this.time,intro:!0,spectate:!!this.settings.get("disableControl"),title:`${e.short} VS ${o.short}`}}return{mode:this.mode,playerId:t,enemies:[],allies:[],weather:this.weather,time:this.time,intro:!1,spectate:!!this.settings.get("disableControl"),title:this.mode==="sandbox"?"SANDBOX":""}}bind(){this.root.addEventListener("click",i=>{const s=i.target.closest("[data-titan]");if(s){this.selectMonster(s.dataset.titan);return}const a=i.target.closest("[data-rival]");if(a&&!a.disabled){this.opponentId=a.dataset.rival,this.buildRivals(),this.updateLaunchSummary(),this.audio?.click?.();return}const r=i.target.closest("[data-mode]");if(r){this.setMode(r.dataset.mode);return}const o=i.target.closest("[data-weather]");if(o){this.weather=o.dataset.weather,this.setChip("#weather-chips",".chip","weather",this.weather),this.updateLaunchSummary(),this.audio?.click?.();return}const l=i.target.closest("[data-time]");if(l){this.time=l.dataset.time,this.setChip("#time-chips",".chip","time",this.time),this.updateLaunchSummary(),this.audio?.click?.();return}const c=i.target.closest("[data-force]");if(c&&!c.disabled){this.force=c.dataset.force,this.setChip("#force-chips",".chip","force",this.force),this.updateLaunchSummary(),this.audio?.click?.();return}const h=i.target.closest("[data-open]");if(h){this.openOverlay(h.dataset.open),this.audio?.click?.();return}const d=i.target.closest("[data-scroll]");if(d){document.getElementById(d.dataset.scroll)?.scrollIntoView({behavior:"smooth",block:"start"}),this.audio?.click?.();return}if(i.target.closest("[data-close]")){this.closeCurrent(),this.audio?.click?.();return}const f=i.target.closest("[data-quality]");if(f){this.settings.set("quality",f.dataset.quality),this.applySettingsView(),this.onSettingsChange?.("quality"),this.audio?.click?.();return}const p=i.target.closest("[data-sandbox-tab]");if(p){this.root.querySelectorAll("[data-sandbox-tab]").forEach(E=>E.classList.toggle("active",E===p)),this.root.querySelectorAll("[data-sandbox-pane]").forEach(E=>E.classList.toggle("hidden",E.dataset.sandboxPane!==p.dataset.sandboxTab));return}const _=i.target.closest("[data-sandbox-team]");if(_){this.sandboxTeam=Number(_.dataset.sandboxTeam),this.setChip("#sandbox-team",".chip","sandboxTeam",_.dataset.sandboxTeam);return}const g=i.target.closest("[data-spawn-id]");if(g&&this.game){this.game.spawnSandboxMonster(g.dataset.spawnId,{team:this.sandboxTeam}),this.audio?.confirm?.();return}const m=i.target.closest("[data-spawn-type]");if(m&&this.game){const E=m.dataset.spawnType;["car","truck","bus"].includes(E)?this.game.spawnSandboxVehicle(E):E==="npc"?this.game.spawnSandboxNPC():E==="building"?this.game.spawnSandboxBuilding():this.game.spawnSandboxProp(E),this.audio?.click?.();return}const v=i.target.closest("[data-sandbox-weather]");if(v&&this.game){this.game.setWeather(v.dataset.sandboxWeather);return}const y=i.target.closest("[data-game]");if(y){this.handleGameAction(y.dataset.game);return}const M=i.target.closest("[data-action]");if(M){if(M.dataset.action==="block")return;this.game?.input&&this.game.input.trigger(M.dataset.action),this.flashAction(M.dataset.action),this.audio?.click?.()}}),this.launch.addEventListener("click",()=>this.doLaunch()),this.root.querySelectorAll("[data-setting]").forEach(i=>{const s=()=>{const a=i.dataset.setting;let r;i.type==="checkbox"?r=i.checked:a==="resolution"?r=Number(i.value)/100:a==="fpsLimit"?r=Number(i.value):r=i.value,this.settings.set(a,r),this.applySettingsView(),this.onSettingsChange?.(a)};i.addEventListener(i.type==="range"?"input":"change",s)}),this.root.querySelectorAll("[data-mobile-hold]").forEach(i=>{const s=i.dataset.mobileHold,a=o=>{o.preventDefault(),o.stopPropagation(),this.game?.input&&(s==="block"&&(this.game.input.mobileBlock=!0),s==="run"&&(this.game.input.mobileRun=!0),i.classList.add("active"))},r=o=>{o.preventDefault(),this.game?.input&&(s==="block"&&(this.game.input.mobileBlock=!1),s==="run"&&(this.game.input.mobileRun=!1),i.classList.remove("active"))};i.addEventListener("pointerdown",a),i.addEventListener("pointerup",r),i.addEventListener("pointercancel",r),i.addEventListener("pointerleave",r)}),window.addEventListener("keydown",i=>{if(!(i.target&&/INPUT|TEXTAREA|SELECT/.test(i.target.tagName))){if(i.code==="Enter"&&!this.menu.classList.contains("hidden")&&this.overlay.classList.contains("hidden")){i.preventDefault(),this.doLaunch();return}if(i.code==="Escape"){this.overlay.classList.contains("hidden")?this.game?.active&&!this.game.resultShown&&this.game.pause():this.closeCurrent();return}i.code==="KeyP"&&this.game?.active&&!this.game.resultShown&&(this.game.paused?this.game.resume():this.game.pause())}}),(window.matchMedia("(pointer: coarse)").matches||window.innerWidth<=760)&&this.mobileControls.classList.add("visible");const t=window.matchMedia("(pointer: coarse)"),e=()=>this.mobileControls.classList.toggle("visible",t.matches||window.innerWidth<=760);t.addEventListener?.("change",e),window.addEventListener("resize",e)}handleGameAction(t){if(this.audio?.click?.(),!!this.game)switch(t){case"pause":this.game.pause();break;case"resume":this.game.resume();break;case"restart":this.game.restart();break;case"switch-monster":this.game.switchPlayer(),this.closeOverlays();break;case"spectate":this.game.setSpectate(!this.game.spectate),this.closeOverlays();break;case"menu":this.onQuit?.();break;case"rematch":this.game.restart();break;case"toggle-ai":this.game.setAI(!this.game.monsters.some(e=>e.ai&&e!==this.game.player));break;case"reset-world":this.game.resetWorld();break;case"toggle-sandbox":this.sandboxPanel.classList.toggle("hidden");break}}doLaunch(){const t=this.launchConfig();this.onLaunch?.(t)}openOverlay(t){this.overlay.classList.remove("hidden"),this.root.querySelectorAll(".modal").forEach(i=>i.classList.add("hidden"));const e=this.root.querySelector(`#${t}-modal`);e&&e.classList.remove("hidden"),this.returnToPause=!!this.game?.paused&&t!=="pause"&&t!=="result"}closeCurrent(){if([...this.root.querySelectorAll(".modal")].find(i=>!i.classList.contains("hidden"))?.id==="settings-modal"&&this.returnToPause&&this.game?.paused){this.openOverlay("pause");return}this.closeOverlays()}closeOverlays(){this.overlay.classList.add("hidden"),this.root.querySelectorAll(".modal").forEach(t=>t.classList.add("hidden")),this.returnToPause=!1}openPause(){this.openOverlay("pause")}hideMenu(){this.menu.classList.add("hidden"),this.root.classList.add("in-game"),this.root.classList.remove("in-menu"),this.closeOverlays()}showMenu(){this.menu.classList.remove("hidden"),this.hud.classList.add("hidden"),this.sandboxPanel.classList.add("hidden"),this.root.classList.remove("in-game"),this.root.classList.add("in-menu"),this.closeOverlays()}showHUD(t){if(this.hud.classList.remove("hidden"),this.sandboxPanel.classList.toggle("hidden",t?.mode!=="sandbox"),t){const e=t.player;e&&(this.playerName.textContent=e.name.toUpperCase(),this.playerTeam.textContent=to[e.team]||"ALPHA",this.specialName.textContent=e.def.special.name.toUpperCase(),this.abilitySpecial.textContent=e.def.special.name.toUpperCase()),this.hudMode.textContent=t.mode==="battle"?"QUICK BATTLE":t.mode==="sandbox"?"SANDBOX":"FREE ROAM"}this.applyHudVisibility()}hideHUD(){this.hud.classList.add("hidden"),this.sandboxPanel.classList.add("hidden")}updateHUD(t,e){const i=t.player;if(!i)return;const s=qa(i.hp/i.maxHp,0,1),a=qa(i.stamina/i.maxStamina,0,1);this.playerHp.style.transform=`scaleX(${s})`,this.playerStamina.style.transform=`scaleX(${a})`,this.playerHpLabel.textContent=`${Math.max(0,Math.ceil(i.hp))} / ${i.maxHp}`,this.playerCard.classList.toggle("low",s<.3),this.playerCard.classList.toggle("dead",i.dead);let r="READY";i.dead?r="DOWN":i.state.ragdoll?r="KNOCKED DOWN":i.state.grabbed?r="GRABBED":i.state.burn>0?r="BURNING":i.state.freeze>0?r="FROZEN":i.state.shock>0?r="CORRODING":i.state.block?r="GUARDING":i.state.attack?r=i.state.attack.kind.toUpperCase():i.state.speed>1&&(r=i.state.running?"CHARGING":"MOVING"),this.playerStatus.textContent=r;const o=i.cooldowns.special,l=Math.max(.001,i.def.special.cooldown);this.specialCooldown.style.transform=`scaleX(${qa(1-o/l,0,1)})`,this.specialCooldown.parentElement.classList.toggle("ready",o<=0),this.hudObjective.textContent=t.objective||"",this.hudSub.textContent=t.subObjective||"";const c=Math.max(0,t.time-t.stats.startTime),h=Math.floor(c/60),d=Math.floor(c%60),u=`${String(h).padStart(2,"0")}:${String(d).padStart(2,"0")}`;this.lastHud.clock!==u&&(this.hudClock.textContent=u,this.lastHud.clock=u);const f=(t.environment?.weather||"clear").toUpperCase();this.lastHud.weather!==f&&(this.hudWeather.textContent=f,this.lastHud.weather=f);const p=xv(t.environment?.hour??19);this.lastHud.time!==p&&(this.hudTime.textContent=p,this.lastHud.time=p),this.minimapTimer-=e,this.minimapTimer<=0&&(this.minimapTimer=.12,this.drawMinimap(t))}drawMinimap(t){const e=this.minimapCtx;if(!e)return;const i=this.minimap.width,a=i/(440*2),r=i/2,o=i/2;e.clearRect(0,0,i,i),e.fillStyle="rgba(5,9,13,0.78)",e.fillRect(0,0,i,i),e.strokeStyle="rgba(120,170,190,0.16)",e.lineWidth=1;for(let c=1;c<4;c++)e.beginPath(),e.moveTo(i/4*c,0),e.lineTo(i/4*c,i),e.moveTo(0,i/4*c),e.lineTo(i,i/4*c),e.stroke();e.fillStyle="rgba(90,105,112,0.55)";for(const c of t.city.buildings){if(c.destroyed)continue;const h=r+c.x*a,d=o+c.z*a;e.fillRect(h-c.width*a*.5,d-c.depth*a*.5,Math.max(1,c.width*a),Math.max(1,c.depth*a))}for(const c of t.monsters){if(c.dead)continue;const h=r+c.root.position.x*a,d=o+c.root.position.z*a,u=c===t.player;e.beginPath(),e.arc(h,d,u?4.2:3,0,Math.PI*2),e.fillStyle=u?"#f4dfa2":c.team===0?"#4fc3ff":"#ff4d5e",e.fill(),u&&(e.strokeStyle="rgba(244,223,162,0.55)",e.lineWidth=2,e.beginPath(),e.arc(h,d,8+Math.sin(t.time*4)*2,0,Math.PI*2),e.stroke())}e.strokeStyle="rgba(215,180,106,0.7)",e.lineWidth=1.5,e.strokeRect(.5,.5,i-1,i-1);const l=t.monsters.filter(c=>!c.dead).length;this.minimapCount.textContent=`${l} TITAN${l===1?"":"S"}`}toast(t,e="info"){if(!t)return;const i=document.createElement("div");for(i.className=`toast ${e}`,i.innerHTML=`<span class="toast-mark"></span><b>${t}</b>`,this.toasts.appendChild(i);this.toasts.children.length>4;)this.toasts.firstElementChild.remove();requestAnimationFrame(()=>i.classList.add("show")),setTimeout(()=>{i.classList.remove("show"),setTimeout(()=>i.remove(),320)},e==="kill"?3200:2400)}flashAction(t){this.root.querySelectorAll(`[data-action="${t}"]`).forEach(i=>{i.classList.remove("flash"),i.offsetWidth,i.classList.add("flash"),setTimeout(()=>i.classList.remove("flash"),260)})}onAction(t){this.flashAction(t)}onMonsterSpawn(){this.game&&this.refreshSandbox(this.game)}onDamage(t,e,i){t?.isPlayer&&(this.damageFlash.classList.remove("active","blocked"),this.damageFlash.offsetWidth,this.damageFlash.classList.add("active"),i&&this.damageFlash.classList.add("blocked"),clearTimeout(this.timers.damage),this.timers.damage=setTimeout(()=>this.damageFlash.classList.remove("active","blocked"),180))}setSpecialName(t){this.specialName.textContent=t.toUpperCase()}cinematic(t,e=1){this.cinematicBars.classList.add("active"),clearTimeout(this.timers.cinematic),this.timers.cinematic=setTimeout(()=>this.cinematicBars.classList.remove("active"),1e3*e),this.game?.cameraRig?.cinematicPush?.(t,e)}showVersus(t,e){if(!t)return;const i=e?.[0];this.versusPlayer.innerHTML=`<div class="vs-glyph" style="color:${Un(t.def.colors.glow)}">${fn(t.def.family)}</div><span>${to[t.team]||"ALPHA"}</span><b>${t.name.toUpperCase()}</b><em>${t.def.era} // ${t.def.family.toUpperCase()}</em>`,this.versusEnemy.innerHTML=i?`<div class="vs-glyph" style="color:${Un(i.def.colors.glow)}">${fn(i.def.family)}</div><span>${to[i.team]||"OMEGA"}</span><b>${i.name.toUpperCase()}</b><em>${i.def.era} // ${i.def.family.toUpperCase()}</em>`:'<div class="vs-glyph">?</div><span>OMEGA</span><b>UNKNOWN</b><em>SIGNAL LOST</em>',this.versus.classList.remove("hidden"),clearTimeout(this.timers.versus),this.timers.versus=setTimeout(()=>this.hideVersus(),3e3)}hideVersus(){this.versus.classList.add("hidden")}showTitle(t){t&&(this.titleSplash.textContent=t,this.titleSplash.classList.remove("hidden"),this.titleSplash.classList.remove("show"),this.titleSplash.offsetWidth,this.titleSplash.classList.add("show"),clearTimeout(this.timers.title),this.timers.title=setTimeout(()=>{this.titleSplash.classList.remove("show"),setTimeout(()=>this.titleSplash.classList.add("hidden"),500)},2600))}showResult(t,e){this.resultKicker.textContent=t?"VICTORY":"DEFEAT",this.resultKicker.classList.toggle("lose",!t),this.resultTitle.textContent=t?"THE KING STANDS":"THE CITY FALLS";const i=[["TIME",`${e.time}s`],["DAMAGE",e.damage],["KILLS",e.kills],["DESTROYED",e.destroyed]];this.resultStats.innerHTML=i.map(([s,a])=>`<div><span>${s}</span><b>${a}</b></div>`).join(""),this.openOverlay("result")}setWeatherLabel(t){this.hudWeather.textContent=(t||"clear").toUpperCase()}setTimeLabel(t){this.hudTime.textContent=(t||"sunset").toUpperCase()}refreshSandbox(t){if(!t)return;const e=t.monsters.filter(i=>!i.dead).length;this.sandboxCount&&(this.sandboxCount.textContent=`${e} ACTIVE`)}applySettingsView(){this.root&&(this.root.querySelectorAll("[data-quality]").forEach(t=>t.classList.toggle("active",t.dataset.quality===this.settings.get("quality"))),this.root.querySelectorAll("[data-setting]").forEach(t=>{const e=t.dataset.setting;if(e==="resolution"){const i=Math.round((this.settings.get("resolution")||1)*100);t.value=i;const s=this.root.querySelector("#resolution-out");s&&(s.textContent=`${i}%`);return}t.type==="checkbox"?t.checked=!!this.settings.get(e):t.value=String(this.settings.get(e))}),this.applyHudVisibility())}applyHudVisibility(){this.root.classList.toggle("hud-off",!this.settings.get("hud"))}ready(){this._ready||(this._ready=!0,this.loading.classList.add("done"),setTimeout(()=>this.loading.classList.add("gone"),900))}fatal(t){const e=this.root.querySelector("#fatal-modal"),i=this.root.querySelector("#fatal-message");i&&(i.textContent=t),e&&(this.overlay.classList.remove("hidden"),this.root.querySelectorAll(".modal").forEach(s=>s.classList.add("hidden")),e.classList.remove("hidden"))}}const _v=document.getElementById("game"),ai=new gx,zn=new xx(ai),ui=new px({canvas:_v,antialias:ai.get("quality")!=="low",powerPreference:"high-performance",stencil:!1});ui.outputColorSpace=Ee;ui.toneMapping=el;ui.toneMappingExposure=1;ui.shadowMap.enabled=ai.get("shadows");ui.shadowMap.type=Ns;ui.setPixelRatio(ai.pixelRatio);ui.setSize(window.innerWidth,window.innerHeight,!1);const _i=new vv({settings:ai,audio:zn});let $e,Ml=!0,Qo=0;function yl(){const n=Ai.map(a=>a.id),t=["godzilla2019","godzilla2021","godzillaEvolved","kong2021","ghidorah","mechagodzilla"],e=t[Math.floor(Math.random()*t.length)];let i=n[Math.floor(Math.random()*n.length)];for(;i===e;)i=n[Math.floor(Math.random()*n.length)];const s=Math.random()>.5?"storm":"rain";Ml=!0,Qo=0,$e.start({mode:"battle",playerId:e,enemies:[i],allies:[],weather:s,time:"sunset",intro:!1,spectate:!0,title:""}),$e.paused=!1,_i.showMenu()}$e=new gv({renderer:ui,settings:ai,audio:zn,ui:_i,onExit:()=>{yl()}});_i.setGame($e);window.__game=$e;window.__settings=ai;_i.onLaunch=n=>{zn.unlock(),zn.confirm(),Ml=!1,$e.start(n),_i.hideMenu()};_i.onQuit=()=>{$e.exitToMenu()};function Mv(n){ui.setPixelRatio(ai.pixelRatio),ui.setSize(window.innerWidth,window.innerHeight,!1),ui.shadowMap.enabled=ai.get("shadows"),$e.environment.setShadows(ai.get("shadows")),$e.effects.setQuality(),zn.setSound(ai.get("sound")),zn.setMusic(ai.get("music")),n==="hud"&&_i.applyHudVisibility(),n==="quality"&&_i.applySettingsView(),n==="disableControl"&&$e.setSpectate(ai.get("disableControl"))}_i.onSettingsChange=n=>Mv(n);window.addEventListener("resize",()=>{const n=window.innerWidth,t=window.innerHeight;ui.setPixelRatio(ai.pixelRatio),ui.setSize(n,t,!1),$e.camera.aspect=n/t,$e.camera.updateProjectionMatrix()});function dd(){zn.unlock()}window.addEventListener("pointerdown",dd,{once:!0});window.addEventListener("keydown",dd,{once:!0});window.addEventListener("error",n=>{console.error(n.error||n.message),_i.toast("RUNTIME WARNING // SEE CONSOLE","warn")});window.addEventListener("unhandledrejection",n=>{console.error(n.reason),_i.toast("RUNTIME WARNING // SEE CONSOLE","warn")});yl();_i.ready();let jo=performance.now(),Oa=0,sh=!0;function ud(n){requestAnimationFrame(ud);const t=Math.min(.1,(n-jo)/1e3);jo=n;const e=Number(ai.get("fpsLimit"))||0;if(e>0){if(Oa+=t,Oa<1/e)return;const i=Math.min(Oa,.05);Oa=0,ah(i)}else ah(Math.min(t,.05));sh&&(sh=!1,_i.ready(),document.body.classList.add("booted"))}function ah(n){Ml&&$e.active&&(Qo+=n,(!$e.monsters.some(e=>!e.dead)||Qo>75)&&yl()),$e.update(n),ui.render($e.scene,$e.camera)}document.addEventListener("visibilitychange",()=>{jo=performance.now()});requestAnimationFrame(ud);
