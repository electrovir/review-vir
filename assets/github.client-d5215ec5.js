var ie=Object.defineProperty;var ue=(e,t,r)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var g=(e,t,r)=>(ue(e,typeof t!="symbol"?t+"":t,r),r);import{A as le,i as Z,a as E,p as _,t as w,I as de,b as C,f as ce,D as S,u as fe,c as X,d as m,e as he,o as l,g as me,h as pe,T as ge,j as ve,k as T,m as Se,l as Re,n as $,q as ye,P as R,S as Ee,r as y,s as D,v as Y,w as Ue,x as P,y as Ae,z as k,B as Pe,C as G,E as Ce,G as Te,F as De,H as be,J as Ie,K as Ne,L as we,M as qe,N as Me,O as Oe}from"./index-f7c0cdc1.js";import{l as Fe}from"./index-f4dd668f.js";function Le(e,t){if(e==null)throw new le(t||"defined assertion failed")}function ee(...e){if(!Z(e,1))return{};if(e.length===1)return e[0];let t;const r={};return e.forEach(s=>{if(E(s,"object"))E(t,"object")||(t={...s});else{t=s;return}Object.entries(s).forEach(([o,a])=>{r[o]||(r[o]=[]),r[o].push(a)})}),E(t,"object")&&Object.entries(r).forEach(([s,o])=>{const a=ee(...o);a===void 0&&s in t?delete t[s]:a!==void 0&&(t[s]=a)}),t}const je=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Ve(e,t){return e?je.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function xe(e){return!!e}function te(e,t){return _(w(e).plus(t))}function Qe(e){if(!de.isValidIANAZone(e))throw new Error(`'${e}' is not a valid time zone`)}function Be(e){C(e,ce),Qe(e.timezone),w(e)}function $e(e){try{return Be(e),!0}catch{return!1}}function U(e){return re(e,X)}function re(e,t){const r=ze(e,t);if(!r||!r.isValid)throw new Error(`Failed to parse date input '${e}'`);return _(r,t)}function z(e){const t=S.fromJSDate(new Date(e));if(t.isValid)return t}function ze(e,t){if($e(e)&&(e=w(e).toMillis()),S.isDateTime(e))return e.setZone(t);if(E(e,"number"))return S.fromMillis(e,{zone:fe}).setZone(t);if(E(e,"string")){const r=S.fromISO(e,{zone:t});return r.isValid?r:z(e)}else if(e instanceof Date)return S.fromJSDate(e).setZone(t);return z(e)}function He(e){return re(Date.now(),e)}function se(){return He(X)}function Ke(e){return[String(Math.abs(e.year)).padStart(4,"0"),String(Math.abs(e.month)).padStart(2,"0"),String(Math.abs(e.day)).padStart(2,"0")].join("-")}function Je(e,t){const r=Ve(e,"second")&&t?String(Math.abs(e.second)).padStart(2,"0"):void 0;return[String(Math.abs(e.hour)).padStart(2,"0"),String(Math.abs(e.minute)).padStart(2,"0"),r].filter(xe).join(":")}function We(e,t){return{date:Ke(e),time:Je(e,t.includeSeconds),timezone:e.timezone}}const Ze=m({user:he,pullRequests:[l(pe,me(Error))]},!0);class _e extends ge{}const ae=m({extensions:ve(),locations:[{line:0,column:0}],message:"",path:[l("",0)],type:""});function H(e,t){return e+t}var ne=(e=>(e.ActionRequired="ACTION_REQUIRED",e.Cancelled="CANCELLED",e.Completed="COMPLETED",e.Failure="FAILURE",e.InProgress="IN_PROGRESS",e.Neutral="NEUTRAL",e.Pending="PENDING",e.Queued="QUEUED",e.Skipped="SKIPPED",e.Stale="STALE",e.StartupFailure="STARTUP_FAILURE",e.Success="SUCCESS",e.TimedOut="TIMED_OUT",e.Waiting="WAITING",e))(ne||{}),A=(e=>(e.Approved="APPROVED",e.Pending="PENDING",e.Commented="COMMENTED",e.ChangesRequested="CHANGES_REQUESTED",e.Dismissed="DISMISSED",e))(A||{}),q=(e=>(e.Mergeable="MERGEABLE",e.Conflicting="CONFLICTING",e.Unknown="UNKNOWN",e))(q||{});const Xe=["ACTION_REQUIRED","CANCELLED","FAILURE","STALE","STARTUP_FAILURE","TIMED_OUT"],Ye=["COMPLETED","NEUTRAL","SKIPPED","SUCCESS"],ke=["IN_PROGRESS","PENDING","QUEUED","WAITING"],c=m({login:"",avatarUrl:l(void 0,""),teamAvatarUrl:l(void 0,""),url:""},!0),K=m({state:T(A),author:c,submittedAt:""},!0),Ge=m({additions:0,assignees:{nodes:[c]},author:c,baseRef:l(null,{name:"",target:{oid:""}}),mergeable:T(q),headRef:l(null,{name:"",target:{oid:""}}),labels:l(null,{nodes:[{name:"",color:""}]}),baseRepository:{name:"",owner:c,isArchived:!1,isPrivate:!1,url:""},headRepository:{name:"",owner:c,isArchived:!1,isPrivate:!1,url:""},changedFiles:0,closedAt:l(null,""),commits:{nodes:[l(null,{commit:{statusCheckRollup:l(null,{contexts:{checkRunCountsByState:[{count:0,state:T(ne)}]}})}})],totalCount:0},createdAt:"",deletions:0,id:"",isDraft:!1,mergedAt:l(null,""),mergedBy:l(null,c),number:0,reviewThreads:{nodes:[{isResolved:!1}]},latestReviews:{nodes:[K]},latestOpinionatedReviews:{nodes:[K]},reviewRequests:{nodes:[{requestedReviewer:c}]},title:"",updatedAt:"",url:""},!0),et=m({errors:l(void 0,[ae]),data:{rateLimit:{cost:1,limit:5e3,nodeCount:0,remaining:0,resetAt:"",used:0},viewer:c,search:{issueCount:0,pageInfo:{endCursor:l("",null),hasNextPage:!1},nodes:[Ge]}}},!0),tt=`
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
                    latestReviews(first: 10) {
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
`;var b=(e=>(e.OpenPullRequests="open-pull-requests",e.ClosedPullRequests="closed-pull-requests",e))(b||{});function rt(e){if(!e.filter.onlyMyself&&!e.filter.org)throw new Error("Github query too broad: must filter to self or an org")}const st={"open-pull-requests"(e){var r,s;return["is:open","type:pr","archived:false",((r=e.filter)==null?void 0:r.onlyMyself)&&"involves:@me",((s=e.filter)==null?void 0:s.org)&&`org:${e.filter.org}`].filter($).join(" ")},"closed-pull-requests"(e){var o,a;const t=te(se(),{weeks:-1});return["is:closed","type:pr","archived:false",`closed:>=${We(t,{includeSeconds:!1}).date}`,((o=e.filter)==null?void 0:o.onlyMyself)&&"involves:@me",((a=e.filter)==null?void 0:a.org)&&`org:${e.filter.org}`].filter($).join(" ")}};function at(e,t,r,s){return rt(r),{query:nt[e],variables:{searchQuery:st[t](r),afterCursor:s||null}}}var I=(e=>(e.PullRequest="pull-request",e))(I||{});const nt={"pull-request":tt},ot=Se({"pull-request":et},(e,t)=>m(Re(t,{authTokenName:""}),!0)),it={"pull-request"(e){return{totalItemCount:e.data.search.issueCount,nextPageCursor:e.data.search.pageInfo.hasNextPage&&e.data.search.pageInfo.endCursor||void 0}}},ut={"pull-request"(e){const t=e.slice(-1)[0];return{authTokenName:t.authTokenName,errors:e.flatMap(r=>r.errors??[]),data:{rateLimit:{...t.data.rateLimit,cost:e.map(r=>r.data.rateLimit.cost).reduce(H),nodeCount:e.map(r=>r.data.rateLimit.nodeCount).reduce(H)},viewer:t.data.viewer,search:{issueCount:t.data.search.issueCount,pageInfo:t.data.search.pageInfo,nodes:e.flatMap(r=>r.data.search.nodes)}}}}};async function J(e,t,r,s){try{let o;const a=[];do{const n=at(e,t,r,o),u=await(await fetch("https://api.github.com/graphql",{method:"post",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`bearer ${s.authTokenSecret}`},body:JSON.stringify(n)})).json();u.authTokenName=s.authTokenName,u.errors&&u.errors.forEach(d=>{C(d,ae)});try{C(u,ot[e])}catch(d){throw console.info(u),d}const p=it[e](u);if(o=p.nextPageCursor,a.push(u),p.totalItemCount>1e3)throw new Error(`Search too broad: got '${p.totalItemCount}' items.`)}while(o);if(!Z(a,1))throw new Error("No data received from GitHub.");return ut[e](a)}catch(o){const a=ye(o,`Failed to fetch data for token '${s.authTokenName}'.`);return console.error(a),a}}function lt(e,t,r,s){var d,v,M,O,F,L,j,V,x,Q;const o={closed:t.closedAt?U(t.closedAt):void 0,created:U(t.createdAt),lastUpdated:U(t.updatedAt)},a=t.assignees.nodes.map(f),n=[f(t.author)],i={assignees:oe(a.length?a:n),reviewers:ft(t)},u=t.mergedAt?R.Merged:t.closedAt?R.Rejected:t.isDraft?R.Draft:R.Open;return{auth:{client:Ee.Github,tokenName:e},branches:{headBranch:{branchName:((d=t.headRef)==null?void 0:d.name)||new Error("Missing 'Contents' read permissions."),headCommitHash:((M=(v=t.headRef)==null?void 0:v.target)==null?void 0:M.oid)||new Error("Missing 'Contents' read permissions."),repo:{isArchived:t.headRepository.isArchived,isPrivate:t.headRepository.isPrivate,htmlUrl:t.headRepository.url,repoName:t.headRepository.name,repoOwner:f(t.headRepository.owner)}},targetBranch:{branchName:((O=t.baseRef)==null?void 0:O.name)||new Error("Missing 'Contents' read permissions."),headCommitHash:((L=(F=t.baseRef)==null?void 0:F.target)==null?void 0:L.oid)||new Error("Missing 'Contents' read permissions."),repo:{isArchived:t.baseRepository.isArchived,isPrivate:t.baseRepository.isPrivate,htmlUrl:t.baseRepository.url,repoName:t.baseRepository.name,repoOwner:f(t.baseRepository.owner)}}},changes:{additions:t.additions,deletions:t.deletions,changedFiles:t.changedFiles},dates:o,id:{htmlUrl:t.url,prId:t.id,prNumber:String(t.number),title:t.title,owner:f(t.baseRepository.owner)},status:{checksStatus:ht((Q=(x=(V=(j=t.commits.nodes[0])==null?void 0:j.commit)==null?void 0:V.statusCheckRollup)==null?void 0:x.contexts)==null?void 0:Q.checkRunCountsByState),comments:dt(t.reviewThreads.nodes),commitCount:t.commits.totalCount,mergeStatus:u,mergedBy:t.mergedBy?f(t.mergedBy):void 0,needsReviewFromCurrentUser:ct(u,r,i),hasMergeConflicts:t.mergeable===q.Conflicting,labels:t.labels?t.labels.nodes.map(B=>({...B,color:`#${B.color}`})):[]},users:i,cost:s,raw:t}}function dt(e){return e.reduce((t,r)=>(r.isResolved&&t.resolved++,t.total++,t),{resolved:0,total:0})}function ct(e,t,r){var s;return e===R.Open&&((s=r.reviewers[t.username])==null?void 0:s.reviewStatus)===y.Pending&&!(t.username in r.assignees)}function ft(e){const t=oe(e.reviewRequests.nodes.map(a=>f(a.requestedReviewer))),r=D(e.latestReviews.nodes,a=>a.author.login),s=D(e.latestOpinionatedReviews.nodes,a=>a.author.login),o=Array.from(new Set([...Object.keys(t),...Object.keys(r),...Object.keys(s)]));return Y(o.map(a=>{var u,p,d,v;const n=t[a]||((u=r[a])==null?void 0:u.author)||((p=s[a])==null?void 0:p.author);if(!n)throw new Error(`Failed to find user '${a}'`);const i=Ue(t,a)?y.Pending:((d=s[a])==null?void 0:d.state)===A.Approved?y.Accepted:((v=s[a])==null?void 0:v.state)===A.ChangesRequested?y.Rejected:y.Pending;return[a,{user:{avatarUrl:n.avatarUrl||"",profileUrl:n.avatarUrl||"",username:a},reviewStatus:i}]}))}function ht(e){return e?e.reduce((r,s)=>(P(Xe,s.state)?r.failCount+=s.count:P(ke,s.state)?r.inProgressCount+=s.count:P(Ye,s.state)&&(r.successCount+=s.count),r.totalCount++,r),{successCount:0,failCount:0,inProgressCount:0,totalCount:0}):new Error("Missing 'Contents' or 'Commit statuses' read permissions.")}function f(e){return{avatarUrl:e.teamAvatarUrl||e.avatarUrl||"",profileUrl:e.url,username:e.login}}function oe(e){return D(e,t=>t.username)}let W=!1;async function mt(e){if(W)throw new Error("Refusing to fetch because GraphQL query cost is too high.");const t=await Promise.allSettled(e.flatMap(n=>[J(I.PullRequest,b.OpenPullRequests,{filter:{onlyMyself:!0}},n),J(I.PullRequest,b.ClosedPullRequests,{filter:{onlyMyself:!0}},n)]));let r;const s=t.flatMap(n=>{if(n.status==="fulfilled"){const i=n.value;if(Ae(i))return[i];if(i.data.rateLimit.cost>1)throw W=!0,new Error("GraphQL query cost is too high.");return r||(r=f(i.data.viewer)),i.data.search.nodes.map(u=>(Le(r),lt(i.authTokenName,u,r,i.data.rateLimit)))}else return[k(n.reason)]}),o=Y(s.map(n=>n instanceof Error?[Pe(32),n]:[n.id.prId,n])),a=Object.values(o).sort((n,i)=>{if(n instanceof Error&&i instanceof Error){const u=n.name.localeCompare(i.name);return u||n.message.localeCompare(i.message)}else return n instanceof Error?-1:i instanceof Error||G({fullDate:n.dates.created,relativeTo:i.dates.created})?1:-1});if(!r)throw new Error("User was never parsed from the GitHub GraphQL response.");return{pullRequests:a,user:r}}const pt={updateInterval:{seconds:10},cacheTimeout:{minutes:5}},gt=m({timestamp:0,data:Ze},!0),h=class h extends _e{constructor(r,s){super();g(this,"value");g(this,"lastResolvedValue");g(this,"options",pt);this.authTokens=r,s&&this.overrideOptions(s),this.setPromiseValue(this.loadCachedValue()),this.scheduleFutureUpdate()}async saveCache(r){await h.cacheStore.setItem(h.cacheKey,{timestamp:Date.now(),data:r})}async loadCachedValue(){const r=await h.cacheStore.getItem(h.cacheKey);return Ce(r,gt)?(G({fullDate:se(),relativeTo:te(U(r.timestamp),this.options.cacheTimeout)})?this.setUpdatedValue(!0):setTimeout(()=>this.setUpdatedValue(!0)),r.data):this.fetchData()}setPromiseValue(r){this.dispatch(new Te({detail:r})),this.value=r,r.then(s=>{this.dispatch(new De({detail:s})),this.value=s,be(this.lastResolvedValue,s)||(this.dispatch(new Ie({detail:s})),this.lastResolvedValue=s,this.saveCache(s))}).catch(s=>{this.dispatch(new Ne({detail:k(s)}))})}overrideOptions(r){r&&(this.options=ee(this.options,r))}async fetchData(){return await mt(this.authTokens)}scheduleFutureUpdate(){globalThis.setTimeout(()=>{this.setUpdatedValue(!1)},we(this.options.updateInterval,qe.Milliseconds).milliseconds)}async setUpdatedValue(r){if(this.scheduleFutureUpdate(),!r&&Me(this.value))return this.value;const s=this.fetchData();return this.setPromiseValue(s),await s}};g(h,"cacheStore",Fe.createInstance({description:"github client cache for review-vir",name:"review-vir-github-cache",storeName:"review-vir-github-cache"})),g(h,"cacheKey","value");let N=h;const yt=Oe({init(e){return new N(e)}});export{N as GithubClient,yt as githubClient};
