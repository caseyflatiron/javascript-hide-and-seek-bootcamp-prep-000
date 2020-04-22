function getFirstSelector(selector) {
  const first = document.querySelector(selector);
  return first;
}

function nestedTarget(){
  const target = document.querySelector('#nested div div div.target');
  return target;
}

function deepestChild() {
  const deepest =  document.querySelector('#grand-node div div div div');
  return deepest;
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i=0; i < lis.length; i++) {
    lis[i].innerHTML = (lis[i].innerHTML + n).toString();
  }
}