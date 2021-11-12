import {NextPage} from "next";
import {Grid} from "@mui/material";
import {Links} from "../const/Links";

const NavigationBarMobile:NextPage = ()=>{
    return <div>
        <Grid container style={{width:"10%"}}>
            {
                Links.map((e,i)=>{
                    return <Grid key={"nav-"+i} item style={{width:"50%"}}>
                        {e.tag}
                    </Grid>
                })
            }
        </Grid>
    </div>
}

export default NavigationBarMobile