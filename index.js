const person = Object.create(
  {
    calculateAge() {
      console.log("Age:", new Date().getFullYear - this.birthYear);
    },
  },
  {
    name: {
      value: "Kamron",
      enumerable: true, // для показала
      writable: true, // для изменения
      configurable: true, // разрешения для удаления
    },
    birthYear: {
      value: 2003,
      enumerable: false,
      writable: false,
      configurable: false,
    },
    age: {
      get() {
        return new Date().getFullYear() - this.birthYear;
      },
      set(value) {
        document.body.style.background = "yellow";
        console.log("Set age", value);
      },
    },
  }
);

// person.name = "Wick";

for (key in person) {
  if (person.hasOwnProperty(key)) {
    console.log("key", key, person[key]);
  }
}
