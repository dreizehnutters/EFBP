var Person = new cLASS({
  Name: "Person",
  supertypeName: "oBJECT",
  properties: {
    "memorie": {range: "PositiveInteger", maxCard: sim.model.v.memorizeSize, label: "Memorysize", shortLabel: "memsize"},
    "strategie": {range: "Strategie", maxCard: sim.model.v.numOfStrats, label: "Strategies", shortLabel: "strats"},
    "prediction": {range: "PositiveInteger", label: "pred", shortLabel:"lasp"}
  },

  methods:{
    "decide": function ( overcThr ) {
      //this.prediction = Math.abs(parseInt(this.strategie[0].evaluate(this.memorie)));
      this.prediction = this.strategie[0].evaluate(this.memorie);
      if (this.prediction < overcThr) {
        sim.stat.timesPersonWent[this.id] += 1;
        return true;
        }
      else { return false }
    },
 
    "updateStrategie": function ( visitors ) {
      // delta = alpha * (actual - prediction)
      var delta = parseFloat((sim.model.v.learningRate*(visitors - this.prediction)).toPrecision(sim.model.v.decimalPoints));
      // delta = alpha * (prediction - actual)
      //var delta = parseFloat((sim.model.v.learningRate*(this.prediction - visitors)).toPrecision(sim.model.v.decimalPoints));
      var mem = this.memorie;


      //w_i  = w_i + alpha((actual*(w_i*memorie_i)/prediction) - (w_i*memorie_i))
      //this.strategie[0].strat = this.strategie[0].strat.map(function (w,index){return parseFloat((w+sim.model.v.learningRate*((visitors*(w*mem[index])/this.prediction)-(w*mem[index]))).toFixed(sim.model.v.decimalPoints))}, this);

      //w_i  = w+atan2(w_i, delta)
      this.strategie[0].strat = this.strategie[0].strat.map(function (w){return parseFloat((w-Math.atan2(w,delta)).toFixed(sim.model.v.decimalPoints))},this);

      //this.strategie[0].strat = this.strategie[0].strat.map(function (w){return parseFloat(sim.model.v.learningRate*(Math.atan2(w,delta)).toFixed(sim.model.v.decimalPoints))},this);

      // w_i = w_i - alpha * (prediction - actual) * stimulus_i
      //this.strategie[0].strat = this.strategie[0].strat.map(function (w, idx){return parseFloat((w+delta*mem[idx]).toPrecision(sim.model.v.decimalPoints))}); 
      // w_i = w_i - delta
      //this.strategie[0].strat = this.strategie[0].strat.map(function (w){return parseFloat((w-delta).toPrecision(sim.model.v.decimalPoints))});
      
      //update memorie
      this.memorie = this.memorie.slice(1);
      this.memorie.push(visitors);
    }
  },
});
