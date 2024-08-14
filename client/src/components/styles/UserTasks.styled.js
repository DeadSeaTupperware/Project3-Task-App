import styled from "styled-components";

export const StyledUserTasks = styled.div`
  margin: 0 12px;
  padding: 16px 0px 0;
`;

export const TasksNavigation = styled.header`
  margin: 0 12px 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchBar = styled.input`
  background: #ffffff;
  padding: 4px 16px 4px 12px;
  border-radius: 3px;
  border: solid;
  border-width: 1px;
  border-color: lightgrey;
  border-radius: 2px;
  dangerouslysetinnerhtml: createMarkup();
  width: 25%;
  height: 32px;
  font-size: 14px;
`;

export const TagsDropdown = styled.button`
  background: #ffffff;
  margin: 0 0 0 8px;
  padding: 3.504px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 1px 4px rgb(0 0 0 / 0.35);
`;

export const TagsLogo = styled.img`
  width: 16px;
  height: 16px;
`;

export const TagsSpan = styled.span`
  color: #4e4a57;
  font-size: 14px;
  font-weight: bold;
  padding: 0 8px;
`;

export const TasksContainer = styled.div``;

export const TasksColumn = styled.div`
  padding: 0 12px;
  width: 100%;
`;

export const ColumnTitle = styled.h2`
  color: #34313a;
  font-size: 20px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: bold;
  margin: 4px 0;
`;

export const TasksFilterContainer = styled.div`
  display: flex;
`;

export const TasksFilter = styled.span`
  color: #686274;
  font-size: 12px;
  padding: 8px 8px 6px;
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
`;

export const TasksList = styled.div`
  background: #edecee;
  padding: 8px 8px 30px;
  min-height: 1015.98px;
  border-radius: 3px;
`;

export const QuickAdd = styled.textarea`
  background: #1a181d0f;
  margin: 0px 0px 3px;
  padding: 12px 16px;
  width: 100%;
  height: 46.02px;
  resize: none;
  font-weight: bold;
  overflow: hidden;
  font-size: 14px;
  border: none;
`;

export const Control = styled.div`
  border-radius: ${(props) => (props.left ? "5px 0 0 5px" : "0 5px 5px 0")};
  padding: 15px 6px 30px 6px;
  background: ${(props) => (props.habit ? "#24CC8F" : "#50B5E9")};
  box-shadow: 0 1px 4px rgb(0 0 0 / 0.35);
`;

export const ControlButton = styled.button`
  background: #1a181d40;
  cursor: pointer;
  border-radius: ${(props) => (props.habit ? `50%` : "3px")};
  width: 28px;
  height: 28px;
`;

export const Habit = styled.div`
  display: flex;
  margin: 0 0 3px 0;
`;

export const HabitLogo = styled.img`
  width: 10px;
  height: 10px;
`;

export const HabitInfo = styled.div`
  background: #ffffff;
  width: 100%;
  padding: 5px 0 0 0;
  display: flex;
  flex-direction: column;
`;

export const HabitName = styled.span`
  color: #34313a;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  padding: 4px 0 10px 12px;
`;

export const HabitStreakContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 4px 0 0;
  padding: 0 8px;
`;

export const HabitStreak = styled.span`
  color: #a5a1ac;
  font-size: 12px;
  padding: 0 5px;
`;

export const Daily = styled(Habit)``;

export const DailyLogo = styled(HabitLogo)``;

export const DailyInfo = styled(HabitInfo)``;

export const DailyName = styled(HabitName)``;

export const DailyStreakContainer = styled(HabitStreakContainer)``;

export const DailyStreak = styled(HabitStreak)``;