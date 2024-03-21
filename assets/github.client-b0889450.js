var se=Object.defineProperty;var ae=(e,t,r)=>t in e?se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var v=(e,t,r)=>(ae(e,typeof t!="symbol"?t+"":t,r),r);import{A as ne,g as j,i as h,p as K,t as b,I as oe,a as A,f as ie,D as y,u as ue,b as H,d as p,c as le,o as l,e as ce,h as de,j as fe,k as V,l as me,m as C,n as he,P as S,S as pe,q as ge,r as J,s as P,v as $,w as ve,x as Z,y as ye,z as Se,B as W,C as Re,G as Ee,E as Pe,F as Ae,H as Ce,J as Ue,K as Te,L as De,M as be,N as Ie}from"./index-a007312d.js";import{l as we}from"./index-f4dd668f.js";function Ne(e,t){if(e==null)throw new ne(t||"defined assertion failed")}function Me(e,t){let r=!1;const s=j(e).reduce((a,n)=>{const o=t(n,e[n],e);return o instanceof Promise&&(r=!0),{...a,[n]:o}},{});return r?new Promise(async(a,n)=>{try{await Promise.all(j(s).map(async o=>{const i=await s[o];s[o]=i})),a(s)}catch(o){n(o)}}):s}function _(e,t){try{return qe(e,t),!0}catch{return!1}}function qe(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function X(...e){if(!_(e,1))return{};if(e.length===1)return e[0];let t;const r={};return e.forEach(s=>{if(h(s,"object"))h(t,"object")||(t={...s});else{t=s;return}Object.entries(s).forEach(([a,n])=>{r[a]||(r[a]=[]),r[a].push(n)})}),h(t,"object")&&Object.entries(r).forEach(([s,a])=>{const n=X(...a);n===void 0&&s in t?delete t[s]:n!==void 0&&(t[s]=n)}),t}const Oe=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Le(e,t){return e?Oe.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Fe(e){return!!e}function Y(e,t){return K(b(e).plus(t))}function je(e){if(!oe.isValidIANAZone(e))throw new Error(`'${e}' is not a valid time zone`)}function Ve(e){A(e,ie),je(e.timezone),b(e)}function $e(e){try{return Ve(e),!0}catch{return!1}}function R(e){return G(e,H)}function G(e,t){const r=xe(e,t);if(!r||!r.isValid)throw new Error(`Failed to parse date input '${e}'`);return K(r,t)}function x(e){const t=y.fromJSDate(new Date(e));if(t.isValid)return t}function xe(e,t){if($e(e)&&(e=b(e).toMillis()),y.isDateTime(e))return e.setZone(t);if(h(e,"number"))return y.fromMillis(e,{zone:ue}).setZone(t);if(h(e,"string")){const r=y.fromISO(e,{zone:t});return r.isValid?r:x(e)}else if(e instanceof Date)return y.fromJSDate(e).setZone(t);return x(e)}function Be(e){return G(Date.now(),e)}function k(){return Be(H)}function Qe(e){return[String(Math.abs(e.year)).padStart(4,"0"),String(Math.abs(e.month)).padStart(2,"0"),String(Math.abs(e.day)).padStart(2,"0")].join("-")}function ze(e,t){const r=Le(e,"second")&&t?String(Math.abs(e.second)).padStart(2,"0"):void 0;return[String(Math.abs(e.hour)).padStart(2,"0"),String(Math.abs(e.minute)).padStart(2,"0"),r].filter(Fe).join(":")}function Ke(e,t){return{date:Qe(e),time:ze(e,t.includeSeconds),timezone:e.timezone}}function He(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function B(e){return He(e).map(t=>e[t])}class Je{constructor(){Object.defineProperty(this,"listeners",{enumerable:!0,configurable:!0,writable:!0,value:{}})}getListenerCount(){return B(this.listeners).map(r=>(r==null?void 0:r.size)||0).reduce((r,s)=>r+s,0)}listen(t,r,s={}){const a=this.listeners,n=h(t,"string")?t:t.type;function o(){var u;return((u=a[n])==null?void 0:u.delete(r))||!1}function i(u,d){s.once&&o(),r(u,d)}return a[n]||(a[n]=new Map),a[n].set(r,{listener:i,removeListener:o}),o}removeListener(t,r){const s=h(t,"string")?t:t.type,a=this.listeners[s];if(!a)return!1;const n=a.get(r);return n?n.removeListener():!1}dispatch(t){const r=this.listeners[t.type],s=(r==null?void 0:r.size)||0;return r==null||r.forEach(a=>{a.listener(t,a.removeListener)}),s}removeAllListeners(){const r=B(this.listeners).reduce((s,a)=>{const n=(a==null?void 0:a.size)||0;return a==null||a.clear(),s+n},0);return this.listeners={},r}destroy(){this.removeAllListeners()}}const Ze=p({user:le,pullRequests:[l(de,ce(Error))]},!0);class We extends Je{}const ee=p({extensions:fe(),locations:[{line:0,column:0}],message:"",path:[l("",0)],type:""});function Q(e,t){return e+t}var te=(e=>(e.ActionRequired="ACTION_REQUIRED",e.Cancelled="CANCELLED",e.Completed="COMPLETED",e.Failure="FAILURE",e.InProgress="IN_PROGRESS",e.Neutral="NEUTRAL",e.Pending="PENDING",e.Queued="QUEUED",e.Skipped="SKIPPED",e.Stale="STALE",e.StartupFailure="STARTUP_FAILURE",e.Success="SUCCESS",e.TimedOut="TIMED_OUT",e.Waiting="WAITING",e))(te||{}),E=(e=>(e.Approved="APPROVED",e.Pending="PENDING",e.Commented="COMMENTED",e.ChangesRequested="CHANGES_REQUESTED",e.Dismissed="DISMISSED",e))(E||{});const _e=["ACTION_REQUIRED","CANCELLED","FAILURE","STALE","STARTUP_FAILURE","TIMED_OUT"],Xe=["COMPLETED","NEUTRAL","SKIPPED","SUCCESS"],Ye=["IN_PROGRESS","PENDING","QUEUED","WAITING"],f=p({login:"",avatarUrl:l(void 0,""),teamAvatarUrl:l(void 0,""),url:""},!0),Ge=p({additions:0,assignees:{nodes:[f]},author:f,baseRef:l(null,{name:"",target:{oid:""}}),headRef:l(null,{name:"",target:{oid:""}}),baseRepository:{name:"",owner:f,isArchived:!1,isPrivate:!1,url:""},headRepository:{name:"",owner:f,isArchived:!1,isPrivate:!1,url:""},changedFiles:0,closedAt:l(null,""),commits:{nodes:[l(null,{commit:{statusCheckRollup:l(null,{contexts:{checkRunCountsByState:[{count:0,state:V(te)}]}})}})],totalCount:0},createdAt:"",deletions:0,id:"",isDraft:!1,mergedAt:l(null,""),mergedBy:l(null,f),number:0,latestOpinionatedReviews:{nodes:[{state:V(E),author:f}]},reviewRequests:{nodes:[{requestedReviewer:f}]},title:"",totalCommentsCount:0,updatedAt:"",url:""},!0),ke=p({errors:l(void 0,[ee]),data:{rateLimit:{cost:1,limit:5e3,nodeCount:0,remaining:0,resetAt:"",used:0},viewer:f,search:{issueCount:0,pageInfo:{endCursor:l("",null),hasNextPage:!1},nodes:[Ge]}}},!0),et=`
    query ($searchQuery: String!, $afterCursor: String) {
        rateLimit {
            cost
            limit
            nodeCount
            remaining
            resetAt
            used
        }
        viewer {
            avatarUrl
            login
            url
        }
        # first 99 = cost of 1
        # first 100 = cost of 3
        # (so use 99)
        search(first: 99, after: $afterCursor, query: $searchQuery, type: ISSUE) {
            pageInfo {
                endCursor
                hasNextPage
            }
            issueCount
            nodes {
                ... on PullRequest {
                    number
                    id
                    isDraft
                    title
                    author {
                        login
                        avatarUrl
                        url
                    }
                    url
                    headRepository {
                        name
                        owner {
                            login
                            avatarUrl
                            url
                        }
                        isArchived
                        url
                        isPrivate
                    }
                    baseRepository {
                        name
                        owner {
                            login
                            avatarUrl
                            url
                        }
                        isArchived
                        url
                        isPrivate
                    }
                    createdAt
                    updatedAt
                    closedAt
                    mergedAt
                    mergedBy {
                        login
                        avatarUrl
                        url
                    }
                    totalCommentsCount
                    baseRef {
                        target {
                            oid
                        }
                        name
                    }
                    headRef {
                        target {
                            oid
                        }
                        name
                    }
                    commits(last: 1) {
                        totalCount
                        nodes {
                            commit {
                                statusCheckRollup {
                                    contexts {
                                        checkRunCountsByState {
                                            count
                                            state
                                        }
                                    }
                                }
                            }
                        }
                    }
                    additions
                    deletions
                    changedFiles
                    assignees(first: 10) {
                        nodes {
                            login
                            avatarUrl
                            url
                        }
                    }
                    latestOpinionatedReviews(first: 10) {
                        nodes {
                            state
                            author {
                                login
                                avatarUrl
                                url
                            }
                        }
                    }
                    reviewRequests(first: 10) {
                        nodes {
                            requestedReviewer {
                                ... on User {
                                    login
                                    avatarUrl
                                    url
                                }
                                ... on Bot {
                                    login
                                    avatarUrl
                                    url
                                }
                                ... on Team {
                                    name
                                    teamAvatarUrl: avatarUrl
                                    url
                                }
                                ... on Mannequin {
                                    login
                                    avatarUrl
                                    url
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;var U=(e=>(e.OpenPullRequests="open-pull-requests",e.ClosedPullRequests="closed-pull-requests",e))(U||{});function tt(e){if(!e.filter.onlyMyself&&!e.filter.org)throw new Error("Github query too broad: must filter to self or an org")}const rt={"open-pull-requests"(e){var r,s;return["is:open","type:pr","archived:false",((r=e.filter)==null?void 0:r.onlyMyself)&&"involves:@me",((s=e.filter)==null?void 0:s.org)&&`org:${e.filter.org}`].filter(C).join(" ")},"closed-pull-requests"(e){var a,n;const t=Y(k(),{weeks:-1});return["is:closed","type:pr","archived:false",`closed:>=${Ke(t,{includeSeconds:!1}).date}`,((a=e.filter)==null?void 0:a.onlyMyself)&&"involves:@me",((n=e.filter)==null?void 0:n.org)&&`org:${e.filter.org}`].filter(C).join(" ")}};function st(e,t,r,s){return tt(r),{query:at[e],variables:{searchQuery:rt[t](r),afterCursor:s||null}}}var T=(e=>(e.PullRequest="pull-request",e))(T||{});const at={"pull-request":et},nt=Me({"pull-request":ke},(e,t)=>p(me(t,{authTokenName:""}),!0)),ot={"pull-request"(e){return{totalItemCount:e.data.search.issueCount,nextPageCursor:e.data.search.pageInfo.hasNextPage&&e.data.search.pageInfo.endCursor||void 0}}},it={"pull-request"(e){const t=e.slice(-1)[0];return{authTokenName:t.authTokenName,errors:e.flatMap(r=>r.errors??[]),data:{rateLimit:{...t.data.rateLimit,cost:e.map(r=>r.data.rateLimit.cost).reduce(Q),nodeCount:e.map(r=>r.data.rateLimit.nodeCount).reduce(Q)},viewer:t.data.viewer,search:{issueCount:t.data.search.issueCount,pageInfo:t.data.search.pageInfo,nodes:e.flatMap(r=>r.data.search.nodes)}}}}};async function z(e,t,r,s){try{let a;const n=[];do{const o=st(e,t,r,a),u=await(await fetch("https://api.github.com/graphql",{method:"post",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`bearer ${s.authTokenSecret}`},body:JSON.stringify(o)})).json();u.authTokenName=s.authTokenName,u.errors&&u.errors.forEach(g=>{A(g,ee)});try{A(u,nt[e])}catch(g){throw console.info(u),g}const d=ot[e](u);if(a=d.nextPageCursor,n.push(u),d.totalItemCount>1e3)throw new Error(`Search too broad: got '${d.totalItemCount}' items.`)}while(a);if(!_(n,1))throw new Error("No data received from GitHub.");return it[e](n)}catch(a){const n=he(a,`Failed to fetch data for token '${s.authTokenName}'.`);return console.error(n),n}}function ut(e,t,r){var d,g,I,w,N,M,q,O,L,F;const s={closed:t.closedAt?R(t.closedAt):void 0,created:R(t.createdAt),lastUpdated:R(t.updatedAt)},a=t.assignees.nodes.map(c),n=[c(t.author)],o={assignees:re(a.length?a:n),reviewers:ct(t)},i=t.mergedAt?S.Merged:t.closedAt?S.Rejected:t.isDraft?S.Draft:S.Open;return{auth:{client:pe.Github,tokenName:e},branches:{headBranch:{branchName:((d=t.headRef)==null?void 0:d.name)||new Error("Missing 'Contents' read permissions."),headCommitHash:((I=(g=t.headRef)==null?void 0:g.target)==null?void 0:I.oid)||new Error("Missing 'Contents' read permissions."),repo:{isArchived:t.headRepository.isArchived,isPrivate:t.headRepository.isPrivate,htmlUrl:t.headRepository.url,repoName:t.headRepository.name,repoOwner:c(t.headRepository.owner)}},targetBranch:{branchName:((w=t.baseRef)==null?void 0:w.name)||new Error("Missing 'Contents' read permissions."),headCommitHash:((M=(N=t.baseRef)==null?void 0:N.target)==null?void 0:M.oid)||new Error("Missing 'Contents' read permissions."),repo:{isArchived:t.baseRepository.isArchived,isPrivate:t.baseRepository.isPrivate,htmlUrl:t.baseRepository.url,repoName:t.baseRepository.name,repoOwner:c(t.baseRepository.owner)}}},changes:{additions:t.additions,deletions:t.deletions,changedFiles:t.changedFiles},dates:s,id:{htmlUrl:t.url,prId:t.id,prNumber:String(t.number),title:t.title,owner:c(t.baseRepository.owner)},status:{checksStatus:dt((F=(L=(O=(q=t.commits.nodes[0])==null?void 0:q.commit)==null?void 0:O.statusCheckRollup)==null?void 0:L.contexts)==null?void 0:F.checkRunCountsByState),commentCount:t.totalCommentsCount,commitCount:t.commits.totalCount,mergeStatus:i,mergedBy:t.mergedBy?c(t.mergedBy):void 0,needsReviewFromCurrentUser:lt(i,r,o)},users:o}}function lt(e,t,r){return e===S.Open&&(t.username in r.reviewers.pending||!(t.username in r.reviewers.submitted))&&!(t.username in r.assignees)}function ct(e){const t=re(e.reviewRequests.nodes.map(s=>c(s.requestedReviewer))),r=ge(e.latestOpinionatedReviews.nodes,s=>{const a=c(s.author);if(a.username in t)return;const n=s.state===E.Approved?$.Accepted:s.state===E.ChangesRequested?$.Rejected:void 0;if(n)return{user:a,reviewStatus:n};t[a.username]=a},C);return{pending:t,submitted:J(r,s=>s.user.username)}}function dt(e){return e?e.reduce((r,s)=>(P(_e,s.state)?r.failCount+=s.count:P(Ye,s.state)?r.inProgressCount+=s.count:P(Xe,s.state)&&(r.successCount+=s.count),r.totalCount++,r),{successCount:0,failCount:0,inProgressCount:0,totalCount:0}):new Error("Missing 'Contents' or 'Commit statuses' read permissions.")}function c(e){return{avatarUrl:e.teamAvatarUrl||e.avatarUrl||"",profileUrl:e.url,username:e.login}}function re(e){return J(e,t=>t.username)}async function ft(e){const t=await Promise.allSettled(e.flatMap(o=>[z(T.PullRequest,U.OpenPullRequests,{filter:{onlyMyself:!0}},o),z(T.PullRequest,U.ClosedPullRequests,{filter:{onlyMyself:!0}},o)]));let r;const s=t.flatMap(o=>{if(o.status==="fulfilled"){const i=o.value;return ve(i)?[i]:(r||(r=c(i.data.viewer)),i.data.search.nodes.map(u=>(Ne(r),ut(i.authTokenName,u,r))))}else return[Z(o.reason)]}),a=ye(s.map(o=>o instanceof Error?[Se(32),o]:[o.id.prId,o])),n=Object.values(a).sort((o,i)=>{if(o instanceof Error&&i instanceof Error){const u=o.name.localeCompare(i.name);return u||o.message.localeCompare(i.message)}else return o instanceof Error?-1:i instanceof Error||W({fullDate:o.dates.created,relativeTo:i.dates.created})?1:-1});if(!r)throw new Error("User was never parsed from the GitHub GraphQL response.");return{pullRequests:n,user:r}}const mt={updateInterval:{seconds:10},cacheTimeout:{minutes:5}},ht=p({timestamp:0,data:Ze},!0),m=class m extends We{constructor(r,s){super();v(this,"value");v(this,"lastResolvedValue");v(this,"options",mt);this.authTokens=r,s&&this.overrideOptions(s),this.setPromiseValue(this.loadCachedValue()),this.scheduleFutureUpdate()}async saveCache(r){await m.cacheStore.setItem(m.cacheKey,{timestamp:Date.now(),data:r})}async loadCachedValue(){const r=await m.cacheStore.getItem(m.cacheKey);return Re(r,ht)?(W({fullDate:k(),relativeTo:Y(R(r.timestamp),this.options.cacheTimeout)})?this.setUpdatedValue(!0):setTimeout(()=>this.setUpdatedValue(!0)),r.data):this.fetchData()}setPromiseValue(r){this.dispatch(new Ee({detail:r})),this.value=r,r.then(s=>{this.dispatch(new Pe({detail:s})),this.value=s,Ae(this.lastResolvedValue,s)||(this.dispatch(new Ce({detail:s})),this.lastResolvedValue=s,this.saveCache(s))}).catch(s=>{this.dispatch(new Ue({detail:Z(s)}))})}overrideOptions(r){r&&(this.options=X(this.options,r))}async fetchData(){return await ft(this.authTokens)}scheduleFutureUpdate(){globalThis.setTimeout(()=>{this.setUpdatedValue(!1)},Te(this.options.updateInterval,De.Milliseconds).milliseconds)}async setUpdatedValue(r){if(this.scheduleFutureUpdate(),!r&&be(this.value))return this.value;const s=this.fetchData();return this.setPromiseValue(s),await s}};v(m,"cacheStore",we.createInstance({description:"github client cache for review-vir",name:"review-vir-github-cache",storeName:"review-vir-github-cache"})),v(m,"cacheKey","value");let D=m;const yt=Ie({init(e){return new D(e)}});export{D as GithubClient,yt as githubClient};
