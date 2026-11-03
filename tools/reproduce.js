// Independent reproduction of the ICFR Transitions candidate orders, sample fingerprints and second-coder subsets.
// Usage: node tools/reproduce.js .   (prints the reproduced orders, fingerprints and subsets as JSON)
const fs=require('fs'),path=require('path'),crypto=require('crypto');const {shuffle}=require('./shuffle.js');
const root=process.argv[2]||'.';const rd=p=>fs.readFileSync(path.join(root,p),'utf8');
const H=a=>crypto.createHash('sha256').update(a.join('\n')).digest('hex');
const rows=t=>[...t.matchAll(/^\| (\d+) \| (.*?) \| \[(\d{10}-\d{2}-\d{6})\]/gm)].map(m=>({rank:+m[1],co:m[2],acc:m[3],line:m[0]}));
const out={};
const sample=rd('search/sample-2026-11-02.md');const sub=rd('search/second-coder-subset-2026-11-02.md');
const secS={AQ:sample.split('## Recently acquired businesses (AQ)')[1].split('## Newly public companies (NP)')[0],NP:sample.split('## Newly public companies (NP)')[1]};
const secB={AQ:sub.split('## Recently acquired businesses (AQ)')[1].split('## Newly public companies (NP)')[0],NP:sub.split('## Newly public companies (NP)')[1].split('## What happens next')[0]};
for(const c of ['AQ','NP']){
 const cand=rows(rd(`search/candidates-${c}-2026-11-01.md`));const accs=cand.map(r=>r.acc);
 const order=shuffle([...accs].sort(),20261103);const mism=order.map((a,i)=>a===accs[i]?null:i+1).filter(x=>x);
 const elig=[...secS[c].matchAll(/^\| (\d+) \| (.*?) \| \[(\d{10}-\d{2}-\d{6})\][^\n]*\| \*\*(Eligible|Not eligible)\*\*/gm)].map(m=>({rank:+m[1],acc:m[3],d:m[4]}));
 const E=elig.filter(x=>x.d==='Eligible');
 const rankOK=elig.every(x=>accs[x.rank-1]===x.acc);
 const draw=shuffle(E.map(x=>x.acc).sort(),20261105).slice(0,10);const pub=[...secB[c].matchAll(/\[(\d{10}-\d{2}-\d{6})\]/g)].map(m=>m[1]);
 out[c]={candidateRows:cand.length,unique:new Set(accs).size,maxRank:Math.max(...cand.map(r=>r.rank)),orderReproduced:mism.length===0,mismatchedPositions:mism.slice(0,10),candidateOrderSHA256:H(accs),
  sampleRowsRead:elig.length,eligible:E.length,notEligible:elig.length-E.length,sampleRanksMatchCandidateList:rankOK,eligibleSHA256:H(E.map(x=>x.acc)),
  subsetReproduced:JSON.stringify(draw)===JSON.stringify(pub),subsetSHA256:H(draw),subsetSampleRanks:draw.map(a=>E.find(x=>x.acc===a).rank)};
}
console.log(JSON.stringify(out,null,1));
