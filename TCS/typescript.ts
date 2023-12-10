console.log('Hello');
 let Name:String='My Name Is ....'
 let regno:number=497210;
 let address:String='karnataka';
 let sales:number=5000;
 let course:String='FSD';
 let ispublished:boolean=true;
 let a:number[]=[1,2,3];
 let student:[number,String]=[1,'Raj'];

 enum size{
 small=1,
 medium=2,
 large=3
 }
 console.log(Name);
 console.log(regno);
 console.log(address);
 console.log(sales);
 console.log(course);
 console.log(ispublished);
 console.log(a);
 console.log(student);
 console.log(size);

 function addNumbers(x: number, y: number): number {
    let sum = x + y;
    return sum;
  }
  
  let result = addNumbers(48, 12);
  console.log(result);
  