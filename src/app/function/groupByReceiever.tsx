const groupByReceiver = (title, requests) => {
    console.log(requests, '<<<<<<<<<<<<<,')
const filteredReceiver = [...requests]
 const arr = filteredReceiver.filter((eachRequest) => {

    if (eachRequest.receiver === title) {
         return eachRequest
    }
    
 })

return arr 
}






export default groupByReceiver