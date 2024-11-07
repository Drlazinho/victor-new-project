import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { collection, addDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

interface FormData {
  nome: string;
  empresa: string;
  cnpj: string;
  objetivosEServicos: string;
}

// const firebaseConfig = {
//   apiKey: "AIzaSyDPN0NLrZXKSXTakXjpzzDa1-Jio_gcBiI",
//   authDomain: "microweb-8f64b.firebaseapp.com",
//   projectId: "microweb-8f64b",
//   storageBucket: "microweb-8f64b.appspot.com",
//   messagingSenderId: "917453571811",
//   appId: "1:917453571811:web:5f8fae52065d04858da7d6",
//   measurementId: "G-EV9V8QFDD9"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDeWHV-3RHp0rupV5quE1rldkondjiqYt8",
  authDomain: "microweb-8b486.firebaseapp.com",
  projectId: "microweb-8b486",
  storageBucket: "microweb-8b486.firebasestorage.app",
  messagingSenderId: "478042475275",
  appId: "1:478042475275:web:fc580c28439a5eaef2700e",
  measurementId: "G-WMELS7FLCT"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  formData: FormData = {
    nome: '',
    empresa: '',
    cnpj: '',
    objetivosEServicos: '',
  };

  formGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    empresa: new FormControl('', Validators.required),
    cnpj: new FormControl('', [
      Validators.required,
      Validators.pattern('^d{2}.d{3}.d{3}/d{4}-d{2}$'),
    ]),
    objetivosEServicos: new FormControl('', Validators.required),
  });

  async onSubmit() {
    const formData = this.formGroup.value as FormData;

    try {
      const docRef = await addDoc(collection(db, 'formSubmissions'), formData);
      console.log('Document written with ID: ', docRef.id); // Acesse o ID do documento adicionado
      alert('Dados enviados com sucesso!'); // Mensagem de sucesso para o usuário
      this.formGroup.reset();
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }
}
