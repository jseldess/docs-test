"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5762],{516:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>x,frontMatter:()=>d,metadata:()=>r,toc:()=>o});var a=i(5893),s=i(1151);const d={title:"Manage indexes",sidebar_position:2},t=void 0,r={id:"indexes/manage-indexes",title:"Manage indexes",description:"In this section, we explain how you can get a list of your indexes, create an index, delete an index, and describe an index.",source:"@site/docs/indexes/manage-indexes.md",sourceDirName:"indexes",slug:"/indexes/manage-indexes",permalink:"/docs/./indexes/manage-indexes",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/indexes/manage-indexes.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Manage indexes",sidebar_position:2},sidebar:"examplesSidebar",previous:{title:"Understanding indexes",permalink:"/docs/./indexes/"},next:{title:"Back up indexes",permalink:"/docs/./indexes/back-up-indexes"}},c={},o=[{value:"Getting information on your indexes",id:"getting-information-on-your-indexes",level:2},{value:"Creating an index",id:"creating-an-index",level:2},{value:"Create an index from a collection",id:"create-an-index-from-a-collection",level:3},{value:"Changing pod sizes",id:"changing-pod-sizes",level:2},{value:"Increasing the pod size for an index",id:"increasing-the-pod-size-for-an-index",level:3},{value:"Checking the status of a pod size change",id:"checking-the-status-of-a-pod-size-change",level:3},{value:"Replicas",id:"replicas",level:2},{value:"Selective metadata indexing",id:"selective-metadata-indexing",level:2},{value:"Examples",id:"examples",level:3},{value:"Deleting an index",id:"deleting-an-index",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"In this section, we explain how you can get a list of your indexes, create an index, delete an index, and describe an index."}),"\n",(0,a.jsxs)(n.p,{children:["To learn about the concepts related to indexes, see ",(0,a.jsx)(n.a,{href:"indexes",children:"Indexes"}),"."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"\u26a0\ufe0f Warning"}),"\n",(0,a.jsx)(n.p,{children:"Indexes on the Starter (free) plan are deleted after 7 days of inactivity. To\nprevent this, send any API request or log into the console. This will count\nas activity."}),"\n"]}),"\n",(0,a.jsx)("html",{children:(0,a.jsx)("iframe",{width:"450",height:"253",src:"https://www.youtube.com/embed/DCQrrnFbLt8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),"\n",(0,a.jsx)(n.h2,{id:"getting-information-on-your-indexes",children:"Getting information on your indexes"}),"\n",(0,a.jsx)(n.p,{children:"List all your Pinecone indexes:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"pinecone.list_indexes()\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"await pinecone.listIndexes();\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",metastring:"curl",children:"curl -i https://controller.YOUR_ENVIRONMENT.pinecone.io/databases \\\n  -H 'Api-Key: YOUR_API_KEY'\n"})}),"\n",(0,a.jsx)(n.p,{children:'Get the configuration and current status of an index named "example-index":'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"pinecone.describe_index('example-index')\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"await pinecone.describeIndex('example-index');\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",metastring:"curl",children:"INDEX_NAME='example-index' \\\nAPI_KEY='your-api-key' \\\nENVIRONMENT='your-environment' \\\n  curl -i -X GET \"https://controller.$ENVIRONMENT.pinecone.io/databases/$INDEX_NAME\" \\\n    -H \"Api-Key: $API_KEY\"\n"})}),"\n",(0,a.jsx)(n.h2,{id:"creating-an-index",children:"Creating an index"}),"\n",(0,a.jsx)(n.p,{children:"The simplest way to create an index is as follows. This gives you an index with a single pod that will perform approximate nearest neighbor (ANN) search using cosine similarity:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'pinecone.create_index("example-index", dimension=128)\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'await pinecone.createIndex({\n  name: "example-index",\n  dimension: 128,\n});\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",metastring:"curl",children:"curl -i -X POST https://controller.YOUR_ENVIRONMENT.pinecone.io/databases \\\n  -H 'Api-Key: YOUR_API_KEY' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n    \"name\": \"example-index\",\n    \"dimension\": 128\n  }'\n"})}),"\n",(0,a.jsxs)(n.p,{children:["A more complex index can be created as follows. This creates an index that measures similarity by Euclidean distance and runs on 4 s1 (storage-optimized) pods of size ",(0,a.jsx)(n.code,{children:"x1"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'pinecone.create_index("example-index", dimension=128, metric="euclidean", pods=4, pod_type="s1.x1")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'await pinecone.createIndex({\n  name: "example-index",\n  dimension: 128,\n  metric: "euclidean",\n  pods: 4,\n  podType: "s1.x1",\n});\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",metastring:"curl",children:'API_KEY=\'your-api-key\' \\\nENVIRONMENT=\'your-environment\' \\\n  curl -i -X POST "https://controller.$ENVIRONMENT.pinecone.io/databases" \\\n    -H "Api-Key: $API_KEY" \\\n    -H "Content-Type: application/json" \\\n    -d \'{\n      "name": "example-index",\n      "dimension": 128,\n      "metric": "euclidean",\n      "pods": 4,\n      "pod_type": "p1.x1"\n    }\'\n'})}),"\n",(0,a.jsx)(n.h3,{id:"create-an-index-from-a-collection",children:"Create an index from a collection"}),"\n",(0,a.jsxs)(n.p,{children:["To create an index from a ",(0,a.jsx)(n.a,{href:"collections",children:"collection"}),", use the ",(0,a.jsx)(n.a,{href:"/reference/create_index/",children:(0,a.jsx)(n.code,{children:"create_index"})})," operation and provide a ",(0,a.jsx)(n.a,{href:"/reference/create_index/#!path=source_collection&t=request",children:(0,a.jsx)(n.code,{children:"source_collection"})})," parameter containing the name of the collection from which you wish to create an index. The new index is queryable and writable."]}),"\n",(0,a.jsx)(n.p,{children:"Creating an index from a collection generally takes about 10 minutes. Creating a p2 index from a collection can take several hours when the number of vectors is on the order of 1M."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example"})}),"\n",(0,a.jsxs)(n.p,{children:["The following example creates an index named ",(0,a.jsx)(n.code,{children:"example-index"})," with 128 dimensions from a collection named ",(0,a.jsx)(n.code,{children:"example-collection"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'pinecone.create_index("example-index", dimension=128, source_collection="example-collection")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'await pinecone.createIndex({\n  name: "example-index",\n  dimension: 128,\n  sourceCollection: "example-collection",\n});\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",metastring:"curl",children:'API_KEY=\'your-api-key\' \\\nENVIRONMENT=\'your-environment\' \\\n  curl -i -X POST "https://controller.$ENVIRONMENT.pinecone.io/databases" \\\n    -H "Api-Key: $API_KEY" \\\n    -H "Content-Type: application/json" \\\n    -d \'{\n      "name": "example-index",\n      "source_collection":"example-collection"}\n    }\'\n'})}),"\n",(0,a.jsxs)(n.p,{children:["For more information about each pod type and size, see ",(0,a.jsx)(n.a,{href:"indexes",children:"Indexes"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["For the full list of parameters available to customize an index, see the ",(0,a.jsx)(n.a,{href:"/reference/create_index/",children:"create_index API reference"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"changing-pod-sizes",children:"Changing pod sizes"}),"\n",(0,a.jsxs)(n.p,{children:["The default pod size is ",(0,a.jsx)(n.code,{children:"x1"}),". After index creation, you can increase the pod size for an index."]}),"\n",(0,a.jsx)(n.p,{children:"Increasing the pod size of your index does not result in downtime. Reads and writes continue uninterrupted during the scaling process. Currently, you cannot reduce the pod size of your indexes. Your number of replicas and your total number of pods remain the same, but each pod changes size. Resizing completes in about 10 minutes."}),"\n",(0,a.jsxs)(n.p,{children:["To learn more about pod sizes, see ",(0,a.jsx)(n.a,{href:"indexes/#pods-pod-types-and-pod-sizes",children:"Indexes"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"increasing-the-pod-size-for-an-index",children:"Increasing the pod size for an index"}),"\n",(0,a.jsxs)(n.p,{children:["To change the pod size of an existing index, use the ",(0,a.jsx)(n.a,{href:"/reference/configure_index/",children:"configure_index"})," operation and append the new size to the ",(0,a.jsx)(n.code,{children:"pod_type"})," parameter, separated by a period (.)."]}),"\n",(0,a.jsxs)(n.p,{children:["Projects in the ",(0,a.jsx)(n.code,{children:"gcp-starter"})," environment do not use pods."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example"})}),"\n",(0,a.jsxs)(n.p,{children:["The following example assumes that ",(0,a.jsx)(n.code,{children:"example-index"})," has size ",(0,a.jsx)(n.code,{children:"x1"})," and changes the size to ",(0,a.jsx)(n.code,{children:"x2"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'pinecone.configure_index("example-index", pod_type="s1.x2")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"await client.configureIndex('example-index', {\n  podType: 's1.x2',\n});\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",metastring:"curl",children:'INDEX_NAME=\'example-index\' \\\nAPI_KEY=\'your-api-key\' \\\nENVIRONMENT=\'your-environment\' \\\n  curl -i -X PATCH "https://controller.$ENVIRONMENT.pinecone.io/databases/$INDEX_NAME" \\\n    -H "Api-Key: $API_KEY" \\\n    -H "Content-Type: application/json" \\\n    -d \'{\n      "pod_type": "s1.x2"\n    }\'\n'})}),"\n",(0,a.jsx)(n.h3,{id:"checking-the-status-of-a-pod-size-change",children:"Checking the status of a pod size change"}),"\n",(0,a.jsxs)(n.p,{children:["To check the status of a pod size change, use the ",(0,a.jsx)(n.a,{href:"/reference/describe_index/",children:"describe_index"})," operation. The ",(0,a.jsx)(n.code,{children:"status"})," field in the results contains the key-value pair ",(0,a.jsx)(n.code,{children:'"state":"ScalingUp"'})," or ",(0,a.jsx)(n.code,{children:'"state":"ScalingDown"'})," during the resizing process and the key-value pair ",(0,a.jsx)(n.code,{children:'"state":"Ready"'})," after the process is complete."]}),"\n",(0,a.jsxs)(n.p,{children:["The index fullness metric provided by ",(0,a.jsx)(n.a,{href:"/reference/describe_index_stats_post",children:(0,a.jsx)(n.code,{children:"describe_index_stats"})})," may be inaccurate until the resizing process is complete."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example"})}),"\n",(0,a.jsxs)(n.p,{children:["The following example uses ",(0,a.jsx)(n.code,{children:"describe_index"})," to get the index status of the index ",(0,a.jsx)(n.code,{children:"example-index"}),". The ",(0,a.jsx)(n.code,{children:"status"})," field contains the key-value pair ",(0,a.jsx)(n.code,{children:'"state":"ScalingUp"'}),", indicating that the resizing process is still ongoing."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'pinecone.describe_index("example-index")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'await pinecone.describeIndex({\n  name: "example-index",\n});\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",metastring:"curl",children:'INDEX_NAME=\'example-index\' \\\nAPI_KEY=\'your-api-key\' \\\nENVIRONMENT=\'your-environment\' \\\n  curl -i "https://controller.$ENVIRONMENT.pinecone.io/databases/$INDEX_NAME" \\\n    -H "Api-Key: $API_KEY" \n# Results:\n# {\n#   "database": {\n#     "name": "example-index",\n#     "dimensions": "768",\n#     "metric": "cosine",\n#     "pods": 6,\n#     "replicas": 2,\n#     "shards": 3,\n#     "pod_type": "p1.x2",\n#     "index_config": {},\n#     "status": {\n#       "ready": true,\n#       "state": "ScalingUp"\n#     }\n#   }\n# }\n'})}),"\n",(0,a.jsx)(n.h2,{id:"replicas",children:"Replicas"}),"\n",(0,a.jsx)(n.p,{children:"You can increase the number of replicas for your index to increase throughput (QPS). All indexes start with replicas=1."}),"\n",(0,a.jsxs)(n.p,{children:["Indexes in the ",(0,a.jsx)(n.code,{children:"gcp-starter"})," environment do not support replicas."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example"})}),"\n",(0,a.jsxs)(n.p,{children:["The following example uses the ",(0,a.jsx)(n.a,{href:"/reference/configure_index/",children:(0,a.jsx)(n.code,{children:"configure_index"})})," operation to set the number of replicas for the index ",(0,a.jsx)(n.code,{children:"example-index"})," to 4."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'pinecone.configure_index("example-index", replicas=4)\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'await pinecone.configureIndex("example-index", {\n  replicas: 4,\n});\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",metastring:"curl",children:"INDEX_NAME='example-index' \\\nAPI_KEY='your-api-key' \\\nENVIRONMENT='your-environment' \\\n  curl -i -X PATCH \"https://controller.$ENVIRONMENT.pinecone.io/databases/$INDEX_NAME\" \\\n    -H \"Api-Key: $API_KEY\" \\\n    -H \"Content-Type: application/json\" \\\n    -d '{\n      \"replicas\": 4\n    }'\n"})}),"\n",(0,a.jsxs)(n.p,{children:["See the ",(0,a.jsx)(n.a,{href:"/reference/configure_index/",children:"configure_index API reference"})," for more details."]}),"\n",(0,a.jsx)(n.h2,{id:"selective-metadata-indexing",children:"Selective metadata indexing"}),"\n",(0,a.jsxs)(n.p,{children:["By default, Pinecone indexes all ",(0,a.jsx)(n.a,{href:"metadata-filtering",children:"metadata"}),". When you index metadata fields, you can filter vector search queries using those fields. When you store metadata fields without indexing them, you ",(0,a.jsx)(n.a,{href:"metadata-filtering/#supported-metadata-types",children:"keep memory utilization low"}),", especially when you have many unique metadata values, and therefore can fit more vectors per pod."]}),"\n",(0,a.jsxs)(n.p,{children:["Searches without metadata filters do not consider metadata. To combine keywords with semantic search, see ",(0,a.jsx)(n.a,{href:"hybrid-search",children:"sparse-dense embeddings"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["When you create a new index, you can specify which metadata fields to index using the ",(0,a.jsx)(n.code,{children:"metadata_config"})," parameter. Projects on the ",(0,a.jsx)(n.code,{children:"gcp-starter"})," environment do not support the ",(0,a.jsx)(n.code,{children:"metadata_config"})," parameter."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'metadata_config = {\n    "indexed": ["metadata-field-name"]\n}\n\npinecone.create_index("example-index", dimension=128,\n                      metadata_config=metadata_config)\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"await pinecone.createIndex({\n  name: 'example-index',\n  dimension: 128,\n  metadata_config: {\n    indexed: [\"metadata-field-name\"],\n  },\n});\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",metastring:"curl",children:'API_KEY=\'your-api-key\' \\\nENVIRONMENT=\'your-environment\' \\\n  curl -i -X POST "https://controller.$ENVIRONMENT.pinecone.io/databases" \\\n    -H "Api-Key: $API_KEY" \\\n    -H "Content-Type: application/json" \\\n    -d \'{\n      "name": "example-index",\n      "dimension": 128,\n      "metadata_config": {\n        "indexed": ["metadata-field-name"]\n      }\n    }\'\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The value for the ",(0,a.jsx)(n.code,{children:"metadata_config"})," parameter is a JSON object containing the names of the metadata fields to index."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-JSON",children:'{\n    "indexed": [\n        "metadata-field-1",\n        "metadata-field-2",\n        "metadata-field-n"\n    ]\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["When you provide a ",(0,a.jsx)(n.code,{children:"metadata_config"})," object, Pinecone only indexes the metadata fields present in that object: any metadata fields absent from the ",(0,a.jsx)(n.code,{children:"metadata_config"})," object are not indexed."]}),"\n",(0,a.jsxs)(n.p,{children:["When a metadata field is indexed, you can ",(0,a.jsx)(n.a,{href:"metadata-filtering",children:"filter your queries"})," using that metadata field; if a metadata field is not indexed, metadata filtering ignores that field."]}),"\n",(0,a.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.p,{children:["The following example creates an index that only indexes the ",(0,a.jsx)(n.code,{children:"genre"})," metadata field. Queries against this index that filter for the ",(0,a.jsx)(n.code,{children:"genre"})," metadata field may return results; queries that filter for other metadata fields behave as though those fields do not exist."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'metadata_config = {\n    "indexed": ["genre"]\n}\n\npinecone.create_index("example-index", dimension=128,\n                      metadata_config=metadata_config)\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"await pinecone.createIndex({\n  name: 'example-index',\n  dimension: 128,\n  metadata_config: {\n    indexed: [\"genre\"],\n  },\n});\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",metastring:"curl",children:'API_KEY=\'your-api-key\' \\\nENVIRONMENT=\'your-environment\' \\\n  curl -i -X POST "https://controller.$ENVIRONMENT.pinecone.io/databases" \\\n    -H "Api-Key: $API_KEY" \\\n    -H "Content-Type: application/json" \\\n    -d \'{\n      "name": "example-index",\n      "dimension": 128,\n      "metadata_config": {\n        "indexed": ["genre"]\n      }\n    }\'\n'})}),"\n",(0,a.jsx)(n.h2,{id:"deleting-an-index",children:"Deleting an index"}),"\n",(0,a.jsx)(n.p,{children:"This operation will delete all of the data and the computing resources associated with the index."}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"\u2139\ufe0f Note"}),"\n",(0,a.jsx)(n.p,{children:"When you create an index, it runs as a service until you delete it. Users are\nbilled for running indexes, so we recommend you delete any indexes you're not\nusing. This will minimize your costs."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:'Delete a Pinecone index named "pinecone-index":'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'pinecone.delete_index("example-index")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"await pinecone.deleteIndex('example-index');\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",metastring:"curl",children:"INDEX_NAME='example-index' \\\nAPI_KEY='your-api-key' \\\nENVIRONMENT='your-environment' \\\n  curl -i -X DELETE \"https://controller.$ENVIRONMENT.pinecone.io/databases/$INDEX_NAME\" \\\n    -H \"Api-Key: $API_KEY\"\n"})})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>t});var a=i(7294);const s={},d=a.createContext(s);function t(e){const n=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);