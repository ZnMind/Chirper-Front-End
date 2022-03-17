//Ended up not using Timeline
import React from 'react';
import Chirps from './chirps'

const myPosts = [];

const Timeline = props => {
    //const post1 = <Chirps name='Dan Mann' chirp='Boy React sure is fun!' />
    //const post2 = <Chirps name='Man Dann' chirp='You bet it is!' />
    //const post3 = <Chirps name='Elon Musk' chirp='Dogecoin' />
    
    myPosts.push(<Chirps name={props.name} chirp={props.chirp}/>);

    const myElements = myPosts.map((val, index) => {
        return <div key={index}>{val}</div>
    })
    
    console.log(myElements)
    return <div>{myElements}</div>
}

/* const NewPost = props => {
    const anotherOne = [];
    anotherOne.push(<Chirps name={props.name} chirp={props.chirp}/>);
    return <div>{anotherOne}</div>;
} */


export default Timeline;
//export { NewPost };