import React from "react";
import FeatureItem from "../../../components/FeatureItem";
import Loading from "../../../components/Loading";

function Product(props) {
  const {
    books,
    selectedLanguages,
    selectedGenres,
    selectedAuthors,
    selectedPublishers,
    productsToShow,
    sortBy,
    type,
    isLoadingBooks,
    slug,
    slugName,
  } = props;
  let filteredBooks = books.filter((book) => {
    const bookLanguages = book.languageName ? [book.languageName] : [];
    const bookGenres = book.bookGenresName ? [book.bookGenresName] : [];
    const bookAuthors = book.authorName ? [book.authorName] : [];
    const bookPublishers = book.publisherName ? [book.publisherName] : [];

    const languagesMatch =
      selectedLanguages.length === 0 ||
      selectedLanguages.some((language) => bookLanguages.includes(language));

    const genresMatch =
      selectedGenres.length === 0 ||
      selectedGenres.some((genre) => bookGenres.includes(genre));

    const authorsMatch =
      selectedAuthors.length === 0 ||
      selectedAuthors.some((author) => bookAuthors.includes(author));

    const publishersMatch =
      selectedPublishers.length === 0 ||
      selectedPublishers.some((publisher) =>
        bookPublishers.includes(publisher)
      );

    return languagesMatch && genresMatch && authorsMatch && publishersMatch;
  });
  if (type === "sale") {
    filteredBooks = filteredBooks.filter(
      (filteredItem) =>
        filteredItem.beginSale &&
        filteredItem.priceSale &&
        filteredItem.endSale &&
        new Date(filteredItem.endSale) > new Date()
    );
  }
  if (type === "language") {
    filteredBooks = filteredBooks.filter((book) => {
      return book.languageName === slugName;
    });
  }
  if (type === "genres") {
    filteredBooks = filteredBooks.filter((book) => {
      return book.bookGenresName === slugName;
    });
  }
  if (type === "author") {
    filteredBooks = filteredBooks.filter((book) => {
      return book.authorName === slugName;
    });
  }
  if (type === "publisher") {
    filteredBooks = filteredBooks.filter((book) => {
      return book.publisherName === slugName;
    });
  }
  if (type === "search") {
    filteredBooks = filteredBooks.filter((book) => {
      return (
        book.name.toLowerCase().includes(slugName.toLowerCase()) ||
        book.authorName.toLowerCase().includes(slugName.toLowerCase()) ||
        book.publisherName.toLowerCase().includes(slugName.toLowerCase()) ||
        book.bookGenresName.toLowerCase().includes(slugName.toLowerCase())
      );
    });
  }
  let sortedBooks = [...filteredBooks];
  switch (sortBy) {
    case "name_ASC":
      sortedBooks.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name_DESC":
      sortedBooks.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "price_ASC":
      sortedBooks.sort((a, b) => a.price - b.price);
      break;
    case "price_DESC":
      sortedBooks.sort((a, b) => b.price - a.price);
      break;
    default:
      break;
  }
  console.log("sortedBooks:", filteredBooks);
  return (
    <>
      {isLoadingBooks === true ? (
        <Loading />
      ) : filteredBooks.length > 0 ? (
        <div className="products main flexwrap">
          {sortedBooks.slice(0, productsToShow).map((filteredItem) => (
            <FeatureItem key={filteredItem.id} {...filteredItem} />
          ))}
        </div>
      ) : (
        <div>Không có sản phẩm</div>
      )}
    </>
  );
}

export default Product;
