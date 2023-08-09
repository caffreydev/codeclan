const groupByEmptyReceiever = (requests: any[]) => {

const arr = requests.filter((eachReq) => {
    if(eachReq.receiver === '') {
        return eachReq
    }
})

return arr

}






export default groupByEmptyReceiever