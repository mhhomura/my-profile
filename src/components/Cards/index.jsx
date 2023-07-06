import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {
    Container,
} from './styles';


const CardP = ({ title, description, image, link, link2, param, children, }) => {

    return (
        <Container>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt={title}
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => window.open(link)}>GitHub</Button>
                    {param === 2 && <Button size="small" onClick={() => window.open(link2)}>Preview</Button>}
                </CardActions>
            </Card>
        </Container>
    );
}

export default CardP