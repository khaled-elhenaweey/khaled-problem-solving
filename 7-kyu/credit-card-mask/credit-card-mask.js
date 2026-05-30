function maskify(cc) {
  if (cc.length > 3 ){
    return cc.slice(-4).padStart(cc.slice(0,-4).length + 4,'#')
  }
  return cc
}
​