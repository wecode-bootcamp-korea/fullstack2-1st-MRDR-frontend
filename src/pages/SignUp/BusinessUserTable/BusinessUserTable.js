import React from 'react';
import RadioBtns from '../components/RadioBtns/RadioBtns';
import TableRows from '../components/TableRows/TableRows';
import './BusinessUserTable.scss';

class BusinessUserTable extends React.Component {
  render() {
    const {
      props: { onClick, userBusiness, onChange },
    } = this;
    return (
      <>
        <tr>
          <td>사업자 구분</td>
          <td className="businessInfo" colSpan="2">
            <RadioBtns
              onClick={onClick}
              userBusiness={userBusiness}
              name="userBusiness"
              btns={[
                {
                  id: 'companyBusiness',
                  value: 'companyBusiness',
                  label: '법인사업자',
                },
                {
                  id: 'personalBusiness',
                  value: 'personalBusiness',
                  label: '개인사업자',
                },
              ]}
            />
          </td>
        </tr>

        <TableRows
          onChange={onChange}
          td="상호명"
          className="companyName"
          name="userCompanyName"
        />
        <TableRows
          onChange={onChange}
          td="사업자번호"
          className="tr"
          name="userBusinessNumber"
        />
      </>
    );
  }
}

export default BusinessUserTable;
