import styled from '@emotion/styled/macro';
import { getColumns } from './helpers';
import NotFound from '../NotFound';
import NoBoards from '../NoBoards';

export const StyledContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(${getColumns}, 1fr);
  grid-auto-rows: 0.5fr;
`;

const BaseNoData = component => styled(component)`
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  > div {
    padding: 0 15px;
    text-align: center;
  }
`;

export const StyledNotFound = styled(BaseNoData(NotFound))`
  background: #211f39;
  z-index: 2000;
`;

export const StyledNoBoards = BaseNoData(NoBoards);
