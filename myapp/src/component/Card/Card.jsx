import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

/**
 * 
 * {
      "adult": false,
      "backdrop_path": "/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
      "id": 346698,
      "title": "Barbie",
      "original_language": "en",
      "original_title": "Barbie",
      "overview": "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
      "poster_path": "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
      "media_type": "movie",
      "genre_ids": [
        35,
        12,
        14
      ],
      "popularity": 3534.928,
      "release_date": "2023-07-19",
      "video": false,
      "vote_average": 7.343,
      "vote_count": 4164
    },
 */

export default function MovieCard({ title, poster_path, release_date }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={"https://image.tmdb.org/t/p/w500/" + poster_path}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {release_date}
        </Typography>
      </CardContent>
    </Card>
  )
}
