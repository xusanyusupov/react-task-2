import "../../components/user/User.scss"
import user1 from "../../assets/user1.svg"
import user2 from "../../assets/user2.svg"

import { FaStar } from "react-icons/fa";

const User = () => {
    return(
         <div className="container">
            <div className="user__wrapper">
                <div className="user">
                    <img src={user1} alt="" />
                    <div>
                    <b>Hamza Faizi</b>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, veniam?</p>
                    <div className="flex"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                    </div>
                </div>
                <div className="user">
                    <img src={user2} alt="" />
                    <div>
                    <b>Hamza Faizi</b>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, veniam?</p>
                    <div className="flex"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default User