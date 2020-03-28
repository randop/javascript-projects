const esClient = require('node-eventstore-client');
const uuid = require('uuid');

const batchSize = 256;
const nbEvents = 50000;
const MB = 1024*1024;
const adminCreds = {
    username: "admin",
    password: "changeit"
};

var streamName = "gameplay";

var connSettings = {};  // Use defaults
var esConnection = esClient.createConnection(connSettings, "tcp://192.168.186.189:1113");
esConnection.connect();

esConnection.once('connected', function (tcpEndPoint) {
    console.log('Connected to eventstore at ' + tcpEndPoint.host + ":" + tcpEndPoint.port);
    (async() => {
        console.log('before start');
      
        await onConnected();
        
        console.log('after start');
    })();
});

/*

var eventId = uuid.v4();
var eventData = {
    a : Math.random(), 
    b: uuid.v4(),
    pot: 123
};
var event = esClient.createJsonEventData(eventId, eventData, null, 'testEvent');
console.log("Appending...");
esConnection.appendToStream(streamName, esClient.expectedVersion.any, event)
    .then(onConnected)    
    .catch(function(err) {
        console.log(err);
    });
*/

    function reportResult(action, nbEvents, elapsedMs) {
        console.log(action, nbEvents, 'events took', elapsedMs, 'ms, avg', (nbEvents/(elapsedMs/1000)).toFixed(2), '/s');
        console.log('Memory usage:', rssMB(), 'MB\n');
      }

      function rssMB() {
        return (process.memoryUsage().rss / MB).toFixed(2);
      }

    async function testRead(batchSize) {
        console.log(`Test Read One Stream (batchSize = ${batchSize})...`);
        const start = Date.now();
        const promises = [];
        let eventsCount = 0;
        let result = await esConnection.readStreamEventsForward(streamName, 0, batchSize, false);

        let gameState = {
            pot: 0
        };

        result.events.map(function(item){
            const eventJson = JSON.parse(item.event.data.toString());
            gameState.pot+=eventJson.pot || 0;
            eventsCount++;
        });
        const diff = Date.now() - start;
        console.log(gameState);
        reportResult("Reading", eventsCount, diff)
      }
      
      async function onConnected() {
        try {
          await testRead(batchSize);          
        } catch (e) {
          console.log('ERROR', e);
        }
      }