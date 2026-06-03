var number = function(busStops){
 return busStops.reduce((sum,[personIn,personOut]) => sum += personIn - personOut ,0)
}