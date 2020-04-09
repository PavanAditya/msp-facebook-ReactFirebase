import { firebaseApp } from '../firebase';

export default (email, password) => {
    firebaseApp.auth().signInWithEmailAndPassword(email, password).then((user) => {
        console.log(user);
        console.log('User fetched from DB');
        return true;
    }).catch((err) => {
        console.log(err.message);
        console.log(err);
        return err;
    });
}