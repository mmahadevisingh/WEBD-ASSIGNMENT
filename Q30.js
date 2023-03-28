<html>
    <head><title>Game</title></head>
    <body>
       
        <script type="text/javascript">

            let n=Math.floor((Math.random()*1000))+1;
            function game(){
               
                let num=parseInt(prompt("Guess a number between 1 and 1000"));
                if(num>1 && num<1000)
                {
                    if(num==n)
                    {
                        alert("Congratulations. You guessed the number!");
                        n=Math.floor((Math.random()*1000))+1;
                        num=parseInt(prompt("Guess a number between 1 and 1000"));
                    }
                else if(n<num)
                {
                    alert("Too high!!Try again.");
                    n=Math.floor((Math.random()*1000))+1;
                    num=parseInt(prompt("Guess a number between 1 and 1000"));
                }
                else 
                {
                    alert("Too low!!Try again.");
                    n=Math.floor((Math.random()*1000))+1;
                    num=parseInt(prompt("Guess a number between 1 and 1000"));
                }
            }

        }
    </script>
</body>
</html>
          