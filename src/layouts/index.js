import React, { useEffect } from 'react';
import { connect } from 'dva';
import { useModel } from 'umi';

function BasicLayout({ children }) {
  const { initialState } = useModel('@@initialState');
  const menus = initialState.menus;
  return (
    <div>
      {children}
    </div>
  );
}

export default BasicLayout;