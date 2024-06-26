
import {  firestore } from '@/firebase/firebase';
import { collection, doc, getDoc, getDocs, query, setDoc, where} from 'firebase/firestore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const useUserResume = () => {

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(true);
    const navigate = useNavigate();

    const addResume = async (input) => {
        setResult(false);
        const Id=uniqueId();
        setLoading(true);
        if (!input.title || !input.email || !input.fullName) {
            setLoading(false);
            return;
        }
        try {
                const userDoc = {
                    title: input.title,
                    resumeId: Id,  
                    userEmail: input.email,
                    fullName: input.fullName,
                    firstName:'',
                    lastName:'',
                    address:'',
                    jobTitle:'',
                    phone:'',
                    email:'',
                    summery:'',

                   
                };



                await setDoc(doc(firestore, 'users',Id), userDoc);
                setLoading(false);
                setResult(true);
                navigate(`/dashboard/resume/${Id}/edit`);
               


            
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

    const uniqueId = () => {
        const userCollection = collection(firestore, 'users');
        const docRef = doc(userCollection); 
        return docRef.id;
    };

    const updatePersonalDetailResume=async (resumeId,input)=>{
        setResult(false);
        setLoading(true);
        const userRef=doc(firestore,'users',resumeId);
        try {
            await setDoc(userRef,input,{merge:true});
            setLoading(false);
            setResult(true);

            
        } catch (error) {
            setLoading(false);
            console.log(error)
        }
        
    }

    const updateSummery=async(resumeId,input)=>{
        setResult(false);
        setLoading(true);
        const userRef=doc(firestore,'users',resumeId);
        try {
            await setDoc(userRef,input,{merge:true});
            setLoading(false);
            setResult(true);
        } catch (error) {
            setLoading(false);
            console.log(error)
        }
    }



    const getCurrentResumeData = async (resumeId) => {
        const userRef = doc(firestore, 'users', resumeId);
        try {
            const userSnap = await getDoc(userRef);
            if (userSnap.exists()) {
                return userSnap.data();
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.log(error);
        }
    };


    return { loading, addResume,getAllResume, result,setResult,updatePersonalDetailResume,getCurrentResumeData, updateSummery };
};



export default useUserResume;
