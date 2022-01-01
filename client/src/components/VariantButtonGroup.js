import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const VariantButtonGroup = (props) =>  {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup color='warning' variant="text" aria-label="text button group">
        <Button onClick={props.onClick} name={props.button1}>{props.button1}</Button>
        <Button onClick={props.onClick} name={props.button2}>{props.button2}</Button>
        <Button onClick={props.onClick} name={props.button3}>{props.button3}</Button>
        <Button onClick={props.onClick} name={props.button4}>{props.button4}</Button>
      </ButtonGroup>
    </Box>
  );
}
export { VariantButtonGroup };