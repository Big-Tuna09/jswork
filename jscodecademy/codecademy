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
  
  const batch = makeAmountpAequor(30);
  
  
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
  
  
  willSurvive(batch);
  console.log(batch[14])
  console.log(batch[14].willLikelySurvive())
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