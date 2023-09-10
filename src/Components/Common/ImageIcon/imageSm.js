
const ImageSmall = ({srcImage}) => {
    return (
        <div  className="h-[50px] w-[50px]  flex bg-[white] rounded-[50%]">
            <img src={srcImage} className="rounded-[50%]"/>
        </div>
    )
}

export default ImageSmall