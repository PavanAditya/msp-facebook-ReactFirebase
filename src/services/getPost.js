import { postRef } from '../firebase';

export default (uid, content) => {
    postRef.once('value', (snapshot) => {
        console.log(snapshot.val());
        return snapshot.val();
    });
}