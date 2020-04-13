import { postRef } from '../firebase';

export default async (uid, content) => {

    const snapshotToArray = (snapshot) => {
        var returnArr = [];
        snapshot.forEach(function (childSnapshot) {
            var item = childSnapshot.val();
            item.key = childSnapshot.key;
            returnArr.push(item);
        });
        return returnArr;
    };

    postRef.on('value', async (snapshot) => {
        snapshotToArray(snapshot);
        console.log(snapshotToArray(snapshot));
    });
}