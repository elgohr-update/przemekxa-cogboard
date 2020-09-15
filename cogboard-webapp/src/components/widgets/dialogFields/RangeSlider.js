import React from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { COLORS } from '../../../constants';

const RangeSlider = ({ dataCy }) => {
  //TODO refactor needed
  const inputId = 'range-slider';
  const [value, setValue] = React.useState([57, 80]);
  const theme = useTheme();

  const useStyles = makeStyles(() => ({
    root: {
      color: COLORS.WHITE
    }
  }));

  function valuetext(value) {
    return `${value}%`;
  }

  const marks = [
    {
      value: 0,
      label: '0%'
    },
    {
      value: 100,
      label: '100%'
    }
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={useStyles}>
      <Typography id={inputId} gutterBottom>
        Range (%)
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        data-cy={dataCy}
        marks={marks}
        getAriaValueText={valuetext}
      />
    </div>
  );
};

export default RangeSlider;
