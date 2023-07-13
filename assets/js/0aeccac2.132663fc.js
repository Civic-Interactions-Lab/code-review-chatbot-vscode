"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[414],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(n),v=o,m=l["".concat(c,".").concat(v)]||l[v]||u[v]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=v;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},6512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:6},a="System Architecture",s={unversionedId:"design",id:"design",title:"System Architecture",description:"Extension Architecture",source:"@site/docs/design.md",sourceDirName:".",slug:"/design",permalink:"/code-review-chatbot-vscode/docs/design",draft:!1,editUrl:"https://github.com/Civic-Interactions-Lab/code-review-chatbot-vscode/edit/main/documentation/docs/design.md",tags:[],version:"current",lastUpdatedBy:"Ian Applebaum",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Version Control",permalink:"/code-review-chatbot-vscode/docs/development-plan/version-control"},next:{title:"API Specification",permalink:"/code-review-chatbot-vscode/docs/category/api-specification"}},c={},d=[{value:"Extension Architecture",id:"extension-architecture",level:2}],p={toc:d};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"system-architecture"},"System Architecture"),(0,o.kt)("h2",{id:"extension-architecture"},"Extension Architecture"),(0,o.kt)("admonition",{title:"Microsoft's Extension Anatomy Documentation",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Go check out Microsoft's ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/api/get-started/extension-anatomy"},"extension anatomy")," documentation for details on the basic structure and definitions of VSCode Extension written in TypeScript.")),(0,o.kt)("mermaid",{value:"classDiagram\nclass activate ~Function~{\nconst vscode.WorkspaceConfiguration config = 'chatgpt'\nconst ChatGPTViewProvider provider = context.extensionUri\n    commandHandler(command:string)\n}\n\nclass AuthInfo ~type~{\n    string? apiKey \n}\nclass Settings ~type~{\n boolean? selectedInsideCodeblock\n  boolean? codeblockWithLanguageId\n   boolean? pasteOnClick\n   boolean? keepConversation\n   number? timeoutLength\n   string? model\n   string? apiUrl\n}\nclass `src/extension.ts` {\nconst BASE_URL = 'https://api.openai.com/v1'\nactivate(context: vscode.ExtensionContext)\ndeactivate()\n}\nclass vscode\nclass chatgpt\n`src/extension.ts` --\x3e activate \nclass ChatGPTViewProvider {\n+ChatGPTViewProviderViewType viewType$\n    - vscode.WebviewView? _view\n\t- ChatGPTAPI? _chatGPTAPI\n\t- any? _conversation\n\t- string? _response\n\t- string? _prompt\n\t- string? _fullPrompt\n\t-_currentMessageNumber = 0\n\t- Settings _settings\n\t- AuthInfo _authInfo\n\tconstructor(private readonly _extensionUri: vscode.Uri) \n\t+setAuthenticationInfo(authInfo: AuthInfo)\n\t+setSettings(settings: Settings)\n\t+getSettings()\n\t-_newAPI()\n\t-resolveWebviewView(webviewView: vscode.WebviewView, context: vscode.WebviewViewResolveContext, _token: vscode.CancellationToken) \n\t+ async resetConversation() Promise<void>\n\t+ async search(prompt?:string) Promise<void>\n\t- _getHtmlForWebview(webview: vscode.Webview) string\n}\nChatGPTViewProvider --|> `vscode.WebviewViewProvider`\nChatGPTViewProvider ..> chatgpt\nChatGPTViewProvider --\x3e Settings\nChatGPTViewProvider --\x3e AuthInfo\n`vscode.WebviewViewProvider` --\x3e vscode\nactivate ..> ChatGPTViewProvider"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Figure 1. VSCode Extension UML class diagram"),"\nRepresenting the current structure of the VSCode extension is a bit messy and difficult. However, it is worth it to highlight that extension.ts ",(0,o.kt)("inlineCode",{parentName:"p"},"activate()")," registers the view provider ",(0,o.kt)("inlineCode",{parentName:"p"},"ChatGPTViewProvider"),". The provider makes all of the calls to the ChatGPT library from the ",(0,o.kt)("inlineCode",{parentName:"p"},"search()")," function which also updates the ",(0,o.kt)("inlineCode",{parentName:"p"},"webview"),"."))}l.isMDXComponent=!0}}]);