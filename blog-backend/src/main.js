require('dotenv').config();
import Koa from "koa"
import Router from "koa-router"
import bodyParser from "koa-bodyparser"

import mongoose from "mongoose"
import api from "./api"
import createFakeDate from "./createFakeData"

const { PORT, MONGO_URI } = process.env;
console.log(PORT, "port")
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB")
    createFakeDate()
}).catch(e => {
    console.error(e)
})



const app = new Koa();
const router = new Router()
//ctx는 context의 줄임말로 웹 요청과 응답에 관한 정보를 지님,next는 현재 처리 중인 미들웨어의 다음 미들에어를 호출하는 함수
//next 함수를 호출하면 promise를 반환함 promise는 다음에 처리해야 할 미들웨어가 끝나야 완료

router.get("/", ctx => {
    ctx.body = "홈"
})

router.get("/about/:name?", ctx => {
    const { name } = ctx.params;
    //name 존재 유므에 따라 다른 결과 출력
    ctx.body = name ? `${name}의 소개` : "소개"
})

router.get("/posts", ctx => {
    const { id } = ctx.query;
    //id의 존재 우무에 따라 다른 결과 출력
    ctx.body = id ? `포스트 #${id}` : "포스트 아이디가 없습니다."
})

router.use("/api", api.routes())

app.use(bodyParser())

//app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods())

const port = PORT || 4000;
app.listen(port, () => {
    console.log('Listening to port %d', port);
})
