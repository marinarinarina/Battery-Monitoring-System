import styled from 'styled-components';

export const VideoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const VideoBox = styled.div`
  width: 100%;
  max-width: 100%;  
  height: auto
  min-height: 160px; 
  margin-top: ${({ theme }) => theme.spacing.unit}px;
  margin-bottom: ${({ theme }) => theme.spacing.unit}px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.colors.videoBox};
`;

export const ErrorBox = styled.div`
  width: 100%;
  max-width: 100%;  
  height: auto
  min-height: 160px; 
  color: ${({ theme }) => theme.colors.critical};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const CameraId = styled.span`
  font-size: ${({ theme }) => theme.font.size.caption};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  display: flex;
  align-items: center;
  gap: 4px;
`;

