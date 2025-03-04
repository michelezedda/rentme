import opelMokka from "/media/opel-mokka.png";
import fiat500 from "/media/fiat-500.png";
import peugeot2008 from "/media/peugeot-2008.png";
import bmwX7 from "/media/bmw-x7.png";
import vwTcross from "/media/vw-t-cross.png";
import fiatDucato from "/media/fiat-ducato.png";
import fiatScudo from "/media/fiat-scudo.png";
import ivecoDaily from "/media/iveco-daily.png";

const cars = [
  {
    id: 0,
    brand: "Opel",
    name: "Mokka",
    img: opelMokka,
    bags: 2,
    suitcases: 3,
    seats: 5,
    doors: 5,
    isManual: true,
    isElecric: false,
    minAge: 21,
    price: "48.78",
  },
  {
    id: 1,
    brand: "Fiat",
    name: "500",
    img: fiat500,
    bags: 1,
    suitcases: 1,
    seats: 4,
    doors: 3,
    isManual: true,
    isElecric: false,
    minAge: 18,
    price: "41.04",
  },
  {
    id: 2,
    brand: "Peugeot",
    name: "2008",
    img: peugeot2008,
    bags: 1,
    suitcases: 2,
    seats: 5,
    doors: 5,
    isManual: false,
    isElecric: true,
    minAge: 21,
    price: "46.29",
  },
  {
    id: 3,
    brand: "BMW",
    name: "X7",
    img: bmwX7,
    bags: 2,
    suitcases: 3,
    seats: 5,
    doors: 5,
    isManual: false,
    isElecric: true,
    minAge: 21,
    price: "60.38",
  },
  {
    id: 4,
    brand: "Volkswagen",
    name: "T-Cross",
    img: vwTcross,
    bags: 2,
    suitcases: 4,
    seats: 5,
    doors: 5,
    isManual: false,
    isElecric: false,
    minAge: 21,
    price: "129.47",
  },
];

const trucks = [
  {
    id: 0,
    brand: "Fiat",
    name: "Ducato",
    img: fiatDucato,
    kg: "3000",
    seats: 3,
    doors: 3,
    isManual: false,
    isElecric: false,
    minAge: 21,
    price: "47.60",
  },
  {
    id: 1,
    brand: "Fiat",
    name: "Scudo",
    img: fiatScudo,
    kg: "2835",
    seats: 3,
    doors: 3,
    isManual: false,
    isElecric: true,
    minAge: 21,
    price: "46.00",
  },
  {
    id: 2,
    brand: "Iveco",
    name: "Daily",
    img: ivecoDaily,
    kg: "3500",
    seats: 3,
    doors: 3,
    isManual: false,
    isElecric: true,
    minAge: 21,
    price: "69.40",
  },
];

const vehicles = { cars, trucks };

export default vehicles;
