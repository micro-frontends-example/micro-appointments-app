import React from 'react';
import styled from 'styled-components';
import AppointmentCard from './AppointmentCard';

const AppointmentsList = ({ appointments }) => {

  const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 30px;
  margin-right: 550px;
`;

  const AppointmentTable = styled.table`
`;

  const AppointmentRow = styled.tr`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

  const AppointmentContent = styled.td`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

  return (
    <CardContainer>
      <AppointmentTable>
        {appointments.map(appointment => (
          <AppointmentRow>
            <AppointmentContent>
              <AppointmentCard key={appointment.id} appointment={appointment} />
            </AppointmentContent>
          </AppointmentRow>
        ))}
      </AppointmentTable>
    </CardContainer>
  );
};

export default AppointmentsList;
