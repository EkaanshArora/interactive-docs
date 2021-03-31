import {createStyles, makeStyles} from '@material-ui/core'

const useStyles = makeStyles(
  createStyles({
    left:{
      width:'50%'
    }
  })
)

export default function Left(props){
  const classes = useStyles();
  return <div className={classes.left}>
  {props.children}
  </div>
}