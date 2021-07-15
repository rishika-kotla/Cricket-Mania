$(document).ready(function(){
    showwk();
    
    })
    
    let num=0;
    let maxplayers=11;
    let playernumber = document.getElementsByClassName('number');
    let batcount=0;
    let ballcount=0;
    let wicketcount=0;
    let allcount=0;
    let teama = document.getElementsByClassName('Team-A-number');
    let teamb = document.getElementsByClassName('Team-B-number');
    let teamacount=0;
    let teambcount=0;
    let score=0;
    let playerscore=document.getElementsByClassName('data');
        
     function showselection(){
       $(".top").hide();
       $(".middleclass").hide();
       $("#ground").hide();
       $(".container").hide();
       $(".table-to-hide").hide();
       $(".hide-me").hide();
       $('.my-selected-table').show();
       $('.active').show();
       $('.active').css('display','initial');
       $('.data').hide();
       $('.add-data').hide();
      
     }
    
    function showball(){
        $(".allrounder-display").hide();
        $(".batsmen-display").hide();
        $(".wicketkeeper-display").hide();
        $(".bowler-display").show();
        document.getElementById("ballshow").style.borderBottom="4px solid blue";
        document.getElementById("allshow").style.borderBottom="none";
        document.getElementById("batshow").style.borderBottom="none";
        document.getElementById("wicketshow").style.borderBottom="none";
        
      }
     
    
      function showbat() {
        $(".allrounder-display").hide();
        $(".bowler-display").hide();
        $(".wicketkeeper-display").hide();
        $(".batsmen-display").show();
        document.getElementById("batshow").style.borderBottom="4px solid blue";
        document.getElementById("ballshow").style.borderBottom="none";
        document.getElementById("allshow").style.borderBottom="none";
        document.getElementById("wicketshow").style.borderBottom="none";
      }
      function showall(){
        $(".bowler-display").hide();
        $(".batsmen-display").hide();
        $(".wicketkeeper-display").hide();
        $(".allrounder-display").show();
        document.getElementById("allshow").style.borderBottom="4px solid blue";
        document.getElementById("batshow").style.borderBottom="none";
        document.getElementById("wicketshow").style.borderBottom="none";
        document.getElementById("ballshow").style.borderBottom="none";
      }
      function showwk(){
        $(".allrounder-display").hide();
        $(".batsmen-display").hide();
        $(".bowler-display").hide();
        $(".wicketkeeper-display").show();
        $(".my-selected-table").hide();
        $('.final-score').hide();
       // $(".final-score").hide();
        document.getElementById("wicketshow").style.borderBottom="4px solid blue";
        document.getElementById("ballshow").style.borderBottom="none";
        document.getElementById("allshow").style.borderBottom="none";
        document.getElementById("batshow").style.borderBottom="none";
      }
      //calling functions to display 
      document.getElementById("batshow").addEventListener("click",showbat);
      document.getElementById("ballshow").addEventListener("click",showball);
      document.getElementById("wicketshow").addEventListener("click",showwk);
      document.getElementById("allshow").addEventListener("click",showall);
    
    
    //scores
    var scores = {
    ViratKohli: [100,87,56,78,49,78,55,68,37,90],
    GlennMaxwell:[50,66,77,88,55,66,77,88,99,0],
    PeterNevill:[32,34,45,56,67,89,90,34,56,78],
    SteveSmith:[56,67,78,34,56,67,89,45,66,12],
    RishabPant:[12,23,45,67,77,66,44,55,33,88],
    AlexCarey:[22,44,55,25,45,67,33,71,18,38],
    Dhoni:[22,33,14,45,25,67,45,34,28,67],
    DavidWarner:[34,45,56,34,44,55,12,34,45,80],
    RohithSharma:[23,45,56,66,33,78,90,45,34,56],
    AaronFinch:[23,34,56,78,90,12,34,56,78,99],
    KLRahul:[22,33,44,55,21,13,45,15,23,67],
    GlennMaxwell:[34,45,56,78,89,45,33,44,66,89],
    HardikPandya:[23,34,34,56,77,88,99,34,56,78],
    ShaneWatson:[24,34,45,67,89,99,34,55,66,12],
    RavindraJadeja:[23,44,55,33,55,66,77,23,45,12],
    KaneRichardson:[23,34,55,66,77,88,12,34,56,78],
    BhuvneshwarKumar:[12,34,12,14,23,45,34,55,34,55],
    NathonLyon:[22,34,56,78,90,12,34,44,33,23],
    Bumrah:[12,23,33,12,13,13,14,15,18,10],
    MitchellStarc:[34,45,56,12,13,14,16,17,18,30],
    YuzvChahal:[22,44,35,25,35,57,32,71,18,38],
    MarcusStoinis:[23,34,34,56,77,88,99,34,56,78],
    MohmdShammi:[23,34,55,66,77,88,12,34,56,78],
    }


    let totalscore=0;


      //   mapping players to ground
    //batsmen display
    $(".batsmen-display").on("click",".Team-1",function(){
        $("#batsmenarea").append($(this).parent().siblings('.image').html());
        // $('.selected-tab').append($('.select').html())
    
      //selected-team
      $(this).parent().parent().addClass('active');
      $('.my-dream-team').append($('.active')).html();
     // $('.active').clone().appendTo('.my-dream-table')
        var bar = document.getElementsByClassName('progress');
        bar[num].style.borderTop =  '14px solid green'; num++;
        playernumber[0].innerText =`${num}/${maxplayers}`;
        $(this).prop('disabled',true);
        //increasing count of team
        batcount++; teamacount++;
        teama[0].innerText = `${teamacount}/${maxplayers}`;

        
        if(batcount>2)
        {
         
           if(wicketcount<1)
          {
            showwk();
            alert('Select Atleast One Wicket Keeper');
            
          }
          else if(allcount<1)
          {
            showall();
            alert('Select Atleast One All Rounder');
          }
          else  if(ballcount<2)
          {
            showball()
            alert('Select Atleast Two Bowlers');
            
          }
        }
         if(batcount>=4)
        {
          $('.add-batsmen').prop('disabled',true);
         // alert('Sorry! You have crossed the Batsmen Limit');
         $(this).addClass("disabled");
        }
        if(num>=11)
     {
       alert('Well Done!! Your Team is Ready..click OK to continue');

       showselection();
     }
    
    
    });
    $(".batsmen-display").on("click",".Team-2",function(){
      $("#batsmenarea").append($(this).parent().siblings('.image').html());
      // $('.selected-tab').append($('.select').html())
      
      var bar = document.getElementsByClassName('progress');
      bar[num].style.borderTop =  '14px solid green'; num++;
      $(this).parent().parent().addClass('active');
      $('.my-dream-team').append($(' .active')).html();
    
      playernumber[0].innerText =`${num}/${maxplayers}`;
      $(this).prop('disabled',true);
       //increasing count of team
      batcount++; teambcount++;
        teamb[0].innerText = `${teambcount}/${maxplayers}`;
        if(batcount>2)
        {
         
           if(wicketcount<1)
          {
            showwk();
            alert('Select Atleast One Wicket Keeper');
            
          }
          else if(allcount<1)
          {
            showall();
            alert('Select Atleast One All Rounder');
          }
          else  if(ballcount<2)
          {
            showball()
            alert('Select Atleast Two Bowlers');
            
          }
        }
        if(batcount>=4)
        { $(this).addClass("disabled1");
          $('.add-batsmen').prop('disabled',true);
         // alert('You have crossed the Batsmen Limit');
        
        }
        if(num>=11)
     {
       alert('Well Done!! Your Team is Ready..click OK to continue');
       showselection();
     }
    
    
    });
    //end..
    //wicket keeper display
    $(".wicketkeeper-display").on("click",".Team-1",function(){
        $("#wicketkeeperarea").append($(this).parent().siblings('.image').html());
        // $('.selected-tab').append($('.select').html())
        $(this).parent().parent().addClass('active');
      $('.my-dream-team').append($(' .active')).html();
        var bar = document.getElementsByClassName('progress');
        bar[num].style.borderTop =  '14px solid green'; num++;
    
       
        playernumber[0].innerText =`${num}/${maxplayers}`;
        $(this).prop('disabled',true);
         //increasing count of team
        wicketcount++; teamacount++;
        teama[0].innerText = `${teamacount}/${maxplayers}`;
        //display
        if(wicketcount>1)
        {
         
           if(allcount<1)
          {
            showall();
            alert('Select Atleast One All Rounder');
            
          }
          else  if(batcount<2)
          {
            showbat()
            alert('Select Atleast Two Batsmen');
            
          }
          else if(ballcount<2)
          {
            showball();
            alert('Select Atleast Two Bowlers');
          }
        }
         if(wicketcount>=2)
        {  $(this).addClass("disabled1");
          $('.add-wicketkeeper').prop('disabled',true);
         // alert('Sorry! You have crossed the Wicket Keeper Limit');
         
        }
        if(num>=11)
     {
       alert('Well Done!! Your Team is Ready..click OK to continue');
       showselection();
     }
        
    });
    $(".wicketkeeper-display").on("click",".Team-2",function(){
      $("#wicketkeeperarea").append($(this).parent().siblings('.image').html());
      // $('.selected-tab').append($('.select').html())
      $(this).parent().parent().addClass('active');
      
      $('.my-dream-team').append($(' .active')).html();
      var bar = document.getElementsByClassName('progress');
      bar[num].style.borderTop =  '14px solid green'; num++;
    
    
      playernumber[0].innerText =`${num}/${maxplayers}`;
      $(this).prop('disabled',true); 
       //increasing count of team
      wicketcount++; teambcount++;
        teamb[0].innerText = `${teambcount}/${maxplayers}`;
        //display
        if(wicketcount>1)
        {
         
           if(allcount<1)
          {
            showall();
            alert('Select Atleast One All Rounder');
            
          }
          else  if(batcount<2)
          {
            showbat()
            alert('Select Atleast Two Batsmen');
            
          }
          else if(ballcount<2)
          {
            showball();
            alert('Select Atleast Two Bowlers');
          }
        }
         if(wicketcount>=2)
        {
          $('.add-wicketkeeper').prop('disabled',true);
          
          $(this).addClass("disabled1");
        }
        if(num>=11)
     {
       alert('Well Done!! Your Team is Ready..click OK to continue');
       showselection();
     }
    
    });
    
    //end..
    //bowler display
    $(".bowler-display").on("click",".Team-1",function(){
        $("#bowlerarea").append($(this).parent().siblings('.image').html());
        // $('.selected-tab').append($('.select').html())
        var bar = document.getElementsByClassName('progress');
        bar[num].style.borderTop =  '14px solid green';
         num++;
         $(this).parent().parent().addClass('active');
         $('.my-dream-team').append($(' .active')).html();
         playernumber[0].innerText =`${num}/${maxplayers}`;
         $(this).prop('disabled',true);
         $(this).addClass("disabled");
          //increasing count of team
         ballcount++; teamacount++;
        teama[0].innerText = `${teamacount}/${maxplayers}`;
        //conditons
        if(ballcount>2)
        {
         
           if(wicketcount<1)
          {
            showwk();
            alert('Select Atleast One Wicket Keeper');
            
          }
          else  if(batcount<2)
          {
            showbat()
            alert('Select Atleast Two Batsmen');
            
          }
          else if(allcount<1)
          {
            showall();
            alert('Select Atleast One All Rounder');
          }
        }
        if(ballcount>=4)
        {
          $('.add-bowler').prop('disabled',true);
         
        }
        if(num>=11)
     {
       //alert('Well Done!! Your Team is Ready..click OK to continue');
       showselection();
     }
    
    });
    $(".bowler-display").on("click",".Team-2",function(){
      $("#bowlerarea").append($(this).parent().siblings('.image').html());
      // $('.selected-tab').append($('.select').html())
      var bar = document.getElementsByClassName('progress');
      bar[num].style.borderTop =  '14px solid green';
       num++;
       $(this).parent().parent().addClass('active');
       $('.my-dream-team').append($(' .active')).html();
    
       playernumber[0].innerText =`${num}/${maxplayers}`;
       $(this).prop('disabled',true);
       $(this).addClass("disabled");
        //increasing count of team
       ballcount++; teambcount++;
        teamb[0].innerText = `${teambcount}/${maxplayers}`;
        if(ballcount>2)
        {
         
           if(wicketcount<1)
          {
            showwk();
            alert('Select Atleast One Wicket Keeper');
            
          }
          else  if(batcount<2)
          {
            showbat()
            alert('Select Atleast Two Batsmen');
            
          }
          else if(allcount<1)
          {
            showall();
            alert('Select Atleast One All Rounder');
          }
        }
         if(ballcount>=4)
        {
          $('.add-bowler').prop('disabled',true);
          //alert('Sorry! You have crossed the Bowler Limit');
        }
        if(num>=11)
     {
       alert('Well Done!! Your Team is Ready..click OK to continue');
       showselection();
     }
    
    });
    //end..
    //all rounder display
    $(".allrounder-display").on("click",".Team-1",function(){
        $("#allrounderarea").append($(this).parent().siblings('.image').html()); 
        // $('.selected-tab').append($('.select').html())
    
        var bar = document.getElementsByClassName('progress');
        bar[num].style.borderTop =  '14px solid green';
        num++; allcount++;
        $(this).parent().parent().addClass('active');
        $('.my-dream-team').append($(' .active')).html();
        playernumber[0].innerText =`${num}/${maxplayers}`;
        $(this).prop('disabled',true);
         //increasing count of team
         teamacount++; 
        teama[0].innerText = `${teamacount}/${maxplayers}`;
        //display
        
        if(allcount>1)
        {
         
           if(wicketcount<1)
          {
            showwk();
            alert('Select Atleast One Wicket Keeper');
            
          }
          else  if(batcount<2)
          {
            showbat()
            alert('Select Atleast Two Batsmen');
            
          }
          else if(ballcount<2)
          {
            showbll();
            alert('Select Atleast Two Bowlers');
          }
        }
        if(allcount>=2)
        {
          $('.add-allrounder').prop('disabled',true);
          
        }
       
        if(num>=11)
     {
      // alert('Well Done!! Your Team is Ready..click OK to continue');
       showselection();
     }
    
    
    });
    $(".allrounder-display").on("click",".Team-2",function(){
      $("#allrounderarea").append($(this).parent().siblings('.image').html()); 
      // $('.selected-tab').append($('.select').html())
      var bar = document.getElementsByClassName('progress');
      bar[num].style.borderTop =  '14px solid green';
      num++;
      $(this).parent().parent().addClass('active');
      $('.my-dream-team').append($(' .active')).html();
      playernumber[0].innerText =`${num}/${maxplayers}`;
      $(this).prop('disabled',true);
       //increasing count of team
       allcount++; teambcount++;
       teamb[0].innerText = `${teambcount}/${maxplayers}`;
       //display
      if(allcount>1)
       {   if(wicketcount<1)
         {
           showwk();
           alert('Select Atleast One Wicket Keeper');
           
         }
         else  if(batcount<2)
         {
           showbat()
           alert('Select Atleast Two Batsmen');
           
         }
         else if(ballcount<2)
         {
           showball();
           alert('Select Atleast Two Bowlers');
         }
        }
       
        if(allcount>=2)
       {
         $('.add-allrounder').prop('disabled',true);
        
       }
       if(num>=11)
     {
       alert('Well Done!! Your Team is Ready..click OK to continue');
       showselection();
     }
    
    });
    //end ..
    
    
    
    //displaying credits
    let credits=0;
    let but_td = document.getElementsByClassName('add-data');
    let creditcount = document.getElementsByClassName('credits');
    let winner = document.getElementById('display-winner')
    var set = new Set();
    $('.add-data').click(function(){
      var cred = $(this).siblings('.data').text();
      credits = credits + parseInt(cred);
      creditcount[0].innerText = `${credits}`;
      var playername = $(this).siblings('.name').text();
      set.add(playername);
      console.log(set);
      let individualscore= scores[playername][Math.floor(Math.random()*10)];
      playerscore[0].innerText= `${individualscore}`;
      totalscore+= individualscore
      console.log(totalscore);
      // console.log(playername);
      // console.log(credits)
    });
   let totaldefaultscore=0;

    let score1 = document.getElementById('score1');
    let score2 = document.getElementById('score2');

    $('.play-btn').click(getwinner = ()=>{
    
      $('.play-now').hide();
      $('.final-score').show();
      for (const key of Object.keys(scores)) 
      {
        if(!set.has(key))
        {
          totaldefaultscore+=scores[key][Math.floor(Math.random()*10)];
          console.log(totaldefaultscore);
        }
      }  let creditsused = 1201- credits; 
       $('.data').show();
       score1.innerText= "Your Score : " + `${totalscore}`+ "   Your Credits : " + `${credits}`;
      score2.innerText= "Opponent Score : " + `${totaldefaultscore}` + "    Opponent Credits : " + `${creditsused}`;
      
       
      if((totalscore/credits)>(totaldefaultscore/creditsused))
      {
           winner.innerHTML= "CONGRATULATIONS!! YOU WON THE MATCH";
      }
      else if( (totalscore/credits)<(totaldefaultscore/creditsused))
      {
        winner.innerHTML= "YOU LOST THE MATCH, BETTER LUCK NEXT TIME";
      }
      else
      {
        winner.innerHTML= "THE MATCH IS TIED";
      }
    });   
 
    $('.disabled1').click(()=>{
        alert("Sorry You have crossed the selection limit of this section");
    })
    