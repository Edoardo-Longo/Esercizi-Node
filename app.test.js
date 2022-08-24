const supertest=require('supertest')
const createApp = require('.Esercizio-9.js')
const app = createApp()

const request = supertest(app);
test("GET /",async()=>{
    const response = await request.get("/")
    .expect(200)
    .expect("Content-Type","text/HTML")
    expect(response.text).toEqual(("<html><body><h1>Hello World</h1></body></html>"))
})