import React from 'react'
import {useHistory} from 'react-router-dom';

const Error = () => {
    const history = useHistory();
    return (
        <div className= "container">
            <div className="mb-4" style={{"textAlign": "center"}}>
                <h1 className="display-2">Error:404 Not Found</h1>
                <button type="button" className="btn btn-success" onClick={()=>{history.push("/")}}>برگشت</button> 
            </div>
        </div>
    )
}

export default Error
