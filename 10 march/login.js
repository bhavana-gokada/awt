let emp_name ="name";
let emp_id="id";
let details={
    getemp_Name:function(){
        return this.emp_name;
    },
    getemp_id:function(){
        return this.emp_id;
    },
    setemp_id:function(id){
        this.emp_id=id;
    }
}
export default details;