import React from 'react';
import RadioBtns from '../RadioBtns/RadioBtns';
import './TableHeader.scss';

class TableHeader extends React.Component {
  render() {
    const { radioBtnOnClick, usertype } = this.props;
    return (
      <thead>
        <tr>
          <td className="signUpSubTitle firstThTd">기본정보</td>
          <td className="secondThTd" colSpan="3">
            <RadioBtns
              onClick={radioBtnOnClick}
              usertype={usertype}
              name={'usertype'}
              btns={[
                {
                  value: 'personalUser',
                  id: 'personalUser',
                  label: '개인정보',
                },
                {
                  id: 'businessUser',
                  value: 'businessUser',
                  label: '사업자회원',
                },
                {
                  id: 'foreignerUser',
                  value: 'foreignerUser',
                  label: '외국인 회원(foreigner)',
                },
              ]}
            />
          </td>
        </tr>
      </thead>
    );
  }
}

export default React.memo(TableHeader);
