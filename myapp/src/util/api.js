export async function getLatestMovies() {
  const url = "https://api.themoviedb.org/3/trending/movie/week?language=en-US"
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzgzNWNkY2M0YTVlZjQ5YTVmZDAyNzc5ZGUyNTg2MCIsInN1YiI6IjY1MDAyOWRlNmEyMjI3MDEzNzJkMzg2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1hAMwR8XspM0Pysdq0buBQ3a-VRqLnxh6Zejcgxlww8",
    },
  }

  const response = await fetch(url, options)
  const data = await response.json()
}

export async function fetcher(apiRoute) {
  const url = "https://api.themoviedb.org/3/" + apiRoute
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzgzNWNkY2M0YTVlZjQ5YTVmZDAyNzc5ZGUyNTg2MCIsInN1YiI6IjY1MDAyOWRlNmEyMjI3MDEzNzJkMzg2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1hAMwR8XspM0Pysdq0buBQ3a-VRqLnxh6Zejcgxlww8",
    },
  }

  const response = await fetch(url, options)
  const data = await response.json()
  return data
}
