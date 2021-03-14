import styled from 'styled-components';

export const S = {
  Container: styled.div`
    padding: 10px;
    display: flex;

    @media (max-width: 480px) {
      flex-wrap: wrap;
    }
  `,
};
