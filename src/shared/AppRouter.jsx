import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../components/Layout/Layout';
import Detail from '../pages/Detail';
import {initLetters} from './data';
import {ModalOption} from './common';

const AppRouter = () => {
  const [letters, setLetters] = useState(initLetters);
  const [showModal, setShowModal] = useState(true);
  const [modalOption, setModalOption] = useState(new ModalOption());

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout showModal={showModal} setShowModal={setShowModal} modalOption={modalOption} />}
        >
          <Route path="/" element={<Home />}></Route>
          <Route
            path="detail/:id"
            element={
              <Detail
                letters={letters}
                setLetters={setLetters}
                setShowModal={setShowModal}
                setModalOption={setModalOption}
              />
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
