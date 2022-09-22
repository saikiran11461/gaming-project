let form = document.getElementById('inform')
let email = document.getElementById('email')

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let formdata ={
        email:email.value
    }

    fetch('http://localhost:8080/userDetails',{
    method:'POST',
    body:JSON.stringify(formdata),
    headers:{"Content-Type":"Application/json"},
  })
  .then(res=>{
    console.log(res)
  })
  .catch(err=>{
    console.log(err)
  })
})
