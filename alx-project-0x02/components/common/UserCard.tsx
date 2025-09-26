import { UserProps } from "@/interfaces";


const UserCard: React.FC<UserProps> = ({name, email, address, onChange}) => {
    return (
        <div>
            <h2 className="text-xl font-semibold">User Details</h2>

             {/* Name */}
            <label className="block mb-2">
                <span className="text-gray-700">Name</span>
                <input 
                type = "text"
                value={name}
                onChange={(e) => onChange('name', e.target.value)}
                />   
            </label>

              {/* Email */}
            <label className="block mb-2">
                <span className="text-gray-700">Email</span>
                <input 
                type = "email"
                value={email}
                onChange={(e) => onChange('email', e.target.value)}
                />   
            </label>

              {/* Address */}
            <label className="block mb-2">
                <span className="text-gray-700">Address</span>
                <input 
                type = "text"
                value={address}
                onChange={(e) => onChange('address', e.target.value)}
                />   
            </label>

        </div>
    )
}
export default UserCard