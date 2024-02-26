import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';

export default function Posts() {

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate()

  const apiUrl = "http://localhost:90/Esercizio_API/wordpress/wp-json/wp/v2/posts"

  const fetchPosts = async () => {
    const response = await fetch (apiUrl);
    const data = await response.json();
    return setPosts(...posts, data, setIsLoading(false));
  }

  useEffect( ()=> {
    fetchPosts();
  }, [])

  return (
    <Card>
      {console.log(posts)}
      <Card.Body>Scopri gli ultimi post caricati</Card.Body>
      
      {isLoading ? <Card><Card.Body><Spinner animation="border" variant="primary" /></Card.Body></Card> : 
      
      posts?.map((numero) =>
        <Card key={numero.id}>
            <Card.Title>
              <Button className='nav-link' onClick={() => navigate("/SinglePost/" + numero.id)}><span dangerouslySetInnerHTML={{ __html: numero.title.rendered }} /></Button>
            </Card.Title>
            <Card.Text>
              <span>Pubblicato: {numero.date.slice(5,7)} {numero.date.slice(0,4)}</span>
            </Card.Text>
        </Card>
      )
      }

    </Card>
  )
}
