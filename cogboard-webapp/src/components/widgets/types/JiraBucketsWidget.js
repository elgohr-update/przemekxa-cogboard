import React from 'react';
import { array } from 'prop-types';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Link from '@material-ui/core/Link';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { StyledNoItemsInfo } from '../../Widget/styled';
import { COLORS } from '../../../constants';

const checkThreshold = ({ issueCounts, errorThreshold, warningThreshold }) => {
  errorThreshold = parseInt(errorThreshold);
  warningThreshold = parseInt(warningThreshold);

  if (errorThreshold !== 0 && issueCounts >= errorThreshold) return COLORS.RED;
  else if (warningThreshold !== 0 && issueCounts >= warningThreshold)
    return COLORS.YELLOW;
};

const JiraBucketsWidget = ({ buckets }) => {
  return (
    <>
      {buckets.length > 0 ? (
        <div style={{ overflow: 'hidden' }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Bucket</TableCell>
                <TableCell>Issues</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {buckets.map(bucket => (
                <TableRow key={bucket.id}>
                  <TableCell>
                    <Link
                      href={bucket.url}
                      target="_blank"
                      style={{ color: checkThreshold(bucket) }}
                    >
                      {bucket.name}
                    </Link>
                  </TableCell>
                  <TableCell style={{ color: checkThreshold(bucket) }}>
                    {bucket.issueCounts}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <StyledNoItemsInfo>
          <InfoOutlinedIcon fontSize="large" />
          <p>Buckets List Empty</p>
        </StyledNoItemsInfo>
      )}
    </>
  );
};

JiraBucketsWidget.propTypes = {
  buckets: array
};

JiraBucketsWidget.defaultProps = {
  buckets: []
};

export default JiraBucketsWidget;
