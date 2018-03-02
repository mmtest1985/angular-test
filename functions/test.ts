
class Example {
    
    msg: string = 'Hello world';
    
    showMsg() {
        console.log(this.msg)
    }
}


var example = new Example();
example.showMsg();