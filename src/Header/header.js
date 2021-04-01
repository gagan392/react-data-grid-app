import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function HeaderBar(props) {
  const classes = useStyles();
  const [back, setBack] = useState(false);
  const [next, setNext] = useState(true)
  
  const nextBtnHandler = () => {
    props.nextBtnHandler();
    setBack(true);
    setNext(false);
  }

  const backBtnHandler = () => {
    props.backBtnHandler();
    setBack(false);
    setNext(true);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {props.headerText}
          </Typography>
          {Object.keys(props.pdfData).length > 0 && next && <Button color="inherit" onClick={nextBtnHandler}>Next</Button>}
          {back && <Button color="inherit" onClick={backBtnHandler}>Back</Button>}
          {/* <Button color="inherit" onClick={() => generatePDF(props.pdfData)} >Generate report</Button> */}
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
