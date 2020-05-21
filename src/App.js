import { createBrowserHistory } from 'history';
import React, { useEffect, useState } from 'react';
import { Router } from 'react-router-dom';
import styled from 'styled-components';
import AppointmentsList from './AppointmentsList';
import Loading from './Loading';

const MainColumn = styled.div`
  max-width: 1150px;
  margin: 0 auto;
`;

const defaultHistory = createBrowserHistory();

export const App = ({ history }) => {

  const [appointments, setAppointments] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const host = process.env.REACT_APP_CONTENT_HOST;
    fetch(`${host}/appointments.json`)
      .then(result => result.json())
      .then(appointments => {
        setAppointments(appointments);
        setLoading(false);
      })
      .catch(() => {
        setAppointments({})
      });
  }, [history]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Router history={history || defaultHistory}>
      <MainColumn>
        <AppointmentsList
          appointments={appointments}
        />
      </MainColumn>
    </Router>
  );
};

export default App;
