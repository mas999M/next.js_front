'use client'

export default function Logout()
{
    const handleLogout = async (e) => {
        e.preventDefault();
        try{
            await fetch('http://localhost:8000/sanctum/csrf-cookie',{
                method: "get",
                credentials: "include",
            });

             await fetch("http://localhost:8000/api/logout" , {
                method: "GET",
                credentials: 'include',
            });
        }catch(err){
            console.log(err);
        }
    }

    return(
        <>
            <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
        </>
    )
}