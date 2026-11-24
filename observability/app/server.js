'use strict';
const http = require('node:http');
const { performance } = require('node:perf_hooks');
const PORT = Number(process.env.PORT || 3000);
const startedAt = Date.now();
const requests = new Map();
const histograms = new Map();
const buckets = [0.005,0.01,0.025,0.05,0.1,0.25,0.5,1,2.5,5];
let total = 0, errors = 0;
function esc(v) { return String(v).replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/"/g,'\\"'); }
function metricLabels(path,status) { return 'path="'+esc(path)+'",status="'+status+'"'; }
function record(path,status,seconds) {
  total++;
  if (status >= 500) errors++;
  const key = path+'|'+status;
  requests.set(key,(requests.get(key)||0)+1);
  const h = histograms.get(key)||{count:0,sum:0,buckets:{}};
  h.count++; h.sum += seconds;
  buckets.forEach(b => { if (seconds <= b) h.buckets[b]=(h.buckets[b]||0)+1; });
  histograms.set(key,h);
}
function metrics() {
  const out = ['# HELP demo_http_requests_total Total HTTP requests.','# TYPE demo_http_requests_total counter'];
  requests.forEach((v,k) => { const a=k.split('|'); out.push('demo_http_requests_total{'+metricLabels(a[0],a[1])+'} '+v); });
  out.push('# HELP demo_http_request_duration_seconds Request latency histogram.','# TYPE demo_http_request_duration_seconds histogram');
  histograms.forEach((h,k) => {
    const a=k.split('|'), l=metricLabels(a[0],a[1]);
    buckets.forEach(b => out.push('demo_http_request_duration_seconds_bucket{'+l+',le="'+b+'"} '+(h.buckets[b]||0)));
    out.push('demo_http_request_duration_seconds_bucket{'+l+',le="+Inf"} '+h.count);
    out.push('demo_http_request_duration_seconds_sum{'+l+'} '+h.sum.toFixed(6));
    out.push('demo_http_request_duration_seconds_count{'+l+'} '+h.count);
  });
  out.push('# HELP demo_app_uptime_seconds Process uptime.','# TYPE demo_app_uptime_seconds gauge','demo_app_uptime_seconds '+((Date.now()-startedAt)/1000).toFixed(3));
  out.push('# HELP demo_app_errors_total Total HTTP 5xx responses.','# TYPE demo_app_errors_total counter','demo_app_errors_total '+errors);
  out.push('# HELP demo_app_requests_total Total HTTP requests.','# TYPE demo_app_requests_total counter','demo_app_requests_total '+total);
  return out.join('\n')+'\n';
}
const server=http.createServer((req,res)=>{
  const start=performance.now(), url=new URL(req.url,'http://localhost');
  let status=200, body, type='application/json; charset=utf-8';
  if(url.pathname==='/health') body=JSON.stringify({status:'ok',service:'observability-demo-app',uptimeSeconds:Math.floor((Date.now()-startedAt)/1000)});
  else if(url.pathname==='/metrics'){body=metrics();type='text/plain; version=0.0.4; charset=utf-8';}
  else if(url.pathname==='/') body=JSON.stringify({name:'Observability Demo API',endpoints:['/health','/metrics','/api/orders','/simulate-error']});
  else if(url.pathname==='/api/orders') body=JSON.stringify({orders:[{id:'ORD-1001',status:'processed'},{id:'ORD-1002',status:'queued'}]});
  else if(url.pathname==='/simulate-error'){status=500;body=JSON.stringify({error:'Intentional demo error'});}
  else {status=404;body=JSON.stringify({error:'Not found'});}
  res.writeHead(status,{'content-type':type,'cache-control':'no-store'});res.end(body);
  if(url.pathname!=='/metrics') record(url.pathname,status,(performance.now()-start)/1000);
});
if (require.main === module) {
  server.listen(PORT,'0.0.0.0',()=>process.stdout.write('observability-demo-app listening on '+PORT+'\n'));
}
module.exports={server,metrics};