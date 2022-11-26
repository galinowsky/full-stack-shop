

import Grid from '@mui/material/Unstable_Grid2';
import { SideMenu } from '../components/SideMenu/SideMenu';
import { ProductList } from '../components/ProductList/ProductsList'
// import {getProducts} from './rest-api-calls/products.js'

export default function Home() {


  return (
    <><Grid container>
      <Grid xs={3}>
        <SideMenu />

      </Grid>
      <Grid xs={9}>
        <ProductList />


      </Grid>
    </Grid></>

  )

}