class HaloGeneric {
    SapaUser(user) {
      console.log(`Halo user ${user}`);
    }
  }
  
  
  function main() {
    const halo = new HaloGeneric();
    const nama = "Ade Fatkhul Anam"; 
    halo.SapaUser(nama);
    
    console.log("=== Code Execution Successful ===");
  }
  
  main();