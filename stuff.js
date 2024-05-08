// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ["A", "T", "C", "G"];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };
  
  const pAequorFactory = (specimenNum,dna) => {
    if (dna.every(num => ( typeof num === 'string')) && 
    dna.length === 15 && typeof specimenNum === 'number') {
      return { specimenNum,
      dna,
        mutate() {
          const base = Math.floor(Math.random() * 15)
          let x = this.dna[base];
          let newX ='';
           do {
            newX = returnRandBase();
          } while ( x === newX) ;
            this.dna[base] = newX;
            //console.log(base);
        } ,
        compareDNA (obj) {
          let numIdentical = 0;
          for (i = 0; i < 15 ; i++){
            if(this.dna[i] === obj.dna[i])
            numIdentical++;
          } 
          let percentage = numIdentical / 15 * 100;
          console.log(`specimen #${this.specimenNum} and specimen #${obj.specimenNum} have ${percentage}% DNA in common`)
        },
        willLikelySurvive () {
          let CorG = 0
          for (i = 0; i< 15; i++) {
            if (this.dna[i] === 'C' || this.dna[i] === 'G'){
              CorG++;
            }
          }
          if ((CorG / 15) >= 0.6 ) {
            return true;
          } else {
            
            return false;
          }
        }
    } 
    }else {
      console.log('wrong data type')
      
    };
  };
  
  const makeAmountpAequor = (amount) => {
   let batchArr =[];
   let dna = []
   for (i = 0 ; i < amount ; i++) {
    dna = mockUpStrand();
    batchArr.push(pAequorFactory(i+1, dna));
   }
   return batchArr
  }
  
  const batchpAequor = makeAmountpAequor(30);
  
  
  const willSurvive = arr => {
    let survives = 0
    let notSurvive = 0
    let X =false
    for (j = 0; j < arr.length; j++) {
      X = arr[j].willLikelySurvive();
      if (X) {survives++;
        } else {notSurvive++;}
    } 
    console.log(`${survives} specimens survive and ${notSurvive} will not survive`);
  }
  
  
  willSurvive(batchpAequor);
  console.log(batchpAequor[14])
  console.log(batchpAequor[14].willLikelySurvive())
  /*
   let dna1 = mockUpStrand();
   let dna2 = mockUpStrand();
  let pAequor1 = pAequorFactory(1 , dna1);
  let pAequor2 = pAequorFactory(2 , dna2);
  
  pAequor1.mutate();
  console.log(pAequor1.willLikelySurvive());
  console.log(pAequor2.willLikelySurvive());
  pAequor1.compareDNA(pAequor2)
  console.log(pAequor1.dna)
  console.log(pAequor2.dna)
  */


  // Credit Cards.

  // All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [ valid1, valid2, valid3, valid4, valid5, invalid1,invalid2, invalid3,invalid4, invalid5,mystery1, mystery2, mystery3, mystery4, mystery5,];

// Add your functions below:

const validateCred = (arr) => {
  const newArr = [];
  let holder = 0;
  for (i = arr.length; i > 0; i--) {
    if (i === arr.length || (arr.length - i) % 2 === 0) {
      newArr.push(arr[i - 1]);
    } else {
      holder = arr[i - 1] * 2;
      if (holder > 9) {
        holder = holder - 9;
      }
      newArr.push(holder);
    }
  }
  //console.log(newArr);
  const sum = newArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  //console.log(sum);
  if (sum % 10 === 0) {
    return true;
  } else {
    return false;
  }
};

//console.log(validateCred(batch[11]))

//batch find invalid;
const findInvalidCards = (batchArr) => {
  const invalidCards = [];
  let valid = true
  for (j = 0; j < batchArr.length ; j++ ) {
    valid = validateCred(batchArr[j]);
    if (valid === false) {
    invalidCards.push(batchArr[j])
    }
  }
  return invalidCards;
};


//returns company names
const idInvalidCardCompanies = invalidArr => {
  const companies = [];
    if (invalidArr.some(card => card[0] === 3)){
      companies.push('Amex');
      }
     if (invalidArr.some(card => card[0] === 4)){
      companies.push('Visa');
      }
       if (invalidArr.some(card => card[0] === 5)){
      companies.push('Mastercard');
      }
      if (invalidArr.some(card => card[0] === 6)){
      companies.push('Discover');
      }
  return companies
}
//convert string into array
const convertStringToArray = str => {
  let CCNumArray = []
  for (k = 0 ; k < str.length; k++){
    CCNumArray.push(parseInt(str[k]))
  }
  return CCNumArray;
}


console.log(idInvalidCardCompanies(findInvalidCards(batch)))