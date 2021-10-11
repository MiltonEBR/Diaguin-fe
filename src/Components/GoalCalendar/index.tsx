import React, { useState } from 'react';
import { Calendar } from 'react-multi-date-picker';
import { todayDate } from '../../Utils/dates';
import './calendar.css';

function GoalCalendar(): JSX.Element {
  const [value, setValue] = useState<any>(new Date());

  return (
    <div>
      <Calendar
        value={value}
        onChange={setValue}
        multiple
        shadow={false}
        mapDays={({ date }) => {
          return { className: 'highlight highlight-purple' };
        }}
      />
    </div>
  );
}

export default GoalCalendar;
