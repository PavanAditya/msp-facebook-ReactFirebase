import { firebaseApp, userRef } from '../firebase';

export default ({ email, password, firstName, lastName, mobileNumber }) => {
    if (!firstName || !lastName || !mobileNumber) {
        return false;
    }

    firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((data) => {
            console.log(data);
            userRef.child(data.user.uid).set({
                firstName,
                lastName,
                email,
                mobileNumber
            });
            console.log('User Added to DB');
            return true;
        }).catch((err) => {
            console.log(err);
            return false;
        });
}