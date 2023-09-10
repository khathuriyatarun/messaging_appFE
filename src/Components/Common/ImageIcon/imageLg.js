
const ImageLarge = ({srcImage}) => {

    return (
        <div className="h-[100px] w-[100px] rounded-[50%] flex">
            <img src={srcImage} />
        </div>
    )
}

export default ImageLarge