import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseComfig";
import { getFirestore } from 'firebase/firestore';
import {getAuth } from 'firebase/auth'


const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)
//létrehoztuk a referenciát a szolgáltatáshoz:
export const auth=getAuth(app)