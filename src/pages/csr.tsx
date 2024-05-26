import { useEffect, useState } from "react"

import BackButton from "@/components/BackButton"
import Container from "@/components/Container"
import Header from "@/components/Header"
import { Post } from "@/types"

export default function CSR() {
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data: Post[] = await response.json()
      setPosts(data)
    }

    fetchPosts()
  }, [])
  return (
    <Container>
      <Header>Client Side Rendering</Header>
      <BackButton />
      <ul className="flex flex-col gap-2">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-3 border rounded border-neutral-700 flex flex-col gap-2"
          >
            <h2 className="text-xl font-bold tracking-tight">{post.title}</h2>
            <p className="text-neutral-200 tracking-wide">{post.body}</p>
          </li>
        ))}
      </ul>
    </Container>
  )
}
