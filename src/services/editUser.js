import { userRef } from '../firebase'

export default (userDetails) => {
    userRef.child().set({
        firstName: '',
        lastName: '',
        email: '',
        about: '',
        mobileNumber: '',
        school: '',
        diploma: '',
        degree: '',
        work: '',
        statusLine: ''
    });
}