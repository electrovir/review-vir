var te=Object.defineProperty;var re=(e,t,r)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var g=(e,t,r)=>(re(e,typeof t!="symbol"?t+"":t,r),r);import{A as se,i as $,a as E,p as z,t as I,I as ae,b as P,f as ne,D as v,u as oe,c as H,d as f,e as ie,o as l,g as ue,h as le,T as de,j as ce,k as j,m as me,l as fe,n as A,q as he,P as S,S as pe,r as ge,s as K,v as C,w as x,x as ve,y as J,z as Se,B as Ee,C as Z,E as Re,G as ye,F as Ce,H as Pe,J as Ae,K as Ue,L as Te,M as De,N as Ie,O as be}from"./index-720bff0a.js";import{l as Ne}from"./index-f4dd668f.js";function Me(e,t){if(e==null)throw new se(t||"defined assertion failed")}function W(...e){if(!$(e,1))return{};if(e.length===1)return e[0];let t;const r={};return e.forEach(s=>{if(E(s,"object"))E(t,"object")||(t={...s});else{t=s;return}Object.entries(s).forEach(([a,n])=>{r[a]||(r[a]=[]),r[a].push(n)})}),E(t,"object")&&Object.entries(r).forEach(([s,a])=>{const n=W(...a);n===void 0&&s in t?delete t[s]:n!==void 0&&(t[s]=n)}),t}const qe=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function we(e,t){return e?qe.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Oe(e){return!!e}function _(e,t){return z(I(e).plus(t))}function Fe(e){if(!ae.isValidIANAZone(e))throw new Error(`'${e}' is not a valid time zone`)}function Ve(e){P(e,ne),Fe(e.timezone),I(e)}function je(e){try{return Ve(e),!0}catch{return!1}}function R(e){return X(e,H)}function X(e,t){const r=xe(e,t);if(!r||!r.isValid)throw new Error(`Failed to parse date input '${e}'`);return z(r,t)}function L(e){const t=v.fromJSDate(new Date(e));if(t.isValid)return t}function xe(e,t){if(je(e)&&(e=I(e).toMillis()),v.isDateTime(e))return e.setZone(t);if(E(e,"number"))return v.fromMillis(e,{zone:oe}).setZone(t);if(E(e,"string")){const r=v.fromISO(e,{zone:t});return r.isValid?r:L(e)}else if(e instanceof Date)return v.fromJSDate(e).setZone(t);return L(e)}function Le(e){return X(Date.now(),e)}function Y(){return Le(H)}function Be(e){return[String(Math.abs(e.year)).padStart(4,"0"),String(Math.abs(e.month)).padStart(2,"0"),String(Math.abs(e.day)).padStart(2,"0")].join("-")}function Qe(e,t){const r=we(e,"second")&&t?String(Math.abs(e.second)).padStart(2,"0"):void 0;return[String(Math.abs(e.hour)).padStart(2,"0"),String(Math.abs(e.minute)).padStart(2,"0"),r].filter(Oe).join(":")}function $e(e,t){return{date:Be(e),time:Qe(e,t.includeSeconds),timezone:e.timezone}}const ze=f({user:ie,pullRequests:[l(le,ue(Error))]},!0);class He extends de{}const G=f({extensions:ce(),locations:[{line:0,column:0}],message:"",path:[l("",0)],type:""});function B(e,t){return e+t}var k=(e=>(e.ActionRequired="ACTION_REQUIRED",e.Cancelled="CANCELLED",e.Completed="COMPLETED",e.Failure="FAILURE",e.InProgress="IN_PROGRESS",e.Neutral="NEUTRAL",e.Pending="PENDING",e.Queued="QUEUED",e.Skipped="SKIPPED",e.Stale="STALE",e.StartupFailure="STARTUP_FAILURE",e.Success="SUCCESS",e.TimedOut="TIMED_OUT",e.Waiting="WAITING",e))(k||{}),y=(e=>(e.Approved="APPROVED",e.Pending="PENDING",e.Commented="COMMENTED",e.ChangesRequested="CHANGES_REQUESTED",e.Dismissed="DISMISSED",e))(y||{});const Ke=["ACTION_REQUIRED","CANCELLED","FAILURE","STALE","STARTUP_FAILURE","TIMED_OUT"],Je=["COMPLETED","NEUTRAL","SKIPPED","SUCCESS"],Ze=["IN_PROGRESS","PENDING","QUEUED","WAITING"],c=f({login:"",avatarUrl:l(void 0,""),teamAvatarUrl:l(void 0,""),url:""},!0),We=f({additions:0,assignees:{nodes:[c]},author:c,baseRef:l(null,{name:"",target:{oid:""}}),headRef:l(null,{name:"",target:{oid:""}}),baseRepository:{name:"",owner:c,isArchived:!1,isPrivate:!1,url:""},headRepository:{name:"",owner:c,isArchived:!1,isPrivate:!1,url:""},changedFiles:0,closedAt:l(null,""),commits:{nodes:[l(null,{commit:{statusCheckRollup:l(null,{contexts:{checkRunCountsByState:[{count:0,state:j(k)}]}})}})],totalCount:0},createdAt:"",deletions:0,id:"",isDraft:!1,mergedAt:l(null,""),mergedBy:l(null,c),number:0,latestOpinionatedReviews:{nodes:[{state:j(y),author:c}]},reviewRequests:{nodes:[{requestedReviewer:c}]},title:"",totalCommentsCount:0,updatedAt:"",url:""},!0),_e=f({errors:l(void 0,[G]),data:{rateLimit:{cost:1,limit:5e3,nodeCount:0,remaining:0,resetAt:"",used:0},viewer:c,search:{issueCount:0,pageInfo:{endCursor:l("",null),hasNextPage:!1},nodes:[We]}}},!0),Xe=`
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
`;var U=(e=>(e.OpenPullRequests="open-pull-requests",e.ClosedPullRequests="closed-pull-requests",e))(U||{});function Ye(e){if(!e.filter.onlyMyself&&!e.filter.org)throw new Error("Github query too broad: must filter to self or an org")}const Ge={"open-pull-requests"(e){var r,s;return["is:open","type:pr","archived:false",((r=e.filter)==null?void 0:r.onlyMyself)&&"involves:@me",((s=e.filter)==null?void 0:s.org)&&`org:${e.filter.org}`].filter(A).join(" ")},"closed-pull-requests"(e){var a,n;const t=_(Y(),{weeks:-1});return["is:closed","type:pr","archived:false",`closed:>=${$e(t,{includeSeconds:!1}).date}`,((a=e.filter)==null?void 0:a.onlyMyself)&&"involves:@me",((n=e.filter)==null?void 0:n.org)&&`org:${e.filter.org}`].filter(A).join(" ")}};function ke(e,t,r,s){return Ye(r),{query:et[e],variables:{searchQuery:Ge[t](r),afterCursor:s||null}}}var T=(e=>(e.PullRequest="pull-request",e))(T||{});const et={"pull-request":Xe},tt=me({"pull-request":_e},(e,t)=>f(fe(t,{authTokenName:""}),!0)),rt={"pull-request"(e){return{totalItemCount:e.data.search.issueCount,nextPageCursor:e.data.search.pageInfo.hasNextPage&&e.data.search.pageInfo.endCursor||void 0}}},st={"pull-request"(e){const t=e.slice(-1)[0];return{authTokenName:t.authTokenName,errors:e.flatMap(r=>r.errors??[]),data:{rateLimit:{...t.data.rateLimit,cost:e.map(r=>r.data.rateLimit.cost).reduce(B),nodeCount:e.map(r=>r.data.rateLimit.nodeCount).reduce(B)},viewer:t.data.viewer,search:{issueCount:t.data.search.issueCount,pageInfo:t.data.search.pageInfo,nodes:e.flatMap(r=>r.data.search.nodes)}}}}};async function Q(e,t,r,s){try{let a;const n=[];do{const o=ke(e,t,r,a),u=await(await fetch("https://api.github.com/graphql",{method:"post",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`bearer ${s.authTokenSecret}`},body:JSON.stringify(o)})).json();u.authTokenName=s.authTokenName,u.errors&&u.errors.forEach(p=>{P(p,G)});try{P(u,tt[e])}catch(p){throw console.info(u),p}const h=rt[e](u);if(a=h.nextPageCursor,n.push(u),h.totalItemCount>1e3)throw new Error(`Search too broad: got '${h.totalItemCount}' items.`)}while(a);if(!$(n,1))throw new Error("No data received from GitHub.");return st[e](n)}catch(a){const n=he(a,`Failed to fetch data for token '${s.authTokenName}'.`);return console.error(n),n}}function at(e,t,r){var h,p,b,N,M,q,w,O,F,V;const s={closed:t.closedAt?R(t.closedAt):void 0,created:R(t.createdAt),lastUpdated:R(t.updatedAt)},a=t.assignees.nodes.map(d),n=[d(t.author)],o={assignees:ee(a.length?a:n),reviewers:ot(t)},i=t.mergedAt?S.Merged:t.closedAt?S.Rejected:t.isDraft?S.Draft:S.Open;return{auth:{client:pe.Github,tokenName:e},branches:{headBranch:{branchName:((h=t.headRef)==null?void 0:h.name)||new Error("Missing 'Contents' read permissions."),headCommitHash:((b=(p=t.headRef)==null?void 0:p.target)==null?void 0:b.oid)||new Error("Missing 'Contents' read permissions."),repo:{isArchived:t.headRepository.isArchived,isPrivate:t.headRepository.isPrivate,htmlUrl:t.headRepository.url,repoName:t.headRepository.name,repoOwner:d(t.headRepository.owner)}},targetBranch:{branchName:((N=t.baseRef)==null?void 0:N.name)||new Error("Missing 'Contents' read permissions."),headCommitHash:((q=(M=t.baseRef)==null?void 0:M.target)==null?void 0:q.oid)||new Error("Missing 'Contents' read permissions."),repo:{isArchived:t.baseRepository.isArchived,isPrivate:t.baseRepository.isPrivate,htmlUrl:t.baseRepository.url,repoName:t.baseRepository.name,repoOwner:d(t.baseRepository.owner)}}},changes:{additions:t.additions,deletions:t.deletions,changedFiles:t.changedFiles},dates:s,id:{htmlUrl:t.url,prId:t.id,prNumber:String(t.number),title:t.title,owner:d(t.baseRepository.owner)},status:{checksStatus:it((V=(F=(O=(w=t.commits.nodes[0])==null?void 0:w.commit)==null?void 0:O.statusCheckRollup)==null?void 0:F.contexts)==null?void 0:V.checkRunCountsByState),commentCount:t.totalCommentsCount,commitCount:t.commits.totalCount,mergeStatus:i,mergedBy:t.mergedBy?d(t.mergedBy):void 0,needsReviewFromCurrentUser:nt(i,r,o)},users:o}}function nt(e,t,r){return e===S.Open&&(t.username in r.reviewers.pending||!(t.username in r.reviewers.submitted))&&!(t.username in r.assignees)}function ot(e){const t=ee(e.reviewRequests.nodes.map(s=>d(s.requestedReviewer))),r=ge(e.latestOpinionatedReviews.nodes,s=>{const a=d(s.author);if(a.username in t)return;const n=s.state===y.Approved?x.Accepted:s.state===y.ChangesRequested?x.Rejected:void 0;if(n)return{user:a,reviewStatus:n};t[a.username]=a},A);return{pending:t,submitted:K(r,s=>s.user.username)}}function it(e){return e?e.reduce((r,s)=>(C(Ke,s.state)?r.failCount+=s.count:C(Ze,s.state)?r.inProgressCount+=s.count:C(Je,s.state)&&(r.successCount+=s.count),r.totalCount++,r),{successCount:0,failCount:0,inProgressCount:0,totalCount:0}):new Error("Missing 'Contents' or 'Commit statuses' read permissions.")}function d(e){return{avatarUrl:e.teamAvatarUrl||e.avatarUrl||"",profileUrl:e.url,username:e.login}}function ee(e){return K(e,t=>t.username)}async function ut(e){const t=await Promise.allSettled(e.flatMap(o=>[Q(T.PullRequest,U.OpenPullRequests,{filter:{onlyMyself:!0}},o),Q(T.PullRequest,U.ClosedPullRequests,{filter:{onlyMyself:!0}},o)]));let r;const s=t.flatMap(o=>{if(o.status==="fulfilled"){const i=o.value;return ve(i)?[i]:(r||(r=d(i.data.viewer)),i.data.search.nodes.map(u=>(Me(r),at(i.authTokenName,u,r))))}else return[J(o.reason)]}),a=Se(s.map(o=>o instanceof Error?[Ee(32),o]:[o.id.prId,o])),n=Object.values(a).sort((o,i)=>{if(o instanceof Error&&i instanceof Error){const u=o.name.localeCompare(i.name);return u||o.message.localeCompare(i.message)}else return o instanceof Error?-1:i instanceof Error||Z({fullDate:o.dates.created,relativeTo:i.dates.created})?1:-1});if(!r)throw new Error("User was never parsed from the GitHub GraphQL response.");return{pullRequests:n,user:r}}const lt={updateInterval:{seconds:10},cacheTimeout:{minutes:5}},dt=f({timestamp:0,data:ze},!0),m=class m extends He{constructor(r,s){super();g(this,"value");g(this,"lastResolvedValue");g(this,"options",lt);this.authTokens=r,s&&this.overrideOptions(s),this.setPromiseValue(this.loadCachedValue()),this.scheduleFutureUpdate()}async saveCache(r){await m.cacheStore.setItem(m.cacheKey,{timestamp:Date.now(),data:r})}async loadCachedValue(){const r=await m.cacheStore.getItem(m.cacheKey);return Re(r,dt)?(Z({fullDate:Y(),relativeTo:_(R(r.timestamp),this.options.cacheTimeout)})?this.setUpdatedValue(!0):setTimeout(()=>this.setUpdatedValue(!0)),r.data):this.fetchData()}setPromiseValue(r){this.dispatch(new ye({detail:r})),this.value=r,r.then(s=>{this.dispatch(new Ce({detail:s})),this.value=s,Pe(this.lastResolvedValue,s)||(this.dispatch(new Ae({detail:s})),this.lastResolvedValue=s,this.saveCache(s))}).catch(s=>{this.dispatch(new Ue({detail:J(s)}))})}overrideOptions(r){r&&(this.options=W(this.options,r))}async fetchData(){return await ut(this.authTokens)}scheduleFutureUpdate(){globalThis.setTimeout(()=>{this.setUpdatedValue(!1)},Te(this.options.updateInterval,De.Milliseconds).milliseconds)}async setUpdatedValue(r){if(this.scheduleFutureUpdate(),!r&&Ie(this.value))return this.value;const s=this.fetchData();return this.setPromiseValue(s),await s}};g(m,"cacheStore",Ne.createInstance({description:"github client cache for review-vir",name:"review-vir-github-cache",storeName:"review-vir-github-cache"})),g(m,"cacheKey","value");let D=m;const ht=be({init(e){return new D(e)}});export{D as GithubClient,ht as githubClient};
