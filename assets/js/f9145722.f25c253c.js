"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[6529],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5810:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(9496),a=r(5924);const l={tabItem:"tabItem_mw14"};function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:r},t)}},8750:(e,t,r)=>{r.d(t,{Z:()=>N});var n=r(8126),a=r(9496),l=r(5924),o=r(3053),i=r(3442),s=r(9356),c=r(4634),u=r(6038);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=d(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,c]=k({queryString:r,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),v=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,l]),tabValues:l}}var v=r(5667);const b={tabList:"tabList_r_eZ",tabItem:"tabItem_ZrSx"};function h(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,r=u.indexOf(t),n=c[r].value;n!==i&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":i===t})}),r??t)})))}function g(e){let{lazy:t,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=f(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},a.createElement(h,(0,n.Z)({},e,t)),a.createElement(g,(0,n.Z)({},e,t)))}function N(e){const t=(0,v.Z)();return a.createElement(y,(0,n.Z)({key:String(t)},e))}},2527:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>u,metadata:()=>d,toc:()=>k});var n=r(8126),a=(r(9496),r(9613));const l={toc:[{value:"Capabilities",id:"capabilities",level:2},{value:"Credentials related",id:"credentials-related",level:3},{value:"Just provide Access Token (Temporary)",id:"just-provide-access-token-temporary",level:4},{value:"Or provide Client ID and Client Secret and refresh token (Long Term)",id:"or-provide-client-id-and-client-secret-and-refresh-token-long-term",level:4},{value:"Example",id:"example",level:2},{value:"Via Builder",id:"via-builder",level:3}]},o="wrapper";function i(e){let{components:t,...r}=e;return(0,a.kt)(o,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"capabilities"},"Capabilities"),(0,a.kt)("p",null,"This service can be used to:"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","stat"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","read"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","write"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","delete"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","create_dir"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","list"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","copy"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","rename"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","batch")),(0,a.kt)("h1",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"root"),": Set the work directory for backend")),(0,a.kt)("h3",{id:"credentials-related"},"Credentials related"),(0,a.kt)("h4",{id:"just-provide-access-token-temporary"},"Just provide Access Token (Temporary)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"access_token"),": set the access_token for google drive api\nPlease notice its expiration.")),(0,a.kt)("h4",{id:"or-provide-client-id-and-client-secret-and-refresh-token-long-term"},"Or provide Client ID and Client Secret and refresh token (Long Term)"),(0,a.kt)("p",null,"If you want to let OpenDAL to refresh the access token automatically,\nplease provide the following fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"refresh_token"),": set the refresh_token for google drive api"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"client_id"),": set the client_id for google drive api"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"client_secret"),": set the client_secret for google drive api")),(0,a.kt)("p",null,"OpenDAL is a library, it cannot do the first step of OAuth2 for you.\nYou need to get authorization code from user by calling GoogleDrive's authorize url\nand exchange it for refresh token."),(0,a.kt)("p",null,"Make sure you have enabled Google Drive API in your Google Cloud Console.\nAnd your OAuth scope contains ",(0,a.kt)("inlineCode",{parentName:"p"},"https://www.googleapis.com/auth/drive"),"."),(0,a.kt)("p",null,"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/oauth2/"},"GoogleDrive OAuth2 Flow"),"\nfor more information."),(0,a.kt)("p",null,"You can refer to ","[",(0,a.kt)("inlineCode",{parentName:"p"},"GdriveBuilder"),"]","'s docs for more information"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("h3",{id:"via-builder"},"Via Builder"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use anyhow::Result;\nuse opendal::services::Gdrive;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut builder = Gdrive::default();\n    builder.root("/test");\n    builder.access_token("<token>");\n\n    Ok(())\n}\n')))}i.isMDXComponent=!0;var s=r(8750),c=r(5810);const u={title:"Gdrive"},p=void 0,d={unversionedId:"services/gdrive",id:"services/gdrive",title:"Gdrive",description:"Google Drive services support.",source:"@site/docs/services/gdrive.mdx",sourceDirName:"services",slug:"/services/gdrive",permalink:"/docs/services/gdrive",draft:!1,editUrl:"https://github.com/apache/incubator-opendal/tree/main/website/docs/services/gdrive.mdx",tags:[],version:"current",lastUpdatedBy:"Suyan",lastUpdatedAt:1702439419,formattedLastUpdatedAt:"Dec 13, 2023",frontMatter:{title:"Gdrive"},sidebar:"docs",previous:{title:"Gcs",permalink:"/docs/services/gcs"},next:{title:"GHAC",permalink:"/docs/services/ghac"}},m={},k=[{value:"Via Config",id:"via-config",level:3}],f={toc:k},v="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(v,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://drive.google.com"},"Google Drive")," services support."),(0,a.kt)(i,{components:r.components,mdxType:"Docs"}),(0,a.kt)("h3",{id:"via-config"},"Via Config"),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"rust",label:"Rust",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use anyhow::Result;\nuse opendal::Operator;\nuse opendal::Scheme;\nuse std::collections::HashMap;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut map = HashMap::new();\n    map.insert("root".to_string(), "/path/to/dir".to_string());\n    map.insert("access_token".to_string(), "your_access_token".to_string());\n\n    let op: Operator = Operator::via_map(Scheme::Gdrive, map)?;\n    Ok(())\n}\n'))),(0,a.kt)(c.Z,{value:"node.js",label:"Node.js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Operator } from "opendal";\n\nasync function main() {\n  const op = new Operator("gdrive", {\n    root: "/path/to/dir",\n    access_token: "your_access_token",\n  });\n}\n'))),(0,a.kt)(c.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import opendal\n\nop = opendal.Operator("gdrive",\n  root="/path/to/dir",\n  access_token="your_access_token",\n)\n')))))}b.isMDXComponent=!0}}]);