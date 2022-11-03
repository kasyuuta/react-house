
import {useState} from  "react";
import Input from "../../components/input/Input";
import Title from "../../components/title/Title";
import { toast } from 'react-toastify';
import {useNavigate} from "react-router-dom";
import Api from "../../api";

const  toastSettings = {
    position: 'bottom-right',
    theme: "colored"
}

function AdPage() {
    const [ type, setType] = useState ("houses") 
    const [ name, setName] = useState ("")
    const [ price, setPrice] = useState ("")
    const [ description, setDescription] = useState ("")
    const [ imgUrl, setImgUrl] = useState ("")
    const [ isSending, setSending] = useState (false)

    const navigate = useNavigate()
    
    const submit = (e) => {
        e.preventDefault();
        setSending(true);
        toast.info("Start", toastSettings);
        const data = {
            title: name,
            imgUrl:imgUrl,
            price: price,
            description: description
        }
        Api.postHouse(data).then((res) => {
            if(res.status === 201) {
              toast.success("Success", toastSettings);
              navigate('/dashboardPage')
            } else {
              toast.error("Error", toastSettings)
               
              setSending(false)
            }
          })
    };
      

  const handleName = (e) => setName(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleImg = (e) => setImgUrl(e.target.value);
  const handleType = (e) => setType(e.target.value);



    return (
        <div className="page">
             <Title position="center"> Создать объявления</Title>
            <form onSubmit={submit}>
                <Input 
                value={name}  
                onChange={handleName} 
                title="Название" 
                placeholder="Название" 
                type="text"/>
                <Input 
                value={price} 
                onChange={handlePrice} 
                title="Цена" type="number" 
                placeholder="Цена" />
                <Input 
                value={description}  
                onChange={handleDescription} 
                title="Описание" 
                type="text" 
                placeholder="Описание"/>
                <Input 
                value={imgUrl}  
                onChange={handleImg} 
                title="Фото" 
                type="text" 
                placeholder="Фото"/>

                <div>
                  <label>
                    <input onChange={handleType} type="radio" name="text" id="houses" />
                    Houses
                  </label>

                  <label>
                  <input  onChange={handleType} type="radio" name="text" id="cars" />
                  cars
                  </label>
                </div>
                <button disabled={isSending} className="btn-primary"> +Создать </button>
              
            </form>
           

        </div>
    )  
}

export default AdPage