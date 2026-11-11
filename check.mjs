import { PaymentRequest } from '@cashu/cashu-ts';
import { writeFileSync } from 'node:fs';
const base = {unit:'sat',mint:'https://mint.invalid',proofs:[{amount:1,id:'0000000000000000',secret:'synthetic-not-spendable',C:'0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798'}]};
const cases = [
 ['optional fields omitted',base],
 ['string optional fields',{...base,memo:'synthetic',id:'synthetic'}],
 ['memo null',{...base,memo:null}],
 ['id null',{...base,id:null}],
 ['both null',{...base,memo:null,id:null}],
];
const results = cases.map(([name,payload])=>{
 try {PaymentRequest.decodePayload(JSON.stringify(payload));return {name,accepted:true};}
 catch(e){return {name,accepted:false,error:e.message};}
});
const report={package:'@cashu/cashu-ts',version:'5.0.0-rc.13',method:'synthetic local decodePayload differential test; one nonspendable synthetic proof-shaped record; reserved .invalid mint hostname; no mint, relay or payment',results};
writeFileSync(new URL('./RESULT.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
if(!results[0].accepted || !results[1].accepted)process.exitCode=1;
