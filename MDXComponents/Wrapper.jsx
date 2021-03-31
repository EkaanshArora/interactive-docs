import React, {useState} from 'react';
import {MDXProviderProps} from '@mdx-js/react';
import {SwipeableDrawer, Fab, Divider} from '@material-ui/core';
import SideBar from './Sidebar';
import {LinkProvider} from './useActiveLink';
import MenuIcon from '@material-ui/icons/List';
import useSmQuerry from '../hooks/useSmQuerry';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import {useTheme} from '@material-ui/core/styles';
import {makeStyles, createStyles} from '@material-ui/core/styles';

const webStyles = {
  position: 'fixed',
  top: '4rem',
  width: '20%',
};

const mobStyles = {
  width: '70vw',
  maxWidth: '300px',
  marginTop: '20px',
  marginLeft: '20px',
};
const useStyles = makeStyles(() =>
  createStyles({
    customDrawer: {
      width: '70vw',
      maxWidth: '500px',
    },
    textStyle: {
      color: 'white',
      marginTop: '10px',
      marginLeft: '10px',
    },
    toolbar: {
      height: '3rem',
      paddingTop: '8px',
      paddingLeft: '8px',
    },
    fabutton: {
      position: 'fixed',
      bottom: '65px',
      right: '10px',
      zIndex: 10,
    },
  }),
);

function Wrapper(props) {
  const CustomClasses = useStyles();
  const matches = useSmQuerry();
  const [rightDrawerVisible, setRightDrawerVisible] = useState(false);
  const rest = React.Children.toArray(props.children);
  const heading = rest.shift();
  const [link, setLink] = useState('');
  const theme = useTheme();

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          maxWidth: '1343px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '80px',
        }}>
        <LinkProvider value={{link, setLink}}>
          {matches ? (
            ''
          ) : (
            <div style={{width: '280px', minWidth: '280px'}}>
              <SideBar />
            </div>
          )}
          <main>
          {heading}
          <div
          style={{ position:'relative', width: '100%'}}>
            {rest}
          </div>

          </main>
        </LinkProvider>
      </div>
    </>
  );
}

export default Wrapper;
