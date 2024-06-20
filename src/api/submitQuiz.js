import axios from 'axios';

const submitQuiz = async (
    questions,
    answers

) => {

    try {
        const response = await axios.post('http://localhost:3000/quiz/batch', {
            questions,
            answers,
        });
        console.log('Submission successful:', response.data);
        return response;
    } catch (error) {
        console.error('Error submitting quiz:', error);
        return error;
    }
};


export default submitQuiz;