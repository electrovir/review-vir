var oe=Object.defineProperty;var ie=(e,t,s)=>t in e?oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var g=(e,t,s)=>(ie(e,typeof t!="symbol"?t+"":t,s),s);import{A as ue,i as J,a as E,p as W,t as N,I as le,b as C,f as de,D as v,u as ce,c as Z,d as fe,e as P,g as h,h as he,o as l,j as me,k as pe,T as ge,l as ve,m as T,n as Se,q as Re,r as Ee,P as S,S as ye,s as R,v as _,w as X,x as Ue,y as A,z as Ae,B as Y,C as Ce,E as G,F as Pe,G as Te,H as De,J as be,K as Ie,L as Ne,M as we,N as qe,O as Me,Q as Oe}from"./index-34ba299e.js";import{l as Fe}from"./index-f4dd668f.js";function Le(e,t){if(e==null)throw new ue(t||"defined assertion failed")}function k(...e){if(!J(e,1))return{};if(e.length===1)return e[0];let t;const s={};return e.forEach(r=>{if(E(r,"object"))E(t,"object")||(t={...r});else{t=r;return}Object.entries(r).forEach(([a,n])=>{s[a]||(s[a]=[]),s[a].push(n)})}),E(t,"object")&&Object.entries(s).forEach(([r,a])=>{const n=k(...a);n===void 0&&r in t?delete t[r]:n!==void 0&&(t[r]=n)}),t}function ee(e,t){return W(N(e).plus(t))}function je(e){if(!le.isValidIANAZone(e))throw new Error(`'${e}' is not a valid time zone`)}function Ve(e){C(e,de),je(e.timezone),N(e)}function Qe(e){try{return Ve(e),!0}catch{return!1}}function y(e){return te(e,Z)}function te(e,t){const s=xe(e,t);if(!s||!s.isValid)throw new Error(`Failed to parse date input '${e}'`);return W(s,t)}function $(e){const t=v.fromJSDate(new Date(e));if(t.isValid)return t}function xe(e,t){if(Qe(e)&&(e=N(e).toMillis()),v.isDateTime(e))return e.setZone(t);if(E(e,"number"))return v.fromMillis(e,{zone:ce}).setZone(t);if(E(e,"string")){const s=v.fromISO(e,{zone:t});return s.isValid?s:$(e)}else if(e instanceof Date)return v.fromJSDate(e).setZone(t);return $(e)}function Be(e){return te(Date.now(),e)}function se(){return Be(Z)}function $e(e){return[String(Math.abs(e.year)).padStart(4,"0"),String(Math.abs(e.month)).padStart(2,"0"),String(Math.abs(e.day)).padStart(2,"0")].join("-")}function ze(e,t){const s=fe(e,"second")&&t?String(Math.abs(e.second)).padStart(2,"0"):void 0;return[String(Math.abs(e.hour)).padStart(2,"0"),String(Math.abs(e.minute)).padStart(2,"0"),s].filter(P).join(":")}function He(e,t){return{date:$e(e),time:ze(e,t.includeSeconds),timezone:e.timezone}}const Ke=h({user:he,pullRequests:[l(pe,me(Error))]},!0);class Je extends ge{}const re=h({extensions:ve(),locations:[{line:0,column:0}],message:"",path:[l("",0)],type:l("",void 0)});function z(e,t){return e+t}var ae=(e=>(e.ActionRequired="ACTION_REQUIRED",e.Cancelled="CANCELLED",e.Completed="COMPLETED",e.Failure="FAILURE",e.InProgress="IN_PROGRESS",e.Neutral="NEUTRAL",e.Pending="PENDING",e.Queued="QUEUED",e.Skipped="SKIPPED",e.Stale="STALE",e.StartupFailure="STARTUP_FAILURE",e.Success="SUCCESS",e.TimedOut="TIMED_OUT",e.Waiting="WAITING",e))(ae||{}),U=(e=>(e.Approved="APPROVED",e.Pending="PENDING",e.Commented="COMMENTED",e.ChangesRequested="CHANGES_REQUESTED",e.Dismissed="DISMISSED",e))(U||{}),w=(e=>(e.Mergeable="MERGEABLE",e.Conflicting="CONFLICTING",e.Unknown="UNKNOWN",e))(w||{});const We=["ACTION_REQUIRED","CANCELLED","FAILURE","STALE","STARTUP_FAILURE","TIMED_OUT"],Ze=["COMPLETED","NEUTRAL","SKIPPED","SUCCESS"],_e=["IN_PROGRESS","PENDING","QUEUED","WAITING"],d=h({login:"",avatarUrl:l(void 0,""),teamAvatarUrl:l(void 0,""),url:""},!0),Xe=h({state:T(U),author:d,submittedAt:""},!0),Ye=h({additions:0,assignees:{nodes:[d]},author:d,baseRef:l(null,{name:"",target:{oid:""}}),mergeable:T(w),headRef:l(null,{name:"",target:{oid:""}}),labels:l(null,{nodes:[{name:"",color:""}]}),baseRepository:{name:"",owner:d,isArchived:!1,isPrivate:!1,url:""},headRepository:{name:"",owner:d,isArchived:!1,isPrivate:!1,url:""},changedFiles:0,closedAt:l(null,""),commits:{nodes:[l(null,{commit:{statusCheckRollup:l(null,{contexts:{checkRunCountsByState:[{count:0,state:T(ae)}]}})}})],totalCount:0},createdAt:"",deletions:0,id:"",isDraft:!1,mergedAt:l(null,""),mergedBy:l(null,d),number:0,reviewThreads:{nodes:[{isResolved:!1}]},latestOpinionatedReviews:{nodes:[Xe]},reviewRequests:{nodes:[{requestedReviewer:d}]},title:"",updatedAt:"",url:""},!0),Ge=h({errors:l(void 0,[re]),data:{rateLimit:{cost:1,limit:5e3,nodeCount:0,remaining:0,resetAt:"",used:0},viewer:d,search:{issueCount:0,pageInfo:{endCursor:l("",null),hasNextPage:!1},nodes:[Ye]}}},!0),ke=`
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
`;var D=(e=>(e.OpenPullRequests="open-pull-requests",e.ClosedPullRequests="closed-pull-requests",e))(D||{});function et(e){if(!e.filter.onlyMyself&&!e.filter.org)throw new Error("Github query too broad: must filter to self or an org")}const tt={"open-pull-requests"(e){var s,r;return["is:open","type:pr","archived:false",((s=e.filter)==null?void 0:s.onlyMyself)&&"involves:@me",((r=e.filter)==null?void 0:r.org)&&`org:${e.filter.org}`].filter(P).join(" ")},"closed-pull-requests"(e){var a,n;const t=ee(se(),{weeks:-1});return["is:closed","type:pr","archived:false",`closed:>=${He(t,{includeSeconds:!1}).date}`,((a=e.filter)==null?void 0:a.onlyMyself)&&"involves:@me",((n=e.filter)==null?void 0:n.org)&&`org:${e.filter.org}`].filter(P).join(" ")}};function st(e,t,s,r){return et(s),{query:rt[e],variables:{searchQuery:tt[t](s),afterCursor:r||null}}}var b=(e=>(e.PullRequest="pull-request",e))(b||{});const rt={"pull-request":ke},at=Se({"pull-request":Ge},(e,t)=>h(Re(t,{authTokenName:""}),!0)),nt={"pull-request"(e){return{totalItemCount:e.data.search.issueCount,nextPageCursor:e.data.search.pageInfo.hasNextPage&&e.data.search.pageInfo.endCursor||void 0}}},ot={"pull-request"(e){const t=e.slice(-1)[0];return{authTokenName:t.authTokenName,errors:e.flatMap(s=>s.errors??[]),data:{rateLimit:{...t.data.rateLimit,cost:e.map(s=>s.data.rateLimit.cost).reduce(z),nodeCount:e.map(s=>s.data.rateLimit.nodeCount).reduce(z)},viewer:t.data.viewer,search:{issueCount:t.data.search.issueCount,pageInfo:t.data.search.pageInfo,nodes:e.flatMap(s=>s.data.search.nodes)}}}}};async function H(e,t,s,r){try{let a;const n=[];do{const o=st(e,t,s,a),u=await(await fetch("https://api.github.com/graphql",{method:"post",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`bearer ${r.authTokenSecret}`},body:JSON.stringify(o)})).json();u.authTokenName=r.authTokenName,u.errors&&u.errors.forEach(p=>{C(p,re)});try{C(u,at[e])}catch(p){throw console.info(u),p}const m=nt[e](u);if(a=m.nextPageCursor,n.push(u),m.totalItemCount>1e3)throw new Error(`Search too broad: got '${m.totalItemCount}' items.`)}while(a);if(!J(n,1))throw new Error("No data received from GitHub.");return ot[e](n)}catch(a){const n=Ee(a,`Failed to fetch data for token '${r.authTokenName}'.`);return console.error(n),n}}function it(e,t,s,r){var p,q,M,O,F,L,j,V,Q,x;const a={closed:t.closedAt?y(t.closedAt):void 0,created:y(t.createdAt),lastUpdated:y(t.updatedAt)},n=t.assignees.nodes.map(c),o=[c(t.author)],i={assignees:ne(n.length?n:o),reviewers:dt(t)},u=t.mergedAt?S.Merged:t.closedAt?S.Rejected:t.isDraft?S.Draft:S.Open;return{auth:{client:ye.Github,tokenName:e},branches:{headBranch:{branchName:((p=t.headRef)==null?void 0:p.name)||new Error("Missing 'Contents' read permissions."),headCommitHash:((M=(q=t.headRef)==null?void 0:q.target)==null?void 0:M.oid)||new Error("Missing 'Contents' read permissions."),repo:{isArchived:t.headRepository.isArchived,isPrivate:t.headRepository.isPrivate,htmlUrl:t.headRepository.url,repoName:t.headRepository.name,repoOwner:c(t.headRepository.owner)}},targetBranch:{branchName:((O=t.baseRef)==null?void 0:O.name)||new Error("Missing 'Contents' read permissions."),headCommitHash:((L=(F=t.baseRef)==null?void 0:F.target)==null?void 0:L.oid)||new Error("Missing 'Contents' read permissions."),repo:{isArchived:t.baseRepository.isArchived,isPrivate:t.baseRepository.isPrivate,htmlUrl:t.baseRepository.url,repoName:t.baseRepository.name,repoOwner:c(t.baseRepository.owner)}}},changes:{additions:t.additions,deletions:t.deletions,changedFiles:t.changedFiles},dates:a,id:{htmlUrl:t.url,prId:t.id,prNumber:String(t.number),title:t.title,owner:c(t.baseRepository.owner)},status:{checksStatus:ct((x=(Q=(V=(j=t.commits.nodes[0])==null?void 0:j.commit)==null?void 0:V.statusCheckRollup)==null?void 0:Q.contexts)==null?void 0:x.checkRunCountsByState),comments:ut(t.reviewThreads.nodes),commitCount:t.commits.totalCount,mergeStatus:u,mergedBy:t.mergedBy?c(t.mergedBy):void 0,needsReviewFromCurrentUser:lt(u,s,i),hasMergeConflicts:t.mergeable===w.Conflicting,labels:t.labels?t.labels.nodes.map(B=>({...B,color:`#${B.color}`})):[]},users:i,cost:r,raw:t}}function ut(e){return e.reduce((t,s)=>(s.isResolved&&t.resolved++,t.total++,t),{resolved:0,total:0})}function lt(e,t,s){var r;return e===S.Open&&((r=s.reviewers[t.username])==null?void 0:r.reviewStatus)===R.Pending&&!(t.username in s.assignees)}function dt(e){const t=ne(e.reviewRequests.nodes.map(a=>c(a.requestedReviewer))),s=_(e.latestOpinionatedReviews.nodes,a=>a.author.login),r=Array.from(new Set([...Object.keys(t),...Object.keys(s)]));return X(r.map(a=>{var i,u,m;const n=t[a]||((i=s[a])==null?void 0:i.author);if(!n)throw new Error(`Failed to find user '${a}'`);const o=Ue(t,a)?R.Pending:((u=s[a])==null?void 0:u.state)===U.Approved?R.Accepted:((m=s[a])==null?void 0:m.state)===U.ChangesRequested?R.Rejected:R.Pending;return[a,{user:{avatarUrl:n.avatarUrl||"",profileUrl:n.avatarUrl||"",username:a},reviewStatus:o}]}))}function ct(e){return e?e.reduce((s,r)=>(A(We,r.state)?s.failCount+=r.count:A(_e,r.state)?s.inProgressCount+=r.count:A(Ze,r.state)&&(s.successCount+=r.count),s.totalCount++,s),{successCount:0,failCount:0,inProgressCount:0,totalCount:0}):new Error("Missing 'Contents' or 'Commit statuses' read permissions.")}function c(e){return{avatarUrl:e.teamAvatarUrl||e.avatarUrl||"",profileUrl:e.url,username:e.login}}function ne(e){return _(e,t=>t.username)}let K=!1;async function ft(e){if(K)throw new Error("Refusing to fetch because GraphQL query cost is too high.");const t=await Promise.allSettled(e.flatMap(o=>[H(b.PullRequest,D.OpenPullRequests,{filter:{onlyMyself:!0}},o),H(b.PullRequest,D.ClosedPullRequests,{filter:{onlyMyself:!0}},o)]));let s;const r=t.flatMap(o=>{if(o.status==="fulfilled"){const i=o.value;if(Ae(i))return[i];if(i.data.rateLimit.cost>1)throw K=!0,new Error("GraphQL query cost is too high.");return s||(s=c(i.data.viewer)),i.data.search.nodes.map(u=>(Le(s),it(i.authTokenName,u,s,i.data.rateLimit)))}else return[Y(o.reason)]}),a=X(r.map(o=>o instanceof Error?[Ce(32),o]:[o.id.prId,o])),n=Object.values(a).sort((o,i)=>{if(o instanceof Error&&i instanceof Error){const u=o.name.localeCompare(i.name);return u||o.message.localeCompare(i.message)}else return o instanceof Error?-1:i instanceof Error||G({fullDate:o.dates.created,relativeTo:i.dates.created})?1:-1});if(!s)throw new Error("User was never parsed from the GitHub GraphQL response.");return{pullRequests:n,user:s}}const ht={updateInterval:{seconds:10},cacheTimeout:{minutes:5}},mt=h({timestamp:0,data:Ke},!0),f=class f extends Je{constructor(s,r){super();g(this,"value");g(this,"lastResolvedValue");g(this,"options",ht);this.authTokens=s,r&&this.overrideOptions(r),this.setPromiseValue(this.loadCachedValue()),this.scheduleFutureUpdate()}async saveCache(s){await f.cacheStore.setItem(f.cacheKey,{timestamp:Date.now(),data:s})}async loadCachedValue(){const s=await f.cacheStore.getItem(f.cacheKey);return Pe(s,mt)?(G({fullDate:se(),relativeTo:ee(y(s.timestamp),this.options.cacheTimeout)})?this.setUpdatedValue(!0):setTimeout(()=>this.setUpdatedValue(!0)),s.data):this.fetchData()}setPromiseValue(s){this.dispatch(new Te({detail:s})),this.value=s,s.then(r=>{this.dispatch(new De({detail:r})),this.value=r,be(this.lastResolvedValue,r)||(this.dispatch(new Ie({detail:r})),this.lastResolvedValue=r,this.saveCache(r))}).catch(r=>{this.dispatch(new Ne({detail:Y(r)}))})}overrideOptions(s){s&&(this.options=k(this.options,s))}async fetchData(){return await ft(this.authTokens)}scheduleFutureUpdate(){globalThis.setTimeout(()=>{this.setUpdatedValue(!1)},we(this.options.updateInterval,qe.Milliseconds).milliseconds)}async setUpdatedValue(s){if(this.scheduleFutureUpdate(),!s&&Me(this.value))return this.value;const r=this.fetchData();return this.setPromiseValue(r),await r}};g(f,"cacheStore",Fe.createInstance({description:"github client cache for review-vir",name:"review-vir-github-cache",storeName:"review-vir-github-cache"})),g(f,"cacheKey","value");let I=f;const St=Oe({init(e){return new I(e)}});export{I as GithubClient,St as githubClient};
