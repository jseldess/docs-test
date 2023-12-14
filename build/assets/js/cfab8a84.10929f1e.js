"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1335],{9127:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var t=o(5893),s=o(1151);const i={title:"Managing cost",category:"6495c30f774cf1001e067303"},a=void 0,r={id:"organizations/manage-cost/managing-cost",title:"Managing cost",description:"Overview",source:"@site/versioned_docs/version-legacy/organizations/manage-cost/managing-cost.md",sourceDirName:"organizations/manage-cost",slug:"/organizations/manage-cost/managing-cost",permalink:"/docs/legacy/organizations/manage-cost/managing-cost",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-legacy/organizations/manage-cost/managing-cost.md",tags:[],version:"legacy",frontMatter:{title:"Managing cost",category:"6495c30f774cf1001e067303"},sidebar:"examplesSidebar",previous:{title:"Manage cost",permalink:"/docs/legacy/organizations/manage-cost/"},next:{title:"Monitoring your usage",permalink:"/docs/legacy/organizations/manage-cost/monitoring-usage"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Use the Starter Plan for small projects or prototypes",id:"use-the-starter-plan-for-small-projects-or-prototypes",level:2},{value:"Choose the right pod size for your application",id:"choose-the-right-pod-size-for-your-application",level:2},{value:"Back up inactive indexes",id:"back-up-inactive-indexes",level:2},{value:"Use namespaces for multitenancy",id:"use-namespaces-for-multitenancy",level:2},{value:"Commit to annual spend",id:"commit-to-annual-spend",level:2},{value:"Talk to support",id:"talk-to-support",level:2},{value:"Next steps",id:"next-steps",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["This topic provides guidance on managing the cost of Pinecone. For the latest pricing details, see our ",(0,t.jsx)(n.a,{href:"https://www.pinecone.io/pricing/",children:"pricing page"}),". For help estimating total cost, see ",(0,t.jsx)(n.a,{href:"understanding-cost",children:"Understanding total cost"}),". To see a calculation of your current usage and costs, see the ",(0,t.jsx)(n.a,{href:"monitoring-usage",children:"usage dashboard"})," in the Pinecone console."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"understanding-cost",children:"total cost of Pinecone usage"})," derives from ",(0,t.jsx)(n.a,{href:"indexes#pods-pod-types-and-pod-sizes",children:"pod type"}),", the number of pods in use, pod size, the total time each pod is running, and the billing plan. This topic describes several ways you can manage your overall Pinecone cost by adjusting these variables."]}),"\n",(0,t.jsx)(n.h2,{id:"use-the-starter-plan-for-small-projects-or-prototypes",children:"Use the Starter Plan for small projects or prototypes"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://www.pinecone.io/pricing/",children:"Starter Plan"})," incurs no costs, and supports roughly 100,000 vectors with 1536 dimensions. If this meets the needs of your project, you can use Pinecone for free; if you decide to ",(0,t.jsx)(n.a,{href:"scaling-indexes",children:"scale your index"})," or ",(0,t.jsx)(n.a,{href:"moving-to-production",children:"move it to production"}),", you can upgrade your billing plan later."]}),"\n",(0,t.jsx)(n.h2,{id:"choose-the-right-pod-size-for-your-application",children:"Choose the right pod size for your application"}),"\n",(0,t.jsxs)(n.p,{children:["Different Pinecone pod sizes are designed for different applications, and some are more expensive than others. By ",(0,t.jsx)(n.a,{href:"choosing-index-type-and-size",children:"choosing the appropriate pod type and size"}),", you can pay for the resources you need. For example, the ",(0,t.jsx)(n.code,{children:"s1"})," pod type provides large storage capacity and lower overall costs with slightly higher query latencies than ",(0,t.jsx)(n.code,{children:"p1"})," pods. By switching to a different pod type, you may be able to reduce costs while still getting the performance your application needs."]}),"\n",(0,t.jsx)(n.h2,{id:"back-up-inactive-indexes",children:"Back up inactive indexes"}),"\n",(0,t.jsxs)(n.p,{children:["When a specific index is not in use, ",(0,t.jsx)(n.a,{href:"back-up-indexes",children:"back it up using collections"})," and delete the inactive index. When you're ready to use these vectors again, you can ",(0,t.jsx)(n.a,{href:"manage-indexes#create-an-index-from-a-collection",children:"create a new index from the collection"}),". This new index can also use a different index type or size. Because it's relatively cheap to store collections, you can reduce costs by only running an index when it's in use."]}),"\n",(0,t.jsx)(n.h2,{id:"use-namespaces-for-multitenancy",children:"Use namespaces for multitenancy"}),"\n",(0,t.jsxs)(n.p,{children:["If your application requires you to separate users into groups, consider ",(0,t.jsx)(n.a,{href:"multitenancy#namespaces",children:"using namespaces to isolate segments of vectors within a single index"}),". Depending on your application requirements, this may allow you to reduce the total number of active indexes."]}),"\n",(0,t.jsx)(n.h2,{id:"commit-to-annual-spend",children:"Commit to annual spend"}),"\n",(0,t.jsxs)(n.p,{children:["Users who commit to an annual contract may qualify for discounted rates. To learn more, ",(0,t.jsx)(n.a,{href:"https://www.pinecone.io/contact/",children:"contact Pinecone sales"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"talk-to-support",children:"Talk to support"}),"\n",(0,t.jsxs)(n.p,{children:["Users on the Standard and Enterprise plans can ",(0,t.jsx)(n.a,{href:"https://support.pinecone.io",children:"contact support"})," for help in optimizing costs."]}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Learn about ",(0,t.jsx)(n.a,{href:"choosing-index-type-and-size",children:"choosing index type and size"})]}),"\n",(0,t.jsxs)(n.li,{children:["Learn about ",(0,t.jsx)(n.a,{href:"monitoring-usage",children:"monitoring usage"})]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>a});var t=o(7294);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);