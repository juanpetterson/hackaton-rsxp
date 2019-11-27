import styled from 'styled-components';
import lessonBanner from 'assets/img/dashboard/lesson-banner.png';

export const LessonContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;
export const LessonContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
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
  flex: 1;
  height: 100%;
  width: 100%;
`;

export const LessonFooter = styled.div`
  display: flex;
  flex: 1;
  height: 50px;
  justify-content: space-between;
  align-items: flex-end;
`;

export const LessonFooterWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 0 10px 20px 20px;
`;

export const LessonRef = styled.a`
  height: 100%;
  width: 100%;
`;

export const LessonTitle = styled.span`
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.75;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
`;

export const EnterLesson = styled.button`
  height: 74px;
  background: #f2b907;
  color: #fff;
  margin: 10px;
  border: none;
  text-decoration: none;
  vertical-align: middle;
`;

export const EnterLessonSpan = styled.span`
  text-shadow: 1px 1.7px 0 rgba(0, 0, 0, 0.16);
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.75;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  margin: 0 5px;
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
