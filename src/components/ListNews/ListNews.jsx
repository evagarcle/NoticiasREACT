import { useState, useEffect } from 'react'



const ListNews = () => {
  const [listNews, setListNews] = useState([])

  useEffect(() => {
    const news = JSON.parse(localStorage.getItem("listNews")) || []
    setListNews(news)
  }, [])

  return (
    <div>
      <h1>List News</h1>
      <ul>
        {listNews.map(item => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: item.content }}></p>{/* Renderizar contenido HTML de manera segura */}
            <h4>{item.name}</h4>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListNews
