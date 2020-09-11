import Link from 'next/link'
import Head from 'next/head'
import Header from './header';
import Footer from './footer';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#343A40',
    },
  },
});


export default function Layout({
  children,
  title = 'This is the default title',
}) {

  return (
    <>
      <ThemeProvider theme={theme}>
       
      <Header />
        <AppBar position="static" color="primary">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <div className="zn-navbar">
                  <div className="zn-tittle-navbar">SAHATE</div>
                  <div className="zn-sub-tittle-navbar">Your Best Property Partner</div>
              </div>
              {/* <Typography variant="h6" className={classes.title}>
                SAHATE
              </Typography> */}
              <Button color="inherit">Login</Button>
              <Button color="inherit">Login</Button>
              <Button color="inherit">Login</Button>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
       

    
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
        {/* </ThemeProvider> */}

        <Container fixed>
         
        {/* <nav>
            <Link href="/home">
              <a>Home</a>
            </Link>{' '}
            |
            <Link href="/contact">
              <a>About</a>
            </Link>{' '}
            |
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </nav> */}

          {children}
      </Container>
       
    

      {/* <footer>{'I`m here to stay'}</footer> */}
      <Footer />

      </ThemeProvider>
    </>
  )
}