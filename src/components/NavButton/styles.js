import styled from 'styled-components';

export const Container = styled.button`
  position: relative;
  margin: 0;
  padding: 1rem;
  width: 100%;

  border-radius: 0rem;
  border: none;

  background-color: rgba(0, 0, 0, 0.02);
  background-position: center;

  overflow: hidden;
  outline: none;

  color: #777;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: uppercase;
  vertical-align: middle;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #777;
    opacity: 0;
    transition: opacity 0.1s;
  }
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    padding: 50%;
    background-color: #fff;
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
    transition: opacity 1s, transform 0.5s;
  }

  &:hover::before {
    opacity: 0.15;
  }

  &:focus::before {
    opacity: 0.22;
  }

  &:hover:focus::before {
    opacity: 0.3;
  }

  &:active::after {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0s;
  }
`;
