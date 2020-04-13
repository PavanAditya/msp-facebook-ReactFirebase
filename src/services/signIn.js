import { firebaseApp, userRef } from '../firebase';

export default ({ email, password }) => {
    firebaseApp.auth().signInWithEmailAndPassword(email, password).then((data) => {
        userRef.child(data.user.uid).once('value', (snapshot) => {
            console.log(snapshot.val());
            return snapshot.val();
        });
        return true;
    }).catch((err) => {
        console.log(err.message);
        return err;
    });
}