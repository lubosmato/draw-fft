/*!
 * The MIT License (MIT)
 * 
 * Copyright 2017 Thomas Wagenaar <wagenaartje@protonmail.com>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["neataptic"] = factory();
	else
		root["neataptic"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var Methods = {
  Activation : __webpack_require__(10),
  Mutation   : __webpack_require__(15),
  Selection  : __webpack_require__(17),
  Crossover  : __webpack_require__(13),
  Cost       : __webpack_require__(12),
  Gating     : __webpack_require__(14),
  Connection : __webpack_require__(11),
  Rate       : __webpack_require__(16)
};

// CommonJS & AMD
if (true)
{
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){ return Methods }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

// Node.js
if (typeof module !== 'undefined' && module.exports)
{
  module.exports = Methods;
}

// Browser
if (typeof window == 'object')
{
  (function(){
    var oldMethods = window['methods'];
    Methods.ninja = function(){
      window['methods'] = oldMethods;
      return Methods;
    };
  })();

  window['methods'] = Methods;
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* Export */
if (module) module.exports = Node;

/* Import */
var Connection = __webpack_require__(4);
var Methods    = __webpack_require__(1);
var Group      = __webpack_require__(5);
var Config     = __webpack_require__(3);

/* Easier variable naming */
var Activation = Methods.Activation;
var Mutation   = Methods.Mutation;

/******************************************************************************************
                                         NODE
*******************************************************************************************/

function Node(type) {
  this.bias = (type == 'input') ? 0 : Math.random() * .2 - .1;
  this.squash = Activation.LOGISTIC;
  this.type = type || 'hidden';

  this.activation = 0;
  this.state = 0;
  this.old = 0;

  this.mask = 1;

  this.connections = {
    in   : [],
    out  : [],
    gated : [],
    self : new Connection(this, this, 0)
  };

  // Data for backpropagation
  this.error = {
    responsibility: 0,
    projected: 0,
    gated: 0
  };
}

Node.prototype = {
  /**
   * Activates the node
   */
  activate: function(input){
    // Check if an input is given
    if (typeof input != 'undefined') {
      this.activation = input;
      this.derivative = 0;
      this.bias = 0;
      return this.activation;
    }

    this.old = this.state;

    // All activation sources coming from the node itself
    this.state = this.connections.self.gain * this.connections.self.weight * this.state + this.bias;

    // Activation sources coming from connections
    for(var connection in this.connections.in){
      connection = this.connections.in[connection];
      this.state += connection.from.activation * connection.weight * connection.gain;
    }

    // Squash the values received
    this.activation = this.squash(this.state) * this.mask;
    this.derivative = this.squash(this.state, true);

    // Update traces
    var nodes = [];
    var influences = [];

    for(var conn in this.connections.gated){
      conn = this.connections.gated[conn];
      var node = conn.to;

      var index = nodes.indexOf(node);
      if(index > -1){
        influences[index] += conn.weight * conn.from.activation;
      } else {
        nodes.push(node);
        influences.push(node.connections.self.gater == this ? node.old : 0);
        influences[influences.length - 1] += conn.weight * conn.from.activation;
      }
    }

    for (var connection in this.connections.in) {
      connection = this.connections.in[connection];

      // Elegibility trace
      connection.elegibility = this.connections.self.gain * this.connections.self.weight *
      connection.elegibility + connection.from.activation * connection.gain;

      // Extended trace
      for(var i = 0; i < nodes.length; i++){
        var node = nodes[i];
        var influence = influences[i];

        var index = connection.xtrace.nodes.indexOf(node);
        if(index >-1){
          connection.xtrace.values[index] = node.connections.self.gain * node.connections.self.weight *
          connection.xtrace.values[index] + this.derivative * connection.elegibility * influence;
        } else {
          // Does not exist there yet, might be through mutation
          connection.xtrace.nodes.push(node);
          connection.xtrace.values.push(this.derivative * connection.elegibility * influence);
        }
      }
    }


    // Update the gains of the gates
    for(var connection in this.connections.gated){
      this.connections.gated[connection].gain = this.activation;
    }

    return this.activation;
  },

  /**
   * Back-propagate the error, aka learn
   */
  propagate: function(rate, momentum, target) {
    // Error accumulator
    var error = 0;

    momentum = momentum || 0;

    // Output nodes get their error from the enviroment
    if (this.type == 'output'){
      this.error.responsibility = this.error.projected = target - this.activation;
    } else { // the rest of the nodes compute their error responsibilities by backpropagation
      // error responsibilities from all the connections projected from this node
      for (var connection in this.connections.out) {
        var connection = this.connections.out[connection];
        var node = connection.to;
        // Eq. 21
        error += node.error.responsibility * connection.weight * connection.gain;
      }

      // Projected error responsibility
      this.error.projected = this.derivative * error;

      // Error responsibilities from all connections gated by this neuron
      error = 0;

      for(var conn in this.connections.gated){
        conn = this.connections.gated[conn];
        var node = conn.to;
        var influence = node.connections.self.gater == this ? node.old : 0;

        influence += conn.weight * conn.from.activation;
        error += node.error.responsibility * influence;
      }

      // Gated error responsibility
      this.error.gated = this.derivative * error;

      // Error responsibility
      this.error.responsibility = this.error.projected + this.error.gated;
    }

    if(this.type == 'constant') return;

    // Learning rate
    rate = rate || .3;

    // Adjust all the node's incoming connections
    for (var connection in this.connections.in) {
      var connection = this.connections.in[connection];

      var gradient = this.error.projected * connection.elegibility;

      for(var i = 0; i < connection.xtrace.nodes.length; i++){
        var node = connection.xtrace.nodes[i];
        var value = connection.xtrace.values[i];
        gradient += node.error.responsibility * value;
      }

      var deltaWeight = rate * gradient * this.mask;

      connection.weight += deltaWeight + momentum * connection.previousDeltaWeight;

      connection.previousDeltaWeight = deltaWeight;
    }

    // Adjust bias
    this.bias += rate * this.error.responsibility;
  },

  /**
   * Creates a connection from this node to the given node
   */
   connect: function(target, weight){
     var connections = [];
     if(target instanceof Group){
       for(var i = 0; i < target.nodes.length; i++){
         var connection = new Connection(this, target.nodes[i], weight);
         target.nodes[i].connections.in.push(connection);
         this.connections.out.push(connection);
         target.connections.in.push(connection);

         connections.push(connection);
       }
     } else if(target instanceof Node){
       if(target == this){
         // Turn on the self connection by setting the weight
         if(this.connections.self.weight != 0){
           if(Config.warnings) console.warn('This connection already exists!');
         } else {
           this.connections.self.weight = weight || 1;
         }
         connections.push(this.connections.self);
       } else if (this.isProjectingTo(target)){
         throw new Error('Already projecting a connection to this node!');
       } else {
         var connection = new Connection(this, target, weight);
         target.connections.in.push(connection);
         this.connections.out.push(connection);

         connections.push(connection);
       }
     }
     return connections;
   },

  /**
   * Disconnects this node from the other node
   */
   disconnect: function(node, twosided){
     if(this == node){
       this.connections.self.weight = 0;
       return;
     }

     for(var i in this.connections.out){
       var conn = this.connections.out[i];
       if(conn.to == node){
         this.connections.out.splice(i, 1);
         var j = conn.to.connections.in.indexOf(conn);
         conn.to.connections.in.splice(j, 1);
         if(conn.gater != null) this.ungate(conn);
         break;
       }
     }

     if(twosided){
       node.disconnect(this);
     }
   },

   /**
    * Make this node gate a connection
    */
   gate: function(connections){
     if(!Array.isArray(connections)){
       connections = [connections];
     }

     for(var connection in connections){
       connection = connections[connection];

       this.connections.gated.push(connection);
       connection.gater = this;
     }
   },

 /**
  * Removes the gates from this node from the given connection(s)
  */
  ungate: function(connections){
    if(!Array.isArray(connections)){
      connections = [connections];
    }


    for(var i = connections.length - 1; i >= 0; i--){
      var connection = connections[i];

      var index = this.connections.gated.indexOf(connection);
      this.connections.gated.splice(index, 1);
      connection.gater = null;
    }
  },

  /**
   * Clear the context of the node
   */
  clear: function(){
    for (var connection in this.connections.in) {
      connection = this.connections.in[connection];

      connection.elegibility = 0;
      connection.xtrace = {
        nodes: [],
        values : []
      };
    }

    this.error.responsibility = this.error.projected = this.error.gated = 0;
    this.old = this.state = this.activation = 0;
  },

  /**
   * Mutates the node with the given method
   */
  mutate: function(method){
    if(typeof method == 'undefined'){
      throw new Error('No mutate method given!');
    } else if(!method.name in Methods.Mutation){
      throw new Error('This method does not exist!');
    }

    switch(method){
      case Mutation.MOD_ACTIVATION:
        // Can't be the same squash
        var squash = method.allowed[(method.allowed.indexOf(this.squash) + Math.floor(Math.random() * (method.allowed.length - 1)) + 1) % method.allowed.length];
        this.squash = squash;
        break;
      case Mutation.MOD_BIAS:
        var modification = Math.random() * (method.max - method.min) + method.min;
        this.bias += modification;
        break;
    }
  },

  /**
   * Checks if this node is projecting to the given node
   */
   isProjectingTo: function(node){
     for(conn in this.connections.out){
       conn = this.connections.out[conn];
       if(conn.to == node){
         return true;
       }
     }
     return false;
   },

   /**
    * Checks if the given node is projecting to this node
    */
    isProjectedBy: function(node){
      for(conn in this.connections.in){
        conn = this.connections.in[conn];
        if(conn.from == node){
          return true;
        }
      }
      return false;
    },

    /**
     * Converts the node to a json object
     */
    toJSON: function(){
      var json = {
        bias   : this.bias,
        type   : this.type,
        squash : this.squash.name,
        mask   : this.mask
      };

      return json;
    }
};

/**
 * Convert a json object to a node
 */
