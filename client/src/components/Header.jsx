import React from 'react';
//App-Bar is to show tab menu of Application
import { AppBar, Button, Toolbar, Typography, makeStyles} from "@material-ui/core";
import { Link as RouterLink} from 'react-router-dom';
//useStyles is a function that is returning an object class?
const useStyles = makeStyles(()=> ({
  header: {
    backgroundColor: "#111d5e",
    paddingRight: "79px",
    paddingLeft: "118px",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  }, 
  menuButton : {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  }
}));
//We want to add some routes and buttons to the header
const headersData = [
  {
    label: "aboutMe",
    href: "/aboutMe",
  },
  {
    label: "myProjects",
    href: "/myProjects",
  },
  {
    label: "myLinks",
    href: "/myLinks",
  },
  {
    label: "contactMe",
    href: "/contactMe",
  },
];

function Header(props) {
  const { header, logo, menuButton, toolbar } = useStyles(); 

  const displayDesktop = () => {
    return (
    <Toolbar className={toolbar}>
      {femmecubatorLogo}
      <div>
        {getMenuButtons()}
      </div>
    </Toolbar>)
  }


  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton, 
          }}
        >
          {label}
        </Button>
      );
    });
  };

  const femmecubatorLogo = (
    <Typography variant="h6" component="h1" className={logo}>
    Emmanuel Garcia's Website
    </Typography>);
  
  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
}

export default Header;