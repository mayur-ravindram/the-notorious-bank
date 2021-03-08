import { useState } from "react";
import { Redirect } from "react-router-dom";

const TransferComponent = () => {

    const [toHome, setToHome] = useState(false);

    if(toHome === true) {
        return <Redirect to="/dashboard" />
    }

    return ( <>
        <h1>This is Transfer Money Component</h1>
        <button onClick={()=>{setToHome(true)}}>To Home</button>
    </> );
}
 
export default TransferComponent;