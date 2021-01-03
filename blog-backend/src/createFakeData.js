import Post from "./models/post";

export default function createFakeDate() {
    //배열 생성 후, 포스트 테데이터로 변환
    const posts = [...Array(40).keys()].map(i => ({
        title: `포스트#${i}`,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id tempus eros, at scelerisque ipsum. Etiam porta ex et purus sodales, nec iaculis massa aliquet. Sed in augue sed metus fermentum condimentum. In gravida ac libero vitae porttitor. Integer dapibus vitae magna at mattis. Etiam id lectus mauris. Nullam nec vestibulum justo. Quisque suscipit eleifend lacus a consequat. Suspendisse potenti. Cras varius, nulla vitae egestas vestibulum, arcu tellus imperdiet magna, vitae rhoncus mauris elit a quam. Nullam in aliquam arcu. Fusce urna ex, iaculis ac ullamcorper et, mollis vel justo. Etiam feugiat felis gravida, luctus ante et, auctor erat. Curabitur gravida maximus lacus, sed venenatis risus congue vel. Ut dui eros, vulputate nec ligula vel, malesuada dictum leo.",
        tags: ["가짜", "데이터"]
    }))

    Post.insertMany(posts, (err, docs) => {
        // console.log(docs)
    })
}