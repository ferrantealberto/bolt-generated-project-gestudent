import { db } from '../firebase.js'
import { collection, addDoc } from 'firebase/firestore'
import students from '../data/students.json' assert { type: 'json' }

export async function importStudents() {
  try {
    const batch = []
    students.forEach(student => {
      batch.push(addDoc(collection(db, 'students'), {
        ...student,
        createdAt: new Date(),
        role: 'student'
      }))
    })
    await Promise.all(batch)
    console.log('Students imported successfully')
  } catch (error) {
    console.error('Error importing students:', error)
  }
}
