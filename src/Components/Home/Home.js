import React from "react";
import {Link, useNavigate} from "react-router-dom"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, CardContent } from '@mui/material';
import "./Home.css"
import consultationOnline from './images/consultationOnline.jpg';
import bookingAppointment from './images/bookingAppointment.jpg';
import healthTipsGuidance from './images/healthTipsGuidance.jpg';
import selfCheckup from './images/selfCheckup.jpg';
/**Image by <a href="https://fr.freepik.com/vecteurs-libre/3d-vector-illustration-dessin-anime-mignon-medecin-femme-homme-personnage-presentant-pancarte-blanche-vierge_30908216.htm#query=doctor%203d%20illustration&position=3&from_view=search&track=ais&uuid=ae758c4b-c907-43c9-b757-01c15c4fefef">Image de felicities</a> sur Freepik

Image by <a href="https://www.freepik.com/free-vector/appointment-booking-with-calendar_8513821.htm#query=3d%20illustration%20booking%20an%20appointment%20doctor&position=11&from_view=search&track=ais&uuid=3bfc8ba7-b4d5-490d-8f1a-3020a4c099c0">Freepik</a>

Image by <a href="https://www.freepik.com/free-vector/doctor-examining-patient-clinic-illustrated_12557504.htm#page=3&query=self%20checkup%20illustration&position=4&from_view=search&track=ais&uuid=d2083696-32dc-45ae-977c-fdb751c86dc3">Freepik</a> */

function Home() {
    return (
        <div>     
            <div className="service-box"style={{display:"flex", alignItems:"row",justifyContent:"space-between",marginTop:"200px", marginLeft:"100px",maxWidth:"80%"}} >
                <div>
                    <div>
                       <Card style={{width:"200px", height:"220px"}}>
                            <CardActionArea>
                            <CardMedia
                                    component="img"
                                    height="140"
                                    image={consultationOnline}
                                    alt=""
                                />
                                <Link to="/instant-consultation">
                                <h1 style={{fontSize: "12px", marginLeft:"28px"}}>Instant Consultation</h1>
                                </Link> 
                            </CardActionArea>
                        </Card>
                    </div>:
                </div>
                <div>
                    <div>
                       <Card style={{width:"200px", height:"220px"}}>
                        <CardActionArea>
                           <CardMedia
                            component="img"
                            height="140"
                            image={bookingAppointment}
                            alt=""
                        />
                        <Link to="/booking-consultation">
                        <h1 style={{fontSize: "12px" , marginLeft:"28px"}}> Book an Appointment</h1>
                        </Link>
                        </CardActionArea>
                        <CardActions>
                         
                        </CardActions>
                         </Card>
                    </div>
                </div>
                <div>
                    <div>
                       <Card style={{width:"200px", height:"220px"}}>
                        <CardActionArea>
                           <CardMedia
                            component="img"
                            height="140"
                            image={selfCheckup}
                            alt=""
                        />
                        <h1 style={{fontSize: "12px" , marginLeft:"28px"}}>Self Checkup</h1>
                       
                        </CardActionArea>
                       
                        </Card>
                    </div>
                </div>
                <div>
                    <div>
                       <Card style={{width:"200px", height:"220px"}}>
                            <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={healthTipsGuidance}
                                alt=""
                            />
                            <h1 style={{fontSize: "12px" , marginLeft:"26px"}}> Health Tips and Guidance</h1>
                        
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
            </div>
            <div style={{marginTop:"70px",marginLeft:"30%"}}>
                <div >
                <Card style={{width:"70%", height:"200px"}}>
                    <CardContent>
                        <Typography 
                            gutterBottom 
                            variant="h5" 
                            component="div" 
                            style={{marginLeft:"120px"}}
                        >
                            WE PROVIDE BEST MEDICAL SERVICE
                        </Typography>
                        <Typography 
                            variant="subtitle1" 
                            component="div"
                        >
                            Which problem you faced on your health?
                        </Typography>
                            <Typography 
                                variant="body2" 
                                color="text.secondary"
                            >
                                Take a look on our Best Health care solution and make an appointment with our experts who can solved your problem.
                            </Typography>
                            {/* <Typography>Love yourself enough to live a healthy lifestyle</Typography> */}
                    </CardContent>
                        <CardActions>
                            <Button 
                                variant="contained" 
                                color="success" 
                                style={{width:"50%", marginLeft:"140px"}}
                            >
                                <Typography>Try for Free</Typography>
                            </Button>
                        </CardActions>
                </Card>
                </div>
           </div>
        </div>
        
    )
}

export default Home;
