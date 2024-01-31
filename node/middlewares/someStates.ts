const axios = require('axios')

const baseUrl = 'https://todddesantis.vtexcommercestable.com.br'
const apiKey = 'vtexappkey-todddesantis-CDHQNI'
const token = 'XNVUPLICXFGSACGQPHHHHZGMTCXQBYCVLWMVWPHVTDDFKEZVTBQBIWAQSRQMTYTKYGOGBACDRLLTBEQDGZOOGEEPRUAGJCVSFEUUVMIYEYKXHSBBQAHZXDSJZHEKLLXV'

let orderId: string = ''

axios.defaults.headers.common["X-VTEX-API-AppToken"] = token;
axios.defaults.headers.common["X-VTEX-API-AppKey"] = apiKey;
axios.defaults.headers.common["Accept"] = "application/json";

export async function someStates(
  ctx: StatusChangeContext,
  next: () => Promise<any>
) {
  console.log(`we have an order! Time to update the player if appropriate. ID:${ctx.body.orderId}`);
  orderId = ctx.body.orderId
  const getOrderEndpoint = `/api/oms/pvt/orders/${orderId}`
  console.log(`orderId is: ${orderId}`);
  console.log(`order endpoint: ${getOrderEndpoint}`);

  axios.get(`${baseUrl}${getOrderEndpoint}`).then((res: any) => {
    console.log(`called getOrder, status is ${res.status}`);
    // console.log(`complete order data is ${JSON.stringify(res.data, null, 4)}`);
  }).catch((err: any) => {
    console.log('in the error');
    console.log(err.response.status);
  })
  await next()
}
