import { useEffect, useMemo, useRef, useState } from 'react';

import * as S from './carousel.styles';

export type SlideDirection = 'left' | 'right';

export const CAROUSEL_WIDTH = 1113;
const TRANSITION_DURATION = 0.5;

export const Carousel = () => {
  const slideRef = useRef<HTMLDivElement>(null);

  const [slideState, setSlideState] = useState(Array.from({ length: 3 }, (_, idx) => idx));
  const [visibleSlide, setVisibleSlide] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasTransition, setHasTransition] = useState(true);
  const [isNavDisabled, setIsNavDisabled] = useState(false);

  const originalSlideLength = useMemo(() => slideState.length, []);
  const navigationControlCounter = useMemo(() => Array.from(new Set(slideState)), []);

  useEffect(() => {
    const clonedSlide = [...slideState];
    clonedSlide.unshift(slideState[slideState.length - 1]);
    clonedSlide.push(clonedSlide[1]);
    setSlideState(clonedSlide);
    // requestAnimationFrame(() => triggerAutoSlide(Date.now()));
  }, []);

  const useAfterMountEffect = () => {
    const ref = useRef<boolean>(false);
    useEffect(() => {
      if (ref.current) {
        setInterval(
          () => {
            if (!isNavDisabled) onClickRightArrow();
          },
          visibleSlide <= slideState.length - 2
            ? TRANSITION_DURATION * 2000 + 500
            : TRANSITION_DURATION * 1000 + 500,
        );
      }
      ref.current = true;
    }, [ref]);
  };

  useAfterMountEffect();

  useEffect(() => {
    const customSetTimeout = (callback: () => void) => {
      setTimeout(callback, TRANSITION_DURATION * 1000);
    };

    if (visibleSlide === 1) {
      customSetTimeout(() => setHasTransition(true));
    }

    if (visibleSlide === slideState.length - 1) {
      setCurrentIndex(0);
      customSetTimeout(() => {
        setVisibleSlide(1);
        setHasTransition(false);
      });
    }

    if (visibleSlide === 0) {
      setCurrentIndex(slideState.length % originalSlideLength);
      customSetTimeout(() => {
        setHasTransition(false);
        setVisibleSlide(slideState.length - 2);
      });
    }

    if (visibleSlide === slideState.length - 2) customSetTimeout(() => setHasTransition(true));
  }, [visibleSlide]);

  useEffect(() => {
    if (isNavDisabled) setTimeout(() => setIsNavDisabled(false), TRANSITION_DURATION * 1000 + 500);
  }, [isNavDisabled]);

  const onClickLeftArrow = () => {
    setVisibleSlide(visibleSlide - 1);
    setIsNavDisabled(true);

    if (0 < visibleSlide && visibleSlide < slideState.length - 1) setCurrentIndex(currentIndex - 1);
  };

  const onClickRightArrow = () => {
    setVisibleSlide(visibleSlide => {
      return visibleSlide + 1;
    });
    setIsNavDisabled(true);

    if (0 < visibleSlide && visibleSlide < slideState.length - 1)
      setCurrentIndex(currentIndex => currentIndex + 1);
  };

  const calculateLeft = () => {
    const slide = slideRef.current;
    if (slide) return `-${visibleSlide * CAROUSEL_WIDTH}px`;
  };

  const moveToThisSlide = (targetSlideIdx: number) => {
    const slide = slideRef.current;
    if (slide) {
      setCurrentIndex(targetSlideIdx);
      setVisibleSlide(targetSlideIdx + 1);
    }
  };

  return (
    <S.container>
      <S.ArrowButton direction={'left'} disabled={isNavDisabled} onClick={onClickLeftArrow}>
        {'<'}
      </S.ArrowButton>
      <S.ArrowButton direction={'right'} disabled={isNavDisabled} onClick={onClickRightArrow}>
        {'>'}
      </S.ArrowButton>
      <S.CarouselNavigation>
        {navigationControlCounter.map((_, idx) => (
          <S.ControlsButton
            key={idx}
            activated={currentIndex === idx}
            onClick={() => moveToThisSlide(idx)}
          />
        ))}
      </S.CarouselNavigation>
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          overflow: 'hidden',
        }}
      >
        <S.ImageContainer
          ref={slideRef}
          count={slideState.length}
          style={{
            left: calculateLeft(),
            transition: hasTransition ? `${TRANSITION_DURATION}s left ease-in-out 0s` : '',
          }}
        >
          {slideState.map((image, idx) => (
            <div
              key={idx}
              style={{
                flex: 1,
                width: '100%',
                height: '100%',
                fontSize: '120px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {image}
            </div>
          ))}
        </S.ImageContainer>
      </div>
    </S.container>
  );
};
