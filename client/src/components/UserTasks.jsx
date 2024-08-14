/* eslint-disable react/no-unescaped-entities */
import { Flex } from "./styles/Flex.styled";
import {
  InputContainer,
  ColumnTitle,
  SearchBar,
  StyledUserTasks,
  ControlButton,
  QuickAdd,
  TagsDropdown,
  TagsLogo,
  TagsSpan,
  TasksColumn,
  TasksContainer,
  TasksFilter,
  TasksList,
  TasksNavigation,
  Habit,
  Control,
  HabitLogo,
  HabitInfo,
  HabitStreakContainer,
  HabitStreak,
  HabitName,
  TasksFilterContainer,
  Daily,
  DailyName,
  DailyInfo,
  DailyStreakContainer,
  DailyLogo,
  DailyStreak,
} from "./styles/UserTasks.styled";

export default function UserTasks() {
  return (
    <StyledUserTasks>
      <TasksContainer>
        <TasksNavigation>
          <InputContainer>
            <SearchBar placeholder="Search"></SearchBar>
            <TagsDropdown>
              <TagsLogo src="./images/tags.svg"></TagsLogo>
              <TagsSpan>Tags</TagsSpan>
              <TagsSpan style={{ margin: "4px 0 -3px 0" }}>🞃</TagsSpan>
            </TagsDropdown>
          </InputContainer>
        </TasksNavigation>
        <Flex>
          {/* Habits */}
          <TasksColumn>
            <Flex>
              <ColumnTitle>Habits</ColumnTitle>
              <TasksFilterContainer>
                <TasksFilter>All</TasksFilter>
                <TasksFilter>Weak</TasksFilter>
                <TasksFilter>Strong</TasksFilter>
              </TasksFilterContainer>
            </Flex>
            <TasksList>
              <QuickAdd placeholder="Add a Habit"></QuickAdd>
              <Habit>
                <Control habit left>
                  <ControlButton habit>
                    <HabitLogo src="./images/plus-sign.svg"></HabitLogo>
                  </ControlButton>
                </Control>
                <HabitInfo>
                  <HabitName>Wake up before 9</HabitName>
                  <HabitStreakContainer>
                    <HabitLogo src="./images/fast-forward.svg"></HabitLogo>
                    <HabitStreak>+1 | -1</HabitStreak>
                    <HabitLogo src="./images/habit-tags.svg"></HabitLogo>
                  </HabitStreakContainer>
                </HabitInfo>
                <Control habit left>
                  <ControlButton habit>
                    <HabitLogo src="./images/minus-sign.svg"></HabitLogo>
                  </ControlButton>
                </Control>
              </Habit>
            </TasksList>
          </TasksColumn>
          <TasksColumn>
            {/* Dailies */}
            <Flex>
              <ColumnTitle>Dailies</ColumnTitle>
              <TasksFilterContainer>
                <TasksFilter>All</TasksFilter>
                <TasksFilter>Due</TasksFilter>
                <TasksFilter>Not Due</TasksFilter>
              </TasksFilterContainer>
            </Flex>
            <TasksList>
              <QuickAdd placeholder="Add a Daily"></QuickAdd>
              <Daily>
                <Control left>
                  <ControlButton></ControlButton>
                </Control>
                <DailyInfo>
                  <DailyName>Take out trash</DailyName>
                  <DailyStreakContainer>
                    <DailyLogo src="./images/fast-forward.svg"></DailyLogo>
                    <DailyStreak>10</DailyStreak>
                  </DailyStreakContainer>
                </DailyInfo>
              </Daily>
            </TasksList>
          </TasksColumn>
          {/* To do's */}
          <TasksColumn>
            <Flex>
              <ColumnTitle>To Do's</ColumnTitle>
              <TasksFilter>Active</TasksFilter>
              <TasksFilter>Scheduled</TasksFilter>
              <TasksFilter>Complete</TasksFilter>
            </Flex>
          </TasksColumn>
          {/* Rewards */}
          <TasksColumn>
            <Flex>
              <ColumnTitle>Rewards</ColumnTitle>
              <TasksFilter>All</TasksFilter>
              <TasksFilter>Custom</TasksFilter>
              <TasksFilter>Wishlist</TasksFilter>
            </Flex>
          </TasksColumn>
        </Flex>
      </TasksContainer>
    </StyledUserTasks>
  );
}