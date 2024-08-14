import styled from "styled-components";
import {
  StyledHabit,
  HabitLogo,
  HabitInfo,
  HabitName,
  HabitStreakContainer,
  HabitStreak,
} from "./Habit.styled";

export const StyledDaily = styled(StyledHabit)``;

export const DailyLogo = styled(HabitLogo)``;

export const DailyInfo = styled(HabitInfo)`
  flex-direction: column;
  justify-content: space-between;
`;

export const DailyHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const DailyName = styled(HabitName)`
  opacity: ${(props) => (props.complete ? "0.5" : "1")};
`;

export const DailyStreakContainer = styled(HabitStreakContainer)`
  padding-bottom: 7px;
`;

export const DailyStreak = styled(HabitStreak)``;

export const Control = styled.div`
  border-radius: 5px 0 0 5px;
  background: ${(props) => (props.complete ? "#878190" : "#50B5E9")};
  padding: 15px 6px 30px 6px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.35);
`;

export const ControlImage = styled.img`
  display: ${(props) => (props.complete ? "inline" : "none")};
  width: 16px;
  height: 16px;
`;

export const ControlButton = styled.button`
  border-radius: 3px;
  background: #ffffff80;
  cursor: pointer;
  width: 28px;
  height: 28px;

  &:hover {
    background: #ffffffb0;
  }

  &:hover ${ControlImage} {
    display: inline;
  }
`;

export const DeleteImage = styled.img`
  width: 16px;
  height: 16px;
`;

export const DeleteButton = styled.button`
  background: #ffffff;
  padding: 8px 8px;
  border-radius: 50%;

  &:hover {
    background: #eeeeee;
  }
`;
