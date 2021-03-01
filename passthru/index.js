const core = require('@actions/core');
const github = require('@actions/github');

try {
  const theInput = core.getInput('in');
  console.log(`In: ${theInput}`);
  core.setOutput("out", theInput);
  console.log(`Out: ${theInput}`);

  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
}
catch (error) {
  core.setFailed(error.message);
}

