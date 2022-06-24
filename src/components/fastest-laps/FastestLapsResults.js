import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
    Avatar,
    Box,
    Card,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Typography
} from '@mui/material';

export const FastestLapsResults = ({ fastestLaps, ...rest }) => {
    const [selectedFastestLapIds, setSelectedFastestLapIds] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);

    const handleSelectAll = (event) => {
        let newSelectedFastestLapIds;

        if (event.target.checked) {
            newSelectedFastestLapIds = fastestLaps.map((fastestLap) => fastestLap.id);
        } else {
            newSelectedFastestLapIds = [];
        }

        setSelectedFastestLapIds(newSelectedFastestLapIds);
    };

    const handleSelectOne = (event, id) => {
        const selectedIndex = selectedFastestLapIds.indexOf(id);
        let newSelectedFastestLapIds = [];

        if (selectedIndex === -1) {
            newSelectedFastestLapIds = newSelectedFastestLapIds.concat(selectedFastestLapIds, id);
        } else if (selectedIndex === 0) {
            newSelectedFastestLapIds = newSelectedFastestLapIds.concat(selectedFastestLapIds.slice(1));
        } else if (selectedIndex === selectedFastestLapIds.length - 1) {
            newSelectedFastestLapIds = newSelectedFastestLapIds.concat(selectedFastestLapIds.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelectedFastestLapIds = newSelectedFastestLapIds.concat(
                selectedFastestLapIds.slice(0, selectedIndex),
                selectedFastestLapIds.slice(selectedIndex + 1)
            );
        }

        setSelectedFastestLapIds(newSelectedFastestLapIds);
    };

    const handleLimitChange = (event) => {
        setLimit(event.target.value);
    };

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const millisToMinutesAndSeconds = (time) => {
        return new Date(time).toISOString().slice(14, -1).split('.').join(':')
    };

    return (
        <Card {...rest}>
            <PerfectScrollbar>
                <Box sx={{ minWidth: 1050 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Session Type
                                </TableCell>
                                <TableCell>
                                    Player Name
                                </TableCell>
                                <TableCell>
                                    Sector 1 Time
                                </TableCell>
                                <TableCell>
                                    Sector 2 Time
                                </TableCell>
                                <TableCell>
                                    Sector 3 Time
                                </TableCell>
                                <TableCell>
                                    Lap Time
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {fastestLaps.slice(0, limit).map((fastestLap) => (
                                <TableRow
                                    hover
                                    key={fastestLap.id}
                                    selected={selectedFastestLapIds.indexOf(fastestLap.id) !== -1}
                                >
                                    <TableCell>
                                        {fastestLap.sessionType}
                                    </TableCell>
                                    <TableCell>
                                        {fastestLap.playerName}
                                    </TableCell>
                                    <TableCell>
                                        {millisToMinutesAndSeconds(fastestLap.lapData.sector1TimeInMS)}
                                    </TableCell>
                                    <TableCell>
                                        {millisToMinutesAndSeconds(fastestLap.lapData.sector2TimeInMS)}
                                    </TableCell>
                                    <TableCell>
                                        {millisToMinutesAndSeconds(fastestLap.lapData.sector3TimeInMS)}
                                    </TableCell>
                                    <TableCell>
                                        {millisToMinutesAndSeconds(fastestLap.lapData.lapTimeInMS)}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </PerfectScrollbar>
            <TablePagination
                component="div"
                count={fastestLaps.length}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleLimitChange}
                page={page}
                rowsPerPage={limit}
                rowsPerPageOptions={[5, 10, 25]}
            />
        </Card>
    );
};

FastestLapsResults.propTypes = {
    fastestLaps: PropTypes.array.isRequired
};
