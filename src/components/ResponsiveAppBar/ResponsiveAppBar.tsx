import * as React from "react";
import {
  AppBar,
  Box,
  Typography,
  Link,
  Toolbar,
  IconButton,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Pages, PagesType, SNSs, SNSType } from "./Info";
const pages: PagesType[] = [...Pages];
const snss: SNSType[] = [...SNSs];

export const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Box
        sx={{
          backgroundColor: "#0A1929",
          borderStyle: "solid",
          borderColor: "rgba(194, 224, 255, 0.08)",
          borderWidth: "0px 0px thin",
          width: "100%",
        }}
      >
        <Container>
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="primary"
              >
                <MenuIcon
                  sx={{
                    width: 40,
                    height: 40,
                    borderStyle: "solid",
                    p: 0,
                    borderColor: "rgba(194, 224, 255, 0.08)",
                  }}
                />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <Link
                    key={page.name}
                    href={page.URL}
                    target="_blank"
                    underline="none"
                  >
                    <MenuItem
                      onClick={handleCloseNavMenu}
                      sx={{
                        p: "18px 40px",
                        color: "#3399ff",
                        backgroundColor: "#0A1929",
                        ":hover": {
                          backgroundColor: "rgb(0, 30, 60)",
                          cursor: "pointer",
                        },
                      }}
                    >
                      <Typography
                        textAlign="center"
                        sx={{
                          fontSize: "18px",
                        }}
                      >
                        {page.name}
                      </Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "Comic Sans MS",
                fontWeight: 700,
                fontSize: 20,
                letterSpacing: ".3rem",
                color: "#3399ff",
                textDecoration: "none",
                p: 4,
                "@media screen and (max-width: 500px)": {
                  display: "none",
                },
              }}
            >
              Shogo Shimada HP
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  component="a"
                  href={page.URL}
                  target="_blank"
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: "#3399ff",
                    fontSize: 16,
                    display: "block",
                    p: 5,
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            <Box
              sx={{
                flexGrow: 0,
              }}
            >
              <Tooltip title="Link">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="icon"
                    src="/static/images/avatar/HMDIcon.png"
                    sx={{
                      width: 30,
                      height: 30,
                      borderStyle: "solid",
                      borderRadius: "180px",
                      p: 1,
                      m: 1,
                      background: "linear-gradient(#c0f, #39f)",
                      borderColor: "rgba(194, 224, 255, 0.08)",
                      ":hover": {
                        // background: "linear-gradient(#39f,#a0a)",
                        background: "linear-gradient(#39f,#9f3)",
                        cursor: "pointer",
                      },
                    }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "80px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {snss.map((sns) => (
                  <Link
                    key={sns.name}
                    href={sns.URL}
                    target="_blank"
                    textAlign="center"
                    sx={{
                      fontSize: 18,
                      textDecoration: "none",
                    }}
                  >
                    <MenuItem
                      key={sns.name}
                      onClick={handleCloseUserMenu}
                      sx={{
                        p: "18px 40px",
                        color: "#3399ff",
                        backgroundColor: "#0A1929",
                        ":hover": {
                          backgroundColor: "rgb(0, 30, 60)",
                          cursor: "pointer",
                        },
                      }}
                    >
                      {sns.name}
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </Box>
    </AppBar>
  );
};
