"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5661],{7238:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var s=a(5893),t=a(1151);const c={title:"Using namespaces",category:"6495c32609a24b00434e5b53"},r=void 0,i={id:"indexes/namespaces",title:"Using namespaces",description:"Pinecone allows you to partition the records in an index into namespaces.* Queries and other operations are then limited to one namespace, so different requests can search different subsets of your index.",source:"@site/versioned_docs/version-legacy/indexes/namespaces.md",sourceDirName:"indexes",slug:"/indexes/namespaces",permalink:"/docs/legacy/indexes/namespaces",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-legacy/indexes/namespaces.md",tags:[],version:"legacy",frontMatter:{title:"Using namespaces",category:"6495c32609a24b00434e5b53"},sidebar:"examplesSidebar",previous:{title:"Understanding collections",permalink:"/docs/legacy/indexes/collections"},next:{title:"Data",permalink:"/docs/legacy/category/data-3"}},o={},p=[{value:"Creating a namespace",id:"creating-a-namespace",level:2},{value:"Creating more than one namespace",id:"creating-more-than-one-namespace",level:2},{value:"Operations across all namespaces",id:"operations-across-all-namespaces",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Pinecone allows you to partition the records in an index into ",(0,s.jsx)(n.strong,{children:"namespaces"}),".* Queries and other operations are then limited to one namespace, so different requests can search different subsets of your index."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, you might want to define a namespace for indexing articles by ",(0,s.jsx)(n.strong,{children:"content"}),", and another for indexing articles by ",(0,s.jsx)(n.strong,{children:"title"}),". For a complete example, see our ",(0,s.jsx)(n.a,{href:"https://github.com/pinecone-io/examples/blob/master/learn/search/namespaces/namespaces_demo.ipynb",children:"Namespaces example notebook"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Every index is made up of one or more namespaces. Every record exists in exactly one namespace."}),"\n",(0,s.jsxs)(n.p,{children:["Namespaces are uniquely identified by a namespace name, which almost all operations accept as a parameter to limit their work to the specified namespace. When you don't specify a namespace name for an operation, Pinecone uses the default namespace name of ",(0,s.jsx)(n.code,{children:'""'})," (the empty string)."]}),"\n",(0,s.jsx)(n.h2,{id:"creating-a-namespace",children:"Creating a namespace"}),"\n",(0,s.jsx)(n.p,{children:"Namespaces are created automatically the first time they are used to upsert records. If the namespace doesn't exist, it is created implicitly."}),"\n",(0,s.jsxs)(n.p,{children:["The example below will create a ",(0,s.jsx)(n.code,{children:'"my-first-namespace"'})," namespace if it doesn\u2019t already exist:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Upsert records while creating a new namespace\nindex.upsert(vectors=[('id-1', [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1])],\n             namespace='my-first-namespace')\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// Create a client instance scoped to perform all operations\n// within that namespace.\nconst ns1 = index.namespace('my-first-namespace');\nawait ns1.upsert([\n  {\n    id: 'id-1',\n    values: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]\n  }\n])\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:"curl",children:'INDEX_NAME=\'index-name\' \\\nPROJECT=\'project-id\' \\\nENVIRONMENT=\'your-environment\' \\\nAPI_KEY=\'your-api-key\' \\\n  curl -X POST "https://$INDEX_NAME-$PROJECT.svc.$ENVIRONMENT.pinecone.io/vectors/upsert" \\\n    -H "Api-Key: $API_KEY" \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{\n      "vectors": [\n        {\n          "id": "id-1",\n          "values": [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]\n        }\n      ],\n      "namespace": "my-first-namespace"\n    }\'\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Then you can submit queries and other operations specifying that namespace as a parameter. For example, to query the records in namespace ",(0,s.jsx)(n.code,{children:'"my-first-namespace"'})," use code like the following:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"index.query(vector=[0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],\n            top_k=1,\n            namespace='my-first-namespace')\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const ns1 = index.namespace('my-first-namespace');\nawait ns1.query({\n  topK: 1,\n  vector: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],\n});\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:"curl",children:"INDEX_NAME='index-name' \\\nPROJECT='project-id' \\\nENVIRONMENT='your-environment' \\\nAPI_KEY='your-api-key' \\\n  curl -X POST \"https://$INDEX_NAME-$PROJECT.svc.$ENVIRONMENT.pinecone.io/query\" \\\n    -H \"Api-Key: $API_KEY\" \\\n    -H 'Content-Type: application/json' \\\n    -d '{\n      \"topK\": 1,\n      \"vector\": [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],\n      \"namespace\": \"my-first-namespace\"\n    }'\n"})}),"\n",(0,s.jsx)(n.h2,{id:"creating-more-than-one-namespace",children:"Creating more than one namespace"}),"\n",(0,s.jsx)(n.p,{children:"You can create more than one namespace. For example, insert data into separate namespaces:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import numpy as np\n\n# Create three sets of 8-dimensional vectors\nvectors_a = np.random.rand(15, 8).tolist()\nvectors_b = np.random.rand(20, 8).tolist()\nvectors_c = np.random.rand(30, 8).tolist()\n\n# Create ids\nids_a = map(str, np.arange(15).tolist())\nids_b = map(str, np.arange(20).tolist())\nids_c = map(str, np.arange(30).tolist())\n\n# Insert into separate namespaces\nindex.upsert(vectors=zip(ids_a,vectors_a),namespace='namespace_a')\nindex.upsert(vectors=zip(ids_b,vectors_b),namespace='namespace_b')\n\n# If no namespaces are specified, the index uses the default namespace ''\nindex.upsert(vectors=zip(ids_c,vectors_c))\n\n# At this point, index.describe_index_stats() returns:\n# {'dimension': 8,\n#  'namespaces': {'': {'vector_count': 30},\n#                 'namespace_a': {'vector_count': 15},\n#                 'namespace_b': {'vector_count': 20}}}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// First, set up some records. In a real use case, the vector values in these records would probably be outputs of an embedding model.\nconst records = [{\n    id: 'id-1',\n    values: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]\n }]\n\n// Calling upsert on the 'nsA' client instance upserts to the namespace 'namespace_a'.\nconst nsA = index.namespace('namespace_a')\nawait nsA.upsert(recordsA);\n\n// If we perform another operation like fetch with this client instance, it will also execute within the namespace 'namespace_a' and the record should be found and returned.\nconst fetchResult = await nsA.fetch([ 'id-1' ])\nconsole.log(fetchResult.records['id-1'] !== undefined) // true\nconsole.log(fetchResult.namespace === 'namespace_a') // true\n\n// If we execute the same command with the client instance scoped to a different namespace, such as `namespace_b`, then no records should be found by fetch when looking for the id `id-1`.\nconst fetchResult2 = await index.namespace('namespace_b').fetch(['id-1'])\nconsole.log(fetchResult2.records['id-1'] !== undefined) // false because no data returned by fetch\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:"curl",children:"# No example\n"})}),"\n",(0,s.jsx)(n.h2,{id:"operations-across-all-namespaces",children:"Operations across all namespaces"}),"\n",(0,s.jsx)(n.p,{children:"All vector operations apply to a single namespace, with one exception:"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"DescribeIndexStatistics"})," operation returns per-namespace statistics about the contents of ",(0,s.jsx)(n.strong,{children:"all"})," namespaces in an index. ",(0,s.jsx)(n.a,{href:"/reference/describe_index_stats_post",children:"More details"})]})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>i,a:()=>r});var s=a(7294);const t={},c=s.createContext(t);function r(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);