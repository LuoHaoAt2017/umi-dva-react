import React, { useEffect, useState } from 'react';
import { useHistory } from 'umi';

export default function Entry() {
  const history = useHistory();
  const [comp, setComp] = useState({ status: '', component: '' });

  useEffect(() => {
    const pathname = history.location.pathname;
  }, []);

  return <div>Entry</div>;
}
