let UTS=100;
let Tugas=100;
let UAS=100;

let nilaiakhir= (0.3 * UTS) + (0.4 * Tugas) + (0.3 * UAS);

let nilaihuruf;

if(nilaiakhir >=80){
    nilaihuruf="A"
}
else if(nilaiakhir >=70){
    nilaihuruf="B"
}
else if(nilaiakhir >=60){
    nilaihuruf="C"
}
else if(nilaiakhir >=40){
    nilaihuruf="D"
}
else{nilaihuruf="E"}

console.log("nilai akhir",nilaiakhir);
console.log("nilaihuruf",nilaihuruf);