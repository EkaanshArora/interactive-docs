import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/RemoveRounded';
import ExpandMore from '@material-ui/icons/AddRounded';
import {useRouter} from 'next/router';
import clsx from 'clsx';
import sidebar from '../sidebar';
import Link, {LinkProps} from '../components/Link';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    icons: {
      fontSize: theme.typography.fontSize,
      color: theme.palette.primary.main,
      minWidth: theme.spacing(2),
    },
    menuItemText: {
      fontSize: '0.8rem',
    },
    menuItem: {
      color: 'unset',
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.5),
      transition: theme.transitions.create(['color'], {
        duration: theme.transitions.duration.complex,
      }),
      '&:hover': {
        color: theme.palette.primary.main,
        backgroundColor: 'unset',
        textDecoration: 'none',
      },
    },
    menuItemOpen: {
      paddingBottom: theme.spacing(0.25),
    },
    collapseButton: {
      paddingLeft: theme.spacing(1),
    },
    collapseListItem: {
      '&:hover': {
        backgroundColor: 'unset',
      },
    },
    sectionHeading: {
      fontWeight: 700,
      color: theme.palette.primary.main,
      '&:hover': {
        fontWeight: 700,
      },
    },
    hightlight: {
      fontWeight: 700,
    },
    nested: {
      paddingTop: theme.spacing(0.2),
      paddingBottom: theme.spacing(0.2),
      paddingLeft: theme.spacing(5),
    },
  }),
);

export default function NestedList() {
  const classes = useStyles();
  const stateobj = {} 
  sidebar.map(({title})=>{
    stateobj[title] = false;
  });
  const [open, setOpen] = React.useState(stateobj);
  const router = useRouter();

  const handleClick = (title) => {
    if(title === 'API Reference')
    {
      router.push('/web/landing')
    } else
    setOpen(ps=>{return {...ps, [title]: !ps[title]}});
    console.log(title, open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      // subheader={
      //   <ListSubheader component="div" id="nested-list-subheader">
      //     Nested List Items
      //   </ListSubheader>
      // }
      className={classes.root}>
      {sidebar.map(({title, contents}) => {
        return (
          <div key={title}>
            <ListItem
              button
              disableRipple
              className={classes.collapseListItem}
              disableTouchRipple
              onClick={()=>handleClick(title)}
            >
              {(contents === null ) ? (null):(
                open[title] ? (
                  <ExpandLess className={classes.icons} > {console.log(contents)}</ExpandLess>
                ) : (
                  <ExpandMore className={classes.icons} />
                ))}
              {/* <ExpandMore className={classes.icons} /> */}
              <ListItemText
                className={classes.collapseButton}
                primaryTypographyProps={{
                  classes: {
                    root: classes.sectionHeading,
                  },
                }}
                primary={title}
              />
            </ListItem>
            <Collapse in={open[title]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding style={{marginTop: '-10px'}}>
                {contents !== null ? contents.map(({title: subtitle, url}) => (
                  <ListItem
                    key={url}
                    button
                    disableRipple
                    disableTouchRipple
                    className={clsx([classes.nested, classes.menuItem])}
                    component={React.forwardRef(
                      (props, ref) => (
                        <Link ref={ref} naked {...props} />
                      ),
                    )}
                    href={'/web/demo'}>
                    <ListItemText
                      primaryTypographyProps={{
                        classes: {
                          root: clsx({
                            [classes.menuItemText]: true,
                            [classes.hightlight]: router.pathname === url,
                          }),
                        },
                      }}
                      primary={subtitle}
                    />
                  </ListItem>
                )):(null)}
              </List>
            </Collapse>
          </div>
        );
      })}
    </List>
  );
}
