import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = `Home`;
  }, []);
  return (
    <div>
      Welcome to my RSS reader. RSS stands for really simple syndication. This
      is a format offered by most publications that allows you to grab stories
      from that publication's website without having to go to the website of
      that publication and search for them. You can therefore make your own
      newspaper. Simply google the name of your favorite publication and rss to
      see a list of feeds that publication may offer.
    </div>
  );
};
export default Home;
