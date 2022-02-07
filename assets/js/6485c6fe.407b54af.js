"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[565],{4137:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return k}});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=d(a),k=l,c=u["".concat(o,".").concat(k)]||u[k]||m[k]||r;return a?n.createElement(c,i(i({ref:e},p),{},{components:a})):n.createElement(c,i({ref:e},p))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:l,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4538:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var n=a(7462),l=a(3366),r=(a(7294),a(4137)),i=["components"],s={title:"Redshift",sidebar_label:"Redshift",slug:"/metadata-ingestion/source_docs/redshift",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/redshift.md"},o="Redshift",d={unversionedId:"metadata-ingestion/source_docs/redshift",id:"metadata-ingestion/source_docs/redshift",isDocsHomePage:!1,title:"Redshift",description:"For context on getting started with ingestion, check out our metadata ingestion guide.",source:"@site/genDocs/metadata-ingestion/source_docs/redshift.md",sourceDirName:"metadata-ingestion/source_docs",slug:"/metadata-ingestion/source_docs/redshift",permalink:"/docs/metadata-ingestion/source_docs/redshift",editUrl:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/redshift.md",tags:[],version:"current",frontMatter:{title:"Redshift",sidebar_label:"Redshift",slug:"/metadata-ingestion/source_docs/redshift",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/redshift.md"},sidebar:"overviewSidebar",previous:{title:"Redash",permalink:"/docs/metadata-ingestion/source_docs/redash"},next:{title:"Datahub's Reporting Framework for Ingestion Job Telemetry",permalink:"/docs/metadata-ingestion/source_docs/reporting_telemetry"}},p=[{value:"Setup",id:"setup",children:[{value:"Prerequisites",id:"prerequisites",children:[],level:3}],level:2},{value:"Capabilities",id:"capabilities",children:[],level:2},{value:"Quickstart recipe",id:"quickstart-recipe",children:[],level:2},{value:"Config details",id:"config-details",children:[],level:2},{value:"Lineage",id:"lineage",children:[{value:"stl_scan_based",id:"stl_scan_based",children:[],level:3},{value:"sql_based",id:"sql_based",children:[],level:3},{value:"mixed",id:"mixed",children:[],level:3}],level:2},{value:"Setup",id:"setup-1",children:[],level:2},{value:"Capabilities",id:"capabilities-1",children:[],level:2},{value:"Quickstart recipe",id:"quickstart-recipe-1",children:[],level:2},{value:"Config details",id:"config-details-1",children:[],level:2},{value:"Questions",id:"questions",children:[],level:2}],m={toc:p};function u(t){var e=t.components,a=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"redshift"},"Redshift"),(0,r.kt)("p",null,"For context on getting started with ingestion, check out our ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"metadata ingestion guide"),"."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"To install this plugin, run ",(0,r.kt)("inlineCode",{parentName:"p"},"pip install 'acryl-datahub[redshift]'"),"."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"This source needs to access system tables that require extra permissions.\nTo grant these permissions, please alter your datahub Redshift user the following way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER USER datahub_user WITH SYSLOG ACCESS UNRESTRICTED;\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Giving a user unrestricted access to system tables gives the user visibility to data generated by other users. For example, STL_QUERY and STL_QUERYTEXT contain the full text of INSERT, UPDATE, and DELETE statements."))),(0,r.kt)("h2",{id:"capabilities"},"Capabilities"),(0,r.kt)("p",null,"This plugin extracts the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Metadata for databases, schemas, views and tables"),(0,r.kt)("li",{parentName:"ul"},"Column types associated with each table"),(0,r.kt)("li",{parentName:"ul"},"Also supports PostGIS extensions"),(0,r.kt)("li",{parentName:"ul"},"Table, row, and column statistics via optional ",(0,r.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/source_docs/sql_profiles"},"SQL profiling")),(0,r.kt)("li",{parentName:"ul"},"Table lineage")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can also get fine-grained usage statistics for Redshift using the ",(0,r.kt)("inlineCode",{parentName:"p"},"redshift-usage")," source described below."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Capability"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Details"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Platform Instance"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/platform-instances"},"link"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data Containers"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data Domains"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/domains"},"link"))))),(0,r.kt)("h2",{id:"quickstart-recipe"},"Quickstart recipe"),(0,r.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,r.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,r.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"source:\n  type: redshift\n  config:\n    # Coordinates\n    host_port: example.something.us-west-2.redshift.amazonaws.com:5439\n    database: DemoDatabase\n\n    # Credentials\n    username: user\n    password: pass\n\n    # Options\n    options:\n      # driver_option: some-option\n\n    include_views: True # whether to include views, defaults to True\n    include_tables: True # whether to include views, defaults to True\n\nsink:\n  # sink configs\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Extra options when running Redshift behind a proxy"),(0,r.kt)("p",null,"This requires you to have already installed the Microsoft ODBC Driver for SQL Server.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/sql/connect/python/pyodbc/step-1-configure-development-environment-for-pyodbc-python-development?view=sql-server-ver15"},"https://docs.microsoft.com/en-us/sql/connect/python/pyodbc/step-1-configure-development-environment-for-pyodbc-python-development?view=sql-server-ver15")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  type: redshift\n  config:\n    host_port: my-proxy-hostname:5439\n\n    options:\n      connect_args:\n        sslmode: "prefer" # or "require" or "verify-ca"\n        sslrootcert: ~ # needed to unpin the AWS Redshift certificate\n\nsink:\n  # sink configs\n'))),(0,r.kt)("h2",{id:"config-details"},"Config details"),(0,r.kt)("p",null,"Like all SQL-based sources, the Redshift integration supports:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Stale Metadata Deletion: See ",(0,r.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/source_docs/stateful_ingestion"},"here")," for more details on configuration."),(0,r.kt)("li",{parentName:"ul"},"SQL Profiling: See ",(0,r.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/source_docs/sql_profiles"},"here")," for more details on configuration.")),(0,r.kt)("p",null,"Note that a ",(0,r.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"username")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Redshift username.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"password")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Redshift password.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"host_port")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Redshift host URL.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Redshift database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database_alias")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Alias to apply to database when ingesting.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"PROD"')),(0,r.kt)("td",{parentName:"tr",align:null},"Environment to use in namespace when constructing URNs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"platform_instance")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"The Platform instance to use while constructing URNs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.<option>")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Any options specified here will be passed to SQLAlchemy's ",(0,r.kt)("inlineCode",{parentName:"td"},"create_engine")," as kwargs.",(0,r.kt)("br",null),"See ",(0,r.kt)("a",{parentName:"td",href:"https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine"},"https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine")," for details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"table_pattern.allow")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns for tables to include in ingestion.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"table_pattern.deny")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns for tables to exclude from ingestion.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"table_pattern.ignoreCase")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"schema_pattern.allow")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns for schemas to include in ingestion.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"schema_pattern.deny")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns for schemas to exclude from ingestion.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"schema_pattern.ignoreCase")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"view_pattern.allow")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns for views to include in ingestion.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"view_pattern.deny")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns for views to exclude from ingestion.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"view_pattern.ignoreCase")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"include_tables")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether tables should be ingested.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"include_views")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether views should be ingested.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"include_table_lineage")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether table lineage should be ingested.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"table_lineage_mode")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"stl_scan_based"')),(0,r.kt)("td",{parentName:"tr",align:null},"Which table lineage collector mode to use")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"include_copy_lineage")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether lineage should be collected from copy commands")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"default_schema")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"public"')),(0,r.kt)("td",{parentName:"tr",align:null},"The default schema to use if the sql parser fails to parse the schema with ",(0,r.kt)("inlineCode",{parentName:"td"},"sql_based")," lineage collector")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"domain.domain_key.allow")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns for tables/schemas to set domain_key domain key (domain_key can be any string like ",(0,r.kt)("inlineCode",{parentName:"td"},"sales"),". There can be multiple domain key specified.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"domain.domain_key.deny")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns for tables/schemas to not assign domain_key. There can be multiple domain key specified.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"domain.domain_key.ignoreCase")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.There can be multiple domain key specified.")))),(0,r.kt)("h2",{id:"lineage"},"Lineage"),(0,r.kt)("p",null,"There are multiple lineage collector implementations as Redshift does not support table lineage out of the box."),(0,r.kt)("h3",{id:"stl_scan_based"},"stl_scan_based"),(0,r.kt)("p",null,"The stl_scan based collector uses Redshift's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/redshift/latest/dg/r_STL_INSERT.html"},"stl_insert")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/redshift/latest/dg/r_STL_SCAN.html"},"stl_scan")," system tables to\ndiscover lineage between tables.\nPros:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fast"),(0,r.kt)("li",{parentName:"ul"},"Reliable")),(0,r.kt)("p",null,"Cons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Does not work with Spectrum/external tables because those scans do not show up in stl_scan table."),(0,r.kt)("li",{parentName:"ul"},"If a table is depending on a view then the view won't be listed as dependency. Instead the table will be connected with the view's dependencies.")),(0,r.kt)("h3",{id:"sql_based"},"sql_based"),(0,r.kt)("p",null,"The sql_based based collector uses Redshift's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/redshift/latest/dg/r_STL_INSERT.html"},"stl_insert")," to discover all the insert queries\nand uses sql parsing to discover the dependecies."),(0,r.kt)("p",null,"Pros:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Works with Spectrum tables"),(0,r.kt)("li",{parentName:"ul"},"Views are connected properly if a table depends on it")),(0,r.kt)("p",null,"Cons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Slow."),(0,r.kt)("li",{parentName:"ul"},"Less reliable as the query parser can fail on certain queries")),(0,r.kt)("h3",{id:"mixed"},"mixed"),(0,r.kt)("p",null,"Using both collector above and first applying the sql based and then the stl_scan based one."),(0,r.kt)("p",null,"Pros:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Works with Spectrum tables"),(0,r.kt)("li",{parentName:"ul"},"Views are connected properly if a table depends on it"),(0,r.kt)("li",{parentName:"ul"},"A bit more reliable than the sql_based one only")),(0,r.kt)("p",null,"Cons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Slow"),(0,r.kt)("li",{parentName:"ul"},"May be incorrect at times as the query parser can fail on certain queries")),(0,r.kt)("h1",{id:"note"},"Note"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The redshift stl redshift tables which are used for getting data lineage only retain approximately two to five days of log history. This means you cannot extract lineage from queries issued outside that window.")),(0,r.kt)("h1",{id:"redshift-usage-stats"},"Redshift Usage Stats"),(0,r.kt)("p",null,"This plugin extracts usage statistics for datasets in Amazon Redshift. For context on getting started with ingestion, check out our ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"metadata ingestion guide"),"."),(0,r.kt)("p",null,"Note: Usage information is computed by querying the following system tables - "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"stl_scan"),(0,r.kt)("li",{parentName:"ol"},"svv_table_info"),(0,r.kt)("li",{parentName:"ol"},"stl_query"),(0,r.kt)("li",{parentName:"ol"},"svl_user_info")),(0,r.kt)("p",null,"To grant access this plugin for all system tables, please alter your datahub Redshift user the following way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER USER datahub_user WITH SYSLOG ACCESS UNRESTRICTED;\n")),(0,r.kt)("h2",{id:"setup-1"},"Setup"),(0,r.kt)("p",null,"To install this plugin, run ",(0,r.kt)("inlineCode",{parentName:"p"},"pip install 'acryl-datahub[redshift-usage]'"),"."),(0,r.kt)("h2",{id:"capabilities-1"},"Capabilities"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Capability"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Details"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Platform Instance"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/platform-instances"},"link"))))),(0,r.kt)("p",null,"This plugin has the below functionalities -"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"For a specific dataset this plugin ingests the following statistics - ",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"top n queries."),(0,r.kt)("li",{parentName:"ol"},"top users."),(0,r.kt)("li",{parentName:"ol"},"usage of each column in the dataset."))),(0,r.kt)("li",{parentName:"ol"},"Aggregation of these statistics into buckets, by day or hour granularity.")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This source only does usage statistics. To get the tables, views, and schemas in your Redshift warehouse, ingest using the ",(0,r.kt)("inlineCode",{parentName:"p"},"redshift")," source described above."))),(0,r.kt)("h2",{id:"quickstart-recipe-1"},"Quickstart recipe"),(0,r.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,r.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,r.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  type: redshift-usage\n  config:\n    # Coordinates\n    host_port: db_host:port\n    database: dev\n    email_domain: acryl.io\n\n    # Credentials\n    username: username\n    password: "password"\n\nsink:\n# sink configs\n')),(0,r.kt)("h2",{id:"config-details-1"},"Config details"),(0,r.kt)("p",null,"Note that a ",(0,r.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,r.kt)("p",null,"By default, we extract usage stats for the last day, with the recommendation that this source is executed every day."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"username")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Redshift username.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"password")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Redshift password.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"host_port")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Redshift host URL.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Redshift database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"PROD"')),(0,r.kt)("td",{parentName:"tr",align:null},"Environment to use in namespace when constructing URNs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"platform_instance")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"The Platform instance to use while constructing URNs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.<option>")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Any options specified here will be passed to SQLAlchemy's ",(0,r.kt)("inlineCode",{parentName:"td"},"create_engine")," as kwargs.",(0,r.kt)("br",null),"See ",(0,r.kt)("a",{parentName:"td",href:"https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine"},"https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine")," for details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"email_domain")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Email domain of your organisation so users can be displayed on UI appropriately.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"start_time")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Last full day in UTC (or hour, depending on ",(0,r.kt)("inlineCode",{parentName:"td"},"bucket_duration"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"Earliest date of usage to consider.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"end_time")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Last full day in UTC (or hour, depending on ",(0,r.kt)("inlineCode",{parentName:"td"},"bucket_duration"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"Latest date of usage to consider.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"top_n_queries")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of top queries to save to each table.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"include_operational_stats")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to display operational stats.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bucket_duration")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"DAY"')),(0,r.kt)("td",{parentName:"tr",align:null},"Size of the time window to aggregate usage stats.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user_email_pattern.allow")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns for user emails to include in usage.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user_email_pattern.deny")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns for user emails to exclude from usage.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user_email_pattern.ignoreCase")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.")))),(0,r.kt)("h2",{id:"questions"},"Questions"),(0,r.kt)("p",null,"If you've got any questions on configuring this source, feel free to ping us on ",(0,r.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io/"},"our Slack"),"!"))}u.isMDXComponent=!0}}]);