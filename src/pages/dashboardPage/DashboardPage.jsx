import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";
import Title from "../../components/title/Title";
import css from "../homePages/HomePage.module.css";
import { useSelector } from "react-redux";

function DashboardPage(){
    const { isLoading, data } = useSelector((state) => state.houses)
    const { data: carsData } = useSelector((state) => state.cars)

    if(isLoading){
        return <Loader/>
    }

    const renderCards = (d) =>{
        return d.length ? (
            d.map((item) => (
                <Card 
                    key={item.id}
                    text={item.title} 
                    price={item.price} 
                    img={item.imgUrl}
                    id={item.id} 
                    isAdmin ={true}
                 /> 
        ))
        ):( <h1 > Нет объявлений </h1>
        )
    }

    return (
        <div className="page">
            <Title position="center"> Мои  объявление </Title>
            <Link className="btn-primary" to="/ad"> + Creat new element</Link>
            <div className={css.cardsWrapper}>
              {/* <Card text="Продаю 6км дом  в Бишкеке"
                   price="600"/> */}
              {renderCards(data)}
            </div>
            <br/>
            <br/>
            <Title position="center">Последнее объявление cars </Title>
            <div className={css.cardsWrapper}>
              {renderCards(data)}
               </div>
        </div>
    )
}

export default DashboardPage