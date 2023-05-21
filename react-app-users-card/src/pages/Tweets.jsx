import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import { GoBackLink } from "../components/tweetsStyled/Tweets.styled";
import { List } from "../components/usersCard/UsersCard.styled";

const Tweets = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/");
  const [responseData, setResponseData] = useState({});
  console.log("responseData:", responseData);
  const { userId } = useParams();

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

  return (
    <div>
      <GoBackLink to={backLinkLocationRef.current}>Go back</GoBackLink>
      <div>
        <h2>{responseData.user}</h2>
        <h3>Tweets:</h3>
        <List>
          <li>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              similique, placeat facilis explicabo, corrupti ad nesciunt
              delectus culpa dicta doloremque ipsam iure iusto aliquid
              consequatur. Quod dicta reprehenderit enim quos!
            </p>
          </li>
          <li>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              similique, placeat facilis explicabo, corrupti ad nesciunt
              delectus culpa dicta doloremque ipsam iure iusto aliquid
              consequatur. Quod dicta reprehenderit enim quos!
            </p>
          </li>
          <li>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              similique, placeat facilis explicabo, corrupti ad nesciunt
              delectus culpa dicta doloremque ipsam iure iusto aliquid
              consequatur. Quod dicta reprehenderit enim quos!
            </p>
          </li>
          <li>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              similique, placeat facilis explicabo, corrupti ad nesciunt
              delectus culpa dicta doloremque ipsam iure iusto aliquid
              consequatur. Quod dicta reprehenderit enim quos!
            </p>
          </li>
          <li>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              similique, placeat facilis explicabo, corrupti ad nesciunt
              delectus culpa dicta doloremque ipsam iure iusto aliquid
              consequatur. Quod dicta reprehenderit enim quos!
            </p>
          </li>
        </List>
      </div>
    </div>
  );
};

export default Tweets;
