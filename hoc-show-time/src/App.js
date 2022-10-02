import React, {useState} from 'react';
import videoData from './data/videoData';
import VideoList from './components/VideoList';

export default function App() {
    const [list, setList] = useState(videoData);

    return (
        <VideoList list={list} />
    );
};