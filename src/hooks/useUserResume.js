
import { firestore } from '@/firebase/firebase';
import { collection, doc, getDocs, setDoc} from 'firebase/firestore';
import { useState } from 'react';


const useUserResume = () => {

    const [loading, setLoading] = useState(false);


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
            
        } catch (error) {
           console.log(error)
           setLoading(false);
        }
    };

    const getAllResume = async () => {

        const snapshot = await getDocs(collection(firestore, 'users'));
        const data = snapshot.docs.map(doc => doc.data());
        return data;

    }



    return { loading, addResume,getAllResume };
};

export default useUserResume;
