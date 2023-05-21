import { useEffect, useState } from "react";
import axios from "axios";
import UsersCard from "../components/UsersCard";

const Home = () => {
  const [responseData, setResponseData] = useState();
  console.log("responseData:", responseData);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchTrending() {
      try {
        const url = new URL(
          "https://64650529228bd07b353feaa6.mockapi.io/users"
        );
        url.searchParams.append("page", 1);
        url.searchParams.append("limit", 3);

        const response = await axios.get(url, {
          method: "GET",
          headers: { "content-type": "application/json" },

          signal: controller.signal,
        });

        setResponseData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchTrending();

    return () => {
      controller.abort();
    };
  }, []);

  return <div>{responseData && <UsersCard responseData={responseData} />}</div>;
};

export default Home;
