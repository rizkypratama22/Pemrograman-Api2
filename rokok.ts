let data = [
    {
        name: 'Sampoerna Mild',
        fill: ['16'],
        price: 31000,
        stock: '10',
    },
    {
        name: 'Surya Gudang Garam',
        fill: ['12'],
        price: 22000,
        stock: '15',
    },
    {
        name: 'Marlboro Filter Black',
        fill: ['20'],
        price: 32000,
        stock: '20',
    }
];

// Menampilkan semua data dalam format tabel
console.table(data);

// TODO 1: Dapatkan semua data dengan nama tertentu
const getDataByName = (name) => data.find(rokok => rokok.name === name);
console.log("Data dengan nama 'Surya Gudang Garam':", getDataByName('Surya Gudang Garam'));

// TODO 2: Dapatkan data dengan harga tertentu
const getDataByPrice = (price) => data.filter(rokok => rokok.price === price);
console.log("Data dengan harga '22000':", getDataByPrice('22000'));

// TODO 3: Dapatkan data dengan stock tertentu
const getDataByStock = (stock) => data.filter(rokok => rokok.stock === stock);
console.log("Data dengan stock 20:", getDataByStock(20));
