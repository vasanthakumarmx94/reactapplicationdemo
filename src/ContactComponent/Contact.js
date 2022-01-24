import './Contact.css';
import { About } from '../AboutComponent/About';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
export function Contact() {
    return (
        <section className="mycontactstyle">
            <div className='conts'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="275"
                        image="https://www.siliconeducation.in/images/contact-banner.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            E-Educate
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            EducationThe essence of Human Resource Development is education,
                            which plays a significant and remedial role in balancing the socio-economic framework of the country.
                        </Typography>
                    </CardContent>
                </Card>
            </div>

            <About></About>
            
        </section>
    );
}

