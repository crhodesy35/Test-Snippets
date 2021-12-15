'use strict';

//Async describe block for testing
describe('works', () => {
it('works', (done) => {
Promise.resolve()
.then(done)
.catch(done);
})
});

//Sync describe block 
describe('works', () => {
it('works', () => {});
});

//Sync it statement for multi-condition testing
it('works', () => {});

//Assert deep strict equal statement
(r) => {deepStrictEqual(r, [])}

//lambda stub for mocking
const lambdaStub = stub(testHelper, 'lambdaInvoke').callsFake(() => () => Promise.resolve());
//lambda restore for top of describe block
afterEach(() => {sinonRestore(testHelper.lambdaInvoke)});

//handler, then, catch for testing
handler(event, {}, {})
.then(r => {console.log(JSON.stringify(r, null, 4)); return r;})
.catch(e => {console.log(JSON.stringify(e.message, null, 4));})

//Console log, stringify to read shape of records
console.log(JSON.stringify(, null, 4));
