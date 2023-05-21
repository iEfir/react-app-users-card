import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "./SharedLayout.styled";
import { Suspense } from "react";
import { Loader } from "../reactLoader/Loader";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
