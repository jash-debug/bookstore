import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBook from './AddBook';
import BooksList from './BookList';
import { fetchBooks } from '../redux/books/books';

const BooksPage = () => {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      <BooksList booksList={list} />
      <AddBook />
    </>
  );
};

export default BooksPage;
