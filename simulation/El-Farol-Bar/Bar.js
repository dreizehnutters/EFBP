var Bar = new cLASS({
  Name: "Bar",
  supertypeName: "oBJECT",
  properties: {
    "overcThr": { range: "NonNegativeInteger", label: "Overcrowding Threshold", shortLabel: "octhr"},
    "visitors": { range: "NonNegativeInteger", label: "Visitors", shortLabel: "vis"},
    "wasOC":{range: "Boolean", label: "wasOC", shortLabel: "woc"},
    "initOC":{range: "Boolean", label: "initOC", shortLabel: "ioc"}
  },
  
  methods:{
    "isOC": function () {
      this.wasOC = this.visitors > this.overcThr;
  		return this.wasOC;
    }
  },
});