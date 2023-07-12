import { memo } from 'react';
import camera from '../../assets/icons/photo-camera.svg';

const Uploader = ({preview, fileObject}) => {
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onload = () => {
            preview(reader.result)
        };
    
        reader.readAsDataURL(file);
    };

    return (
        <>
            <label for="profile-uploader" className="flex justify-center border-2 border-[#ffffff] shadow w-[45px] h-[45px] bg-[#e1e1e1] rounded-full cursor-pointer absolute bottom-5 right-[-5px]">
                <img src={camera} alt="camera" width={20} />
            </label>
            <input id="profile-uploader" type="file" accept="image/png, image/gif, image/jpeg" className="hidden" onChange={handleImageChange} />
        </>
    )
}

export default memo(Uploader);