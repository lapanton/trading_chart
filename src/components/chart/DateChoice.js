import React from "react";
import MomentUtils from '@date-io/moment';
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import {WrapDates} from "./styled";


const DateChoice = (props) => {
  const {updateMinDate, updateMaxDate, setUpdateMinDate, setUpdateMaxDate, maxDate, minDate} = props;
  const defaultMaterialTheme = createMuiTheme({
    palette: {
      primary: { main: '#4fcf80' },
    },
  });
  return (
    <WrapDates>
      <ThemeProvider theme={defaultMaterialTheme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DatePicker value={updateMinDate ? updateMinDate : minDate} onChange={setUpdateMinDate} minDate={minDate} maxDate={maxDate} />
          <DatePicker value={updateMaxDate ? updateMaxDate : maxDate} onChange={setUpdateMaxDate} minDate={minDate} maxDate={maxDate} />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </WrapDates>
  )
}

export default DateChoice;