import { Loader } from "../components/Loader/Loader";
import UserCard from "../components/UserCard/UserCard";
import { ApiResponseAll } from "../types";
import { useFetch } from "../useFetch";
import "./home.css";

export const Home = () => {
  const { data, loading } = useFetch<ApiResponseAll>({
    url: "https://api.slingacademy.com/v1/sample-data/users?limit=30",
  });
  if (loading) return <Loader />;
  if (!data) return;

  return (
    <div className="App">
      <h1>Les heureux gagnants</h1>
      <div className="user-grid">
        {data.users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};
