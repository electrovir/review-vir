var ae=Object.defineProperty;var ne=(e,t,r)=>t in e?ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var p=(e,t,r)=>(ne(e,typeof t!="symbol"?t+"":t,r),r);import{A as oe,g as ie,i as H,a as S,p as J,t as I,I as ue,b as A,f as le,D as g,u as de,c as Z,d as h,e as ce,o as l,h as fe,j as he,T as me,k as pe,l as P,m as ge,n as ve,q as C,r as Se,P as v,S as Re,s as Ee,v as W,w as T,x,y as ye,z as _,B as Pe,C as Te,E as X,F as Ae,G as Ce,H as Ue,J as De,K as be,L as Ie,M as Ne,N as we,O as Me,Q as qe}from"./index-0fd06bde.js";import{l as Oe}from"./index-f4dd668f.js";function Fe(e,t){if(e==null)throw new oe(t||"defined assertion failed")}function Ve(e,t){return ie(e).filter(s=>{const a=e[s];return t(s,a,e)}).reduce((s,a)=>(s[a]=e[a],s),{})}function Y(...e){if(!H(e,1))return{};if(e.length===1)return e[0];let t;const r={};return e.forEach(s=>{if(S(s,"object"))S(t,"object")||(t={...s});else{t=s;return}Object.entries(s).forEach(([a,o])=>{r[a]||(r[a]=[]),r[a].push(o)})}),S(t,"object")&&Object.entries(r).forEach(([s,a])=>{const o=Y(...a);o===void 0&&s in t?delete t[s]:o!==void 0&&(t[s]=o)}),t}const Le=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function je(e,t){return e?Le.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Qe(e){return!!e}function G(e,t){return J(I(e).plus(t))}function xe(e){if(!ue.isValidIANAZone(e))throw new Error(`'${e}' is not a valid time zone`)}function Be(e){A(e,le),xe(e.timezone),I(e)}function $e(e){try{return Be(e),!0}catch{return!1}}function y(e){return k(e,Z)}function k(e,t){const r=Ke(e,t);if(!r||!r.isValid)throw new Error(`Failed to parse date input '${e}'`);return J(r,t)}function B(e){const t=g.fromJSDate(new Date(e));if(t.isValid)return t}function Ke(e,t){if($e(e)&&(e=I(e).toMillis()),g.isDateTime(e))return e.setZone(t);if(S(e,"number"))return g.fromMillis(e,{zone:de}).setZone(t);if(S(e,"string")){const r=g.fromISO(e,{zone:t});return r.isValid?r:B(e)}else if(e instanceof Date)return g.fromJSDate(e).setZone(t);return B(e)}function ze(e){return k(Date.now(),e)}function ee(){return ze(Z)}function He(e){return[String(Math.abs(e.year)).padStart(4,"0"),String(Math.abs(e.month)).padStart(2,"0"),String(Math.abs(e.day)).padStart(2,"0")].join("-")}function Je(e,t){const r=je(e,"second")&&t?String(Math.abs(e.second)).padStart(2,"0"):void 0;return[String(Math.abs(e.hour)).padStart(2,"0"),String(Math.abs(e.minute)).padStart(2,"0"),r].filter(Qe).join(":")}function Ze(e,t){return{date:He(e),time:Je(e,t.includeSeconds),timezone:e.timezone}}const We=h({user:ce,pullRequests:[l(he,fe(Error))]},!0);class _e extends me{}const te=h({extensions:pe(),locations:[{line:0,column:0}],message:"",path:[l("",0)],type:""});function $(e,t){return e+t}var re=(e=>(e.ActionRequired="ACTION_REQUIRED",e.Cancelled="CANCELLED",e.Completed="COMPLETED",e.Failure="FAILURE",e.InProgress="IN_PROGRESS",e.Neutral="NEUTRAL",e.Pending="PENDING",e.Queued="QUEUED",e.Skipped="SKIPPED",e.Stale="STALE",e.StartupFailure="STARTUP_FAILURE",e.Success="SUCCESS",e.TimedOut="TIMED_OUT",e.Waiting="WAITING",e))(re||{}),R=(e=>(e.Approved="APPROVED",e.Pending="PENDING",e.Commented="COMMENTED",e.ChangesRequested="CHANGES_REQUESTED",e.Dismissed="DISMISSED",e))(R||{});const Xe=["ACTION_REQUIRED","CANCELLED","FAILURE","STALE","STARTUP_FAILURE","TIMED_OUT"],Ye=["COMPLETED","NEUTRAL","SKIPPED","SUCCESS"],Ge=["IN_PROGRESS","PENDING","QUEUED","WAITING"],d=h({login:"",avatarUrl:l(void 0,""),teamAvatarUrl:l(void 0,""),url:""},!0),ke=h({additions:0,assignees:{nodes:[d]},author:d,baseRef:l(null,{name:"",target:{oid:""}}),headRef:l(null,{name:"",target:{oid:""}}),labels:l(null,{nodes:[{name:"",color:""}]}),baseRepository:{name:"",owner:d,isArchived:!1,isPrivate:!1,url:""},headRepository:{name:"",owner:d,isArchived:!1,isPrivate:!1,url:""},changedFiles:0,closedAt:l(null,""),commits:{nodes:[l(null,{commit:{statusCheckRollup:l(null,{contexts:{checkRunCountsByState:[{count:0,state:P(re)}]}})}})],totalCount:0},createdAt:"",deletions:0,id:"",isDraft:!1,mergedAt:l(null,""),mergedBy:l(null,d),number:0,reviewThreads:{nodes:[{isResolved:!1}]},latestReviews:{nodes:[{state:P(R),author:d}]},latestOpinionatedReviews:{nodes:[{state:P(R),author:d}]},reviewRequests:{nodes:[{requestedReviewer:d}]},title:"",updatedAt:"",url:""},!0),et=h({errors:l(void 0,[te]),data:{rateLimit:{cost:1,limit:5e3,nodeCount:0,remaining:0,resetAt:"",used:0},viewer:d,search:{issueCount:0,pageInfo:{endCursor:l("",null),hasNextPage:!1},nodes:[ke]}}},!0),tt=`
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
`;var U=(e=>(e.OpenPullRequests="open-pull-requests",e.ClosedPullRequests="closed-pull-requests",e))(U||{});function rt(e){if(!e.filter.onlyMyself&&!e.filter.org)throw new Error("Github query too broad: must filter to self or an org")}const st={"open-pull-requests"(e){var r,s;return["is:open","type:pr","archived:false",((r=e.filter)==null?void 0:r.onlyMyself)&&"involves:@me",((s=e.filter)==null?void 0:s.org)&&`org:${e.filter.org}`].filter(C).join(" ")},"closed-pull-requests"(e){var a,o;const t=G(ee(),{weeks:-1});return["is:closed","type:pr","archived:false",`closed:>=${Ze(t,{includeSeconds:!1}).date}`,((a=e.filter)==null?void 0:a.onlyMyself)&&"involves:@me",((o=e.filter)==null?void 0:o.org)&&`org:${e.filter.org}`].filter(C).join(" ")}};function at(e,t,r,s){return rt(r),{query:nt[e],variables:{searchQuery:st[t](r),afterCursor:s||null}}}var D=(e=>(e.PullRequest="pull-request",e))(D||{});const nt={"pull-request":tt},ot=ge({"pull-request":et},(e,t)=>h(ve(t,{authTokenName:""}),!0)),it={"pull-request"(e){return{totalItemCount:e.data.search.issueCount,nextPageCursor:e.data.search.pageInfo.hasNextPage&&e.data.search.pageInfo.endCursor||void 0}}},ut={"pull-request"(e){const t=e.slice(-1)[0];return{authTokenName:t.authTokenName,errors:e.flatMap(r=>r.errors??[]),data:{rateLimit:{...t.data.rateLimit,cost:e.map(r=>r.data.rateLimit.cost).reduce($),nodeCount:e.map(r=>r.data.rateLimit.nodeCount).reduce($)},viewer:t.data.viewer,search:{issueCount:t.data.search.issueCount,pageInfo:t.data.search.pageInfo,nodes:e.flatMap(r=>r.data.search.nodes)}}}}};async function K(e,t,r,s){try{let a;const o=[];do{const n=at(e,t,r,a),u=await(await fetch("https://api.github.com/graphql",{method:"post",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`bearer ${s.authTokenSecret}`},body:JSON.stringify(n)})).json();u.authTokenName=s.authTokenName,u.errors&&u.errors.forEach(m=>{A(m,te)});try{A(u,ot[e])}catch(m){throw console.info(u),m}const E=it[e](u);if(a=E.nextPageCursor,o.push(u),E.totalItemCount>1e3)throw new Error(`Search too broad: got '${E.totalItemCount}' items.`)}while(a);if(!H(o,1))throw new Error("No data received from GitHub.");return ut[e](o)}catch(a){const o=Se(a,`Failed to fetch data for token '${s.authTokenName}'.`);return console.error(o),o}}function lt(e,t,r,s){var m,N,w,M,q,O,F,V,L,j;const a={closed:t.closedAt?y(t.closedAt):void 0,created:y(t.createdAt),lastUpdated:y(t.updatedAt)},o=t.assignees.nodes.map(c),n=[c(t.author)],i={assignees:se(o.length?o:n),reviewers:ft(t)},u=t.mergedAt?v.Merged:t.closedAt?v.Rejected:t.isDraft?v.Draft:v.Open;return{auth:{client:Re.Github,tokenName:e},branches:{headBranch:{branchName:((m=t.headRef)==null?void 0:m.name)||new Error("Missing 'Contents' read permissions."),headCommitHash:((w=(N=t.headRef)==null?void 0:N.target)==null?void 0:w.oid)||new Error("Missing 'Contents' read permissions."),repo:{isArchived:t.headRepository.isArchived,isPrivate:t.headRepository.isPrivate,htmlUrl:t.headRepository.url,repoName:t.headRepository.name,repoOwner:c(t.headRepository.owner)}},targetBranch:{branchName:((M=t.baseRef)==null?void 0:M.name)||new Error("Missing 'Contents' read permissions."),headCommitHash:((O=(q=t.baseRef)==null?void 0:q.target)==null?void 0:O.oid)||new Error("Missing 'Contents' read permissions."),repo:{isArchived:t.baseRepository.isArchived,isPrivate:t.baseRepository.isPrivate,htmlUrl:t.baseRepository.url,repoName:t.baseRepository.name,repoOwner:c(t.baseRepository.owner)}}},changes:{additions:t.additions,deletions:t.deletions,changedFiles:t.changedFiles},dates:a,id:{htmlUrl:t.url,prId:t.id,prNumber:String(t.number),title:t.title,owner:c(t.baseRepository.owner)},status:{checksStatus:ht((j=(L=(V=(F=t.commits.nodes[0])==null?void 0:F.commit)==null?void 0:V.statusCheckRollup)==null?void 0:L.contexts)==null?void 0:j.checkRunCountsByState),comments:dt(t.reviewThreads.nodes),commitCount:t.commits.totalCount,mergeStatus:u,mergedBy:t.mergedBy?c(t.mergedBy):void 0,needsReviewFromCurrentUser:ct(u,r,i),labels:t.labels?t.labels.nodes.map(Q=>({...Q,color:`#${Q.color}`})):[]},users:i,cost:s}}function dt(e){return e.reduce((t,r)=>(r.isResolved&&t.resolved++,t.total++,t),{resolved:0,total:0})}function ct(e,t,r){return e===v.Open&&(t.username in r.reviewers.pending||!(t.username in r.reviewers.submitted))&&!(t.username in r.assignees)}function ft(e){const t=se(e.reviewRequests.nodes.map(a=>c(a.requestedReviewer))),r=Ee([...e.latestReviews.nodes,...e.latestOpinionatedReviews.nodes],a=>{const o=c(a.author),n=a.state===R.Approved?x.Accepted:a.state===R.ChangesRequested?x.Rejected:void 0;if(n)return{user:o,reviewStatus:n};t[o.username]=o},C),s=W(r,a=>a.user.username);return{pending:Ve(t,a=>!(a in s)),submitted:s}}function ht(e){return e?e.reduce((r,s)=>(T(Xe,s.state)?r.failCount+=s.count:T(Ge,s.state)?r.inProgressCount+=s.count:T(Ye,s.state)&&(r.successCount+=s.count),r.totalCount++,r),{successCount:0,failCount:0,inProgressCount:0,totalCount:0}):new Error("Missing 'Contents' or 'Commit statuses' read permissions.")}function c(e){return{avatarUrl:e.teamAvatarUrl||e.avatarUrl||"",profileUrl:e.url,username:e.login}}function se(e){return W(e,t=>t.username)}let z=!1;async function mt(e){if(z)throw new Error("Refusing to fetch because GraphQL query cost is too high.");const t=await Promise.allSettled(e.flatMap(n=>[K(D.PullRequest,U.OpenPullRequests,{filter:{onlyMyself:!0}},n),K(D.PullRequest,U.ClosedPullRequests,{filter:{onlyMyself:!0}},n)]));let r;const s=t.flatMap(n=>{if(n.status==="fulfilled"){const i=n.value;if(ye(i))return[i];if(i.data.rateLimit.cost>1)throw z=!0,new Error("GraphQL query cost is too high.");return r||(r=c(i.data.viewer)),i.data.search.nodes.map(u=>(Fe(r),lt(i.authTokenName,u,r,i.data.rateLimit)))}else return[_(n.reason)]}),a=Pe(s.map(n=>n instanceof Error?[Te(32),n]:[n.id.prId,n])),o=Object.values(a).sort((n,i)=>{if(n instanceof Error&&i instanceof Error){const u=n.name.localeCompare(i.name);return u||n.message.localeCompare(i.message)}else return n instanceof Error?-1:i instanceof Error||X({fullDate:n.dates.created,relativeTo:i.dates.created})?1:-1});if(!r)throw new Error("User was never parsed from the GitHub GraphQL response.");return console.log(o.filter(n=>n.id.prNumber==="619")[0]),{pullRequests:o,user:r}}const pt={updateInterval:{seconds:10},cacheTimeout:{minutes:5}},gt=h({timestamp:0,data:We},!0),f=class f extends _e{constructor(r,s){super();p(this,"value");p(this,"lastResolvedValue");p(this,"options",pt);this.authTokens=r,s&&this.overrideOptions(s),this.setPromiseValue(this.loadCachedValue()),this.scheduleFutureUpdate()}async saveCache(r){await f.cacheStore.setItem(f.cacheKey,{timestamp:Date.now(),data:r})}async loadCachedValue(){const r=await f.cacheStore.getItem(f.cacheKey);return Ae(r,gt)?(X({fullDate:ee(),relativeTo:G(y(r.timestamp),this.options.cacheTimeout)})?this.setUpdatedValue(!0):setTimeout(()=>this.setUpdatedValue(!0)),r.data):this.fetchData()}setPromiseValue(r){this.dispatch(new Ce({detail:r})),this.value=r,r.then(s=>{this.dispatch(new Ue({detail:s})),this.value=s,De(this.lastResolvedValue,s)||(this.dispatch(new be({detail:s})),this.lastResolvedValue=s,this.saveCache(s))}).catch(s=>{this.dispatch(new Ie({detail:_(s)}))})}overrideOptions(r){r&&(this.options=Y(this.options,r))}async fetchData(){return await mt(this.authTokens)}scheduleFutureUpdate(){globalThis.setTimeout(()=>{this.setUpdatedValue(!1)},Ne(this.options.updateInterval,we.Milliseconds).milliseconds)}async setUpdatedValue(r){if(this.scheduleFutureUpdate(),!r&&Me(this.value))return this.value;const s=this.fetchData();return this.setPromiseValue(s),await s}};p(f,"cacheStore",Oe.createInstance({description:"github client cache for review-vir",name:"review-vir-github-cache",storeName:"review-vir-github-cache"})),p(f,"cacheKey","value");let b=f;const Et=qe({init(e){return new b(e)}});export{b as GithubClient,Et as githubClient};
