import axios from 'axios';

const key = import.meta.env.VITE_YOUTUBE_API_KEY;

const getPlaylistItems = async (playlistId, pageToken = '', result = []) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?key=${key}&part=id,contentDetails,snippet,status&maxResults=50&playlistId=${playlistId}&pageToken=${pageToken}`;

  const { data } = await axios.get(URL);
  result = [...result, ...data.items];
  if (data.nextPageToken) {
    result = getPlaylistItems(playlistId, data.nextPageToken, result);
  }
  return result;
};

const getPlaylist = async (playlistId) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${key}`;
  const { data } = await axios.get(URL);
  let playlistItems = await getPlaylistItems(playlistId);

  const {
    channelId,
    channelTitle,
    title: playlistTitle,
    description: playlistDescription,
    thumbnails,
  } = data?.items[0]?.snippet;

  console.log(playlistItems);
  playlistItems = playlistItems.map((item) => {
    const {
      title,
      description,
      thumbnails: { medium },
    } = item.snippet;

    return {
      contentDetails: item.contentDetails,
      title,
      description,
      thumbnails: medium,
    };
  });

  return {
    channelId,
    channelTitle,
    playlistId,
    playlistTitle,
    playlistDescription,
    playlistThumbnail: thumbnails.default,
    playlistItems,
  };
};

export default getPlaylist;
