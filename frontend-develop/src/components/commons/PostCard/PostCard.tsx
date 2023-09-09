import * as S from './postCard.styles';

function PostCard() {
  return (
    <S.PostCardContainer>
      <S.PostCardImgBox>
        <img />

        {/* 마우스 오버, Pick props 전달 */}
        <S.PickButton>{/* 아이콘 */}</S.PickButton>
      </S.PostCardImgBox>

      <S.PostCardInfo>
        <S.InfoHost>주최기관</S.InfoHost>
        <S.InfoTitle>2023 Meta Spark AR 콘텐츠 공모전</S.InfoTitle>
        <S.InfoDate>
          <S.DateDday>D-1</S.DateDday>
          <S.DateCreation>2023.08.24</S.DateCreation>
        </S.InfoDate>
      </S.PostCardInfo>

      <S.PostCardFooter>
        <li>
          <S.FooterIcon />
          <S.FooterCount>264</S.FooterCount>
        </li>
        <li>
          <S.FooterIcon />
          <S.FooterCount>4715</S.FooterCount>
        </li>
      </S.PostCardFooter>

      <S.PostCardTag>SPECIAL</S.PostCardTag>
    </S.PostCardContainer>
  );
}

export default PostCard;
