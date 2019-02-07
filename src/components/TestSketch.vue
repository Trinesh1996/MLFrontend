<template>
<div class="container-fluid">
  <div id="renderTarget">
    <h1>{{msg}}</h1>
    <span class="y-axis">Y Axis</span>
    <span class="x-axis">X Axis</span><br />  
  </div>

<div>
 

  <!-- Modal Component -->
  <!-- <b-modal id="modal1" title="Results"> -->

    <div>
 
        <table>
                <tr>
                    <th>X</th>
                    <th>Y</th>
                </tr>
                <tr v-bind:key="vals.id" v-for="vals in values">
                    <td>{{vals.x}}</td>
                    <td>{{vals.y}}</td>
                </tr>
            </table>
      </div>

  <!-- </b-modal> -->
</div>                                                                                             

  <button class="add" @click="add">add</button>
  <button class="reset" @click="reset">Reset</button>
  <!-- <b-btn class="table" v-b-modal.modal1>See Table</b-btn> -->

  <span class="lrate">Rate <input class="lrate" v-model="learningRate" type="number"> </span>

  <Tables v-bind:values="values" />




</div>


</template>

<script>

import p5 from 'p5'
import * as tf from '@tensorflow/tfjs';

import Tables from "./tables";


export default {
  name: "TestSketch",

    data() {
      return {
        msg: "Model",
        vals_x: [],
        vals_y: [],
        values: [],
        learningRate: 0.4,


      }
    },

    components: {
      Tables
    },

    mounted() {

      let x_vals = [];
      let y_vals = []; 

      let valueX = [];
      let valueY = [];

      let m;
      let b;

      // const learningRate = 0.1;
      // Stochastic Gradient Descent
      const optimizer = tf.train.sgd(this.learningRate);

      let sketchModel = new p5(sketch => {

        sketch.setup = function () {

          sketch.createCanvas(600, 600).parent("renderTarget");

          m = tf.variable(tf.scalar(sketch.random(1)))
          b = tf.variable(tf.scalar(sketch.random(1)))
        }

        function loss(pred, labels) {
          return pred.sub(labels).square().mean();
        }


        function predict(x) {
          const tensorXS = tf.tensor1d(x);
          const ys = tensorXS.mul(m).add(b);

          return ys
        }

        sketch.mousePressed = function () {

          let x = sketch.map(sketch.mouseX, 0, sketch.width, 0, 1)
          let y = sketch.map(sketch.mouseY, 0, sketch.height, 1, 0)

          if (x > 0 && x < 1 && y > 0 && y < 1) {
            x_vals.push(x)
            y_vals.push(y)
          } 
          
          else {
            return false
          }

          let xs = x_vals.filter((res) => {
            if (valueX.includes(res) === false) {
              valueX.push(res)

              localStorage.setItem('x', valueX);
            }

          })

          let ys = y_vals.filter((res) => {
            if (valueY.includes(res) === false) {
              valueY.push(res)
              localStorage.setItem('y', valueY);
            }
          })

        }

        let X = valueX.filter((res) => {
          this.vals_x.push(res)
        })

        let Y = valueY.filter((res) => {
          this.vals_y.push(res)
        })


        sketch.draw = function () {
          sketch.background(240);
          sketch.stroke(0);
          sketch.strokeWeight(7);
          

          // Minimise the loss function

          // Tidy function to handle tensors
          tf.tidy(() => {
            if (x_vals.length > 0) {
              const ys = tf.tensor1d(y_vals)

              optimizer.minimize(function () {
                return loss(predict(x_vals), ys)
              })
            }
          })

          // Draw points on canvas
          for (let i = 0; i < x_vals.length; i++) {
            let px = sketch.map(x_vals[i], 0, 1, 0, sketch.width);
            let py = sketch.map(y_vals[i], 0, 1, sketch.height, 0)

            sketch.point(px, py)


          }

          // Draw Line of Best Fit
          const lineX = [0, 1];
          const ys = tf.tidy(() => predict(lineX));

          let lineY = ys.dataSync();
          ys.dispose();

          let x1 = sketch.map(lineX[0], 0, 1, 0, sketch.width);
          let x2 = sketch.map(lineX[1], 0, 1, 0, sketch.width);

          let y1 = sketch.map(lineY[0], 0, 1, sketch.height, 0);
          let y2 = sketch.map(lineY[1], 0, 1, sketch.height, 0);

          sketch.strokeWeight(2)
          sketch.line(x1, y1, x2, y2)

        }

      })
    },

    methods: {

      add() {
          let X = localStorage.getItem("x")

          if (this.vals_x === null) {
            return false
          } else {
            this.vals_x.push(X)
          }

          let Y = localStorage.getItem("y")
          this.vals_y.push(Y)

        
          var x = ['x'];
          let y = ['y']


          let splitX = X.split(",")
          let splitY = Y.split(",")


          var result = {};



          for (let i = 0; i < splitX.length; i++) {
            console.log("X: " + splitX[i])

            let int = parseFloat(splitX[i])
            // console.log(int)
            x.forEach((key, i) => result[key] = int)

          }

          for (let i = 0; i < splitY.length; i++) {
            console.log("Y: " + splitY[i])

            let int = parseFloat(splitY[i])
            // console.log(int)
            y.forEach((key, i) => result[key] = int)

          }


          this.values.push(result)

      // console.log(result)
          // console.log(this.values);



      },
      reset() {
        localStorage.clear();

        let resetCanvas = document.querySelector("#defaultCanvas0")
        // $('#defaultCanvas0').load(document.URL +  '#defaultCanvas0');

        //  console.log(resetCanvas)

        this.vals_x = [];
        this.vals_y = [];
        this.values = [];

        alert("Local Storage Values have been resetted")
        location.reload();
        
     
      }


    }
  }

</script>

<style scoped>
/* Buttons */
.lrate {
  margin-left: 0.5em;
}

.table {
    margin-top: 1em;
  padding: 5px;
  width: 5%;

  background-color: azure;
  color: black;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  border-radius: 5%;
  margin-left: 0.5em;
}

.add {
  margin-top: 1em;
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: azure;
  color: black;
  border-radius: 5%;
  border-style: solid;
  border-color: black;
  border-width: 1px;
}

.reset {
  margin-top: 1em;
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: azure;
  color: black;
  border-radius: 5%;
  border-style: solid;
 border-color: black;
  border-width: 1px; 
   margin-left: 0.5em;
}

/* Table */

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even){background-color: #f2f2f2}

th {
  background-color: #4CAF50;
  color: white;
}


#renderTarget {
  margin: 2em;
}

.x-axis {
  position: absolute;
    left: 48%;
    top: 82%;
}

.y-axis {
  position: absolute;
    left: 30%;
    top: 45%;
}


.model {
  margin-top: 2em;
}



h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

.x-table {
 
  width: 50%;
}

.y-table {
   float: right;
   

  width: 50%;
}
</style>
