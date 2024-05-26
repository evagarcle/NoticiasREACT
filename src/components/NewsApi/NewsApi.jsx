import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const NewsApi = () => {
  const [news, setNews] = useState([]);


  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=kvoFwDZT2zv1DiAHFaHQoeTIw3XYJm9P');
        setNews(response.data.results);
        console.log(response)
       
      } catch (error) {
        console.log(error)
       
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="wrapper">
      <h1>News</h1>
      
        {news.map((item) => (
           <Card key={item.id}>
           <Card.Body>
             <Card.Title>{item.title}</Card.Title>
             <Card.Text>{item.abstract}</Card.Text>
             <Button href={item.uri} variant="primary">Enlace a {item.title}</Button>
           </Card.Body>
         </Card>
         
        ))}
    
    </div>
  );
};

export default NewsApi;