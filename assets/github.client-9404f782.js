var le=Object.defineProperty;var ce=(e,t,r)=>t in e?le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var g=(e,t,r)=>(ce(e,typeof t!="symbol"?t+"":t,r),r);import{A as de,i as _,a as R,p as X,t as I,I as fe,b as T,f as he,D as v,u as me,c as Y,d as pe,e as C,g as m,h as ge,o as l,j as ve,k as ye,T as Se,l as Re,m as U,n as Ee,q as Pe,r as Ae,P as y,S as Te,s as S,v as G,w as k,x as Ce,y as A,z as Ue,B as ee,C as be,E as te,F as De,G as we,H as Ie,J as Ne,K as qe,L as Me,M as Oe,N as Fe,O as Le,Q as je}from"./index-a83aa312.js";import{l as Ve}from"./index-f4dd668f.js";function xe(e,t){if(e==null)throw new de(t||"defined assertion failed")}function re(...e){if(!_(e,1))return{};if(e.length===1)return e[0];let t;const r={};return e.forEach(s=>{if(R(s,"object"))R(t,"object")||(t={...s});else{t=s;return}Object.entries(s).forEach(([o,a])=>{r[o]||(r[o]=[]),r[o].push(a)})}),R(t,"object")&&Object.entries(r).forEach(([s,o])=>{const a=re(...o);a===void 0&&s in t?delete t[s]:a!==void 0&&(t[s]=a)}),t}function se(e,t){return X(I(e).plus(t))}function Qe(e){if(!fe.isValidIANAZone(e))throw new Error(`'${e}' is not a valid time zone`)}function Be(e){T(e,he),Qe(e.timezone),I(e)}function $e(e){try{return Be(e),!0}catch{return!1}}function E(e){return ae(e,Y)}function ae(e,t){const r=ze(e,t);if(!r||!r.isValid)throw new Error(`Failed to parse date input '${e}'`);return X(r,t)}function z(e){const t=v.fromJSDate(new Date(e));if(t.isValid)return t}function ze(e,t){if($e(e)&&(e=I(e).toMillis()),v.isDateTime(e))return e.setZone(t);if(R(e,"number"))return v.fromMillis(e,{zone:me}).setZone(t);if(R(e,"string")){const r=v.fromISO(e,{zone:t});return r.isValid?r:z(e)}else if(e instanceof Date)return v.fromJSDate(e).setZone(t);return z(e)}function He(e){return ae(Date.now(),e)}function ne(){return He(Y)}function Ke(e){return[String(Math.abs(e.year)).padStart(4,"0"),String(Math.abs(e.month)).padStart(2,"0"),String(Math.abs(e.day)).padStart(2,"0")].join("-")}function We(e,t){const r=pe(e,"second")&&t?String(Math.abs(e.second)).padStart(2,"0"):void 0;return[String(Math.abs(e.hour)).padStart(2,"0"),String(Math.abs(e.minute)).padStart(2,"0"),r].filter(C).join(":")}function Je(e,t){return{date:Ke(e),time:We(e,t.includeSeconds),timezone:e.timezone}}const Ze=m({user:ge,pullRequests:[l(ye,ve(Error))]},!0);class _e extends Se{}const oe=m({extensions:Re(),locations:[{line:0,column:0}],message:"",path:[l("",0)],type:l("",void 0)});function H(e,t){return e+t}var ie=(e=>(e.ActionRequired="ACTION_REQUIRED",e.Cancelled="CANCELLED",e.Completed="COMPLETED",e.Failure="FAILURE",e.InProgress="IN_PROGRESS",e.Neutral="NEUTRAL",e.Pending="PENDING",e.Queued="QUEUED",e.Skipped="SKIPPED",e.Stale="STALE",e.StartupFailure="STARTUP_FAILURE",e.Success="SUCCESS",e.TimedOut="TIMED_OUT",e.Waiting="WAITING",e))(ie||{}),P=(e=>(e.Approved="APPROVED",e.Pending="PENDING",e.Commented="COMMENTED",e.ChangesRequested="CHANGES_REQUESTED",e.Dismissed="DISMISSED",e))(P||{}),N=(e=>(e.Mergeable="MERGEABLE",e.Conflicting="CONFLICTING",e.Unknown="UNKNOWN",e))(N||{});const Xe=["ACTION_REQUIRED","CANCELLED","FAILURE","STALE","STARTUP_FAILURE","TIMED_OUT"],Ye=["COMPLETED","NEUTRAL","SKIPPED","SUCCESS"],Ge=["IN_PROGRESS","PENDING","QUEUED","WAITING"],d=m({login:"",avatarUrl:l(void 0,""),teamAvatarUrl:l(void 0,""),url:""},!0),ke=m({state:U(P),author:d,submittedAt:""},!0),et=m({additions:0,assignees:{nodes:[d]},author:d,baseRef:l(null,{name:"",target:{oid:""}}),bodyText:"",mergeable:U(N),headRef:l(null,{name:"",target:{oid:""}}),labels:l(null,{nodes:[{name:"",color:""}]}),baseRepository:{name:"",owner:d,isArchived:!1,isPrivate:!1,url:""},headRepository:{name:"",owner:d,isArchived:!1,isPrivate:!1,url:""},changedFiles:0,closedAt:l(null,""),commits:{nodes:[l(null,{commit:{statusCheckRollup:l(null,{contexts:{checkRunCountsByState:[{count:0,state:U(ie)}]}})}})],totalCount:0},createdAt:"",deletions:0,id:"",isDraft:!1,mergedAt:l(null,""),mergedBy:l(null,d),number:0,reviewThreads:{nodes:[{isResolved:!1}]},latestOpinionatedReviews:{nodes:[ke]},reviewRequests:{nodes:[{requestedReviewer:d}]},title:"",updatedAt:"",url:""},!0),tt=m({errors:l(void 0,[oe]),data:{rateLimit:{cost:1,limit:5e3,nodeCount:0,remaining:0,resetAt:"",used:0},viewer:d,search:{issueCount:0,pageInfo:{endCursor:l("",null),hasNextPage:!1},nodes:[et]}}},!0),rt=`
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
`;var b=(e=>(e.OpenPullRequests="open-pull-requests",e.ClosedPullRequests="closed-pull-requests",e))(b||{});function st(e){if(!e.filter.onlyMyself&&!e.filter.org)throw new Error("Github query too broad: must filter to self or an org")}const at={"open-pull-requests"(e){var r,s;return["is:open","type:pr","archived:false",((r=e.filter)==null?void 0:r.onlyMyself)&&"involves:@me",((s=e.filter)==null?void 0:s.org)&&`org:${e.filter.org}`].filter(C).join(" ")},"closed-pull-requests"(e){var o,a;const t=se(ne(),{weeks:-1});return["is:closed","type:pr","archived:false",`closed:>=${Je(t,{includeSeconds:!1}).date}`,((o=e.filter)==null?void 0:o.onlyMyself)&&"involves:@me",((a=e.filter)==null?void 0:a.org)&&`org:${e.filter.org}`].filter(C).join(" ")}};function nt(e,t,r,s){return st(r),{query:ot[e],variables:{searchQuery:at[t](r),afterCursor:s||null}}}var D=(e=>(e.PullRequest="pull-request",e))(D||{});const ot={"pull-request":rt},it=Ee({"pull-request":tt},(e,t)=>m(Pe(t,{authTokenName:""}),!0)),ut={"pull-request"(e){return{totalItemCount:e.data.search.issueCount,nextPageCursor:e.data.search.pageInfo.hasNextPage&&e.data.search.pageInfo.endCursor||void 0}}},lt={"pull-request"(e){const t=e.slice(-1)[0];return{authTokenName:t.authTokenName,errors:e.flatMap(r=>r.errors??[]),data:{rateLimit:{...t.data.rateLimit,cost:e.map(r=>r.data.rateLimit.cost).reduce(H),nodeCount:e.map(r=>r.data.rateLimit.nodeCount).reduce(H)},viewer:t.data.viewer,search:{issueCount:t.data.search.issueCount,pageInfo:t.data.search.pageInfo,nodes:e.flatMap(r=>r.data.search.nodes)}}}}};async function K(e,t,r,s){try{let o;const a=[];do{const n=nt(e,t,r,o),u=await(await fetch("https://api.github.com/graphql",{method:"post",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`bearer ${s.authTokenSecret}`},body:JSON.stringify(n)})).json();u.authTokenName=s.authTokenName,u.errors&&u.errors.forEach(p=>{T(p,oe)});try{T(u,it[e])}catch(p){throw console.info(u),p}const c=ut[e](u);if(o=c.nextPageCursor,a.push(u),c.totalItemCount>1e3)throw new Error(`Search too broad: got '${c.totalItemCount}' items.`)}while(o);if(!_(a,1))throw new Error("No data received from GitHub.");return lt[e](a)}catch(o){const a=Ae(o,`Failed to fetch data for token '${s.authTokenName}'.`);return console.error(a),a}}function ct(e,t){return e.match(t)??[]}var W;(function(e){e.Upper="upper",e.Lower="lower"})(W||(W={}));var J;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(J||(J={}));function dt(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}dt();function ft({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function ht({bodyText:e}){const[,t]=ct(e,/primary reviewers?((?:[^@]*@[\w\-_\d]+(?:[\s\n]|$))+)/i);return t?Array.from(t.matchAll(/@[\w\-\d]+/g)).map(s=>ft({value:s[0],prefix:"@"})):[]}function mt(e,t,r,s){var q,M,O,F,L,j,V,x,Q,B;const o={closed:t.closedAt?E(t.closedAt):void 0,created:E(t.createdAt),lastUpdated:E(t.updatedAt)},a=t.assignees.nodes.map(f),n=[f(t.author)],i=ht(t),u={assignees:ue(a.length?a:n),reviewers:vt(i,t)},c=t.mergedAt?y.Merged:t.closedAt?y.Rejected:t.isDraft?y.Draft:y.Open;return{auth:{client:Te.Github,tokenName:e},branches:{headBranch:{branchName:((q=t.headRef)==null?void 0:q.name)||new Error("Missing 'Contents' read permissions."),headCommitHash:((O=(M=t.headRef)==null?void 0:M.target)==null?void 0:O.oid)||new Error("Missing 'Contents' read permissions."),repo:{isArchived:t.headRepository.isArchived,isPrivate:t.headRepository.isPrivate,htmlUrl:t.headRepository.url,repoName:t.headRepository.name,repoOwner:f(t.headRepository.owner)}},targetBranch:{branchName:((F=t.baseRef)==null?void 0:F.name)||new Error("Missing 'Contents' read permissions."),headCommitHash:((j=(L=t.baseRef)==null?void 0:L.target)==null?void 0:j.oid)||new Error("Missing 'Contents' read permissions."),repo:{isArchived:t.baseRepository.isArchived,isPrivate:t.baseRepository.isPrivate,htmlUrl:t.baseRepository.url,repoName:t.baseRepository.name,repoOwner:f(t.baseRepository.owner)}}},changes:{additions:t.additions,deletions:t.deletions,changedFiles:t.changedFiles},dates:o,id:{htmlUrl:t.url,prId:t.id,prNumber:String(t.number),title:t.title,owner:f(t.baseRepository.owner)},status:{checksStatus:yt((B=(Q=(x=(V=t.commits.nodes[0])==null?void 0:V.commit)==null?void 0:x.statusCheckRollup)==null?void 0:Q.contexts)==null?void 0:B.checkRunCountsByState),comments:pt(t.reviewThreads.nodes),commitCount:t.commits.totalCount,mergeStatus:c,mergedBy:t.mergedBy?f(t.mergedBy):void 0,needsReviewFromCurrentUser:gt(c,r,u),userIsPrimaryReviewer:i.includes(r.username),hasMergeConflicts:t.mergeable===N.Conflicting,labels:t.labels?t.labels.nodes.map($=>({...$,color:`#${$.color}`})):[]},users:u,cost:s,raw:t}}function pt(e){return e.reduce((t,r)=>(r.isResolved&&t.resolved++,t.total++,t),{resolved:0,total:0})}function gt(e,t,r){var s;return e===y.Open&&((s=r.reviewers[t.username])==null?void 0:s.reviewStatus)===S.Pending&&!(t.username in r.assignees)}function vt(e,t){const r=ue(t.reviewRequests.nodes.map(a=>f(a.requestedReviewer))),s=G(t.latestOpinionatedReviews.nodes,a=>a.author.login),o=Array.from(new Set([...Object.keys(r),...Object.keys(s)]));return k(o.map(a=>{var u,c,p;const n=r[a]||((u=s[a])==null?void 0:u.author);if(!n)throw new Error(`Failed to find user '${a}'`);const i=Ce(r,a)?S.Pending:((c=s[a])==null?void 0:c.state)===P.Approved?S.Accepted:((p=s[a])==null?void 0:p.state)===P.ChangesRequested?S.Rejected:S.Pending;return[a,{user:{avatarUrl:n.avatarUrl||"",profileUrl:n.avatarUrl||"",username:a},isPrimaryReviewer:e.includes(a),reviewStatus:i}]}))}function yt(e){return e?e.reduce((r,s)=>(A(Xe,s.state)?r.failCount+=s.count:A(Ge,s.state)?r.inProgressCount+=s.count:A(Ye,s.state)&&(r.successCount+=s.count),r.totalCount++,r),{successCount:0,failCount:0,inProgressCount:0,totalCount:0}):new Error("Missing 'Contents' or 'Commit statuses' read permissions.")}function f(e){return{avatarUrl:e.teamAvatarUrl||e.avatarUrl||"",profileUrl:e.url,username:e.login}}function ue(e){return G(e,t=>t.username)}let Z=!1;async function St(e){if(Z)throw new Error("Refusing to fetch because GraphQL query cost is too high.");const t=await Promise.allSettled(e.flatMap(n=>[K(D.PullRequest,b.OpenPullRequests,{filter:{onlyMyself:!0}},n),K(D.PullRequest,b.ClosedPullRequests,{filter:{onlyMyself:!0}},n)]));let r;const s=t.flatMap(n=>{if(n.status==="fulfilled"){const i=n.value;if(Ue(i))return[i];if(i.data.rateLimit.cost>1)throw Z=!0,new Error("GraphQL query cost is too high.");return r||(r=f(i.data.viewer)),i.data.search.nodes.map(u=>(xe(r),mt(i.authTokenName,u,r,i.data.rateLimit)))}else return[ee(n.reason)]}),o=k(s.map(n=>n instanceof Error?[be(32),n]:[n.id.prId,n])),a=Object.values(o).sort((n,i)=>{if(n instanceof Error&&i instanceof Error){const u=n.name.localeCompare(i.name);return u||n.message.localeCompare(i.message)}else return n instanceof Error?-1:i instanceof Error||te({fullDate:n.dates.created,relativeTo:i.dates.created})?1:-1});if(!r)throw new Error("User was never parsed from the GitHub GraphQL response.");return{pullRequests:a,user:r}}const Rt={updateInterval:{seconds:10},cacheTimeout:{minutes:5}},Et=m({timestamp:0,data:Ze},!0),h=class h extends _e{constructor(r,s){super();g(this,"value");g(this,"lastResolvedValue");g(this,"options",Rt);this.authTokens=r,s&&this.overrideOptions(s),this.setPromiseValue(this.loadCachedValue()),this.scheduleFutureUpdate()}async saveCache(r){await h.cacheStore.setItem(h.cacheKey,{timestamp:Date.now(),data:r})}async loadCachedValue(){const r=await h.cacheStore.getItem(h.cacheKey);return De(r,Et)?(te({fullDate:ne(),relativeTo:se(E(r.timestamp),this.options.cacheTimeout)})?this.setUpdatedValue(!0):setTimeout(()=>this.setUpdatedValue(!0)),r.data):this.fetchData()}setPromiseValue(r){this.dispatch(new we({detail:r})),this.value=r,r.then(s=>{this.dispatch(new Ie({detail:s})),this.value=s,Ne(this.lastResolvedValue,s)||(this.dispatch(new qe({detail:s})),this.lastResolvedValue=s,this.saveCache(s))}).catch(s=>{this.dispatch(new Me({detail:ee(s)}))})}overrideOptions(r){r&&(this.options=re(this.options,r))}async fetchData(){return await St(this.authTokens)}scheduleFutureUpdate(){globalThis.setTimeout(()=>{this.setUpdatedValue(!1)},Oe(this.options.updateInterval,Fe.Milliseconds).milliseconds)}async setUpdatedValue(r){if(this.scheduleFutureUpdate(),!r&&Le(this.value))return this.value;const s=this.fetchData();return this.setPromiseValue(s),await s}};g(h,"cacheStore",Ve.createInstance({description:"github client cache for review-vir",name:"review-vir-github-cache",storeName:"review-vir-github-cache"})),g(h,"cacheKey","value");let w=h;const Ct=je({init(e){return new w(e)}});export{w as GithubClient,Ct as githubClient};
