import React from 'react';
import RadioBtns from '../RadioBtns/RadioBtns';

class TableHeader extends React.Component {
  render() {
    const {
      props: { tableTypeChanger },
    } = this;

    return (
      <thead>
        <tr>
          <td className="signUpSubTitle firstThTd">기본정보</td>
          <td className="secondThTd" colSpan="3">
            <RadioBtns
              tableTypeChanger={tableTypeChanger}
              name="userCountry"
              btns={[
                {
                  id: 'personal',
                  value: '0',
                  label: '개인정보',
                },
                {
                  id: 'buiness',
                  value: '1',
                  label: '사업자회원',
                },
                {
                  id: 'foreigner',
                  value: '2',
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

export default TableHeader;
