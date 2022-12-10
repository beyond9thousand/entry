"use strict";(self.webpackChunkentry=self.webpackChunkentry||[]).push([[202],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2590:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={},i="Privacy tools",s={unversionedId:"guides/privacy-tools",id:"guides/privacy-tools",title:"Privacy tools",description:"Every individual should be able to uphold their right to privacy online, including but not limited to protection of personal data and respect for confidentiality. Personal data should only be processed or transferred to third parties with your informed consent with the clear and concise choice to opt out.",source:"@site/docs/guides/privacy-tools.mdx",sourceDirName:"guides",slug:"/guides/privacy-tools",permalink:"/entree/docs/guides/privacy-tools",draft:!1,tags:[],version:"current",lastUpdatedBy:"beyond9thousand",lastUpdatedAt:1670712910,formattedLastUpdatedAt:"Dec 10, 2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/entree/docs/category/guides"},next:{title:"Software",permalink:"/entree/docs/guides/software"}},l={},p=[{value:'<FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> Search Engines',id:"-search-engines",level:2},{value:'<FontAwesomeIcon icon="fa-solid fa-ban" /> Ad-blocking',id:"-ad-blocking",level:2},{value:'<FontAwesomeIcon icon="fa-solid fa-lock" /> Password manager',id:"-password-manager",level:2},{value:"Built-in cloud integration",id:"built-in-cloud-integration",level:3},{value:"Manual cloud integration",id:"manual-cloud-integration",level:3},{value:'<FontAwesomeIcon icon="fa-solid fa-fingerprint" /> Two-factor authentication',id:"-two-factor-authentication",level:2},{value:"TOTP applications",id:"totp-applications",level:3},{value:'<FontAwesomeIcon icon="fa-regular fa-envelope" /> Temporary email services',id:"-temporary-email-services",level:2}],d=(c="FontAwesomeIcon",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const u={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"privacy-tools"},"Privacy tools"),(0,r.kt)("p",null,"Every individual should be able to uphold their right to privacy online, including but not limited to protection of personal data and respect for confidentiality. Personal data should only be processed or transferred to third parties with your informed consent with the ",(0,r.kt)("strong",{parentName:"p"},"clear and concise choice")," to opt out."),(0,r.kt)("h2",{id:"-search-engines"},(0,r.kt)(d,{icon:"fa-solid fa-magnifying-glass",mdxType:"FontAwesomeIcon"})," Search Engines"),(0,r.kt)("p",null,"Popular search engines provided by proprietary companies are known for tracking user data and using this information to then throw targeted advertisements at the user. Using a good search engine is the difference between constant intrusion of privacy, favoring confirmation biases and an uncensored, non-intrusive, informative search experience."),(0,r.kt)("expand",{title:"Searx"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/searx/searx"},"Searx")," is a free and open-source metasearch engine that uses the ",(0,r.kt)("a",{parentName:"p",href:"https://www.gnu.org/licenses/agpl-3.0.en.html"},"GNU Affero General Public License version 3")," to protect its users' privacy.\nTo that end, Searx does not share users' IP addresses or search history with the search engines that provide results. Search engine tracking cookies are blocked, preventing user-profiling-based results modification."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Any user may run their own ",(0,r.kt)("a",{parentName:"p",href:"https://linuxreviews.org/Searx#What_it_is_and_isn.27t"},"instance")," of Searx to maximise privacy, avoid congestion on public instances, preserve customised settings even if browser cookies are cleared, allow auditing of the source code being run, and so on.")),(0,r.kt)("more",{link:"https://searx.space/"},"Explore publicly hosted Searx instances")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.startpage.com/"},"Startpage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://search.brave.com/"},"Brave Search")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://duckduckgo.com/"},"Duckduckgo")," ",(0,r.kt)("badge",{link:"https://9to5mac.com/2022/05/25/duckduckgo-privacy-microsoft-permission-tracking/",name:"warning"},"Controversial"))),(0,r.kt)("visit",{link:"https://searchengine.party/",header:"Compare search engines"},"Web page for comparing popular search engines across some privacy-centric data points."),(0,r.kt)("h2",{id:"-ad-blocking"},(0,r.kt)(d,{icon:"fa-solid fa-ban",mdxType:"FontAwesomeIcon"})," Ad-blocking"),(0,r.kt)("p",null,"Don't pretend that you love to see advertisements."),(0,r.kt)("tab",null,(0,r.kt)("tabitem",{value:"Android"},(0,r.kt)("expand",{title:"Private DNS"},(0,r.kt)("p",null,"Starting with android 9, you have the option of enabling seamless ad-block system wide. This is achieved using ",(0,r.kt)("a",{parentName:"p",href:"https://adguard.com/en/blog/adguard-dns-announcement.html"},"private DNS")," providers."),(0,r.kt)("p",null,"To enable ad-blocking through private DNS:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Settings > Network and Internet > Advanced > Private DNS")),(0,r.kt)("li",{parentName:"ul"},"Select the field for entering private DNS provider"),(0,r.kt)("li",{parentName:"ul"},"To use ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/AdGuard"},"AdGuard's")," resolver, copy and paste the following server address")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dns.adguard.com\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Save your settings and continue browsing")),(0,r.kt)("more",{link:"https://dnsprivacy.org/public_resolvers/#dns-over-tls-dot"},"Find more DNS providers"),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Advertisements shown inside major social media apps are an exception to this feature since they do not fall under consistent ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Ad_blocking#Hosts_file_and_DNS_manipulation"},"host names")," required for enforcing ad-blocking")))),(0,r.kt)("tabitem",{value:"PC"},(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Work in progress")))),(0,r.kt)("h2",{id:"-password-manager"},(0,r.kt)(d,{icon:"fa-solid fa-lock",mdxType:"FontAwesomeIcon"})," Password manager"),(0,r.kt)("p",null,"A password manager is a an application designed to store and manage online credentials. Passwords are generally stored in an encrypted database and locked behind a master password. Most applications also offer an in-built password generator. User created passwords are prone to ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Brute-force_attack"},"brute-force attacks")," and inconvenient to maintain across a large number of accounts."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Most modern browsers will also offer password generators and offer to save your login information. Google offers this on Android devices to make the experience more integrated. However, this should not be preferred over ",(0,r.kt)("a",{parentName:"p",href:"https://www.zdnet.com/article/is-it-ok-to-use-your-browsers-built-in-password-manager/"},"standalone solutions"))),(0,r.kt)("h3",{id:"built-in-cloud-integration"},"Built-in cloud integration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bitwarden.com/"},"Bitwarden")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://alternativeto.net/outgoing/software/lastpass"},"LastPass")," ",(0,r.kt)("badge",{name:"warning"},"Proprietary"))),(0,r.kt)("h3",{id:"manual-cloud-integration"},"Manual cloud integration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://keepassxc.org/"},"KeePassXC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.keepassdx.com/"},"KeepassDX")," ",(0,r.kt)("badge",{name:"primary"},"Android"))),(0,r.kt)("h2",{id:"-two-factor-authentication"},(0,r.kt)(d,{icon:"fa-solid fa-fingerprint",mdxType:"FontAwesomeIcon"})," Two-factor authentication"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Help:Two-factor_authentication"},"Two-factor authentication")," or ",(0,r.kt)("strong",{parentName:"p"},"2FA")," is a secondary code in addition to your account password. The code can either be a 6-digit ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/One-time_password"},"OTP")," shared with you through your registered phone number. It can also be periodically generated on your mobile device using a ",(0,r.kt)("a",{parentName:"p",href:"https://www.twilio.com/docs/glossary/totp"},"TOTP authenticator"),". A fallback method is usually provided known as ",(0,r.kt)("a",{parentName:"p",href:"https://support.authy.com/hc/en-us/articles/1260803525789-What-is-a-Recovery-or-Backup-Code-"},"backup codes")," in the event of loss of access to other, more preferable 2FA options."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Using private messaging services, including social media platforms without activating 2FA is extremely dangerous. You are practically asking to get ",(0,r.kt)("strong",{parentName:"p"},"hacked, impersonated and doxxed online.")," It is highly advised against turning-off 2FA for convenience purposes even for everyday general usage.")),(0,r.kt)("h3",{id:"totp-applications"},"TOTP applications"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/andOTP/andOTP"},"andOTP")," ",(0,r.kt)("badge",{link:"https://forum.xda-developers.com/t/app-4-4-open-source-andotp-open-source-two-factor-authentication-for-android.3636993/post-87021655",name:"secondary"},"Unmaintained")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/beemdevelopment/Aegis"},"Aegis"))),(0,r.kt)("h2",{id:"-temporary-email-services"},(0,r.kt)(d,{icon:"fa-regular fa-envelope",mdxType:"FontAwesomeIcon"})," Temporary email services"),(0,r.kt)("p",null,"Use a disposable email address instead of your work or personal account when unsure about signing up on a new service. An added benefit of using throaway email addresses is that you avoid ending up in random news mail letter subscriptions & other such annoyances."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://altaddress.org/"},"Alt Address")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.guerrillamail.com/"},"Guerilla Mail"))))}m.isMDXComponent=!0}}]);