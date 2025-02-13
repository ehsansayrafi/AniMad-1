import React, { useState, useEffect } from 'react'
import { useGlobalContext } from '../utils/context'
import AnimeCard from './AnimeCard';
import Loading from './Loading';
import {Link, useHistory} from 'react-router-dom';
import '../index.css';
import Buttons from './Buttons';

const Popular = () => {
    const history = useHistory();
    const [page, setPage] = useState(1);
    const {isLoading, setIsLoading} = useGlobalContext();
    const [data, setData] = useState([]);

    useEffect(()=>{
        setIsLoading(true);
        fetch(`/popular/${page}`)
        .then(res=> res.json())
        .then(doc => {
            if(doc.results.length!==0){
                setData(doc.results);
                setIsLoading(false);
            }
        else{
            history.push('/error');
        }
        })
    }, [page]);

    return isLoading ? <Loading /> : (
        <div className='container'>
            <div className="mb-4" style={{"textAlign": "center"}}>
                <h1 className="display-2">معروف ترین ها</h1>
            </div>
            <div className="row mb-3">
                {
                    data.map((anime, index)=>{
                        return (
                            <div className='col-sm-6 col-md-3 col-lg-3 mb-4'>
                                <Link style={{ textDecoration: 'none' }} className="link" to={`/details/${anime.id}`}>
                                    <AnimeCard key={index} {...anime}/>
                                </Link>
                        </div>
                        )  
                    })
                }
            </div>
            <Buttons setPage={setPage} page={page} />
        </div>
        
    )
}

export default Popular
