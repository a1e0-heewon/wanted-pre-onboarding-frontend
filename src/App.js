import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import PrivateRoute from 'utils/PrivateRoute';
import Main from 'pages/Main';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import Todo from 'pages/Todo';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route element={<PrivateRoute authentication={false} />}>
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                </Route>
                <Route element={<PrivateRoute authentication />}>
                    <Route path="/todo" element={<Todo />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
