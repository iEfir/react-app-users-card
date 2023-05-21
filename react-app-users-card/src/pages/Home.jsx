import { useEffect, useState } from "react";
import axios from "axios";
import { LoadMoreBtn } from "../components/buttonLoadMore/Button";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import {
  Avatar,
  Background,
  BtnContainer,
  Card,
  Container,
  Followers,
  FollowersBtn,
  Line,
  List,
  Logo,
  Round,
  StyledTweets,
} from "../components/usersCard/UsersCard.styled";
import { Link, useLocation } from "react-router-dom";
import { updateUser } from "../components/apiService/apiService";
import logo from "../components/images/logo.png";
import background from "../components/images/picture.png";

const Home = () => {
  const location = useLocation();
  const [responseData, setResponseData] = useState();
  console.log("responseData:", responseData);

  const [btnVision, setBtnVision] = useState(false);
  const [pageNum, setPageNum] = useState(2);
  const [isLoadingSpinner, setIsLoadingSpinner] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUserCards() {
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

        if (response) setBtnVision(true);

        setResponseData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchUserCards();

    return () => {
      controller.abort();
    };
  }, []);

  const onClickPageUp = async () => {
    try {
      setIsLoadingSpinner(true);
      setPageNum(pageNum + 1);

      const url = new URL("https://64650529228bd07b353feaa6.mockapi.io/users");
      url.searchParams.append("page", pageNum);
      url.searchParams.append("limit", 3);

      const response = await axios.get(url, {
        method: "GET",
        headers: { "content-type": "application/json" },
      });

      const nextUsers = response.data;
      setResponseData([...responseData, ...nextUsers]);

      if (pageNum === 4) {
        setBtnVision(false);
        Notify.info(
          "That's all",
          "We're sorry, but you've reached the end of search results.",
          "Okay"
        );
        return;
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoadingSpinner(false);
    }
  };

  const onClick = async (id, following, followers) => {
    try {
      if (following) {
        await updateUser(id, false, followers - 1);
        setResponseData((prevUsers) =>
          prevUsers.map((user) => {
            if (user.id === id) {
              return {
                ...user,
                following: false,
                followers: user.followers - 1,
              };
            }
            return user;
          })
        );
      } else {
        await updateUser(id, true, followers + 1);
        setResponseData((prevUsers) =>
          prevUsers.map((user) => {
            if (user.id === id) {
              return {
                ...user,
                following: true,
                followers: user.followers + 1,
              };
            }
            return user;
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      {responseData && (
        <List>
          {responseData.map(({ id, avatar, tweets, followers, following }) => {
            return (
              <Card key={id}>
                <Logo src={logo} alt="Logo" />
                <Background src={background} alt="background photo" />
                <Line />
                <Round>
                  <Avatar src={avatar} />
                </Round>
                <StyledTweets>{tweets} tweets</StyledTweets>
                <Followers>{followers} followers</Followers>
                <Link to={`/tweets/${id}`} state={{ from: location }}>
                  <FollowersBtn
                    style={{
                      backgroundColor: following ? "#5CD3A8" : "#ebd8ff",
                    }}
                    onClick={() => onClick(id, following, followers)}
                  >
                    {following ? "Following" : "Follow"}
                  </FollowersBtn>
                </Link>
              </Card>
            );
          })}
        </List>
      )}
      {responseData && btnVision && (
        <BtnContainer>
          <LoadMoreBtn
            onLoadMore={onClickPageUp}
            isLoadingSpin={isLoadingSpinner}
          />
        </BtnContainer>
      )}
    </Container>
  );
};

export default Home;
