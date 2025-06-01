import { useEffect, useState } from "react"
import instance from "../../axios"
import { Typography } from "@mui/material"
import type { AxiosResponse } from "axios"
import type { Book, BooksApiResponse } from "./Books.types"

const Books: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    instance
      .get("/books?populate=*")
      .then((response: AxiosResponse<BooksApiResponse>) => {
        setBooks(response.data.data)
      })
      .catch((error) => {
        console.error("Error fetching books:", error)
      })
  }, [])

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Books
      </Typography>
      {books.map((book) => (
        <>
          <p>{book.Title}</p>
          <p>{book.Description[0].children[0].text}</p>
          <p>{book.genres.map((genre) => genre.tag).join(", ")}</p>
          <p>{book.author.firstname} {book.author.surname}</p>
        </>
      ))}
    </>
  )
}
export default Books
