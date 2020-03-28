const uuid = require('uuid');

// Subscribe to all events on the $all stream. Catch up from the beginning, then listen for any new events as they occur.
// This could be used for subscribers which populate read models.

const client = require("node-eventstore-client")


const eventAppeared = function(stream, event){  
  if (event.originalEvent.eventStreamId=='gameplay') {
    const eventData = JSON.parse(event.originalEvent.data.toString());
    console.log( eventData.pot );
  }
  /*
  console.log(
    event.originalEvent.eventStreamId,
    event.originalEvent.eventId,
    event.originalEvent.eventType
  );
  */
};

const liveProcessingStarted = () => {
  console.log("Caught up with previously stored events. Listening for new events.")
  console.log("(To generate a test event, try running 'node store-event.js' in a separate console.)")
}

const subscriptionDropped = (subscription, reason, error) =>
  console.log(error ? error : "Subscription dropped.")

const credentials = new client.UserCredentials("admin", "changeit")

const settings = {}
const endpoint = "tcp://192.168.186.189:1113"
const connection = client.createConnection(settings, endpoint)

connection.connect().catch(err => console.log(err))

connection.once("connected", tcpEndPoint => {
  const subscription = connection.subscribeToAllFrom(
    null,
    true,
    eventAppeared,
    liveProcessingStarted,
    subscriptionDropped,
    credentials
  )
  console.log(`Connected to eventstore at ${tcpEndPoint.host}:${tcpEndPoint.port}`)
  console.log(`subscription.isSubscribedToAll: ${subscription.isSubscribedToAll}`)
})

connection.on("error", err =>
  console.log(`Error occurred on connection: ${err}`)
)

connection.on("closed", reason =>
  console.log(`Connection closed, reason: ${reason}`)
)