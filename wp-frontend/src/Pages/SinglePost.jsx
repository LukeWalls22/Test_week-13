import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';

export default function SinglePost() {

    const id = useParams();

    const [post, setPost] = useState([]);
    const [autore, setAutore] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const apiUrl = `http://localhost:90/Esercizio_API/wordpress/wp-json/wp/v2/posts/${id.id}`


    const fetchPost = async () => {
        const response = await fetch (apiUrl);
        const data = await response.json();
        return setPost(...post, data, setIsLoading(false));
      }


    
      useEffect( ()=> {
        fetchPost();

      }, [])

  return (
    <>
    {console.log(id)}
    {console.log(post)}
    
    {isLoading ? <Card><Card.Body><Spinner animation="border" variant="primary" /></Card.Body></Card> : 
        <Card>
            {console.log(post?._links.author[0].href)}
            <Card.Text><span dangerouslySetInnerHTML={{ __html: post.content.rendered }} /></Card.Text>
        </Card>
      }
    </>
  )
}
