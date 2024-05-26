import Link from "next/link"

import Header from "@/components/Header"
import Container from "@/components/Container"

export default function Home() {
  return (
    <Container>
      <Header>NextJS App Router Rendering YouTube</Header>
      <ul className="flex flex-col gap-8">
        <li>
          <Link
            className="border flex border-neutral-600 p-3 rounded hover:bg-neutral-800"
            href="/csr"
            prefetch={false}
          >
            Client Side Rendering
          </Link>
        </li>
        <li>
          <Link
            className="border flex border-neutral-600 p-3 rounded hover:bg-neutral-800"
            href="/ssr"
            prefetch={false}
          >
            Server Side Rendering
          </Link>
        </li>
        <li>
          <Link
            className="border flex border-neutral-600 p-3 rounded hover:bg-neutral-800"
            href="/ssg"
            prefetch={false}
          >
            Static Site Generation
          </Link>
        </li>
        <li>
          <Link
            className="border flex border-neutral-600 p-3 rounded hover:bg-neutral-800"
            href="/isr"
            prefetch={false}
          >
            Incremental Static Regeneration
          </Link>
        </li>
      </ul>
    </Container>
  )
}
