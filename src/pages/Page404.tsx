import * as React from 'react';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from "react-router-dom";
import { StyledButton } from "../ui-elements/StyledButton";

export const Page404 = () => {
    return (
        <>
            <Card sx={{
                maxWidth: 700,
                textAlign: "center",
                m: "100px Auto",
            }}>
                <CardMedia
                    component="img"
                    height="400"
                    image="/static/images/cards/Page404.png"
                    alt="404"
                />
                <CardContent sx={{
                    backgroundColor: "text.secondary",
                }}>
                    <Typography gutterBottom variant="h3" component="div" sx={{
                        p: "40px", color: "white"
                    }}>
                        ページが存在しません...
                    </Typography>
                    <Link to={`/`}>
                        <StyledButton>ホームに戻る</StyledButton>
                    </Link>
                </CardContent>
            </Card>
        </>
    );
};
