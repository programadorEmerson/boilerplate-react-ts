import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import * as Style from './styles.layout';

const Layout: FC = () => {
  return (
    <Style.StyledLayout>
      <Style.StyledContainerLayout>
        <Outlet />
      </Style.StyledContainerLayout>
    </Style.StyledLayout>
  );

};

export default Layout;
