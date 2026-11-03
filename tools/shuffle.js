// mulberry32 generator and descending Fisher–Yates shuffle, as used for every seeded draw in the ICFR Transitions Study.
// Callers sort the input ascending (accession numbers) before shuffling, and start a fresh generator for each list.
function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;}}
function shuffle(arr,seed){const r=mulberry32(seed),a=arr.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
module.exports={mulberry32,shuffle};
