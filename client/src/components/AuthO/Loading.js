import React from "react";

const loading =
  "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";

const Loading = () => (
  <section class="hero container max-w-screen-lg mx-auto pb-10 mt-56">
    <img className="mx-auto object-center" src={loading} alt="Loading" />
    </section>
);

export default Loading;