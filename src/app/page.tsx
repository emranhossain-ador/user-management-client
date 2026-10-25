import { Suspense } from "react";
import UserData from "./components/UserData";


const getUserPromise = async()=>{
    const res = await fetch('http://localhost:3000/users');
    return res.json();
}

export default function UserPages() {


  return (
    <div>
      <Suspense fallback="Loading..">
        <UserData getUserPromise={getUserPromise}/>
      </Suspense>
    </div>
  );
}
