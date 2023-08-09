const groupByReceiver = (title, requests) => {
    console.log(requests, '<<<<<<<<<<<<<,')
const filteredReceiver = [...requests]
 const arr = filteredReceiver.filter((eachRequest) => {

    if (eachRequest.sender !== title) {
         return eachRequest
    }
    
 })
 console.log(arr, '<<<<<<<<<<<<<<<<<<<<,,,,filtered')
return arr 
}






export default groupByReceiver