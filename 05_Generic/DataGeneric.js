class DataGeneric {
    constructor(data) {
      this.data = data;
    }
  
    PrintData() {
      console.log(`${this.data}`);
    }
  }
  

  function main() {
    const nama = "Ade Fatkhul Anam"; 
    const nim = "2211104051"; 
    const data = new DataGeneric(`${nama} dengan nim : ${nim}`);
    
    data.PrintData();

    console.log("=== Code Execution Successful ===");
  }
  
  main();