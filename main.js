class AngajatIT {
    constructor(CNP, nume, prenume, vechime, departament) {
        this.CNP = CNP;
        this.nume = nume;
        this.prenume = prenume;
        this.vechime = vechime;
        this.departament = departament
    }
    afiseazaVarsta() {
        var str = this.CNP;
        if (parseInt(str.substring(1, 3)) > 21) { var an = 1900 + parseInt(str.substring(1, 3)); }
        else { var an = 2000 + parseInt(str.substring(1, 3)); }
        var luna = str.substring(3, 5);
        var zi = str.substring(5, 7);
        var an = an + luna + zi;
        var dn = an;
        var an = Number(dn.substr(0, 4));
        var luna = Number(dn.substr(4, 2)) - 1;
        var zi = Number(dn.substr(6, 2));
        var azi = new Date();
        var varsta = azi.getFullYear() - an;
        if (azi.getMonth() < luna || (azi.getMonth() == luna && azi.getDate() < zi)) {
            varsta--;
        }
        console.log("varsta angajatului: " + varsta);
    }
    afiseazaAnulAngajarii() {
        console.log(2021 - this.vechime);
    }
    lucreaza() {
        console.log("neimplementat");
    }
}
class QA extends AngajatIT {
    constructor(CNP, nume, prenume, vechime, departament) {
        super(CNP, nume, prenume, vechime, departament);
    }
    lucreaza() {
        console.log("testeaza software");
    }
}
class Developer extends AngajatIT {
    constructor(CNP, nume, prenume, vechime, departament) {
        super(CNP, nume, prenume, vechime, departament);
    }
    lucreaza() {
        console.log("scrie cod");
    }
}

let angajat1 = new AngajatIT("1990808245028", "Lobontiu", "Bogdan", 3, "DepA");
let angajat2 = new QA("1990808245028", "Lobontiu", "Bogdan", 3, "DepA");
angajat2.lucreaza();
angajat2.afiseazaVarsta();
//final ex1

//ex3
