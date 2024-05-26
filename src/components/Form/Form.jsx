import { useState } from "react"
import Content from "react-simple-wysiwyg"

const Form = () => {

  const [formInfo, setFormInfo] = useState({
    name:"",
    title:"",
    Content:""
  })
  const [content, setContent] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormInfo({
      ...formInfo,
      [name]: value
    })
    if (e.target.name === "content") {
      setContent(e.target.value)
    }
  }


  // function onChange(e) {
  //   setContent(e.target.value)
  // }

  handleSubmit(e) {
    const savedNews = JSON.parse(localStorage.getItem("listNews")) || []
    const updatedNews = [...savedNews,formInfo]
  }


  return (
    <div>
      <form>
        <input onChange={handleChange} type="text" name="name" id="name" placeholder="Escriba tu nombre" />
        <input onChange={handleChange} type="text" name="title" id="title" placeholder="Escriba el título de la noticia" />
        <Content onChange={handleChange} value={content} name="content" id="content" placeholder="Escriba el cuerpo de la noticia" />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Form