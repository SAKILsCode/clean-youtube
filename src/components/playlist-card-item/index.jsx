import { PlayCircleOutline } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import * as React from 'react';

const PlaylistCardItem = ({
  playlistThumbnail,
  playlistTitle,
  channelTitle,
}) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        mx: 1,
      }}
    >
      <CardMedia
        component='img'
        image={playlistThumbnail.url}
        alt={playlistTitle}
      />
      <CardContent>
        <Typography variant='h6' color='text.primary'>
          {playlistTitle.length > 50
            ? playlistTitle.substr(0, 50) + '...'
            : playlistTitle}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {channelTitle}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }}></Box>
      <CardActions disableSpacing>
        <Button>
          <Stack direction={'row'} spacing={1} alignItems={'center'}>
            <PlayCircleOutline />
            <Typography variant='body2' fontWeight={600}>
              Start Tutorial
            </Typography>
          </Stack>
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaylistCardItem;
