import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const PlaylistForm = ({ open, handleClose, getPlaylistId }) => {
  const [state, setState] = useState('');
  const handleSubmit = () => {
    //TODO handle url later
    if (!state) {
      alert('Invalid State');
    } else {
      getPlaylistId(state);
      setState('');
      handleClose();
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Playlist</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter a valid YouTube playlist ID or Link
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            label='Playlist ID or Link'
            fullWidth
            variant='standard'
            onChange={(e) => setState(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add Playlist</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default PlaylistForm;
