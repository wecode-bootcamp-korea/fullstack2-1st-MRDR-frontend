import { useState } from 'react';

import * as S from './header.styles.ts';

function Header() {
  const [isHovered, setIsHovered] = useState(false);

  const menuItems = [
    {
      name: '공모전',
      subItems: ['공모분야', '시상규모', '수상혜택', '지원대상'],
    },
    {
      name: '대외활동',
      subItems: ['활동분야', '관심분야', '활동혜택', '활동기간', '지역'],
    },
    {
      name: '자격증',
      subItems: ['국가기술자격증', '국가전문자격증'],
    },
    {
      name: '어학',
      subItems: ['영어', '중국어', '스페인어', '기타'],
    },
    {
      name: '인턴',
      subItems: ['대기업', '중소기업', '스타트업'],
    },
    {
      name: '취준job담',
      subItems: ['취업선배 Q&A', '공모전/대외활동', '자격증/어학', '인턴', '스터디', '자유게시판'],
    },
  ];
  return (
    <>
      <S.HeaderContainer>
        <S.MenuContainer>
          <S.HeaderLogo>ALL IN JOB</S.HeaderLogo>
          <div
            style={{
              flex: 2,
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <S.MenuWrapper>
              {menuItems.map(item => (
                <S.MenuItem key={item.name}>{item.name}</S.MenuItem>
              ))}
              {isHovered ? (
                <S.HoverMenu>
                  <S.divisionLine />
                  <S.MenuDetailWrapper>
                    {menuItems.map(item => (
                      <div
                        key={item.name}
                        style={{
                          width: '125px',
                        }}
                      >
                        <S.DetailItems>
                          {item.subItems.map(subItem => (
                            <p
                              style={{
                                width: '125px',
                                cursor: 'pointer',
                              }}
                              key={subItem}
                            >
                              {subItem}
                            </p>
                          ))}
                        </S.DetailItems>
                      </div>
                    ))}
                  </S.MenuDetailWrapper>
                </S.HoverMenu>
              ) : null}
            </S.MenuWrapper>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'right' }}>
            <S.CharactorBox>캐릭터</S.CharactorBox>
          </div>
        </S.MenuContainer>
      </S.HeaderContainer>
      {isHovered && <S.Overlay />}
    </>
  );
}

export default Header;
