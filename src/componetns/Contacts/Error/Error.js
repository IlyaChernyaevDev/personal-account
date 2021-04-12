import Typography from '@material-ui/core/Typography';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';


export const Error = () => {
  let history = useHistory();

  const handaleClick = () => {
    history.push('/');
  };

  return (
    <>
      <Typography gutterBottom variant='h4' component='h2' align='center'>
        Please log in to see your contacts
      </Typography>
      <Button
        variant='contained'
        color='primary'
        startIcon={<KeyboardBackspaceIcon />}
        onClick={handaleClick}
      >
        Back
      </Button>
    </>
  );
};
