import{i as p,L as f,u as x,r as e,a as g,j as r}from"./index-11835c25.js";import{a as m}from"./axios-4a70c6fc.js";const k=p(f)`
  text-decoration: none;
  width: 90px;
  text-align: center;
  border: 2px solid darkgray;
`,h=()=>{var o;const n=x(),c=e.useRef(((o=n.state)==null?void 0:o.from)??"/"),[i,l]=e.useState({}),{userId:t}=g();return console.log("userId:",t),e.useEffect(()=>{const a=new AbortController;async function u(){try{const s=new URL("https://64650529228bd07b353feaa6.mockapi.io/users"),d=await m.get(`${s}/${t}`,{signal:a.signal});l(d.data)}catch(s){console.log(s.message)}}return u(),()=>{a.abort()}},[t]),r.jsxs("div",{children:[r.jsx(k,{to:c.current,children:"Go back"}),i.user]})};export{h as default};
