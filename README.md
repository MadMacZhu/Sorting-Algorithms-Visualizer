## 项目简介

本项目的灵感主要来自于：1. 在校时曾经学过的数据结构与算法课程；2. 出现在2014年的一篇很有影响力的文章《[算法的视觉化](https://bost.ocks.org/mike/algorithms/)》。这个网页应用的后端架构是用JavaScript完成的，主要使用了（高维）序列这个数据结构实现了4种常用的排序算法：归并排序、快速排序、冒泡排序、堆排序。前端布局是建立在[Bootstrap](https://getbootstrap.com/)的模板之上，当然也外加了不少自己编写的HTML5和CSS3的语句，如实现序列种元素的蓝色条形柱是用CSS3编写的。

## 算法简介

**`归并排序`**（Merge Sort）：时间复杂度O(nlogn), 具体介绍见[这里](https://www.cnblogs.com/DSNFZ/articles/7745785.html)。

**`快速排序`**（Quick Sort）: 最好时间复杂度O(nlogn), 最差时间复杂度O(n^2), 具体介绍见[这里](https://dracarys.github.io/2019/08/20/Algorithm-club-quicksort/)。

**`冒泡排序`**（Bubble Sort）: 最好时间复杂度O(n), 但平均时间复杂度O(n^2), 是相对较慢的一个算法，具体介绍见[这里](https://my.oschina.net/u/2312175/blog/668283)。

**`堆排序`** （Heap Sort）：时间复杂度O(nlogn), 具体介绍见[这里](https://blog.csdn.net/xiajun07061225/article/details/7602979)。

## 操作方法：

**步骤1**：点击下拉菜单选取数组中数字的数目。

<img display="block" margin="auto" title="Step1" alt="Step1" width="800px" src="https://github.com/MadMacZhu/Sorting-Algorithms-Visualizer/blob/master/public/step1.png" />

**步骤2**：点击“Generate New Array”生词数组对应的横柱。

<img display="block" margin="auto" title="Step2" alt="Step2" width="800px" src="https://github.com/MadMacZhu/Sorting-Algorithms-Visualizer/blob/master/public/step2.png" />

**步骤3**： 点击要实现视觉化的算法。

<img display="block" margin="auto" title="Step3" alt="Step3" width="800px" src="https://github.com/MadMacZhu/Sorting-Algorithms-Visualizer/blob/master/public/step3.png" />

## 附注：

这个项目是使用了 [Create React App](https://github.com/facebook/create-react-app) 的网络框架实现的。
