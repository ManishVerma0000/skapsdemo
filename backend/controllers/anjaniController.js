
const XLSX = require('xlsx');
const anjani = async (reqm, res) => {
    try {

        const workbook = XLSX.readFile('document/accidentscreen.xlsx');
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const range = XLSX.utils.decode_range(worksheet['!ref']);
        const rowCount = range.e.r - range.s.r + 1;
        let arrayI = []
        let arrayJ = []
        let arrayk = []
        let array1 = ["R"]
        let array2 = ["S"]
        let array3 = ['T']
        for (let j = 1; j < rowCount; j++) {
            const cellAddress = `${array1[0] + 2}`
            const cell = worksheet[cellAddress];
            const cellValue = cell ? cell.v : undefined;
            arrayI.push(cellValue)
        }
        for (let j = 1; j < rowCount; j++) {
            const cellAddress = `${array2[0] + 2}`
            const cell = worksheet[cellAddress];
            const cellValue = cell ? cell.v : undefined;
            arrayJ.push(cellValue)
        }
        for (let j = 1; j < rowCount; j++) {
            const cellAddress = `${array3[0] + 2}`
            const cell = worksheet[cellAddress];
            const cellValue = cell ? cell.v : undefined;
            arrayk.push(cellValue)
        }
        const stringWithQuotes = arrayI[0];
        const stringWithoutQuotes = stringWithQuotes.replace(/^['"]|['"]$/g, '');
        var day = stringWithoutQuotes.split("-")[0];
        var month = stringWithoutQuotes.split("-")[1];
        var year = stringWithoutQuotes.split("-")[2];
        var date = new Date(year, month - 1, day)
        const timestamp1 = date.getTime()
        const timeDifferenceInMilliseconds = parseInt(Date.parse(new Date())) - parseInt(timestamp1);
        const seconds = Math.floor(timeDifferenceInMilliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        var startDate = new Date();

        var day = startDate.getDate();
        var month = startDate.getMonth() + 1;
        var year = startDate.getFullYear();

        var formattedMonth = month < 10 ? '0' + month : month;

        var formattedDate = day + '-' + formattedMonth + '-' + year;

        const data = {
            "dayswithoutaccident": days,
            "lastaccidentdate": stringWithoutQuotes,
            "currentdate": formattedDate,
            "accidentfress": arrayJ[0].split('"'),
            "quotes": arrayk[0].split('"')
        }
        await res.status(200).send({ message: "this is the result", data: data })



    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

module.exports = anjani