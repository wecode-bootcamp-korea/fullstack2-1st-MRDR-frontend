import { Outlet, useOutlet } from 'react-router-dom';

import Header from 'components/Navigation/Header/Header';

import PassionTemperature from './home/PassionTemperature';
import * as S from './home.style';

export const Home = () => {
  const outlet = useOutlet();

  return (
    <>
      <Header />
      {/*<FindID />*/}x
      {outlet ? (
        <Outlet />
      ) : (
        <S.Layout>
          <S.Main>
            <PassionTemperature />
            {/*<Carousel />*/}
            {/*<ContestMenuBar />*/}
            {/*<CardList />*/}
          </S.Main>
          <S.Sidebar>{/*<Aside />*/}</S.Sidebar>
        </S.Layout>
      )}
    </>
  );
};
