import LikeButtom from './LikeButton'

function getPost () {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
}

export default async function ListOfPost () {
  const posts = await getPost()

  return posts.slice(0, 5).map(post => (
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <LikeButtom />
      <hr />
    </article>
  ))
}
