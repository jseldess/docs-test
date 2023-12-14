"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5022],{8058:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=t(5893),r=t(1151);const i={title:"Understanding projects",sidebar_position:1},d=void 0,c={id:"projects/projects",title:"Understanding projects",description:"This document explains the concepts related to Pinecone projects.",source:"@site/docs/projects/projects.md",sourceDirName:"projects",slug:"/projects/",permalink:"/docs/./projects/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/projects/projects.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Understanding projects",sidebar_position:1},sidebar:"examplesSidebar",previous:{title:"Projects",permalink:"/docs/./category/projects-3"},next:{title:"Manage projects",permalink:"/docs/./projects/manage-projects/"}},o={},l=[{value:"Projects contain indexes and users",id:"projects-contain-indexes-and-users",level:2},{value:"Project settings",id:"project-settings",level:2},{value:"Project environment",id:"project-environment",level:3},{value:"Project pod limit",id:"project-pod-limit",level:3},{value:"Project roles",id:"project-roles",level:3},{value:"API keys",id:"api-keys",level:2},{value:"Project ID",id:"project-id",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This document explains the concepts related to Pinecone projects."}),"\n",(0,s.jsx)(n.h2,{id:"projects-contain-indexes-and-users",children:"Projects contain indexes and users"}),"\n",(0,s.jsxs)(n.p,{children:["Each Pinecone project contains a number of ",(0,s.jsx)(n.a,{href:"/docs/indexes",children:"indexes"})," and users. Only a user who belongs to the project can access the indexes in that project. Each project also has at least one project owner. All of the pods in a single project are located in a single environment."]}),"\n",(0,s.jsx)(n.h2,{id:"project-settings",children:"Project settings"}),"\n",(0,s.jsxs)(n.p,{children:["When you create a new project, you can choose the ",(0,s.jsx)(n.strong,{children:"name"}),", ",(0,s.jsx)(n.strong,{children:"deployment environment"}),", and ",(0,s.jsx)(n.strong,{children:"pod limit"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"project-environment",children:"Project environment"}),"\n",(0,s.jsxs)(n.p,{children:["When creating a project, you must choose a cloud environment for the indexes in that project. Your project environment can affect your ",(0,s.jsx)(n.a,{href:"https://pinecone.io/pricing",children:"pricing"}),". The following table lists the available cloud regions, the corresponding values of the ",(0,s.jsx)(n.code,{children:"environment"})," parameter for the ",(0,s.jsx)(n.a,{href:"quickstart#2-get-and-verify-your-pinecone-api-key",children:"init() operation"}),", and which billing tier has access to each environment:"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Cloud"}),(0,s.jsx)(n.th,{children:"Region"}),(0,s.jsx)(n.th,{children:"Environment"}),(0,s.jsx)(n.th,{children:"Tier Availability"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GCP"}),(0,s.jsx)(n.td,{children:"us-central-1 (Iowa)"}),(0,s.jsx)(n.td,{children:"gcp-starter"}),(0,s.jsx)(n.td,{children:"Starter"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GCP"}),(0,s.jsx)(n.td,{children:"us-west-1 (N. California)"}),(0,s.jsx)(n.td,{children:"us-west1-gcp-free"}),(0,s.jsx)(n.td,{children:"Starter"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GCP"}),(0,s.jsx)(n.td,{children:"asia-southeast-1 (Singapore)"}),(0,s.jsx)(n.td,{children:"asia-southeast1-gcp-free"}),(0,s.jsx)(n.td,{children:"Starter"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GCP"}),(0,s.jsx)(n.td,{children:"us-west-4 (Las Vegas)"}),(0,s.jsx)(n.td,{children:"us-west4-gcp-free"}),(0,s.jsx)(n.td,{children:"Starter"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GCP"}),(0,s.jsx)(n.td,{children:"us-west-1 (N. California)"}),(0,s.jsx)(n.td,{children:"us-west1-gcp"}),(0,s.jsx)(n.td,{children:"Standard / Enterprise"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GCP"}),(0,s.jsx)(n.td,{children:"us-central-1 (Iowa)"}),(0,s.jsx)(n.td,{children:"us-central1-gcp"}),(0,s.jsx)(n.td,{children:"Standard / Enterprise"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GCP"}),(0,s.jsx)(n.td,{children:"us-west-4 (Las Vegas)"}),(0,s.jsx)(n.td,{children:"us-west4-gcp"}),(0,s.jsx)(n.td,{children:"Standard / Enterprise"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GCP"}),(0,s.jsx)(n.td,{children:"us-east-4 (Virginia)"}),(0,s.jsx)(n.td,{children:"us-east4-gcp"}),(0,s.jsx)(n.td,{children:"Standard / Enterprise"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GCP"}),(0,s.jsx)(n.td,{children:"northamerica-northeast-1"}),(0,s.jsx)(n.td,{children:"northamerica-northeast1-gcp"}),(0,s.jsx)(n.td,{children:"Standard / Enterprise"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GCP"}),(0,s.jsx)(n.td,{children:"asia-northeast-1 (Japan)"}),(0,s.jsx)(n.td,{children:"asia-northeast1-gcp"}),(0,s.jsx)(n.td,{children:"Standard / Enterprise"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GCP"}),(0,s.jsx)(n.td,{children:"asia-southeast-1 (Singapore)"}),(0,s.jsx)(n.td,{children:"asia-southeast1-gcp"}),(0,s.jsx)(n.td,{children:"Standard / Enterprise"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GCP"}),(0,s.jsx)(n.td,{children:"us-east-1 (South Carolina)"}),(0,s.jsx)(n.td,{children:"us-east1-gcp"}),(0,s.jsx)(n.td,{children:"Standard / Enterprise"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GCP"}),(0,s.jsx)(n.td,{children:"eu-west-1 (Belgium)"}),(0,s.jsx)(n.td,{children:"eu-west1-gcp"}),(0,s.jsx)(n.td,{children:"Standard / Enterprise"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GCP"}),(0,s.jsx)(n.td,{children:"eu-west-4 (Netherlands)"}),(0,s.jsx)(n.td,{children:"eu-west4-gcp"}),(0,s.jsx)(n.td,{children:"Standard / Enterprise"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"AWS"}),(0,s.jsx)(n.td,{children:"us-east-1 (Virginia)"}),(0,s.jsx)(n.td,{children:"us-east-1-aws"}),(0,s.jsx)(n.td,{children:"Standard / Enterprise"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Azure"}),(0,s.jsx)(n.td,{children:"eastus (Virginia)"}),(0,s.jsx)(n.td,{children:"eastus-azure"}),(0,s.jsx)(n.td,{children:"Standard / Enterprise"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["* This environment has unique features and limitations. See ",(0,s.jsxs)(n.a,{href:"starter-environment",children:[(0,s.jsx)(n.code,{children:"gcp-starter"})," environment"]})," for more information."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"http://www.pinecone.io/contact/",children:"Contact us"})," if you need a dedicated deployment in other regions."]}),"\n",(0,s.jsx)(n.p,{children:"The environment cannot be changed after the project is created."}),"\n",(0,s.jsx)(n.h3,{id:"project-pod-limit",children:"Project pod limit"}),"\n",(0,s.jsx)(n.p,{children:"You can set the maximum number of pods that can be used in total across all indexes in a project. Use this to control costs."}),"\n",(0,s.jsx)(n.p,{children:"The pod limit can be changed only by the project owner."}),"\n",(0,s.jsx)(n.h3,{id:"project-roles",children:"Project roles"}),"\n",(0,s.jsxs)(n.p,{children:["There are two project roles: ",(0,s.jsx)(n.strong,{children:"Project owner"})," and ",(0,s.jsx)(n.strong,{children:"project member."})," Table 1 below summarizes the permissions for each role."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Table 1: Project roles and permissions"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Project role"}),(0,s.jsx)(n.th,{children:"Permissions in organization"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Project owner"}),(0,s.jsx)(n.td,{children:"Manage project members"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Manage project API keys"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Manage pod limits"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Project member"}),(0,s.jsx)(n.td,{children:"Access API keys"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Create indexes in project"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Use indexes in project"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"api-keys",children:"API keys"}),"\n",(0,s.jsxs)(n.p,{children:["Each Pinecone ",(0,s.jsx)(n.a,{href:"projects",children:"project"})," has one or more API keys. In order to ",(0,s.jsx)(n.a,{href:"quickstart",children:"make calls to the Pinecone API"}),", a user must provide a valid API key for the relevant Pinecone project."]}),"\n",(0,s.jsxs)(n.p,{children:["To view the API key for your project, open the ",(0,s.jsx)(n.a,{href:"https://app.pinecone.io",children:"Pinecone console"}),", select the project, and click ",(0,s.jsx)(n.strong,{children:"API Keys"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"project-id",children:"Project ID"}),"\n",(0,s.jsx)(n.p,{children:"Each Pinecone project has a project ID. This hexadecimal string appears as part of the URL for API calls."}),"\n",(0,s.jsx)(n.p,{children:"To find a project's ID, follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to the ",(0,s.jsx)(n.a,{href:"https://app.pinecone.io",children:"Pinecone console"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In the upper-left corner, select your project."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Indexes"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Under the name of your indexes, find the index URL. For example:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"example-index-1e3g52e.svc.us-east1-gcp.pinecone.io"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The portion of the index URL after the index name and before the dot is the project ID."}),"\n",(0,s.jsxs)(n.p,{children:["For example, in the index URL ",(0,s.jsx)(n.code,{children:"test-index-3e2f43f.svc.us-east1-gcp.pinecone.io"}),", the project ID is ",(0,s.jsx)(n.code,{children:"3e2f43f"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>d});var s=t(7294);const r={},i=s.createContext(r);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);