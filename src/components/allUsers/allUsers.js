import { useQuery } from "@apollo/client";
import { ALL_USERS } from '../../GQL/Query-Strings';
import allUsers from '../allUsers/allUsers.css';

const USERS = () => {
    const { data, error, loading } = useQuery(ALL_USERS);


    if (loading) return <h1>Loading...</h1>
    if (error) return <h1> Error: {error}</h1>

    return (
        <div className="users-container">{data && data.getAllUsers.map(user => (<div key={user.email} className="users-card">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.height} m</p>
            <p>{user.weight} kg</p>

        </div>))}</div>);
}

export default USERS;