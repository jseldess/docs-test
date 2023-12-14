"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[882],{2100:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=t(5893),a=t(1151);const o={title:"Authentication",description:"Learn how to authenticate API calls to a Pinecone project.",sidebar_position:3},s=void 0,c={id:"getting-started/authentication",title:"Authentication",description:"Learn how to authenticate API calls to a Pinecone project.",source:"@site/versioned_docs/version-legacy/getting-started/authentication.md",sourceDirName:"getting-started",slug:"/getting-started/authentication",permalink:"/docs/legacy/getting-started/authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-legacy/getting-started/authentication.md",tags:[],version:"legacy",sidebarPosition:3,frontMatter:{title:"Authentication",description:"Learn how to authenticate API calls to a Pinecone project.",sidebar_position:3},sidebar:"examplesSidebar",previous:{title:"Quickstart",permalink:"/docs/legacy/getting-started/quickstart"},next:{title:"Choosing index type and size",permalink:"/docs/legacy/getting-started/choosing-index-type-and-size"}},r={},l=[{value:"Overview",id:"overview",level:2},{value:"Finding your Pinecone API key",id:"finding-your-pinecone-api-key",level:2},{value:"Initialize a client",id:"initialize-a-client",level:2},{value:"Add a header to an HTTP request",id:"add-a-header-to-an-http-request",level:2},{value:"Next steps",id:"next-steps",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This guide explains how to authenticate API calls to your Pinecone project."}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["All API calls to your Pinecone index authenticate with an ",(0,i.jsx)(n.a,{href:"projects#api-keys",children:"API key"})," for the project containing the target index. If you are using a client, like the Python or Node.js clients, you can initialize a client object, which allows you to provide your API key in one place and use it multiple times. If you are making HTTP requests with a tool like cURL, the HTTP request must include a header that specifies the API key. This topic describes each method."]}),"\n",(0,i.jsx)(n.h2,{id:"finding-your-pinecone-api-key",children:"Finding your Pinecone API key"}),"\n",(0,i.jsxs)(n.p,{children:["To find your API key, open the ",(0,i.jsx)(n.a,{href:"https://app.pinecone.io",children:"Pinecone console"})," and click ",(0,i.jsx)(n.strong,{children:"API Keys"}),". This view also displays the ",(0,i.jsx)(n.a,{href:"projects#project-environment",children:"environment"})," for your project."]}),"\n",(0,i.jsx)(n.h2,{id:"initialize-a-client",children:"Initialize a client"}),"\n",(0,i.jsx)(n.p,{children:"To initialize a client with your API key and environment, use the following code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import pinecone\n\npinecone.init(api_key="YOUR_API_KEY", environment="YOUR_ENVIRONMENT")\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'import { PineconeClient } from \'@pinecone-database/pinecone\';\n\nconst pinecone = new PineconeClient();\n\nawait pinecone.init({\n    apiKey: "YOUR_API_KEY",\n    environment: "YOUR_ENVIRONMENT",\n});\n'})}),"\n",(0,i.jsx)(n.p,{children:"Function calls with this client use the authentication information provided at initialization. For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'# Creates an index using the API key and environment stored in the client \'pinecone\'.\npinecone.create_index("auth-guide", dimension=8, metric="euclidean")\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'// Constructs a create index request object.\nconst createRequest = {\n    name: "auth-guide",\n    dimension: 8,\n    metric:"euclidean",\n};\n\n// Creates an index using the API key and environment stored in the client \'pinecone\'.\nawait pinecone.createIndex({ createRequest });\n'})}),"\n",(0,i.jsx)(n.h2,{id:"add-a-header-to-an-http-request",children:"Add a header to an HTTP request"}),"\n",(0,i.jsxs)(n.p,{children:["When issuing an HTTP request to Pinecone, each request must contain an ",(0,i.jsx)(n.code,{children:"Api-Key"})," header that specifies an API key. This API key must be valid for a project in the environment specified in the URL."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",metastring:"curl",children:'curl -i -X POST \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Api-Key: YOUR_API_KEY_HERE\' \\\n  https://controller.YOUR_ENVIRONMENT.pinecone.io/databases \\\n  -d \'{\n    "name": "auth-guide",\n    "dimension": 8,\n    "metric": "euclidean"\n  }\'\n'})}),"\n",(0,i.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Learn more about using the ",(0,i.jsx)(n.a,{href:"python-client",children:"Pinecone Python client"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Learn more about using the ",(0,i.jsx)(n.a,{href:"node-client",children:"Pinecone Node client"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var i=t(7294);const a={},o=i.createContext(a);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);