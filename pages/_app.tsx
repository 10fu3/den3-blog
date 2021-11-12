import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {AppBar, Hidden, IconButton, Toolbar} from "@mui/material";
import {Menu} from "@mui/icons-material";
import {useRouter} from "next/router";
import {NavigationBar} from "../components/NavigationBar";
import {useEffect, useState} from "react";
import NavigationBarMobile from "../components/NavigationBarMobile";
import css from "styled-jsx/css";

function App({ Component, pageProps }: AppProps) {

  const router = useRouter()

  const [isMobileMenuOpen,setMobileMenuOpen] = useState(false)

  useEffect(()=>{
    router.events.on("routeChangeStart",()=>{
      setMobileMenuOpen(false)
    })
  })

  return <div>
    {
      isMobileMenuOpen ? <div><NavigationBarMobile/></div> : <></>
    }
    <AppBar position="static" style={{backgroundColor:"#3bacde"}}>
      <Toolbar>
        <div onClick={()=>{router.push("/")}}>
          <img style={{width:400,height:"auto"}} src="http://den3.net/wp-content/themes/den3HP/set/image/logo.png"/>
        </div>
        <Hidden mdDown>
          {
            router.pathname === "/" ? <></> : <div style={{marginLeft:30}}>
              <NavigationBar/>
            </div>
          }
        </Hidden>
        <Hidden mdUp>
          <div style={{flexGrow: 1}}/>
          <IconButton onClick={()=>{setMobileMenuOpen(!isMobileMenuOpen)}} style={{color:"white"}}>
            <Menu/>
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
    <Component {...pageProps} />
  </div>
}

export default App
