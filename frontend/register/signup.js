const regbtn=document.getElementById("registerbtn")
regbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    fetch("https://amethyst-hippo-cap.cyclic.app/users/register",{
        method:"POST",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify({
           name:document.getElementById("u_name").value,
           email:document.getElementById("u_email").value,
           password:document.getElementById("u_password").value,
           age:document.getElementById("u_age").value,
           gender:document.getElementById("u_gender").value,
           city:document.getElementById("u_city").value,
        }),
    })
    .then((res)=>{
        if(!res.ok){
            window.alert("Please ender Right credentials")
        }
        return res.json();
    })
    .then((data)=>{
        console.log(data);
        window.location.reload();
    }).catch((err)=>console.log(err))
})

const logbtn=document.getElementById("loginbtn")
logbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    fetch("https://amethyst-hippo-cap.cyclic.app/users/login",{
        method:"POST",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify({
          
           email:document.getElementById("u_email").value,
           password:document.getElementById("u_password").value
          
        }),
    })
    .then((res)=>{
        if(!res.ok){
            window.alert("Please ender Right credentials")
        }
        return res.json();
    })
    .then((data)=>{
        console.log(data);
        
        localStorage.setItem("token",data.access_token);
        localStorage.setItem("name",data.name);
        location.href='../postDashboard/post.html'
    }).catch((err)=>console.log(err))
})