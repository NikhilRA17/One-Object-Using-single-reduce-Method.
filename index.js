// Given Object:
const objarr = [
  {
    _id: '631f410df05fc240b46721dc',
    age: 93,
    name: 'Lessie Horton',
    address: '638 Java Street, Geyserville, Ohio, 2535',
  },
  {
    _id: '631f410d43ee8c20abf14e5c',
    age: 85,
    name: 'Delaney Merritt',
    address: '871 Florence Avenue, Cutter, Hawaii, 3674',
  },
  {
    _id: '631f410d1b81c5239755078d',
    age: 40,
    name: 'Vega Buck',
    address: '652 Applegate Court, Odessa, Wisconsin, 7569',
  },
  {
    _id: '631f410dac986f12dad5a071',
    age: 51,
    name: 'York Mckenzie',
    address: '633 Madeline Court, Barclay, Federated States Of Micronesia, 354',
  },
  {
    _id: '631f410d36be2a8fbd9bffac',
    age: 92,
    name: 'Downs King',
    address: '553 Alton Place, Darbydale, Virgin Islands, 4747',
  },
];

// Using Single Reduce Method by Declaring Variables:
let SumAge = 0;
let Name = [];
let Address = [];

const oneObject = objarr.reduce((acc, ele) => {
  SumAge = SumAge + ele.age;
  Name.push(ele.name);
  Address.push(ele.address);
  return { SumAge, Address, Name };
}, 0);

console.log(oneObject);
