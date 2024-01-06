import styles from "./homeswip.module.css";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { useRouter } from "next/router";

export default function homeswip(){
  const [username , setUsername] = useState(""); 
  const [dorm , setDrom] = useState("");
  const [img , setImg] = useState("");
  const [faculty , setFaculty] = useState("");
  const [gender , setGender] = useState("");
  const router = useRouter();
  
  const handleSubmitt = async (e) => {
    e.preventDefault();
    if(!username || !dorm || !img || !faculty || !gender  ){
      console.log("Error!");
      alert("empty!!!");
    }
    else{
              try{
                const res = await fetch("http://localhost:3000/api/getAcco", {
                  method: "POST",
                  headers: {
                    "Content-type": "application/json",
                  },
                  body: JSON.stringify({username,dorm,img,faculty,gender }),
                });
                if (res.ok) {
                  router.push("/homeswip/match")
                } else {
                  throw new Error("Failed to create a Data");
                }
              }catch(e){
                console.log(e);
              }  
       }
  }
  return(
    <div className={styles.body}>
    <Navbar/>
    <div className={styles.container}>

        <form onSubmit={handleSubmitt} className={styles.form_box} >
          <div className={styles.titleform}>
            create account
          </div>
        <input className={styles.input_box} placeholder="name" type="text"
        onChange={(e) => setUsername(e.target.value)} value={username} />

        <input className={styles.input_box} placeholder="dorm" type="text"
        onChange={(e) => setDrom(e.target.value)} value={dorm}/> 

        <input className={styles.input_box} placeholder="img" type="text"
        onChange={(e) => setImg(e.target.value)} value={img}/> 
        

        <input className={styles.input_box} placeholder="faculty" type="text"
        onChange={(e) => setFaculty(e.target.value)} value={faculty}/>

        <input className={styles.input_box} placeholder="gender" type="text"
        onChange={(e) => setGender(e.target.value)} value={gender}/>


        <button type="submit" className={styles.send_btn}>Send data</button>
        </form>
    </div>    
  </div>
  )
}