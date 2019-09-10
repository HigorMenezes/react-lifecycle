import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.div`
  margin: 1rem;
  padding: 1rem 3rem;
  border-radius: 0.5rem;
  box-shadow: 0.1rem 0.1rem 1.7rem 0rem
    ${props => rgba(props.theme.color.black, 0.5)};
  width: 100%;
  background-color: ${props => rgba(props.theme.color.black, 0.1)};

  .content-card-section {
    font-size: 1.6rem;
    padding: 1rem 3rem;
    margin-top: 1rem;
    border-radius: 0.5rem;
    background-color: ${props => rgba(props.theme.color.white, 0.7)};

    .content-card-component-container {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 1rem 3rem;
      margin: 1rem;
    }
  }
`;
