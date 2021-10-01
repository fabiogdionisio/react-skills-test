import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


const rows = [
  createData('Frozen yoghurt', 159, 6.0, 12, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 12, 37, 4.3),
  createData('Eclair', 262, 16.0, 12, 24, 6.0),
  createData('Cupcake', 305, 3.7, 12, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 12, 49, 3.9),
];

export default function App() {
  const { breakpoints, toggleTheme } = useTheme();
  const matches = useMediaQuery(breakpoints.up('md'));

  return <div style={{ padding: 30 }}>
    <Button sx={{ mb: 3 }} variant="contained" onClick={toggleTheme}>Toggle theme</Button>
    { matches ? <BasicTable /> : <CollapsedTable /> }
  </div>;
}

function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

function CollapsedTable() {
  return (
    <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
      <Table aria-label="simple table">
        <TableBody>
          {rows.map((row, index) => (
            <React.Fragment key={row.name}>
              <TableRow sx={{
                bgcolor: index % 2 && 'action.hover'
              }}>
                <TableCell component="th" scope="row">
                  Dessert (100g serving)
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
              </TableRow>

              <TableRow sx={{
                bgcolor: index % 2 && 'action.hover'
              }}>
                <TableCell component="th" scope="row">
                  Calories
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
              </TableRow>

              <TableRow sx={{
                bgcolor: index % 2 && 'action.hover'
              }}>
                <TableCell component="th" scope="row">
                  Fat&nbsp;(g)
                </TableCell>
                <TableCell align="right">{row.fat}</TableCell>
              </TableRow>

              <TableRow sx={{
                bgcolor: index % 2 && 'action.hover'
              }}>
                <TableCell component="th" scope="row">
                  Carbs&nbsp;(g)
                </TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
              </TableRow>

              <TableRow sx={{
                bgcolor: index % 2 && 'action.hover'
              }}>
                <TableCell component="th" scope="row">
                  Protein&nbsp;(g)
                </TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}