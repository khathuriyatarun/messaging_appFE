import ImageSmall from "../ImageIcon/imageSm"
import srcImage from "../../../logo.svg"

const TopBar = ({userName}) => {
    return (
        <div style={{position : 'fixed', width : '100%' , display : 'flex', backgroundColor : '#d3cccc', alignItems : 'center'}}>
            <ImageSmall srcImage={srcImage} />
            <span className="ml-[15px]">{userName[0].name}</span>
        </div>
    )
}

export default TopBar