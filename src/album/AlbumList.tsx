const albumList = [
  {
    title: 'To Be Kind',
    artist: 'Swans',
    url: 'https://i.discogs.com/Fzrb57q6IxZhwWv-Fs1u565i8tMvosZHCGTwYUVQOkw/rs:fit/g:sm/q:90/h:538/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU2NDkx/NTktMTM5OTk5MDU1/OS03NTU5LmpwZWc.jpeg'
  },
  {
    title: 'Weezer',
    artist: 'Weezer',
    url: 'https://i.discogs.com/MBe-Ixw7f7ZFbNoluI3LU4sJTiXO8ASiU_Qrl6JQiWY/rs:fit/g:sm/q:90/h:595/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg0NTQy/ODUtMTQ2MTkzODM3/Ny0zMzA4LmpwZWc.jpeg'
  },
  {
    title: 'Endless Summer',
    artist: 'The Sandals',
    url: 'https://i.discogs.com/F3AlGsfN9xfrHL4kgsHOm5h5P40iLQrnJOPBIximBMg/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4MDc1/MDQtMTMwMTk0OTI4/OS5qcGVn.jpeg'
  }
];

const AlbumList = () => {
  return (
    <ul>
      {albumList.map((album) => (
        <li>{album.artist} - {album.title}</li>
      ))}
    </ul>
  );
}

export default AlbumList;
