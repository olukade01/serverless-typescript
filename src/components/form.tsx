import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState('')
  const [favoriteColor, setFavoriteColor] = useState('')
  const [response, setResponse] = useState()

   async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()

    if(name === "" && favoriteColor === ""){
      return
    }
    const res = await fetch('/.netlify/functions/submit', {
      method: 'POST',
      body: JSON.stringify({ name, favoriteColor })
    }).then(res => res.json())
    console.log(res);

    setResponse(res)
    setName("")
    setFavoriteColor('')
  }

  return (
    <div>
      <pre>{JSON.stringify(response, null, 2)}</pre>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name}/>
        <label htmlFor="favoriteColor">Favorite Color</label>
        <input type="text" name="favoriteColor" onChange={(e) => setFavoriteColor(e.target.value)} value={favoriteColor}/>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
