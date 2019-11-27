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

export const EnterLesson = styled.button`
  width: 100px;
  background: #fff;
  color: #282828;
  border-radius: 10px;
  margin: 10px;
  border: none;
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
  width: 80px;
  height: 80px;
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
