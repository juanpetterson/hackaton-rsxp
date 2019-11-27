import styled from 'styled-components';
import lessonBanner from 'assets/img/dashboard/lesson-banner.png';

export const LessonContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  height: 100%;
`;
export const LessonContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  background: url(${lessonBanner});
  background-size: cover;
`;

export const LessonHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
`;

export const LessonStats = styled.div`
  height: 100%px;
  width: 100%;
`;

export const LessonFooter = styled.div`
  display: flex;
  height: 50px;
  justify-content: flex-end;
`;

export const LessonRef = styled.a`
  height: 100%;
  width: 100%;
`;

export const EnterLesson = styled.button`
  width: 100px;
  height: 100%;
  background: #fff;
  color: #282828;
  border-radius: 10px;
  margin: 10px;
  border: none;
  text-decoration: none;
  font-size: 14px;
  vertical-align: middle;
`;

export const DashboardImageContainer = styled.div`
  position: absolute;
  top: -10%;
  left: 15%;
`;

export const ConquestsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const ConquestsItemWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ConquestsItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #ddd;
  margin-bottom: 10px;
`;

export const ConquestsItemSpan = styled.div`
  width: 24px;
  height: 34px;
  opacity: 0.5;
  font-family: OpenSans;
  font-size: 48px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.56;
  letter-spacing: normal;
  text-align: left;
  color: rgba(86, 86, 86, 0.5);
`;

export const ConquestsTitle = styled.span`
  color: #282828;
  font-size: 12px;
  font-weight: 700;
`;

export const ConquestsFooter = styled.div`
  display: flex;
  flex: 1;
`;
