/*! For license information please see createRectangleGeometry.js.LICENSE.txt */
define(["./defaultValue-65031fc5","./Matrix2-c339372d","./Transforms-a48d25e5","./ComponentDatatype-1b227f17","./GeometryAttribute-5db26912","./GeometryAttributes-f9b563d6","./GeometryInstance-ee0e4b25","./GeometryOffsetAttribute-026030ef","./GeometryPipeline-7e799ed5","./IndexDatatype-53de8b23","./PolygonPipeline-d06990ae","./RectangleGeometryLibrary-f26d5ef8","./VertexFormat-2b3ad79f","./RuntimeError-23f4777c","./combine-96aed74b","./WebGLConstants-f5c279b9","./AttributeCompression-9d180a12","./EncodedCartesian3-4e907eba","./IntersectionTests-87344d12","./Plane-3d182a08","./EllipsoidRhumbLine-0df6bb40"],(function(t,e,n,a,o,r,i,s,l,u,c,m,d,p,g,y,f,h,b,_,A){"use strict";const x=new e.Cartesian3,w=new e.Cartesian3,C=new e.Cartesian3,v=new e.Cartesian3,R=new e.Rectangle,E=new e.Cartesian2,G=new n.BoundingSphere,F=new n.BoundingSphere;function P(t,e){const n=new o.Geometry({attributes:new r.GeometryAttributes,primitiveType:o.PrimitiveType.TRIANGLES});return n.attributes.position=new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e.positions}),t.normal&&(n.attributes.normal=new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e.normals})),t.tangent&&(n.attributes.tangent=new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e.tangents})),t.bitangent&&(n.attributes.bitangent=new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e.bitangents})),n}const V=new e.Cartesian3,L=new e.Cartesian3;function D(t,n){const r=t._vertexFormat,i=t._ellipsoid,s=n.height,l=n.width,c=n.northCap,d=n.southCap;let p=0,g=s,y=s,f=0;c&&(p=1,y-=1,f+=1),d&&(g-=1,y-=1,f+=1),f+=l*y;const h=r.position?new Float64Array(3*f):void 0,b=r.st?new Float32Array(2*f):void 0;let _=0,A=0;const R=x,G=E;let F=Number.MAX_VALUE,V=Number.MAX_VALUE,L=-Number.MAX_VALUE,D=-Number.MAX_VALUE;for(let t=p;t<g;++t)for(let e=0;e<l;++e)m.RectangleGeometryLibrary.computePosition(n,i,r.st,t,e,R,G),h[_++]=R.x,h[_++]=R.y,h[_++]=R.z,r.st&&(b[A++]=G.x,b[A++]=G.y,F=Math.min(F,G.x),V=Math.min(V,G.y),L=Math.max(L,G.x),D=Math.max(D,G.y));if(c&&(m.RectangleGeometryLibrary.computePosition(n,i,r.st,0,0,R,G),h[_++]=R.x,h[_++]=R.y,h[_++]=R.z,r.st&&(b[A++]=G.x,b[A++]=G.y,F=G.x,V=G.y,L=G.x,D=G.y)),d&&(m.RectangleGeometryLibrary.computePosition(n,i,r.st,s-1,0,R,G),h[_++]=R.x,h[_++]=R.y,h[_]=R.z,r.st&&(b[A++]=G.x,b[A]=G.y,F=Math.min(F,G.x),V=Math.min(V,G.y),L=Math.max(L,G.x),D=Math.max(D,G.y))),r.st&&(F<0||V<0||L>1||D>1))for(let t=0;t<b.length;t+=2)b[t]=(b[t]-F)/(L-F),b[t+1]=(b[t+1]-V)/(D-V);const M=function(t,n,a,o){const r=t.length,i=n.normal?new Float32Array(r):void 0,s=n.tangent?new Float32Array(r):void 0,l=n.bitangent?new Float32Array(r):void 0;let u=0;const c=v,m=C;let d=w;if(n.normal||n.tangent||n.bitangent)for(let p=0;p<r;p+=3){const r=e.Cartesian3.fromArray(t,p,x),g=u+1,y=u+2;d=a.geodeticSurfaceNormal(r,d),(n.tangent||n.bitangent)&&(e.Cartesian3.cross(e.Cartesian3.UNIT_Z,d,m),e.Matrix3.multiplyByVector(o,m,m),e.Cartesian3.normalize(m,m),n.bitangent&&e.Cartesian3.normalize(e.Cartesian3.cross(d,m,c),c)),n.normal&&(i[u]=d.x,i[g]=d.y,i[y]=d.z),n.tangent&&(s[u]=m.x,s[g]=m.y,s[y]=m.z),n.bitangent&&(l[u]=c.x,l[g]=c.y,l[y]=c.z),u+=3}return P(n,{positions:t,normals:i,tangents:s,bitangents:l})}(h,r,i,n.tangentRotationMatrix);let T=6*(l-1)*(y-1);c&&(T+=3*(l-1)),d&&(T+=3*(l-1));const O=u.IndexDatatype.createTypedArray(f,T);let N,S=0,I=0;for(N=0;N<y-1;++N){for(let t=0;t<l-1;++t){const t=S,e=t+l,n=e+1,a=t+1;O[I++]=t,O[I++]=e,O[I++]=a,O[I++]=a,O[I++]=e,O[I++]=n,++S}++S}if(c||d){let t=f-1;const e=f-1;let n,a;if(c&&d&&(t=f-2),S=0,c)for(N=0;N<l-1;N++)n=S,a=n+1,O[I++]=t,O[I++]=n,O[I++]=a,++S;if(d)for(S=(y-1)*l,N=0;N<l-1;N++)n=S,a=n+1,O[I++]=n,O[I++]=e,O[I++]=a,++S}return M.indices=O,r.st&&(M.attributes.st=new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:b})),M}function M(t,e,n,a,o){return t[e++]=a[n],t[e++]=a[n+1],t[e++]=a[n+2],t[e++]=o[n],t[e++]=o[n+1],t[e]=o[n+2],t}function T(t,e,n,a){return t[e++]=a[n],t[e++]=a[n+1],t[e++]=a[n],t[e]=a[n+1],t}const O=new d.VertexFormat;function N(n,r){const m=n._shadowVolume,p=n._offsetAttribute,g=n._vertexFormat,y=n._extrudedHeight,f=n._surfaceHeight,h=n._ellipsoid,b=r.height,_=r.width;let A;if(m){const t=d.VertexFormat.clone(g,O);t.normal=!0,n._vertexFormat=t}const R=D(n,r);m&&(n._vertexFormat=g);let E=c.PolygonPipeline.scaleToGeodeticHeight(R.attributes.position.values,f,h,!1);E=new Float64Array(E);let G=E.length;const F=2*G,N=new Float64Array(F);N.set(E);const S=c.PolygonPipeline.scaleToGeodeticHeight(R.attributes.position.values,y,h);N.set(S,G),R.attributes.position.values=N;const I=g.normal?new Float32Array(F):void 0,k=g.tangent?new Float32Array(F):void 0,H=g.bitangent?new Float32Array(F):void 0,z=g.st?new Float32Array(F/3*2):void 0;let B,U,Y;if(g.normal){for(U=R.attributes.normal.values,I.set(U),A=0;A<G;A++)U[A]=-U[A];I.set(U,G),R.attributes.normal.values=I}if(m){U=R.attributes.normal.values,g.normal||(R.attributes.normal=void 0);const t=new Float32Array(F);for(A=0;A<G;A++)U[A]=-U[A];t.set(U,G),R.attributes.extrudeDirection=new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:t})}const q=t.defined(p);if(q){const t=G/3*2;let e=new Uint8Array(t);p===s.GeometryOffsetAttribute.TOP?e=e.fill(1,0,t/2):(Y=p===s.GeometryOffsetAttribute.NONE?0:1,e=e.fill(Y)),R.attributes.applyOffset=new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:e})}if(g.tangent){const t=R.attributes.tangent.values;for(k.set(t),A=0;A<G;A++)t[A]=-t[A];k.set(t,G),R.attributes.tangent.values=k}if(g.bitangent){const t=R.attributes.bitangent.values;H.set(t),H.set(t,G),R.attributes.bitangent.values=H}g.st&&(B=R.attributes.st.values,z.set(B),z.set(B,G/3*2),R.attributes.st.values=z);const X=R.indices,Q=X.length,W=G/3,J=u.IndexDatatype.createTypedArray(F/3,2*Q);for(J.set(X),A=0;A<Q;A+=3)J[A+Q]=X[A+2]+W,J[A+1+Q]=X[A+1]+W,J[A+2+Q]=X[A]+W;R.indices=J;const j=r.northCap,Z=r.southCap;let K=b,$=2,tt=0,et=4,nt=4;j&&($-=1,K-=1,tt+=1,et-=2,nt-=1),Z&&($-=1,K-=1,tt+=1,et-=2,nt-=1),tt+=$*_+2*K-et;const at=2*(tt+nt);let ot=new Float64Array(3*at);const rt=m?new Float32Array(3*at):void 0;let it=q?new Uint8Array(at):void 0,st=g.st?new Float32Array(2*at):void 0;const lt=p===s.GeometryOffsetAttribute.TOP;q&&!lt&&(Y=p===s.GeometryOffsetAttribute.ALL?1:0,it=it.fill(Y));let ut=0,ct=0,mt=0,dt=0;const pt=_*K;let gt;for(A=0;A<pt;A+=_)gt=3*A,ot=M(ot,ut,gt,E,S),ut+=6,g.st&&(st=T(st,ct,2*A,B),ct+=4),m&&(mt+=3,rt[mt++]=U[gt],rt[mt++]=U[gt+1],rt[mt++]=U[gt+2]),lt&&(it[dt++]=1,dt+=1);if(Z){const t=j?pt+1:pt;for(gt=3*t,A=0;A<2;A++)ot=M(ot,ut,gt,E,S),ut+=6,g.st&&(st=T(st,ct,2*t,B),ct+=4),m&&(mt+=3,rt[mt++]=U[gt],rt[mt++]=U[gt+1],rt[mt++]=U[gt+2]),lt&&(it[dt++]=1,dt+=1)}else for(A=pt-_;A<pt;A++)gt=3*A,ot=M(ot,ut,gt,E,S),ut+=6,g.st&&(st=T(st,ct,2*A,B),ct+=4),m&&(mt+=3,rt[mt++]=U[gt],rt[mt++]=U[gt+1],rt[mt++]=U[gt+2]),lt&&(it[dt++]=1,dt+=1);for(A=pt-1;A>0;A-=_)gt=3*A,ot=M(ot,ut,gt,E,S),ut+=6,g.st&&(st=T(st,ct,2*A,B),ct+=4),m&&(mt+=3,rt[mt++]=U[gt],rt[mt++]=U[gt+1],rt[mt++]=U[gt+2]),lt&&(it[dt++]=1,dt+=1);if(j){const t=pt;for(gt=3*t,A=0;A<2;A++)ot=M(ot,ut,gt,E,S),ut+=6,g.st&&(st=T(st,ct,2*t,B),ct+=4),m&&(mt+=3,rt[mt++]=U[gt],rt[mt++]=U[gt+1],rt[mt++]=U[gt+2]),lt&&(it[dt++]=1,dt+=1)}else for(A=_-1;A>=0;A--)gt=3*A,ot=M(ot,ut,gt,E,S),ut+=6,g.st&&(st=T(st,ct,2*A,B),ct+=4),m&&(mt+=3,rt[mt++]=U[gt],rt[mt++]=U[gt+1],rt[mt++]=U[gt+2]),lt&&(it[dt++]=1,dt+=1);let yt=function(t,n,o){const r=t.length,i=n.normal?new Float32Array(r):void 0,s=n.tangent?new Float32Array(r):void 0,l=n.bitangent?new Float32Array(r):void 0;let u=0,c=0,m=0,d=!0,p=v,g=C,y=w;if(n.normal||n.tangent||n.bitangent)for(let f=0;f<r;f+=6){const h=e.Cartesian3.fromArray(t,f,x),b=e.Cartesian3.fromArray(t,(f+6)%r,V);if(d){const n=e.Cartesian3.fromArray(t,(f+3)%r,L);e.Cartesian3.subtract(b,h,b),e.Cartesian3.subtract(n,h,n),y=e.Cartesian3.normalize(e.Cartesian3.cross(n,b,y),y),d=!1}e.Cartesian3.equalsEpsilon(b,h,a.CesiumMath.EPSILON10)&&(d=!0),(n.tangent||n.bitangent)&&(p=o.geodeticSurfaceNormal(h,p),n.tangent&&(g=e.Cartesian3.normalize(e.Cartesian3.cross(p,y,g),g))),n.normal&&(i[u++]=y.x,i[u++]=y.y,i[u++]=y.z,i[u++]=y.x,i[u++]=y.y,i[u++]=y.z),n.tangent&&(s[c++]=g.x,s[c++]=g.y,s[c++]=g.z,s[c++]=g.x,s[c++]=g.y,s[c++]=g.z),n.bitangent&&(l[m++]=p.x,l[m++]=p.y,l[m++]=p.z,l[m++]=p.x,l[m++]=p.y,l[m++]=p.z)}return P(n,{positions:t,normals:i,tangents:s,bitangents:l})}(ot,g,h);g.st&&(yt.attributes.st=new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:st})),m&&(yt.attributes.extrudeDirection=new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:rt})),q&&(yt.attributes.applyOffset=new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:it}));const ft=u.IndexDatatype.createTypedArray(at,6*tt);let ht,bt,_t,At;G=ot.length/3;let xt=0;for(A=0;A<G-1;A+=2){ht=A,At=(ht+2)%G;const t=e.Cartesian3.fromArray(ot,3*ht,V),n=e.Cartesian3.fromArray(ot,3*At,L);e.Cartesian3.equalsEpsilon(t,n,a.CesiumMath.EPSILON10)||(bt=(ht+1)%G,_t=(bt+2)%G,ft[xt++]=ht,ft[xt++]=bt,ft[xt++]=At,ft[xt++]=At,ft[xt++]=bt,ft[xt++]=_t)}return yt.indices=ft,yt=l.GeometryPipeline.combineInstances([new i.GeometryInstance({geometry:R}),new i.GeometryInstance({geometry:yt})]),yt[0]}const S=[new e.Cartesian3,new e.Cartesian3,new e.Cartesian3,new e.Cartesian3],I=new e.Cartographic,k=new e.Cartographic;function H(t,n,a,o,r){if(0===a)return e.Rectangle.clone(t,r);const i=m.RectangleGeometryLibrary.computeOptions(t,n,a,0,R,I),s=i.height,l=i.width,u=S;return m.RectangleGeometryLibrary.computePosition(i,o,!1,0,0,u[0]),m.RectangleGeometryLibrary.computePosition(i,o,!1,0,l-1,u[1]),m.RectangleGeometryLibrary.computePosition(i,o,!1,s-1,0,u[2]),m.RectangleGeometryLibrary.computePosition(i,o,!1,s-1,l-1,u[3]),e.Rectangle.fromCartesianArray(u,o,r)}function z(n){const o=(n=t.defaultValue(n,t.defaultValue.EMPTY_OBJECT)).rectangle,r=t.defaultValue(n.height,0),i=t.defaultValue(n.extrudedHeight,r);this._rectangle=e.Rectangle.clone(o),this._granularity=t.defaultValue(n.granularity,a.CesiumMath.RADIANS_PER_DEGREE),this._ellipsoid=e.Ellipsoid.clone(t.defaultValue(n.ellipsoid,e.Ellipsoid.WGS84)),this._surfaceHeight=Math.max(r,i),this._rotation=t.defaultValue(n.rotation,0),this._stRotation=t.defaultValue(n.stRotation,0),this._vertexFormat=d.VertexFormat.clone(t.defaultValue(n.vertexFormat,d.VertexFormat.DEFAULT)),this._extrudedHeight=Math.min(r,i),this._shadowVolume=t.defaultValue(n.shadowVolume,!1),this._workerName="createRectangleGeometry",this._offsetAttribute=n.offsetAttribute,this._rotatedRectangle=void 0,this._textureCoordinateRotationPoints=void 0}z.packedLength=e.Rectangle.packedLength+e.Ellipsoid.packedLength+d.VertexFormat.packedLength+7,z.pack=function(n,a,o){return o=t.defaultValue(o,0),e.Rectangle.pack(n._rectangle,a,o),o+=e.Rectangle.packedLength,e.Ellipsoid.pack(n._ellipsoid,a,o),o+=e.Ellipsoid.packedLength,d.VertexFormat.pack(n._vertexFormat,a,o),o+=d.VertexFormat.packedLength,a[o++]=n._granularity,a[o++]=n._surfaceHeight,a[o++]=n._rotation,a[o++]=n._stRotation,a[o++]=n._extrudedHeight,a[o++]=n._shadowVolume?1:0,a[o]=t.defaultValue(n._offsetAttribute,-1),a};const B=new e.Rectangle,U=e.Ellipsoid.clone(e.Ellipsoid.UNIT_SPHERE),Y={rectangle:B,ellipsoid:U,vertexFormat:O,granularity:void 0,height:void 0,rotation:void 0,stRotation:void 0,extrudedHeight:void 0,shadowVolume:void 0,offsetAttribute:void 0};z.unpack=function(n,a,o){a=t.defaultValue(a,0);const r=e.Rectangle.unpack(n,a,B);a+=e.Rectangle.packedLength;const i=e.Ellipsoid.unpack(n,a,U);a+=e.Ellipsoid.packedLength;const s=d.VertexFormat.unpack(n,a,O);a+=d.VertexFormat.packedLength;const l=n[a++],u=n[a++],c=n[a++],m=n[a++],p=n[a++],g=1===n[a++],y=n[a];return t.defined(o)?(o._rectangle=e.Rectangle.clone(r,o._rectangle),o._ellipsoid=e.Ellipsoid.clone(i,o._ellipsoid),o._vertexFormat=d.VertexFormat.clone(s,o._vertexFormat),o._granularity=l,o._surfaceHeight=u,o._rotation=c,o._stRotation=m,o._extrudedHeight=p,o._shadowVolume=g,o._offsetAttribute=-1===y?void 0:y,o):(Y.granularity=l,Y.height=u,Y.rotation=c,Y.stRotation=m,Y.extrudedHeight=p,Y.shadowVolume=g,Y.offsetAttribute=-1===y?void 0:y,new z(Y))},z.computeRectangle=function(n,o){const r=(n=t.defaultValue(n,t.defaultValue.EMPTY_OBJECT)).rectangle,i=t.defaultValue(n.granularity,a.CesiumMath.RADIANS_PER_DEGREE),s=t.defaultValue(n.ellipsoid,e.Ellipsoid.WGS84);return H(r,i,t.defaultValue(n.rotation,0),s,o)};const q=new e.Matrix3,X=new n.Quaternion,Q=new e.Cartographic;z.createGeometry=function(r){if(a.CesiumMath.equalsEpsilon(r._rectangle.north,r._rectangle.south,a.CesiumMath.EPSILON10)||a.CesiumMath.equalsEpsilon(r._rectangle.east,r._rectangle.west,a.CesiumMath.EPSILON10))return;let i=r._rectangle;const l=r._ellipsoid,u=r._rotation,d=r._stRotation,p=r._vertexFormat,g=m.RectangleGeometryLibrary.computeOptions(i,r._granularity,u,d,R,I,k),y=q;if(0!==d||0!==u){const t=e.Rectangle.center(i,Q),a=l.geodeticSurfaceNormalCartographic(t,V);n.Quaternion.fromAxisAngle(a,-d,X),e.Matrix3.fromQuaternion(X,y)}else e.Matrix3.clone(e.Matrix3.IDENTITY,y);const f=r._surfaceHeight,h=r._extrudedHeight,b=!a.CesiumMath.equalsEpsilon(f,h,0,a.CesiumMath.EPSILON2);let _,A;if(g.lonScalar=1/r._rectangle.width,g.latScalar=1/r._rectangle.height,g.tangentRotationMatrix=y,i=r._rectangle,b){_=N(r,g);const t=n.BoundingSphere.fromRectangle3D(i,l,f,F),e=n.BoundingSphere.fromRectangle3D(i,l,h,G);A=n.BoundingSphere.union(t,e)}else{if(_=D(r,g),_.attributes.position.values=c.PolygonPipeline.scaleToGeodeticHeight(_.attributes.position.values,f,l,!1),t.defined(r._offsetAttribute)){const t=_.attributes.position.values.length,e=r._offsetAttribute===s.GeometryOffsetAttribute.NONE?0:1,n=new Uint8Array(t/3).fill(e);_.attributes.applyOffset=new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:n})}A=n.BoundingSphere.fromRectangle3D(i,l,f)}return p.position||delete _.attributes.position,new o.Geometry({attributes:_.attributes,indices:_.indices,primitiveType:_.primitiveType,boundingSphere:A,offsetAttribute:r._offsetAttribute})},z.createShadowVolume=function(t,e,n){const a=t._granularity,o=t._ellipsoid,r=e(a,o),i=n(a,o);return new z({rectangle:t._rectangle,rotation:t._rotation,ellipsoid:o,stRotation:t._stRotation,granularity:a,extrudedHeight:i,height:r,vertexFormat:d.VertexFormat.POSITION_ONLY,shadowVolume:!0})};const W=new e.Rectangle,J=[new e.Cartesian2,new e.Cartesian2,new e.Cartesian2],j=new e.Matrix2,Z=new e.Cartographic;return Object.defineProperties(z.prototype,{rectangle:{get:function(){return t.defined(this._rotatedRectangle)||(this._rotatedRectangle=H(this._rectangle,this._granularity,this._rotation,this._ellipsoid)),this._rotatedRectangle}},textureCoordinateRotationPoints:{get:function(){return t.defined(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=function(t){if(0===t._stRotation)return[0,0,0,1,1,0];const n=e.Rectangle.clone(t._rectangle,W),a=t._granularity,o=t._ellipsoid,r=H(n,a,t._rotation-t._stRotation,o,W),i=J;i[0].x=r.west,i[0].y=r.south,i[1].x=r.west,i[1].y=r.north,i[2].x=r.east,i[2].y=r.south;const s=t.rectangle,l=e.Matrix2.fromRotation(t._stRotation,j),u=e.Rectangle.center(s,Z);for(let t=0;t<3;++t){const n=i[t];n.x-=u.longitude,n.y-=u.latitude,e.Matrix2.multiplyByVector(l,n,n),n.x+=u.longitude,n.y+=u.latitude,n.x=(n.x-s.west)/s.width,n.y=(n.y-s.south)/s.height}const c=i[0],m=i[1],d=i[2],p=new Array(6);return e.Cartesian2.pack(c,p),e.Cartesian2.pack(m,p,2),e.Cartesian2.pack(d,p,4),p}(this)),this._textureCoordinateRotationPoints}}}),function(n,a){return t.defined(a)&&(n=z.unpack(n,a)),n._ellipsoid=e.Ellipsoid.clone(n._ellipsoid),n._rectangle=e.Rectangle.clone(n._rectangle),z.createGeometry(n)}}));