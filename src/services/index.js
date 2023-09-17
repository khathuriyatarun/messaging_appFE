import axios from "axios";

export const getOTPService = async (userEmail) => {
    try {

        const output = await axios.get(`http://localhost:3000/api/getOtp/${userEmail}`)
        // console.log(response.data); // Log the response data
        return output
    }
    catch (error) {
        console.error('Error:', error);
    };
}


export const verifyOtp = async (data) => {
    try {
        const output = await axios.post(`http://localhost:3000/api/verifyUser`, data)
        return output
    }
    catch (error) {
        console.error('Error:', error);
        return error
    }
}

export const getLastMessages = async (user) => {
    try{
        const output = await axios.get(`http://localhost:3000/api/getLastMessages/${user}`)
        return output
    }catch(error){
        console.error('Error:', error);
        return error
    }
}

export const getMessageById = async(user , id) => {
try{
    const output = await axios.get(`http://localhost:3000/api/getMessages/${user}/${id}`)
    return output
}catch(error){
    console.error(error, "Error getting messages")
}
}