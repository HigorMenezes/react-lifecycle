import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0rem;
  padding: 0 2rem;
  background-color: ${props => props.theme.color.white};

  .navbar-container {
    width: 80%;
    margin: auto;
    font-size: 1.6rem;

    .navbar-link {
      min-width: 10rem;
      font-weight: 700;
      color: ${props => props.theme.color.black};
      padding: 1rem;

      text-align: center;
      vertical-align: center;
      text-decoration: none;
      text-transform: uppercase;

      background-color: ${props => props.theme.color.white};

      &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.color.grey};
        transition: background-color 0.3s;
      }
    }

    .navbar-link {
      display: inline-block;
      position: relative;

      .navbar-subcontainer {
        display: none;
        opacity: 0;
      }

      &:hover .navbar-subcontainer {
        display: block;
        opacity: 1;
        margin-top: 1rem;
        left: 0;
        position: absolute;
        animation: subcontainer-opacity 0.5s;
      }
    }
  }

  @keyframes subcontainer-opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
