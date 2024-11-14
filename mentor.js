
const input=require("readline-sync")

function getAvailableChaatItems(chaatItems, availableIngredients){
    let chaatItemNames = [];
    for(let item of chaatItems ){
      let ingr_match_count = 0;
      
      for (let ingr of item.ingredients){
        
        if(availableIngredients.includes(ingr)){
          ingr_match_count++;
        }
      };
      
      if(ingr_match_count ==item.ingredients.length){
        chaatItemNames.push(item.name)
      }
      
    };
    return chaatItemNames;
    
  };
  
  const chaatItems = [
      { name: "Pani Puri", ingredients: ["puri", "pani", "mint", "potato"] },
      { name: "Bhel Puri", ingredients: ["puri", "sev", "potato", "onion", "tamarind"] },
      { name: "Dahi Puri", ingredients: ["puri", "dahi", "potato", "sev"] },
      { name: "Aloo Tikki", ingredients: ["potato", "onion", "chaat masala"] }
  ];
  const availableIngredients = ["puri", "sev", "dahi", "potato", "onion", "chaat masala", "tamarind"];
  
  let results = getAvailableChaatItems(chaatItems,availableIngredients);
  
  console.log(results)



