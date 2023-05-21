import { Link, useLocation } from "react-router-dom";

const UsersCard = (responseData) => {
  const location = useLocation();

  return (
    <div>
      {responseData.responseData && (
        <ul>
          {responseData.responseData.map(({ id, user }) => {
            return (
              <li key={id}>
                <div>
                  <div>
                    <span></span>
                  </div>
                  <Link to={`/tweets/${id}`} state={{ from: location }}>
                    {user}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default UsersCard;
