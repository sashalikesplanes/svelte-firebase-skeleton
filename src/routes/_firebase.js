// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
	getFirestore,
	collection,
	addDoc,
	doc,
	updateDoc,
	query,
	getDocs
} from 'firebase/firestore';

const COLLECTION_NAME = 'gifts';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCrOhLFT9mKaL0BQVVALcqd89yqBe17W6s',
	authDomain: 'fir-demo-1f579.firebaseapp.com',
	projectId: 'fir-demo-1f579',
	storageBucket: 'fir-demo-1f579.appspot.com',
	messagingSenderId: '803667900690',
	appId: '1:803667900690:web:f0c4bc015354674dc25bcb'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function writeToStore(message) {
	try {
		await addDoc(collection(db, 'messages'), {
			messageBody: message
		});
		console.log('document written');
	} catch (e) {
		console.log('Error adding document: ' + e);
	}
}

export async function getAllGifts() {
	const q = query(collection(db, COLLECTION_NAME));

	const querySnapshot = await getDocs(q);
	const gifts = [];
	querySnapshot.forEach((gift) => gifts.push({ ...gift.data(), id: gift.id }));
	return gifts;
}

export async function changeClaimed(gift) {
	const giftDoc = doc(db, COLLECTION_NAME, gift.id);

	await updateDoc(giftDoc, { claimed: !gift.claimed });
}
