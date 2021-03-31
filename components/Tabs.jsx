import { useState } from "react"
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LivePreview from './LivePreview';
import RTMButton from './RTMButton';
import Typography from '@material-ui/core/Typography';
import theme from './theme';

export default function Tabs2(props){
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return(
    <>
      <Typography
      gutterBottom
      variant={'h2'}
    > 
    {props.apiMethod}
    </Typography>
      <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
      >
        <Tab label="Description" />
        <Tab label="Live example" />
        <Tab label="Discussions" />
        <Tab label="FAQ" />
      </Tabs>
      {
        value === 0 
          ? props.children : 
          value === 1 ? <>
            <LivePreview />
            <RTMButton apiMethod={props.apiMethod} />
          </> :
          value === 2 ? <> Dissussion integration with slack </>: <> FAQ </>
      }
    </>
  )
}