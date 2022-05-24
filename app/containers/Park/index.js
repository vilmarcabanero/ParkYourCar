/**
 *
 * Park
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectPark from './selectors';
import makeSelectHome from '../Home/selectors';
import Actions from './actions';
import HomeActions from '../Home/actions';
import reducer from './reducer';
import saga from './saga';

export function Park(props) {
  useInjectReducer({ key: 'park', reducer });
  useInjectSaga({ key: 'park', saga });

  const { getPark, parkState, homeState } = props;
  const { data } = parkState;

  useEffect(() => {
    getPark();
  }, []);

  return (
    <div>
      {/* <h1>{homeState.name}</h1> */}
      <h1>Hello {homeState.name}</h1>
    </div>
  );
}

Park.propTypes = {
  getPark: PropTypes.func,
  parkState: PropTypes.object,
  homeState: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  parkState: makeSelectPark(),
  homeState: makeSelectHome(),
});

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(
      {
        ...Actions.Creators,
        ...HomeActions.Creators,
      },
      dispatch,
    ),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Park);
