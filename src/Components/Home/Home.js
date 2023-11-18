import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./Home.css"


function Home() {
    return (
        <div>
           <div style={{marginTop:"200px",marginLeft:"40%"}}>
           <div >
                <Typography>Best Services</Typography>
                <Typography>Love yourself enough to live a healthy lifestyle</Typography>
            </div>
           </div>
            
            <div className="service-box"style={{display:"flex", alignItems:"row",justifyContent:"space-between",marginTop:"100px", marginRight:"150px"}} >
                <div >
                </div>
                <div >
                    <div>
                       <Card style={{width:"140px", height:"220px"}}>
                        <CardActionArea>
                           <CardMedia
                            component="img"
                            height="140"
                            image=""
                            alt=""
                        />
                        <h1 style={{fontSize: "12px"}}>Instant Consultation</h1>
                         
                        </CardActionArea>
                        </Card>
                    </div>
                </div>
                <div>
                    <div>
                       <Card style={{width:"140px", height:"220px"}}>
                        <CardActionArea>
                           <CardMedia
                            component="img"
                            height="140"
                            image=""
                            alt=""
                        />
                        <h1 style={{fontSize: "12px"}}> Book an Appointment</h1>
                       
                        </CardActionArea>
                        <CardActions>
                         
                        </CardActions>
                         </Card>
                    </div>
                </div>
                <div>
                    <div>
                       <Card style={{width:"140px", height:"220px"}}>
                        <CardActionArea>
                           <CardMedia
                            component="img"
                            height="140"
                            image=""
                            alt=""
                        />
                        <h1 style={{fontSize: "12px"}}>Self Checkup</h1>
                       
                        </CardActionArea>
                       
                        </Card>
                    </div>
                </div>
                <div>
                    <div>
                       <Card style={{width:"140px", height:"220px"}}>
                        <CardActionArea>
                           <CardMedia
                            component="img"
                            height="140"
                            image=""
                            alt=""
                        />
                        <h1 style={{fontSize: "12px"}}> Health Tips and Guidance</h1>
                     
                        </CardActionArea>
                         </Card>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Home;
