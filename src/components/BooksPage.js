import React from 'react';
import AddBook from './AddBook';
import BooksList from './BookList';

const BooksPage = () => {
  const list = [{
    id: 1,
    title: 'The hunger games',
    author: 'Suzanne Collins',
  },
  ];
  return (
    <>
      <BooksList booksList={list} />
      <AddBook />
    </>
  );
};

export default BooksPage;
