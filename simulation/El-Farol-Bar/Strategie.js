var Strategie = new cLASS({
  Name: "Strategie",
  supertypeName: "oBJECT",
  properties: {
    "strat": { range: "Decimal", maxCard: sim.model.v.memorizeSize, label: "a Strategie", shortLabel: "strat"}
  },
   methods:{
   		"evaluate": function( memorie ){
        // O = (w1,w2,w3)
        // M = (m1,m2,m3)
        // n = ((w1*m1 + w2*m2 + w3*m3)
        // d = (w1 + w2 + w3))
        // return n/d
        return (((this.strat.reduce(function(r,a,i){return r+a*memorie[i]},0)))/((this.strat.reduce((a, z) => a+z, 0))));
   		}
   },
});
