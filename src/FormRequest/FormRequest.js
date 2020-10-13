import React, {useState} from 'react'

const FormRequest = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const submitRequest = async (e) => {
      e.preventDefault();
      console.log({ email, message });
      const response = await fetch("/access", { 
        method: 'POST', 
        headers: { 
            'Content-type': 'application/json'
        }, 
        body: JSON.stringify({email, message}) 
    }); 
      const resData = await response.json(); 
      if (resData.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
    }else if(resData.status === 'fail'){
        alert("Message failed to send.")
    }
    };
}

export default FormRequest;