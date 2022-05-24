/**
 *
 * Home
 *
 */

import {
  Button as MUIButton,
  TextField,
  CircularProgress,
  Card,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import * as MuiPickers from '@material-ui/pickers';

import React, { useEffect, useState } from 'react';
import useForceUpdate from 'use-force-update';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import moment from 'moment';
import makeSelectHome from './selectors';
import Actions from './actions';
import reducer from './reducer';
import saga from './saga';
import useStyles, { MainContainer, SubmitButton } from './styles';

export function Home(props) {
  useInjectReducer({ key: 'home', reducer });
  useInjectSaga({ key: 'home', saga });

  const { homeState, saveParkingInputDataSaga } = props;
  // const { data } = homeState;
  const classes = useStyles();
  const forceUpdate = useForceUpdate();

  const [parkingInputData, setParkingInputData] = useState({
    name: '',
    entryPoint: '',
    vehicleType: '',
    parkingType: '',
    dateOfEntry: {
      dateOfEntry: '',
      date: moment(new Date()),
      time: moment(new Date()),
    },
    dateOfExit: {
      date: moment(new Date()),
      time: moment(new Date()),
    },
    dateOfEntryCombined: '',
    dateOfExitCombined: '',
  });
  const [rerender, setRerender] = useState(false);

  // const [selectedEntryPoints, setSelectedEntryPoints] = useState();

  useEffect(() => {
    // getHome();
    handleDateOfEntryCombined();
    console.log('Render');
  }, [rerender]);

  const handlePark = e => {
    e.preventDefault();

    // forceUpdate();
    saveParkingInputDataSaga(parkingInputData);
    props.history.push('/park');

    console.log('parkingInputData', parkingInputData);

    // const milliSeconds =
    //   moment(parkingInputData.dateOfExitCombined).valueOf() -
    //   moment(parkingInputData.dateOfEntryCombined).valueOf();
    // const hrs = Math.floor(milliSeconds / 3600 / 1000);
    // console.log('Hours of stay: ', hrs);
  };

  const handleEntryPointSelect = e => {
    setRerender(!rerender);
    setParkingInputData({
      ...parkingInputData,
      entryPoint: e.target.value,
    });
  };

  const handleDateOfEntryCombined = () => {
    setParkingInputData({
      ...parkingInputData,
      dateOfEntryCombined: moment(
        parkingInputData.dateOfEntry.date + parkingInputData.dateOfEntry.time,
      ).valueOf(),
      // dateOfExitCombined: moment(
      //   parkingInputData.dateOfExit.date + parkingInputData.dateOfExit.time,
      // ),
    });
  };

  const handleDateOfEntryDate = e => {
    // handleDateOfEntryCombined();
    setParkingInputData({
      ...parkingInputData,
      dateOfEntry: {
        ...parkingInputData.dateOfEntry,
        date: moment(e).valueOf(),
      },
    });
  };

  const handleDateOfEntryTime = e => {
    // handleDateOfEntryCombined();
    setParkingInputData({
      ...parkingInputData,
      dateOfEntry: {
        ...parkingInputData.dateOfEntry,
        time: e.valueOf(),
      },
    });
  };

  // const handleDateOfExitDate = e => {
  //   setParkingInputData({
  //     ...parkingInputData,
  //     dateOfExit: {
  //       ...parkingInputData.dateOfExit,
  //       date: moment(e).valueOf(),
  //     },
  //   });
  // };

  // const handleDateOfExitTime = e => {
  //   setParkingInputData({
  //     ...parkingInputData,
  //     dateOfExit: {
  //       ...parkingInputData.dateOfExit,
  //       time: e.valueOf(),
  //     },
  //   });
  // };

  const entryPoints = [
    { id: 0, name: 'Entry point 1' },
    { id: 1, name: 'Entry point 2' },
    { id: 2, name: 'Entry point 2' },
  ];
  const vehicleTypes = [
    { id: 0, name: 'Small Vehicle' },
    { id: 1, name: 'Medium Vehicle' },
    { id: 2, name: 'Large Vehicle' },
  ];

  const parkingTypes = [
    { id: 0, name: 'Small Parking Lot' },
    { id: 1, name: 'Medium Parking Lot' },
    { id: 2, name: 'Large Parking Lot' },
  ];

  return (
    <MainContainer>
      <Card className="card">
        <h1 className={classes.title}>Park You Car</h1>
        <MuiPickers.MuiPickersUtilsProvider utils={DateFnsUtils}>
          <InputLabel className={classes.entryTimeLabel}>Entry Time</InputLabel>
          <div className={classes.datePickerContainerFlex}>
            <MuiPickers.DatePicker
              className={classes.datePicker}
              variant="inline"
              autoOk
              size="small"
              inputVariant="outlined"
              value={parkingInputData.dateOfEntry.date}
              onChange={handleDateOfEntryDate}
              required
            />

            <MuiPickers.TimePicker
              className={classes.timePicker}
              variant="inline"
              autoOk
              size="small"
              inputVariant="outlined"
              value={parkingInputData.dateOfEntry.time}
              onChange={handleDateOfEntryTime}
              required
            />
          </div>
        </MuiPickers.MuiPickersUtilsProvider>
        <TextField
          label="Enter entry name"
          type="text"
          fullWidth
          className={classes.nameInput}
          size="small"
          value={parkingInputData.name}
          onChange={e =>
            setParkingInputData({ ...parkingInputData, name: e.target.value })
          }
        />
        <FormControl required size="small" className={classes.formControl}>
          <InputLabel id="entrypoint-select-label">
            Select Entry Point
          </InputLabel>
          <Select
            labelId="entrypoint-select-label"
            id="entrypoint-select"
            className="entrypoint-select"
            value={parkingInputData.entryPoint}
            onChange={e => handleEntryPointSelect(e)}
          >
            {entryPoints.map(item => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl size="small" className={classes.formControl}>
          <InputLabel id="vehicle-type-select-label">
            Select Vehicle Type
          </InputLabel>
          <Select
            labelId="vehicle-type-select-label"
            id="vehicle-type-select"
            className="entrypoint-select"
            value={parkingInputData.vehicleType}
            onChange={e =>
              setParkingInputData({
                ...parkingInputData,
                vehicleType: e.target.value,
              })
            }
          >
            {vehicleTypes.map(item => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl size="small" className={classes.formControl}>
          <InputLabel id="parking-type-select-label">
            Select Parking Type
          </InputLabel>
          <Select
            labelId="parking-type-select-label"
            id="parking-type-select"
            className="entrypoint-select"
            value={parkingInputData.parkingType}
            onChange={e =>
              setParkingInputData({
                ...parkingInputData,
                parkingType: e.target.value,
              })
            }
          >
            {parkingTypes.map(item => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* <MuiPickers.MuiPickersUtilsProvider utils={DateFnsUtils}>
          <InputLabel className={classes.entryTimeLabel}>Exit Time</InputLabel>
          <div className={classes.datePickerContainerFlex}>
            <MuiPickers.DatePicker
              className={classes.datePicker}
              variant="inline"
              autoOk
              size="small"
              inputVariant="outlined"
              value={parkingInputData.dateOfExit.date}
              onChange={handleDateOfExitDate}
              required
            />

            <MuiPickers.TimePicker
              className={classes.timePicker}
              variant="inline"
              autoOk
              size="small"
              inputVariant="outlined"
              value={parkingInputData.dateOfExit.time}
              onChange={handleDateOfExitTime}
              required
            />
          </div>
        </MuiPickers.MuiPickersUtilsProvider> */}
        <SubmitButton
          fullWidth
          variant="contained"
          color="primary"
          onClick={handlePark}
        >
          Book a Parking Slot
        </SubmitButton>
      </Card>
    </MainContainer>
  );
}

Home.propTypes = {
  // getHome: PropTypes.object,
  homeState: PropTypes.object,
  saveParkingInputDataSaga: PropTypes.object,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  homeState: makeSelectHome(),
});

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(
      {
        ...Actions.Creators,
      },
      dispatch,
    ),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Home);
