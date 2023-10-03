// import { collection, getDocs } from 'firebase/firestore'
// import React from 'react'
// import { db } from './firebase'

// function FetchingData() {

//     const handleFetching = async()=>{
//         let data = collection(db,"user")
//         let d = await getDocs(data)
//         console.log(d.docs)
//         d.docs.map((el)=>{
//             console.log(el.data())
//             console.log(el.id)
//         })
//     }
//   return (
//     <div>
//         <button onClick={handleFetching}>FetchData</button>
//     </div>
//   )
// }

// export default FetchingData
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../firebase'

function FetchingData() {
    const [newUserData, setNewUserData] = useState({ name: '', email: '' });

    const handleFetching = async () => {
        try {
            const data = collection(db, 'users');
            const querySnapshot = await getDocs(data);
            querySnapshot.forEach((doc) => {
                console.log(doc.id, ' => ', doc.data());
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleAddData = async () => {
        try {
            const docRef = await addDoc(collection(db, 'users'), newUserData);
            console.log('Document added with ID: ', docRef.id);
        } catch (error) {
            console.error('Error adding document:', error);
        }
    };

    const handleUpdateData = async (userId) => {
        try {
            const userDocRef = doc(db, 'users', userId);
            await updateDoc(userDocRef, { ...newUserData });
            console.log('Document successfully updated!');
        } catch (error) {
            console.error('Error updating document:', error);
        }
    };

    const handleDeleteData = async (userId) => {
        try {
            const userDocRef = doc(db, 'users', userId);
            await deleteDoc(userDocRef);
            console.log('Document successfully deleted!');
        } catch (error) {
            console.error('Error deleting document:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewUserData({ ...newUserData, [name]: value });
    };

    return (
        <div>
            <button onClick={handleFetching}>Fetch Data</button>
            <input
                type="text"
                placeholder="Name"
                name="name"
                value={newUserData.name}
                onChange={handleInputChange}
            />
            <input
                type="text"
                placeholder="Email"
                name="email"
                value={newUserData.email}
                onChange={handleInputChange}
            />
            <button onClick={handleAddData}>Add Data</button>
            <button onClick={() => handleUpdateData("Wf8EsKD2BSGi3tVj2G28")}>Update Data</button>
            <button onClick={() => handleDeleteData('Wf8EsKD2BSGi3tVj2G28')}>Delete Data</button>
        </div>
    );
}

export default FetchingData;
