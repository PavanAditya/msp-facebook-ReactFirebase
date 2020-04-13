import { postRef } from '../firebase';

export default (uid, content) => {
    try {
        postRef.push({
            createdBy: uid,
            content,
            createdDateTime: new Date().getTime()
        });
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}