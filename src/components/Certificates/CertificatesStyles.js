import styled from "styled-components";

export const Boxes = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Four columns in a row */
  gap: 30px;
  margin: 40px 0 60px;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(3, 1fr); /* Adjust to 3 columns for medium screens */
    gap: 20px;
    margin: 30px 0 50px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(2, 1fr); /* Adjust to 2 columns for small screens */
    gap: 16px;
    margin: 20px 0 40px;
  }
`;


export const Box = styled.div`
  background: #1e1e2f;
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom right, #6c63ff, #00dbde);
  border-image-slice: 1;
  border-radius: 16px;
  padding: 24px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    height: 160px;
    padding: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 140px;
    padding: 16px;
  }
`;

export const BoxNum = styled.h5`
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 12px;
  background: linear-gradient(to right, #6c63ff, #00dbde);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
  }
`;

export const BoxText = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.85);

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 14px;
    line-height: 22px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12px;
    line-height: 20px;
  }
`;

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${(props) => props.theme.breakpoints.md} {
    padding-bottom: 64px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    padding-bottom: 40px;
  }
`;

export const JoinText = styled.h5`
  font-size: 24px;
  line-height: 36px;
  color: rgba(255, 255, 255, 0.7);

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 32px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 16px;
  }
`;

export const IconContainer = styled.div`
  display: flex;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 160px;
    justify-content: space-between;
  }
`;
