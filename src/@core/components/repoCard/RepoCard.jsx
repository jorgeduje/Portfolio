import * as React from "react"
import { styled } from "@mui/material/styles"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Collapse from "@mui/material/Collapse"
import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import { blue } from "@mui/material/colors"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
const repoExample = "https://github.com/jayad23/AppWeather"
const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}))

export default function RepoCard({ repo }) {
  const [expanded, setExpanded] = React.useState(false)
  //console.log(repo)
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#625ac9"}} aria-label="recipe">
            JD
          </Avatar>
        }
        title={repo?.repo_name}
      />
      <CardMedia
        component="img"
        height="160"
        image="https://i.stack.imgur.com/BqONr.gif"
        alt="Git_hub_repo"
      />
      <CardContent >
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center"}}>
        <a style={{ color: "#625ac9"}} href={repo?.repo_url} target="_blank" rel="noreferrer">
          See Repo on GitHub
        </a>
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography >
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  )
}