Node.fromJSON = function(json){
  var node = new Node();
  node.bias = json.bias;
  node.type = json.type;
  node.mask = json.mask;

  for(squash in Activation){
    if(Activation[squash].name == json.squash){
      node.squash = Activation[squash];
      break;
    }
  }

  return node;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/*******************************************************************************************
                                      CONFIG
*******************************************************************************************/

// Config
var Config =  {
  warnings: true
};

/* Export */
if (module) module.exports = Config;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* Export */
if (module) module.exports = Connection;

/******************************************************************************************
                                      CONNECTION
*******************************************************************************************/

function Connection(from, to, weight) {
  this.from = from;
  this.to = to;
  this.gain = 1;

  this.weight = (typeof weight == 'undefined') ? Math.random() * .2 - .1 : weight;

  this.gater = null;
  this.elegibility = 0;

  // For tracking momentum
  this.previousDeltaWeight = 0;

  this.xtrace = {
    nodes: [],
    values : []
  };
}

Connection.prototype = {
  /**
   * Converts the connection to a json object
   */
  toJSON : function(){
    var json = {
      weight : this.weight
    };

    return json;
  }
};


/**
 * Returns an innovation ID
 * https://en.wikipedia.org/wiki/Pairing_function (Cantor pairing function)
 */
Connection.innovationID = function(a, b) {
  return 1/2 * (a + b) * (a + b + 1) + b;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* Export */
if (module) module.exports = Group;

/* Import */
var Methods    = __webpack_require__(1);
var Connection = __webpack_require__(4);
var Node       = __webpack_require__(2);
var Config     = __webpack_require__(3);
var Layer      = __webpack_require__(6);

/* Easier variable naming */
var Activation = Methods.Activation;
var Mutation   = Methods.Mutation;

/******************************************************************************************
                                         Group
*******************************************************************************************/

function Group(size){
  this.nodes = [];
  this.connections = { in : [], out: [] , self: [] };

  for(var i = 0; i < size; i++){
    this.nodes.push(new Node());
  }
}

Group.prototype = {
  /**
   * Activates all the nodes in the group
   */
  activate: function(value){
    var values = [];

    if(typeof value != 'undefined' && value.length != this.nodes.length){
      throw new Error('Array with values should be same as the amount of nodes!');
    }

    for(var i = 0; i < this.nodes.length; i++){
      if(typeof value == 'undefined'){
        var activation = this.nodes[i].activate();
      } else {
        var activation = this.nodes[i].activate(value[i]);
      }

      values.push(activation);
    }

    return values;
  },

  /**
   * Propagates all the node in the group
   */
  propagate: function(rate, momentum, target){
    if(typeof target != 'undefined' && target.length != this.nodes.length){
      throw new Error('Array with values should be same as the amount of nodes!');
    }

    for(var i = this.nodes.length - 1; i >= 0; i--){
      if(typeof target == 'undefined'){
        this.nodes[i].propagate(rate, momentum);
      } else {
        this.nodes[i].propagate(rate, momentum, target[i]);
      }
    }
  },

  /**
   * Connects the nodes in this group to nodes in another group or just a node
   */
  connect: function(target, method, weight){
    var connections = [];
    if(target instanceof Group){
      if(typeof method == 'undefined'){
        if(this != target){
          if(Config.warnings) console.warn('No group connection specified, using ALL_TO_ALL');
          method = Methods.Connection.ALL_TO_ALL;
        } else {
          if(Config.warnings) console.warn('No group connection specified, using ONE_TO_ONE');
          method = Methods.Connection.ONE_TO_ONE;
        }
      }
      if(method == Methods.Connection.ALL_TO_ALL || method == Methods.Connection.ALL_TO_ELSE){
        for(var i = 0; i < this.nodes.length; i++){
          for(var j = 0; j < target.nodes.length; j++){
            if(method == Methods.Connection.ALL_TO_ELSE && this.nodes[i] == target.nodes[j]) continue;
            var connection = this.nodes[i].connect(target.nodes[j], weight);
            this.connections.out.push(connection[0]);
            target.connections.in.push(connection[0]);
            connections.push(connection[0]);
          }
        }
      } else if(method == Methods.Connection.ONE_TO_ONE){
        if(this.nodes.length != target.nodes.length){
          throw new Error('From and To group must be the same size!');
        }

        for(var i = 0; i < this.nodes.length; i++){
          var connection = this.nodes[i].connect(target.nodes[i], weight);
          this.connections.self.push(connection[0]);
          connections.push(connection[0]);
        }
      }
    } else if(target instanceof Layer){
      var connections = target.input(this, method, weight);
    } else if(target instanceof Node){
      for(var i = 0; i < this.nodes.length; i++){
        var connection = this.nodes[i].connect(target, weight);
        this.connections.out.push(connection[0]);
        connections.push(connection[0]);
      }
    }

    return connections;
  },

  /**
   * Make nodes from this group gate the given connection(s)
   */
  gate: function(connections, method){
    if(typeof method == 'undefined'){
      throw new Error('Please specify Gating.INPUT, Gating.OUTPUT');
    }

    if(!Array.isArray(connections)){
      connections = [connections];
    }

    var nodes1 = [];
    var nodes2 = [];

    for(var connection in connections){
      connection = connections[connection];
      if(!nodes1.includes(connection.from)) nodes1.push(connection.from);
      if(!nodes2.includes(connection.to)) nodes2.push(connection.to);
    }

    switch(method){
      case Methods.Gating.INPUT:
        for(var i = 0; i < nodes2.length; i++){
          var node = nodes2[i];
          var gater = this.nodes[i % this.nodes.length];

          for(var conn in node.connections.in){
            conn = node.connections.in[conn];
            if(connections.includes(conn)){
              gater.gate(conn);
            }
          }
        }
        break;
      case Methods.Gating.OUTPUT:
        for(var i = 0; i < nodes1.length; i++){
          var node = nodes1[i];
          var gater = this.nodes[i % this.nodes.length];

          for(var conn in node.connections.out){
            conn = node.connections.out[conn];
            if(connections.includes(conn)){
              gater.gate(conn);
            }
          }
        }
        break;
      case Methods.Gating.SELF:
        for(var i = 0; i < nodes1.length; i++){
          var node = nodes1[i];
          var gater = this.nodes[i % this.nodes.length];

          if(connections.includes(node.connections.self)){
            gater.gate(node.connections.self);
          }
        }
    }
  },

  /**
   * Sets the value of a property for every node
   */
  set: function(values){
    for(var node in this.nodes){
      if(typeof values.bias != 'undefined'){
        this.nodes[node].bias = values.bias;
      }

      this.nodes[node].squash = values.squash || this.nodes[node].squash;
      this.nodes[node].type = values.type || this.nodes[node].type;
    }
  },

  /**
   * Disconnects all nodes from this group from another given group/node
   */
  disconnect: function(target, twosided){
    twosided = twosided || false;

    // In the future, disconnect will return a connection so indexOf can be used
    if(target instanceof Group){
      for(var i = 0; i < this.nodes.length; i++){
        for(var j = 0; j < target.nodes.length; j++){
          this.nodes[i].disconnect(target.nodes[j], twosided);

          for(index in this.connections.out){
            var conn = this.connections.out[index];

            if(conn.from == this.nodes[i] && conn.to == target.nodes[j]){
              this.connections.out.splice(index, 1);
              break;
            }
          }

          if(twosided){
            for(index in this.connections.in){
              var conn = this.connections.in[index];

              if(conn.from == target.nodes[j] && conn.to == this.nodes[i]){
                this.connections.in.splice(index, 1);
                break;
              }
            }
          }
        }
      }
    } else if(target instanceof Node){
      for(var i = 0; i < this.nodes.length; i++){
        var connection = this.nodes[i].disconnect(target, twosided);

        for(index in this.connections.out){
          var conn = this.connections.out[index];

          if(conn.from == this.nodes[i] && conn.to == target){
            this.connections.out.splice(index, 1);
            break;
          }
        }

        if(twosided){
          for(index in this.connections.in){
            var conn = this.connections.in[index];

            if(conn.from == target && conn.to == this.nodes[i]){
              this.connections.in.splice(index, 1);
              break;
            }
          }
        }
      }
    }
  },

  /**
   * Clear the context of this group
   */
  clear: function(){
    for(var node in this.nodes){
      this.nodes[node].clear();
    }
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* Export */
if (module) module.exports = Layer;

/* Import */
var Methods    = __webpack_require__(1);
var Connection = __webpack_require__(4);
var Node       = __webpack_require__(2);
var Config     = __webpack_require__(3);
var Architect  = __webpack_require__(8);
var Group      = __webpack_require__(5);

/* Easier variable naming */
var Activation = Methods.Activation;
var Mutation   = Methods.Mutation;

/******************************************************************************************
                                         Group
*******************************************************************************************/

function Layer(){
  this.output = null;

  this.nodes = [];
  this.connections = { in : [], out: [] , self: [] };
}

Layer.prototype = {
  /**
   * Activates all the nodes in the group
   */
  activate: function(value){
    var values = [];

    if(typeof value != 'undefined' && value.length != this.nodes.length){
      throw new Error('Array with values should be same as the amount of nodes!');
    }

    for(var i = 0; i < this.nodes.length; i++){
      if(typeof value == 'undefined'){
        var activation = this.nodes[i].activate();
      } else {
        var activation = this.nodes[i].activate(value[i]);
      }

      values.push(activation);
    }

    return values;
  },

  /**
   * Propagates all the node in the group
   */
  propagate: function(rate, momentum, target){
    if(typeof target != 'undefined' && target.length != this.nodes.length){
      throw new Error('Array with values should be same as the amount of nodes!');
    }

    for(var i = this.nodes.length - 1; i >= 0; i--){
      if(typeof target == 'undefined'){
        this.nodes[i].propagate(rate, momentum);
      } else {
        this.nodes[i].propagate(rate, momentum, target[i]);
      }
    }
  },

  /**
   * Connects the nodes in this group to nodes in another group or just a node
   */
  connect: function(target, method, weight){
    if(target instanceof Group || target instanceof Node){
      var connections = this.output.connect(target, method, weight);
    } else if (target instanceof Layer){
      var connections = target.input(this, method, weight);
    }

    return connections;
  },

  /**
   * Make nodes from this group gate the given connection(s)
   */
  gate: function(connections, method){
    this.output.gate(connections, method);
  },

  /**
   * Sets the value of a property for every node
   */
  set: function(values){
    for(var node in this.nodes){
      node = this.nodes[node];

      if(node instanceof Node){
        if(typeof values.bias != 'undefined'){
          node.bias = values.bias;
        }

        node.squash = values.squash || node.squash;
        node.type   = values.type   || node.type;
      } else if(node instanceof Group){
        node.set(values);
      }
    }
  },

  /**
   * Disconnects all nodes from this group from another given group/node
   */
  disconnect: function(target, twosided){
    twosided = twosided || false;

    // In the future, disconnect will return a connection so indexOf can be used
    if(target instanceof Group){
      for(var i = 0; i < this.nodes.length; i++){
        for(var j = 0; j < target.nodes.length; j++){
          this.nodes[i].disconnect(target.nodes[j], twosided);

          for(index in this.connections.out){
            var conn = this.connections.out[index];

            if(conn.from == this.nodes[i] && conn.to == target.nodes[j]){
              this.connections.out.splice(index, 1);
              break;
            }
          }

          if(twosided){
            for(index in this.connections.in){
              var conn = this.connections.in[index];

              if(conn.from == target.nodes[j] && conn.to == this.nodes[i]){
                this.connections.in.splice(index, 1);
                break;
              }
            }
          }
        }
      }
    } else if(target instanceof Node){
      for(var i = 0; i < this.nodes.length; i++){
        var connection = this.nodes[i].disconnect(target, twosided);

        for(index in this.connections.out){
          var conn = this.connections.out[index];

          if(conn.from == this.nodes[i] && conn.to == target){
            this.connections.out.splice(index, 1);
            break;
          }
        }

        if(twosided){
          for(index in this.connections.in){
            var conn = this.connections.in[index];

            if(conn.from == target && conn.to == this.nodes[i]){
              this.connections.in.splice(index, 1);
              break;
            }
          }
        }
      }
    }
  },

  /**
   * Clear the context of this group
   */
  clear: function(){
    for(var node in this.nodes){
      this.nodes[node].clear();
    }
  }
}

Layer.Dense = function(size){
  // Create the layer
  var layer = new Layer();

  // Init required nodes (in activation order)
  var block = new Group(size);

  layer.nodes.push(block);
  layer.output = block;

  layer.input = function(from, method, weight){
    if(from instanceof Layer) from = from.output;
    method = method || Methods.Connection.ALL_TO_ALL;
    return from.connect(block, method, weight);
  }

  return layer;
}

Layer.LSTM = function(size){
  // Create the layer
  var layer = new Layer();

  // Init required nodes (in activation order)
  var inputGate   = new Group(size);
  var forgetGate  = new Group(size);
  var memoryCell  = new Group(size);
  var outputGate  = new Group(size);
  var outputBlock = new Group(size);

  inputGate.set({ bias:1 });
  forgetGate.set({ bias:1 });
  outputGate.set({ bias:1 });

  // Set up internal connections
  memoryCell.connect(inputGate,  Methods.Connection.ALL_TO_ALL);
  memoryCell.connect(forgetGate, Methods.Connection.ALL_TO_ALL);
  memoryCell.connect(outputGate, Methods.Connection.ALL_TO_ALL);
  var forget = memoryCell.connect(memoryCell,  Methods.Connection.ONE_TO_ONE);
  var output = memoryCell.connect(outputBlock, Methods.Connection.ALL_TO_ALL);

  // Set up gates
  forgetGate.gate(forget, Methods.Gating.SELF);
  outputGate.gate(output, Methods.Gating.OUTPUT);

  // Add to nodes array
  layer.nodes = [inputGate, forgetGate, memoryCell, outputGate, outputBlock];

  // Define output
  layer.output = outputBlock;

  layer.input = function(from, method, weight){
    if(from instanceof Layer) from = from.output;
    method = method || Methods.Connection.ALL_TO_ALL;
    var connections = [];

    var input = from.connect(memoryCell, method, weight);
    connections = connections.concat(input);

    connections = connections.concat(from.connect(inputGate,  method, weight));
    connections = connections.concat(from.connect(outputGate, method, weight));
    connections = connections.concat(from.connect(forgetGate, method, weight));

    inputGate.gate(input, Methods.Gating.INPUT);

    return connections;
  }

  return layer;
};

Layer.GRU = function(size){
  // Create the layer
  var layer = new Layer();

  var updateGate        = new Group(size);
  var inverseUpdateGate = new Group(size);
  var resetGate         = new Group(size);
  var memoryCell        = new Group(size);
  var output            = new Group(size);
  var previousOutput    = new Group(size);

  previousOutput.set({ bias: 0, squash: Methods.Activation.IDENTITY, type: 'constant'});
  memoryCell.set({ squash: Methods.Activation.TANH });
  inverseUpdateGate.set({ bias: 0, squash: Methods.Activation.INVERSE, type: 'constant'});
  updateGate.set({ bias: 1 });
  resetGate.set({ bias: 0 });

  // Update gate calculation
  previousOutput.connect(updateGate, Methods.Connection.ALL_TO_ALL);

  // Inverse update gate calculation
  updateGate.connect(inverseUpdateGate, Methods.Connection.ONE_TO_ONE, 1);

  // Reset gate calculation
  previousOutput.connect(resetGate, Methods.Connection.ALL_TO_ALL);

  // Memory calculation
  var reset = previousOutput.connect(memoryCell, Methods.Connection.ALL_TO_ALL);

  resetGate.gate(reset, Methods.Gating.OUTPUT); // gate

  // Output calculation
  var update1 = previousOutput.connect(output, Methods.Connection.ALL_TO_ALL);
  var update2 = memoryCell.connect(output, Methods.Connection.ALL_TO_ALL);

  updateGate.gate(update1, Methods.Gating.OUTPUT);
  inverseUpdateGate.gate(update2, Methods.Gating.OUTPUT);

  // Previous output calculation
  output.connect(previousOutput, Methods.Connection.ONE_TO_ONE, 1);

  // Add to nodes array
  layer.nodes = [updateGate, inverseUpdateGate, resetGate, memoryCell, output, previousOutput];

  layer.output = output;

  layer.input = function(from, method, weight){
    if(from instanceof Layer) from = from.output;
    method = method || Methods.Connection.ALL_TO_ALL;
    var connections = [];

    connections = connections.concat(from.connect(updateGate, method, weight));
    connections = connections.concat(from.connect(resetGate,  method, weight));
    connections = connections.concat(from.connect(memoryCell, method, weight));

    return connections;
  }

  return layer;
}

Layer.Memory = function(size, memory){
  // Create the layer
  var layer = new Layer();
  // Because the output can only be one group, we have to put the nodes all in óne group

  var previous = null;
  for(var i = 0; i < memory; i++){
    var block = new Group(size);

    block.set({
      squash: Methods.Activation.IDENTITY,
      bias: 0,
      type: 'constant'
    });

    if(previous != null){
      previous.connect(block, Methods.Connection.ONE_TO_ONE, 1);
    }

    layer.nodes.push(block);
    previous = block;
  }

  layer.nodes.reverse();

  for(var group in layer.nodes){
    layer.nodes[group].nodes.reverse();
  }

  // Because output can only be óne group, fit all memory nodes in óne group
  var outputGroup = new Group(0);
  for(var group in layer.nodes){
    outputGroup.nodes = outputGroup.nodes.concat(layer.nodes[group].nodes);
  }
  layer.output = outputGroup;

  layer.input = function(from, method, weight){
    if(from instanceof Layer) from = from.output;
    method = method || Methods.Connection.ALL_TO_ALL;

    if(from.nodes.length != layer.nodes[layer.nodes.length-1].nodes.length){
      throw new Error('Previous layer size must be same as memory size');
    }

    return from.connect(layer.nodes[layer.nodes.length-1], Methods.Connection.ONE_TO_ONE, 1);
  }

  return layer;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* Export */
if (module) module.exports = Network;

/* Import */
var Node       = __webpack_require__(2);
var Connection = __webpack_require__(4);
var Methods    = __webpack_require__(1);
var Config     = __webpack_require__(3);
var Neat       = __webpack_require__(9);

/* Easier variable naming */
var Activation = Methods.Activation;
var Mutation   = Methods.Mutation;

/*******************************************************************************************
                                         NETWORK
*******************************************************************************************/

function Network(input, output){
  if(typeof input == 'undefined' || typeof output == 'undefined'){
    throw new Error('No input or output size given');
  }

  this.input = input;
  this.output = output;

  // Store all the node and connection genes
  this.nodes = []; // Stored in activation order
  this.connections = [];
  this.gates = [];
  this.selfconns = [];

  // Regularization
  this.dropout = 0;

  // Create input and output nodes
  for(var i = 0; i < this.input + this.output; i++){
    var type = (i < this.input) ? 'input' : 'output';
    this.nodes.push(new Node(type, this.nodes.length));
  }

  // Connect input nodes with output nodes directly
  for(var i = 0; i < this.input; i++){
    for(var j = this.input; j < this.output + this.input; j++){
      this.connect(this.nodes[i], this.nodes[j]);
    }
  }
}

Network.prototype = {
  /**
   * Activates the network
   */
  activate: function(input, training){
    var output = [];
    // Activate nodes chronologically
    for(node in this.nodes){
      if(this.nodes[node].type == 'input'){
        this.nodes[node].activate(input[node]);
      } else if (this.nodes[node].type == 'output'){
        var activation = this.nodes[node].activate();
        output.push(activation);
      } else {
        if(training) this.nodes[node].mask = Math.random() < this.dropout ? 0 : 1;
        this.nodes[node].activate();
      }
    }
    return output;
  },

  /**
   * Backpropagate the network
   */
  propagate: function(rate, momentum, target){
    this.nodes.reverse();
    target.reverse();

    // Propagate nodes from end to start
    for(node in this.nodes){
      switch(this.nodes[node].type){
        case('hidden'):
          this.nodes[node].propagate(rate, momentum);
          break;
        case('output'):
          this.nodes[node].propagate(rate, momentum, target[node]);
          break;
      }
    }

    target.reverse();
    this.nodes.reverse();
  },

  /**
   * Clear the context of the network
   */
  clear: function(){
    for(var node in this.nodes){
      this.nodes[node].clear();
    }
  },

  /**
   * Connects the from node to the to node
   */
  connect: function(from, to){
    var connections = from.connect(to);

    for(var connection in connections){
      connection = connections[connection];
      if(from != to){
        this.connections.push(connection);
      } else {
        this.selfconns.push(connection);
      }
    }

    return connections;
  },

  /**
   * Disconnects the from node from the to node
   */
  disconnect: function(from, to){
    // Delete the connection in the network's connection array
    var connections = from == to ? this.selfconns : this.connections;

    for(conn in connections){
      var connection = connections[conn];
      if(connection.from == from && connection.to == to){
        if(connection.gater != null) this.ungate(connection);
        connections.splice(conn, 1);
        break;
      }
    }

    // Delete the connection at the sending and receiving neuron
    from.disconnect(to);
  },

  /**
   * Gate a connection with a node
   */
  gate: function(node, connection){
    if(this.nodes.indexOf(node) == -1){
      throw new Error('This node is not part of the network!');
    } else if (connection.gater != null){
      if(Config.warnings) console.warn('This connection is already gated!');
      return;
    }
    node.gate(connection);
    this.gates.push(connection);
  },

 /**
  *  Remove the gate of a connection
  */
  ungate: function(connection){
    var index = this.gates.indexOf(connection);
    if(index == -1){
      throw new Error('This connection is not gated!');
    }

    this.gates.splice(index, 1);
    connection.gater.ungate(connection);
  },

  /**
   *  Removes a node from the network
   */
  remove: function(node){
    var index = this.nodes.indexOf(node);

    if(index == -1){
      throw new Error('This node does not exist in the network!');
    }

    // Keep track of gaters
    var gaters = [];

    // Get all its inputting nodes
    var inputs = [];
    for(var i = node.connections.in.length - 1; i >= 0; i--){
      var connection = node.connections.in[i];
      if(Methods.Mutation.SUB_NODE.keep_gates && connection.gater != null && connection.gater != node){
        gaters.push(connection.gater);
      }
      inputs.push(connection.from);
      this.disconnect(connection.from, node);
    }

    // Get all its outputing nodes
    var outputs = [];
    for(var i = node.connections.out.length - 1; i >= 0; i--){
      var connection = node.connections.out[i];
      if(Methods.Mutation.SUB_NODE.keep_gates && connection.gater != null && connection.gater != node){
        gaters.push(connection.gater);
      }
      outputs.push(connection.to);
      this.disconnect(node, connection.to);
    }

    // Connect the input nodes to the output nodes (if not already connected)
    var connections = [];
    for(var input in inputs){
      input = inputs[input];
      for(var output in outputs){
        output = outputs[output];
        if(!input.isProjectingTo(output)){
          var conn = this.connect(input, output);
          connections.push(conn[0]);
        }
      }
    }

    // Gate random connections with gaters
    for(var gater in gaters){
      if(connections.length == 0) break;
      gater = gaters[gater];

      var connIndex = Math.floor(Math.random() * connections.length);
      var conn = connections[connIndex];

      this.gate(gater, connections[connIndex]);
      connections.splice(connIndex, 1);
    }

    // Remove gated connections gated by this node
    for(var i = node.connections.gated.length - 1; i >= 0 ; i--){
      var conn = node.connections.gated[i];
      this.ungate(conn);
    }

    // Remove selfconnection
    this.disconnect(node, node);

    // Remove the node from this.nodes
    this.nodes.splice(index, 1);
  },

  /**
   * Mutates the network with the given method
   */
  mutate: function(method){
    if(typeof method == 'undefined'){
      throw new Error('No (correct) mutate method given!');
    }

    switch(method){
      case Mutation.ADD_NODE:
        // Look for an existing connection and place a node in between
        var connection = this.connections[Math.floor(Math.random() * this.connections.length)];
        var gater = connection.gater;
        this.disconnect(connection.from, connection.to);

        // Insert the new node right before the old connection.to
        var toIndex = this.nodes.indexOf(connection.to);
        var node = new Node('hidden', this.nodes.length);

        // Random squash function
        node.mutate(Mutation.MOD_ACTIVATION);

        // Place it in this.nodes
        var minBound = Math.min(toIndex, this.nodes.length - this.output);
        this.nodes.splice(minBound, 0, node);

        // Now create two new connections
        var newConn1 = this.connect(connection.from, node)[0];
        var newConn2 = this.connect(node, connection.to)[0];

        // Check if the original connection was gated
        if(gater != null){
          this.gate(gater, Math.random() >= 0.5 ? newConn1 : newConn2);
        }
        break;
      case Mutation.SUB_NODE:
        // Check if there are nodes left to remove
        if(this.nodes.length == this.input + this.output){
          if(Config.warnings) console.warn('No more nodes left to remove!');
          break;
        }

        // Select a node which isn't an input or output node
        var index = Math.floor(Math.random() * (this.nodes.length - this.output - this.input) + this.input);
        this.remove(this.nodes[index]);
        break;
      case Mutation.ADD_CONN:
        // Create an array of all uncreated (feedforward) connections
        var available = [];
        for(var i = 0; i < this.nodes.length - this.output; i++){
          var node1 = this.nodes[i];
          for(var j = Math.max(i + 1, this.input); j < this.nodes.length; j++){
            var node2 = this.nodes[j];
            if(!node1.isProjectingTo(node2)) available.push([node1, node2]);
          }
        }

        if(available.length == 0){
          if(Config.warnings) console.warn('No more connections to be made!');
          break;
        }

        var pair = available[Math.floor(Math.random() * available.length)];
        this.connect(pair[0], pair[1]);
        break;
      case Mutation.SUB_CONN:
        // List of possible connections that can be removed
        var possible = [];

        for(conn in this.connections){
          conn = this.connections[conn];
          // Check if it is not disabling a node
          if(conn.from.connections.out.length > 1 && conn.to.connections.in.length > 1 && this.nodes.indexOf(conn.to) > this.nodes.indexOf(conn.from)){
            possible.push(conn);
          }
        }

        if(possible.length == 0){
          if(Config.warnings) console.warn('No connections to remove!');
          break;
        }

        var randomConn = possible[Math.floor(Math.random() * possible.length)];
        this.disconnect(randomConn.from, randomConn.to);
        break;
      case Mutation.MOD_WEIGHT:
        var connection = this.connections[Math.floor(Math.random() * this.connections.length)];
        var modification = Math.random() * (method.max - method.min) + method.min;
        connection.weight += modification;
        break;
      case Mutation.MOD_BIAS:
        // Has no effect on input node, so they are excluded
        var index = Math.floor(Math.random() * (this.nodes.length - this.input) + this.input);
        var node = this.nodes[index];
        node.mutate(method);
        break;
      case Mutation.MOD_ACTIVATION:
        // Has no effect on input node, so they are excluded
        if(!method.mutateOutput && this.input + this.output == this.nodes.length){
          if(Config.warnings) console.warn('No nodes that allow mutation of activation function');
          break;
        }

        var index = Math.floor(Math.random() * (this.nodes.length - (method.mutateOutput ? 0 : this.output) - this.input) + this.input);
        var node = this.nodes[index];

        node.mutate(method);
        break;
      case Mutation.ADD_SELF_CONN:
        // Check which nodes aren't selfconnected yet
        var possible = [];
        for(var i = this.input; i < this.nodes.length; i++){
          var node = this.nodes[i];
          if(node.connections.self.weight == 0){
            possible.push(node);
          }
        }

        if(possible.length == 0){
          if(Config.warnings) console.warn('No more self-connections to add!');
          break;
        }

        // Select a random node
        var node = possible[Math.floor(Math.random() * possible.length)];

        // Connect it to himself
        this.connect(node, node);
        break;
      case Mutation.SUB_SELF_CONN:
        if(this.selfconns.length == 0){
          if(Config.warnings) console.warn('No more self-connections to remove!');
          break;
        }
        var conn = this.selfconns[Math.floor(Math.random() * this.selfconns.length)];
        this.disconnect(conn.from, conn.to);
        break;
      case Mutation.ADD_GATE:
        var allconnections = this.connections.concat(this.selfconns);

        // Create a list of all non-gated connections
        var possible = [];
        for(var conn in allconnections){
          conn = allconnections[conn];
          if(conn.gater == null){
            possible.push(conn);
          }
        }

        if(possible.length == 0){
          if(Config.warnings) console.warn('No more connections to gate!');
          break;
        }

        // Select a random gater node and connection
        var node = this.nodes[Math.floor(Math.random() * this.nodes.length)];
        var conn = possible[Math.floor(Math.random() * possible.length)];

        // Gate the connection with the node
        this.gate(node, conn);
        break;
      case Mutation.SUB_GATE:
        // Select a random gated connection
        if(this.gates.length == 0){
          if(Config.warnings) console.warn('No more connections to ungate!');
          break;
        }

        var index = Math.floor(Math.random() * this.gates.length);
        var gatedconn = this.gates[index];

        this.ungate(gatedconn);
        break;
      case Mutation.ADD_BACK_CONN:
        // Create an array of all uncreated (backfed) connections
        var available = [];
        for(var i = this.input; i < this.nodes.length; i++){
          var node1 = this.nodes[i];
          for(var j = this.input; j < i; j++){
            var node2 = this.nodes[j];
            if(!node1.isProjectingTo(node2)) available.push([node1, node2]);
          }
        }

        if(available.length == 0){
          if(Config.warnings) console.warn('No more connections to be made!');
          break;
        }

        var pair = available[Math.floor(Math.random() * available.length)];
        this.connect(pair[0], pair[1]);
        break;
      case Mutation.SUB_BACK_CONN:
        // List of possible connections that can be removed
        var possible = [];

        for(conn in this.connections){
          conn = this.connections[conn];
          // Check if it is not disabling a node
          if(conn.from.connections.out.length > 1 && conn.to.connections.in.length > 1 && this.nodes.indexOf(conn.from) > this.nodes.indexOf(conn.to)){
            possible.push(conn);
          }
        }

        if(possible.length == 0){
          if(Config.warnings) console.warn('No connections to remove!');
          break;
        }

        var randomConn = possible[Math.floor(Math.random() * possible.length)];
        this.disconnect(randomConn.from, randomConn.to);
        break;
      case Mutation.SWAP_NODES:
        // Input nodes are excluded
        var index = Math.floor(Math.random() * (this.nodes.length - this.input) + this.input);
        var node1 = this.nodes[index];
        var index = Math.floor(Math.random() * (this.nodes.length - this.input) + this.input);
        var node2 = this.nodes[index];

        var biasTemp = node1.bias;
        var squashTemp = node1.squash;

        node1.bias = node2.bias;
        node1.squash = node2.squash;
        node2.bias = biasTemp;
        node2.squash = squashTemp;
        break;
    }
  },

  /**
   * Train the given set to this network
   */
  train: function(set, options) {
    options = options || {};

    // Warning messages
    if(typeof options.rate == 'undefined'){
      if(Config.warnings) console.warn('Using default learning rate, please define a rate!')
    }

    if(typeof options.iterations == "undefined"){
      if(Config.warnings) console.warn('No target iterations given, running until error is reached!')
    }

    var start = Date.now();

    // Configure given options
    var log           = options.log           || false;
    var targetError   = options.error         || 0.05;
    var cost          = options.cost          || Methods.Cost.MSE;
    var baseRate      = options.rate          || 0.3;
    var shuffle       = options.shuffle       || false;
    var iterations    = options.iterations    || 0;
    var crossValidate = options.crossValidate || false;
    var clear         = options.clear         || false;
    var dropout       = options.dropout       || 0;
    var momentum      = options.momentum      || 0;
    var ratePolicy    = options.ratePolicy    || Methods.Rate.FIXED();
    var schedule      = options.schedule;

    if(typeof options.iterations == 'undefined' && typeof options.error == 'undefined'){
      if(Config.warnings) console.warn('At least one of the following options must be specified: error, iterations');
    } else if(typeof options.error == 'undefined'){
      targetError = -1; // run until iterations
    }

    // Save to network
    this.dropout = dropout;

    if(crossValidate){
      var testSize = options.crossValidate.testSize;
      var testError = options.crossValidate.testError;
      var numTrain = Math.ceil((1 - testSize) * set.length);
      var trainSet = set.slice(0, numTrain);
      var testSet = set.slice(numTrain);
    }


    // Loops the training process
    var currentRate = baseRate;
    var iteration = 0;
    var error = 1;

    while (error > targetError && ( iterations == 0 || iteration < iterations)) {
      if (crossValidate && error <= testError) break;


      iteration++;

      // Update the rate
      currentRate = ratePolicy(baseRate, iteration);
      
      error = 0;

      // Checks if cross validation is enabled
      if (crossValidate) {
        this._trainSet(trainSet, currentRate, momentum, cost);
        if(clear) this.clear();
        error += this.test(testSet, cost).error;
        if(clear) this.clear();
      } else {
        error += this._trainSet(set, currentRate, momentum, cost);
        if(clear) this.clear();
        error /= set.length;
      }

      // Checks for options such as scheduled logs and shuffling
      if(shuffle){
        for (var j, x, i = set.length; i; j = Math.floor(Math.random() * i), x = set[--i], set[i] = set[j], set[j] = x);
      }

      if(log && iteration % log == 0){
        console.log('iteration', iteration, 'error', error, 'rate', currentRate);
      }

      if(schedule && iteration % schedule.iterations == 0){
        schedule.function();
      }
    }

    if(clear) this.clear();

    if(dropout){
      for(var i = 0; i < this.nodes.length; i++){
        if(this.nodes[i].type == 'hidden' || this.nodes[i].type == 'constant'){
          this.nodes[i].mask = 1 - this.dropout;
        }
      }
    }

    // Creates an object of the results
    var results = {
      error: error,
      iterations: iteration,
      time: Date.now() - start
    };

    return results;
  },

  /**
   * Performs one training epoch and returns the error
   * private function used in this.train
   */
  _trainSet: function(set, currentRate, momentum, costFunction) {
    var errorSum = 0;
    for (var train in set) {
      var input = set[train].input;
      var target = set[train].output;

      var output = this.activate(input, true);
      this.propagate(currentRate, momentum, target);

      errorSum += costFunction(target, output);
    }
    return errorSum;
  },

  /**
   * Tests a set and returns the error and elapsed time
   */
  test: function(set, cost) {
    cost = cost || Methods.Cost.MSE;
    var error = 0;
    var input, output, target;

    var start = Date.now();

    for (var test in set) {
      input = set[test].input;
      target = set[test].output;
      output = this.activate(input);
      error += cost(target, output);
    }

    error /= set.length;

    var results = {
      error: error,
      time: Date.now() - start
    };

    return results;
  },

  /**
   * Creates a json that can be used to create a graph with d3 and webcola
   */
   graph: function(width, height){
     var input = 0;
     var output = 0;

     var json = {
       nodes : [],
       links : [],
       constraints : [
         { type:"alignment", axis:"x", offsets:[] },
         { type:"alignment", axis:"y", offsets:[] }
       ]
     };

     for(index in this.nodes){
       var node = this.nodes[index];

       if(node.type == 'input'){
         if(this.input == 1){
           json.constraints[0].offsets.push({node:index, offset: 0});
         } else {
           json.constraints[0].offsets.push({node:index, offset : 0.8 * width / (this.input-1) * input++});
         }
         json.constraints[1].offsets.push({node:index, offset : 0});
       } else if (node.type == 'output'){
         if(this.output == 1){
           json.constraints[0].offsets.push({node:index, offset: 0});
         } else {
           json.constraints[0].offsets.push({node:index, offset : 0.8 * width / (this.output-1) * output++});
         }
         json.constraints[1].offsets.push({node:index, offset : -0.8 * height});
       }

       json.nodes.push({
         id: index,
         name: node.type == 'hidden' ? node.squash.name : node.type.toUpperCase(),
         activation : node.activation,
         bias: node.bias
       });
     }

     var connections = this.connections.concat(this.selfconns);
     for(connection in connections){
       connection = connections[connection];
       if(connection.gater == null){
         json.links.push({
           source : this.nodes.indexOf(connection.from),
           target : this.nodes.indexOf(connection.to),
           weight : connection.weight
         });
       } else {
         // Add a gater 'node'
         var index = json.nodes.length;
         json.nodes.push({
           id: index,
           activation: connection.gater.activation,
           name: 'GATE'
         });
         json.links.push({
           source: this.nodes.indexOf(connection.from),
           target: index,
           weight: 1/2 * connection.weight
         });
         json.links.push({
           source: index,
           target: this.nodes.indexOf(connection.to),
           weight: 1/2 * connection.weight
         });
         json.links.push({
           source: this.nodes.indexOf(connection.gater),
           target: index,
           weight: connection.gater.activation,
           gate: true
         });
       }
     }

     return json;
   },

   /**
    * Convert the network to a json object
    */
    toJSON: function(){
      var json = {
        nodes : [],
        connections : [],
        input : this.input,
        output : this.output,
        dropout: this.dropout
      };

      for(index in this.nodes){
        var node = this.nodes[index];
        var tojson = node.toJSON();
        tojson.index = index;
        json.nodes.push(tojson);

        if(node.connections.self.weight != 0){
          var tojson = node.connections.self.toJSON();
          tojson.from = index;
          tojson.to = index;

          tojson.gater = node.connections.self.gater != null ? this.nodes.indexOf(node.connections.self.gater) : null;
          json.connections.push(tojson);
        }
      }

      for(conn in this.connections){
        var conn = this.connections[conn];
        var tojson = conn.toJSON();
        tojson.from = this.nodes.indexOf(conn.from);
        tojson.to = this.nodes.indexOf(conn.to);

        tojson.gater = conn.gater != null ? this.nodes.indexOf(conn.gater) : null;

        json.connections.push(tojson);
      }


      return json;
    },

  /**
   * Sets the value of a property for every node in this network
   */
    set: function(values){
      for(var node in this.nodes){
        this.nodes[node].bias = values.bias || this.nodes[node].bias;
        this.nodes[node].squash = values.squash || this.nodes[node].squash;
      }
    },

  /**
   * Evolves the network to reach a lower error on a dataset
   */
   evolve: function(set, options){
     var cost = options.cost             || Methods.Cost.MSE;
     var amount = options.amount         || 1;
     var growth = typeof options.growth !== 'undefined' ? options.growth : 0.0001;
     var iterations = options.iterations || 0;
     var targetError = options.error     || 0.005;
     var log = options.log               || 0;
     var clear = options.clear           || false;
     var schedule = options.schedule;

     var start = Date.now();

     function fitness(genome){
       var score = 0;
       for(var i = 0; i < amount; i++){
         if(clear) genome.clear();
         score -= genome.test(set, cost).error;
       }

       score -= (genome.nodes.length + genome.connections.length + genome.gates.length) * growth;

       score = isNaN(score) ? -Infinity : score;
       return score/amount;
     }

     options.network = this;
     var neat = new Neat(0,0, fitness, options);

     var error = -Infinity;
     var bestError = -Infinity;
     var bestGenome = null;

     while(error < -targetError && (iterations == 0 || neat.generation < iterations)){
       neat.evolve();
       var fittest = neat.getFittest();

       if(clear) fittest.clear();
       error = -fittest.test(set).error - (fittest.nodes.length + fittest.connections.length + fittest.gates.length) * growth;

       if(error > bestError){
         bestError = error;
         bestGenome = fittest;
       }

       if(log && neat.generation % log == 0){
         console.log('generation', neat.generation, 'error', fittest.score, 'cost error', error);
       }

       if(schedule && iteration % schedule.iterations == 0){
         schedule.function();
       }
     }

     if(clear) bestGenome.clear();

     var results = {
       error: error,
       generations: neat.generation,
       time: Date.now() - start
     };

     this.nodes = bestGenome.nodes;
     this.connections = bestGenome.connections;
     this.gates = bestGenome.gates;
     this.selfconns = bestGenome.selfconns;

     return results;
   },
};

/**
 * Convert a json object to a network
 */
 Network.fromJSON = function(json){
   var network = new Network(json.input, json.output);
   network.dropout = json.dropout;
   network.nodes = [];
   network.connections = [];

   for(node in json.nodes){
     network.nodes.push(Node.fromJSON(json.nodes[node]));
   }

   for(conn in json.connections){
     var conn = json.connections[conn];

     var connection = network.connect(network.nodes[conn.from], network.nodes[conn.to])[0];
     connection.weight = conn.weight;

     if(conn.gater != null){
       network.gate(network.nodes[conn.gater], connection);
     }
   }

   return network;
 }

 /**
  * Merge two networks into one
  */
 Network.merge = function(network1, network2){
   // Create a copy of the networks
   network1 = Network.fromJSON(network1.toJSON());
   network2 = Network.fromJSON(network2.toJSON());

   // Check if output and input size are the same
   if(network1.output != network2.input){
     throw new Error('Output size of network1 should be the same as the input size of network2!');
   }

   // Redirect all connections from network2 input to network1 output
   for(conn in network2.connections){
     conn = network2.connections[conn];
     if(conn.from.type == 'input'){
       var index = network2.nodes.indexOf(conn.from);
       var node = network2.nodes[index];

       // redirect
       conn.from = network1.nodes[network1.nodes.length - 1 - index];
     }
   }

   // Change the node type of network1's output nodes (now hidden)
   for(var i = network1.nodes.length - 1 - network1.output; i < network1.nodes.length; i++){
     network1.nodes[i].type = 'hidden';
   }

   // Create one network of both networks
   network1.connections = network1.connections.concat(network2.connections);
   network1.nodes = network1.nodes.concat(network2.nodes);

   return network1;
 }

/**
 * Create an offspring from two parent networks
 */
 Network.crossOver = function(network1, network2, method){
   /*if(typeof method == 'undefined'){
     throw new Error('No crossover method given!');
   } else if(!method.name in Methods.Crossover){
     throw new Error('This method does not exist!');
   } else */if(network1.input != network2.input || network1.output != network2.output){
     throw new Error("Networks don't have the same input/output size!");
   }

   // Initialise offspring
   var offspring = new Network(network1.input, network1.output);
   offspring.connections = [];
   offspring.nodes = [];

   // Save scores and create a copy
   var score1 = network1.score || 0;
   var score2 = network2.score || 0;
   network1 = Network.fromJSON(network1.toJSON());
   network2 = Network.fromJSON(network2.toJSON());

   // Determine offspring node size
   if(score1 == score2){
     var max = Math.max(network1.nodes.length, network2.nodes.length);
     var min = Math.min(network1.nodes.length, network2.nodes.length);
     var size = Math.floor(Math.random() * (max - min + 1) + min);
   } else if(score1 > score2){
     var size = network1.nodes.length;
   } else {
     var size = network2.nodes.length;
   }

   // Assign nodes from parents to offspring
   for(var i = 0; i < size; i++){
     if(i < network1.nodes.length && i < network2.nodes.length){
       var node = null;
       if(i >= size-network1.output){
         while(node == null || node.type != 'output'){
           if(Math.random() >= 0.5){
             node = network1.nodes[i];
           } else {
             node = network2.nodes[i];
           }
         }
       } else {
         while(node == null || (i < size-network1.output && node.type == 'output')){
           if(Math.random() >= 0.5){
             node = network1.nodes[i];
           } else {
             node = network2.nodes[i];
           }
         }
       }

       offspring.nodes.push(node);
     } else if(i < network1.nodes.length){
       if(i >= size-network1.output){
         offspring.nodes.push(network1.nodes[network1.nodes.length - (i - (size-network1.output - 1))]);
       } else {
         offspring.nodes.push(network1.nodes[i]);
       }
     } else if(i < network2.nodes.length){
       if(i >= size-network1.output){
         offspring.nodes.push(network2.nodes[network2.nodes.length - (i - (size-network1.output - 1))]);
       } else {
         offspring.nodes.push(network2.nodes[i]);
       }
     }
   }

   // Clear the node connections, make a copy
   for(node in offspring.nodes){
     offspring.nodes[node] = Node.fromJSON(offspring.nodes[node].toJSON());
   }

   // Create arrays of connection genes
   var n1conns = {};
   var n2conns = {};

   var n1connections = network1.connections.concat(network1.selfconns);
   for(conn in n1connections){
     var conn = n1connections[conn];
     var data = {
       weight: conn.weight,
       from  : network1.nodes.indexOf(conn.from),
       to    : network1.nodes.indexOf(conn.to),
       gater : network1.nodes.indexOf(conn.gater)
     };
     if(data.to == network1.nodes.length - 1){
       if(data.from < size - 1){
         data.to = size - 1;
       } else {
         continue;
       }
     }
     var id = Connection.innovationID(data.from, data.to);
     n1conns[id] = data;
   }

   var n2connections = network2.connections.concat(network2.selfconns);
   for(conn in n2connections){
     var conn = n2connections[conn];
     var data = {
       weight: conn.weight,
       from  : network2.nodes.indexOf(conn.from),
       to    : network2.nodes.indexOf(conn.to),
       gater : network2.nodes.indexOf(conn.gater)
     };
     if(data.to == network2.nodes.length - 1){
       if(data.from < size - 1){
         data.to = size - 1;
       } else {
         continue;
       }
     }
     var id = Connection.innovationID(data.from, data.to);
     n2conns[id] = data;
   }


   // Split common conn genes from disjoint or excess conn genes
   var commongenes = {};
   for(var id in n1conns) {
     if(id in n2conns) {
       commongenes[id] = [n1conns[id], n2conns[id]];
       delete n1conns[id];
       delete n2conns[id];
     }
   }

   // Create a list of conn genes for the offspring
   var connections = [];
   for(conn in commongenes){
     var conn = Math.random() >= 0.5 ? commongenes[conn][0] : commongenes[conn][1];
     connections.push(conn);
   }

   // Now add conn genes from the fittest parent (or both)
   if(score1 == score2){
     for(conn in n1conns) connections.push(n1conns[conn]);
     for(conn in n2conns) connections.push(n2conns[conn]);
   } else if(score1 > score2){
     for(conn in n1conns) connections.push(n1conns[conn]);
   } else {
     for(conn in n2conns) connections.push(n2conns[conn]);
   }

   // Add common conn genes uniformly
   for(conn in connections){
     var connData = connections[conn];
     if(connData.to < size && connData.from < size){
       var from = offspring.nodes[connData.from];
       var to   = offspring.nodes[connData.to];
       var conn = offspring.connect(from, to)[0];

       conn.weight = connData.weight;

       if(connData.gater != -1 && connData.gater < size){
         offspring.gate(offspring.nodes[connData.gater], conn);
       }
     }
   }
   return offspring;
 }

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* Import */
var Network = __webpack_require__(7);
var Methods = __webpack_require__(1);
var Node    = __webpack_require__(2);
var Group   = __webpack_require__(5);
var Layer   = __webpack_require__(6);

/*******************************************************************************************
                                        ARCHITECT
*******************************************************************************************/

var Architect = {
  /**
   * Constructs a network from a given array of connected nodes
   */
  Construct: function(list){
    // Create a network
    var network = new Network(0, 0);

    // Transform all groups into nodes
    var nodes = [];

    for(item in list){
      if(list[item] instanceof Group){
        for(var node in list[item].nodes){
          nodes.push(list[item].nodes[node]);
        }
      } else if(list[item] instanceof Layer){
        for(var group in list[item].nodes){
          for(var node in list[item].nodes[group].nodes){
            nodes.push(list[item].nodes[group].nodes[node]);
          }
        }
      } else if(list[item] instanceof Node){
        nodes.push(list[item]);
      }
    }

    // Determine input and output nodes
    var inputs = [];
    var outputs = [];
    for(var i = nodes.length - 1; i >= 0; i--){
      if(nodes[i].type == 'output' || nodes[i].connections.out.length + nodes[i].connections.gated.length == 0){
        nodes[i].type = 'output';
        network.output++;
        outputs.push(nodes[i]);
        nodes.splice(i, 1);
      } else if(nodes[i].type == 'input' || !nodes[i].connections.in.length){
        nodes[i].type = 'input';
        network.input++;
        inputs.push(nodes[i]);
        nodes.splice(i, 1);
      }
    }

    // Input nodes are always first, output nodes are always last
    nodes = inputs.concat(nodes).concat(outputs);

    if(network.input == 0 || network.output == 0){
      throw new Error('Given nodes have no clear input/output node!');
    }

    for(var node in nodes){
      for(var conn in nodes[node].connections.out){
        network.connections.push(nodes[node].connections.out[conn]);
      }
      for(var conn in nodes[node].connections.gated){
        network.gates.push(nodes[node].connections.gated[conn]);
      }
      if(nodes[node].connections.self.weight != 0){
        network.selfconns.push(nodes[node].connections.self);
      }
    }

    network.nodes = nodes;

    return network;
  },

  /**
   * Creates a multilayer perceptron (MLP)
   */
  Perceptron: function() {
    // Convert arguments to Array
    var layers = Array.prototype.slice.call(arguments);
    if (layers.length < 3){
      throw new Error("not enough layers (minimum 3) !!");
    }

    // Create a list of nodes/groups
    var nodes = [];
    nodes.push(new Group(layers[0]));

    for(var i = 1; i < layers.length; i++){
      var layer = layers[i];
      var layer = new Group(layer);
      nodes.push(layer);
      nodes[i-1].connect(nodes[i], Methods.Connection.ALL_TO_ALL);
    }

    // Return the network
    return Architect.Construct(nodes);
  },


  /**
   * Creates a randomly connected network
   */
  Random: function(input, hidden, output, options){
    options = options || {};

    var connections      = options.connections      || hidden * 2;
    var backconnections  = options.backconnections  || 0;
    var selfconnections  = options.selfconnections  || 0;
    var gates            = options.gates            || 0;

    var network = new Network(input, output);

    for(var i = 0; i < hidden; i++){
      network.mutate(Methods.Mutation.ADD_NODE);
    }

    for(var i = 0; i < connections - hidden; i++){
      network.mutate(Methods.Mutation.ADD_CONN);
    }

    for(var i = 0; i < backconnections; i++){
      network.mutate(Methods.Mutation.ADD_BACK_CONN);
    }

    for(var i = 0; i < selfconnections; i++){
      network.mutate(Methods.Mutation.ADD_SELF_CONN);
    }

    for(var i = 0; i < gates; i++){
      network.mutate(Methods.Mutation.ADD_GATE);
    }

    return network;
  },

  /**
   * Creates a long short-term memory network
   */
  LSTM: function(){
    var args = Array.prototype.slice.call(arguments);
    if (args.length < 3){
      throw new Error("not enough layers (minimum 3) !!");
    }

    var last = args.pop();

    if(typeof last == 'number'){
      var outputLayer = new Group(last);
      last = {};
    } else {
      var outputLayer = new Group(args.pop()); // last argument
    }

    outputLayer.set({ type: 'output'});

    var options = {};
    options.memoryToMemory = last.memoryToMemory || false;
    options.outputToMemory = last.outputToMemory || false;
    options.outputToGates  = last.outputToGates  || false;
    options.inputToOutput  = last.inputToOutput == undefined ? true : last.inputToOutput;
    options.inputToDeep    = last.inputToDeep   == undefined ? true : last.inputToDeep;

    var inputLayer  = new Group(args.shift()); // first argument
    inputLayer.set({ type: 'input'});


    var blocks = args; // all the arguments in the middle

    var nodes = [];
    nodes.push(inputLayer);

    var previous = inputLayer;
    for(var i = 0; i < blocks.length; i++){
      var block = blocks[i];

      // Init required nodes (in activation order)
      var inputGate   = new Group(block);
      var forgetGate  = new Group(block);
      var memoryCell  = new Group(block);
      var outputGate  = new Group(block);
      var outputBlock = i == blocks.length-1 ? outputLayer : new Group(block);

      inputGate.set({ bias:1 });
      forgetGate.set({ bias:1 });
      outputGate.set({ bias:1 });

      // Connect the input with all the nodes
      var input = previous.connect(memoryCell, Methods.Connection.ALL_TO_ALL);
      previous.connect(inputGate,  Methods.Connection.ALL_TO_ALL);
      previous.connect(outputGate, Methods.Connection.ALL_TO_ALL);
      previous.connect(forgetGate, Methods.Connection.ALL_TO_ALL);

      // Set up internal connections
      memoryCell.connect(inputGate,  Methods.Connection.ALL_TO_ALL);
      memoryCell.connect(forgetGate, Methods.Connection.ALL_TO_ALL);
      memoryCell.connect(outputGate, Methods.Connection.ALL_TO_ALL);
      var forget = memoryCell.connect(memoryCell,  Methods.Connection.ONE_TO_ONE);
      var output = memoryCell.connect(outputBlock, Methods.Connection.ALL_TO_ALL);

      // Set up gates
      inputGate.gate(input, Methods.Gating.INPUT);
      forgetGate.gate(forget, Methods.Gating.SELF);
      outputGate.gate(output, Methods.Gating.OUTPUT);

      // Input to all memory cells
      if(options.inputToDeep && i > 0){
        var input = inputLayer.connect(memoryCell, Methods.Connection.ALL_TO_ALL);
        inputGate.gate(input, Methods.Gating.INPUT);
      }

      // Optional connections
      if(options.memoryToMemory){
        var input = memoryCell.connect(memoryCell, Methods.Connection.ALL_TO_ELSE);
        inputGate.gate(input, Methods.Gating.INPUT);
      }

      if(options.outputToMemory){
        var input = outputLayer.connect(memoryCell, Methods.Connection.ALL_TO_ALL);
        inputGate.gate(input, Methods.Gating.INPUT);
      }

      if(options.outputToGates){
        outputLayer.connect(inputGate,  Methods.Connection.ALL_TO_ALL);
        outputLayer.connect(forgetGate, Methods.Connection.ALL_TO_ALL);
        outputLayer.connect(outputGate, Methods.Connection.ALL_TO_ALL);
      }

      // Add to array
      nodes.push(inputGate);
      nodes.push(forgetGate);
      nodes.push(memoryCell);
      nodes.push(outputGate);
      if(i != blocks.length - 1) nodes.push(outputBlock);

      previous = outputBlock;
    }

    // input to output direct connection
    if(options.inputToOutput){
      inputLayer.connect(outputLayer, Methods.Connection.ALL_TO_ALL);
    }

    nodes.push(outputLayer);
    return Architect.Construct(nodes);
  },

  /**
   * Creates a gated recurrent unit network
   */
  GRU: function(){
    var args = Array.prototype.slice.call(arguments);
    if (args.length < 3){
      throw new Error("not enough layers (minimum 3) !!");
    }

    var inputLayer  = new Group(args.shift()); // first argument
    var outputLayer = new Group(args.pop()); // last argument
    var blocks = args; // all the arguments in the middle

    var nodes = [];
    nodes.push(inputLayer);

    var previous = inputLayer;
    for(var i = 0; i < blocks.length; i++){
      var layer = new Layer.GRU(blocks[i]);
      previous.connect(layer);
      previous = layer;

      nodes.push(layer);
    }

    previous.connect(outputLayer);
    nodes.push(outputLayer);

    return Architect.Construct(nodes);
  },

  /**
   * Creates a hopfield network of the given size
   */
  Hopfield: function(size){
    var input = new Group(size);
    var output = new Group(size)

    input.connect(output, Methods.Connection.ALL_TO_ALL);

    input.set({type: 'input'});
    output.set({squash: Methods.Activation.STEP, type: 'output'});

    var network = new Architect.Construct([input, output]);

    return network;
  },

  /**
   * Creates a NARX network (remember previous inputs/outputs)
   */
  NARX: function(inputSize, hiddenLayers, outputSize, previousInput, previousOutput){
    if(!Array.isArray(hiddenLayers)){
      hiddenLayers = [hiddenLayers];
    }

    var nodes = [];

    var input = new Layer.Dense(inputSize);
    var inputMemory = new Layer.Memory(inputSize, previousInput);
    var hidden = [];
    var output = new Layer.Dense(outputSize);
    var outputMemory = new Layer.Memory(outputSize, previousOutput);

    nodes.push(input);
    nodes.push(outputMemory);

    for(var i = 0; i < hiddenLayers.length; i++){
      var hiddenLayer = new Layer.Dense(hiddenLayers[i]);
      hidden.push(hiddenLayer);
      nodes.push(hiddenLayer)
      if(typeof hidden[i-1] != 'undefined'){
        hidden[i-1].connect(hiddenLayer, Methods.Connection.ALL_TO_ALL);
      }
    }

    nodes.push(inputMemory);
    nodes.push(output);


    input.connect(hidden[0], Methods.Connection.ALL_TO_ALL);
    input.connect(inputMemory, Methods.Connection.ONE_TO_ONE, 1);
    inputMemory.connect(hidden[0], Methods.Connection.ALL_TO_ALL);
    hidden[hidden.length-1].connect(output, Methods.Connection.ALL_TO_ALL);
    output.connect(outputMemory, Methods.Connection.ONE_TO_ONE, 1);
    outputMemory.connect(hidden[0], Methods.Connection.ALL_TO_ALL);

    input.set({ type: 'input' });
    output.set({ type: 'output' });

    return Architect.Construct(nodes);
  }
}

/* Export */
if (module) module.exports = Architect;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* Export */
if (module) module.exports = Neat;

/* Import */
var Node = __webpack_require__(2);
var Network = __webpack_require__(7);
var Methods = __webpack_require__(1);

/* Easier variable naming */
var Activation = Methods.Activation;
var Mutation   = Methods.Mutation;
var Selection  = Methods.Selection;
var Crossover  = Methods.Crossover;

/*******************************************************************************************
                                         NEAT
*******************************************************************************************/

function Neat(input, output, fitness, options){
  this.input   = input;   // The input size of the networks
  this.output  = output;  // The output size of the networks
  this.fitness = fitness; // The fitness function to evaluate the networks

  // Configure options
  options = options || {};
  this.equal          = options.equal          || false;
  this.popsize        = options.popsize        || 50;
  this.elitism        = options.elitism        || 0;
  this.mutationRate   = options.mutationRate   || 0.3;
  this.mutationAmount = options.mutationAmount || 1;

  this.selection      = options.selection ||  Methods.Selection.POWER;
  this.crossover      = options.crossover || [Methods.Crossover.SINGLE_POINT,
                                              Methods.Crossover.TWO_POINT,
                                              Methods.Crossover.UNIFORM,
                                              Methods.Crossover.AVERAGE];
  this.mutation       = options.mutation  || [Methods.Mutation.ADD_CONN,
                                              Methods.Mutation.SUB_CONN,
                                              Methods.Mutation.ADD_NODE,
                                              Methods.Mutation.SUB_NODE,
                                              Methods.Mutation.MOD_BIAS,
                                              Methods.Mutation.MOD_WEIGHT,
                                              Methods.Mutation.MOD_ACTIVATION];

  // Generation counter
  this.generation = 0;

  // Initialise the genomes
  this.createPool(options.network || new Network(this.input, this.output));
}

Neat.prototype = {
  /**
   * Create the initial pool of genomes
   */
  createPool: function(network){
    this.population = [];

    for(var i = 0; i < this.popsize; i++){
      var copy = Network.fromJSON(network.toJSON());
      copy.score = null;
      this.population.push(copy);
    }
  },

  /**
   * Evaluates, selects, breeds and mutates population
   */
  evolve: function(){
    // Check if evaluated, sort the population
    if(this.population[this.population.length-1].score == null){
      this.evaluate();
    }
    this.sort();

    var newPopulation = [];

    // Elitism
    for(var i = 0; i < this.elitism; i++){
      newPopulation.push(this.population[i]);
    }

    // Breed the next individuals
    for(var i = 0; i < this.popsize - this.elitism; i++){
      newPopulation.push(this.getOffspring());
    }

    // Replace the old population with the new population
    this.population = newPopulation;
    this.mutate();

    // Reset the scores
    for(var i = 0; i < this.population.length; i++){
      this.population[i].score = null;
    }

    this.generation++;
  },

  /**
   * Breeds two parents into an offspring, population MUST be surted
   */
   getOffspring: function(){
     parent1 = this.getParent();
     parent2 = this.getParent();

     if(this.equal == true){
       parent1.score = 0;
       parent2.score = 0;
     }

     var crossoverMethod = this.crossover[Math.floor(Math.random()*this.crossover.length)];
     return Network.crossOver(parent1, parent2, crossoverMethod);
   },

  /**
   * Mutates the given (or current) population
   */
  mutate: function(){
    for(genome in this.population){
      if(Math.random() <= this.mutationRate){
        for(var i = 0; i < this.mutationAmount; i++){
          var mutationMethod = this.mutation[Math.floor(Math.random() * this.mutation.length)];
          this.population[genome].mutate(mutationMethod);
        }
      }
    }
  },

  /**
   * Evaluates the current population
   */
  evaluate: function(){
    for(genome in this.population){
      var score = this.fitness(this.population[genome]);
      this.population[genome].score = score;
    }
  },

  /**
   * Sorts the population by score
   */
  sort: function(){
    this.population.sort(function(a,b){
      return b.score - a.score;
    });
  },

  /**
   * Returns the fittest genome of the current population
   */
  getFittest: function(){
    // Check if evaluated
    if(this.population[this.population.length-1].score == null){
      this.evaluate();
    }

    this.sort();
    return this.population[0];
  },

  /**
   * Returns the average fitness of the current population
   */
   getAverage: function(){
     if(this.population[this.population.length-1].score == null){
       this.evaluate();
     }

     var score = 0;
     for(genome in this.population){
       score += this.population[genome].score;
     }

     return score / this.popsize;
   },

  /**
   * Gets a genome based on the selection function
   * @return {Network} genome
   */
  getParent: function(){
    switch(this.selection){
      case Selection.POWER:
        if(this.population[0].score < this.population[1].score) this.sort();

        var index = Math.floor(Math.pow(Math.random(), this.selection.power) * this.popsize);
        return this.population[index];
        break;
      case Selection.FITNESS_PROPORTIONATE:
        // As negative fitnesses are possible
        // https://stackoverflow.com/questions/16186686/genetic-algorithm-handling-negative-fitness-values

        var totalFitness = 0;
        var minimalFitness = 0;
        for(var genome in this.population){
          var score = this.population[genome].score;
          minimalFitness = score < minimalFitness ? score : minimalFitness;
          totalFitness += score
        }

        minimalFitness = Math.abs(minimalFitness);
        totalFitness += minimalFitness * this.popsize;

        var random = Math.random() * totalFitness
        var value = 0;

        for(var genome in this.population){
          genome = this.population[genome];
          value += genome.score + minimalFitness;
          if(random < value) return genome;
        }

        // if all scores equal, return random genome
        return this.population[Math.floor(Math.random() * this.population.length)];
        break;
      case Selection.TOURNAMENT:
        if(this.selection.size > this.popsize){
          throw new Error('Your tournament size should be lower than the population size, please change Methods.Selection.TOURNAMENT.size');
        }

        // Create a tournament
        var individuals = [];
        for(var i = 0; i < this.selection.size; i++){
          var random = this.population[Math.floor(Math.random() * this.population.length)];
          individuals.push(random);
        }

        // Sort the tournament individuals by score
        individuals.sort(function(a,b){
          return b.score - a.score;
        });

        // Select an individual
        for(var i = 0; i < this.selection.size; i++){
          if(Math.random() < this.selection.probability || i == this.selection.size - 1){
            return individuals[i];

          }
        }
    }
  },

  /**
   * Export the current population to a json object
   */
  export: function(){
    var json = [];
    for(var genome in this.population){
      genome = this.population[genome];
      json.push(genome.toJSON());
    }

    return json;
  },

  /**
   * Import population from a json object
   */
  import: function(json){
    var population = [];
    for(var genome in json){
      genome = json[genome];
      population.push(Network.fromJSON(genome));
    }
    this.population = population;
    this.popsize = population.length;
  }
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/*******************************************************************************************
                                  ACTIVATION FUNCTIONS
*******************************************************************************************/

// https://en.wikipedia.org/wiki/Activation_function
// https://stats.stackexchange.com/questions/115258/comprehensive-list-of-activation-functions-in-neural-networks-with-pros-cons
var Activation = {
  LOGISTIC : function(x, derivate){
    if (!derivate)
      return 1 / (1 + Math.exp(-x));
    var fx = Activation.LOGISTIC(x);
    return fx * (1 - fx);
  },
  TANH : function(x, derivate){
    if (derivate)
      return 1 - Math.pow(Activation.TANH(x), 2);
    return Math.tanh(x);
  },
  IDENTITY : function(x, derivate){
    return derivate ? 1 : x;
  },
  STEP : function(x, derivate){
    return derivate ? 0 : x > 0 ? 1 : 0;
  },
  RELU : function(x, derivate){
    if (derivate)
      return x > 0 ? 1 : 0;
    return x > 0 ? x : 0;
  },
  SOFTSIGN : function(x, derivate){
    var d = 1 + Math.abs(x);
    if(derivate)
      return x / Math.pow(d, 2);
    return x / d;
  },
  SINUSOID : function(x, derivate){
    if(derivate)
      return Math.cos(x);
    return Math.sin(x);
  },
  GAUSSIAN : function(x, derivate){
    var d = Math.exp(-Math.pow(x, 2));
    if(derivate)
      return -2 * x * d;
    return d;
  },
  BENT_IDENTITY: function(x, derivate){
    var d = Math.sqrt(Math.pow(x, 2) + 1);
    if(derivate)
      return x / (2 * d) + 1;
    return (d - 1) / 2 + x;
  },
  BIPOLAR : function(x, derivate){
    return derivate ? 0 : x > 0 ? 1 : -1;
  },
  BIPOLAR_SIGMOID : function(x, derivate){
    var d = 2 / (1 + Math.exp(-x)) - 1;
    if(derivate)
      return 1/2 * (1 + d) * (1 - d);
    return d;
  },
  HARD_TANH : function(x, derivate){
    if(derivate)
      return x > -1 && x < 1 ? 1 : 0;
    return Math.max(-1, Math.min(1, x));
  },
  ABSOLUTE : function(x, derivate){
    if(derivate)
      return x < 0 ? -1 : 1;
    return Math.abs(x);
  },
  INVERSE : function(x, derivate){
    if(derivate)
      return -1;
    return 1 - x;
  }
};

/* Export */
if (module) module.exports = Activation;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/*******************************************************************************************
                                    CONNECTION
*******************************************************************************************/

// Specifies in what manner two groups are connected
var Connection = {
  ALL_TO_ALL : {
    name : "OUTPUT"
  },
  ALL_TO_ELSE : {
    name : "INPUT"
  },
  ONE_TO_ONE : {
    name: "SELF"
  }
};

/* Export */
if (module) module.exports = Connection;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/*******************************************************************************************
                                    COST FUNCTIONS
*******************************************************************************************/

// https://en.wikipedia.org/wiki/Loss_function
var Cost = {
  // Cross entropy error
  CROSS_ENTROPY: function(target, output){
    var error = 0;
    for(var i in output){
      // Avoid negative and zero numbers, use 1e-15 http://bit.ly/2p5W29A
      error -= target[i] * Math.log(Math.max(output[i],1e-15)) + (1-target[i]) * Math.log(1 - Math.max(output[i],1e-15));
    }
    return error;
  },
  // Mean Squared Error
  MSE: function(target, output){
    var error = 0;
    for(var i in output){
      error += Math.pow(target[i] - output[i], 2);
    }

    return error / output.length;
  },
  // Binary error
  BINARY: function(target, output){
    var misses = 0;
    for(var i in output){
      misses += Math.round(target[i] * 2) != Math.round(output[i] * 2);
    }

    return misses;
  },
  // Mean Absolute Error
  MAE: function(target, output){
    var error = 0;
    for(var i in output){
      error += Math.abs(target[i] - output[i]);
    }

    return error / output.length;
  },
  // Mean Absolute Percentage Error
  MAPE: function(target, output){
    var error = 0;
    for(var i in output){
      error += Math.abs((output[i] - target[i]) / Math.max(target[i], 1e-15));
    }

    return error / output.length;
  },
  // Mean Squared Logarithmic Error
  MSLE: function(target, output){
    var error = 0;
    for(var i in output){
      error += Math.log(Math.max(target[i], 1e-15)) - Math.log(Math.max(output[i], 1e-15));
    }

    return error;
  },
  // Hinge loss, for classifiers
  HINGE: function(target, output){
    var error = 0;
    for(var i in output){
      error += Math.max(0, 1 - target[i] * output[i]);
    }

    return error;
  }
};

/* Export */
if (module) module.exports = Cost;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/*******************************************************************************************
                                      CROSSOVER
*******************************************************************************************/

// https://en.wikipedia.org/wiki/Crossover_(genetic_algorithm)
var Crossover =  {
  SINGLE_POINT: {
    name: "SINGLE_POINT",
    config: [0.4]
  },
  TWO_POINT: {
    name: "TWO_POINT",
    config: [0.4, 0.9]
  },
  UNIFORM: {
    name: "UNIFORM"
  },
  AVERAGE: {
    name: "AVERAGE"
  }
};

/* Export */
if (module) module.exports = Crossover;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/*******************************************************************************************
                                    GATING
*******************************************************************************************/

// Specifies how to gate a connection between two groups of multiple neurons
var Gating = {
  OUTPUT : { // not yet implemented
    name : "OUTPUT"
  },
  INPUT : { // not yet implemented
    name : "INPUT"
  },
  SELF : {
    name: "SELF"
  }
};

/* Export */
if (module) module.exports = Gating;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* Import */
var Activation = __webpack_require__(10);

/*******************************************************************************************
                                      MUTATION
*******************************************************************************************/

//https://en.wikipedia.org/wiki/Mutation_(genetic_algorithm)
var Mutation = {
  ADD_NODE : {
    name : "ADD_NODE"
  },
  SUB_NODE : {
    name : "SUB_NODE",
    keep_gates: true
  },
  ADD_CONN : {
    name : "ADD_CONN"
  },
  SUB_CONN : {
    name : "REMOVE_CONN"
  },
  MOD_WEIGHT : {
    name: "MOD_WEIGHT",
    min: -1,
    max: 1
  },
  MOD_BIAS : {
    name: "MOD_BIAS",
    min: -1,
    max: 1
  },
  MOD_ACTIVATION : {
    name : "MOD_ACTIVATION",
    mutateOutput: true,
    allowed : [
      Activation.LOGISTIC,
      Activation.TANH,
      Activation.RELU,
      Activation.IDENTITY,
      Activation.STEP,
      Activation.SOFTSIGN,
      Activation.SINUSOID,
      Activation.GAUSSIAN,
      Activation.BENT_IDENTITY,
      Activation.BIPOLAR,
      Activation.BIPOLAR_SIGMOID,
      Activation.HARD_TANH,
      Activation.ABSOLUTE
    ]
  },
  ADD_SELF_CONN : {
    name: "ADD_SELF_CONN"
  },
  SUB_SELF_CONN : {
    name: "SUB_SELF_CONN"
  },
  ADD_GATE : {
    name: "ADD_GATE"
  },
  SUB_GATE : {
    name: "SUB_GATE"
  },
  ADD_BACK_CONN : {
    name: "ADD_BACK_CONN"
  },
  SUB_BACK_CONN : {
    name: "SUB_BACK_CONN"
  },
  SWAP_NODES : {
    name: "SWAP_NODES"
  }
};

Mutation.ALL = [
  Mutation.ADD_NODE,
  Mutation.SUB_NODE,
  Mutation.ADD_CONN,
  Mutation.SUB_CONN,
  Mutation.MOD_WEIGHT,
  Mutation.MOD_BIAS,
  Mutation.MOD_ACTIVATION,
  Mutation.ADD_GATE,
  Mutation.SUB_GATE,
  Mutation.ADD_SELF_CONN,
  Mutation.SUB_SELF_CONN,
  Mutation.ADD_BACK_CONN,
  Mutation.SUB_BACK_CONN
];

Mutation.FFW = [
  Mutation.ADD_NODE,
  Mutation.SUB_NODE,
  Mutation.ADD_CONN,
  Mutation.SUB_CONN,
  Mutation.MOD_WEIGHT,
  Mutation.MOD_BIAS,
  Mutation.MOD_ACTIVATION
];

/* Export */
if (module) module.exports = Mutation;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/*******************************************************************************************
                                      RATE
*******************************************************************************************/

// https://stackoverflow.com/questions/30033096/what-is-lr-policy-in-caffe/30045244
var Rate =  {
  FIXED : function(){
    var func = function(baseRate, iteration){ return baseRate };
    return func;
  },
  STEP : function(gamma, stepSize){
    gamma    = gamma    || 0.9;
    stepSize = stepSize || 100;

    var func = function(baseRate, iteration){
      return baseRate * Math.pow(gamma, Math.floor(iteration / stepSize));
    };

    return func;
  },
  EXP : function(gamma){
    gamma = gamma || 0.999;

    var func = function(baseRate, iteration){
      return baseRate * Math.pow(gamma, iteration);
    }

    return func;
  },
  INV : function(gamma, power){
    gamma = gamma || 0.001;
    power = power || 2;

    var func = function(baseRate, iteration){
      return baseRate * Math.pow(1 + gamma * iteration, -power);
    }

    return func;
  }
};

/* Export */
if (module) module.exports = Rate;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/*******************************************************************************************
                                      SELECTION
*******************************************************************************************/

// https://en.wikipedia.org/wiki/Selection_(genetic_algorithm)

var Selection = {
  FITNESS_PROPORTIONATE: {
    name: "FITNESS_PROPORTIONATE"
  },
  POWER: {
    name: "POWER",
    power: 4
  },
  TOURNAMENT: {
    name: "TOURNAMENT",
    size: 5,
    probability: 0.5
  }
};

/* Export */
if (module) module.exports = Selection;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var Neataptic = {
  Node       : __webpack_require__(2),
  Neat       : __webpack_require__(9),
  Network    : __webpack_require__(7),
  Methods    : __webpack_require__(1),
  Architect  : __webpack_require__(8),
  Group      : __webpack_require__(5),
  Connection : __webpack_require__(4),
  Config     : __webpack_require__(3),
  Layer      : __webpack_require__(6)
};

// CommonJS & AMD
if (true)
{
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){ return Neataptic }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

// Node.js
if (typeof module !== 'undefined' && module.exports)
{
  module.exports = Neataptic;
}

// Browser
if (typeof window == 'object')
{
  (function(){
    var old = window['neataptic'];
    Neataptic.ninja = function(){
      window['neataptic'] = old;
      return Neataptic;
    };
  })();

  window['neataptic'] = Neataptic;
}


/***/ })
/******/ ]);
});