import{c as u,f as k,t as E,e as A,p as F,a as D,I as J,A as Z,b as C,d as X,D as g,s as Y,u as G,g as V,h as d,i as ee,o as c,j as te,k as re,T as se,l as ae,m as b,n as ne,q as oe,r as j,v as ie,P as v,S as ue,w as y,x as le,y as ce,z as x,B as de,G as fe,C as he,E as me,F as pe,H as ge,J as ve}from"./index-CKlgDJWv.js";import{l as ye}from"./index-CCCONDI3.js";function Q(e,t){try{let r=!1;const s=e.map((i,a,n)=>{const o=t(i,a,n);return o instanceof Promise?(r=!0,o):o?[o.key,o.value]:void 0}).filter(u.isTruthy);return r?new Promise(async(i,a)=>{try{const n=k(await Promise.all(s),o=>{if(o)return Array.isArray(o)?o:[o.key,o.value]},u.isTruthy);i(E(n))}catch(n){a(A(n))}}):E(s)}catch(r){throw A(r)}}function B(...e){if(!u.isLengthAtLeast(e,1))return{};if(e.length===1)return e[0];let t;const r={};return e.forEach(s=>{if(u.isObject(s))u.isObject(t)||(t={...s});else{t=s;return}Object.entries(s).forEach(([i,a])=>{r[i]||(r[i]=[]),r[i].push(a)})}),u.isObject(t)&&Object.entries(r).forEach(([s,i])=>{const a=B(...i);a===void 0&&s in t?delete t[s]:a!==void 0&&(t[s]=a)}),t}function $(e,t){return F(D(e).plus(t))}function Re(e,t){if(!J.isValidIANAZone(e))throw new Z(`'${e}' is not a valid time zone`,t)}function Se(e){C(e,X),Re(e.timezone),D(e)}function Ee(e){try{return Se(e),!0}catch{return!1}}const Ae=["L-y","LLL-y","LLLL-y"];function Te(e,t){const r=g.fromISO(e,{zone:t});if(r.isValid)return r;let s;return Ae.some(i=>{const a=g.fromFormat(e,i,{zone:t});return a.isValid?(s=a,!0):!1}),s}function S(e){return W(e,V)}function W(e,t){const r=Pe(e,t);if(!r?.isValid)throw new Error(`Failed to parse date input ${Y(e)}`);return F(r,t)}function Ce(e){const t=g.fromJSDate(new Date(e));if(t.isValid)return t}function Pe(e,t){if(Ee(e)&&(e=D(e).toMillis()),g.isDateTime(e))return e.setZone(t);if(u.isNumber(e))return g.fromMillis(e,{zone:G}).setZone(t);if(u.isString(e)){const r=Te(e,t);if(r)return r}else if(e instanceof Date)return g.fromJSDate(e).setZone(t);return Ce(e)}function z(){return Ue(V)}function Ue(e){return W(Date.now(),e)}function De(e){return[String(Math.abs(e.year)).padStart(4,"0"),String(Math.abs(e.month)).padStart(2,"0"),String(Math.abs(e.day)).padStart(2,"0")].join("-")}const be=d({user:ee,pullRequests:[c(re,te(Error))]},!0);class we extends se{}const H=d({extensions:ae(),locations:[{line:0,column:0}],message:"",path:[c("",0)],type:c("",void 0)});function N(e,t){return e+t}var K=(e=>(e.ActionRequired="ACTION_REQUIRED",e.Cancelled="CANCELLED",e.Completed="COMPLETED",e.Failure="FAILURE",e.InProgress="IN_PROGRESS",e.Neutral="NEUTRAL",e.Pending="PENDING",e.Queued="QUEUED",e.Skipped="SKIPPED",e.Stale="STALE",e.StartupFailure="STARTUP_FAILURE",e.Success="SUCCESS",e.TimedOut="TIMED_OUT",e.Waiting="WAITING",e))(K||{}),T=(e=>(e.Approved="APPROVED",e.Pending="PENDING",e.Commented="COMMENTED",e.ChangesRequested="CHANGES_REQUESTED",e.Dismissed="DISMISSED",e))(T||{}),w=(e=>(e.Mergeable="MERGEABLE",e.Conflicting="CONFLICTING",e.Unknown="UNKNOWN",e))(w||{});const Ie=["ACTION_REQUIRED","CANCELLED","FAILURE","STALE","STARTUP_FAILURE","TIMED_OUT"],Ne=["COMPLETED","NEUTRAL","SKIPPED","SUCCESS"],qe=["IN_PROGRESS","PENDING","QUEUED","WAITING"],f=d({login:"",avatarUrl:c(void 0,""),teamAvatarUrl:c(void 0,""),url:""},!0),Oe=d({count:0,state:b(K)},!0),Me=d({state:b(T),author:f,submittedAt:""},!0),Le=d({additions:0,assignees:{nodes:[f]},author:f,baseRef:c(null,{name:"",target:{oid:""}}),bodyText:"",mergeable:b(w),headRef:c(null,{name:"",target:{oid:""}}),labels:c(null,{nodes:[{name:"",color:""}]}),baseRepository:{name:"",owner:f,isArchived:!1,isPrivate:!1,url:""},headRepository:{name:"",owner:f,isArchived:!1,isPrivate:!1,url:""},changedFiles:0,closedAt:c(null,""),commits:{nodes:[c(null,{commit:{statusCheckRollup:c(null,{contexts:{checkRunCountsByState:[Oe]}})}})],totalCount:0},createdAt:"",deletions:0,id:"",isDraft:!1,mergedAt:c(null,""),mergedBy:c(null,f),number:0,reviewThreads:{nodes:[{isResolved:!1}]},latestOpinionatedReviews:{nodes:[Me]},reviewRequests:{nodes:[{requestedReviewer:f}]},title:"",updatedAt:"",url:""},!0),Fe=d({errors:c(void 0,[H]),data:{rateLimit:{cost:1,limit:5e3,nodeCount:0,remaining:0,resetAt:"",used:0},viewer:f,search:{issueCount:0,pageInfo:{endCursor:c("",null),hasNextPage:!1},nodes:[Le]}}},!0),Ve=`
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
`;var P=(e=>(e.OpenPullRequests="open-pull-requests",e.ClosedPullRequests="closed-pull-requests",e))(P||{});function je(e){if(!e.filter.onlyMyself&&!e.filter.org)throw new Error("Github query too broad: must filter to self or an org")}const xe={"open-pull-requests"(e){return["is:open","type:pr","archived:false",e.filter?.onlyMyself&&"involves:@me",e.filter?.org&&`org:${e.filter.org}`].filter(u.isTruthy).join(" ")},"closed-pull-requests"(e){const t=$(z(),{weeks:-1});return["is:closed","type:pr","archived:false",`closed:>=${De(t)}`,e.filter?.onlyMyself&&"involves:@me",e.filter?.org&&`org:${e.filter.org}`].filter(u.isTruthy).join(" ")}};function Qe(e,t,r,s){return je(r),{query:Be[e],variables:{searchQuery:xe[t](r),afterCursor:s||null}}}var U=(e=>(e.PullRequest="pull-request",e))(U||{});const Be={"pull-request":Ve},$e=ne({"pull-request":Fe},(e,t)=>d(oe(t,{authTokenName:""}),!0)),We={"pull-request"(e){return{totalItemCount:e.data.search.issueCount,nextPageCursor:e.data.search.pageInfo.hasNextPage&&e.data.search.pageInfo.endCursor||void 0}}},ze={"pull-request"(e){const t=e[e.length-1];return j.isDefined(t),{authTokenName:t.authTokenName,errors:e.flatMap(r=>r.errors??[]),data:{rateLimit:{...t.data.rateLimit,cost:e.map(r=>r.data.rateLimit.cost).reduce(N),nodeCount:e.map(r=>r.data.rateLimit.nodeCount).reduce(N)},viewer:t.data.viewer,search:{issueCount:t.data.search.issueCount,pageInfo:t.data.search.pageInfo,nodes:e.flatMap(r=>r.data.search.nodes)}}}}};async function q(e,t,r,s){try{let i;const a=[];do{const n=Qe(e,t,r,i),l=await(await fetch("https://api.github.com/graphql",{method:"post",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`bearer ${s.authTokenSecret}`},body:JSON.stringify(n)})).json();l.authTokenName=s.authTokenName,l.errors&&l.errors.forEach(R=>{C(R,H)});try{C(l,$e[e])}catch(R){throw console.info(l),R}const m=We[e](l);if(i=m.nextPageCursor,a.push(l),m.totalItemCount>1e3)throw new Error(`Search too broad: got '${m.totalItemCount}' items.`)}while(i);if(!u.isLengthAtLeast(a,1))throw new Error("No data received from GitHub.");return ze[e](a)}catch(i){const a=ie(i,`Failed to fetch data for token '${s.authTokenName}'.`);return console.error(a),a}}function He(e,t){return e.match(t)??[]}var O;(function(e){e.Upper="upper",e.Lower="lower"})(O||(O={}));var M;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(M||(M={}));function Ke(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Ke();function _e({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function ke({bodyText:e}){const[,t]=He(e,/primary reviewers?\W+((?:@[^@\s]+(?:[\s\n]|$))+)/i);return t?Array.from(t.matchAll(/@[\w\-\d]+/g)).map(s=>_e({value:s[0],prefix:"@"})):[]}function Je(e,t,r,s){const i={closed:t.closedAt?S(t.closedAt):void 0,created:S(t.createdAt),lastUpdated:S(t.updatedAt)},a=t.assignees.nodes.map(h),n=[h(t.author)],o=ke(t),l={assignees:_(a.length?a:n),reviewers:Ye(o,t)},m=t.mergedAt?v.Merged:t.closedAt?v.Rejected:t.isDraft?v.Draft:v.Open;return{auth:{client:ue.Github,tokenName:e},branches:{headBranch:{branchName:t.headRef?.name||new Error("Missing 'Contents' read permissions."),headCommitHash:t.headRef?.target.oid||new Error("Missing 'Contents' read permissions."),repo:{isArchived:t.headRepository.isArchived,isPrivate:t.headRepository.isPrivate,htmlUrl:t.headRepository.url,repoName:t.headRepository.name,repoOwner:h(t.headRepository.owner)}},targetBranch:{branchName:t.baseRef?.name||new Error("Missing 'Contents' read permissions."),headCommitHash:t.baseRef?.target.oid||new Error("Missing 'Contents' read permissions."),repo:{isArchived:t.baseRepository.isArchived,isPrivate:t.baseRepository.isPrivate,htmlUrl:t.baseRepository.url,repoName:t.baseRepository.name,repoOwner:h(t.baseRepository.owner)}}},changes:{additions:t.additions,deletions:t.deletions,changedFiles:t.changedFiles},dates:i,id:{htmlUrl:t.url,prId:t.id,prNumber:String(t.number),title:t.title,owner:h(t.baseRepository.owner)},status:{checksStatus:Ge(t.commits.nodes[0]?.commit?.statusCheckRollup?.contexts?.checkRunCountsByState),comments:Ze(t.reviewThreads.nodes),commitCount:t.commits.totalCount,mergeStatus:m,mergedBy:t.mergedBy?h(t.mergedBy):void 0,needsReviewFromCurrentUser:Xe(m,r,l),userIsPrimaryReviewer:o.includes(r.username),hasMergeConflicts:t.mergeable===w.Conflicting,labels:t.labels?t.labels.nodes.map(I=>({...I,color:`#${I.color}`})):[]},users:l,cost:s,raw:t}}function Ze(e){return e.reduce((t,r)=>(r.isResolved&&t.resolved++,t.total++,t),{resolved:0,total:0})}function Xe(e,t,r){return e===v.Open&&r.reviewers[t.username]?.reviewStatus===y.Pending&&!(t.username in r.assignees)}function Ye(e,t){const r=_(t.reviewRequests.nodes.map(a=>h(a.requestedReviewer))),s=Q(t.latestOpinionatedReviews.nodes,a=>({key:a.author.login,value:a})),i=Array.from(new Set([...Object.keys(r),...Object.keys(s)]));return E(i.map(a=>{const n=r[a]||s[a]?.author;if(!n)throw new Error(`Failed to find user '${a}'`);const o=u.hasKey(r,a)?y.Pending:s[a]?.state===T.Approved?y.Accepted:s[a]?.state===T.ChangesRequested?y.Rejected:y.Pending;return[a,{user:{avatarUrl:n.avatarUrl||"",profileUrl:n.avatarUrl||"",username:a},isPrimaryReviewer:e.includes(a),reviewStatus:o}]}))}function Ge(e){return e?e.reduce((r,s)=>(u.hasValue(Ie,s.state)?r.failCount+=s.count:u.hasValue(qe,s.state)?r.inProgressCount+=s.count:u.hasValue(Ne,s.state)&&(r.successCount+=s.count),r.totalCount++,r),{successCount:0,failCount:0,inProgressCount:0,totalCount:0}):new Error("Missing 'Contents' or 'Commit statuses' read permissions.")}function h(e){return{avatarUrl:e.teamAvatarUrl||e.avatarUrl||"",profileUrl:e.url,username:e.login}}function _(e){return Q(e,t=>({key:t.username,value:t}))}let L=!1;async function et(e){if(L)throw new Error("Refusing to fetch because GraphQL query cost is too high.");const t=await Promise.allSettled(e.flatMap(n=>[q(U.PullRequest,P.OpenPullRequests,{filter:{onlyMyself:!0}},n),q(U.PullRequest,P.ClosedPullRequests,{filter:{onlyMyself:!0}},n)]));let r;const s=t.flatMap(n=>{if(n.status==="fulfilled"){const o=n.value;if(le(o))return[o];if(o.data.rateLimit.cost>1)throw L=!0,new Error("GraphQL query cost is too high.");return r||(r=h(o.data.viewer)),o.data.search.nodes.map(l=>(j.isDefined(r),Je(o.authTokenName,l,r,o.data.rateLimit)))}else return[A(n.reason)]}),i=E(s.map(n=>n instanceof Error?[ce(32),n]:[n.id.prId,n])),a=Object.values(i).sort((n,o)=>{if(n instanceof Error&&o instanceof Error){const l=n.name.localeCompare(o.name);return l||n.message.localeCompare(o.message)}else return n instanceof Error?-1:o instanceof Error||x({fullDate:n.dates.created,relativeTo:o.dates.created})?1:-1});if(!r)throw new Error("User was never parsed from the GitHub GraphQL response.");return{pullRequests:a,user:r}}const tt={updateInterval:{seconds:10},cacheTimeout:{minutes:5}},rt=d({timestamp:0,data:be},!0);class p extends we{constructor(t,r){super(),this.authTokens=t,r&&this.overrideOptions(r),this.setPromiseValue(this.loadCachedValue()),this.scheduleFutureUpdate()}static cacheStore=ye.createInstance({description:"github client cache for review-vir",name:"review-vir-github-cache",storeName:"review-vir-github-cache"});static cacheKey="value";value;lastResolvedValue=void 0;options=tt;async saveCache(t){await p.cacheStore.setItem(p.cacheKey,{timestamp:Date.now(),data:t})}async loadCachedValue(){const t=await p.cacheStore.getItem(p.cacheKey);return de(t,rt)?(x({fullDate:z(),relativeTo:$(S(t.timestamp),this.options.cacheTimeout)})?this.setUpdatedValue(!0):setTimeout(()=>this.setUpdatedValue(!0)),t.data):this.fetchData()}setPromiseValue(t){this.dispatch(new fe({detail:t})),this.value=t,t.then(r=>{this.dispatch(new he({detail:r})),this.value=r,u.jsonEquals(this.lastResolvedValue,r)||(this.dispatch(new me({detail:r})),this.lastResolvedValue=r,this.saveCache(r))}).catch(r=>{this.dispatch(new pe({detail:A(r)}))})}overrideOptions(t){this.options=B(this.options,t)}async fetchData(){return await et(this.authTokens)}scheduleFutureUpdate(){globalThis.setTimeout(async()=>{await this.setUpdatedValue(!1)},ge(this.options.updateInterval,{milliseconds:!0}).milliseconds)}async setUpdatedValue(t){if(this.scheduleFutureUpdate(),!t&&u.isPromise(this.value))return this.value;const r=this.fetchData();return this.setPromiseValue(r),await r}}const nt=ve({init(e){return new p(e)}});export{p as GithubClient,nt as githubClient};
