"use strict";
// Створити "абстрактний" клас Figure3D з властивістю name (рядок не порожній)
// і методом обчислити об'єм.

// Створити класи нащадки: сфера, куб, циліндр.
// Обов'яково прописати сеттери та геттери для властивостей!
// Не забувати про виброс виключень.

// Використовувати конструкцію try/catch
// Створити по одному екземпляру кожного класу.

// Створити функцію showVolume3DFigure, яка приймає об'єкт і повертає рядок виду "[назва фигури] has volume: [значення об'єму].

class Figure3D {
  constructor(name) {
    this.name = name;
  }
  calculateVolume() {}
}
class Sphere extends Figure3D {
  constructor(radius = 1) {
    super("Sphere");
    this.radius = radius;
  }
  get radius() {
    return this.radius;
  }
  set radius(value) {
    if (typeof value !== "number") {
      throw new TypeError("Must be number");
    }
    if (value <= "0") {
      throw new RangeError("Must be bigger than 0");
    }
    return (this._radius = value);
  }
  calculateVolume() {
    return 4 * Math.PI * (this._radius * this._radius);
  }
}
class Cube extends Figure3D {
  constructor(line = 1) {
    super("Cube");
    this.line = line;
  }
  get line() {
    return this.line;
  }
  set line(value) {
    if (typeof value !== "number") {
      throw new TypeError("Must be number");
    }
    if (value <= "0") {
      throw new RangeError("Must be bigger than 0");
    }
    return (this._line = value);
  }
  calculateVolume() {
    return this._line * this._line * this._line;
  }
}
class Cylinder extends Figure3D {
  constructor(diamentr, height) {
    super("Cylinder");
    this.diamentr = diamentr;
    this.height = height;
  }
  get diamentr() {
    return this._diamentr;
  }
  set diamentr(value) {
    if (typeof value !== "number") {
      throw new TypeError("Must be number");
    }
    if (value <= "0") {
      throw new RangeError("Must be bigger than 0");
    }
    return (this._diamentr = value);
  }
  get height() {
    return this._height;
  }
  set height(value) {
    if (typeof value !== "number") {
      throw new TypeError("Must be number");
    }
    if (value <= "0") {
      throw new RangeError("Must be bigger than 0");
    }
    return (this._height = value);
  }
  calculateVolume() {
    const radius = this._diamentr / 2;
    const area = Math.PI * (radius * radius) * this.height;
    return area;
  }
}
const showVolume3DFigure = (obj) => {
  if (obj instanceof Figure3D) {
    return console.log(`${obj.name} has volume : ${obj.calculateVolume()}`);
  }
  throw new TypeError("Must be Figure3D");
};
try {
  const sphere1 = new Sphere(5);
  const cube1 = new Cube(5);
  const cilinder1 = new Cylinder(5, 10);
  showVolume3DFigure(sphere1);
  showVolume3DFigure(cube1);
  showVolume3DFigure(cilinder1);
} catch (error) {
  console.log(error);
}
