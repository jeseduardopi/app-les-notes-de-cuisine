import React, { useEffect, useState } from 'react'



interface InscriptionFormInterface {
  setUser: string,
  setName: string,
  setLastName: string,
  setPassword: string, 
  setDataOk: boolean
}

export function InscriptionForm({setName, setLastName, setUser, setPassword, setDataOk}: InscriptionFormInterface) {
 

  const [state, setState] = useState<object>({
    username: '',
    name: '',
    lastname: '',
    password: ''
  });

  const handleChange = (e:any) => {
    const {value} = e.target
    // console.log(value)
    setState({...state,
    [e.target.name]: value}
    )};

  const handleSubmit = (e) => {   
    e.preventDefault();
    
    setUser(state.username);
    setName(state.name);
    setLastName(state.lastname);
    setPassword(state.password);
    setDataOk(true)
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Prenom :</label>
        <input type="text" className="form-control" name='name' id="name" defaultValue={state.name} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="lastname" className="form-label">Nom :</label>
        <input type="text" className="form-control" name='lastname' id="lastname" defaultValue={state.lastname} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="user" className="form-label">Username :</label>
        <input type="text" className="form-control" name='username' id="user" defaultValue={state.username} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="pwd" className="form-label">Password:</label>
        <input type="password" className="form-control" name='password' id="pwd" defaultValue={state.password} onChange={handleChange} />
      </div>
  
      <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  )
}
