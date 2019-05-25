import { combineReducers } from 'redux';


const songsReducer = () => {

    return[
        { title: 'In the End',  duration : '2:50' },
        { title: 'Sunlight',  duration : '5:40' },
        { title: 'Deamons',  duration : '6:20' },
        { title: 'Counting Stars',  duration : '1:50' },
        { title: 'Closer',  duration : '2:20' },
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