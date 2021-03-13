import styled from 'styled-components';

export const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Title: styled.h2``,
  UserSection: styled.div`
    border: solid 1.5px #bdbdbd;
    border-radius: 3px;
  `,
  UserAvatar: styled.img`
    width: 300px;
  `,
  UserName: styled.span`
    display: block;
    font-weight: 600;
    font-size: 18px;
    padding: 5px 10px;
  `,
  Back: styled.button`
    border: none;
    border-radius: 3px;
    background-color: #000;
    color: white;
    padding: 5px 15px;
    cursor: pointer;
    font-size: 13px;
    margin-top: 20px;
  `,
};
