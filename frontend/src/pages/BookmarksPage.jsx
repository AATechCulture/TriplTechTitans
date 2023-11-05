import { Helmet } from "react-helmet-async";

import BookmarksView from "../views/BookmarksView";

const BookmarksPage = () => {
  return (
    <>
      <Helmet>
        <title> Bookmarks </title>
      </Helmet>

      <BookmarksView />
    </>
  );
};

export default BookmarksPage;
