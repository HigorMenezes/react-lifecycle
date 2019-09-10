import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.div`
  width: 100%;
  margin: 0rem;
  padding: 0 2rem;
  background-color: ${props => props.theme.color.white};

  .navbar-container {
    width: 80%;
    margin: auto;
    font-size: 1.6rem;

    [class^='navbar'] {
      min-width: 15rem;
      font-weight: 400;
      color: ${props => props.theme.color.black};
      padding: 2rem;

      text-align: center;
      vertical-align: center;
      text-decoration: none;
      text-transform: uppercase;

      background-color: ${props => props.theme.color.white};

      &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.color.grey};
      }
    }

    .navbar-link {
      display: inline-block;
      position: relative;

      .navbar-sublink {
        display: none;
      }

      &:hover .navbar-sublink {
        display: block;
        margin-top: 2rem;
        width: 20rem;
        left: 0;
        position: absolute;
      }
    }
  }
`;
