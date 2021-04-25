import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNewRepos } from '../actions/reposActions';
import { API } from './API';

const Pages = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState(null);
    const repos = useSelector(state => state.repos);
    const url = `${API}/${user}/repos`;

    const handleGetRepos = () => {
        let inputValue = document.querySelector('.input').value;
        setUser(inputValue);
    };

    useEffect(()=>{
        if(user!==null){
            dispatch(fetchNewRepos(url));
        }       
    },[user]);

    return ( 
        <div className="flex flex-col flex-wrap content-center">
            <h1 className="text-6xl bold m-7 text-gray-700 text-center">Find users repositories on GitHub</h1>
            <form className="m-7 self-center" onsubmit="return false;">
                <input className="input m-2 w-80 shadow appearance-none border rounded py-2 px-3 text-grey-darker" type="text" placeholder="Type user name and click search"/>
                <button className="italic font-bold border border-yellow-500 text-yellow-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-yellow-500 focus:outline-none focus:shadow-outline" onClick={handleGetRepos} type="button">Search</button>
            </form>
            <div className="flex flex-row flex-wrap">
                {repos&&repos
                .sort(function(first, second) {
                    return second.stargazers_count - first.stargazers_count;
                })
                .map(repo=>
                <div key={repo.id} className="flex flex-col self-center p-8 m-8 shadow-2xl">
                    <a href={repo.html_url}>
                        <h2 className="text-xl bold p-5 text-yellow-500"><a href={repo.html_url}>{repo.name}</a></h2>
                        <p className="text-l p-5 text-gray-700">{repo.description}</p>
                        <p className="text-s p-5 text-gray-500">Stars: {repo.stargazers_count}</p>
                    </a>
                </div>)}
            </div>
        </div>
     );
}
 
export default Pages;