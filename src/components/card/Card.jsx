import { Link } from "react-router-dom"
import { base_url } from "../../constants"
import css from "./Card.module.css"

function Card(props) {

const onDelete = () => {
   const res = window.confirm("Вы действительно ли хотите удалить")
    if(res){
        fetch(base_url + 'houses/' + props.id, {
            method:"DELETE"
        })
        .finally(() => {
            window.location.reload()
        })
    }

}

return(

        <div className={css.wrapper}>
            <div className={css.imageWrapper}> 
                <img src={props.img || "https://www.alfasolare.ru/a_solar_restyle/wp-content/themes/consultix/images/no-image-found-360x260.png" } 
                alt={props.text} />
            </div>
            <div className={css.footer}>
            <div className={css.title}>{props.text}</div>
            <div>{props.price}$</div>
             {
                props.isAdmin
                ? <button className="btn-primary" onClick={onDelete}>Удалить</button>
                :  <Link to={'/product/' + props.id}>
                <button className={`btn-primary ${css.btm}`} >Подробнее</button>
                </Link>
             }   
            </div>
        </div>
    )
}

export default Card