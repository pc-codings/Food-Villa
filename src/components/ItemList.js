import { ITEM_IMG_CDN_URL } from "../constants";
import { addItem } from "../Utils/cartSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ItemList = ({items})=>{
    

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
        toast.success("Item Added !", {
            position: toast.POSITION.TOP_CENTER
          });
    };
    return(
        <div>
            {
                items.map((item)=>(
                    <div className="acordian-part" key={item.card.info.id}>
                        <div className="acordian-2">
                            <img src={ITEM_IMG_CDN_URL+item.card.info.imageId} className="acordian-img"/>
                            <button className="add-to-cart" onClick={() => handleAddItem(item.card.info)}>
                                Add +
                            </button>
                            <ToastContainer />
                        </div>
                        <div>
                            <div>
                                <span>{item.card.info.name}</span>
                                <span> - ₹ {item.card.info.price/100}</span>
                            </div>
                            <p className="despo">{item.card.info.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList;