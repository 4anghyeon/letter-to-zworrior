import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../components/Layout/Layout';
import Detail from '../pages/Detail';
import {initLetters} from './data';
import {AlertOption, ModalOption} from './common';

const AppRouter = () => {
  const [letters, setLetters] = useState(initLetters);
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [modalOption, setModalOption] = useState(new ModalOption());
  const [alertOption, setAlertOption] = useState(new AlertOption());

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              showModal={showModal}
              setShowModal={setShowModal}
              modalOption={modalOption}
              showAlert={showAlert}
              alertOption={alertOption}
            />
          }
        >
          <Route path="/" element={<Home />}></Route>
          <Route
            path="detail/:id"
            element={
              <Detail
                letters={letters}
                setLetters={setLetters}
                setShowModal={setShowModal}
                setShowAlert={setShowAlert}
                setModalOption={setModalOption}
                setAlertOption={setAlertOption}
              />
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
