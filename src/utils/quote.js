const request=require('request')
require('any-promise/register/q')
const rp = require('request-promise-any')

const quote_day=async ()=>{
    const url="http://quotes.rest/qod.json?category=inspire"
    const data=await rp({url, json:true})
    return data
}
// quote_day().then((response)=>{
//     console.log(response.contents.quotes[0].quote)
// })

module.exports=quote_day