// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const url = `http://makeup-api.herokuapp.com/api/v1/products.json`
  const respond = await fetch(url)
  if(respond.status === 404){
    res.status(404)
  }else {
    const data =await respond.json()
    res.status(200).json(data)
  }
  
}