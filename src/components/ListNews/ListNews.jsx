import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';



const ListNews = () => {
  const [listNews, setListNews] = useState([])

  useEffect(() => {
    const news = JSON.parse(localStorage.getItem("listNews")) || []
    setListNews(news)
  }, [])

  return (
    <div className="wrapper">
      <h1>Mis noticias</h1>
      
        {listNews.map(item => (
           <Card key={item.id}>
           <Card.Body>
             <Card.Title>{item.title}</Card.Title>
             <Card.Text dangerouslySetInnerHTML={{ __html: item.content }}></Card.Text>{/* Renderizar contenido HTML de manera segura */}
             <Card.Text>Esta noticia fue escrita por: {item.name}</Card.Text>
           </Card.Body>
         </Card>
        ))}
      
    </div>
  )
}

export default ListNews
