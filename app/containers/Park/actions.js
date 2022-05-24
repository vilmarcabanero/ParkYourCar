/*
 *
 * Park actions
 *
 */

import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  default: null,
  getPark: null,
  setPark: ['data'],
});

const Actions = {
  Types,
  Creators,
};

export default Actions;
