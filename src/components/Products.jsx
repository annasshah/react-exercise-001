import React, { useState } from 'react'
import { Card, CardContent, CardMedia, Typography, Container, Stack, TextField, Select, MenuItem, Button } from '@mui/material'
import { Product_Card } from './Product_Card'
import { products_data } from '../utils/products_data'
import { Select_Menu } from './Select_Menu'
import { Search_Input } from './Search_Input'

export const Products = () => {
    const [data, setData] = useState([...products_data])


    const search_handle = (val) => {
        // Search functionality goes here...
    }


    const sort_products_handle = (val) => {
        // Sort functionality goes here...

    }


    return (
        <Container maxWidth={false}>



            <Stack spacing={5}>
                <Stack flexDirection='row' justifyContent='space-between'>

            {/* Search Input with click button */}
                    <Search_Input on_click_handle={search_handle} />


            {/* Select menu for sorting */}
                    <Stack flex={1} flexDirection='row' justifyContent='flex-end' gap={2}>
                        <Select_Menu on_change_handle={sort_products_handle}  />
                    </Stack>


                </Stack>






            {/* Rendering products here */}
                <div className='grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid gap-10'>
                    {data.map((elem, ind) => {
                        return <Product_Card key={elem.id} data={elem} />
                    })}

                </div>
            </Stack>
        </Container>
    )
}
