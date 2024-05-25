var ie=Object.defineProperty;var ue=(e,t,r)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var g=(e,t,r)=>(ue(e,typeof t!="symbol"?t+"":t,r),r);import{A as le,i as W,a as y,p as Z,t as N,I as de,b as T,f as ce,D as v,u as fe,c as _,d as he,e as C,g as m,h as me,o as l,j as pe,k as ge,T as ve,l as Se,m as U,n as Re,q as ye,r as Ee,P as S,S as Pe,s as R,v as X,w as Y,x as Ae,y as A,z as Te,B as Ce,C as G,E as Ue,F as k,G as be,H as De,J as Ie,K as Ne,L as we,M as Me,N as qe,O as Oe,Q as Fe,R as Le}from"./index-bf204aed.js";import{l as je}from"./index-f4dd668f.js";function xe(e,t){return e.match(t)??[]}function Ve(e,t){if(e==null)throw new le(t||"defined assertion failed")}function ee(...e){if(!W(e,1))return{};if(e.length===1)return e[0];let t;const r={};return e.forEach(s=>{if(y(s,"object"))y(t,"object")||(t={...s});else{t=s;return}Object.entries(s).forEach(([o,a])=>{r[o]||(r[o]=[]),r[o].push(a)})}),y(t,"object")&&Object.entries(r).forEach(([s,o])=>{const a=ee(...o);a===void 0&&s in t?delete t[s]:a!==void 0&&(t[s]=a)}),t}function te(e,t){return Z(N(e).plus(t))}function Qe(e){if(!de.isValidIANAZone(e))throw new Error(`'${e}' is not a valid time zone`)}function Be(e){T(e,ce),Qe(e.timezone),N(e)}function $e(e){try{return Be(e),!0}catch{return!1}}function E(e){return re(e,_)}function re(e,t){const r=ze(e,t);if(!r||!r.isValid)throw new Error(`Failed to parse date input '${e}'`);return Z(r,t)}function z(e){const t=v.fromJSDate(new Date(e));if(t.isValid)return t}function ze(e,t){if($e(e)&&(e=N(e).toMillis()),v.isDateTime(e))return e.setZone(t);if(y(e,"number"))return v.fromMillis(e,{zone:fe}).setZone(t);if(y(e,"string")){const r=v.fromISO(e,{zone:t});return r.isValid?r:z(e)}else if(e instanceof Date)return v.fromJSDate(e).setZone(t);return z(e)}function He(e){return re(Date.now(),e)}function se(){return He(_)}function Ke(e){return[String(Math.abs(e.year)).padStart(4,"0"),String(Math.abs(e.month)).padStart(2,"0"),String(Math.abs(e.day)).padStart(2,"0")].join("-")}function Je(e,t){const r=he(e,"second")&&t?String(Math.abs(e.second)).padStart(2,"0"):void 0;return[String(Math.abs(e.hour)).padStart(2,"0"),String(Math.abs(e.minute)).padStart(2,"0"),r].filter(C).join(":")}function We(e,t){return{date:Ke(e),time:Je(e,t.includeSeconds),timezone:e.timezone}}const Ze=m({user:me,pullRequests:[l(ge,pe(Error))]},!0);class _e extends ve{}const ae=m({extensions:Se(),locations:[{line:0,column:0}],message:"",path:[l("",0)],type:l("",void 0)});function H(e,t){return e+t}var ne=(e=>(e.ActionRequired="ACTION_REQUIRED",e.Cancelled="CANCELLED",e.Completed="COMPLETED",e.Failure="FAILURE",e.InProgress="IN_PROGRESS",e.Neutral="NEUTRAL",e.Pending="PENDING",e.Queued="QUEUED",e.Skipped="SKIPPED",e.Stale="STALE",e.StartupFailure="STARTUP_FAILURE",e.Success="SUCCESS",e.TimedOut="TIMED_OUT",e.Waiting="WAITING",e))(ne||{}),P=(e=>(e.Approved="APPROVED",e.Pending="PENDING",e.Commented="COMMENTED",e.ChangesRequested="CHANGES_REQUESTED",e.Dismissed="DISMISSED",e))(P||{}),w=(e=>(e.Mergeable="MERGEABLE",e.Conflicting="CONFLICTING",e.Unknown="UNKNOWN",e))(w||{});const Xe=["ACTION_REQUIRED","CANCELLED","FAILURE","STALE","STARTUP_FAILURE","TIMED_OUT"],Ye=["COMPLETED","NEUTRAL","SKIPPED","SUCCESS"],Ge=["IN_PROGRESS","PENDING","QUEUED","WAITING"],c=m({login:"",avatarUrl:l(void 0,""),teamAvatarUrl:l(void 0,""),url:""},!0),ke=m({state:U(P),author:c,submittedAt:""},!0),et=m({additions:0,assignees:{nodes:[c]},author:c,baseRef:l(null,{name:"",target:{oid:""}}),bodyText:"",mergeable:U(w),headRef:l(null,{name:"",target:{oid:""}}),labels:l(null,{nodes:[{name:"",color:""}]}),baseRepository:{name:"",owner:c,isArchived:!1,isPrivate:!1,url:""},headRepository:{name:"",owner:c,isArchived:!1,isPrivate:!1,url:""},changedFiles:0,closedAt:l(null,""),commits:{nodes:[l(null,{commit:{statusCheckRollup:l(null,{contexts:{checkRunCountsByState:[{count:0,state:U(ne)}]}})}})],totalCount:0},createdAt:"",deletions:0,id:"",isDraft:!1,mergedAt:l(null,""),mergedBy:l(null,c),number:0,reviewThreads:{nodes:[{isResolved:!1}]},latestOpinionatedReviews:{nodes:[ke]},reviewRequests:{nodes:[{requestedReviewer:c}]},title:"",updatedAt:"",url:""},!0),tt=m({errors:l(void 0,[ae]),data:{rateLimit:{cost:1,limit:5e3,nodeCount:0,remaining:0,resetAt:"",used:0},viewer:c,search:{issueCount:0,pageInfo:{endCursor:l("",null),hasNextPage:!1},nodes:[et]}}},!0),rt=`
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
`;var b=(e=>(e.OpenPullRequests="open-pull-requests",e.ClosedPullRequests="closed-pull-requests",e))(b||{});function st(e){if(!e.filter.onlyMyself&&!e.filter.org)throw new Error("Github query too broad: must filter to self or an org")}const at={"open-pull-requests"(e){var r,s;return["is:open","type:pr","archived:false",((r=e.filter)==null?void 0:r.onlyMyself)&&"involves:@me",((s=e.filter)==null?void 0:s.org)&&`org:${e.filter.org}`].filter(C).join(" ")},"closed-pull-requests"(e){var o,a;const t=te(se(),{weeks:-1});return["is:closed","type:pr","archived:false",`closed:>=${We(t,{includeSeconds:!1}).date}`,((o=e.filter)==null?void 0:o.onlyMyself)&&"involves:@me",((a=e.filter)==null?void 0:a.org)&&`org:${e.filter.org}`].filter(C).join(" ")}};function nt(e,t,r,s){return st(r),{query:ot[e],variables:{searchQuery:at[t](r),afterCursor:s||null}}}var D=(e=>(e.PullRequest="pull-request",e))(D||{});const ot={"pull-request":rt},it=Re({"pull-request":tt},(e,t)=>m(ye(t,{authTokenName:""}),!0)),ut={"pull-request"(e){return{totalItemCount:e.data.search.issueCount,nextPageCursor:e.data.search.pageInfo.hasNextPage&&e.data.search.pageInfo.endCursor||void 0}}},lt={"pull-request"(e){const t=e.slice(-1)[0];return{authTokenName:t.authTokenName,errors:e.flatMap(r=>r.errors??[]),data:{rateLimit:{...t.data.rateLimit,cost:e.map(r=>r.data.rateLimit.cost).reduce(H),nodeCount:e.map(r=>r.data.rateLimit.nodeCount).reduce(H)},viewer:t.data.viewer,search:{issueCount:t.data.search.issueCount,pageInfo:t.data.search.pageInfo,nodes:e.flatMap(r=>r.data.search.nodes)}}}}};async function K(e,t,r,s){try{let o;const a=[];do{const n=nt(e,t,r,o),u=await(await fetch("https://api.github.com/graphql",{method:"post",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`bearer ${s.authTokenSecret}`},body:JSON.stringify(n)})).json();u.authTokenName=s.authTokenName,u.errors&&u.errors.forEach(p=>{T(p,ae)});try{T(u,it[e])}catch(p){throw console.info(u),p}const d=ut[e](u);if(o=d.nextPageCursor,a.push(u),d.totalItemCount>1e3)throw new Error(`Search too broad: got '${d.totalItemCount}' items.`)}while(o);if(!W(a,1))throw new Error("No data received from GitHub.");return lt[e](a)}catch(o){const a=Ee(o,`Failed to fetch data for token '${s.authTokenName}'.`);return console.error(a),a}}function dt(e,t,r,s){var M,q,O,F,L,j,x,V,Q,B;const o={closed:t.closedAt?E(t.closedAt):void 0,created:E(t.createdAt),lastUpdated:E(t.updatedAt)},a=t.assignees.nodes.map(f),n=[f(t.author)],i=pt(t.bodyText),u={assignees:oe(a.length?a:n),reviewers:ht(i,t)},d=t.mergedAt?S.Merged:t.closedAt?S.Rejected:t.isDraft?S.Draft:S.Open;return{auth:{client:Pe.Github,tokenName:e},branches:{headBranch:{branchName:((M=t.headRef)==null?void 0:M.name)||new Error("Missing 'Contents' read permissions."),headCommitHash:((O=(q=t.headRef)==null?void 0:q.target)==null?void 0:O.oid)||new Error("Missing 'Contents' read permissions."),repo:{isArchived:t.headRepository.isArchived,isPrivate:t.headRepository.isPrivate,htmlUrl:t.headRepository.url,repoName:t.headRepository.name,repoOwner:f(t.headRepository.owner)}},targetBranch:{branchName:((F=t.baseRef)==null?void 0:F.name)||new Error("Missing 'Contents' read permissions."),headCommitHash:((j=(L=t.baseRef)==null?void 0:L.target)==null?void 0:j.oid)||new Error("Missing 'Contents' read permissions."),repo:{isArchived:t.baseRepository.isArchived,isPrivate:t.baseRepository.isPrivate,htmlUrl:t.baseRepository.url,repoName:t.baseRepository.name,repoOwner:f(t.baseRepository.owner)}}},changes:{additions:t.additions,deletions:t.deletions,changedFiles:t.changedFiles},dates:o,id:{htmlUrl:t.url,prId:t.id,prNumber:String(t.number),title:t.title,owner:f(t.baseRepository.owner)},status:{checksStatus:mt((B=(Q=(V=(x=t.commits.nodes[0])==null?void 0:x.commit)==null?void 0:V.statusCheckRollup)==null?void 0:Q.contexts)==null?void 0:B.checkRunCountsByState),comments:ct(t.reviewThreads.nodes),commitCount:t.commits.totalCount,mergeStatus:d,mergedBy:t.mergedBy?f(t.mergedBy):void 0,needsReviewFromCurrentUser:ft(d,r,u),userIsPrimaryReviewer:i.includes(r.username),hasMergeConflicts:t.mergeable===w.Conflicting,labels:t.labels?t.labels.nodes.map($=>({...$,color:`#${$.color}`})):[]},users:u,cost:s,raw:t}}function ct(e){return e.reduce((t,r)=>(r.isResolved&&t.resolved++,t.total++,t),{resolved:0,total:0})}function ft(e,t,r){var s;return e===S.Open&&((s=r.reviewers[t.username])==null?void 0:s.reviewStatus)===R.Pending&&!(t.username in r.assignees)}function ht(e,t){const r=oe(t.reviewRequests.nodes.map(a=>f(a.requestedReviewer))),s=X(t.latestOpinionatedReviews.nodes,a=>a.author.login),o=Array.from(new Set([...Object.keys(r),...Object.keys(s)]));return Y(o.map(a=>{var u,d,p;const n=r[a]||((u=s[a])==null?void 0:u.author);if(!n)throw new Error(`Failed to find user '${a}'`);const i=Ae(r,a)?R.Pending:((d=s[a])==null?void 0:d.state)===P.Approved?R.Accepted:((p=s[a])==null?void 0:p.state)===P.ChangesRequested?R.Rejected:R.Pending;return[a,{user:{avatarUrl:n.avatarUrl||"",profileUrl:n.avatarUrl||"",username:a},isPrimaryReviewer:e.includes(a),reviewStatus:i}]}))}function mt(e){return e?e.reduce((r,s)=>(A(Xe,s.state)?r.failCount+=s.count:A(Ge,s.state)?r.inProgressCount+=s.count:A(Ye,s.state)&&(r.successCount+=s.count),r.totalCount++,r),{successCount:0,failCount:0,inProgressCount:0,totalCount:0}):new Error("Missing 'Contents' or 'Commit statuses' read permissions.")}function f(e){return{avatarUrl:e.teamAvatarUrl||e.avatarUrl||"",profileUrl:e.url,username:e.login}}function oe(e){return X(e,t=>t.username)}function pt(e){const[,t]=xe(e,/primary reviewers?((?:[^@]+?@\w+)+)/i);return t?Array.from(t.matchAll(/@\w+/g)).map(s=>Te({value:s[0],prefix:"@"})):[]}let J=!1;async function gt(e){if(J)throw new Error("Refusing to fetch because GraphQL query cost is too high.");const t=await Promise.allSettled(e.flatMap(n=>[K(D.PullRequest,b.OpenPullRequests,{filter:{onlyMyself:!0}},n),K(D.PullRequest,b.ClosedPullRequests,{filter:{onlyMyself:!0}},n)]));let r;const s=t.flatMap(n=>{if(n.status==="fulfilled"){const i=n.value;if(Ce(i))return[i];if(i.data.rateLimit.cost>1)throw J=!0,new Error("GraphQL query cost is too high.");return r||(r=f(i.data.viewer)),i.data.search.nodes.map(u=>(Ve(r),dt(i.authTokenName,u,r,i.data.rateLimit)))}else return[G(n.reason)]}),o=Y(s.map(n=>n instanceof Error?[Ue(32),n]:[n.id.prId,n])),a=Object.values(o).sort((n,i)=>{if(n instanceof Error&&i instanceof Error){const u=n.name.localeCompare(i.name);return u||n.message.localeCompare(i.message)}else return n instanceof Error?-1:i instanceof Error||k({fullDate:n.dates.created,relativeTo:i.dates.created})?1:-1});if(!r)throw new Error("User was never parsed from the GitHub GraphQL response.");return{pullRequests:a,user:r}}const vt={updateInterval:{seconds:10},cacheTimeout:{minutes:5}},St=m({timestamp:0,data:Ze},!0),h=class h extends _e{constructor(r,s){super();g(this,"value");g(this,"lastResolvedValue");g(this,"options",vt);this.authTokens=r,s&&this.overrideOptions(s),this.setPromiseValue(this.loadCachedValue()),this.scheduleFutureUpdate()}async saveCache(r){await h.cacheStore.setItem(h.cacheKey,{timestamp:Date.now(),data:r})}async loadCachedValue(){const r=await h.cacheStore.getItem(h.cacheKey);return be(r,St)?(k({fullDate:se(),relativeTo:te(E(r.timestamp),this.options.cacheTimeout)})?this.setUpdatedValue(!0):setTimeout(()=>this.setUpdatedValue(!0)),r.data):this.fetchData()}setPromiseValue(r){this.dispatch(new De({detail:r})),this.value=r,r.then(s=>{this.dispatch(new Ie({detail:s})),this.value=s,Ne(this.lastResolvedValue,s)||(this.dispatch(new we({detail:s})),this.lastResolvedValue=s,this.saveCache(s))}).catch(s=>{this.dispatch(new Me({detail:G(s)}))})}overrideOptions(r){r&&(this.options=ee(this.options,r))}async fetchData(){return await gt(this.authTokens)}scheduleFutureUpdate(){globalThis.setTimeout(()=>{this.setUpdatedValue(!1)},qe(this.options.updateInterval,Oe.Milliseconds).milliseconds)}async setUpdatedValue(r){if(this.scheduleFutureUpdate(),!r&&Fe(this.value))return this.value;const s=this.fetchData();return this.setPromiseValue(s),await s}};g(h,"cacheStore",je.createInstance({description:"github client cache for review-vir",name:"review-vir-github-cache",storeName:"review-vir-github-cache"})),g(h,"cacheKey","value");let I=h;const Pt=Le({init(e){return new I(e)}});export{I as GithubClient,Pt as githubClient};
