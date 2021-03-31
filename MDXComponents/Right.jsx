import { createStyles, makeStyles } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import useActiveLink from './useActiveLink';

const useStyles = makeStyles(
  createStyles({
    right: {
      width: 'calc(50% - 140px)',
      position: 'fixed',
      right: 0,
      top: '128px'
    }
  })
)

export default function Right(props) {
  const classes = useStyles();
  const { link } = useActiveLink();
  return props.name === link ? <div className={classes.right}>
    {props.children}
  </div> : <></>
}