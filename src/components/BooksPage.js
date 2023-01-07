import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import BooksList from './BookList';

const BooksPage = () => {
  const list = useSelector((state) => state.books);
  return (
    <>
      <BooksList booksList={list} />
      <AddBook />
    </>
  );
};

export default BooksPage;
