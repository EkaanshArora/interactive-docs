import {createStyles, makeStyles} from '@material-ui/core'
import { red } from '@material-ui/core/colors'

const useStyles = makeStyles(
  createStyles({
    right:{
      backgroundColor: red[600],
      width: '50%',
      height: '50vh',
      position: 'fixed',
      left: '50%'
    },
    left:{
      width:'50%'
    }
  })
)

const lorem= `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ex ipsum, viverra euismod ante a, porta congue neque. In hac habitasse platea dictumst. Sed vulputate libero velit, eget tempor tellus sagittis ac. Proin porta hendrerit libero, vel luctus leo. Praesent risus quam, suscipit nec pretium vel, rhoncus a odio. In hac habitasse platea dictumst. In a augue vel nisl tempus lobortis.

Integer tincidunt varius mauris, vitae faucibus turpis gravida luctus. Etiam eget mi lorem. Ut sit amet diam lorem. Phasellus lobortis turpis nisl, eget malesuada velit ultricies vel. Ut et sollicitudin nunc. Suspendisse dapibus magna leo, eu viverra metus efficitur ut. Nam efficitur elit ligula, id congue tellus volutpat vel. Sed ut nibh fermentum, volutpat quam bibendum, luctus magna. Donec vestibulum mi in porttitor aliquam.

In at erat molestie, scelerisque mi et, interdum enim. Mauris pharetra feugiat mattis. Vestibulum maximus elit eget nunc ornare facilisis. Integer lacinia ultricies ante vel faucibus. Vivamus ex lorem, viverra quis euismod at, dignissim eget mauris. Curabitur laoreet lectus non sem viverra faucibus vitae ac ipsum. Duis eget congue mauris. Cras ultrices neque ex, ut sagittis dui consequat et. Morbi egestas tincidunt velit ac molestie. In condimentum, est et mattis feugiat, massa velit lacinia lacus, ut ullamcorper mi felis id enim. Aliquam eget bibendum libero.

Duis vulputate enim ligula, at tempor dui sollicitudin faucibus. Vivamus vel faucibus mauris. Aliquam vitae eros imperdiet, accumsan velit sollicitudin, blandit quam. Nam pharetra aliquet eros non vehicula. Duis convallis et libero et euismod. Proin pharetra tempus sapien. Mauris mollis non nibh tincidunt posuere.

Vivamus luctus, nulla non volutpat hendrerit, mauris purus congue metus, nec vulputate mauris felis in risus. Mauris non dignissim leo. Donec sed fringilla ipsum, ut condimentum arcu. Nullam eget ultricies orci, a varius justo. Praesent eget mattis erat. Donec id felis ut eros tincidunt sagittis. Vestibulum condimentum nisl eu ipsum accumsan, at tempor ligula elementum. Suspendisse et odio dictum, vulputate leo euismod, condimentum tortor. Sed tincidunt et est quis semper. Ut commodo, leo sed fringilla sollicitudin, nulla dui imperdiet diam, sit amet lacinia ipsum risus id ex. Suspendisse ut sem risus. Phasellus consequat nunc a tempor elementum. Mauris sodales, ex non cursus fringilla, nulla lorem congue orci, quis dapibus velit est eu sem. Mauris cursus orci tellus, rhoncus gravida magna gravida id. Aenean blandit odio in dolor euismod, ac faucibus dolor semper.
`
let loremArray=[];

for (let i = 0; i<10 ; i++){
  loremArray[i] = lorem;
}

export default function Web(){
  const classes = useStyles();
  return(
    <div style={{display: 'flex', flexDirection: 'row', position:'relative'}}>
      <div className={classes.left} >
        {loremArray.map(lr => <p>{lr}</p>)}
      </div>
      <div className={classes.right}>

      </div>
    </div>
  )
}