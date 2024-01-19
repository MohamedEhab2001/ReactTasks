import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import Counter from './Week1/Counter';
import Timer from './Week1/Timer';
import Form1 from './Week2/Form1';
import Form2 from './Week2/Form2';
import Task3 from './Week2/Task3';
import Task4 from './Week2/Task4';
import Dashboard from './Dashboard';
import store from './Redux/Store';


const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/week1/task1" element={<Counter />} />
            <Route path="/week1/task2" element={<Timer />} />
            <Route path="/week2/task1" element={<Form1 />} />
            <Route path="/week2/task2" element={<Form2 />} />
            <Route path="/week2/task3" element={<Task3 />} />
            <Route path="/week2/task4" element={<Task4 />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
