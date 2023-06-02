import React from 'react'



const NasaPhoto = (props) => {
    return (
      <div className='nasa-photo-wrapper'>
        <h3>{props.photo.title}</h3>
        <p className='date'>{props.photo.date}</p>

        <div className='picture-text'>
          <img src={props.photo.hdurl} />
          <p className='explanation'>{props.photo.explanation}</p>
        </div>

        <footer className='footer'>
          <p>Copyright Lt</p>
        </footer>
      </div>
    );
  };


export default NasaPhoto
