import React from "react";
import { GetMergeSortAnimations } from "../sortingAlgorithms/MergeSort.js";
import { GetQuickSortAnimations } from "../sortingAlgorithms/QuickSort.js";
import { GetBubbleSortAnimations } from "../sortingAlgorithms/BubbleSort.js";
import { GetHeapSortAnimations } from "../sortingAlgorithms/HeapSort.js";
import "./SortingVisualizer.css";

// 可以通过修改这个数字来改变动画的快慢。
const ANIMATION_SPEED_MS = 5;

// 这是代表数组的横条的主颜色。
const PRIMARY_COLOR = "blue";

// 当两个横条的长度在算法过程中被对比时会变成如下颜色。
const SECONDARY_COLOR = "red";

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      num: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.resetArray();
  }

  handleChange(event) {
    const { name, value } = event.target;
    const number = parseInt(value, 10);
    this.setState({ [name]: number });
  }

  resetArray() {
    const newArray = [];
    for (let i = 0; i < this.state.num; i++) {
      newArray.push(randomIntFromInterval(5, 1000));
    }
    this.setState({ array: newArray });
  }

  mergeSort() {
    const animations = GetMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newWidth] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.width = `${newWidth / 10}%`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {
    const animations = GetQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, barTwoIdx] = animations[i - 1];
          const [barTwoNewWidth, barOneNewWidth] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.width = `${barOneNewWidth / 10}%`;
          barTwoStyle.width = `${barTwoNewWidth / 10}%`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  heapSort() {
    const animations = GetHeapSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, barTwoIdx] = animations[i - 1];
          const [barOneNewWidth, barTwoNewWidth] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.width = `${barOneNewWidth / 10}%`;
          barTwoStyle.width = `${barTwoNewWidth / 10}%`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  bubbleSort() {
    const animations = GetBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, barTwoIdx] = animations[i - 1];
          const [barTwoNewWidth, barOneNewWidth] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.width = `${barOneNewWidth / 10}%`;
          barTwoStyle.width = `${barTwoNewWidth / 10}%`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const heapSortedArray = GetHeapSortAnimations(array.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, heapSortedArray));
    }
  }

  render() {
    const { array } = this.state;

    return (
      <div>
        <div className="buttons">
            <select name="num" onChange={this.handleChange} className="select">
              <option value="0">--Selet Number of Bars--</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="150">150</option>
            </select>
            <button className="btn btn-primary btn-lg" onClick={() => this.resetArray()}>
              Generate New Array
            </button>
            <button className="btn btn-primary btn-lg" onClick={() => this.mergeSort()}>
              Merge Sort
            </button>
            <button className="btn btn-primary btn-lg" onClick={() => this.quickSort()}>
              Quick Sort
            </button>
            <button className="btn btn-primary btn-lg" onClick={() => this.heapSort()}>
              Heap Sort
            </button>
            <button className="btn btn-primary btn-lg" onClick={() => this.bubbleSort()}>
              Bubble Sort
            </button>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => this.testSortingAlgorithms()}
            >
              Test Algorithm
            </button>    
        </div>
        <div className="array-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: PRIMARY_COLOR,
                width: `${value/10}%`,
                height: `${parseFloat(100) / parseFloat(array.length) * 0.8}%`,
                margin: `${parseFloat(100) / parseFloat(array.length) * 0.1}% 0`
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}

// 来自于： https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // 包含极小值和极大值
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}
