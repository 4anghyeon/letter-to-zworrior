import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../components/Layout/Layout';
import Detail from '../pages/Detail';
import {initLetters} from './data';
import {AlertOption, ModalOption} from './common';

const AppRouter = () => {
  const data = localStorage.getItem('letters');
  const [letters, setLetters] = useState(JSON.parse(data) || initLetters);
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [modalOption, setModalOption] = useState({});
  const [alertOption, setAlertOption] = useState(new AlertOption());

  localStorage.setItem('letters', JSON.stringify(letters));
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
              setModalOption={setModalOption}
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
