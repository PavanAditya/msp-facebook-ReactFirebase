import { postRef } from '../firebase';

export default (postKey) => {
    try {
        console.log(postKey);
        postRef.child(postKey).remove()
            .then((data) => { })
            .catch((err) => {
                console.log(err);
                return { error: err.message };
            });
        return { message: 'Removed' };
    } catch (err) {
        console.log(err);
        return { error: err.message };
    }
}