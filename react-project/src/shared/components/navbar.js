import React from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

export class NavBarClass extends React.Component {
  render() {
    return (
      <>
      hello world
      
      </>
    )
  }
}

export function NavBar() {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <h4>
      Here is from NavBar function component 
      <Button variant="text">Text</Button>
      <NavBarClass />
      <div>
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} />
        <Checkbox {...label} disabled />
        <Checkbox {...label} disabled checked />
      </div>
    </h4>
    
  );
}