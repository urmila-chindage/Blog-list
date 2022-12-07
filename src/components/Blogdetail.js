import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";


const Blogdetail = () => {
    const [blogdetail, setBlogdetail] = useState({
        thumbnailUrl: "",
        id: "",
        title: "",
        url: ""

    });
    const params = useParams();
    useEffect(() => {
        getBlogInfo();
    }, []);
    const getBlogInfo = async () => {
        let result = await fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`);
         result = await result.json();
        //console.log(result)
        setBlogdetail(result);
    }
    return (
        <div className="container">
            <Link className="btn btn-primary m-3" to="/bloglist">Back to BlogList</Link>
            <div className="row">
                <div className="col-md-6 offset-md-3" style={{ border: '1px solid black', textAlign: 'center', padding: '10px' }}>
                    <img src={blogdetail.thumbnailUrl} />
                    <div className="text">
                        <h2 className="heading1">{blogdetail.id}</h2>
                        <p className="para2">{blogdetail.title}</p>
                        <Link className="btn btn-primary">{blogdetail.url}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogdetail;