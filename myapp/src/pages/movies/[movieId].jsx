import { fetcher } from "@/util/api"

export default function MoviePage({ movieData }) {
  return (
    <div>
      <h1>{movieData.title}</h1>
      <img src={"https://image.tmdb.org/t/p/w500/" + movieData.poster_path} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const { movieId } = context.query

  const data = await fetcher(`movie/${movieId}?language=en-US`)

  return {
    props: {
      movieData: data,
    },
  }
}
