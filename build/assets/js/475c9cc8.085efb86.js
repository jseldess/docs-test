"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6009],{8160:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(5893),s=t(1151);const i={title:"Using public Pinecone datasets",category:"6495c32609a24b00434e5b53"},d=void 0,o={id:"data/datasets/using-public-datasets",title:"Using public Pinecone datasets",description:"Overview",source:"@site/versioned_docs/version-legacy/data/datasets/using-public-datasets.md",sourceDirName:"data/datasets",slug:"/data/datasets/using-public-datasets",permalink:"/docs/legacy/data/datasets/using-public-datasets",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-legacy/data/datasets/using-public-datasets.md",tags:[],version:"legacy",frontMatter:{title:"Using public Pinecone datasets",category:"6495c32609a24b00434e5b53"},sidebar:"examplesSidebar",previous:{title:"Pinecone public datasets",permalink:"/docs/legacy/data/datasets/pinecone-public-datasets"},next:{title:"Manage datasets",permalink:"/docs/legacy/data/datasets"}},r={},l=[{value:"Overview",id:"overview",level:2},{value:"Datasets contain vectors and metadata",id:"datasets-contain-vectors-and-metadata",level:2},{value:"Listing public datasets",id:"listing-public-datasets",level:2},{value:"Loading datasets",id:"loading-datasets",level:2},{value:"Iterating over datasets",id:"iterating-over-datasets",level:2},{value:"Iterate over documents in batches and upsert to an index.",id:"iterate-over-documents-in-batches-and-upsert-to-an-index",level:2},{value:"Upsert the dataset as a dataframe.",id:"upsert-the-dataset-as-a-dataframe",level:2},{value:"What&#39;s next",id:"whats-next",level:2}];function c(e){const a={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(a.p,{children:"This document explains how to use existing Pinecone datasets."}),"\n",(0,n.jsxs)(a.p,{children:["To learn about creating and listing datasets, see ",(0,n.jsx)(a.a,{href:"creating-datasets",children:"Creating datasets"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"datasets-contain-vectors-and-metadata",children:"Datasets contain vectors and metadata"}),"\n",(0,n.jsx)(a.p,{children:"Pinecone datasets contain rows of dense and sparse vector values and metadata. Pinecone's Python client supports upserting vectors from a dataset. You can also use datasets to iterate over vectors to automate queries."}),"\n",(0,n.jsx)(a.h2,{id:"listing-public-datasets",children:"Listing public datasets"}),"\n",(0,n.jsxs)(a.p,{children:["To list available public Pinecone datasets, use the ",(0,n.jsx)(a.code,{children:"list_datasets()"})," method."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Example"})}),"\n",(0,n.jsx)(a.p,{children:"The following example retrieves an object containing information about public Pinecone datasets."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"from pinecone_datasets import list_datasets\n\nlist_datasets()\n"})}),"\n",(0,n.jsx)(a.p,{children:"The example above returns an object like the following:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:"['ANN_DEEP1B_d96_angular', 'ANN_Fashion-MNIST_d784_euclidean', 'ANN_GIST_d960_euclidean', 'ANN_GloVe_d100_angular', 'ANN_GloVe_d200_angular', 'ANN_GloVe_d25_angular', 'ANN_GloVe_d50_angular', 'ANN_LastFM_d64_angular', 'ANN_MNIST_d784_euclidean', 'ANN_NYTimes_d256_angular', 'ANN_SIFT1M_d128_euclidean', 'quora_all-MiniLM-L6-bm25', 'quora_all-MiniLM-L6-v2_Splade']\n"})}),"\n",(0,n.jsx)(a.h2,{id:"loading-datasets",children:"Loading datasets"}),"\n",(0,n.jsxs)(a.p,{children:["To load a dataset into memory, use the ",(0,n.jsx)(a.code,{children:"load_dataset"})," method. You can use load a Pinecone public dataset or your own dataset."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Example"})}),"\n",(0,n.jsxs)(a.p,{children:["The following example loads the ",(0,n.jsx)(a.code,{children:"quora_al-MiniLM-L6-bm25"})," Pinecone public dataset."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:'from pinecone_datasets import list_datasets, load_dataset\n\nlist_datasets()\n# ["quora_all-MiniLM-L6-bm25", ... ]\n\ndataset = load_dataset("quora_all-MiniLM-L6-bm25")\n\ndataset.head()\n'})}),"\n",(0,n.jsx)(a.p,{children:"The example above prints the following output:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:'\u250c\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 id  \u2506 values                    \u2506 sparse_values                       \u2506 metadata          \u2506 blob \u2502\n\u2502     \u2506                           \u2506                                     \u2506                   \u2506      \u2502\n\u2502 str \u2506 list[f32]                 \u2506 struct[2]                           \u2506 struct[3]         \u2506      \u2502\n\u255e\u2550\u2550\u2550\u2550\u2550\u256a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256a\u2550\u2550\u2550\u2550\u2550\u2550\u2561\n\u2502 0   \u2506 [0.118014, -0.069717, ... \u2506 {[470065541, 52922727, ... 22364... \u2506 {2017,12,"other"} \u2506 .... \u2502\n\u2502     \u2506 0.0060...                 \u2506                                     \u2506                   \u2506      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n'})}),"\n",(0,n.jsx)(a.h2,{id:"iterating-over-datasets",children:"Iterating over datasets"}),"\n",(0,n.jsxs)(a.p,{children:["You can iterate over vector data in a dataset using the ",(0,n.jsx)(a.code,{children:"iter_documents"})," method. You can use this method to upsert or update vectors, to automate benchmarking, or other tasks."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Example"})}),"\n",(0,n.jsxs)(a.p,{children:["The following example loads the ",(0,n.jsx)(a.code,{children:"quora_all-MiniLM-L6-bm25"})," dataset, then iterates over the documents in the dataset in batches of 100 and upserts the vector data to a Pinecone index named ",(0,n.jsx)(a.code,{children:"my-index"}),"."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:'import pinecone\nfrom pinecone_datasets import list_datasets, load_dataset\n\ndataset = load_dataset("quora_all-MiniLM-L6-bm25")\n\npinecone.init(api_key="API_KEY", environment="us-west1-gcp")\n\npinecone.create_index(name="my-index", dimension=384, pod_type=\'s1\')\n\nindex = pinecone.Index("my-index")\n'})}),"\n",(0,n.jsx)(a.h2,{id:"iterate-over-documents-in-batches-and-upsert-to-an-index",children:"Iterate over documents in batches and upsert to an index."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"for batch in dataset.iter_documents(batch_size=100):\n    index.upsert(vectors=batch)\n"})}),"\n",(0,n.jsx)(a.p,{children:"The following example upserts the dataset as dataframe."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:'import pinecone\n\nfrom pinecone_datasets import list_datasets, load_dataset\n\ndataset = load_dataset("quora_all-MiniLM-L6-bm25")\n\npinecone.init(api_key="API_KEY", environment="us-west1-gcp")\n\npinecone.create_index(name="my-index", dimension=384, pod_type=\'s1\')\n\nindex = pinecone.Index("my-index")\n'})}),"\n",(0,n.jsx)(a.h2,{id:"upsert-the-dataset-as-a-dataframe",children:"Upsert the dataset as a dataframe."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:'index.upsert_from_dataframe(dataset.drop(columns=["blob"]))\n'})}),"\n",(0,n.jsx)(a.h2,{id:"whats-next",children:"What's next"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Learn more about ",(0,n.jsx)(a.a,{href:"https://pinecone-io.github.io/pinecone-datasets/pinecone_datasets.html",children:"using datasets in the Pinecone Python client"})]}),"\n"]})]})}function u(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,a,t)=>{t.d(a,{Z:()=>o,a:()=>d});var n=t(7294);const s={},i=n.createContext(s);function d(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);