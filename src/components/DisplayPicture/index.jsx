import { useState } from "react";
import Default from "./Default";
import Uploader from "./uploader"; 


const DisplayPicture = ({user, width = 49, height = 49, self = false }) => {
    const [show, setShow] = useState(user?.display)

    const preview = imagePreview => setShow(imagePreview)
    
    return(
        <div className="inline-block relative">  
            {user && show == '' ?
                <Default width={width} height={height} name={user?.name} />
             :
                <img src={show} alt={user?.name} style={{height : height}} width={width} className={`rounded-full overflow-hidden object-cover`} />
            }
            { self && <Uploader preview={preview} />} 
        </div>
    )
}

export default DisplayPicture;