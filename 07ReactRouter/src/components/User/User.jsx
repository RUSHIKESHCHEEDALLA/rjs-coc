import { useParams } from "react-router-dom";
function User(){
    const {userid} = useParams()
    return (
        <div className="text-center">USER:{userid} </div>
    
    )
}
export default User;