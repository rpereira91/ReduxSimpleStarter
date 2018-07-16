import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
//since its a file we wrote we nede to go into the proper sub folder
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_deatails';
//youtube api
const API_KEY = 'AIzaSyBwYGFBUT4lKrurMIBLJYxcWR-9flhT4is';


//create a new component. Component should produce some HTML *deprecated* 
// const App = () => {
//     return (
//     <div> 
//         <SearchBar/ >
//     </div>);
// }
//create a class instead of a component
class App extends Component {
    //the constructor will run as soon as the app is started
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
             };
    this.videoSearch('test');

    }
    videoSearch(term) {
        //the data keyword doesn't need to be 'data', will be called 'videos' now
        YTSearch ({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos:videos,
                selectedVideo: videos[0]
            });
            //this is the same as
            //this.setState({videos: videos});
            //since the variable has the same name
        });
    }
    render () {
        return (
        <div> 
            <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}/>
        {/* passing props to the video list */}
        </div>);
    }
}
//put the HTML in the DOM somehow
//creates a react element for the DOM to render, by wrapping it with JSX tags
ReactDOM.render(<App />, document.querySelector('.container'));

