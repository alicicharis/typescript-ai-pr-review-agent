import 'dotenv/config';
import Workflow from './workflow.js';

const main = async () => {
  try {
    const workflow = new Workflow();
    await workflow.run();
  } catch (error) {
    console.error('Error starting the application:', error);
  }
};

main();
