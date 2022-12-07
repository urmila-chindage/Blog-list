import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link,useNavigate } from 'react-router-dom';
import { Spinner } from 'reactstrap';

export default function Bloglist() {
    const [users, setUsers] = useState([]);
    const [IsLoading, setIsLoading] = useState(true);
    const urlJson = 'https://jsonplaceholder.typicode.com/photos';
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const users_data = await axios.get(urlJson);
            setIsLoading(false)
            setUsers(users_data);
        };
        fetchData();
    }, [setUsers])

    console.log(users)
    function blogdetails(id){
            navigate("/blogdetail/" +id)
    }
    return (
        <div>
            <h1 className="text-center m-5">USERS</h1>
                <div className="wrapper">
                
                   
                        {(users.length !== 0)
                            ?
                                users.data.map(item => (
                        
                                   

                                    <div className="gallary" onClick={()=>blogdetails(item.id)} key={item.id}>
                                        <figure>
                                                <img src={item.thumbnailUrl} />
                                                <figcaption className="text">
                                                    <h2 className="heading1">{item.id}</h2>
                                                    <p className="para2">{item.title}</p>
                                                    <Link className="btn btn-primary">{item.url}</Link>
                                                </figcaption>
                                        </figure>
                                    </div>
                           
                                ))

                                : 
                                
                                    IsLoading &&
                                    <div className="loader">
                                        <Spinner className='primary' />
                                    </div>
                                
                        }
                    </div>
               
        </div>
    )
}