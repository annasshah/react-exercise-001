import React from 'react'
import { products_data } from '../utils/products_data'
import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'

export const Home = () => {
  return (
    <Container maxWidth={false}>
      <div className='grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid gap-10'>
      {products_data.map((elem, ind) => {

        const { title, price, description, images, category } = elem

        return <Card>
          <CardMedia
          className='aspect-square w-full object-cover'
            // sx={{ height: 140  }}
            image={images[0]}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {description.substring(0,45)}...
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      })}

    </div>
    </Container>
  )
}
