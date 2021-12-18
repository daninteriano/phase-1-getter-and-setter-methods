// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius;
    }
    get diameter(){
        return this.radius * 2
    }
    get circumference(){
        return Math.PI * (this.radius * 2);
    }
    get area(){
        return Math.PI * (this.radius * this.radius)
    }
    set diameter(variable){
        this.radius = variable/2
    }
    set circumference(variable){
        this.radius = variable/(Math.PI * 2)
    }
    set area(variable){
        //this.radius = Math.sqrt(variable * variable)
        //this.radius = Math.sqrt((this.radius * variable) / Math.PI)
        //his.radius = Math.sqrt(this.radius * this.radius) / Math.PI
        this.radius = Math.sqrt(variable / Math.PI)
    }
}