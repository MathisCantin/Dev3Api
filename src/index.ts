import logger from 'jet-logger';

import EnvVars from '@src/common/EnvVars';
import server from './server';
import { connect } from 'mongoose';

const SERVER_START_MSG = ('Express server started on port: ' + 
  EnvVars.Port.toString());

connect(EnvVars.MongoDb_URI)
  .then(() => server.listen(EnvVars.Port, () => logger.info(SERVER_START_MSG)))
  .catch((err: unknown) => {
    if (err instanceof Error) {
      logger.err(err.message, true);
    } else {
      logger.err('An unknown error occurred', true);
    }
  });
