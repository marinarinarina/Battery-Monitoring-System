'use client';

import styled from 'styled-components';

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.sectionPadding}px;
`;

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.font.size.h1};
  line-height: ${({ theme }) => theme.font.lineHeight.h1};
  color: ${({ theme }) => theme.colors.primary};
`;

const Box = styled.div`
  margin-top: ${({ theme }) => theme.spacing.unit * 4}px;
  padding: ${({ theme }) => theme.spacing.cardPadding.desktop}px;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: ${({ theme }) => theme.radius.button}px;
  box-shadow: ${({ theme }) => theme.shadow.card};
`;

export default function Page() {
  return (
    <Container>
      <Heading>전역 스타일 테스트</Heading>
      <Box>이 박스는 theme으로부터 색상, 여백, 둥근 모서리를 적용받았습니다.</Box>
    </Container>
  );
}