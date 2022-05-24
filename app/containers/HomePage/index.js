/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import ThemeContext from 'utils/contextTheme';
import { Typography, ListItem, Switch } from '@material-ui/core';
import * as Styled from './styles';

export default function HomePage() {

  return (
    <Styled.MainContainer>
      <Styled.SubmitButton variant="contained" color="primary">
        Submit
      </Styled.SubmitButton>
    </Styled.MainContainer>
  );
}
