import { isDate, parseJSON } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { NewGoal } from '../../Types';
import { getWeekDay } from '../../Utils/dates';
import ConfirmationWindow from '../ConfirmationWindow';
import DaySelection from '../DaySelection';
import GoalCalendar from '../GoalCalendar';
import TextInput from '../TextInput';
import Subtitle from '../Texts/Subtitle';
import Toggle from '../Toggle';

interface Props {
  toggleWindow: (val: boolean) => void;
  onAccept: (goal: NewGoal) => void;
  onClose?: () => void;
  initParams?: {
    dates: Date[] | string[];
    name: string;
    repeat: boolean;
  };
}

function GoalCreationWindow({
  toggleWindow,
  onAccept,
  initParams,
  onClose,
}: Props): JSX.Element {
  const [goalName, setGoalName] = useState<string>(initParams?.name || '');
  const [isRepeat, setIsRepeat] = useState<boolean>(
    initParams?.repeat || false,
  );

  const [dates, setDates] = useState<Date[] | string[]>(
    initParams?.dates || [],
  );

  useEffect(() => {
    if (initParams) {
      if (initParams.repeat) {
        setDates(
          initParams.dates.map((d) => getWeekDay(d as string).substring(0, 3)),
        );
      } else {
        setDates(initParams.dates.map((d) => parseJSON(d)));
      }
    }
  }, []); // eslint-disable-line

  return (
    <ConfirmationWindow
      onConfirm={(e) => {
        e.preventDefault();
        toggleWindow(false);
        const newGoal: NewGoal = {
          description: goalName,
          repeat: isRepeat,
          dates: dates.map((d) =>
            isDate(d) ? (d as Date).toJSON() : (d as string),
          ),
        };
        onAccept(newGoal);
        setGoalName('');
        setDates([]);
        setIsRepeat(false);
      }}
      onCancel={() => {
        toggleWindow(false);
        setGoalName('');
        setDates([]);
        setIsRepeat(false);
        if (onClose) onClose();
      }}
    >
      <Subtitle txt="Goal name" className="mb-6 font-bold" />
      <TextInput
        onChange={(e) => setGoalName(e.target.value)}
        value={goalName}
        placeholder="Goal name"
      />
      <div className="my-8 flex flex-row">
        <Subtitle txt="On Repeat" className="font-bold mr-6" />
        <Toggle
          name="repeat"
          onToggle={(checked) => {
            setIsRepeat(checked);
            setDates([]);
          }}
          value={isRepeat}
        />
      </div>
      <Subtitle txt="Goal Dates" className="font-bold" />
      {isRepeat ? (
        <DaySelection value={dates as string[]} setValue={setDates} />
      ) : (
        <GoalCalendar value={dates as Date[]} setValue={setDates} />
      )}
    </ConfirmationWindow>
  );
}

GoalCreationWindow.defaultProps = {
  initParams: undefined,
  onClose: undefined,
};

export default GoalCreationWindow;
