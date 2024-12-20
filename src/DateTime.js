import React from 'react';
import './DateTime.css';
import CurrentDate from './CurrentDate';
import CurrentTime from './CurrentTime';

function DateTime() {
  const now = new Date();

  return (
    <div className="datetime">
      <CurrentDate date={now} />
      <CurrentTime date={now} />
    </div>
  );
}

export default DateTime;
