import { useState, useEffect } from "react"


const LastNew = () => {
  
  const [listNews, setListNews] = useState([])

  useEffect(() => {
    const news = JSON.parse(localStorage.getItem("listNews")) || []
    setListNews(news[news.length -1])
  }, [])

  return (
    <div className="wrapper">
      
      <h1>Última noticia</h1>
      <h2>{listNews.title}</h2>
      <p>{listNews.content}</p>
      <p>Escrito por: {listNews.name}</p>
      <a href="/listNews" className="button">Ver todas las noticias</a>

    </div>
  )
}

export default LastNew