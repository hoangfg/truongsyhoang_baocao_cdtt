import React, { Component } from "react";
import FeatureItem from "../../../components/FeatureItem";

class Product extends Component {
  render() {
    const {
      books,
      selectedLanguages,
      selectedGenres,
      selectedAuthors,
      selectedPublishers,
      productsToShow,
      sortBy,
    } = this.props;

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

    switch (sortBy) {
      case "name_ASC":
        filteredBooks.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name_DESC":
        filteredBooks.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price_ASC":
        filteredBooks.sort((a, b) => a.price - b.price);
        break;
      case "price_DESC":
        filteredBooks.sort((a, b) => b.price - a.price);
        break;
      // Thêm các trường hợp sắp xếp khác nếu cần
      default:
        // Mặc định, không sắp xếp
        break;
    }

    return (
      <div className="products main flexwrap">
        {filteredBooks.slice(0, productsToShow).map((filteredItem) => (
          <FeatureItem key={filteredItem.id} {...filteredItem} />
        ))}
      </div>
    );
  }
}

export default Product;
