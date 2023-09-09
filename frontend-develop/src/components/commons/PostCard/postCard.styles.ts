import styled from '@emotion/styled';

const commonStyle = {
  color: {
    orange: '#FD6B36',
    gray: '#AEAAA6',
    white: '#FFFFFF',
  },

  backgroundColor: {
    orange: '#ffe7de',
    orange02: '#FD6B36',

    gray: '#EAE5E0',
  },

  fontSize: {
    light: '14px',
    thin: '12px',
  },

  fontWeight: {
    bold: '700',
  },
};

export const PostCardContainer = styled.div`
  position: relative;
  width: 244px;
  margin: 0 auto;
`;

export const PostCardImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 244px;
  border-radius: 14px;
  background-color: #ddd;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const PickButton = styled.button`
  position: absolute;
  width: 22px;
  height: 21px;
  right: 16px;
  bottom: 16px;
  background-color: ${commonStyle.backgroundColor.orange02};
  cursor: pointer;
`;

export const PostCardInfo = styled.div`
  padding: 16px 0 20px;

  p {
    font-weight: ${commonStyle.fontWeight.bold};
  }
`;

export const InfoHost = styled.h2`
  color: ${commonStyle.color.gray};
  font-size: 14px;
  font-weight: ${commonStyle.fontWeight.bold};
`;

export const InfoTitle = styled.h3`
  margin: 5px 0;
  font-size: 18px;
  font-weight: ${commonStyle.fontWeight.bold};
`;

export const InfoDate = styled.div`
  display: flex;
  align-items: center;
`;

export const DateDday = styled.p`
  margin-right: 6px;
  padding: 4px 16px;
  border-radius: 13px;
  color: ${commonStyle.color.orange};
  background-color: ${commonStyle.backgroundColor.orange};
  font-size: ${commonStyle.fontSize.light};
`;

export const DateCreation = styled.p`
  color: ${commonStyle.color.gray};
`;

export const PostCardFooter = styled.ul`
  display: flex;
  justify-content: flex-end;

  > li {
    display: flex;
    align-items: center;

    :first-of-type::after {
      content: '';
      width: 1px;
      height: 100%;
      background-color: ${commonStyle.backgroundColor.gray};
      margin: 0 5px;
    }
  }
`;

export const FooterIcon = styled.div`
  width: 12px;
  height: 12px;
  margin-right: 5px;
  background-color: ${commonStyle.backgroundColor.orange02};
`;

export const FooterCount = styled.p`
  color: ${commonStyle.color.gray};
  font-size: ${commonStyle.fontSize.light};
`;

export const PostCardTag = styled.div`
  position: absolute;
  width: 72px;
  height: 20px;
  top: 20px;
  left: -4px;
  line-height: 20px;
  text-align: center;
  border-radius: 4px;
  color: ${commonStyle.color.white};
  background-color: ${commonStyle.backgroundColor.orange02};
  font-size: ${commonStyle.fontSize.thin};
`;
