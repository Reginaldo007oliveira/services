import { UserInputError } from '@vtex/api'
import { receiveMessageOnPort } from 'worker_threads'

export async function status(ctx: Context, next: () => Promise<any>) {
  const {
    vtex: {
      route: { params },
    },
  } = ctx

  console.info('Received params:', params)

  const { code } = params

  if (!code) {
    throw new UserInputError('Code is required')
  }

  const codeNumber = parseInt(code as string, 10)
  //tratamento para o erro 429
const res =  await  ctx.clients.status.getStatus(codeNumber).catch((reason)=>{reason
  return reason?.response?.data

})




  ctx.set('Cache-Control', 'no-cache no-store')
  ctx.body = res
  ctx.status = codeNumber
await next()
}
