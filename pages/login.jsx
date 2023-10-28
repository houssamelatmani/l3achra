import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function Login(){
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const router = useRouter()
    const [auth,setAuth]=useState(false)
    

    useEffect(()=>{
        let isauth;
        if (typeof window !== 'undefined'){
             isauth = window.sessionStorage.getItem("isauth");
        }
        if(isauth=="true"){
            setAuth(true)
        }else{
            setAuth(false)
        }
    },[])
    function handleSubmit(e){
        e.preventDefault()
        
        if(!username || !password){
            alert("some fields are empty !!")
        }else{

            fetch(`/api/login`,{
                method:'POST',
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                body:JSON.stringify({username,password})
            }).then(async(res)=> {
                const data = await res.json()
                if(res.status!==200){
                    alert(data.message)
                }else {
                    
                    if (typeof window !== 'undefined') {
                        window.sessionStorage.setItem('isauth',true)
                      }
                    router.push({
                        pathname:"/home",
                        query:data.data
                    })
                }
            }).catch(err=>console.log(err))
        }
        return
    }
    if(!auth){
        return (<>
            <div className="login">
               <form className="form-login" onSubmit={(e)=>handleSubmit(e)}>
                   <input
                   className="username"
                     type="text"
                     placeholder="username" 
                     value={username}
                     onChange={(e)=>setUsername(e.target.value)}/>
                     <input
                     className="password"
                     type="password"
                     placeholder="Password"
                     value={password}
                     onChange={(e)=>setPassword(e.target.value)}
                     />
                   
                     <button
                     className="login-btn"
                       type="submit"
                     >Login</button>
               </form>
               <div className="register">
                <p>register now !</p>
               <a  href="/register">Register</a>
               </div>
           </div>
       </>);
    }else{
        return (
            <>
            you are already login , comeback to <a href="/home">home</a> page
            </>
        );
    }
    
}