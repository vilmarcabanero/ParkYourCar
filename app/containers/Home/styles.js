import { makeStyles } from '@material-ui/core/styles';
import { Button, Dialog } from '@material-ui/core';
import styled from 'styled-components';

export default makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'center',
  },
  title: {
    marginBottom: '1rem',
    textAlign: 'center',
  },
  nameInput: {
    marginBottom: '1rem',
  },
  formControl: {
    width: '100%',
    marginBottom: '1rem',
  },
  //  Datepicker
  datePickerContainerFlex: {
    // display: 'flex',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    marginBottom: '1rem',
    marginTop: '0.25rem',
  },

  entryTimeLabel: {
    fontSize: 14,
  },

  datePicker: {
    width: '50%',
  },
  timePicker: {
    width: '50%',
  },
}));

export const MainContainer = styled.div`
         margin: auto;
         /* width: 40rem; */
         margin-top: 3rem;
         /* background-color: gray; */

         padding: 2rem;
         .card {
           padding: 2rem;
           padding-bottom: 4rem;
           /* height: 37rem; */
           max-width: 37rem;
           width: 100%;
           margin: auto;
           margin-top: 3rem;

           @media (max-width: 900px) {
             margin-top: 7rem;
           }

           @media (max-width: 767px) {
             margin-top: 2rem;
           }
         }

         .entrypoint-select: {
           margin: 1rem;
           margin-bottom: 3rem;
           width: 100%;
         }
       `;

export const SubmitButton = styled(Button)`
  text-transform: none;
`;
