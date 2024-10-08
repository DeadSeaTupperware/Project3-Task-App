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
  color: #08013a;
  font-size: 20px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: bold;
  margin: 4px 0;
`;

export const TasksFilterContainer = styled.div`
  display: flex;
`;

export const TasksFilter = styled.span`
  color: #08013a;
  font-size: 12px;
  padding: 8px 8px 6px;
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  border-bottom: none;

  &:hover {
    color: #4f2a93;
    border-bottom: 2px solid #4f2a93;
  }
`;

export const TasksList = styled.div`
  background: #edecee;
  padding: 8px 8px 30px;
  min-height: 1015.98px;
  border-radius: 3px;
`;

export const QuickAdd = styled.input`
  background: #1a181d0f;
  margin: 0px 0px 8px;
  padding: 12px 16px;
  width: 100%;
  height: 46.02px;
  font-weight: bold;
  font-size: 14px;
  border: none;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const NoTaskText = styled.p`
  display: flex;
  justify-content: center;
  color: #a5a1ac;
`;
