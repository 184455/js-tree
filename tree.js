/**
 * 关于用 JS 操作树型结构数据的算法
 * 尾递归实现
 * 非递归算法
 */

/* --------------------------------- 遍历算法 ---------------------------------------- */

// 遍历树： 深度优先 先序遍历
function aa (tree) {
  if (Array.isArray(tree)) {
    tree.forEach((item) => {
      console.log(item.name);
      if (item.children && item.children.length > 0) {
        aa(item.children);
      }
    })
  }
}

// 遍历树： 深度优先 后序遍历
function bb (tree) {
  if (Array.isArray(tree)) {
    tree.forEach((item) => {
      if (item.children && item.children.length > 0) {
        bb(item.children);
      }
      console.log(item.name);
    })
  }
}

// 遍历树：广度优先 层次遍历
function cc (tree) {
  const levelArr = [];
  if (Array.isArray(tree)) {
    tree.forEach((item) => {
      console.log(item.name);
      if (item.children && item.children.length > 0) {
        levelArr.push(...item.children);
      }
    })
  }
  if (levelArr.length > 0) {
    cc(levelArr);
  }
}

/* --------------------------------- 遍历，返回指定节点 ---------------------------------------- */

/**
 * 深度优先，寻找指定的节点，先序遍历
 * 使用数组的：some 迭代方法，找到目标方便结束循环
 * @param {array} tree 源数据 
 * @param {string, number} findId 找寻依据
 * @returns {object} 找到返回整个 item 项，否则返回：null
 */
function dd (tree, findId) {
  let res = null;
  if (Array.isArray(tree)) {
    tree.some((item) => {
      console.log(item.name);
      if (item.id === findId) {
        console.log('find it.');
        res = item;
        return true;
      } else if (item.children && item.children.length > 0) {
        res = dd(item.children, findId);
      }
    })
  }
  return res;
}

/**
 * 广度优先，寻找指定的节点，层次遍历
 * @param {array} tree 源数据 
 * @param {string, number} findId 找寻依据
 * @returns {object} 找到返回整个 item 项，否则返回：null
 */
function ee (tree, findId) {
  let res = null;
  const levelArr = [];
  if (Array.isArray(tree)) {
    tree.some((item) => {
      console.log(item.name);
      if (item.id === findId) {
        console.log('find it.');
        res = item;
        return true;
      } else if (item.children && item.children.length > 0) {
        levelArr.push(...item.children);
      }
    })
  }
  if (!res && levelArr.length > 0) {
    res = ee(levelArr, findId);
  }
  return res;
}

/**
 * 深度优先，寻找指定的节点，返回路径数组
 * 使用数组的：some 迭代方法，找到目标方便结束循环
 * @param {array} tree 源数据 
 * @param {string, number} findId 找寻依据
 * @returns {object} 找到返回路径数组，否则返回：[]
 */
function ff (tree, findId) {
  let res = [];
  let funRes = [];
  if (Array.isArray(tree)) {
    tree.some((item) => {
      res.push(item.name); // 这里组织你想要返回的数据结构
      if (item.id === findId) {
        return true;
      } else if (item.children && item.children.length > 0) {
        funRes = ff(item.children, findId);
        res.push(...funRes);
      }
      // 在当前项递归完成时，根据返回数组的长度判断是否找到元素。如果没有找到，把当前路径出栈
      if (funRes.length === 0) {
        res.pop();
      }
    })
  }
  return res;
}

/* ------------------------------ 实现猜想 ---------------------------------------- */

// 将树型的数据变成数组
function breakTeeeToArray (tree, arr = []) {
  if (Array.isArray(tree)) {
    tree.forEach((item) => {
      arr.push(Object.assign({}, item, { children: null }));
      if (item.children && item.children.length > 0) {
        breakTeeeToArray(item.children, arr);
      }
    })
  }
  return arr;
}

// 将数组变成树
function arrayToTree (arr) {
  console.log(arr);
}
