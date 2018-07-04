/*******************************************************
 Simulation Parameters
********************************************************/
sim.scenario.simulationEndTime = 1000;
sim.scenario.randomSeed = 42;
sim.scenario.createLog = false;
sim.config.visualize = false;
sim.config.userInteractive = false;
/*******************************************************
 Simulation Model
********************************************************/
sim.model.time = "discrete";
sim.model.name = "El-Farol-Bar Simulation";
sim.model.title = sim.model.name;
sim.model.objectTypes = ["Bar", "Person", "Strategie"];
sim.model.eventTypes = ["Force2Decide"];
sim.model.v.numOfStrats = 1;
sim.model.v.memorizeSize = 100;
sim.model.v.numOfPpl = 100;
sim.model.v.OCthreshold = 0.6;
sim.model.v.decimalPoints = 6;
sim.model.v.learningRate = 0.00005;

/*******************************************************
 Define Initial State
********************************************************/
sim.scenario.initialState.objects = {
  "1": {typeName: "Bar", 
        name:"bar",
        shortLabel:"bar",
        overcThr: parseInt(sim.model.v.numOfPpl * sim.model.v.OCthreshold ),
        visitors: 56,
        initOC: 56 >= parseInt(sim.model.v.numOfPpl * sim.model.v.OCthreshold)}
};

// Setup the initial state of the simulation scenario
sim.scenario.setupInitialState =
    function () {
      sim.stat.timesPersonWent =  {};
      var initMem = Array(sim.model.v.memorizeSize).fill().map(() => rand.uniformInt(1,sim.model.v.numOfPpl));

      for (var i = sim.model.v.numOfPpl+1; i >= 2; i--) {
        var initStart = [];
        for (var j = 0; j < sim.model.v.numOfStrats ; j++) {
          initStart.push(new Strategie({name: "Strat", 
                                        id: (200+i*sim.model.v.numOfStrats)+j,
                                        strat: Array(sim.model.v.memorizeSize).fill().map(() => parseFloat(rand.uniform(-1,1).toPrecision(sim.model.v.decimalPoints)))}))
        }
        sim.addObject(new Person({typeName: "Person", 
                                  id: i,
                                  name:"person"+(i-1),
                                  shortLabel: "per", 
                                  memorie: initMem,
                                  strategie: initStart}));
        sim.stat.timesPersonWent[i] = 0;
      }
    };

sim.scenario.initialState.events = [
  {typeName: "Force2Decide", occTime:1}
];

/*******************************************************
 Define Output Statistics Variables
 ********************************************************/
sim.model.statistics = {
  "attendanceHist": 
    {range:"Decimal",
    label:"attendance in %",
    initialValue: 0,
    showTimeSeries: true,
    computeOnlyAtEnd: false,
    expression: function () {
      return parseFloat(cLASS["Bar"].instances[1].visitors/100);
    }},

  "ocline": 
    {range:"Decimal",
    label:"OC line",
    initialValue: 0,
    showTimeSeries: true,
    computeOnlyAtEnd: false,
    expression: function () {
      return parseFloat(sim.model.v.numOfPpl * sim.model.v.OCthreshold/100);
    }},

  "maxAtt":
    {objectType: "Bar", 
    objectIdRef: 1,
    property:"visitors",  
    range:"NonNegativeInteger", 
    label:"max attendance", 
    aggregationFunction: "max"},

  "minAtr": 
    {objectType:"Bar", 
    objectIdRef: 1,
    property:"visitors",
    range:"NonNegativeInteger", 
    label:"min  attendance", 
    aggregationFunction: "min"},

  "avgAtt":
    {objectType:"Bar", 
    objectIdRef: 1,
    property:"visitors",range:"NonNegativeInteger",
    label:"avg  attendance",
    aggregationFunction: "avg"},

  "overcTime":
    {range:"Decimal",
    label:"OC proportion",
    initialValue: 0,
    showTimeSeries: false,
    computeOnlyAtEnd: true,
     expression: function () {
      console.log("attendance histogramm")
      console.log(sim.stat.timesPersonWent);
      return ((sim.stat.overcTime+cLASS["Bar"].instances[1].initOC)/sim.scenario.simulationEndTime);
    }
  }
};