
class CsvParser {


    constructor(csv_string) {

        this._jsonObj = []; // the main object I will keep the data - array of json
        let lines_array = csv_string.split("\n");
        let _headers = lines_array[0].split(','); //_headres with spaces at the end of row
        const headers = _headers.map(string => string.trim())

        let y_index = 0; // looping over the rows
        let x_index = 0; // loopng over the columns

        for (y_index = 1; y_index < lines_array.length; y_index++) {
            let item = {};
            let line_data = lines_array[y_index].split(",");
            for (x_index = 0; x_index <= headers.length - 1; x_index++) {

                item[headers[x_index]] = line_data[x_index];

            }
            this._jsonObj.push(item)

        }
    }

    get isEmpty() {

        if (this._jsonObj.length > 0) {
            return false;
        } else {
            return true;
        }

    }

    get length() {

        return this._jsonObj.length;

    }
    getRow(i) {

        return this._jsonObj[i];

    }

    WhereEquals(column, value) {

        let result = [];
        let i = 0;
        console.log(this._jsonObj[0]);

        for (i = 0; i < this._jsonObj.length; i++) {
            if (this._jsonObj[i][column.trim()].trim() == value)
                result.push(this._jsonObj[i]);
        }
        return result;
    }

    WhereGreaterThan(column, value) {

        let result = [];
        let i = 0;

        for (i = 0; i < this._jsonObj.length; i++) {
            if (this._jsonObj[i][column] > value)
                result.push(this._jsonObj[i]);
        }
        return result;
    }

    WhereLessThan(column, value) {

        let result = [];
        let i = 0;

        for (i = 0; i < this._jsonObj.length; i++) {
            if (this._jsonObj[i][column] < value)
                result.push(this._jsonObj[i]);
        }
        return result;
    }


}




