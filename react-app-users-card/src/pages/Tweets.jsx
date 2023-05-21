import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link, useLocation, useParams } from "react-router-dom";

const Tweets = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/");
  const [responseData, setResponseData] = useState({});
  const { userId } = useParams();
  console.log("userId:", userId);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchTrending() {
      try {
        const url = new URL(
          "https://64650529228bd07b353feaa6.mockapi.io/users"
        );

        const response = await axios.get(`${url}/${userId}`, {
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
  }, [userId]);

  return <div>{responseData.user}</div>;
};

export default Tweets;
