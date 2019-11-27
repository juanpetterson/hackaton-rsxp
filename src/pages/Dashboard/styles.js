import styled from 'styled-components';

export const LessonContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  background: #ddd;
  height: 300px;
`;

export const LessonHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
`;

export const LessonFooter = styled.div`
  display: flex;
  height: 50px;
  justify-content: flex-end;
`;

export const LessonSpan = styled.span`
  margin: 10px;
  color: #282828;
`;

export const EnterlessonWrapper = styled.a`
  height: 30px;
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
  top: -14%;
  left: 15%;
`;

export const ConquestsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  background: #ddd;
`;

export const ConquestsItemWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ConquestsItem = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #fff;
  margin-bottom: 10px;
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
