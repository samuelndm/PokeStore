import styled from "styled-components";

export const Container = styled.div`
  padding: 0 5px;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Divisor = styled.div`
  padding: 0 30px;
  width: 48px;
  height: 1px;
  background: #c5cee0;
  border-radius: 24px 24px 0px 0px;
  transform: rotate(-90deg);

  @media screen and (max-width: 350px) {
    padding: 0 20px;
  }
`;

export const Stats = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }
`;

export const StatsLabel = styled.span`
  margin: 0 0 8px;
  font-family: Open Sans;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  color: #2e3a59;
  text-transform: uppercase;
`;

export const StatsContent = styled.p`
  font-family: Open Sans;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  color: #2e3a59;

  @media screen and (max-width: 350px) {
    font-size: 16px;
  }
`;
