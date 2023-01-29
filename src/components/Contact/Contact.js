import React,{useState} from 'react'

const Contact = () => {
    const[form,setForm] = useState({
        hill_name:"",
        person_name:"",
        family_members:"",
        days_req:""
    }) 
    async function handleSubmit(e){
        e.preventDefault();
  //console.log(form);
        const res = await fetch("http://localhost:5000/contact_us",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(form)
        });
    }
    function handleChange(e){
     setForm({...form,[e.target.name]:e.target.value});
     } 
       
    
    return (
        <>
         <h2>
                <a href="/">Contact Us</a>
            </h2>
            <form onSubmit={handleSubmit}>
                 <h2>Please fill your details</h2>
                <input type="text"  id="name"  name="name" placeholder="Enter your name" onChange={handleChange} /><br /><br />
                <input type="text"  id="email" name="email" placeholder="Enter your email" onChange={handleChange} /><br /><br />
                <input type="text"  id="phone" name="phone" placeholder="Enter contact number" onChange={handleChange} /><br /><br />
                <input type="text"  id="queries" name="queries" placeholder="Any query" onChange={handleChange} /><br /><br />
                <input type="submit" value="submit" id="submit"></input>
              
           </form> 
        </>
    )
}

export default Contact