'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const {once}=require('node:events');
const {server}=require('./server');
test('health, orders, intentional error and Prometheus metrics',async t=>{
  server.listen(0,'127.0.0.1'); await once(server,'listening'); t.after(()=>server.close());
  const base='http://127.0.0.1:'+server.address().port;
  const health=await fetch(base+'/health'); assert.equal(health.status,200); assert.equal((await health.json()).status,'ok');
  const orders=await fetch(base+'/api/orders'); assert.equal((await orders.json()).orders.length,2);
  const error=await fetch(base+'/simulate-error'); assert.equal(error.status,500);
  const body=await (await fetch(base+'/metrics')).text();
  assert.match(body,/demo_http_requests_total/); assert.match(body,/demo_app_errors_total 1/); assert.match(body,/demo_http_request_duration_seconds_bucket/);
});