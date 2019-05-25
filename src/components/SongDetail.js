import React from 'react';
import { connect } from 'react-redux';



const SongDetail = ({song}) => {
    if(!song) {
        return <div>Select a Song </div>
    }

    return (
        <div> 
            <h3> Details for song :</h3>
            <p>
                Title : {song.title}
                <br></br>
                Duration : {song.duration}
            </p> 
        </div>
    )
};

const mapStateToProps = (state) => {
    return { song: state.selectedSong}
};

export default connect(mapStateToProps)(SongDetail);