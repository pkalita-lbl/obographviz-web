import './style.css'

import graph from './uberon-zfa-xref-example.json'
import style from './uberon-zfa-style.json'

import { OboGraphViz } from 'obographviz'
import { Graphviz } from "@hpcc-js/wasm/graphviz"

async function run() {
  const graphviz = await Graphviz.load();

  const ogv = new OboGraphViz(graph);
  const compoundRelations = [];
  const highlight = [];
  let dot = ogv.renderDot(compoundRelations, style, highlight);
  // can this be controlled by an option of renderDot?
  dot = dot.replace(/digraph {\n/, "digraph {\nrankdir = BT\n");

  const svg = graphviz.layout(dot, "svg", "dot");
  const container = document.getElementById("svg-container");
  container.innerHTML = svg;

  // graphviz.layout produces an svg with hardcoded width and height attributes
  // remove them here to let the browser scale the svg to its container
  const svgElement = container.querySelector('svg')
  svgElement.removeAttribute("width");
  svgElement.removeAttribute("height");
}

run()
