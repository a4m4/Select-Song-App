import { combineReducers } from 'redux';


const songsReducer = () => {

    return[
        { title: 'Suno na Suno na',  duration : '2:50' },
        { title: 'Sunlo naa',  duration : '5:40' },
        { title: 'kiska hai ye tmko',  duration : '6:20' },
        { title: 'intezarr',  duration : '1:50' },
        { title: 'Main hun na',  duration : '2:20' },
    ];

};


const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}


export default combineReducers({
    songs: songsReducer,
    selectedSong : selectedSongReducer
});