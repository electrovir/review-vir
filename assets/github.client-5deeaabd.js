var ie=Object.defineProperty;var ue=(e,t,s)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var g=(e,t,s)=>(ue(e,typeof t!="symbol"?t+"":t,s),s);import{A as le,i as Z,a as y,p as _,t as q,I as de,b as P,f as ce,D as S,u as fe,c as X,d as he,e as T,g as m,h as me,o as l,j as pe,k as ge,T as ve,l as Se,m as D,n as Re,q as Ee,r as ye,P as R,S as Ue,s as E,v as b,w as Y,x as Ae,y as C,z as Ce,B as k,C as Pe,E as G,F as Te,G as De,H as be,J as Ie,K as Ne,L as we,M as qe,N as Me,O as Oe,Q as Fe}from"./index-135f34ed.js";import{l as je}from"./index-f4dd668f.js";function Le(e,t){if(e==null)throw new le(t||"defined assertion failed")}function ee(...e){if(!Z(e,1))return{};if(e.length===1)return e[0];let t;const s={};return e.forEach(r=>{if(y(r,"object"))y(t,"object")||(t={...r});else{t=r;return}Object.entries(r).forEach(([o,a])=>{s[o]||(s[o]=[]),s[o].push(a)})}),y(t,"object")&&Object.entries(s).forEach(([r,o])=>{const a=ee(...o);a===void 0&&r in t?delete t[r]:a!==void 0&&(t[r]=a)}),t}function te(e,t){return _(q(e).plus(t))}function Ve(e){if(!de.isValidIANAZone(e))throw new Error(`'${e}' is not a valid time zone`)}function Qe(e){P(e,ce),Ve(e.timezone),q(e)}function xe(e){try{return Qe(e),!0}catch{return!1}}function U(e){return se(e,X)}function se(e,t){const s=Be(e,t);if(!s||!s.isValid)throw new Error(`Failed to parse date input '${e}'`);return _(s,t)}function z(e){const t=S.fromJSDate(new Date(e));if(t.isValid)return t}function Be(e,t){if(xe(e)&&(e=q(e).toMillis()),S.isDateTime(e))return e.setZone(t);if(y(e,"number"))return S.fromMillis(e,{zone:fe}).setZone(t);if(y(e,"string")){const s=S.fromISO(e,{zone:t});return s.isValid?s:z(e)}else if(e instanceof Date)return S.fromJSDate(e).setZone(t);return z(e)}function $e(e){return se(Date.now(),e)}function re(){return $e(X)}function ze(e){return[String(Math.abs(e.year)).padStart(4,"0"),String(Math.abs(e.month)).padStart(2,"0"),String(Math.abs(e.day)).padStart(2,"0")].join("-")}function He(e,t){const s=he(e,"second")&&t?String(Math.abs(e.second)).padStart(2,"0"):void 0;return[String(Math.abs(e.hour)).padStart(2,"0"),String(Math.abs(e.minute)).padStart(2,"0"),s].filter(T).join(":")}function Ke(e,t){return{date:ze(e),time:He(e,t.includeSeconds),timezone:e.timezone}}const Je=m({user:me,pullRequests:[l(ge,pe(Error))]},!0);class We extends ve{}const ae=m({extensions:Se(),locations:[{line:0,column:0}],message:"",path:[l("",0)],type:l("",void 0)});function H(e,t){return e+t}var ne=(e=>(e.ActionRequired="ACTION_REQUIRED",e.Cancelled="CANCELLED",e.Completed="COMPLETED",e.Failure="FAILURE",e.InProgress="IN_PROGRESS",e.Neutral="NEUTRAL",e.Pending="PENDING",e.Queued="QUEUED",e.Skipped="SKIPPED",e.Stale="STALE",e.StartupFailure="STARTUP_FAILURE",e.Success="SUCCESS",e.TimedOut="TIMED_OUT",e.Waiting="WAITING",e))(ne||{}),A=(e=>(e.Approved="APPROVED",e.Pending="PENDING",e.Commented="COMMENTED",e.ChangesRequested="CHANGES_REQUESTED",e.Dismissed="DISMISSED",e))(A||{}),M=(e=>(e.Mergeable="MERGEABLE",e.Conflicting="CONFLICTING",e.Unknown="UNKNOWN",e))(M||{});const Ze=["ACTION_REQUIRED","CANCELLED","FAILURE","STALE","STARTUP_FAILURE","TIMED_OUT"],_e=["COMPLETED","NEUTRAL","SKIPPED","SUCCESS"],Xe=["IN_PROGRESS","PENDING","QUEUED","WAITING"],c=m({login:"",avatarUrl:l(void 0,""),teamAvatarUrl:l(void 0,""),url:""},!0),K=m({state:D(A),author:c,submittedAt:""},!0),Ye=m({additions:0,assignees:{nodes:[c]},author:c,baseRef:l(null,{name:"",target:{oid:""}}),mergeable:D(M),headRef:l(null,{name:"",target:{oid:""}}),labels:l(null,{nodes:[{name:"",color:""}]}),baseRepository:{name:"",owner:c,isArchived:!1,isPrivate:!1,url:""},headRepository:{name:"",owner:c,isArchived:!1,isPrivate:!1,url:""},changedFiles:0,closedAt:l(null,""),commits:{nodes:[l(null,{commit:{statusCheckRollup:l(null,{contexts:{checkRunCountsByState:[{count:0,state:D(ne)}]}})}})],totalCount:0},createdAt:"",deletions:0,id:"",isDraft:!1,mergedAt:l(null,""),mergedBy:l(null,c),number:0,reviewThreads:{nodes:[{isResolved:!1}]},latestReviews:{nodes:[K]},latestOpinionatedReviews:{nodes:[K]},reviewRequests:{nodes:[{requestedReviewer:c}]},title:"",updatedAt:"",url:""},!0),ke=m({errors:l(void 0,[ae]),data:{rateLimit:{cost:1,limit:5e3,nodeCount:0,remaining:0,resetAt:"",used:0},viewer:c,search:{issueCount:0,pageInfo:{endCursor:l("",null),hasNextPage:!1},nodes:[Ye]}}},!0),Ge=`
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
`;var I=(e=>(e.OpenPullRequests="open-pull-requests",e.ClosedPullRequests="closed-pull-requests",e))(I||{});function et(e){if(!e.filter.onlyMyself&&!e.filter.org)throw new Error("Github query too broad: must filter to self or an org")}const tt={"open-pull-requests"(e){var s,r;return["is:open","type:pr","archived:false",((s=e.filter)==null?void 0:s.onlyMyself)&&"involves:@me",((r=e.filter)==null?void 0:r.org)&&`org:${e.filter.org}`].filter(T).join(" ")},"closed-pull-requests"(e){var o,a;const t=te(re(),{weeks:-1});return["is:closed","type:pr","archived:false",`closed:>=${Ke(t,{includeSeconds:!1}).date}`,((o=e.filter)==null?void 0:o.onlyMyself)&&"involves:@me",((a=e.filter)==null?void 0:a.org)&&`org:${e.filter.org}`].filter(T).join(" ")}};function st(e,t,s,r){return et(s),{query:rt[e],variables:{searchQuery:tt[t](s),afterCursor:r||null}}}var N=(e=>(e.PullRequest="pull-request",e))(N||{});const rt={"pull-request":Ge},at=Re({"pull-request":ke},(e,t)=>m(Ee(t,{authTokenName:""}),!0)),nt={"pull-request"(e){return{totalItemCount:e.data.search.issueCount,nextPageCursor:e.data.search.pageInfo.hasNextPage&&e.data.search.pageInfo.endCursor||void 0}}},ot={"pull-request"(e){const t=e.slice(-1)[0];return{authTokenName:t.authTokenName,errors:e.flatMap(s=>s.errors??[]),data:{rateLimit:{...t.data.rateLimit,cost:e.map(s=>s.data.rateLimit.cost).reduce(H),nodeCount:e.map(s=>s.data.rateLimit.nodeCount).reduce(H)},viewer:t.data.viewer,search:{issueCount:t.data.search.issueCount,pageInfo:t.data.search.pageInfo,nodes:e.flatMap(s=>s.data.search.nodes)}}}}};async function J(e,t,s,r){try{let o;const a=[];do{const n=st(e,t,s,o),u=await(await fetch("https://api.github.com/graphql",{method:"post",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`bearer ${r.authTokenSecret}`},body:JSON.stringify(n)})).json();u.authTokenName=r.authTokenName,u.errors&&u.errors.forEach(d=>{P(d,ae)});try{P(u,at[e])}catch(d){throw console.info(u),d}const p=nt[e](u);if(o=p.nextPageCursor,a.push(u),p.totalItemCount>1e3)throw new Error(`Search too broad: got '${p.totalItemCount}' items.`)}while(o);if(!Z(a,1))throw new Error("No data received from GitHub.");return ot[e](a)}catch(o){const a=ye(o,`Failed to fetch data for token '${r.authTokenName}'.`);return console.error(a),a}}function it(e,t,s,r){var d,v,O,F,j,L,V,Q,x,B;const o={closed:t.closedAt?U(t.closedAt):void 0,created:U(t.createdAt),lastUpdated:U(t.updatedAt)},a=t.assignees.nodes.map(f),n=[f(t.author)],i={assignees:oe(a.length?a:n),reviewers:dt(t)},u=t.mergedAt?R.Merged:t.closedAt?R.Rejected:t.isDraft?R.Draft:R.Open;return{auth:{client:Ue.Github,tokenName:e},branches:{headBranch:{branchName:((d=t.headRef)==null?void 0:d.name)||new Error("Missing 'Contents' read permissions."),headCommitHash:((O=(v=t.headRef)==null?void 0:v.target)==null?void 0:O.oid)||new Error("Missing 'Contents' read permissions."),repo:{isArchived:t.headRepository.isArchived,isPrivate:t.headRepository.isPrivate,htmlUrl:t.headRepository.url,repoName:t.headRepository.name,repoOwner:f(t.headRepository.owner)}},targetBranch:{branchName:((F=t.baseRef)==null?void 0:F.name)||new Error("Missing 'Contents' read permissions."),headCommitHash:((L=(j=t.baseRef)==null?void 0:j.target)==null?void 0:L.oid)||new Error("Missing 'Contents' read permissions."),repo:{isArchived:t.baseRepository.isArchived,isPrivate:t.baseRepository.isPrivate,htmlUrl:t.baseRepository.url,repoName:t.baseRepository.name,repoOwner:f(t.baseRepository.owner)}}},changes:{additions:t.additions,deletions:t.deletions,changedFiles:t.changedFiles},dates:o,id:{htmlUrl:t.url,prId:t.id,prNumber:String(t.number),title:t.title,owner:f(t.baseRepository.owner)},status:{checksStatus:ct((B=(x=(Q=(V=t.commits.nodes[0])==null?void 0:V.commit)==null?void 0:Q.statusCheckRollup)==null?void 0:x.contexts)==null?void 0:B.checkRunCountsByState),comments:ut(t.reviewThreads.nodes),commitCount:t.commits.totalCount,mergeStatus:u,mergedBy:t.mergedBy?f(t.mergedBy):void 0,needsReviewFromCurrentUser:lt(u,s,i),hasMergeConflicts:t.mergeable===M.Conflicting,labels:t.labels?t.labels.nodes.map($=>({...$,color:`#${$.color}`})):[]},users:i,cost:r,raw:t}}function ut(e){return e.reduce((t,s)=>(s.isResolved&&t.resolved++,t.total++,t),{resolved:0,total:0})}function lt(e,t,s){var r;return e===R.Open&&((r=s.reviewers[t.username])==null?void 0:r.reviewStatus)===E.Pending&&!(t.username in s.assignees)}function dt(e){const t=oe(e.reviewRequests.nodes.map(a=>f(a.requestedReviewer))),s=b(e.latestReviews.nodes,a=>a.author.login),r=b(e.latestOpinionatedReviews.nodes,a=>a.author.login),o=Array.from(new Set([...Object.keys(t),...Object.keys(s),...Object.keys(r)]));return Y(o.map(a=>{var u,p,d,v;const n=t[a]||((u=s[a])==null?void 0:u.author)||((p=r[a])==null?void 0:p.author);if(!n)throw new Error(`Failed to find user '${a}'`);const i=Ae(t,a)?E.Pending:((d=r[a])==null?void 0:d.state)===A.Approved?E.Accepted:((v=r[a])==null?void 0:v.state)===A.ChangesRequested?E.Rejected:E.Pending;return[a,{user:{avatarUrl:n.avatarUrl||"",profileUrl:n.avatarUrl||"",username:a},reviewStatus:i}]}))}function ct(e){return e?e.reduce((s,r)=>(C(Ze,r.state)?s.failCount+=r.count:C(Xe,r.state)?s.inProgressCount+=r.count:C(_e,r.state)&&(s.successCount+=r.count),s.totalCount++,s),{successCount:0,failCount:0,inProgressCount:0,totalCount:0}):new Error("Missing 'Contents' or 'Commit statuses' read permissions.")}function f(e){return{avatarUrl:e.teamAvatarUrl||e.avatarUrl||"",profileUrl:e.url,username:e.login}}function oe(e){return b(e,t=>t.username)}let W=!1;async function ft(e){if(W)throw new Error("Refusing to fetch because GraphQL query cost is too high.");const t=await Promise.allSettled(e.flatMap(n=>[J(N.PullRequest,I.OpenPullRequests,{filter:{onlyMyself:!0}},n),J(N.PullRequest,I.ClosedPullRequests,{filter:{onlyMyself:!0}},n)]));let s;const r=t.flatMap(n=>{if(n.status==="fulfilled"){const i=n.value;if(Ce(i))return[i];if(i.data.rateLimit.cost>1)throw W=!0,new Error("GraphQL query cost is too high.");return s||(s=f(i.data.viewer)),i.data.search.nodes.map(u=>(Le(s),it(i.authTokenName,u,s,i.data.rateLimit)))}else return[k(n.reason)]}),o=Y(r.map(n=>n instanceof Error?[Pe(32),n]:[n.id.prId,n])),a=Object.values(o).sort((n,i)=>{if(n instanceof Error&&i instanceof Error){const u=n.name.localeCompare(i.name);return u||n.message.localeCompare(i.message)}else return n instanceof Error?-1:i instanceof Error||G({fullDate:n.dates.created,relativeTo:i.dates.created})?1:-1});if(!s)throw new Error("User was never parsed from the GitHub GraphQL response.");return{pullRequests:a,user:s}}const ht={updateInterval:{seconds:10},cacheTimeout:{minutes:5}},mt=m({timestamp:0,data:Je},!0),h=class h extends We{constructor(s,r){super();g(this,"value");g(this,"lastResolvedValue");g(this,"options",ht);this.authTokens=s,r&&this.overrideOptions(r),this.setPromiseValue(this.loadCachedValue()),this.scheduleFutureUpdate()}async saveCache(s){await h.cacheStore.setItem(h.cacheKey,{timestamp:Date.now(),data:s})}async loadCachedValue(){const s=await h.cacheStore.getItem(h.cacheKey);return Te(s,mt)?(G({fullDate:re(),relativeTo:te(U(s.timestamp),this.options.cacheTimeout)})?this.setUpdatedValue(!0):setTimeout(()=>this.setUpdatedValue(!0)),s.data):this.fetchData()}setPromiseValue(s){this.dispatch(new De({detail:s})),this.value=s,s.then(r=>{this.dispatch(new be({detail:r})),this.value=r,Ie(this.lastResolvedValue,r)||(this.dispatch(new Ne({detail:r})),this.lastResolvedValue=r,this.saveCache(r))}).catch(r=>{this.dispatch(new we({detail:k(r)}))})}overrideOptions(s){s&&(this.options=ee(this.options,s))}async fetchData(){return await ft(this.authTokens)}scheduleFutureUpdate(){globalThis.setTimeout(()=>{this.setUpdatedValue(!1)},qe(this.options.updateInterval,Me.Milliseconds).milliseconds)}async setUpdatedValue(s){if(this.scheduleFutureUpdate(),!s&&Oe(this.value))return this.value;const r=this.fetchData();return this.setPromiseValue(r),await r}};g(h,"cacheStore",je.createInstance({description:"github client cache for review-vir",name:"review-vir-github-cache",storeName:"review-vir-github-cache"})),g(h,"cacheKey","value");let w=h;const St=Fe({init(e){return new w(e)}});export{w as GithubClient,St as githubClient};
