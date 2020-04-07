
     var myForm: HTMLElement =document.querySelector("#hangman");
     var letter: HTMLInputElement=document.querySelector("#letter");
     var  answer: HTMLElement=document.querySelector("#hangman p");
     var  wrongAnswer: HTMLElement=document.querySelector("#hangman strong ");
     var counter: HTMLElement=document.querySelector("#hangman h5");
     console.log(myForm);
     console.log(letter);
     console.log(answer);
     console.log(wrongAnswer);
     console.log(counter);
    
        var words:Array<string>=["JAVA","NODE","HTML","CSS","REACT","BOOT","SAW","ROAD"];
         var randomWords:string=words[Math.floor((Math.random() * words.length))];
        var answerCheck:Array<string>= [];
        var count:number=0;
        function createWords():any
            {
            for(var i=0;i<randomWords.length;i++)
            {
                answerCheck[i]="_";
                
            }
            this.answer.innerHTML +=this.answerCheck.join(" ");
            
              
            }

          this.createWords();
          function letterCheck():any
         {
            

            const inputValue:string =this.letter.value;
            console.log(inputValue);
             if( inputValue.length>0)
         {
             for(var i=0;i < this.randomWords.length; i++)
             {
      
             if(randomWords[i]==inputValue)
             {        
             answerCheck[i]=inputValue;
             console.log(answerCheck);     
             
             }
             else
                 {
                  this.wrongAnswer.innerHTML = "Wrong Answer";
                  
                 }
                }
                count++;  
                
                
                this.answer.textContent = answerCheck.join("");
                 this.counter.innerHTML = "No Of Clicks" + count;
                 
        
             }
                
                
    }
              
   

           
        

        myForm.addEventListener("submit",event =>{
        event.preventDefault();
         letterCheck();

        
            
    
});


