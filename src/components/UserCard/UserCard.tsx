import { Link } from "react-router-dom";
import { User } from "../../App";

type UserCardProps = {
  user: User;
};

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="card">
      <img
        src={user.profile_picture}
        alt={`Photo de ${user.first_name} ${user.last_name}`}
        width={150}
      />
      <h3>{`${user.gender === "female" ? "Miss" : "Mister"} ${
        user.first_name
      } ${user.last_name}`}</h3>
      <p>{user.email}</p>

      <Link to={`profile/${user.id}`}>View more</Link>
    </div>
  );
};

export default UserCard;
