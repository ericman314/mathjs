var lazy = require('../../utils/object').lazy;

function factory (type, config, load, typed, math) {
  // Source: http://www.wikiwand.com/en/Physical_constant

  // Universal constants
  lazy(math, 'speedOfLight',         function () {return type.Unit.parse('299792458 m s^-2')});
  lazy(math, 'gravitationConstant',  function () {return type.Unit.parse('6.6738480e-11 m^3 kg^-1 s^-2')});
  lazy(math, 'planckConstant',       function () {return type.Unit.parse('6.626069311e-34 J s')});
  lazy(math, 'reducedPlanckConstant',function () {return type.Unit.parse('1.05457172647e-34 J s')});

  // Electromagnetic constants
  lazy(math, 'magneticConstant',          function () {return type.Unit.parse('1.2566370614e-6 N A^-2')});
  lazy(math, 'electricConstant',          function () {return type.Unit.parse('8.854187817e-12 F m^-1')});
  lazy(math, 'vacuumImpedance',           function () {return type.Unit.parse('376.730313461 ohm')});
  lazy(math, 'coulomb',                   function () {return type.Unit.parse('8.9875517873681764e9 N m^2 C^-2')});
  lazy(math, 'elementaryCharge',          function () {return type.Unit.parse('1.60217656535e-19 C')});
  lazy(math, 'bohrMagneton',              function () {return type.Unit.parse('9.2740096820e-24 J T^-1')});
  lazy(math, 'conductanceQuantum',        function () {return type.Unit.parse('7.748091734625e-5 S')});
  lazy(math, 'inverseConductanceQuantum', function () {return type.Unit.parse('12906.403721742 ohm')});
  lazy(math, 'magneticFluxQuantum',       function () {return type.Unit.parse('5.0507835311e-27 Wb')});
  lazy(math, 'nuclearMagneton',           function () {return type.Unit.parse('5.0507835311e-27 J T^-1')});
  lazy(math, 'klitzing',                  function () {return type.Unit.parse('25812.807443484 ohm')});
  //lazy(math, 'josephson',                 function () {return type.Unit.parse('4.8359787011e-14 Hz V^-1')});  // TODO: support for Hz needed

  // Atomic and nuclear constants
  lazy(math, 'bohrRadius',              function () {return type.Unit.parse('5.291772109217e-11 m')});
  lazy(math, 'classicalElectronRadius', function () {return type.Unit.parse('2.817940326727e-15 m')});
  lazy(math, 'electronMass',            function () {return type.Unit.parse('9.1093829140e-31 kg')});
  lazy(math, 'fermiCoupling',           function () {return type.Unit.parse('1.1663645e-5 GeV^-2')});
  lazy(math, 'fineStructure',           function () {return 7.297352569824e-3});
  lazy(math, 'hartreeEnergy',           function () {return type.Unit.parse('4.3597443419e-18 J')});
  lazy(math, 'protonMass',              function () {return type.Unit.parse('1.67262177774e-27 kg')});
  lazy(math, 'deuteronMass',            function () {return type.Unit.parse('3.3435830926e-27 kg')});
  lazy(math, 'neutronMass',             function () {return type.Unit.parse('1.6749271613e-27 kg')});
  lazy(math, 'quantumOfCirculation',    function () {return type.Unit.parse('3.636947552024e-4 m^2 s^-1')});
  lazy(math, 'rydberg',                 function () {return type.Unit.parse('10973731.56853955 m^-1')});
  lazy(math, 'thomsonCrossSection',     function () {return type.Unit.parse('6.65245873413e-29 m^2')});
  lazy(math, 'weakMixingAngle',         function () {return 0.222321});
  lazy(math, 'efimovFactor',            function () {return 22.7});

  // Physico-chemical constants
  lazy(math, 'atomicMass',          function () {return type.Unit.parse('1.66053892173e-27 kg')});
  lazy(math, 'avogadro',            function () {return type.Unit.parse('6.0221412927e23 mol^-1')});
  lazy(math, 'boltzmann',           function () {return type.Unit.parse('1.380648813e-23 J K^-1')});
  lazy(math, 'faraday',             function () {return type.Unit.parse('96485.336521 C mol^-1')});
  lazy(math, 'firstRadiation',      function () {return type.Unit.parse('3.7417715317e-16 W m^2')});
  lazy(math, 'loschmidt',           function () {return type.Unit.parse('2.686780524e25 m^-3')});
  lazy(math, 'gasConstant',         function () {return type.Unit.parse('8.314462175 J K^-1 mol^-1')});
  lazy(math, 'molarPlanckConstant', function () {return type.Unit.parse('3.990312717628e-10 J s mol^-1')});
  lazy(math, 'molarVolume',         function () {return type.Unit.parse('2.241396820e-10 m^3 mol^-1')});
  lazy(math, 'sackurTetrode',       function () {return -1.164870823});
  lazy(math, 'secondRadiation',     function () {return type.Unit.parse('1.438777013e-2 m K')});
  lazy(math, 'stefanBoltzmann',     function () {return type.Unit.parse('5.67037321e-8 W m^-2 K^-4')});
  lazy(math, 'wienDisplacement',    function () {return type.Unit.parse('2.897772126e-3 m K')});
  // lazy(math, 'spectralRadiance',   function () {return type.Unit.parse('1.19104286953e-16 W m^2 sr^-1')}); // TODO spectralRadiance

  // Adopted values
  lazy(math, 'molarMass',         function () {return type.Unit.parse('1e-3 kg mol^-1')});
  lazy(math, 'molarMassC12',      function () {return type.Unit.parse('1.2e-3 kg mol^-1')});
  lazy(math, 'gravity',           function () {return type.Unit.parse('9.80665 m s^-2')});
  // atm is defined in Unit.js

  // Natural units
  lazy(math, 'planckLength',      function () {return type.Unit.parse('1.61619997e-35 m')});
  lazy(math, 'planckMass',        function () {return type.Unit.parse('2.1765113e-8 kg')});
  lazy(math, 'planckTime',        function () {return type.Unit.parse('5.3910632e-44 s')});
  lazy(math, 'planckCharge',      function () {return type.Unit.parse('1.87554595641e-18 C')});
  lazy(math, 'planckTemperature', function () {return type.Unit.parse('1.41683385e+32 K')});

}

exports.factory = factory;
exports.lazy = false;  // no lazy loading of constants, the constants themselves are lazy when needed
exports.math = true;   // request access to the math namespace
