var Example = /** @class */ (function () {
    function Example() {
        this.msg = 'Hello world';
    }
    Example.prototype.showMsg = function () {
        console.log(this.msg);
    };
    return Example;
}());
var example = new Example();
example.showMsg();
