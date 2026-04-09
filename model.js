const model = {
    app: {
        app: document.getElementById('app'),
        currentPage: "",
        darkMode: true,
        selectedDiskIndex: 0,
    },
    input: {
        selectedCategory: "",
    },
    data: {
        disks: [
            {
                name: "Proto disk",
                producer: "stiga",
                flightnumber: 5,
                color: "green",
                weight_in_grams: 200,
                img: 'https://store.discgolf.com/cdn/shop/files/proline-hellfire-red-fairway-driver.jpg',
                inmybag: false,
                comments: [

                ]
            },
            {
                name: "Gammel frisbee",
                producer: "Lekebutikken",
                flightnumber: 2,
                color: "hotpink",
                weight_in_grams: 200,
                img: 'https://store.discgolf.com/cdn/shop/files/proline-hellfire-red-fairway-driver.jpg',
                inmybag: false,
                comments: []

            },
            {
                name: "Power Driver",
                producer: "DiscPro",
                flightnumber: 13,
                color: "red",
                weight_in_grams: 174,
                img: 'https://store.discgolf.com/cdn/shop/files/proline-hellfire-red-fairway-driver.jpg',
                inmybag: false,
                comments: []

            },
            {
                name: "Control Driver",
                producer: "FlyHigh",
                flightnumber: 9,
                color: "blue",
                weight_in_grams: 176,
                img: 'https://store.discgolf.com/cdn/shop/files/proline-hellfire-red-fairway-driver.jpg',
                inmybag: false,
                comments: []

            },
            {
                name: "Fairway Glide",
                producer: "AeroDisc",
                flightnumber: 7,
                color: "yellow",
                weight_in_grams: 172,
                img: 'https://store.discgolf.com/cdn/shop/files/proline-hellfire-red-fairway-driver.jpg',
                inmybag: false,
                comments: []

            },
            {
                name: "Stable Mid",
                producer: "GripMaster",
                flightnumber: 5,
                color: "green",
                weight_in_grams: 180,
                img: 'https://store.discgolf.com/cdn/shop/files/proline-hellfire-red-fairway-driver.jpg',
                inmybag: false,
                comments: []
            },
            {
                name: "Understable Mid",
                producer: "SpinTech",
                flightnumber: 4,
                color: "purple",
                weight_in_grams: 177,
                img: 'https://store.discgolf.com/cdn/shop/files/proline-hellfire-red-fairway-driver.jpg',
                inmybag: false,
                comments: []
            },
            {
                name: "Classic Putter",
                producer: "PuttLine",
                flightnumber: 2,
                color: "white",
                weight_in_grams: 173,
                img: 'https://store.discgolf.com/cdn/shop/files/proline-hellfire-red-fairway-driver.jpg',
                inmybag: false,
                comments: [

                ]

            },
            {
                name: "Soft Touch Putter",
                producer: "GripMaster",
                flightnumber: 3,
                color: "pink",
                weight_in_grams: 171,
                img: 'https://store.discgolf.com/cdn/shop/files/proline-hellfire-red-fairway-driver.jpg',
                inmybag: false,
                comments: []

            },
            {
                name: "Wind Fighter",
                producer: "StormDiscs",
                flightnumber: 10,
                color: "orange",
                weight_in_grams: 178,
                img: 'https://store.discgolf.com/cdn/shop/files/proline-hellfire-red-fairway-driver.jpg',
                inmybag: false,
                comments: []

            },
            {
                name: "Distance King",
                producer: "MaxFlight",
                flightnumber: 14,
                color: "black",
                weight_in_grams: 169,
                img: 'https://store.discgolf.com/cdn/shop/files/proline-hellfire-red-fairway-driver.jpg',
                inmybag: false,
                comments: []

            },
            {
                name: "Glow Fairway",
                producer: "NightPlay",
                flightnumber: 6,
                color: "glow",
                weight_in_grams: 175,
                img: 'https://store.discgolf.com/cdn/shop/files/proline-hellfire-red-fairway-driver.jpg',
                inmybag: false,
                comments: []

            }
        ],
        sortedDisks: []
    }

};