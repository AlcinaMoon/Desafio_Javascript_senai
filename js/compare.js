
//car
let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.nome = nome;
       this.preco = preco;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.volumeCacamba = volumeCacamba;
       this.roda = roda;
       this.image = image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if (carClass instanceof Car) {       
        if (el.checked) {
            // Adiciona o carro apenas se houver menos de 2 e não estiver na lista
            if (carArr.length >= 2) {
                alert("Você só pode comparar 2 veículos por vez.");
                el.checked = false;
                return;
            }

            if (GetCarArrPosition(carArr, carClass) === -1) {
                carArr.push(carClass);
            }

        } else {
            // Remove o carro se o checkbox for desmarcado
            let pos = GetCarArrPosition(carArr, carClass);
            if (pos > -1) {
                carArr.splice(pos, 1);
            }
        }
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if (carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    if (carArr.length < 2) return;

    let car1 = carArr[0];
    let car2 = carArr[1];

    // Atualiza os campos da tabela
    document.getElementById("car1-name").textContent = car1.nome;
    document.getElementById("car2-name").textContent = car2.nome;

    document.getElementById("car1-preco").textContent = car1.preco;
    document.getElementById("car2-preco").textContent = car2.preco;

    document.getElementById("car1-alturaVeiculo").textContent = car1.alturaVeiculo + " cm";
    document.getElementById("car2-alturaVeiculo").textContent = car2.alturaVeiculo + " cm";

    document.getElementById("car1-motor").textContent = car1.motor;
    document.getElementById("car2-motor").textContent = car2.motor;

    document.getElementById("car1-potencia").textContent = car1.potencia;
    document.getElementById("car2-potencia").textContent = car2.potencia;
}