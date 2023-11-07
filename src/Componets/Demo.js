import React, { useState, useEffect } from 'react';
import { getDatabase, ref, set, get } from "firebase/database";
import 'firebase/database';
import {app} from '../firebase'

const db = getDatabase(app)


export default function Demo() {

    const [booleanValues, setBooleanValues] = useState([]);
  
    useEffect(() => {
        const db = getDatabase(app)
        const booleanRefs = [
        ref(db, 'test/data'),
        ref(db, 'tast/data1'),
        // Add more paths as needed
      ];
  
      Promise.all(booleanRefs.map(get)).then((snapshots) => {
        const values = snapshots.map(snapshot => snapshot.exists() ? snapshot.val() : null);
        setBooleanValues(values);
      });
    }, []);
  
    const toggleBooleanValue = (index) => {
        const db = getDatabase(app)
      const booleanRefs = [
        ref(db, 'test/data'),
        ref(db, 'test/data1'),
        // Add more paths as needed
      ];
  
      set(booleanRefs[index], !booleanValues[index]).then(() => {
        const updatedValues = [...booleanValues];
        updatedValues[index] = !booleanValues[index];
        setBooleanValues(updatedValues);
      });
    };






  return (
    <div>
    <h2>Toggle Boolean Values in Firebase</h2>
    {booleanValues.length > 0 ? (
      booleanValues.map((value, index) => (
        <div key={index}>
          <p>Value {index + 1}: {value !== null ? value.toString() : 'Loading...'}</p>
          <button onClick={() => toggleBooleanValue(index)}>Toggle Value</button>
        </div>
      ))
    ) : (
      <p>Loading data...</p>
    )}
  </div>
  
  )
}
