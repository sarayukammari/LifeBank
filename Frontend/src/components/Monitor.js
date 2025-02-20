import React from 'react';

const Monitor = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
      <div>
        <iframe
          width="450"
          height="260"
          style={{ border: '1px solid #cccccc' }}
          src="https://thingspeak.com/channels/2646050/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
          title="Temperature Chart"
        >
        </iframe>
        <iframe
          width="450"
          height="260"
          style={{ border: '1px solid #cccccc' }}
          src="https://thingspeak.com/channels/2646050/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
          title="Humidity Chart"
        ></iframe>
      </div>
    </div>
  );
};

export default Monitor;
