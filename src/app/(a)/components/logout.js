'use client'

export default function LogoutComponent(){
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
            window.location.reload();
        }catch(err){
            console.log(err);
        }
    }


    return(

            <div onClick={handleLogout} className="block px-4 py-2.5 text-red-700 hover:bg-blue-50 hover:text-blue-600 flex items-center transition-colors duration-200">
                <i className="fas fa-sign-out-alt text-gray-400 mr-3 w-5 text-center"></i>
                Sign out
            </div>

    )
}