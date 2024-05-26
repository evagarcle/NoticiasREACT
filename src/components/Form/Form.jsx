import { useState } from "react"
import Content from "react-simple-wysiwyg"
import { useNavigate } from "react-router-dom"


const Form = () => {

  const [formInfo, setFormInfo] = useState({
    name:"",
    title:"",
    Content:""
  })
  
  let navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormInfo({
      ...formInfo,
      [name]: value
    })
  }

  const cleanFormAndRedirect = () => {
    setFormInfo({
      name:"",
      title:"",
      content:""
    })

    setTimeout(() => {
      navigate("/ListNews")
    }, 1500)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    const savedNews = JSON.parse(localStorage.getItem("listNews")) || []
    const updatedNews = [...savedNews,formInfo]
    localStorage.setItem("listNews", JSON.stringify(updatedNews))

    cleanFormAndRedirect()
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={formInfo.name} name="name" id="name" placeholder="Escriba tu nombre" />
        <input onChange={handleChange} type="text" value={formInfo.title} name="title" id="title" placeholder="Escriba el título de la noticia" />
        <Content onChange={handleChange} value={formInfo.content} name="content" id="content" placeholder="Escriba el cuerpo de la noticia" />
        <input className="button" type="submit"/>
        
      </form>
    </div>
  )
}

export default Form