import { ChangeEvent, useEffect, useRef, useState } from 'react';

import Submit from 'components/commons/Buttons/Submit/Submit';

import * as S from './InterestFieldSetup.styles';

const interestTags = [
  {
    name: '#문학',
    icon: '',
    image: '',
    keyWords: ['#시', '#소설', '#논문', '#논술', '#만화'],
  },
  {
    name: '#디자인',
    icon: '',
    image: '',
    keyWords: ['#시각디자인', '#제품디자인', '#환경디자인'],
  },
  {
    name: '#IT, 프로그래밍',
    icon: '',
    image: '',
    keyWords: [
      '#웹 개발',
      '#응용프로그램 개발',
      '#ERP시스템 개발/설계',
      '#네트워크/서버/보안',
      '#DBA/데이터베이스',
      '#콘텐츠/사이트운영',
      '#기획/PM',
      '#HTML/퍼블리싱/UI개발',
      '#게임',
    ],
  },
  {
    name: '#금융',
    icon: '',
    image: '',
    keyWords: ['#은행', '#증권', '#보험'],
  },
  {
    name: '#예체능',
    icon: '',
    image: '',
    keyWords: ['#체육', '#미술', '#음악', '#무용', '#연극영화'],
  },
  {
    name: '#어학',
    icon: '',
    image: '',
    keyWords: [
      '#영어',
      '#중국어',
      '#스페인어',
      '#프랑스어',
      '#이탈리아어',
      '#포르투갈어',
      '#러시아어',
      '#일본어',
    ],
  },
  {
    name: '#창업, 사업',
    icon: '',
    image: '',
    keyWords: ['#스타트업', '#서비스', '#제조', '#프랜차이즈', '#사회적기업', '#투자'],
  },
  {
    name: '#취업',
    icon: '',
    image: '',
    keyWords: [
      '#영업/고객상담',
      '#경영/사무',
      '#마케팅/광고/홍보',
      '#생산/제조',
      '#연구개발/설계',
      '#서비스',
      '#무역유통',
      '#의료',
      '#건설',
      '#교육',
      '#전문/특수직',
    ],
  },
];

const departments = [
  '학과1',
  '학과2',
  '학과3',
  '학과4',
  '학과5',
  '학과6',
  '학과7',
  '학과8',
  '학과9',
  '학과10',
  '학과11',
  '학과12',
  '학과13',
  '학과14',
  '학과15',
  '학과16',
  '학과17',
  '학과18',
  '학과19',
  '학과20',
];

type InterestTag = {
  name: string;
  image: string;
  keyWords: string[];
};

function InterestFieldSetup() {
  const [departmentInput, setDepartmentInput] = useState('');
  const [choiceDepartment, setChoiceDepartment] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [interestTag, setInterestTag] = useState<InterestTag>({
    name: '',
    image: '',
    keyWords: [],
  });
  const [selectedKeyWords, setSelectedKeyWords] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const getValueDepartmentInput = (e: ChangeEvent<HTMLInputElement>) => {
    setDepartmentInput(e.target.value);

    if (e.target.value !== '') {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const searchedDepartment = departments.filter(department => department.includes(departmentInput));

  const onClickChoice = (department: string) => {
    setChoiceDepartment(department);

    if (inputRef.current) {
      inputRef.current.value = department;
    }
    setIsVisible(false);
  };

  const onClickTag = (tag: InterestTag) => {
    setInterestTag({
      name: tag.name,
      image: tag.image,
      keyWords: tag.keyWords,
    });

    setSelectedKeyWords([]);
  };

  const selectedKeyWord = (keyWord: string) => {
    if (selectedKeyWords.includes(keyWord)) {
      const updatedSelectedKeywords = selectedKeyWords.filter(
        selectedKeyWord => selectedKeyWord !== keyWord,
      );
      setSelectedKeyWords(updatedSelectedKeywords);
    } else if (selectedKeyWords.length < 3) {
      const updatedSelectedKeywords = [...selectedKeyWords, keyWord];
      setSelectedKeyWords(updatedSelectedKeywords);
    }
  };

  useEffect(() => {
    setIsActive(selectedKeyWords.length > 0);
  }, [selectedKeyWords]);

  const submitButton = () => {
    console.log({
      name: interestTag.name,
      keywords: selectedKeyWords,
      choiceDepartment: choiceDepartment,
    });
  };

  return (
    <S.InterestFieldSetupWrapper>
      <S.MajorDepartment>
        <S.InterestFieldSetupTitle>전공학과를 선택해주세요!</S.InterestFieldSetupTitle>
        <input
          type='text'
          placeholder='학과를 입력해주세요.'
          onChange={getValueDepartmentInput}
          ref={inputRef}
        />
        {isVisible && (
          <S.MajorDepartmentList>
            {searchedDepartment.map(department => (
              <li key={department} onClick={() => onClickChoice(department)}>
                {department}
              </li>
            ))}
          </S.MajorDepartmentList>
        )}
      </S.MajorDepartment>

      <S.InterestSelect>
        <S.InterestFieldSetupTitle>관심 분야를 선택해주세요!</S.InterestFieldSetupTitle>
        <S.TagList>
          {interestTags.map(tag => (
            <S.ClickedTag
              key={tag.name}
              onClick={() =>
                onClickTag({
                  name: tag.name,
                  image: tag.image,
                  keyWords: [...tag.keyWords],
                })
              }
              isChangeColor={tag.name === interestTag.name ? true : false}
            >
              <S.TagName>{tag.name}</S.TagName>
              <S.TagIcon src={tag.icon} />
            </S.ClickedTag>
          ))}
        </S.TagList>
      </S.InterestSelect>

      {interestTag.name !== '' && (
        <>
          <S.InterestKeyWord>
            <S.InterestFieldSetupTitle>
              <strong>{interestTag.name} </strong>분야의 관심 키워드를 선택해주세요!
            </S.InterestFieldSetupTitle>
            <S.KeyWordText>키워드는 1개~3개 선택 가능합니다.</S.KeyWordText>
            <S.TagImage src={interestTag.image} />
            <S.KeyWordList>
              {interestTag.keyWords.map(keyWord => (
                <S.ClickedKeyWord
                  key={keyWord}
                  onClick={() => selectedKeyWord(keyWord)}
                  isChangeColor={selectedKeyWords.includes(keyWord)}
                >
                  <S.CheckBox isChangeColor={selectedKeyWords.includes(keyWord)}></S.CheckBox>
                  <p>{keyWord}</p>
                </S.ClickedKeyWord>
              ))}
            </S.KeyWordList>
          </S.InterestKeyWord>
          <Submit
            title='확인'
            onClick={submitButton}
            disabled={isActive ? false : true}
            isActive={isActive}
          />
        </>
      )}
    </S.InterestFieldSetupWrapper>
  );
}

export default InterestFieldSetup;
