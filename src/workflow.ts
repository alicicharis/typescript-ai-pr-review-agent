class Workflow {
  public async run() {
    try {
      console.log('Running the workflow...');
    } catch (error) {
      console.error('Error running the workflow:', error);
    }
  }
}

export default Workflow;
