"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6399],{9190:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>r});var a=i(5893),s=i(1151);const t={title:"Scale indexes",sidebar_position:4},o=void 0,c={id:"indexes/scaling-indexes",title:"Scale indexes",description:"In this topic, we explain how you can scale your indexes horizontally and vertically.",source:"@site/versioned_docs/version-legacy/indexes/scaling-indexes.md",sourceDirName:"indexes",slug:"/indexes/scaling-indexes",permalink:"/docs/legacy/indexes/scaling-indexes",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-legacy/indexes/scaling-indexes.md",tags:[],version:"legacy",sidebarPosition:4,frontMatter:{title:"Scale indexes",sidebar_position:4},sidebar:"examplesSidebar",previous:{title:"Back up indexes",permalink:"/docs/legacy/indexes/back-up-indexes"},next:{title:"Understanding collections",permalink:"/docs/legacy/indexes/collections"}},l={},r=[{value:"Vertical vs. horizontal scaling",id:"vertical-vs-horizontal-scaling",level:2},{value:"Vertical scaling",id:"vertical-scaling",level:2},{value:"Horizontal scaling",id:"horizontal-scaling",level:2},{value:"Adding pods",id:"adding-pods",level:3},{value:"Adding replicas",id:"adding-replicas",level:3},{value:"Next steps",id:"next-steps",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"In this topic, we explain how you can scale your indexes horizontally and vertically."}),"\n",(0,a.jsxs)(n.p,{children:["Projects in the ",(0,a.jsx)(n.code,{children:"gcp-starter"})," environment do not support the features referred to here, including pods, replicas, and collections."]}),"\n",(0,a.jsx)(n.h2,{id:"vertical-vs-horizontal-scaling",children:"Vertical vs. horizontal scaling"}),"\n",(0,a.jsx)(n.p,{children:"If you need to scale your environment to accommodate more vectors, you can modify your existing index to scale it vertically or create a new index and scale horizontally. This article will describe both methods and how to scale your index effectively."}),"\n",(0,a.jsx)(n.h2,{id:"vertical-scaling",children:"Vertical scaling"}),"\n",(0,a.jsx)(n.p,{children:"Scaling vertically is fast and involves no downtime. This is a good choice when you can't pause upserts and must continue serving traffic. It also allows you to double your capacity instantly. However, there are some factors to consider."}),"\n",(0,a.jsxs)(n.p,{children:["By ",(0,a.jsx)(n.a,{href:"manage-indexes#changing-pod-sizes",children:"changing the pod size"}),", you can scale to x2, x4, and x8 pod sizes, which means you are doubling your capacity at each step. Moving up to a new capacity will effectively double the number of pods used at each step. If you need to scale by smaller increments, then consider horizontal scaling."]}),"\n",(0,a.jsxs)(n.p,{children:["The number of base pods you specify when you initially create the index is static and cannot be changed. For example, if you start with 10 pods of ",(0,a.jsx)(n.code,{children:"p1.x1"})," and vertically scale to ",(0,a.jsx)(n.code,{children:"p1.x2"}),", this equates to 20 pods worth of usage. Neither can you change pod types with vertical scaling. If you want to change your pod type while scaling, then horizontal scaling is the better option."]}),"\n",(0,a.jsx)(n.p,{children:"You can only scale index sizes up and cannot scale them back down."}),"\n",(0,a.jsxs)(n.p,{children:["See our learning center for more information on ",(0,a.jsx)(n.a,{href:"https://www.pinecone.io/learn/testing-p2-collections-scaling/#vertical-scaling-on-p1-and-s1",children:"vertical scaling"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"horizontal-scaling",children:"Horizontal scaling"}),"\n",(0,a.jsx)(n.p,{children:"There are two approaches to horizontal scaling in Pinecone: adding pods and adding replicas. Adding pods increases all resources but requires a pause in upserts; adding replicas only increases throughput and requires no pause in upserts."}),"\n",(0,a.jsx)(n.h3,{id:"adding-pods",children:"Adding pods"}),"\n",(0,a.jsxs)(n.p,{children:["Adding pods to an index increases all resources, including available capacity. Adding pods to an existing index is possible using our ",(0,a.jsx)(n.a,{href:"collections",children:"collections"})," feature. A collection is an immutable snapshot of your index in time: a collection stores the data but not the original index definition."]}),"\n",(0,a.jsxs)(n.p,{children:["When you ",(0,a.jsx)(n.a,{href:"manage-indexes#create-an-index-from-a-collection",children:"create an index from a collection"}),", you define the new index configuration. This allows you to scale the base pod count horizontally without scaling vertically. The main advantage of this approach is that you can scale incrementally instead of doubling capacity as with vertical scaling. Also, you can redefine pod types if you are experimenting or if you need to use a different pod type, such asperformance-optimized pods or storage-optimized pods. Another advantage of this method is that you can change your ",(0,a.jsx)(n.a,{href:"manage-indexes#selective-metadata-indexing",children:"metadata configuration"})," to redefine metadata fields as indexed or stored-only. This is important when ",(0,a.jsx)(n.a,{href:"performance-tuning",children:"tuning your index"})," for the best throughput."]}),"\n",(0,a.jsx)(n.p,{children:"Here are the general steps to make a copy of your index and create a new index while changing the pod type, pod count, metadata configuration, replicas, and all typical parameters when creating a new collection:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Pause upserts."}),"\n",(0,a.jsx)(n.li,{children:"Create a collection from the current index."}),"\n",(0,a.jsx)(n.li,{children:"Create an index from the collection with new parameters."}),"\n",(0,a.jsx)(n.li,{children:"Continue upserts to the newly created index. Note: the URL has likely changed."}),"\n",(0,a.jsx)(n.li,{children:"Delete the old index if desired."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"adding-replicas",children:"Adding replicas"}),"\n",(0,a.jsx)(n.p,{children:"Each replica duplicates the resources and data in an index. This means that adding additional replicas increases the throughput of the index but not its capacity. However, adding replicas does not require downtime."}),"\n",(0,a.jsx)(n.p,{children:"Throughput in terms of queries per second (QPS) scales linearly with the number of replicas per index."}),"\n",(0,a.jsxs)(n.p,{children:["To add replicas, use the ",(0,a.jsx)(n.code,{children:"configure_index"})," operation to ",(0,a.jsx)(n.a,{href:"manage-indexes#replicas",children:"increase the number of replicas for your index"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["See our learning center for more information on ",(0,a.jsx)(n.a,{href:"https://www.pinecone.io/learn/testing-p2-collections-scaling/#vertical-scaling-on-p1-and-s1",children:"vertical scaling"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Learn more about ",(0,a.jsx)(n.a,{href:"collections",children:"collections"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>o});var a=i(7294);const s={},t=a.createContext(s);function o(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);