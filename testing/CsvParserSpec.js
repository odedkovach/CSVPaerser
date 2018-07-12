describe("CSVParser", function () {

  var csvData = "time,status,result\n18:05,200,ok\n18:02,400,not found\n18:04,200,ok";
  var csv = new CsvParser(csvData);
  var row = csv.getRow(1);

  it("should not be  empty", function () {
    expect(csv.isEmpty).toBe(false);
  });

  it("should be empty", function () {
    let csvData = "";
    let csv = new CsvParser(csvData);
    expect(csv.isEmpty).toBe(true);
  });

  it("rows sould work with syntax dictionary like", function () {
    expect(row["result"]).toBe("not found");
  });

  it("should be able the calculate length  ", function () {
    expect(csv.length).toBe(3);
  });

  it("WhereGreaterThan should return all relevant rows ", function () {
    expect(csv.WhereGreaterThan("status", 200).length).toBe(1);
  });

});

csv.WhereGreaterThan("status", 200);
