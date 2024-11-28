import { Link, useParams } from "react-router-dom";
import { useFetch } from "../useFetch";
import { ApiResponseSolo } from "../types";
import { Loader } from "../components/Loader/Loader";

export const Profile = () => {
  const { id } = useParams();
  const { data, loading } = useFetch<ApiResponseSolo>({
    url: `https://api.slingacademy.com/v1/sample-data/users/${id}`,
  });
  if (loading) return <Loader />;
  if (!data) return;
  return (
    <div className="card">
      <img
        src={data.user.profile_picture}
        alt={`Photo de ${data.user.first_name} ${data.user.last_name}`}
        width={150}
      />
      <h3>{`${data.user.gender === "female" ? "Miss" : "Mister"} ${
        data.user.first_name
      } ${data.user.last_name}`}</h3>
      <p>{data.user.email}</p>

      <div>
        <p>Adresse : {data.user.street}</p>
        <p>Téléphone : {data.user.phone}</p>
        <p>Emploi: {data.user.job}</p>
      </div>

      <Link to="/">Go back Home</Link>
    </div>
  );
};
