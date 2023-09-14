import Head from "next/head"
import Image from "next/image"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import Navbar from "@/component/Navbar/Navbar"
import MovieCard from "@/component/Card/Card"
import { Grid } from "@mui/material"
import Link from "next/link"
import { fetcher } from "@/util/api"

export default function Homepage({ latestMovie }) {
  return (
    <div>
      {/* {JSON.stringify(latestMovie)} */}

      <Grid container spacing={3}>
        {latestMovie.results.map((movie, index) => {
          return (
            <Grid key={index} item xs={4}>
              <Link href={`/movies/${movie.id}`}>
                <MovieCard {...movie} />
              </Link>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export async function getStaticProps() {
  const data = await fetcher("trending/movie/week?language=en-US")

  return {
    props: {
      latestMovie: data,
    },
  }
}
