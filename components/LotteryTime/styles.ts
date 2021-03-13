import styled from 'styled-components';

export const S = {
  Container: styled.div`
    flex: 0 0 300px;
  `,
  Title: styled.h3`
    margin-top: 0;
    margin-bottom: 10px;
  `,
  InputSection: styled.div`
    display: flex;
    align-items: center;
  `,
  TimeInput: styled.input`
    width: 80px;
  `,
  TimeText: styled.span`
    margin: 0 15px 0 8px;
  `,
  TimeSubmit: styled.button`
    border: none;
    border-radius: 3px;
    background-color: #000;
    color: white;
    padding: 5px 15px;
    cursor: pointer;
    font-size: 13px;
  `,
};
