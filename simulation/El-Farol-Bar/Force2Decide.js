var Force2Decide = new cLASS({
  Name: "Force2Decide",
  shortLabel: "W",
  supertypeName: "eVENT",
  properties: {},
  methods: {
    "onEvent": function () {
      var population= cLASS["Person"].instances;
      var elFarol = cLASS["Bar"].instances[1];
      //var time = this.occTime;

      //cleanUp
      elFarol.visitors = 0;

      // let persons decide to go or not
      Object.keys(population).forEach( function ( objId ) { elFarol.visitors += population[objId].decide(elFarol.overcThr)});

      sim.stat.overcTime += elFarol.isOC();

      //console.log(window.URL.createObjectURL(new Blob([cLASS["Person"].instances[12].strategie[0].strat[2].toSource()], {type:'text/plain'})));
      
      //console.log(cLASS["Person"].instances[12].strategie[0].strat[2])
      //inform population what happend
      Object.keys(population).forEach( function ( objId ) { population[objId].updateStrategie(elFarol.visitors)});

    return [];
    }
  }
});

Force2Decide.recurrence = function () {
  return 1;
};
