import React from 'react';
import Photo from './Photo.jsx';

const Photos = props => (
  <div>
    {props.photos.map(photo => <Photo url={photo.url} tag={photo.tag} />)}
  </div>
);

export default Photos;