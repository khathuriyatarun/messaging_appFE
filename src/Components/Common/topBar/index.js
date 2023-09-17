import ImageSmall from "../ImageIcon/imageSm"
import srcImage from "../../../logo.svg"

const TopBar = ({userName, displayPicture}) => {

    return (
        <div style={{position : 'fixed', width : '100%' , display : 'flex', backgroundColor : '#d3cccc', alignItems : 'center'}}>
            <ImageSmall srcImage={displayPicture} />
            <span className="ml-[15px]">{userName}</span>
        </div>
    )
}

export default TopBar