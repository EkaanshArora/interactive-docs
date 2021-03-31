import React, {useState, useRef, useEffect} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Button, IconButton, Paper, SwipeableDrawer} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {useRouter} from 'next/router';
import SideBarContent from '../MDXComponents/SidebarContent';
// import {getLeftDrawerToggle , setLeftDrawerToggle} from '../hooks/drawerToggle';
import Link from './Link';
import useSmQuerry from '../hooks/useSmQuerry';

import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      // width: '100vw',
      // backgroundColor: '#eee',
      paddingLeft: '0',
      height: '4rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    leftSection: {
      display: 'flex',
      alignSelf: 'stretch',
      alignItems: 'center',
      marginLeft: '20px',
    },
    hamburgerBtn: {
      marginRight: '8px',
    },
    rightSection: {
      display: 'flex',
      marginRight: '20px',
    },
    appBar: {
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100vw',
      zIndex: 25,
    },
    navButton: {
      alignSelf: 'stretch',
      display: 'flex',
      flexDirection: 'column',
      marginLeft: '4px',
      marginRight: '4px',
    },
    navButtonActive: {
      borderBottomColor: theme.palette.primary.main,
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderWidth: '0px',
      borderStyle: 'solid',
    },
    navBottomBar: {
      width: 'auto',
      height: '5px',
      backgroundColor: theme.palette.primary.main,
      marginTop: 'auto',
    },
    rightButton: {
      marginLeft: '10px',
    },
    customDrawer: {
      width: '70vw',
    },
    textStyle: {
      marginTop: '10px',
      marginLeft: '10px',
    },
    toolbar: {
      backgroundColor: '#eaeaea',
      height: '3rem',
    },
  }),
);


function NavButton(props) {
  const router = useRouter();
  const classes = useStyles();
  return (
    <div className={classes.navButton}>
      <Link
        style={{textDecoration: 'none', marginTop: '5px'}}
        href={props.route}>
        <Button
          variant="text"
          disableRipple
          disableTouchRipple
          disableFocusRipple
          style={{color: 'black'}}
          disableElevation>
          {props.text}
        </Button>
      </Link>
      {router.pathname.split('/')[1] ===
        (props.route).split('/')[1] && (
        <div className={classes.navBottomBar} />
      )}
    </div>
  );
}

export default function Header() {
  const router = useRouter();
  const matches = useSmQuerry();
  const [isSticky, setSticky] = useState(false);
  const [leftDrawerToggle, setLeftDrawerToggle] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top < 0);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  const classes = useStyles();

  return (
    <>
      {/* Dummy element that renders behind navbar*/}
      <div ref={ref} className={classes.root} />
      <Paper className={classes.appBar} elevation={isSticky ? 3 : 0} square>
        <Container className={classes.root}>
          <div className={classes.leftSection}>
            {matches && router.pathname.split('/')[1] === 'docs' ? (
              <>
                <IconButton
                  className={classes.hamburgerBtn}
                  onClick={() => setLeftDrawerToggle(true)}>
                  <MenuIcon color="primary" />
                </IconButton>
                <SwipeableDrawer
                  anchor="left"
                  classes={{paperAnchorLeft: classes.customDrawer}}
                  open={leftDrawerToggle}
                  onClose={() => setLeftDrawerToggle(false)}
                  onOpen={() => setLeftDrawerToggle(true)}>
                  <div className={classes.toolbar}>
                    <div
                      style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '14em',
                      }}>
                      <img
                        style={{
                          marginTop: '10px',
                          marginLeft: '8px',
                          width: '12em',
                        }}
                        src="/appbuilder.svg"
                      />
                    </div>
                  </div>
                  <SideBarContent />
                </SwipeableDrawer>
              </>
            ) : (
              ''
            )}
            <Link href="/">
              {matches ? (
                <img
                  key={'small logo'}
                  style={{
                    width: '2em',
                    marginRight: '5px',
                  }}
                  src="https://web-cdn.agora.io/doc-center/image/agora-logo.png"
                />
              ) : (<>
                <img
                  key={'large logo'}
                  style={{
                    marginLeft: '5px',
                    marginRight: '5px',
                    width: '2em',
                  }}
                  src="https://web-cdn.agora.io/doc-center/image/agora-logo.png"
                /> <p style={{marginRight:'2em', fontSize: '18px'}}>Documentation</p></>
              )}
            </Link>
            {!matches ? (
              <>
                <Select style={{marginRight: '20px'}} labelId="label" id="select" value="10">
                  <MenuItem value="10">Video Call</MenuItem>
                  <MenuItem value="20">Voice Call</MenuItem>
                  <MenuItem value="30">Cloud Recording</MenuItem>
                </Select>
               <Select labelId="label" id="select" value="30">
                  <MenuItem value="10">Android</MenuItem>
                  <MenuItem value="20">iOS</MenuItem>
                  <MenuItem value="30">Web</MenuItem>
                </Select>
                {/* <NavButton route="/" text="Docs" /> */}
                {/* <NavButton route="/console" text="Console" /> */}
                {/* <NavButton route="/docs" text="Docs" /> */}
              </>
            ) : (
              ''
            )}
          </div>
          <div className={classes.rightSection}>
            <Select style={{ marginRight: '20px' }} labelId="label" id="select" value="10">
              <MenuItem value="10">English</MenuItem>
              <MenuItem value="20">中文</MenuItem>
            </Select>
            <Button
              href="https://join.slack.com/t/agoraiodev/shared_invite/zt-e7ln476c-pfWWYMs40Y7GMPz2i26pwA"
              target="_blank"
              variant="contained"
              className={classes.rightButton}
              color="primary"
              style={{color: 'white'}}
              disableElevation>
                Sign up
            </Button>

          </div>
        </Container>
      </Paper>
    </>
  );
}
