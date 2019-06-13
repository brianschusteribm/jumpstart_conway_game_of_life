
//global status
let status = false;
let id = -1; 

//set id 
exports.set_id = (id) =>{
    this.id = id;
}

//status getters/setters
exports.get_status = () =>{
    return this.status; 
}

//kill cell
exports.kill = () =>{
    this.status = false;
}
//live cell
exports.live = () =>{
    this.status = true;
}




