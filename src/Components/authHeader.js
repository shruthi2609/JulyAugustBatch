export default function authHeader(){
    const user=localStorage.getItem("TOKEN")
    if(user){
        console.log(user)
        return {
            Authorization:"Bearer "+user
        }
    }
    
}
