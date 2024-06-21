import axios from 'axios';

const SERVER_ORIGIN = import.meta.env.VITE_SERVER_ORIGIN;

const submitIntro = async (formData) => {

    try {
        const response = await axios.post(`${SERVER_ORIGIN}/intro`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response;
    } catch (error) {
        console.error('Error submitting quiz:', error);
        return error;
    }
};


export default submitIntro;