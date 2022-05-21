// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
	getFirestore,
	collection,
	// addDoc,
	doc,
	updateDoc,
	query,
	getDocs
} from 'firebase/firestore';

const COLLECTION_NAME = 'gifts';

// Your web app's Firebase configuration
const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function get() {
	try {
		const q = query(collection(db, COLLECTION_NAME));

		const querySnapshot = await getDocs(q);

		const gifts = [];
		querySnapshot.forEach((gift) => gifts.push({ ...gift.data(), id: gift.id }));

		return {
			body: gifts
		};
	} catch (e) {
		console.log(e);
		return {
			stats: 500
		};
	}
}

export async function post({ request }) {
	try {
		const gift = await request.json();

		const giftDoc = doc(db, COLLECTION_NAME, gift.id);

		await updateDoc(giftDoc, { claimed: !gift.claimed });

		return {
			status: 201
		};
	} catch (e) {
		console.log(e);
		return {
			status: 500
		};
	}
}
