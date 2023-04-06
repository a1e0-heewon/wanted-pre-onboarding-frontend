import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import PrivateRoute from 'utils/PrivateRoute';
import Main from 'pages/Main';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import Todo from 'pages/Todo';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route element={<PrivateRoute authentication={false} />}>
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Route>
                <Route element={<PrivateRoute authentication />}>
                    <Route path="/todo" element={<Todo />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
