import { INC_CDN_URL } from "../constants"
const RestrauntCard = ({name, cuisines , cloudinaryImageId , avgRating})=>{
    return(
        <div className='card'>  
            <img src={INC_CDN_URL
        +cloudinaryImageId}/>
            <div className="card-chlid">
                <h2>{name}</h2>
                <h3>{cuisines.join(",")}</h3>
                <h4>{avgRating} ⭐ </h4>
            </div>
        </div>
    )
}
export default RestrauntCard;