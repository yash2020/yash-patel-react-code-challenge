import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchHomeData } from '../component/redux/action/homeAct'

const HomePage = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);

    useEffect(() => {
        //call the List of Home page.
        dispatch(fetchHomeData());
        console.log(posts);

    },[dispatch])
    return (
        <>
            <h1>welcome to home page</h1>
            
        </>
    )
}

export default HomePage;