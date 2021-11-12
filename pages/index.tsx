import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {AppBar, Grid, Hidden, Toolbar, Typography} from "@mui/material";
import {NavigationBar} from "../components/NavigationBar";

const Home: NextPage = () => {
  return <div>
    <Hidden smDown>
      <div style={{maxHeight:"441px",width:"100%",textAlign:"center"}}>
        <img style={{textAlign:"center",width:"100%",maxWidth:"1100px",height:"auto"}} src="http://den3.net/wp-content/themes/den3HP/set/image/illustration.png"/>
      </div>
      <Grid container justifyContent="center" style={{paddingLeft:60,width:"100%",backgroundColor:"#3bacde"}}>
        <Grid item style={{width:"1100px"}}>
          <NavigationBar/>
        </Grid>
      </Grid>
    </Hidden>
  </div>
}

export default Home
