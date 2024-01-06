"use client";
import Navbar from "@/components/Navbar";
import styles from "./Search.module.css";
import Space from "@/components/SpaceTab";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useRouter } from "next/navigation";




const getAcco = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/getAcco", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};
export default function Search() {
  const [dorm_login,getDorm] = useState("");
  const router = useRouter();

  const loginSubmit = async (e) => {
    e.preventDefault();
    const dorm_list = [];
    const {Acco} = await getAcco();
    let dorm_value = 0;let pass_value = 0;
      dorm.map((u) => (
        dorm_list.push(u.username)
      ));
    for (let i = 0 ; i<dorm_list.length;i++){
      if(dorm_list[i] == user_login){
        dorm_value = 1;
      }
    }
    // check value username&password  1 or 0
    
    if (user_value == 1 && pass_value == 1){
      alert("Login Success!!");
      try{
          router.push("/RoomType");
        var getID = {UserID:dorm_login,State:"login"}
        localStorage.setItem("Dormlist",JSON.stringify(getID));
      }catch(e){
        console.log(error);
      } 
    }
    else if(!dorm_login ) {
      alert("Dorm Required.");
    }
    else{
      alert("Dorm is Wrong.");
    }
  }

  return (
    <div className={styles.body}>
      <Navbar />
      <div className={styles.container}>
        <form onSubmit={loginSubmit} className={styles.signin_form}>
          <div className={styles.titlebox}>match</div>

          <input
            className={styles.input_box}  
            type="text"
            placeholder="dorm"
            onChange={(e) => getDorm(e.target.value)}
            value={dorm_login}
          />
          <button className={styles.login_btn} type="submit">match</button>
        </form>
      </div>
    </div>
  );
}
