import { useNavigate, useRouteError } from "react-router-dom";
export const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  console.log(error);
  const handleNavigate=()=>{
    navigate(-1);
  }
  return (
    <>
      <h1>Error: {error.status}</h1>
      <button onClick={handleNavigate}>Go Back</button>
    </>
  );
};
