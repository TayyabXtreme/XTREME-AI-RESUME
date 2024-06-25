
import { firestore } from '@/firebase/firebase';
import { collection, doc, getDocs, query, setDoc, where} from 'firebase/firestore';
import { useState } from 'react';


const useUserResume = () => {

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(true);

    const addResume = async (input) => {
        setLoading(true);
        if (!input.title || !input.uuid || !input.email || !input.fullName) {
            setLoading(false);
            return;
        }
        try {
                const userDoc = {
                    title: input.title,
                    resumeId: input.uuid,  
                    userEmail: input.email,
                    fullName: input.fullName,
                   
                };



                await setDoc(doc(firestore, 'users',input.uuid ), userDoc);
                setLoading(false);
                setResult(true);
               


            
        } catch (error) {
           console.log(error)
           setLoading(false);
           setResult(false);
        }
    };

    const getAllResume = async (email) => {

        const usersRef=collection(firestore,'users');
        const q=query(usersRef,where('userEmail','==',email));
        const querySnapshot=await getDocs(q)
        const data=[]
        querySnapshot.forEach((doc)=>{
            data.push(doc.data())
        })

        return data;

    }



    return { loading, addResume,getAllResume, result};
};

export default useUserResume;
