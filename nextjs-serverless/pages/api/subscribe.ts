import { NowRequest, NowResponse } from '@vercel/node'
import { MongoClient, Db } from 'mongodb'
// Para fazer parse de uri
import url from 'url'

// Reaproveita conexão com db
let cachedDb: Db = null

async function connectToDatabase (uri: string) {
  if (cachedDb) {
    return cachedDb
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  // tira a barra e pega so o nome do db
  const dbName = url.parse(uri).pathname.substring(1)

  const db = client.db(dbName)

  cachedDb = db

  return db
}

export default async (request: NowRequest, response: NowResponse) => {
  const { email } = request.body

  const db = await connectToDatabase(process.env.MONGODB_URI)

  const collection = db.collection('subscribers')

  await collection.insertOne({
    email,
    subscribedAt: new Date()
  })

  console.log(email)

  return response.status(201).json({ ok: true })
}
