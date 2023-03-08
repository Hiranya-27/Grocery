import React from "react";
import { Grid,Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
function About(props) {
  const posts = [
    {
     title: "Chocolates",
     excerpt: "KitKat FiveStar DairyMilk...etc..",
     src:require('./pics/choco.jpg'),
    },
    {
     title: "Fruits",
     excerpt: "Apple Banana Orange...etc..",
     src:require('./pics/fruit.jpg'),
    },
    {
     title: "Vegetables",
     excerpt: "Carrot BeetRoot Raddish..etc..",
     src:require('./pics/Veg.jpg'),
    },
    {
     title: "Cereals",
     excerpt:"Peas Wheat Corn..etc..",
     src:require('./pics/Wheat.jpg'),
    }
   ]
  return (
    <div style={{ marginTop: 20, padding: 30 }} className="Zoom">
      <Grid container spacing={40} justifyContent="center">
        {posts.map(post => (
          <Grid item key={post.title}>
            <Card>
              <CardActionArea style={{rowGap:100}}>
                <CardMedia
                  component="img"
                  alt="Grocery"
                  height="420"
                  image={post.src}
                  title="Grocery"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography component="p">{post.excerpt}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
export default About;