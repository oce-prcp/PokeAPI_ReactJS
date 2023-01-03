import React, { useEffect, useState } from 'react';
import { MongoClient } from 'mongodb';

const App = () => {
    const [db, setDb] = useState(null);

useEffect(() => {
    const connectToDb = async () => {
    const client = new MongoClient(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
        await client.connect();
    setDb(client.db('test'));
    };
    connectToDb();
}, []);

return (
    <div>
        {db ? (
            <p>Successfully connected to the database</p>
    ) : (
        <p>Failed to connect to the database</p>
    )}
    </div>
    );
};

export default App;