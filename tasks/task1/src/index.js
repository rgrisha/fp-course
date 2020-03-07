
function churchMapper(n) {
    return n+1;
}

function intToChurch(n) {
  return function(f, z) {
    function churchFnRec(cnt) {
      if(cnt === 0) {
        return z;
      }
      return f(churchFnRec(cnt-1));
    }
    return churchFnRec(n);
  }
}

function succ(churchNum) {
  return function(f, z) {
    return f(churchNum(f, z));
  }
}

function add(m, n) {
  return function(f, z) {
    return m(f, n(f, z));
  }
}

module.exports = {
    churchMapper,
    intToChurch,
    succ,
    add
}
