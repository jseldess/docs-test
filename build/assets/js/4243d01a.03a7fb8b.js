"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9574],{2914:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=n(5893),t=n(1151);const r={title:"Choosing index type and size",description:"Considerations for customizing Pinecone indexes.",sidebar_position:4},o=void 0,a={id:"getting-started/choosing-index-type-and-size",title:"Choosing index type and size",description:"Considerations for customizing Pinecone indexes.",source:"@site/docs/getting-started/choosing-index-type-and-size.md",sourceDirName:"getting-started",slug:"/getting-started/choosing-index-type-and-size",permalink:"/docs/./getting-started/choosing-index-type-and-size",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/choosing-index-type-and-size.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Choosing index type and size",description:"Considerations for customizing Pinecone indexes.",sidebar_position:4},sidebar:"examplesSidebar",previous:{title:"Authentication",permalink:"/docs/./getting-started/authentication"},next:{title:"Examples",permalink:"/docs/./getting-started/examples"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Number of vectors",id:"number-of-vectors",level:2},{value:"Dimensionality of vectors",id:"dimensionality-of-vectors",level:2},{value:"Metadata cardinality and size",id:"metadata-cardinality-and-size",level:2},{value:"Pod sizes",id:"pod-sizes",level:2},{value:"Example applications",id:"example-applications",level:2},{value:"Example 1: Semantic search of news articles",id:"example-1-semantic-search-of-news-articles",level:3},{value:"Example 2: Facial recognition",id:"example-2-facial-recognition",level:3}];function l(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:"When planning your Pinecone deployment, it is important to understand the approximate storage requirements of your vectors to choose the appropriate pod type and number. This page will give guidance on sizing to help you plan accordingly."}),"\n",(0,s.jsx)(i.p,{children:"As with all guidelines, these considerations are general and may not apply to your specific use case. We caution you to always test your deployment and ensure that the index configuration you are using is appropriate to your requirements."}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/docs/collections/",children:"Collections"})," make it easy to create new versions of your index with different pod types and sizes, and we encourage you to take advantage of that feature to test different configurations. This guide is merely an overview of sizing considerations and should not be taken as a definitive guide."]}),"\n",(0,s.jsxs)(i.p,{children:["Users on the Standard, Enterprise, and Enterprise Dedicated plans can ",(0,s.jsx)(i.a,{href:"https://support.pinecone.io",children:"contact support"})," for further help with sizing and testing."]}),"\n",(0,s.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(i.p,{children:"There are five main considerations when deciding how to configure your Pinecone index:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Number of vectors"}),"\n",(0,s.jsx)(i.li,{children:"Dimensionality of your vectors"}),"\n",(0,s.jsx)(i.li,{children:"Size of metadata on each vector"}),"\n",(0,s.jsx)(i.li,{children:"QPS throughput"}),"\n",(0,s.jsx)(i.li,{children:"Cardinality of indexed metadata"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Each of these considerations comes with requirements for index size, pod type, and replication strategy."}),"\n",(0,s.jsx)(i.h2,{id:"number-of-vectors",children:"Number of vectors"}),"\n",(0,s.jsxs)(i.p,{children:["The most important consideration in sizing is the ",(0,s.jsx)(i.a,{href:"/docs/insert-data/",children:"number of vectors"})," you plan on working with. As a rule of thumb, a single p1 pod can store approximately 1M vectors, while a s1 pod can store 5M vectors. However, this can be affected by other factors, such as dimensionality and metadata, which are explained below."]}),"\n",(0,s.jsx)(i.h2,{id:"dimensionality-of-vectors",children:"Dimensionality of vectors"}),"\n",(0,s.jsxs)(i.p,{children:["The rules of thumb above for how many vectors can be stored in a given pod assumes a typical configuration of 768 ",(0,s.jsx)(i.a,{href:"/docs/manage-indexes/#creating-an-index",children:"dimensions per vector"}),". As your individual use case will dictate the dimensionality of your vectors, the amount of space required to store them may necessarily be larger or smaller."]}),"\n",(0,s.jsx)(i.p,{children:"Each dimension on a single vector consumes 4 bytes of memory and storage per dimension, so if you expect to have 1M vectors with 768 dimensions each, that\u2019s about 3GB of storage without factoring in metadata or other overhead. Using that reference, we can estimate the typical pod size and number needed for a given index. Table 1 below gives some examples of this."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Table 1: Estimated number of pods per 1M vectors by dimensionality"})}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Pod type"}),(0,s.jsx)(i.th,{children:"Dimensions"}),(0,s.jsx)(i.th,{children:"Estimated max vectors per pod"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"p1"}),(0,s.jsx)(i.td,{children:"512"}),(0,s.jsx)(i.td,{children:"1,250,000"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{}),(0,s.jsx)(i.td,{children:"768"}),(0,s.jsx)(i.td,{children:"1,000,000"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{}),(0,s.jsx)(i.td,{children:"1024"}),(0,s.jsx)(i.td,{children:"675,000"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"p2"}),(0,s.jsx)(i.td,{children:"512"}),(0,s.jsx)(i.td,{children:"1,250,000"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{}),(0,s.jsx)(i.td,{children:"768"}),(0,s.jsx)(i.td,{children:"1,100,000"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{}),(0,s.jsx)(i.td,{children:"1024"}),(0,s.jsx)(i.td,{children:"1,000,000"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"s1"}),(0,s.jsx)(i.td,{children:"512"}),(0,s.jsx)(i.td,{children:"8,000,000"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{}),(0,s.jsx)(i.td,{children:"768"}),(0,s.jsx)(i.td,{children:"5,000,000"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{}),(0,s.jsx)(i.td,{children:"1024"}),(0,s.jsx)(i.td,{children:"4,000,000"})]})]})]}),"\n",(0,s.jsx)(i.p,{children:"Pinecone does not support fractional pod deployments, so always round up to the next nearest whole number when choosing your pods."}),"\n",(0,s.jsx)(i.h1,{id:"queries-per-second-qps",children:"Queries per second (QPS)"}),"\n",(0,s.jsxs)(i.p,{children:["QPS speeds are governed by a combination of the ",(0,s.jsx)(i.a,{href:"https://www.pinecone.io/docs/indexes/#pods-pod-types-and-pod-sizes",children:"pod type"})," of the index, the number of ",(0,s.jsx)(i.a,{href:"/docs/manage-indexes/#replicas",children:"replicas"}),", and the ",(0,s.jsx)(i.code,{children:"top_k"})," value of queries. The pod type is the primary factor driving QPS, as the different pod types are optimized for different approaches."]}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.a,{href:"/docs/indexes/#p1-pods",children:"p1 pods"})," are performance-optimized pods which provide very low query latencies, but hold fewer vectors per pod than ",(0,s.jsx)(i.a,{href:"/docs/indexes/#s1-pods",children:"s1 pods"}),". They are ideal for applications with low latency requirements (< 100ms). The s1 pods are optimized for storage and provide large storage capacity and lower overall costs with slightly higher query latencies than p1 pods. They are ideal for very large indexes with moderate or relaxed latency requirements."]}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.a,{href:"/docs/indexes/#p2-pods",children:"p2 pod type"})," provides greater query throughput with lower latency. They support 200 QPS per replica and return queries in less than 10ms. This means that query throughput and latency are better than s1 and p1, especially for low dimension vectors (< 512D)."]}),"\n",(0,s.jsxs)(i.p,{children:["As a rule, a single p1 pod with 1M vectors of 768 dimensions each and no replicas can handle about 20 QPS. It\u2019s possible to get greater or lesser speeds, depending on the size of your metadata, number of vectors, the dimensionality of your vectors, and the ",(0,s.jsx)(i.code,{children:"top_K"})," value for your search. See Table 2 below for more examples."]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsxs)(i.strong,{children:["Table 2: QPS by pod type and ",(0,s.jsx)(i.code,{children:"top_k"})," value"]}),"*"]}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Pod type"}),(0,s.jsxs)(i.th,{children:[(0,s.jsx)(i.code,{children:"top_k"})," 10"]}),(0,s.jsxs)(i.th,{children:[(0,s.jsx)(i.code,{children:"top_k"})," 250"]}),(0,s.jsxs)(i.th,{children:[(0,s.jsx)(i.code,{children:"top_k"})," 1000"]})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"p1"}),(0,s.jsx)(i.td,{children:"30"}),(0,s.jsx)(i.td,{children:"25"}),(0,s.jsx)(i.td,{children:"20"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"p2"}),(0,s.jsx)(i.td,{children:"150"}),(0,s.jsx)(i.td,{children:"50"}),(0,s.jsx)(i.td,{children:"20"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"s1"}),(0,s.jsx)(i.td,{children:"10"}),(0,s.jsx)(i.td,{children:"10"}),(0,s.jsx)(i.td,{children:"10"})]})]})]}),"\n",(0,s.jsx)(i.p,{children:"*The QPS values in Table 2 represent baseline QPS with 1M vectors and 768 dimensions."}),"\n",(0,s.jsxs)(i.p,{children:["Adding replicas is the simplest way to ",(0,s.jsx)(i.a,{href:"/docs/performance-tuning/#how-to-increase-throughput",children:"increase your QPS"}),". Each replica increases the throughput potential by roughly the same QPS, so aiming for 150 QPS using p1 pods means using the primary pod and 5 replicas. Using threading or multiprocessing in your application is also important, as issuing single queries sequentially still subjects you to delays from any underlying latency. The ",(0,s.jsx)(i.a,{href:"/docs/performance-tuning/#using-the-grpc-client-to-get-higher-upsert-speeds",children:"Pinecone gRPC client"})," can also be used to increase throughput of upserts."]}),"\n",(0,s.jsx)(i.h2,{id:"metadata-cardinality-and-size",children:"Metadata cardinality and size"}),"\n",(0,s.jsxs)(i.p,{children:["The last consideration when planning your indexes is the cardinality and size of your ",(0,s.jsx)(i.a,{href:"/docs/insert-data/#inserting-vectors-with-metadata",children:"metadata"}),". While the increases are small when talking about a few million vectors, they can have a real impact as you grow to hundreds of millions or billions of vectors."]}),"\n",(0,s.jsxs)(i.p,{children:["Indexes with very high cardinality, like those storing a unique user ID on each vector, can have significant memory requirements, resulting in fewer vectors fitting per pod. Also, if the size of the metadata per vector is larger, the index requires more storage. Limiting which metadata fields are indexed using ",(0,s.jsx)(i.a,{href:"/docs/manage-indexes/#selective-metadata-indexing",children:"selective metadata indexing"})," can help lower memory usage."]}),"\n",(0,s.jsx)(i.h2,{id:"pod-sizes",children:"Pod sizes"}),"\n",(0,s.jsxs)(i.p,{children:["You can also start with one of the larger ",(0,s.jsx)(i.a,{href:"/docs/indexes/#pod-size-and-performance",children:"pod sizes"}),", like p1.x2. Each step up in pod size doubles the space available for your vectors. We recommend starting with x1 pods and scaling as you grow. This way, you don\u2019t start with too large a pod size and have nowhere else to go up, meaning you have to migrate to a new index before you\u2019re ready."]}),"\n",(0,s.jsxs)(i.p,{children:["Projects on the ",(0,s.jsx)(i.code,{children:"gcp-starter"})," environment do not use pods."]}),"\n",(0,s.jsx)(i.h2,{id:"example-applications",children:"Example applications"}),"\n",(0,s.jsx)(i.p,{children:"The following examples will showcase how to use the sizing guidelines above to choose the appropriate type, size, and number of pods for your index."}),"\n",(0,s.jsx)(i.h3,{id:"example-1-semantic-search-of-news-articles",children:"Example 1: Semantic search of news articles"}),"\n",(0,s.jsxs)(i.p,{children:["In our first example, we\u2019ll use the ",(0,s.jsx)(i.a,{href:"semantic-text-search",children:"demo app for semantic search"})," from our documentation. In this case, we\u2019re only working with 204,135 vectors. The vectors use 300 dimensions each, well under the general measure of 768 dimensions. Using the rule of thumb above of up to 1M vectors per p1 pod, we can run this app comfortably with a single p1.x1 pod."]}),"\n",(0,s.jsx)(i.h3,{id:"example-2-facial-recognition",children:"Example 2: Facial recognition"}),"\n",(0,s.jsx)(i.p,{children:"For this example, suppose you\u2019re building an application to identify customers using facial recognition for a secure banking app. Facial recognition can work with as few as 128 dimensions, but in this case, because the app will be used for access to finances, we want to make sure we\u2019re certain that the person using it is the right one. We plan for 100M customers and use 2048 dimensions per vector."}),"\n",(0,s.jsx)(i.p,{children:"We know from our rules of thumb above that 1M vectors with 768 dimensions fit nicely in a p1.x1 pod. We can just divide those numbers into the new targets to get the ratios we\u2019ll need for our pod estimate:"}),"\n",(0,s.jsx)(i.p,{children:"100M / 1M = 100 base p1 pods\n2048 / 768 = 2.667 vector ratio\n2.667 * 100 = 267 rounding up"}),"\n",(0,s.jsx)(i.p,{children:"So we need 267 p1.x1 pods. We can reduce that by switching to s1 pods instead, sacrificing latency by increasing storage availability. They hold five times the storage of p1.x1, so the math is simple:"}),"\n",(0,s.jsx)(i.p,{children:"267 / 5 = 54 rounding up"}),"\n",(0,s.jsx)(i.p,{children:"So we estimate that we need 54 s1.x1 pods to store very high dimensional data for the face of each of the bank\u2019s customers."})]})}function h(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>a,a:()=>o});var s=n(7294);const t={},r=s.createContext(t);function o(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);