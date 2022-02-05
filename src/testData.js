const donutChartData = [
    {group: "Sanusi", measure: 0.30},
    {group: "Rabiu", measure: 0.25},
    {group: "Kabiru", measure: 0.15},
    {group: "Ahmad", measure: 0.05},
    {group: "Yusuf", measure: 0.18},
    {group: "Bello", measure:0.04},
    {group: "Salis", measure: 0.03}
];

const barChartData = [
    { group: "All", category: "Oranges", measure: 63850.4963 }, 
    { group: "All", category: "Apples", measure: 78258.0845 }, 
    { group: "All", category: "Grapes", measure: 60610.2355 }, 
    { group: "All", category: "Bananas", measure: 30493.1686 }, 
    { group: "All", category: "Mangoes", measure: 56097.0151 }, 
    { group: "Sanusi", category: "Oranges", measure: 19441.5648 }, 
    { group: "Sanusi", category: "Apples", measure: 25922.0864 }, 
    { group: "Sanusi", category: "Grapes", measure: 9720.7824 }, 
    { group: "Sanusi", category: "Bananas", measure: 6480.5216 }, 
    { group: "Sanusi", category: "Mangoes", measure: 19441.5648 }, 
    { group: "Rabiu", category: "Oranges", measure: 22913.2728 }, 
    { group: "Rabiu", category: "Apples", measure: 7637.7576 }, 
    { group: "Rabiu", category: "Grapes", measure: 23549.7526 }, 
    { group: "Rabiu", category: "Bananas", measure: 1909.4394 }, 
    { group: "Rabiu", category: "Mangoes", measure: 7637.7576 }, 
    { group: "kabiru", category: "Oranges", measure: 1041.5124 }, 
    { group: "Kabiru", category: "Apples", measure: 2430.1956 }, 
    { group: "Kabiru", category: "Grapes", measure: 15275.5152 }, 
    { group: "Kabiru", category: "Bananas", measure: 4166.0496 }, 
    { group: "Kabiru", category: "Mangoes", measure: 11803.8072 }, 
    { group: "Ahmad", category: "Oranges", measure: 7406.3104 }, 
    { group: "Ahmad", category: "Apples", measure: 2545.9192 }, 
    { group: "Ahmad", category: "Grapes", measure: 1620.1304 }, 
    { group: "Ahmad", category: "Bananas", measure: 8563.5464 }, 
    { group: "Ahmad", category: "Mangoes", measure: 3008.8136 }, 
    { group: "Yusuf", category: "Oranges", measure: 7637.7576 }, 
    { group: "Yusuf", category: "Apples", measure: 35411.4216 }, 
    { group: "Yusuf", category: "Grapes", measure: 8332.0992 }, 
    { group: "Yusuf", category: "Bananas", measure: 6249.0744 }, 
    { group: "Yusuf", category: "Mangoes", measure: 11803.8072 }, 
    { group: "Bello", category: "Oranges", measure: 3182.399 }, 
    { group: "Bello", category: "Apples", measure: 867.927 }, 
    { group: "Bello", category: "Grapes", measure: 1808.18125 }, 
    { group: "Bello", category: "Bananas", measure: 795.59975 }, 
    { group: "Bello", category: "Mangoes", measure: 578.618 }, 
    { group: "Salis", category: "Oranges", measure: 2227.6793 }, 
    { group: "Salis", category: "Apples", measure: 3442.7771 }, 
    { group: "Salis", category: "Grapes", measure: 303.77445 }, 
    { group: "Salis", category: "Bananas", measure: 2328.93745 }, 
    { group: "Salis", category: "Mangoes", measure: 1822.6467 }, 
];

const lineChartData = [
    { group: "All", category: 2018, measure: 289309 }, 
    { group: "All", category: 2019, measure: 234998 }, 
    { group: "All", category: 2020, measure: 310900 }, 
    { group: "All", category: 2021, measure: 223900 }, 
    { group: "All", category: 2012, measure: 234500 }, 
    { group: "Sanusi", category: 2018, measure: 81006.52 }, 
    { group: "Sanusi", category: 2019, measure: 70499.4 }, 
    { group: "Sanusi", category: 2020, measure: 96379 }, 
    { group: "Sanusi", category: 2021, measure: 64931 }, 
    { group: "Sanusi", category: 2012, measure: 70350 }, 
    { group: "Rabiu", category: 2018, measure: 63647.98 }, 
    { group: "Rabiu", category: 2019, measure: 61099.48 }, 
    { group: "Rabiu", category: 2020, measure: 87052 }, 
    { group: "Rabiu", category: 2021, measure: 58214 }, 
    { group: "Rabiu", category: 2012, measure: 58625 }, 
    { group: "Ahmad", category: 2018, measure: 23144.72 }, 
    { group: "Ahmad", category: 2019, measure: 14099.88 }, 
    { group: "Ahmad", category: 2020, measure: 15545 }, 
    { group: "Ahmad", category: 2021, measure: 11195 }, 
    { group: "Ahmad", category: 2012, measure: 11725 }, 
    { group: "Kabiru", category: 2018, measure: 34717.08 }, 
    { group: "Kabiru", category: 2019, measure: 30549.74 }, 
    { group: "Kabiru", category: 2020, measure: 34199 }, 
    { group: "Kabiru", category: 2021, measure: 33585 }, 
    { group: "Kabiru", category: 2012, measure: 35175 }, 
    { group: "Yusuf", category: 2018, measure: 69434.16 }, 
    { group: "Yusuf", category: 2019, measure: 46999.6 }, 
    { group: "Yusuf", category: 2020, measure: 62180 }, 
    { group: "Yusuf", category: 2021, measure: 40302 }, 
    { group: "Yusuf", category: 2012, measure: 42210 }, 
    { group: "Bello", category: 2018, measure: 7232.725 }, 
    { group: "Bello", category: 2019, measure: 4699.96 }, 
    { group: "Bello", category: 2020, measure: 6218 }, 
    { group: "Bello", category: 2021, measure: 8956 }, 
    { group: "Bello", category: 2012, measure: 9380 }, 
    { group: "Salis", category: 2018, measure: 10125.815 }, 
    { group: "Salis", category: 2019, measure: 7049.94 }, 
    { group: "Salis", category: 2020, measure: 9327 }, 
    { group: "Salis", category: 2021, measure: 6717 }, 
    { group: "Salis", category: 2012, measure: 7035 }
];

export {donutChartData, barChartData, lineChartData}