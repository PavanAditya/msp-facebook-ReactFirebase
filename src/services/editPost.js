// import { postRef } from '../firebase';

export default (postKey) => {
    try {
        console.log(postKey);
        // postRef.child(postKey).remove()
        //     .then((data) => {
        //         console.log(data);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         return { error: err.message };
        //     });
        return { message: 'Edited' };
    } catch (err) {
        console.log(err);
        return { error: err.message };
    }
}