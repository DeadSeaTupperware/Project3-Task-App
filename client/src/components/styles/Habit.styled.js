import styled from "styled-components";

export const StyledHabit = styled.div`
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
  padding: 5px 5px 0 0;
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

export const Control = styled.div`
  border-radius: ${(props) => (props.left ? "5px 0 0 5px" : "0 5px 5px 0")};
  background: #24cc8f;
  padding: 15px 6px 30px 6px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.35);
`;

export const ControlButton = styled.button`
  border-radius: 50%;
  background: #1a181d40;
  cursor: pointer;
  width: 28px;
  height: 28px;
`;
