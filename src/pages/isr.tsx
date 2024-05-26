import BackButton from "@/components/BackButton"
import Container from "@/components/Container"
import Header from "@/components/Header"
import { cleanQuotes } from "@/helpers"
import { Quote } from "@/types"
import { GetStaticProps, InferGetStaticPropsType } from "next"

export const getStaticProps = (async () => {
  const res = await fetch(
    `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NOTION_SECRET_KEY}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      method: "POST",
    }
  )

  const data = await res.json()
  const quotes = cleanQuotes(data)

  return {
    props: { quotes },
    revalidate: 60,
  }
}) satisfies GetStaticProps<{ quotes: Quote[] }>

export default function ISR({
  quotes,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <Header>Server Side Rendering</Header>
      <BackButton />
      <ul className="flex flex-col gap-2">
        {quotes.map((quote) => (
          <li
            key={quote.quote}
            className="p-3 border rounded border-neutral-700 flex flex-col gap-2"
          >
            <h2 className="tracking-wide">{quote.quote}</h2>
            <p className="italic font-thin">{quote.author}</p>
          </li>
        ))}
      </ul>
    </Container>
  )
}
