import { Box, Typography, CardMedia, Grid, Link, Alert, IconButton, Collapse } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";


export const Profile = () => {
    const [open, setOpen] = useState(true);
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Collapse in={open}>
                    <Alert variant="filled" severity="info"
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{
                            p: "10px 40px 10px 70px",
                        }}
                    >
                        多忙のため、本サイトの開発を一時休止しております。
                    </Alert>
                </Collapse>
            </Box>
            <Box sx={{
                width: "100%",
                p: "90px 0",
                borderStyle: "solid",
                borderColor: "rgba(194, 224, 255, 0.08)",
                borderWidth: "0px 0px thin",
                backgroundColor: "rgb(0, 30, 60)",
            }}>
                <Grid sx={{ flexGrow: 1 }} container spacing={3}>
                    <Grid item sx={{
                        m: "0 Auto",
                    }}>
                        <CardMedia
                            component="img"
                            sx={{
                                maxWidth: 300,
                                borderRadius: 90,
                                boxShadow: "0 0 10px #3399ff",
                                ml: 2,
                                "@media screen and (max-width: 420px)": {
                                    maxWidth: 200,
                                },
                            }}
                            image="/static/images/profile/ProfileImage.jpg"
                            alt="Profile Image"
                        />
                    </Grid>
                    <Grid item sx={{
                        m: "0 Auto",
                    }}>
                        <Box sx={{
                            mr: 1,
                            "@media screen and (max-width: 550px)": {
                                ml: 4,
                                mr: 4,
                            },
                        }}>
                            <Typography
                                component="h1"
                                sx={{
                                    color: "#3399ff",
                                    fontSize: 32,
                                    fontWeight: "Prime",
                                    ml: 2,
                                }}>
                                Profile
                            </Typography>
                            <Typography
                                component="h2"
                                sx={{
                                    color: "#B2BAC2",
                                    fontSize: 16,
                                    fontWeight: "Light",
                                }}>
                                ー プロフィール ー
                            </Typography>
                            <Typography
                                component="p"
                                sx={{
                                    color: "#fff",
                                    fontSize: 30,
                                    fontWeight: "normal",
                                    fontFamily: "Times New Roman",
                                    mt: 5,
                                    "@media screen and (max-width: 550px)": {
                                        fontSize: 20,
                                    },
                                    "@media screen and (max-width: 300px)": {
                                        fontSize: 15,
                                    },
                                }}>
                                島田匠悟（Shogo Shimada）
                            </Typography>
                            <Typography
                                component="p"
                                sx={{
                                    color: "#fff",
                                    fontSize: 18,
                                    fontWeight: "normal",
                                    mt: 5,
                                    p: "0 5",
                                    "@media screen and (max-width: 550px)": {
                                        fontSize: 15,
                                    },
                                }}>
                                東京都立大学大学院 システムデザイン研究科 情報科学域 <br />
                                博士前期課程1年
                                <Link
                                    sx={{
                                        color: "#99ff33",
                                        textDecoration: "none",
                                        ml: 1,
                                        ":hover": { color: "#3399ff", cursor: "pointer" },
                                    }}
                                    href="https://www.comp.sd.tmu.ac.jp/nishilab/mem.html"
                                    target="_blank"
                                >西内研究室
                                </Link> &
                                <Link
                                    sx={{
                                        color: "#99ff33",
                                        textDecoration: "none",
                                        ml: 1,
                                        ":hover": { color: "#3399ff", cursor: "pointer" },
                                    }}
                                    href="https://sites.google.com/view/vibolyem/members?authuser=0"
                                    target="_blank"
                                >ヤェム研究室
                                </Link> 所属 <br /><br />
                                生まれ：1999年 神奈川県
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
