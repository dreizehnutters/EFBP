self.importScripts("../framework/simulation-worker-core.js");
self.importScripts("simulation.js");

if (sim.model.objectTypes) {
  sim.model.objectTypes.forEach( function (objT) {
    self.importScripts( objT + ".js");
  });
}
if (sim.model.eventTypes) {
  sim.model.eventTypes.forEach( function (evtT) {
    self.importScripts( evtT + ".js");
  });
}
if (sim.model.activityTypes) {
  sim.model.activityTypes.forEach( function (actT) {
    self.importScripts( actT + ".js");
  });
}

//=================================================================

sim.initializeSimulator();
onmessage = function (e) {
  if (e.data.runExperiment) sim.runExperiment();
  else {
    if (e.data.endTime) sim.scenario.simulationEndTime = e.data.endTime;
    sim.runScenario( true);  // run in worker thread
  }
}
