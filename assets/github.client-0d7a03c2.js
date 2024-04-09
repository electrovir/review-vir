var ne=Object.defineProperty;var oe=(e,t,r)=>t in e?ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var p=(e,t,r)=>(oe(e,typeof t!="symbol"?t+"":t,r),r);import{A as ie,g as ue,i as J,a as S,p as W,t as b,I as le,b as A,f as de,D as g,u as ce,c as Z,d as m,e as fe,o as l,h as me,j as he,T as pe,k as ge,l as y,m as ve,n as Se,q as P,r as Re,P as v,S as Ee,s as ye,v as _,w as T,x as B,y as Ce,z as X,B as Te,C as Ae,E as Y,F as Pe,G as Ue,H as De,J as Ie,K as be,L as Ne,M as we,N as Me,O as qe,Q as Oe}from"./index-32eff5b1.js";import{l as Fe}from"./index-f4dd668f.js";function Le(e,t){if(e==null)throw new ie(t||"defined assertion failed")}function Ve(e,t){return ue(e).filter(s=>{const a=e[s];return t(s,a,e)}).reduce((s,a)=>(s[a]=e[a],s),{})}function G(...e){if(!J(e,1))return{};if(e.length===1)return e[0];let t;const r={};return e.forEach(s=>{if(S(s,"object"))S(t,"object")||(t={...s});else{t=s;return}Object.entries(s).forEach(([a,n])=>{r[a]||(r[a]=[]),r[a].push(n)})}),S(t,"object")&&Object.entries(r).forEach(([s,a])=>{const n=G(...a);n===void 0&&s in t?delete t[s]:n!==void 0&&(t[s]=n)}),t}const je=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Qe(e,t){return e?je.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function xe(e){return!!e}function k(e,t){return W(b(e).plus(t))}function Be(e){if(!le.isValidIANAZone(e))throw new Error(`'${e}' is not a valid time zone`)}function $e(e){A(e,de),Be(e.timezone),b(e)}function Ke(e){try{return $e(e),!0}catch{return!1}}function C(e){return ee(e,Z)}function ee(e,t){const r=ze(e,t);if(!r||!r.isValid)throw new Error(`Failed to parse date input '${e}'`);return W(r,t)}function $(e){const t=g.fromJSDate(new Date(e));if(t.isValid)return t}function ze(e,t){if(Ke(e)&&(e=b(e).toMillis()),g.isDateTime(e))return e.setZone(t);if(S(e,"number"))return g.fromMillis(e,{zone:ce}).setZone(t);if(S(e,"string")){const r=g.fromISO(e,{zone:t});return r.isValid?r:$(e)}else if(e instanceof Date)return g.fromJSDate(e).setZone(t);return $(e)}function He(e){return ee(Date.now(),e)}function te(){return He(Z)}function Je(e){return[String(Math.abs(e.year)).padStart(4,"0"),String(Math.abs(e.month)).padStart(2,"0"),String(Math.abs(e.day)).padStart(2,"0")].join("-")}function We(e,t){const r=Qe(e,"second")&&t?String(Math.abs(e.second)).padStart(2,"0"):void 0;return[String(Math.abs(e.hour)).padStart(2,"0"),String(Math.abs(e.minute)).padStart(2,"0"),r].filter(xe).join(":")}function Ze(e,t){return{date:Je(e),time:We(e,t.includeSeconds),timezone:e.timezone}}const _e=m({user:fe,pullRequests:[l(he,me(Error))]},!0);class Xe extends pe{}const re=m({extensions:ge(),locations:[{line:0,column:0}],message:"",path:[l("",0)],type:""});function K(e,t){return e+t}var se=(e=>(e.ActionRequired="ACTION_REQUIRED",e.Cancelled="CANCELLED",e.Completed="COMPLETED",e.Failure="FAILURE",e.InProgress="IN_PROGRESS",e.Neutral="NEUTRAL",e.Pending="PENDING",e.Queued="QUEUED",e.Skipped="SKIPPED",e.Stale="STALE",e.StartupFailure="STARTUP_FAILURE",e.Success="SUCCESS",e.TimedOut="TIMED_OUT",e.Waiting="WAITING",e))(se||{}),R=(e=>(e.Approved="APPROVED",e.Pending="PENDING",e.Commented="COMMENTED",e.ChangesRequested="CHANGES_REQUESTED",e.Dismissed="DISMISSED",e))(R||{}),N=(e=>(e.Mergeable="MERGEABLE",e.Conflicting="CONFLICTING",e.Unknown="UNKNOWN",e))(N||{});const Ye=["ACTION_REQUIRED","CANCELLED","FAILURE","STALE","STARTUP_FAILURE","TIMED_OUT"],Ge=["COMPLETED","NEUTRAL","SKIPPED","SUCCESS"],ke=["IN_PROGRESS","PENDING","QUEUED","WAITING"],d=m({login:"",avatarUrl:l(void 0,""),teamAvatarUrl:l(void 0,""),url:""},!0),et=m({additions:0,assignees:{nodes:[d]},author:d,baseRef:l(null,{name:"",target:{oid:""}}),mergeable:y(N),headRef:l(null,{name:"",target:{oid:""}}),labels:l(null,{nodes:[{name:"",color:""}]}),baseRepository:{name:"",owner:d,isArchived:!1,isPrivate:!1,url:""},headRepository:{name:"",owner:d,isArchived:!1,isPrivate:!1,url:""},changedFiles:0,closedAt:l(null,""),commits:{nodes:[l(null,{commit:{statusCheckRollup:l(null,{contexts:{checkRunCountsByState:[{count:0,state:y(se)}]}})}})],totalCount:0},createdAt:"",deletions:0,id:"",isDraft:!1,mergedAt:l(null,""),mergedBy:l(null,d),number:0,reviewThreads:{nodes:[{isResolved:!1}]},latestReviews:{nodes:[{state:y(R),author:d}]},latestOpinionatedReviews:{nodes:[{state:y(R),author:d}]},reviewRequests:{nodes:[{requestedReviewer:d}]},title:"",updatedAt:"",url:""},!0),tt=m({errors:l(void 0,[re]),data:{rateLimit:{cost:1,limit:5e3,nodeCount:0,remaining:0,resetAt:"",used:0},viewer:d,search:{issueCount:0,pageInfo:{endCursor:l("",null),hasNextPage:!1},nodes:[et]}}},!0),rt=`
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
`;var U=(e=>(e.OpenPullRequests="open-pull-requests",e.ClosedPullRequests="closed-pull-requests",e))(U||{});function st(e){if(!e.filter.onlyMyself&&!e.filter.org)throw new Error("Github query too broad: must filter to self or an org")}const at={"open-pull-requests"(e){var r,s;return["is:open","type:pr","archived:false",((r=e.filter)==null?void 0:r.onlyMyself)&&"involves:@me",((s=e.filter)==null?void 0:s.org)&&`org:${e.filter.org}`].filter(P).join(" ")},"closed-pull-requests"(e){var a,n;const t=k(te(),{weeks:-1});return["is:closed","type:pr","archived:false",`closed:>=${Ze(t,{includeSeconds:!1}).date}`,((a=e.filter)==null?void 0:a.onlyMyself)&&"involves:@me",((n=e.filter)==null?void 0:n.org)&&`org:${e.filter.org}`].filter(P).join(" ")}};function nt(e,t,r,s){return st(r),{query:ot[e],variables:{searchQuery:at[t](r),afterCursor:s||null}}}var D=(e=>(e.PullRequest="pull-request",e))(D||{});const ot={"pull-request":rt},it=ve({"pull-request":tt},(e,t)=>m(Se(t,{authTokenName:""}),!0)),ut={"pull-request"(e){return{totalItemCount:e.data.search.issueCount,nextPageCursor:e.data.search.pageInfo.hasNextPage&&e.data.search.pageInfo.endCursor||void 0}}},lt={"pull-request"(e){const t=e.slice(-1)[0];return{authTokenName:t.authTokenName,errors:e.flatMap(r=>r.errors??[]),data:{rateLimit:{...t.data.rateLimit,cost:e.map(r=>r.data.rateLimit.cost).reduce(K),nodeCount:e.map(r=>r.data.rateLimit.nodeCount).reduce(K)},viewer:t.data.viewer,search:{issueCount:t.data.search.issueCount,pageInfo:t.data.search.pageInfo,nodes:e.flatMap(r=>r.data.search.nodes)}}}}};async function z(e,t,r,s){try{let a;const n=[];do{const o=nt(e,t,r,a),u=await(await fetch("https://api.github.com/graphql",{method:"post",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`bearer ${s.authTokenSecret}`},body:JSON.stringify(o)})).json();u.authTokenName=s.authTokenName,u.errors&&u.errors.forEach(h=>{A(h,re)});try{A(u,it[e])}catch(h){throw console.info(u),h}const E=ut[e](u);if(a=E.nextPageCursor,n.push(u),E.totalItemCount>1e3)throw new Error(`Search too broad: got '${E.totalItemCount}' items.`)}while(a);if(!J(n,1))throw new Error("No data received from GitHub.");return lt[e](n)}catch(a){const n=Re(a,`Failed to fetch data for token '${s.authTokenName}'.`);return console.error(n),n}}function dt(e,t,r,s){var h,w,M,q,O,F,L,V,j,Q;const a={closed:t.closedAt?C(t.closedAt):void 0,created:C(t.createdAt),lastUpdated:C(t.updatedAt)},n=t.assignees.nodes.map(c),o=[c(t.author)],i={assignees:ae(n.length?n:o),reviewers:mt(t)},u=t.mergedAt?v.Merged:t.closedAt?v.Rejected:t.isDraft?v.Draft:v.Open;return{auth:{client:Ee.Github,tokenName:e},branches:{headBranch:{branchName:((h=t.headRef)==null?void 0:h.name)||new Error("Missing 'Contents' read permissions."),headCommitHash:((M=(w=t.headRef)==null?void 0:w.target)==null?void 0:M.oid)||new Error("Missing 'Contents' read permissions."),repo:{isArchived:t.headRepository.isArchived,isPrivate:t.headRepository.isPrivate,htmlUrl:t.headRepository.url,repoName:t.headRepository.name,repoOwner:c(t.headRepository.owner)}},targetBranch:{branchName:((q=t.baseRef)==null?void 0:q.name)||new Error("Missing 'Contents' read permissions."),headCommitHash:((F=(O=t.baseRef)==null?void 0:O.target)==null?void 0:F.oid)||new Error("Missing 'Contents' read permissions."),repo:{isArchived:t.baseRepository.isArchived,isPrivate:t.baseRepository.isPrivate,htmlUrl:t.baseRepository.url,repoName:t.baseRepository.name,repoOwner:c(t.baseRepository.owner)}}},changes:{additions:t.additions,deletions:t.deletions,changedFiles:t.changedFiles},dates:a,id:{htmlUrl:t.url,prId:t.id,prNumber:String(t.number),title:t.title,owner:c(t.baseRepository.owner)},status:{checksStatus:ht((Q=(j=(V=(L=t.commits.nodes[0])==null?void 0:L.commit)==null?void 0:V.statusCheckRollup)==null?void 0:j.contexts)==null?void 0:Q.checkRunCountsByState),comments:ct(t.reviewThreads.nodes),commitCount:t.commits.totalCount,mergeStatus:u,mergedBy:t.mergedBy?c(t.mergedBy):void 0,needsReviewFromCurrentUser:ft(u,r,i),hasMergeConflicts:t.mergeable===N.Conflicting,labels:t.labels?t.labels.nodes.map(x=>({...x,color:`#${x.color}`})):[]},users:i,cost:s}}function ct(e){return e.reduce((t,r)=>(r.isResolved&&t.resolved++,t.total++,t),{resolved:0,total:0})}function ft(e,t,r){return e===v.Open&&(t.username in r.reviewers.pending||!(t.username in r.reviewers.submitted))&&!(t.username in r.assignees)}function mt(e){const t=ae(e.reviewRequests.nodes.map(a=>c(a.requestedReviewer))),r=ye([...e.latestReviews.nodes,...e.latestOpinionatedReviews.nodes],a=>{const n=c(a.author),o=a.state===R.Approved?B.Accepted:a.state===R.ChangesRequested?B.Rejected:void 0;if(!(n.username in t)){if(o)return{user:n,reviewStatus:o};t[n.username]=n;return}},P),s=_(r,a=>a.user.username);return{pending:Ve(t,a=>!(a in s)),submitted:s}}function ht(e){return e?e.reduce((r,s)=>(T(Ye,s.state)?r.failCount+=s.count:T(ke,s.state)?r.inProgressCount+=s.count:T(Ge,s.state)&&(r.successCount+=s.count),r.totalCount++,r),{successCount:0,failCount:0,inProgressCount:0,totalCount:0}):new Error("Missing 'Contents' or 'Commit statuses' read permissions.")}function c(e){return{avatarUrl:e.teamAvatarUrl||e.avatarUrl||"",profileUrl:e.url,username:e.login}}function ae(e){return _(e,t=>t.username)}let H=!1;async function pt(e){if(H)throw new Error("Refusing to fetch because GraphQL query cost is too high.");const t=await Promise.allSettled(e.flatMap(o=>[z(D.PullRequest,U.OpenPullRequests,{filter:{onlyMyself:!0}},o),z(D.PullRequest,U.ClosedPullRequests,{filter:{onlyMyself:!0}},o)]));let r;const s=t.flatMap(o=>{if(o.status==="fulfilled"){const i=o.value;if(Ce(i))return[i];if(i.data.rateLimit.cost>1)throw H=!0,new Error("GraphQL query cost is too high.");return r||(r=c(i.data.viewer)),i.data.search.nodes.map(u=>(Le(r),dt(i.authTokenName,u,r,i.data.rateLimit)))}else return[X(o.reason)]}),a=Te(s.map(o=>o instanceof Error?[Ae(32),o]:[o.id.prId,o])),n=Object.values(a).sort((o,i)=>{if(o instanceof Error&&i instanceof Error){const u=o.name.localeCompare(i.name);return u||o.message.localeCompare(i.message)}else return o instanceof Error?-1:i instanceof Error||Y({fullDate:o.dates.created,relativeTo:i.dates.created})?1:-1});if(!r)throw new Error("User was never parsed from the GitHub GraphQL response.");return console.log(n.filter(o=>o.id.prNumber==="619")[0]),{pullRequests:n,user:r}}const gt={updateInterval:{seconds:10},cacheTimeout:{minutes:5}},vt=m({timestamp:0,data:_e},!0),f=class f extends Xe{constructor(r,s){super();p(this,"value");p(this,"lastResolvedValue");p(this,"options",gt);this.authTokens=r,s&&this.overrideOptions(s),this.setPromiseValue(this.loadCachedValue()),this.scheduleFutureUpdate()}async saveCache(r){await f.cacheStore.setItem(f.cacheKey,{timestamp:Date.now(),data:r})}async loadCachedValue(){const r=await f.cacheStore.getItem(f.cacheKey);return Pe(r,vt)?(Y({fullDate:te(),relativeTo:k(C(r.timestamp),this.options.cacheTimeout)})?this.setUpdatedValue(!0):setTimeout(()=>this.setUpdatedValue(!0)),r.data):this.fetchData()}setPromiseValue(r){this.dispatch(new Ue({detail:r})),this.value=r,r.then(s=>{this.dispatch(new De({detail:s})),this.value=s,Ie(this.lastResolvedValue,s)||(this.dispatch(new be({detail:s})),this.lastResolvedValue=s,this.saveCache(s))}).catch(s=>{this.dispatch(new Ne({detail:X(s)}))})}overrideOptions(r){r&&(this.options=G(this.options,r))}async fetchData(){return await pt(this.authTokens)}scheduleFutureUpdate(){globalThis.setTimeout(()=>{this.setUpdatedValue(!1)},we(this.options.updateInterval,Me.Milliseconds).milliseconds)}async setUpdatedValue(r){if(this.scheduleFutureUpdate(),!r&&qe(this.value))return this.value;const s=this.fetchData();return this.setPromiseValue(s),await s}};p(f,"cacheStore",Fe.createInstance({description:"github client cache for review-vir",name:"review-vir-github-cache",storeName:"review-vir-github-cache"})),p(f,"cacheKey","value");let I=f;const yt=Oe({init(e){return new I(e)}});export{I as GithubClient,yt as githubClient};
