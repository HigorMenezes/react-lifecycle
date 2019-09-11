import styled from 'styled-components';

export const Container = styled.div`
  .collapse-button {
    margin: 0;
    width: 100%;
    height: 3.6rem;

    outline: none;
    border: 1px solid ${props => props.theme.color.black};
    border-radius: 0.5rem;

    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    text-overflow: ellipsis;
    text-transform: uppercase;
    vertical-align: middle;
    cursor: pointer;

    transition: all 0.2s;
  }

  .collapse-content {
    margin: 0;
    margin-top: -3rem;
  }
`;
