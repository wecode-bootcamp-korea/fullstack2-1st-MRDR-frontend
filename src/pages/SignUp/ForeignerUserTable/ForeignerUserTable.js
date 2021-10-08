import React from 'react';
import TableRows from '../components/TableRows/TableRows';

class ForeignerUserTable extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <>
        <TableRows
          onChange={onChange}
          td="외국인 등록번호"
          className="foreignerNumber"
          name="foreignerNumber"
        />

        <TableRows
          onChange={onChange}
          placeholder={'국가를 선택해주세요.'}
          td="국적"
          className="tr"
          name="userCountryInput"
        />
      </>
    );
  }
}

export default ForeignerUserTable;
