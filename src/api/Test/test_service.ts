import template from '../../constants/template.json'

const getThumbNails=async(
    page:any
)=>{
    const tempData:any=template
    const pageLength=Math.ceil(tempData.length/4);
    const start = (page-1)*4;
    const end = page*4;
    let data=[];
    if(end>tempData.length){
        for(let index=start;index<tempData.length;index++){
            data.push(tempData[index]);
        }
    }
    else{
        for(let index=start;index<end;index++){
            data.push(tempData[index]);
        }
    }

    return(
        {
            details:data,
            size:pageLength
        }
    )
};

export default {
    getThumbNails
}