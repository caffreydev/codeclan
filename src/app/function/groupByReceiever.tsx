const groupByReceiver = (title, requests) => {
   
const filteredReceiver = [...requests]
 const arr = filteredReceiver.filter((eachRequest) => {

    if (eachRequest.receiver === title && eachRequest.sender !== title) {
         return eachRequest
    }
    
 })

return arr 
}






export default groupByReceiver