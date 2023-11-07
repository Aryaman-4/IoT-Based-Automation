import React,{ useEffect,useState } from 'react'
import Dashboard from './Deposits'
import LightOnoff from './Rooms/LightOnoff'
import Demo from './Demo'
import Signin from './Signin'
import { getDatabase, ref, onDisconnect, set } from 'firebase/database';
import {app} from '../firebase'
import { Login } from '@mui/icons-material'

export default function Home() {

  const [connectionStatus, setConnectionStatus] = useState(true); // Set an initial value (true for connected)

  useEffect(() => {
    const db = getDatabase(app);
    const connectionStatusRef = ref(db, 'connectionStatus');

    // Set the connection status to true when the app is connected
    set(connectionStatusRef, true);

    // Update the connection status to false when the app disconnects
    const onDisconnectRef = onDisconnect(connectionStatusRef);
    onDisconnectRef.set(false);

    // Cleanup the onDisconnect handler when the component unmounts
    return () => {
      onDisconnectRef.cancel();
    };
  }, []);



  return (
    <>
  <Dashboard/>  

 
 {/*  <div>
      <h1 style={{ color: connectionStatus ? 'green' : 'red' }}>
        Connection Status: {connectionStatus ? 'Connected' : 'Disconnected'}
      </h1>
    </div>
 */}

    </>

    
  )
}
