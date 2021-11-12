import {NextPage} from "next";
import {AppBar, Grid, makeStyles, Toolbar, Typography} from "@mui/material";
import {useRouter} from "next/router";
import {Dispatch, SetStateAction, useState} from "react";
import {Links} from "../const/Links";
import Link from "next/link";
import { css,jsx } from '@emotion/react'

export interface BlogPageLink {
    url:string,
    tag:string,
    hover:boolean
}

export const NavigationBar: NextPage = () => {

    const router = useRouter()

    console.log(router.pathname)

    const links = Links

    const hover = css`
        &:hover {
            color: red;
        }
    `



    return <div style={{backgroundColor:"#3bacde",fontSize:15,color:"white",height:60}}>
        <Grid container alignContent="center" style={{height:"100%"}}>
            {
                links.map((e,i)=>{
                    return <Link key={"nav-"+i} href={e.url}>
                        <Grid item style={{height:"100%",marginRight:30}}>
                            <Grid container>
                                <Grid item style={{height:54}}>
                                    <Grid container alignContent="center" style={{height:"100%"}}>
                                        <Grid item style={{height:"23px"}}>
                                            {e.tag}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <div
                                        css={hover}
                                        style={{
                                            height:5,
                                            width:"100%",
                                            transition: "0.5s",
                                            backgroundColor: ((e.url == "/"&&router.pathname.length === 1) || (router.pathname.length != 1 && e.url.startsWith(router.pathname))) ? "#fff200" : "rgba(0,0,0,0)",
                                        }}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Link>
                })
            }
        </Grid>
    </div>
}