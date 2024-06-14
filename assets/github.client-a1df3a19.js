var ce=Object.defineProperty;var de=(e,t,r)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var g=(e,t,r)=>(de(e,typeof t!="symbol"?t+"":t,r),r);import{g as B,i as R,p as X,t as D,I as fe,a as T,f as he,D as v,u as me,b as Y,d as m,c as pe,o as l,e as ge,h as ve,T as ye,j as Se,k as C,l as Re,m as z,n as Ee,P as y,S as Pe,q as S,r as G,s as k,v as Ae,w as A,x as Te,y as Ce,z as ee,A as Ue,B as te,C as be,G as we,E as De,F as Ie,H as Ne,J as qe,K as Me,L as Oe,M as Fe,N as Le}from"./index-b5de057b.js";import{l as Ve}from"./index-f4dd668f.js";function je(e,t){let r=!1;const s=B(e).reduce((o,a)=>{const n=t(a,e[a],e);return n instanceof Promise&&(r=!0),{...o,[a]:n}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(B(s).map(async n=>{const i=await s[n];s[n]=i})),o(s)}catch(n){a(n)}}):s}function re(e,t){try{return xe(e,t),!0}catch{return!1}}function xe(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function se(...e){if(!re(e,1))return{};if(e.length===1)return e[0];let t;const r={};return e.forEach(s=>{if(R(s,"object"))R(t,"object")||(t={...s});else{t=s;return}Object.entries(s).forEach(([o,a])=>{r[o]||(r[o]=[]),r[o].push(a)})}),R(t,"object")&&Object.entries(r).forEach(([s,o])=>{const a=se(...o);a===void 0&&s in t?delete t[s]:a!==void 0&&(t[s]=a)}),t}const $e=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Qe(e,t){return e?$e.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Be(e){return!!e}function ae(e,t){return X(D(e).plus(t))}function ze(e){if(!fe.isValidIANAZone(e))throw new Error(`'${e}' is not a valid time zone`)}function He(e){T(e,he),ze(e.timezone),D(e)}function We(e){try{return He(e),!0}catch{return!1}}function E(e){return ne(e,Y)}function ne(e,t){const r=Ke(e,t);if(!r||!r.isValid)throw new Error(`Failed to parse date input '${e}'`);return X(r,t)}function H(e){const t=v.fromJSDate(new Date(e));if(t.isValid)return t}function Ke(e,t){if(We(e)&&(e=D(e).toMillis()),v.isDateTime(e))return e.setZone(t);if(R(e,"number"))return v.fromMillis(e,{zone:me}).setZone(t);if(R(e,"string")){const r=v.fromISO(e,{zone:t});return r.isValid?r:H(e)}else if(e instanceof Date)return v.fromJSDate(e).setZone(t);return H(e)}function Je(e){return ne(Date.now(),e)}function oe(){return Je(Y)}function Ze(e){return[String(Math.abs(e.year)).padStart(4,"0"),String(Math.abs(e.month)).padStart(2,"0"),String(Math.abs(e.day)).padStart(2,"0")].join("-")}function _e(e,t){const r=Qe(e,"second")&&t?String(Math.abs(e.second)).padStart(2,"0"):void 0;return[String(Math.abs(e.hour)).padStart(2,"0"),String(Math.abs(e.minute)).padStart(2,"0"),r].filter(Be).join(":")}function Xe(e,t){return{date:Ze(e),time:_e(e,t.includeSeconds),timezone:e.timezone}}const Ye=m({user:pe,pullRequests:[l(ve,ge(Error))]},!0);class Ge extends ye{}const ie=m({extensions:Se(),locations:[{line:0,column:0}],message:"",path:[l("",0)],type:l("",void 0)});function W(e,t){return e+t}var ue=(e=>(e.ActionRequired="ACTION_REQUIRED",e.Cancelled="CANCELLED",e.Completed="COMPLETED",e.Failure="FAILURE",e.InProgress="IN_PROGRESS",e.Neutral="NEUTRAL",e.Pending="PENDING",e.Queued="QUEUED",e.Skipped="SKIPPED",e.Stale="STALE",e.StartupFailure="STARTUP_FAILURE",e.Success="SUCCESS",e.TimedOut="TIMED_OUT",e.Waiting="WAITING",e))(ue||{}),P=(e=>(e.Approved="APPROVED",e.Pending="PENDING",e.Commented="COMMENTED",e.ChangesRequested="CHANGES_REQUESTED",e.Dismissed="DISMISSED",e))(P||{}),I=(e=>(e.Mergeable="MERGEABLE",e.Conflicting="CONFLICTING",e.Unknown="UNKNOWN",e))(I||{});const ke=["ACTION_REQUIRED","CANCELLED","FAILURE","STALE","STARTUP_FAILURE","TIMED_OUT"],et=["COMPLETED","NEUTRAL","SKIPPED","SUCCESS"],tt=["IN_PROGRESS","PENDING","QUEUED","WAITING"],d=m({login:"",avatarUrl:l(void 0,""),teamAvatarUrl:l(void 0,""),url:""},!0),rt=m({state:C(P),author:d,submittedAt:""},!0),st=m({additions:0,assignees:{nodes:[d]},author:d,baseRef:l(null,{name:"",target:{oid:""}}),bodyText:"",mergeable:C(I),headRef:l(null,{name:"",target:{oid:""}}),labels:l(null,{nodes:[{name:"",color:""}]}),baseRepository:{name:"",owner:d,isArchived:!1,isPrivate:!1,url:""},headRepository:{name:"",owner:d,isArchived:!1,isPrivate:!1,url:""},changedFiles:0,closedAt:l(null,""),commits:{nodes:[l(null,{commit:{statusCheckRollup:l(null,{contexts:{checkRunCountsByState:[{count:0,state:C(ue)}]}})}})],totalCount:0},createdAt:"",deletions:0,id:"",isDraft:!1,mergedAt:l(null,""),mergedBy:l(null,d),number:0,reviewThreads:{nodes:[{isResolved:!1}]},latestOpinionatedReviews:{nodes:[rt]},reviewRequests:{nodes:[{requestedReviewer:d}]},title:"",updatedAt:"",url:""},!0),at=m({errors:l(void 0,[ie]),data:{rateLimit:{cost:1,limit:5e3,nodeCount:0,remaining:0,resetAt:"",used:0},viewer:d,search:{issueCount:0,pageInfo:{endCursor:l("",null),hasNextPage:!1},nodes:[st]}}},!0),nt=`
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
                    bodyText
                    isDraft
                    title
                    author {
                        login
                        avatarUrl
                        url
                    }
                    url
                    mergeable
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
                    labels(first: 100) {
                        nodes {
                            color
                            name
                        }
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
                    reviewThreads(first: 100) {
                        nodes {
                            isResolved
                        }
                    }
                    latestOpinionatedReviews(first: 10) {
                        nodes {
                            author {
                                login
                                avatarUrl
                                url
                            }
                            submittedAt
                            state
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
`;var U=(e=>(e.OpenPullRequests="open-pull-requests",e.ClosedPullRequests="closed-pull-requests",e))(U||{});function ot(e){if(!e.filter.onlyMyself&&!e.filter.org)throw new Error("Github query too broad: must filter to self or an org")}const it={"open-pull-requests"(e){var r,s;return["is:open","type:pr","archived:false",((r=e.filter)==null?void 0:r.onlyMyself)&&"involves:@me",((s=e.filter)==null?void 0:s.org)&&`org:${e.filter.org}`].filter(z).join(" ")},"closed-pull-requests"(e){var o,a;const t=ae(oe(),{weeks:-1});return["is:closed","type:pr","archived:false",`closed:>=${Xe(t,{includeSeconds:!1}).date}`,((o=e.filter)==null?void 0:o.onlyMyself)&&"involves:@me",((a=e.filter)==null?void 0:a.org)&&`org:${e.filter.org}`].filter(z).join(" ")}};function ut(e,t,r,s){return ot(r),{query:lt[e],variables:{searchQuery:it[t](r),afterCursor:s||null}}}var b=(e=>(e.PullRequest="pull-request",e))(b||{});const lt={"pull-request":nt},ct=je({"pull-request":at},(e,t)=>m(Re(t,{authTokenName:""}),!0)),dt={"pull-request"(e){return{totalItemCount:e.data.search.issueCount,nextPageCursor:e.data.search.pageInfo.hasNextPage&&e.data.search.pageInfo.endCursor||void 0}}},ft={"pull-request"(e){const t=e.slice(-1)[0];return{authTokenName:t.authTokenName,errors:e.flatMap(r=>r.errors??[]),data:{rateLimit:{...t.data.rateLimit,cost:e.map(r=>r.data.rateLimit.cost).reduce(W),nodeCount:e.map(r=>r.data.rateLimit.nodeCount).reduce(W)},viewer:t.data.viewer,search:{issueCount:t.data.search.issueCount,pageInfo:t.data.search.pageInfo,nodes:e.flatMap(r=>r.data.search.nodes)}}}}};async function K(e,t,r,s){try{let o;const a=[];do{const n=ut(e,t,r,o),u=await(await fetch("https://api.github.com/graphql",{method:"post",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`bearer ${s.authTokenSecret}`},body:JSON.stringify(n)})).json();u.authTokenName=s.authTokenName,u.errors&&u.errors.forEach(p=>{T(p,ie)});try{T(u,ct[e])}catch(p){throw console.info(u),p}const c=dt[e](u);if(o=c.nextPageCursor,a.push(u),c.totalItemCount>1e3)throw new Error(`Search too broad: got '${c.totalItemCount}' items.`)}while(o);if(!re(a,1))throw new Error("No data received from GitHub.");return ft[e](a)}catch(o){const a=Ee(o,`Failed to fetch data for token '${s.authTokenName}'.`);return console.error(a),a}}function ht(e,t){return e.match(t)??[]}var J;(function(e){e.Upper="upper",e.Lower="lower"})(J||(J={}));var Z;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Z||(Z={}));function mt(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}mt();function pt({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function gt({bodyText:e}){const[,t]=ht(e,/primary reviewers?((?:[^@]*@[\w\-_\d]+(?:[\s\n]|$))+)/i);return t?Array.from(t.matchAll(/@[\w\-\d]+/g)).map(s=>pt({value:s[0],prefix:"@"})):[]}function vt(e,t,r,s){var N,q,M,O,F,L,V,j,x,$;const o={closed:t.closedAt?E(t.closedAt):void 0,created:E(t.createdAt),lastUpdated:E(t.updatedAt)},a=t.assignees.nodes.map(f),n=[f(t.author)],i=gt(t),u={assignees:le(a.length?a:n),reviewers:Rt(i,t)},c=t.mergedAt?y.Merged:t.closedAt?y.Rejected:t.isDraft?y.Draft:y.Open;return{auth:{client:Pe.Github,tokenName:e},branches:{headBranch:{branchName:((N=t.headRef)==null?void 0:N.name)||new Error("Missing 'Contents' read permissions."),headCommitHash:((M=(q=t.headRef)==null?void 0:q.target)==null?void 0:M.oid)||new Error("Missing 'Contents' read permissions."),repo:{isArchived:t.headRepository.isArchived,isPrivate:t.headRepository.isPrivate,htmlUrl:t.headRepository.url,repoName:t.headRepository.name,repoOwner:f(t.headRepository.owner)}},targetBranch:{branchName:((O=t.baseRef)==null?void 0:O.name)||new Error("Missing 'Contents' read permissions."),headCommitHash:((L=(F=t.baseRef)==null?void 0:F.target)==null?void 0:L.oid)||new Error("Missing 'Contents' read permissions."),repo:{isArchived:t.baseRepository.isArchived,isPrivate:t.baseRepository.isPrivate,htmlUrl:t.baseRepository.url,repoName:t.baseRepository.name,repoOwner:f(t.baseRepository.owner)}}},changes:{additions:t.additions,deletions:t.deletions,changedFiles:t.changedFiles},dates:o,id:{htmlUrl:t.url,prId:t.id,prNumber:String(t.number),title:t.title,owner:f(t.baseRepository.owner)},status:{checksStatus:Et(($=(x=(j=(V=t.commits.nodes[0])==null?void 0:V.commit)==null?void 0:j.statusCheckRollup)==null?void 0:x.contexts)==null?void 0:$.checkRunCountsByState),comments:yt(t.reviewThreads.nodes),commitCount:t.commits.totalCount,mergeStatus:c,mergedBy:t.mergedBy?f(t.mergedBy):void 0,needsReviewFromCurrentUser:St(c,r,u),userIsPrimaryReviewer:i.includes(r.username),hasMergeConflicts:t.mergeable===I.Conflicting,labels:t.labels?t.labels.nodes.map(Q=>({...Q,color:`#${Q.color}`})):[]},users:u,cost:s,raw:t}}function yt(e){return e.reduce((t,r)=>(r.isResolved&&t.resolved++,t.total++,t),{resolved:0,total:0})}function St(e,t,r){var s;return e===y.Open&&((s=r.reviewers[t.username])==null?void 0:s.reviewStatus)===S.Pending&&!(t.username in r.assignees)}function Rt(e,t){const r=le(t.reviewRequests.nodes.map(a=>f(a.requestedReviewer))),s=G(t.latestOpinionatedReviews.nodes,a=>a.author.login),o=Array.from(new Set([...Object.keys(r),...Object.keys(s)]));return k(o.map(a=>{var u,c,p;const n=r[a]||((u=s[a])==null?void 0:u.author);if(!n)throw new Error(`Failed to find user '${a}'`);const i=Ae(r,a)?S.Pending:((c=s[a])==null?void 0:c.state)===P.Approved?S.Accepted:((p=s[a])==null?void 0:p.state)===P.ChangesRequested?S.Rejected:S.Pending;return[a,{user:{avatarUrl:n.avatarUrl||"",profileUrl:n.avatarUrl||"",username:a},isPrimaryReviewer:e.includes(a),reviewStatus:i}]}))}function Et(e){return e?e.reduce((r,s)=>(A(ke,s.state)?r.failCount+=s.count:A(tt,s.state)?r.inProgressCount+=s.count:A(et,s.state)&&(r.successCount+=s.count),r.totalCount++,r),{successCount:0,failCount:0,inProgressCount:0,totalCount:0}):new Error("Missing 'Contents' or 'Commit statuses' read permissions.")}function f(e){return{avatarUrl:e.teamAvatarUrl||e.avatarUrl||"",profileUrl:e.url,username:e.login}}function le(e){return G(e,t=>t.username)}let _=!1;async function Pt(e){if(_)throw new Error("Refusing to fetch because GraphQL query cost is too high.");const t=await Promise.allSettled(e.flatMap(n=>[K(b.PullRequest,U.OpenPullRequests,{filter:{onlyMyself:!0}},n),K(b.PullRequest,U.ClosedPullRequests,{filter:{onlyMyself:!0}},n)]));let r;const s=t.flatMap(n=>{if(n.status==="fulfilled"){const i=n.value;if(Te(i))return[i];if(i.data.rateLimit.cost>1)throw _=!0,new Error("GraphQL query cost is too high.");return r||(r=f(i.data.viewer)),i.data.search.nodes.map(u=>(Ce(r),vt(i.authTokenName,u,r,i.data.rateLimit)))}else return[ee(n.reason)]}),o=k(s.map(n=>n instanceof Error?[Ue(32),n]:[n.id.prId,n])),a=Object.values(o).sort((n,i)=>{if(n instanceof Error&&i instanceof Error){const u=n.name.localeCompare(i.name);return u||n.message.localeCompare(i.message)}else return n instanceof Error?-1:i instanceof Error||te({fullDate:n.dates.created,relativeTo:i.dates.created})?1:-1});if(!r)throw new Error("User was never parsed from the GitHub GraphQL response.");return{pullRequests:a,user:r}}const At={updateInterval:{seconds:10},cacheTimeout:{minutes:5}},Tt=m({timestamp:0,data:Ye},!0),h=class h extends Ge{constructor(r,s){super();g(this,"value");g(this,"lastResolvedValue");g(this,"options",At);this.authTokens=r,s&&this.overrideOptions(s),this.setPromiseValue(this.loadCachedValue()),this.scheduleFutureUpdate()}async saveCache(r){await h.cacheStore.setItem(h.cacheKey,{timestamp:Date.now(),data:r})}async loadCachedValue(){const r=await h.cacheStore.getItem(h.cacheKey);return be(r,Tt)?(te({fullDate:oe(),relativeTo:ae(E(r.timestamp),this.options.cacheTimeout)})?this.setUpdatedValue(!0):setTimeout(()=>this.setUpdatedValue(!0)),r.data):this.fetchData()}setPromiseValue(r){this.dispatch(new we({detail:r})),this.value=r,r.then(s=>{this.dispatch(new De({detail:s})),this.value=s,Ie(this.lastResolvedValue,s)||(this.dispatch(new Ne({detail:s})),this.lastResolvedValue=s,this.saveCache(s))}).catch(s=>{this.dispatch(new qe({detail:ee(s)}))})}overrideOptions(r){r&&(this.options=se(this.options,r))}async fetchData(){return await Pt(this.authTokens)}scheduleFutureUpdate(){globalThis.setTimeout(()=>{this.setUpdatedValue(!1)},Me(this.options.updateInterval,Oe.Milliseconds).milliseconds)}async setUpdatedValue(r){if(this.scheduleFutureUpdate(),!r&&Fe(this.value))return this.value;const s=this.fetchData();return this.setPromiseValue(s),await s}};g(h,"cacheStore",Ve.createInstance({description:"github client cache for review-vir",name:"review-vir-github-cache",storeName:"review-vir-github-cache"})),g(h,"cacheKey","value");let w=h;const wt=Le({init(e){return new w(e)}});export{w as GithubClient,wt as githubClient};
