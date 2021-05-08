import React from 'react';
import { Route as ReactDOMRoute } from 'react-router-dom';
import { Public } from '../base/Public';
import { Private } from '../base/Private';
import { RoutesProps } from './types';

export const Route: React.FC<RoutesProps> = ({
  component: Component,
  isPrivate,
  ...rest
}) => {
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === true ? (
          <Private>
            <Component />
          </Private>
        ) : (
          <Public>
            <Component />
          </Public>
        );
      }}
    />
  );
};
