import {
  StyledAppHeader,
  MemberDetails,
  Avatar,
  MemberStats,
  ProfileContainer,
  ClassIcon,
  ClassIconContainer,
  ClassInfo,
  CharacterName,
  CharacterLevel,
  ProgressContainer,
  StatsIcon,
  Progress,
  ProgressText,
  PartyContainer,
  PartyTextContainer,
  InviteButton,
  PartyTextContent,
  PartyTextHeader,
} from "./styles/AppHeader.styled";

export default function AppHeader() {
  return (
    <StyledAppHeader>
      <MemberDetails>
        <Avatar src="./images/rogue.svg" alt="" />
        <MemberStats>
          <ProfileContainer>
            <ClassIconContainer>
              <ClassIcon src="./images/rogue.svg" alt="" />
            </ClassIconContainer>
            <ClassInfo>
              <CharacterName>
                <span>Silverfingers</span>
              </CharacterName>
              <CharacterLevel>
                <span>@Silverfingers • Level 30 Rogue</span>
              </CharacterLevel>
            </ClassInfo>
          </ProfileContainer>
          <ProgressContainer>
            <StatsIcon src="./images/health.svg" alt="" />
            <Progress style={{ background: "#F74E52" }} />
            <ProgressText>50 / 50</ProgressText>
          </ProgressContainer>
          <ProgressContainer>
            <StatsIcon src="./images/experience.svg" alt="" />
            <Progress style={{ background: "#FFBE5D" }} />
            <ProgressText>500 / 500</ProgressText>
          </ProgressContainer>
          <ProgressContainer>
            <StatsIcon src="./images/mana.svg" alt="" />
            <Progress style={{ background: "#50B5E9" }} />
            <ProgressText>60 / 60</ProgressText>
          </ProgressContainer>
        </MemberStats>
      </MemberDetails>
      <PartyContainer>
        <PartyTextContainer>
          <PartyTextHeader>Complete Quests with Friends!</PartyTextHeader>
          <PartyTextContent>
            Invite friends to your Party to take on exclusive Quests together!
            Or challenge them to weekly task battles!
          </PartyTextContent>
          <InviteButton>Invite Friends</InviteButton>
        </PartyTextContainer>
      </PartyContainer>
    </StyledAppHeader>
  );
}
